from flask import Flask, request, Response
from DomainModule.Direction import Direction
from CommandsModule.MovementCommand import MovementCommand

__panda = None
__app = Flask("lawl")
__camera = None
__condition = None

def setup(panda, camera, condition):
    global __panda
    global __camera
    global __condition
    __panda = panda
    __camera = camera
    __condition = condition

def run():
    import os
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    PORT = 5555
    __app.run(HOST, PORT)

def get_app() -> Flask:
    return __app

@__app.route('/test', methods=['POST'])
def hello():
    return "Alive"

DEMO_PAGE = """
<html>
  <head>
    <title>Video Streaming Demonstration</title>
  </head>
  <body>
    <h1>Video Streaming Demonstration</h1>
    <img src="camera.mjpeg">
  </body>
</html>
"""
@__app.route('/cameraDemo', methods=['GET'])
def demo_page():
    return DEMO_PAGE

def stream_generator():
    while True:
        with __condition:
            __condition.wait()
            yield __camera.get_frame()

@__app.route('/camera.mjpeg', methods=['GET'])
def camera_feed():
    return Response(stream_generator(), mimetype = 'multipart/x-mixed-replace; boundary=frame')


@__app.route('/movement', methods=['POST'])
def movement():
    payload = request.json
    command = MovementCommand(direction=payload['direction'], speed=payload['speed'])
    state = __panda.handle_movement(command)
    return state

from flask import Flask, request, Response
import json
from DomainModule.Direction import Direction
from CommandsModule.MovementCommand import MovementCommand
from CommandsModule.HeadlightCommand import HeadlightCommmand

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

@__app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response

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
            try:
                __condition.wait()
                yield __camera.get_frame()
            finally:
                pass

@__app.route('/camera.mjpeg', methods=['GET'])
def camera_feed():
    return Response(stream_generator(), mimetype = 'multipart/x-mixed-replace; boundary=frame')

@__app.route('/movement', methods=['POST'])
def movement():
    payload = request.json
    command = MovementCommand(direction=payload['direction'], speed=payload['speed'])
    state = __panda.handle_movement(command)
    return json.dumps(state, default=lambda x: x.__dict__)

@__app.route('/headlights', methods=['POST'])
def headlights():
    payload = request.json
    command = HeadlightCommmand(enabled=payload['enabled'])
    state = __panda.handle_headlights(command)
    return json.dumps(state, default=lambda x: x.__dict__)

@__app.route('/state', methods=['GET'])
def state():
    state = __panda.get_state()
    response = json.dumps(state, default=lambda x: x.__dict__)
    return response;
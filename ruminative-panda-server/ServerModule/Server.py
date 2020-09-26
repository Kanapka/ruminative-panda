from flask import Flask, request, Response
import json
from DomainModule.Direction import Direction
from CommandsModule.MovementCommand import MovementCommand
from CommandsModule.HeadlightCommand import HeadlightCommmand
from DomainModule.RealCamera import Camera

__panda = None
__app = Flask("lawl")


def setup(panda):
    global __panda
    __panda = panda

def run():
    import os
    PORT = 5555
    __app.run('0.0.0.0', PORT)

def get_app() -> Flask:
    return __app

@__app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS, GET'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response

@__app.route('/test', methods=['POST'])
def hello():
    return "Alive"


def gen(camera):
    """Video streaming generator function."""
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@__app.route('/camera.mjpg', methods=['GET'])
def camera_feed():
    return Response(gen(Camera()), mimetype = 'multipart/x-mixed-replace; boundary=frame')

@__app.route('/movement', methods=['POST'])
def movement():
    payload = request.json
    command = MovementCommand(direction=payload['direction'], speed=payload['speed'], curve=payload['curve'])
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
from flask import Flask, request
from DomainModule.Direction import Direction
from DomainModule.FakePanda import FakePanda
from CommandsModule.MovementCommand import MovementCommand

__panda = None
__app = Flask("lawl")

def setup(panda):
    global __panda
    __panda = panda

    pass

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

@__app.route('/movement', methods=['POST'])
def movement():
    payload = request.json
    command = MovementCommand(direction=payload['direction'], speed=payload['speed'])
    state = __panda.handle_movement(command)
    return state

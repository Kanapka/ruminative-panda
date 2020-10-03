from CommandsModule.MovementCommand import MovementCommand
from CommandsModule.HeadlightCommand import HeadlightCommmand
from DomainModule.State import State
from DomainModule.Direction import Direction
"""
should state be mapped to robot after each command? updating state and 
pins at the same time seems simpler, but will get out of sync at some point

"""


class Panda(object):

    def __init__(self, robot, servo): 
        self.state = State()
        self.robot = robot
        self.servo = servo

    def get_state(self) -> State:
        return self.state

    def handle_movement(self, command: MovementCommand) -> State:

        self.state.motors.from_command(command)

        curve_scale = 0.4
        curve = command.curve
        if curve > 1:
            curve = 1
        if curve < -1:
            curve = -1

        curve = curve * curve_scale

        self.servo.value = curve

        if command.direction == Direction.RotateRight:
            self.robot.right(command.speed)

        if command.direction == Direction.RotateLeft:
            self.robot.left(command.speed)

        if command.direction == Direction.Stopped:
            self.state.motors.set_speed(0)

        if command.direction == Direction.Forward:
            self.robot.forward(command.speed)

        if command.direction == Direction.Backward:
            self.robot.backward(command.speed)

        return self.state

    def handle_headlights(self, command: HeadlightCommmand) -> State:
        self.state.headlights.set_enabled(command.enabled)
        return self.state

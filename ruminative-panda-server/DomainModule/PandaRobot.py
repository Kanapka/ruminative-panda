from CommandsModule.MovementCommand import MovementCommand
from CommandsModule.HeadlightCommand import HeadlightCommmand
from DomainModule.State import State
from DomainModule.Direction import Direction
"""
should state be mapped to robot after each command? updating state and 
pins at the same time seems simpler, but will get out of sync at some point

"""


class Panda(object):

    def __init__(self, robot): 
        self.state = State()
        self.robot = robot

    def get_state(self) -> State:
        return self.state

    def handle_movement(self, command: MovementCommand) -> State:

        self.state.motors.from_command(command)

        #special cases first to be done with them
        if self.state.motors.curve >= 1:
            self.robot.right(command.speed)
            return self.state

        elif self.state.motors.curve <= -1:
            self.robot.left(command.speed)
            return self.state

        if(command.direction == Direction.Stopped):
            self.state.motors.set_speed(0)
            return self.state

        if command.direction == Direction.Forward:
            if command.curve > 0:
                self.robot.forward(command.speed, curve_right=command.curve)
            else: 
                self.robot.forward(command.speed, curve_left=command.curve)

        if command.direction == Direction.Backward:
            if command.curve > 0:
                self.robot.backward(command.speed, curve_right=command.curve)
            else:
                self.robot.backward(command.speed, curve_left=command.curve)

        return self.state

    def handle_headlights(self, command: HeadlightCommmand) -> State:
        self.state.headlights.set_enabled(command.enabled)
        return self.state

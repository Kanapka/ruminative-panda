from CommandsModule.MovementCommand import MovementCommand
from CommandsModule.HeadlightCommand import HeadlightCommmand
from DomainModule.State import State
from DomainModule.Direction import Direction
"""
should state be mapped to robot after each command? updating state and 
pins at the same time seems simpler, but will get out of sync at some point

"""


class PandaRobot(object):

    def __init__(self, robot): 
        self.state = State()
        self.robot = robot

    def get_state(self) -> State:
        return self.state

    def handle_movement(self, command: MovementCommand) -> State:
        direction = command.direction
        speed = command.speed if command.speed <= 1 and command.speed >= 0 else 0
        if direction == Direction.Forward:
            self.state.motors.go_forward()
            self.robot.forward(speed)

        elif direction == Direction.Backward:
            self.state.motors.go_backward()
            self.robot.backward(speed)

        elif direction == Direction.Left:
            self.state.motors.go_left()
            self.robot.right(speed)

        elif direction == Direction.Right:
            self.state.motors.go_right()
            self.robot.right(speed)

        elif direction == Direction.Stopped:
            speed = 0
            self.state.motors.go_stop()
            self.robot.stop()

        self.state.motors.set_speed(speed)
        return self.state

    def handle_headlights(self, command: HeadlightCommmand) -> State:
        self.state.headlights.set_enabled(command.enabled)
        return self.state

from CommandsModule.MovementCommand import MovementCommand
from CommandsModule.HeadlightCommand import HeadlightCommmand
from DomainModule.State import State
from DomainModule.Direction import Direction

class PandaRobot(object):

    def __init__(self): 
        self.state = State()
        pass

    def get_state(self) -> State:
        return self.state

    def handle_movement(self, command: MovementCommand) -> State:
        direction = command.direction
        speed = command.speed if command.speed <= 1 and command.speed >= 0 else 0
        if direction == Direction.Forward:
            self.state.motors.go_forward()

        elif direction == Direction.Backward:
            self.state.motors.go_backward()

        elif direction == Direction.Left:
            self.state.motors.go_left()

        elif direction == Direction.Right:
            self.state.motors.go_right()

        elif direction == Direction.Stopped:
            speed = 0
            self.state.motors.go_stop()

        return self.state

    def handle_headlights(self, command: HeadlightCommmand) -> State:
        self.state.headlights.set_enabled(command.enabled)
        return self.state

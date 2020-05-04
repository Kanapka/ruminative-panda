from CommandsModule.MovementCommand import MovementCommand
from CommandsModule.HeadlightCommand import HeadlightCommmand
from DomainModule.State import State
from DomainModule.Direction import Direction

class FakePanda(object):

    def __init__(self): 
        self.state = State()
        pass

    def get_state() -> State:
        return self.state

    def handle_movement(self, command: MovementCommand) -> State:
        direction = command.direction
        speed = command.speed if command.speed <= 1 and command.speed >= 0 else 0
        update
        if direction == Direction.Forward:
            self.state.motors.forward()
            update = f'Going forward with speed {speed}'

        elif direction == Direction.Backward:
            update = f'Going backward with speed {speed}'
            self.state.motors.backward()

        elif direction == Direction.Left:
            update = f'Going left with speed {speed}'
            self.state.motors.left()

        elif direction == Direction.Right:
            update = f'Going right with speed {speed}'
            self.state.motors.right()

        elif direction == Direction.Stopped:
            speed = 0
            update = f'Stopped, speed: {speed}'
            self.state.motors.stop()

        return self.state

    def handle_headlights(self, command: HeadlightCommmand) -> State:
        update = "Enabled" if command.get_enabled() else "Disabled"
        self.state.headlights.set_enabled(command.enabled)
        return self.state

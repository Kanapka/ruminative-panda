from CommandsModule.MovementCommand import MovementCommand
from DomainModule.Direction import Direction

class FakePanda(object):

    def __init__(self): 
        #self.state = state
        pass

    def handle_movement(self, command: MovementCommand):
        direction = command.direction
        speed = command.speed if command.speed <= 1 and command.speed >= 0 else 0
        update
        if direction == Direction.Forward:
            update = f'Going forward with speed {speed}'
        elif direction == Direction.Backward:
            update = f'Going backward with speed {speed}'
        elif direction == Direction.Left:
            update = f'Going left with speed {speed}'
        elif direction == Direction.Right:
            update = f'Going right with speed {speed}'
        elif direction == Direction.Stopped:
            speed = 0
            update = f'Stopped, speed: {speed}'
        return update
        pass



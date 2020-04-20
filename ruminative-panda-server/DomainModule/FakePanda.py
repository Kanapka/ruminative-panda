from CommandsModule.MovementCommand import MovementCommand
from DomainModule.Direction import Direction

class FakePanda(object):

    def __init__(self): 
        #self.state = state
        pass

    def handle_movement(self, command: MovementCommand):
        direction = command.direction
        speed = command.speed if command.speed <= 1 and command.speed >= 0 else 0
        if direction == Direction.Forward:
            print(f'Going forward with speed {speed}')
            pass
        elif direction == Direction.Backward:
            print(f'Going backward with speed {speed}')
            pass
        elif direction == Direction.Left:
            print(f'Going left with speed {speed}')
            pass
        elif direction == Direction.Right:
            print(f'Going right with speed {speed}')
            pass
        elif direction == Direction.Stopped:
            speed = 0
            print(f'Stopped, speed: {speed}')
            pass
        return "faaaake"
        pass



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
            pass
        elif direction == Direction.Backward:
            pass
        elif direction == Direction.Left:
            pass
        elif direction == Direction.Right:
            pass
        elif direction == Direction.Stopped:
            pass
        return "fuck python"
        pass
    """description of class"""



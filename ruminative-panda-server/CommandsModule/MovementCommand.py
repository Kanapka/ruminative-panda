from DomainModule.Direction import Direction

class MovementCommand(object):


    def __init__(self, *, direction: Direction, speed: int):
        self._direction = direction
        self._speed = speed

    def get_direction(self) -> Direction: 
        return self._direction

    def set_direction(self, new_direction: Direction):
        self._direction = new_direction

    def get_speed(self) -> int:
        return self._speed

    def set_speed(self, new_speed: int):
        self._speed = new_speed

    direction = property(get_direction, set_direction)
    speed = property(get_speed, set_speed)

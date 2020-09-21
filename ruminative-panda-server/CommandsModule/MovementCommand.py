from DomainModule.Direction import Direction


#
# curve decides if the robot should go straight or
# if it should curve left (c < 0) or right (c > 0)
# at curve of -1 or + 1 robot will rotate in place
#
class MovementCommand(object):
    def __init__(self, *, direction: Direction, speed: int, curve: float):
        self._curve = curve
        self._direction = direction
        self._speed = speed if speed <= 1 and speed >= 0 else 0

    def get_direction(self) -> Direction: 
        return self._direction

    def get_speed(self) -> int:
        return self._speed

    def get_curve(self) -> float:
        return self._curve

    direction = property(get_direction)
    speed = property(get_speed)
    curve = property(get_curve)

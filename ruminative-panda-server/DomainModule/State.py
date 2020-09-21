class Headlights(object):
    def __init__(self):
        self.enabled = False

    def get_enabled(self):
        return self.enabled

    def set_enabled(self, value: bool):
        self.enabled = value

class Motors(object):
    def __init__(self):
        self.direction = False
        self.curve = 0  # -1 is full turn left, +1 is full turn right
        self.speed = 0

    def from_command(command: MovementCommand):
        self.direction = command.direction
        self.curve = command.curve
        self.speed = command.speed

    def set_speed(self, new_speed):
        self.speed = new_speed

class State(object):
    def __init__(self):
        self.motors = Motors()
        self.headlights = Headlights()
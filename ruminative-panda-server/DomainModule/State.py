class Headlights(object):
    def __init__(self):
        self.enabled = False

    def get_enabled(self):
        return self.enabled

    def set_enabled(self, value: bool):
        self.enabled = value

class Motors(object):
    def __init__(self):
        self.forward = False
        self.backward = False
        self.right = False
        self.left = False

    def forward(self):
        self.forward = True
        self.backward = False
        self.right = False
        self.left = False

    def backward(self):
        self.forward = False
        self.backward = True
        self.right = False
        self.left = False

    def right(self):
        self.forward = False
        self.backward = False
        self.right = True
        self.left = False

    def left(self):
        self.forward = False
        self.backward = False
        self.right = False
        self.left = True

    def stop(self):
        self.forward = False
        self.backward = False
        self.right = False
        self.left = False

class State(object):
    def __init__(self):
        self.motors = Motors()
        self.headlights = Headlights()
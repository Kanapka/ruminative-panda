class HeadlightCommmand(object):
    def __init__(self, *, enabled: bool):
        self.enabled = enabled

    def get_enabled(self): 
        return self.enabled
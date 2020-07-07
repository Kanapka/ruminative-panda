class Robot: 
    def forward(self, speed: int):
        print(f'Going forward with speed {speed}')

    def backward(self, speed: int):
        print(f'Going backward with speed {speed}')

    def left(self, speed: int):
        print(f'Going left with speed {speed}')

    def right(self, speed: int):
        print(f'Going right with speed {speed}')

    def stop(self):
        print(f'Stopping')


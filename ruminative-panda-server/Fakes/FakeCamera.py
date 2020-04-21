from time import time
from time import sleep
import threading

class FakeCamera(object):
    """absolutely fake implementation of a camera"""
    def __init__(self, cond: threading.Condition):
        self.__frame = None
        self.__condition = cond
        self.__frames = [open(f'Testing/frame{i}.jpeg', 'rb').read() for i in range(1, 7)]

    def get_frame(self):
        return self.__frame

    def get_condition(self):
        return self.__condition

    def __update(self):
        data = self.__frames[int(time() % 6)]
        self.__frame = (b'frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + data + b'\r\n')
        
    def capture(self):
        while True:
            try:
                self.__condition.acquire()
                self.__update()
                self.__condition.notify_all()
            finally:
                self.__condition.release()
                sleep(0.5)

    def new(condition: threading.Condition):
        camera = FakeCamera(condition)
        video_feed = threading.Thread(target = camera.capture)
        video_feed.start()
        return camera
        





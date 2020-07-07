import threading
import io
import picamera

class StreamingOutput(object):
    def __init__(self, cond: threading.Condition):
        self.frame = None
        self.buffer = io.BytesIO()
        self.condition = Condition()

    def write(self, buf):
        if buf.startswith(b'\xff\xd8'):
            # New frame, copy the existing buffer's content and notify all
            # clients it's available
            self.buffer.truncate()
            with self.condition:
                self.frame = self.buffer.getvalue()
                self.condition.notify_all()
            self.buffer.seek(0)
        return self.buffer.write(buf)

class Camera(object):
    def __init__(self, cond: threading.Condition, **kwargs):
        self.output = StreamingOutput(cond)
        pass

    def get_frame(self):
        return self.output.frame

    def get_condition(self):
        return self.output.condition

    def __capture(self):
        with picamera.PiCamera(resolution='640x480', framerate=24) as camera:
            try:
                output = StreamingOutput()
                camera.start_recording(output, format='mjpeg')
            finally:
                camera.stop_recording()

    def new(condition: threading.Condition):
        camera = RealCamera(condition)
        video_feed = threading.Thread(target = camera.__capture)
        video_feed.start()
        return camera
"""
This script runs the application using a development server.
It contains the definition of routes and views for the application.

This can be run with '--test' argument to use fake interfaces with GPIO
"""

import sys
import ServerModule.Server as server
import threading


condition = threading.Condition()

test_run = False
if len(sys.argv) > 0:
    if '--test' in sys.argv:
        test_run = True

if test_run:
    from DomainModule.PandaRobot import PandaRobot
    from Fakes.FakeCamera import FakeCamera
    from Fakes.FakeRobot import Robot
    robot = PandaRobot(Robot())
    camera = FakeCamera.new(condition)
else: 
    from DomainModule import PandaRobot
    from realCamera import Camera
    from gpiozero import Robot
    robot = PandaRobot(Robot(left=(10, 11), right=(20,25)))
    camera = Camera.new(condition)


server.setup(robot, camera, condition)
# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = server.get_app().wsgi_app

if __name__ == '__main__':
    server.run()

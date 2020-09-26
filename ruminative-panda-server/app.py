"""
This script runs the application using a development server.
It contains the definition of routes and views for the application.

This can be run with '--test' argument to use fake interfaces with GPIO
"""

import sys
import ServerModule.Server as server
import threading

test_run = False
if len(sys.argv) > 0:
    if '--test' in sys.argv:
        test_run = True

if test_run:
    from DomainModule.PandaRobot import Panda
    from Fakes.FakeRobot import Robot
    robot = Panda(Robot())
else: 
    from DomainModule.PandaRobot import Panda
    from gpiozero import Robot
    robot = Panda(Robot(left=(10, 11), right=(20,25)))


server.setup(robot)
# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = server.get_app().wsgi_app

if __name__ == '__main__':
    server.run()

from os import path, environ as env

basedir = path.abspath(path.dirname(__file__))

# helper method
get_from_env = lambda key: env[key] if key in env else ''

from os import path, environ as env

basedir = path.abspath(path.dirname(__file__))

# helper method
get_from_env = lambda key: env[key] if key in env else ''


class Config:
    '''App configuration values are listed here'''
    APP_NAME = 'Python-Auspicious-Time'
    SECRET_KEY = get_from_env('APP_SECRET_KEY')

from os import environ as env
from flask import Flask, render_template, request, session, redirect, url_for
from flask import abort
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# == routes ====================================================================
@app.route('/')
def index():
    '''Homepage'''
    return render_template('index.html')



# == trigger section ===========================================================
if __name__ == '__main__':
  if 'MODE' in env and env['MODE'] == 'production':
      app.run()
  else:
      print('Secret', app.secret_key)
      app.run(debug=True)
"""
CETS H2 UI Server.
Based on the angular
"""

import json,collections,os
from bottle import run, route, template, static_file, request, redirect, get, post

#######################
# Static file servers #
#######################

ROOTPATH = ''

@route('/assets/<filepath:path>')
def serve_static(filepath):
    return static_file(filepath, root='static/')


##############
#  Handlers  #
##############

@route('/')
def root():
    return template('index.html')

def main():
    run(host='0.0.0.0', port=5000, debug=True, reloader=True)

if __name__ == '__main__':
    main()
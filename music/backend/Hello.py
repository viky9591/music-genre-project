from flask import Flask, jsonify, request
# ml project

import test as t
import music_genre as mg




app = Flask(__name__)

@app.route('/')
def hello_world():
   return 'Hello World'

# @app.route('/home')
# def homePage():
#     return '<h1>this is home page</h1>'

# functions for ml

# @app.route('/music')
# def musicFun():
#     data =t.detect()
#     value=data
#     return value


@app.route('/detect/<int:num>', methods = ['GET'])
def disp(num):
    data =t.detect(num)
    value=data
    return jsonify({'data': value})



# @app.route('/musicTrain')
# def trainFun():
#     data=mg.train()
#     value=data
#     return value

@app.route('/train/', methods = ['GET' ,'POST'])
def dispTrain():
    if (request.method=='GET'):
        data=mg.train()
        value=data
        return jsonify({'data': value})
















if __name__ == '__main__':
   app.run()

from flask import Flask
from flask_cors import CORS

from controllers.machineController import machineController

app = Flask(__name__)
CORS(app)
app.debug = True
app.register_blueprint(machineController, url_prefix='/machine')

if __name__ == "__main__":
    app.run(host='0.0.0.0')

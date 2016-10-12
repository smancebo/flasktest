from flask import Blueprint, jsonify, request
from utils.response import Response
from models.machine import Machine

machineController = Blueprint('machineController', __name__, '')


@machineController.route('/add', methods = ['POST'])
def addMachine():
    try:
        machine = Machine()
        machine.fromJson(request.json)

        result = machine.save()
        if (result["status"] == "ok"):
            return Response.Ok("successfully inserted", result["id"])
        else:
            return Response.Error(payload = result["message"])
    except Exception, e:
        return jsonify(status = 'ERROR', message = str(e))


@machineController.route('/list')
def listMachine():
    return jsonify(Machine.getAll())


@machineController.route('/get/<id>')
def get(id):
    machine = Machine(id)
    return jsonify(machine.toJson())

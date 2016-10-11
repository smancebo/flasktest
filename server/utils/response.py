from flask import jsonify

class Response(object):
    @staticmethod
    def __response(status, message, payload = {}):
        return jsonify({"status" : status, "message" : message, "payload" : payload} )

    @staticmethod
    def Ok(message = "successfull", payload = {}):
        return Response.__response("OK", message, payload)

    @staticmethod
    def Error(message = "Error", payload = {}):
        return Response.__response("ERROR", message, payload)

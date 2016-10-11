

from models.baseModel import baseModel
from dataAccess import db

class Machine(baseModel):

    deviceName = ""
    ipAddress = ""
    userName = ""
    password = ""
    portNumber = 0

    def __init__(self):
        self.deviceName = ""
        self.ipAddress = ""
        self.userName = ""
        self.password = ""
        self.portNumber = 0

    @staticmethod
    def getAll(criteria = None):
        machineList = []
        cursor = db.query('machines', criteria)
        for machine in cursor:
            machineItem = {
                "deviceName" : machine["deviceName"],
                "idAddress" : machine["ipAddress"],
                "userName" : machine["userName"],
                "password" : machine["password"],
                "portNumber" : machine["portNumber"]
            }
            machineList.append(machineItem)

        return machineList

    def save(self):
        return super(Machine, self).save(self, 'machines')

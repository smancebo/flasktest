""" """

from models.baseModel import baseModel
from dataAccess import db
from bson import ObjectId
from utils.common import Common


class Machine(baseModel):

    _id = ""
    deviceName = ""
    ipAddress = ""
    userName = ""
    password = ""
    portNumber = 0

    def __init__(self, id = None):
        self.deviceName = ""
        self.ipAddress = ""
        self.userName = ""
        self.password = ""
        self.portNumber = 0
        self.__collectionName = 'machines'
        if(id is not None):
            self.get(id)

    @staticmethod
    def delete(id):
        return db.delete('machines', id)

    @staticmethod
    def getAll(criteria=None):
        machineList = []
        cursor = db.query('machines', criteria)
        for machine in cursor:
            machineItem = {
                "_id": str(machine["_id"]),
                "deviceName": machine["deviceName"],
                "ipAddress": machine["ipAddress"],
                "userName": machine["userName"],
                "password": machine["password"],
                "portNumber": machine["portNumber"]
                }
            machineList.append(machineItem)
    
        print("done")
        return machineList

    def get(self, id):
        obj = db.query(self.__collectionName, {'_id': ObjectId(id)})[0]
        Common.map(self, obj)

    def save(self):
        return super(Machine, self).save(self, 'machines')

from dataAccess import db
from bson import ObjectId


class baseModel(object):
    __collectionName = ''
    dataBase = db

    @staticmethod
    def __parseJson(model, json):

        for attr, value in json.iteritems():
            # Get Attribute in self, if not found None is returned
            prop = getattr(model, attr, None)
            if prop is not None:
                setattr(model, attr, value)

    def fromJson(self, json):
        baseModel.__parseJson(self, json)

    def toJson(self):
        model = {}
        for attr, value in self.__dict__.iteritems():
            if(not attr.startswith('__')):
                if(isinstance(value, ObjectId)):
                    model[attr] = str(value)
                else:
                    model[attr] = value
        return model

    def save(self, model, collection):
        return self.dataBase.save(model, collection)

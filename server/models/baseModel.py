from dataAccess import db

class baseModel(object):

    dataBase = db
    @staticmethod
    def __parseJson(model, json):

        for attr, value in json.iteritems():
            prop = getattr(model, attr, None) #Get Attribute in self, if not found None is returned
            if prop is not None:
                setattr(model, attr, value)

    def fromJson(self, json):
        baseModel.__parseJson(self, json)

    def toJson(self):
        model = {}
        for attr, value in self.__dict__.iteritems():
            model[attr] = value
        return model





    def save(self, model, collection):
        return self.dataBase.save(model, collection)

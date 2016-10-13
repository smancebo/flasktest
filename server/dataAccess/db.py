"""this is the database connection"""

from pymongo import MongoClient
import os
import sys
import config
from bson import ObjectId
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def save(model, collection):
    """ Save model into database """

    try:

        db = __getDb()
        objModel = __generateObjDict(model)
        col = getattr(db, collection)
        modelId = __isUpdating(model)
        if(modelId is not None):
            _id = col.update_one({"_id": ObjectId(modelId)},
                                 {"$set": objModel})
            returnId = modelId
        else:
            _id = col.insert_one(objModel)
            returnId = str(_id.inserted_id)
        return {"status": "ok", "id": returnId}
    except Exception, e:
        return {"status": "error", "message": str(e)}


def __isUpdating(model):
    _id = getattr(model, '_id', None)
    if(_id is not None and not _id == ''):
        return _id


def query(collection, criteria=None):

    db = __getDb()
    col = getattr(db, collection)

    if(criteria is None):
        return col.find()
    else:
        return col.find(criteria)


def __getDb():
    client = MongoClient(config.mongoUrl)
    return client.Machines


def delete(collection, id):
    db = __getDb()
    col = getattr(db, collection)
    try:
        col.delete_one({'_id': ObjectId(id)})
        return True  # successfully
    except Exception, e:
        return str(e)  # Error Deleting document


def __generateObjDict(model):
    objModel = {}
    for attr, value in model.__dict__.iteritems():
        if(not attr == '_id'):
            objModel[attr] = value

    return objModel

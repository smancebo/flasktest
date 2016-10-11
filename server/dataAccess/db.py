
from pymongo import MongoClient
import os, sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import config

def save(model, collection):
    """ Save model into database """
    try:

        db = __getDb()
        objModel = __generateObjDict(model)

        col = getattr(db, collection)
        _id = col.insert_one(objModel)
        return {"status" : "ok", "id" : str(_id.inserted_id)}
    except Exception,e:
        return {"status" : "error", "message" : str(e)}

def query(collection, criteria = None):

    db = __getDb()
    col = getattr(db, collection)

    if(criteria is None):
        return col.find()
    else:
        return col.find(criteria)

def __getDb():
    client = MongoClient(config.mongoUrl)
    return client.Machines

def __generateObjDict(model):
    objModel = {}
    for attr, value in model.__dict__.iteritems():
        objModel[attr] = value

    return objModel

class Common(object):
    """docstring for Common."""
    @staticmethod
    def map(model, modelTo):
        def iter(m, it):
            for key, value in it:
                prop = getattr(m, key, None)
                if(prop is not None):
                    setattr(m, key, value)

        def parseDict():
            iter(model, modelTo.iteritems())

        def parseObj():
            iter(model, modelTo.__dict__.iteritems())

        if(isinstance(modelTo, dict)):
            parseDict()
        elif(isinstance(model, modelTo.__class__)):
            parseObj()

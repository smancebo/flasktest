from flask import Flask, render_template
app = Flask(__name__)

app.debug = True

@app.route('/')
def showMachineList():
    return render_template('list.html')

if __name__ == "__main__":
    app.run()
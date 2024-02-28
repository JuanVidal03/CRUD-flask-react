# importar e inicializar flask
from flask import Flask
app = Flask(__name__)


@app.route('/')
def init():
    return "Holaaaa"



# corriendo server
if __name__=='__main__':
    app.run(port=8080, debug=True)
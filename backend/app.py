# importar e inicializar flask
from flask import Flask, request
app = Flask(__name__)

# aqui se va a almacenar la data
lista_personas = []

# mostar personas
@app.route('/personas', methods=['GET'])
def mostrar_personas():
    return lista_personas

# crear personas
@app.route('/personas', methods=['POST'])
def crear_persona():
    # creando la persona
    try:
        persona = request.json
        # verificando que hayan elementos en el lista de productos
        if len(lista_personas) > 0:
            # verificando que no hayan personas con cedulas repetidas
            for person in lista_personas:
                if person['cedula'] == persona['cedula']:
                    return f'Persona con el numero de cedula: {persona['cedula']} ya existe!'
            else:
                lista_personas.append(persona)
                return 'Persona agregada con exito!'
        else:
            lista_personas.append(persona)
            return 'Persona agregada con exito!'
    
    # en caso de no poder crear la persona
    except Exception as error:
        return f'Error al crear la persona: {error}'


# corriendo server
if __name__=='__main__':
    app.run(port=8080, debug=True)
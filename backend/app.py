# uitls
from utils.esquema_actualizar_persona import esquema_actualizar_persona
from utils.encontrar_posicion import posicion_persona_actualizar
# importar e inicializar flask y cors
from flask import Flask, request
from flask import Response
from flask_cors import CORS
app = Flask(__name__)
# permite que este backend pueda ser utilizado en otros dominios
cors = CORS(app)
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
                    return Response(f'Persona con el numero de cedula: {persona['cedula']} ya existe!', status=409)
            else:
                lista_personas.append(persona)
                return Response('Persona agregada con exito!', status=202)
        else:
            lista_personas.append(persona)
            return Response('Persona agregada con exito!', status=202)
    
    # en caso de no poder crear la persona
    except Exception as error:
        return Response(f'Error al crear la persona: {error}', status=400)

# actualizar persona
@app.route('/persona/<cedula>', methods=['PUT'])
def actualizar_persona(cedula):
    # creando la persona
    try:
        
        # nuevos datos de la persona
        datos_actualizar = request.json
        nombre, mail, telefono = datos_actualizar.values()
        # posicion de la persona a actualizar
        posicion_persona = posicion_persona_actualizar(lista_personas, cedula)
        
        # encontrando la persona y la actualizamos en el array donde estan las personas
        for person in lista_personas:
            if person["cedula"] == cedula:
                actualizar_persona = esquema_actualizar_persona(cedula, nombre, mail, telefono)
                lista_personas[posicion_persona] = actualizar_persona
        
        return Response(f'Persona con cedula: {cedula}, fue actualizada con exito!', status=202)
        
    # error al actualizar persona
    except Exception as error:
        return Response(f'Error al actualizar la persona: {error}', status=400)

# eliminar persona
@app.route('/persona/<cedula>', methods=['DELETE'])
def eliminar_persona(cedula):
    try:
        
        # encontrando la persona y eliminandola
        for persona in lista_personas:
            if persona['cedula'] == cedula:
                lista_personas.remove(persona)
                return Response(f'Persona con cedula: {cedula}, fue eliminada con exito!', status=202)
        else:
            return Response(f'Persona con cedula: {cedula}, no existe!', status=400)
    
    except Exception as error:
        return Response(f'Error al eliminar la persona: {error}', status=400)


# corriendo server
if __name__=='__main__':
    app.run(port=8080, debug=True)
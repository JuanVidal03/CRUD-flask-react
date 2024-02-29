# encontrando la posicion de la persona a actualizar
def posicion_persona_actualizar(arr, cedula):
    posicion = None
    
    for persona in enumerate(arr):
        p = persona[1]
        if p['cedula'] == cedula:
            posicion = persona[0]

    return posicion
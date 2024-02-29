# actuliazar la persona
def esquema_actualizar_persona(cedula, nombre, mail, telefono):
    persona_actualizada = {
        "cedula": cedula,
        "nombre": nombre,
        "mail": mail,
        "telefono": telefono
    }
    
    return persona_actualizada
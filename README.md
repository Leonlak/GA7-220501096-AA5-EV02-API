<<<<<<< HEAD
# GA7-220501096-AA5-EV02-API
=======
# Servicio de Autenticación

Este es un servicio web simple para registro e inicio de sesión de usuarios.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Instalar las dependencias:
```bash
npm install
```

2. Iniciar el servidor:
```bash
npm start
```

El servidor se ejecutará en el puerto 3000 por defecto.

## Endpoints

### Registro de Usuario
- **URL**: `/register`
- **Método**: POST
- **Body**:
```json
{
    "username": "usuario",
    "password": "contraseña"
}
```

### Inicio de Sesión
- **URL**: `/login`
- **Método**: POST
- **Body**:
```json
{
    "username": "usuario",
    "password": "contraseña"
}
```

## Respuestas

### Registro Exitoso
```json
{
    "message": "Usuario registrado exitosamente"
}
```

### Inicio de Sesión Exitoso
```json
{
    "message": "Autenticación satisfactoria"
}
```

### Error de Autenticación
```json
{
    "message": "Error en la autenticación"
}
``` 
>>>>>>> 1d035e5 (Servicio)

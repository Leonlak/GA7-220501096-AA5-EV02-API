// Importación de módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

// Creación de la aplicación Express
const app = express();

// Configuración de middleware
app.use(bodyParser.json());

// Almacenamiento temporal de usuarios (en una aplicación real, usar una base de datos)
const users = [];

// Ruta para registro de usuarios
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Verificar si el usuario ya existe
        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Guardar el usuario
        users.push({
            username,
            password: hashedPassword
        });

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el registro' });
    }
});

// Ruta para inicio de sesión
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Buscar el usuario
        const user = users.find(user => user.username === username);
        if (!user) {
            return res.status(401).json({ message: 'Error en la autenticación' });
        }

        // Verificar la contraseña
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Error en la autenticación' });
        }

        res.json({ message: 'Autenticación satisfactoria' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el inicio de sesión' });
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
}); 
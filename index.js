const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

// Middleware para analizar el cuerpo de las solicitudes POST
app.use(bodyParser.json());

// Usuarios permitidos (simulación de una base de datos)
const allowedUsers = {
    'user1': 'password1',
    'user2': 'password2'
};

// Ruta para manejar la solicitud POST del formulario de login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Simular la verificación del usuario
    if (allowedUsers[username] && allowedUsers[username] === password) {
        // Simular la creación de un token
        const authToken = `${username}-token-${Date.now()}`;
        res.json({ success: true, token: authToken });
    } else {
        res.json({ success: false, message: 'Invalid username or password.'});
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});

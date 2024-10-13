// src/js/services/authService.js
app.factory('AuthService', function() {
    var user = {
        username: 'user',
        password: 'password'
    };

    return {
        login: function(username, password) {
            // Aquí se simula la validación
            return username === user.username && password === user.password;
        }
    };
});

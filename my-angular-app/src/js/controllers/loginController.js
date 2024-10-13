// src/js/controllers/loginController.js
app.controller('LoginController', function($scope, $location, AuthService) {
    $scope.username = '';
    $scope.password = '';
    $scope.errorMessage = '';

    $scope.login = function() {
        if (AuthService.login($scope.username, $scope.password)) {
            $scope.errorMessage = '';
            $location.path('/crud'); // Redirigir a la vista CRUD
        } else {
            $scope.errorMessage = 'Invalid username or password';
        }
    };
});

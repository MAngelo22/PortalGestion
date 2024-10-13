// src/js/controllers/mainController.js
app.controller('MainController', function($scope, DataService) {
    // Obtener datos del servicio
    $scope.greeting = DataService.getData().message;
});

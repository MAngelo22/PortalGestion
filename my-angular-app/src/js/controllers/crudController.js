// src/js/controllers/crudController.js
app.controller('CrudController', function($scope, DataService) {
    $scope.items = DataService.getItems(); // Obtener elementos del servicio
    $scope.newItem = '';

    $scope.addItem = function() {
        if ($scope.newItem) {
            DataService.addItem($scope.newItem); // Agregar nuevo ítem
            $scope.newItem = ''; // Limpiar el campo
        }
    };

    $scope.removeItem = function(index) {
        DataService.removeItem(index); // Eliminar ítem
    };
});

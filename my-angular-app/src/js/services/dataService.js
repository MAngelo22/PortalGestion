// src/js/services/dataService.js
app.factory('DataService', function() {
    var items = [];

    return {
        getItems: function() {
            return items;
        },
        addItem: function(item) {
            items.push(item);
        },
        removeItem: function(index) {
            items.splice(index, 1);
        }
    };
});

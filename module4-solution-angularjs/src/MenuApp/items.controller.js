(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService','item'];
function ItemsController(MenuDataService, item) {
  var ItemsCtrl = this;
  ItemsCtrl.items = item;
}

})();

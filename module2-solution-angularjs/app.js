(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getBuyItems();

  buyList.moveToBought = function (itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items need to buy
  var buyItems = [{name: "cookies", quantity: 10}, {name: "apples", quantity: 5},
  {name: "water bottles", quantity: 20}, {name: "fish", quantity: 3},
  {name: "rice", quantity: 8}];

  // List of shopping items already bought
  var boughtItems = [];

  service.moveItem = function (itemIndex) {
    var item = buyItems[itemIndex];
    boughtItems.push(item);
    buyItems.splice(itemIndex, 1);
  };

  service.getBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();

(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService'];

InfoController.$inject = ['user'];
function InfoController(user) {
  var $ctrl = this;
  $ctrl.signedUp = false;
  $ctrl.favoriteMenuItem;

  if(user) {
    $ctrl.signedUp = true;
    $ctrl.firstName = user.firstName;
    $ctrl.lastName = user.lastName;
    $ctrl.email = user.email;
    $ctrl.phone = user.phone;
    $ctrl.favoriteDish = user.favoriteDish;
    $ctrl.favoriteMenuItem = user.favoriteMenuItem;

    if(isNaN($ctrl.favoriteMenuItem.short_name.charAt(1))) {
      $ctrl.category = $ctrl.favoriteMenuItem.short_name.charAt(0)+$ctrl.favoriteMenuItem.short_name.charAt(1);
    }
    else {
      $ctrl.category = $ctrl.favoriteMenuItem.short_name.charAt(0);
    }
  }
  else {
    $ctrl.signedUp = false;
  }
}

})();

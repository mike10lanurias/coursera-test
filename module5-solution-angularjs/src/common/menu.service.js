(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category_short_name) {
    if(isNaN(category_short_name.charAt(1))) {
      var category = category_short_name.charAt(0) + category_short_name.charAt(1);
    }
    else {
      var category = category_short_name.charAt(0);
    }

    console.log(category);
    var number = category_short_name.split('').filter(char => !isNaN(char) && char !== ' ').join('');
    var item_number = Number(number)-1;
    return $http.get(ApiPath + '/menu_items/' + category + '/menu_items/' + item_number + '.json').then(function (response) {
      return response.data;
    });
  };

}



})();

'use strict';
angular.module('recharge.home', ['recharge.service']).controller('HomeCtrl', function ($scope, $rootScope, dataSharingService, $location, webService) {
  $scope.countryList = [];
  $scope.topUpAmount = [];
  $scope.topUpDetail = {};
  $scope.topUpDetail.mobileNumber = '08';
  webService.getCountryList().then(function (response) {
    $scope.countryList = response.data.countryList;
    $scope.topUpDetail.country = $scope.countryList[0].value;

  });
  webService.getTopUpAmount().then(function (response) {
    $scope.topUpAmount = response.data.topUpList;
    $scope.topUpDetail.amount = $scope.topUpAmount[0].value;

  });
  $scope.topUpPreview = function (topUpDetail) {

    if ($scope['formTopupDetail'].$invalid) {
      $scope.showError = 'show-custom-error';
      return;
    } else {
      dataSharingService.setDetail(topUpDetail);
      $location.path('/preview');
    }
  };
});
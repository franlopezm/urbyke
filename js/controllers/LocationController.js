/* eslint no-undef: "off" */
angular.module('urbykeApp')
.controller('LocationController', function (BikeFactory, apikey, NgMap) {
  var vm = this
  vm.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=' + apikey
})

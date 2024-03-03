var cartoonsApp = angular.module('cartoonsApp', []);

cartoonsApp.controller('CartoonsController', function() {
  this.cartoons = [
    {
      title: 'Cartoon 1',
      image: 'path/to/image1.jpg',
      description: 'Description for Cartoon 1'
    },
    {
      title: 'Cartoon 2',
      image: 'path/to/image2.jpg',
      description: 'Description for Cartoon 2'
    },
    // Add more cartoon objects as needed
  ];
});

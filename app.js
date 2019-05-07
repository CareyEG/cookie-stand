'use strict';

//sourced from mdn math.random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pike = {
  name: '1st and Pike',
  minHrly: 23,
  maxHrly: 65,
  avgcookies: 6.3,
  hourlySales: [],
  hourlySalesCalc: function (){
    for (var i = 0; i < hours.length; i++ ){



      this.hourlySales.push(Math.ceil(getRandomIntInclusive(this.minHrly, this.maxHrly) * this.avgcookies));
    }
  }
	
  // introduction: function(){
  //   console.log(+ this.name + 's hourly minimum customers was ' + this.minhrly + '. It\'s hourly maximum customers was ' + this.maxhrly + ', and the average cookie sales were calculated to ' + this.avgcookies + '.');
  //   function getRandomArbitrary(min, max) {
  //     min = Math.ceil(min);
  //     max = Math.floor(max);
  //     return Math.floor(Math.random() * (max - min + 1)) + min;}
      
  //   getRandomArbitrary(23, 65) * (6.3);
  // },
};
pike.hourlySalesCalc();

// var Airport = {
//   name: 'SeaTac Airport',
//   minhrly: 3,
//   maxhrly: 24,
//   avgcookies: 1.2,
//   introduction: function(){
//     console.log(+ this.name + 's hourly minimum customers was ' + this.minhrly + '. It\'s hourly maximum customers was ' + this.maxhrly + ', and the average cookie sales were calculated to ' + this.avgcookies + '.');
//     function getRandomArbitrary(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1)) + min;}
      
//     getRandomArbitrary(3, 24) * (1.2);
//   },
// };

// var Center = {
//   name: 'Seattle Center',
//   minhrly: 11,
//   maxhrly: 38,
//   avgcookies: 3.7,
//   introduction: function(){
//     console.log(+ this.name + 's hourly minimum customers was ' + this.minhrly + '. It\'s hourly maximum customers was ' + this.maxhrly + ', and the average cookie sales were calculated to ' + this.avgcookies + '.');
//     function getRandomArbitrary(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1)) + min;}
      
//     getRandomArbitrary(11, 38) * (3.7);
//   },
// };

// var Hill = {
//   name: 'Capitol Hill',
//   minhrly: 20,
//   maxhrly: 38,
//   avgcookies: 2.3,
//   introduction: function(){
//     console.log(+ this.name + 's hourly minimum customers was ' + this.minhrly + '. It\'s hourly maximum customers was ' + this.maxhrly + ', and the average cookie sales were calculated to ' + this.avgcookies + '.');  
//     function getRandomArbitrary(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1)) + min;}
      
//     getRandomArbitrary(20, 38) * (2.3);
//   },
// };

// var Alki = {
//   name: 'Alki',
//   minhrly: 2,
//   maxhrly: 16,
//   avgcookies: 4.6,
//   introduction: function(){
//     console.log(+ this.name + 's hourly minimum customers was ' + this.minhrly + '. It\'s hourly maximum customers was ' + this.maxhrly + ', and the average cookie sales were calculated to ' + this.avgcookies + '.');
//     function getRandomArbitrary(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1)) + min;}
    
//     getRandomArbitrary(2, 16) * (4.6);
//   },
// };


// var stores = [Pike, Airport, Center, Hill, Alki];

// for (var i = 0; i < stores.length; i++) {
//   console.log(stores[i].name);
// }


'use strict';

var Pike = {
  name: '1st and Pike',
  minhrly: 23,
  maxhrly: 65,
  avgcookies: 6.3,
  introduction: function(){
    console.log(+ this.name + 's hourly minimum cookies sold was ' + this.minhrly + '. It\'s hourly maximum cookies sold was ' + this.maxhrly + ', and the average cookie sales were calculated to ' + this.avgcookies + '.');
  },
};

var Airport = {
  name: 'SeaTac Airport',
  minhrly: 3,
  maxhrly: 24,
  avgcookies: 1.2,
  introduction: function(){
    console.log(+ this.name + 's hourly minimum cookies sold was ' + this.minhrly + '. It\'s hourly maximum cookies sold was ' + this.maxhrly + ', and the average cookie sales were calculated to ' + this.avgcookies + '.');
  },
};

var Center = {
  name: 'Seattle Center',
  minhrly: 11,
  maxhrly: 38,
  avgcookies: 3.7,
  introduction: function(){
    console.log(+ this.name + 's hourly minimum cookies sold was ' + this.minhrly + '. It\'s hourly maximum cookies sold was ' + this.maxhrly + ', and the average cookie sales were calculated to ' + this.avgcookies + '.');
  },
};

var Hill = {
  name: 'Capitol Hill',
  minhrly: 20,
  maxhrly: 38,
  avgcookies: 2.3,
  introduction: function(){
    console.log(+ this.name + 's hourly minimum cookies sold was ' + this.minhrly + '. It\'s hourly maximum cookies sold was ' + this.maxhrly + ', and the average cookie sales were calculated to ' + this.avgcookies + '.');
  },
};

var Alki = {
  name: 'Alki',
  minhrly: 2,
  maxhrly: 16,
  avgcookies: 4.6,
  introduction: function(){
    console.log(+ this.name + 's hourly minimum cookies sold was ' + this.minhrly + '. It\'s hourly maximum cookies sold was ' + this.maxhrly + ', and the average cookie sales were calculated to ' + this.avgcookies + '.');
  },
};

var stores = [Pike, Airport, Center, Hill, Alki];

for (var i = 0; i < stores.length; i++) {
  console.log(stores[i].name)
}
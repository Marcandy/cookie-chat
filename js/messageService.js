angular.module('chatroom').service('messageService', function($http){
  //Here you'll need to create two methods. One called postMessage and the other called getMessages.
  this.getMessages = function () {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmounta.in/api/chats' //change to https for redirect
    }).then(function (res) {
      return res.data
      //reserse();
    })
    //return promise; // we can resolve the promise to make it happen in the service
  }

  //On the lines below create a getMessages method. This method will retrieve data from the backend.
  //The url for the get request should be 'https://practiceapi.devmounta.in/api/chats'
  //Be sure to return whatever gets returned from $http so you can call .then in your controller.


  this.postMessage = function (myMessage) {
    return $http({
      method: 'POST',
      url: 'https://practiceapi.devmounta.in/api/chats',
      data:  {message: myMessage}
    }).then(function (res) {
      console.log(res);
      return res;
    })
  }

  //On the line below create the postMessage method. This method will add data to the backend server.
  //The url for the request needs to be 'https://practiceapi.devmounta.in/api/chats'
  //Because we're making a POST request, we need a way to tell the server the data we want to give it, in your $http call (along with url and method) have a data property which has a value that is equal to another object with a key of message and a value of the message being passed to parse. IE data: {bold

  this.getCookies = function () {
    return $http({
      method: "GET",
      url: 'https://practiceapi.devmounta.in/api/cookies'
    }).then(function(res) {
      console.log('cookie', res);
      return res.data;
    })
  }

  this.postCookie = function (myCookie) {
    return $http({
      method: 'POST',
      url: 'https://practiceapi.devmounta.in/api/cookies',
      data: {myCookie}
    })

  }

});

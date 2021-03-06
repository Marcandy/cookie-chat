angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)
  // $scope.sortReverse = false;
  $scope.sortOptions = [
    { name: "Ascending", value: true },
    { name: "Descending", value: false }
  ]

  $scope.getMessages = function () {
     messageService.getMessages().then(function (messages) {
       console.log(messages)
       $scope.messages = messages;
     })
  }
  $scope.getMessages();

  $scope.getCookies = function () {
    messageService.getCookies().then(function(cookies) {
      ;
      $scope.cookies = cookies;
    })
  }
  $scope.getCookies();

  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.

  $scope.postMessage = function (mes) {

    messageService.postMessage(mes).then(function (res) {
      console.log(res); // no need to use .then we are just post stuff
      $scope.getMessages()
      $scope.message = '';
    })
  }

  $scope.postCookie = function (cookie) {
    messageService.postCookie(cookie).then(function (res) {
      console.log(res);
      $scope.getCookies();

    })
    $scope.cookie = '';
  }

  // uncomment this code when your getMessages function is finished
  // This goes and gets new data every second, which mimicking a chat room experience.
  setInterval(function(){
   $scope.getMessages();

 }, 10500)



})

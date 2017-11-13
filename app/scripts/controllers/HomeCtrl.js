(function() {
    function HomeCtrl($uibModal, Room, $scope, Message, $cookies) {
      this.rooms = Room.all;

      $scope.activeRoom = null;
      $scope.messages = null;
      $scope.date = new Date();

      this.hideSidebar = true;

      this.selectRoom = function(room){
        $scope.activeRoom = room;
        $scope.messages = Message.getByRoomId(room.$id);
      }

      this.addRoom = function() {
        $uibModal.open({
          templateUrl: '/templates/addRoom.html',
          controller: 'ModalCtrl as modal'
        });
      }

      this.sendMessage = function(newMessage){
        var sentMessage = {
          content: newMessage,
          roomId:$scope.activeRoom.$id,
          sentAt: $scope.date.toString(),
          username: $cookies.get("blocChatCurrentUser")
        };

          Message.send(sentMessage);

          $scope.newMessage = null;
      }

      this.toggleBar = function() {
        this.hideSidebar = !this.hideSidebar;
      }





    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', '$scope', 'Message', '$cookies', HomeCtrl]);
})();

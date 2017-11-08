(function() {
    function HomeCtrl($uibModal, Room, $scope, Message) {
      this.rooms = Room.all;

      $scope.activeRoom = null;
      $scope.messages = null;

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

      this.toggleBar = function() {
        this.hideSidebar = !this.hideSidebar;
      }




    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', '$scope', 'Message', HomeCtrl]);
})();

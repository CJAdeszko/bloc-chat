(function() {
    function HomeCtrl($uibModal, Room) {
      this.rooms = Room.all;

      this.addRoom = function() {
        $uibModal.open({
          templateUrl: '/templates/addRoom.html',
          controller: 'ModalCtrl as modal'
        });
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();

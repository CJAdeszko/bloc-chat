(function(){
    function ModalCtrl($uibModalInstance, Room){

        this.create = function(newRoom){
            if(newRoom == undefined){
              alert('Please enter a valid room name');
            }else{
              Room.add(newRoom);
              $uibModalInstance.close();
            }
        };

        this.cancel = function(){
            $uibModalInstance.close()
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();

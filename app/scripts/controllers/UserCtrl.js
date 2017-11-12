(function(){
    function UserCtrl($uibModalInstance, $cookies){
        this.error = false;

        this.create = function(newUser){
          if(newUser == "" || newUser == null){
            this.error = true;
          }else{
            $cookies.put("blocChatCurrentUser", newUser);
            $uibModalInstance.close();
          }
        }

    }


angular
    .module('blocChat')
    .controller('UserCtrl', ['$uibModalInstance', '$cookies', UserCtrl]);

})();

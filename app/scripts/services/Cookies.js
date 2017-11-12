(function(){
    function BlocChatCookies($cookies, $uibModal){
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === " "){
            //allow user to set username
            $uibModal.open({
                templateUrl: "/templates/addUser.html",
                controller: "UserCtrl as user",
                backdrop: "static"
            })
        }
    }

angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);

})();

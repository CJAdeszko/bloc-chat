(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);


        Message.getByRoomId = function(roomId){
            var activeRoomId = ref.orderByChild("roomId").equalTo(roomId);
            var activeRoomMessages = $firebaseArray(activeRoomId);

            return activeRoomMessages;
        }

        Message.send = function(newMessage) {
            // Send method logic
            return ref.push(newMessage);
        };

    return Message;
    }


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

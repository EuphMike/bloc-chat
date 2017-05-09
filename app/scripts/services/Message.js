(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {

        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    }

    var time = firebase.database().ref("messages").child("1/sentAt");
    
    time.push({
        sentAt: firebase.database.ServerValue.TIMESTAMP
    });

      return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

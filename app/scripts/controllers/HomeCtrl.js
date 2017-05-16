(function() {
  function HomeCtrl(Room, Message, $uibModal, $cookies) {
      var home = this;
      home.rooms = Room.all;
      home.currentRoom = null;
      home.currentUser = $cookies.get('blocChatCurrentUser');

      home.addRoom = function() {
          $uibModal.open({
              templateUrl: '/templates/modal.html',
              controller: 'ModalCtrl as modal'
            });
        }


    home.setCurrentRoom = function (room) {
        home.currentRoom = room;
        home.messages = Message.getByRoomId(home.currentRoom.$id);
      }

    home.sendMessage = function() {
        home.newMessage.roomId = home.currentRoom.$id;
        home.newMessage.username = $cookies.get('blocChatCurrentUser');
        home.newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
        Message.send(home.newMessage);
      }
    }

  angular
      .module('blocChat')
      .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();

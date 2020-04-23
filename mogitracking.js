// onesignal configs
OneSignal.on('subscriptionChange', function (isSubscribed) {
  if (isSubscribed) {
    OneSignal.getUserId(function (userId) {
      MogiTracking.AddTracking(userId);
      MogiTracking.UpdateOneSignal();

    });

  }
});
OneSignal.isPushNotificationsEnabled(function (isEnabled) {
  if (isEnabled) {

    OneSignal.getUserId(function (userId) {
      MogiTracking.AddTracking(userId);
      MogiTracking.UpdateOneSignal();
    });
  }
});

OneSignal.push(["addListenerForNotificationOpened", function(payload) {
  let topic = payload.data.topic; // set topic in notification
  if (topic) {
    OneSignal.getTags().then(function(tags) {
      var topicCount = parseInt(tags[topic], 10);
      console.log("topicCount: ", topicCount);
      if (!isNaN(topicCount)) {
        topicCount += 1;
      } else {
        topicCount = 1;
      }
      OneSignal.sendTag(topic, topicCount).then(function(tagsSent) {
        console.log("tagsSent: ", JSON.stringify(tagsSent));
      });
    });
  }
}]);
// tracking
var MogiTracking = window.MogiTracking || {};

var MogiTracking = (function () {

  const AddTracking = function (player_id) {
    const payload = {
      id: player_id
    };

    // fetch('http://localhost:8088/Tracking/Addtracking', {
    //   method: 'POST',
    //   body: JSON.stringify(payload)
    // });

  };

  const UpdateOneSignal = function () {
    // set user
    OneSignal.setExternalUserId(MOGI.ProfileId);
    // add tracking tag

    // add user info

  }
  return {
    AddTracking: AddTracking,
    UpdateOneSignal: UpdateOneSignal
  };


})();
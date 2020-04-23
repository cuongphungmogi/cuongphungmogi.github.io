
OneSignal.on('subscriptionChange', function (isSubscribed) {
  if (isSubscribed) {
    OneSignal.getUserId(function (userId) {
      // must check if not tracking...
      MogiTracking.AddTracking(userId);
      OneSignal.setExternalUserId(MOGI.ProfileId);
    });

  }
});
OneSignal.isPushNotificationsEnabled(function (isEnabled) {
  if (isEnabled) {

    OneSignal.getUserId(function (userId) {
      // must check if not tracking...
      MogiTracking.AddTracking(userId);
      OneSignal.setExternalUserId(MOGI.ProfileId);
    });
  }
});
var MogiTracking = window.MogiTracking || {};

var MogiTracking = (function () {

  const AddTracking = function (player_id) {
    const payload = {
      id: player_id
    };

    fetch('http://localhost:8088/Tracking/Addtracking', {
      method: 'POST',
      body: JSON.stringify(payload)
    });

  };
  return {
    AddTracking: AddTracking
  };


})();
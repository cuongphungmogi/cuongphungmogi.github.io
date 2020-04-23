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
// tracking
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
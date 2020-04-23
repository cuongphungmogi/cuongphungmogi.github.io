OneSignal.push(function () {

  OneSignal.isPushNotificationsEnabled(function (isEnabled) {
    if (isEnabled) {
      const ext_id = MOGI.ProfileId;
      OneSignal.setExternalUserId(ext_id);
    };

  });
  OneSignal.on('subscriptionChange', function (isSubscribed) {
    if (isSubscribed) {
      const ext_id = MOGI.ProfileId;
      OneSignal.setExternalUserId(ext_id);
    }
  });
});


var MogiTracking = window.MogiTracking || {};

var MogiTracking = (function () {
  return {

  };


})();
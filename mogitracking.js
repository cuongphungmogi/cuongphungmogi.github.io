OneSignal.push(function () {
  /* These examples are all valid */
  OneSignal.isPushNotificationsEnabled(function (isEnabled) {
    if (isEnabled)
    {
      const ext_id = MOGI.ProfileId;
      OneSignal.setExternalUserId(ext_id);
    };
  });

});


var MogiTracking = window.MogiTracking || {};

var MogiTracking = (function() {
return {

};


})();
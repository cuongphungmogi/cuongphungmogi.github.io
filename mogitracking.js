var MogiTracking = window.MogiTracking || {};

var MogiTracking = (function () {

  const AddTracking = function (player_id) {
    const payload = {
      id: player_id
    };

    fetch('/Tracking/Addtracking', {
      method: 'POST', 
      body: JSON.stringify(payload)
    });

  };
  return {
    AddTracking:AddTracking
  };


})();
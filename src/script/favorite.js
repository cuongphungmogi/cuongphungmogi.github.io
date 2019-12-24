const add_endpoint ="//dev-web.mogi.vn:8780/api/common/favorite-add?propertyId="; 
const remove_endpoint ="//dev-web.mogi.vn:8780/api/common/favorite-remove?propertyId=";

function toggle(){
    let url = "//dev-web.mogi.vn:8780/api/common/favorite-add?propertyId=" + "2089448"
    if(true){
        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },

        })
        .then(response => console.log(response));
    }
}
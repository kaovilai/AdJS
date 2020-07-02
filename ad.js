const adjsonurl="https://adjs.tig.pw/ad.json";
/**
 * Populate ad
 * @param {string} elementid id of element to populate
 * @param {string} adkey key to retrieve data from json
 */
function populateKey(elementid, adkey){
    var adjson = get(adjsonurl,'json',populateJSON,elementid,adkey);
}
/**
 * * Populate ad
 * @param {*} elementid element to populated
 * @param {*} adjson json to populate element
 */
function populateJSON(elementid, adkey, adjson){
    console.log(JSON.stringify(adjson));
    var adsets = getVal(adkey,adjson);
    // var adsets = getVal(adkey,JSON.parse(adjson));
    var adblock = "";
    for(i in adsets){
        if(adsets[i].expire) continue; //don't show expired ad
        adblock += '<a '
            + 'href="' + adsets[i]['href'] + '" target=_blank onclick="ga(\'send\',\'event\',\'ads\',\'click\',\''
            + adsets[i]['network'] + ' - '
            + adsets[i]['company'] + ' - '
            + adsets[i]['campaign'] + '\');">'
            + '<img class="adjs" src="' + adsets[i]['img'] + '"/></a><br>';
    }
    document.getElementById(elementid)
        .innerHTML = '<style> img.adjs {max-width: 100%; width: 100%; height: auto;} </style>'+ adblock;
}
/**
 * calls populate to populate sidebar-ad
 */
function populateSidebar(){
    populateKey("sidebar-ad","sidebar");
}
/**
 * Helper function to retrieve response from URL
 * @param {string} url URL to retrieve response from
 * @param {string} type type of response
 */
function get(url,type,returningfunction,param1,param2){
    var httpreq = new XMLHttpRequest();
    var response = "";
    httpreq.responseType = type;
    httpreq.open("GET",url,true);
    // httpreq.on
    httpreq.onprogress = function () {
        console.log('LOADING', httpreq.readyState); // readyState will be 3
    };
    httpreq.onload = function() {
        response = httpreq.response;
        console.log('onload -> ' + response);
        returningfunction(param1,param2,response);
    };
    httpreq.send();
}
/**
 * Helper function to retrieve object given key in a JSON array
 * @param {string} key Key
 * @param {JSON} obj JSON Array
 */
function getVal(key, obj){
    for(i in obj){
        console.log(i + ' keyis ' + key);
        if(!obj.hasOwnProperty(i)) continue;
        if(i == key){
            return obj[i];
        } 
    }
}
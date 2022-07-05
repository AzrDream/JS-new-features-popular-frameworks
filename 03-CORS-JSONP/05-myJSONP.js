function obj2str(obj) {
    obj.t = (Math.random()+"").replace(".","");
    let arr = [];
    for(let key in obj){
        arr.push(key+"="+encodeURI(obj[key]));
    }
    return arr.join("&");
}
function myJSONP(options) {
    options = options || {};
    let url = options.url;
    let callbackName;
    if(options.jsonp){
        url+="?"+options.jsonp+"=";
    }else{
        url+="?callback=";
    }
    if(options.jsonpCallback){
        url+=options.jsonpCallback;
    }else{
        callbackName = ("jQuery"+Math.random()).replace(".","");
        url+=callbackName;
    }
    if(options.data){
        let str = obj2str(options.data);
        url+="&"+str;
    }
    let oScript = document.createElement("script");
    oScript.src = url;
    document.body.appendChild(oScript);
    window[callbackName] = function (data) {
        document.body.removeChild(oScript);
        options.success(data);
    }
}

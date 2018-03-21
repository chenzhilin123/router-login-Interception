/*缓存字段*/
export const setStorages=function (val){
    localStorage.setItem("userName",val);
}
/*得到相应字段的缓存值*/
export const getStorages=function (val){
    let value = localStorage.getItem(val);
    return value || '';
}
/*清除缓存*/
export const clearStorages=function(){
    localStorage.clear();
}
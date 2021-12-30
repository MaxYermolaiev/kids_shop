import {useEffect,useState,useCallback} from 'react';
class HTTPError extends Error{
    constructor(response) {
      super();
      this.name=name;
      this.request=name;
    }
}
class Engine {
    path = "";
    request=async (url,body,method,header)=>{
         if(body){

         }
         try{

         }catch (e) {

         }
    }
    toJSON= async (data)=> await JSON.stringify(data);

}
function Engine(){
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const storeName="user";
  const {request} = new Engine();

  const engineGetFavorite=useCallback((token)=>{ return request("https://yermolaiev-movie-db.herokuapp.com/api/get-favorite","GET",null,{credentials:`bearer ${token}` })},[request])

  const login=useCallback((token,id)=>{
    setToken(token);setId(id);
    localStorage.setItem(storeName,JSON.stringify({token,id}));
  },[])

  const logout=useCallback(()=>{
    setToken(null);setId(null);
    localStorage.clear();
  },[]);
  /*
  When we reload page data from state will erase
  then why we downland from local storage
  for this, to illuminate when after reload user can be logouted
  */
  useEffect(()=>{
    let localStorageData = JSON.parse(localStorage.getItem(storeName));
    if(localStorageData?.token&&localStorageData?.id){
      login(localStorageData.token,localStorageData.id);
    }
  },[login]);
  return {login,logout,id,token,engineRemoveFavorite,engineAddFavorite,engineGetFavorite}
}
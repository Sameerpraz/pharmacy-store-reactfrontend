import axios from 'axios';
import Config from './config';
import {reactLocalStorage} from 'reactjs-localstorage';

class AuthHandler{
    static login(username,password,callback){
        axios.post(Config.loginUrl,{username:username,password:password})
        .then(function(response){
           if(response.status===200){
               reactLocalStorage.set("token",response.data.access);
               reactLocalStorage.set("refresh",response.data.access);
               callback({
                   error:false,
                   message:"Login successful..."
                });

           }

        })
        .catch(function(error){
            callback({
                error:true,
                message:"Error during Login, Invalid Credential.."
            });
        })

    }
// if user is logged in and he/she press back button then they must not go back to login page
    static loggedIn(){
        if(reactLocalStorage.get("token")&& reactLocalStorage.get("refresh")){
            return true;
        }
        else{
            return false;
        }
    }
    static getLoginToken(){
        return reactLocalStorage.get("token")
    }

    static getRefreshToken(){
        return reactLocalStorage.get("refresh")
    }

    static logoutUser(){
        reactLocalStorage.remove("token");
        reactLocalStorage.remove("refresh"); 
    }

    static checkTokenExpiry(){
        var expire=false;
        var token=this.getLoginToken();
        var tokenArray=token.split(".");
        var jwt=JSON.parse(atob(tokenArray[1]));
        if(jwt &&jwt.exp && Number.isFinite(jwt.exp)){
            expire=jwt.exp*100;
        }
        else{
            expire=false;
        }

        if(!expire){
            return false;
        }
        return Date.now() > expire;
    }
}

export default AuthHandler;
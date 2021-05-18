import { reactLocalStorage } from "reactjs-localstorage";
import Axios from "axios";
import AuthHandler from "./AuthHandler";
import Config from "./config";

class APIHandler{
    async checkLogin(){
        if(AuthHandler.checkTokenExpiry()){
             var response=await Axios.post(Config.refreshApiUrl,{
                 refresh:AuthHandler.getRefreshToken(),
             });
           
             reactLocalStorage.set("token",response.data.access);
        }
    }
    async saveCompanyData(
            name,
            license_no,
            address,
            contact_no,
            email,
            description
        ){
        this.checkLogin(); 

        var response=await Axios.post(Config.companyApiUrl,{name:name,
            license_no:license_no,
            address:address,
            contact_no:contact_no,
            email:email,
            description:description
        },{headers:{Authorization:"Bearer " + AuthHandler.getLoginToken()}}
        );

        return response;
    }
}

export default APIHandler;
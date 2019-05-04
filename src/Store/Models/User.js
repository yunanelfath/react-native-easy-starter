import { action, thunk } from "easy-peasy";
import { ApiService } from "../../Store";
import { STATUS, APP_STATE } from "../../Constants";
import BaseModel from "./Base";

const checkAppVersion = thunk( async (actions,  payload) => {
     actions.updateStatus(STATUS.FETCHING)          
    //  let response = await ApiService.checkAppVersion();
    //  if(response.ok){     
        // actions.setVersion(9)
        actions.updateStatus(STATUS.SUCCESS)
    //  }
})

const AppModel ={
    ...BaseModel(),
    
}

export default AppModel
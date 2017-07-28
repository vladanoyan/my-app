/**
 * Created by developer-04 on 28-Jul-17.
 */





export default function reducer (state = [], action) {
    if(action.type==='SHOW_DATA'){
        alert("thank u for your action")
        return action.payload


    }
    return state;

}


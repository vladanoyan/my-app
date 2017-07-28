/**
 * Created by developer-04 on 28-Jul-17.
 */

const data =['action-data'];

export const getData =()=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch({type:"SHOW_DATA", payload:data});
        },2000)
    }
}
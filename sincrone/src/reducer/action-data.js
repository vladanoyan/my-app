/**
 * Created by developer-04 on 28-Jul-17.
 */


export const getData =(dat)=>{
    console.log(dat,"dat");
    return dispatch =>{
        setTimeout(()=>{
            dispatch({type:"SHOW_DATA", payload:[]});
        },2000)
    }
}
import { onValue, set } from "firebase/database";
import { userShowNameRef } from "../../services/firebase";

export const TOGGLE_CHECKBOX = "PROFILE::TOGGLE_CHECKBOX";

export const toggleCheckbox = {
  type: TOGGLE_CHECKBOX,
};

let unsubscribe;

export const initProfilerTrack = ()=> (dispatch)=> {  
  debugger
  const unsubscribeShowName = onValue(userShowNameRef, ()=>{
    dispatch(toggleCheckbox);
});
unsubscribe = () => {
  unsubscribeShowName();
};
};

export const setShowName = (value) => () => {
  set(userShowNameRef, value);
};

export const stopProfilerTrack = ()=> ()=> {
  unsubscribe();
};
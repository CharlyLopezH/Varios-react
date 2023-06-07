import { useState } from "react";

export const myOwnForm=(initialForm={})=>{

console.log(initialForm);

const [formState, setFormState]=useState(initialForm);


const onHandlerInput=(e)=>{
    console.log('OnHandler');
    setFormState({
        ...formState,
        [e.target.name]:e.target.value 
    });

}


const onHandlerClick=()=>{
 console.log('Click Handler', formState);         
 setFormState(initialForm);
}



return {formState, onHandlerClick, onHandlerInput }
}
export default myOwnForm;
import { useRef } from "react";

const App=()=>{

    const inputRef = useRef (); 

    const onClickHandler=()=>{
        console.log('onClick');
        //No garantiza que se elija el elemento adecuado
        //document.querySelector('input').focus();
        console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
        <div className="container">
        <h2>Focus</h2>
        <code>Como hacer un focus control, usando "ref" </code>
        <hr/>
        <input 
        className="form-control mt-2 md-4"        
        name="input1"
        >
        </input>

        <input 
        className="form-control mt-2 md-4"
        placeholder="2. Atención aquí."
        ref={inputRef}
        name="input2"
        >
        </input>

        <input 
        className="form-control mt-2 md-4"
        name="input3"
        >
        </input>


        <button 
        className="btn btn-success mt-2"
        onClick={onClickHandler}
        
        > 1. Click Aquí</button>
        </div>
        </>
    )
}
export default App;
import React,{Fragment} from "react";

const InputField = ({inputText,inputChangeHandler,submit,placeholder}) =>{
  return(
<Fragment>

  <input type="text" value ={inputText} onChange={inputChangeHandler} placeholder ="Add New Task" />
<button onClick ={submit}>+</button>
</Fragment>
);
};

export default InputField;
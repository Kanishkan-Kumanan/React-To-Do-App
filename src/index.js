import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import Title from "./Components/Title";
import InputField from "./Components/inputField";

const $rootElement = document.querySelector("#root");

//const H1Tag = React.createElement("h1",{className:"title"},"Hello World!");

const App =() =>{
  const [tasks,setTasks] = useState(
    window.localStorage.getItem("tasks-data")
? JSON.parse(window.localStorage.getItem("tasks-data"))
   : [
{
text : "Buy Grocery",
isComplete :true
},
{
  text:"Car Wash",
  isComplete :false
}
  ]
  );
 
  const[inputText, setInputText] = useState("");

  const inputChangeHandler = event =>{
    setInputText(event.target.value);
  };

const addTask = () =>{
  if(inputText){
const newTask = {
text: inputText,
isComplete:false
};
setTasks(tasks.concat(newTask));
setInputText("");
}
};

const toggleStatus = selectedTaskIndex =>{
setTasks(
tasks.map((task,taskIndex) =>{
if(taskIndex === selectedTaskIndex){
return{
...task,
isComplete:!task.isComplete
};
}
return task;
})
);
};
useEffect(() =>{
window.localStorage.setItem("tasks-data",JSON.stringify(tasks));
});

  return (
 <div>
<Title title ="To do List App!"/>
<InputField
    inputText ={inputText}
    inputChangeHandler={inputChangeHandler}
    submit={addTask}
placeholder="Add new task..."
/>
<ul>
{tasks.map((task,taskIndex) =>{
const checkBoxChangeHandler = () => {
toggleStatus(taskIndex);
}
return(
<li key ={taskIndex}>
<input type ="checkbox" onChange = {checkBoxChangeHandler} checked ={task.isComplete}/>
{task.text}</li>
)
})}
</ul>
</div>
);
};


ReactDOM.render(<App/>,$rootElement);
import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./index.css";

const App = ()=>{
    
    const [work,setWork] = useState([]);
    const [list,setList] =useState();
    const setwork =()=>{
        setWork([...work,list]);
        setList("");
    }
    
    const getWork=(e)=>{
        // console.log(e.target.value);
        // setList(<li><button className="button1" onClick={deleteWork}> x </button>{e.target.value}</li>);
        setList(e.target.value);   
        // setList("");     
        
    }
    
    const deleteWork = (id)=>{
            // console.log("deleted");
            setWork((work) =>{
                return work.filter((arrElem,index) =>{
                    return index !== id;
                })
            })
        };
    
    return(
        <>
            <div className="main_div">
            <div className="head">
                <h2>ToDo List</h2>
                <hr className="hr2"></hr>
                <input type="text" placeholder="Add Item" value={list} onChange={getWork}></input>
                
                <button className="button" onClick={setwork}> + </button>
                    <div className="list1">
                        <ul>{work.map((item,index) =>{
                            return <ToDoList
                              key ={index}
                              id = {index}
                              onSelect = {deleteWork}
                              text={item}/>
                        })}</ul>
                    </div>
                
            </div>
            </div>
        </>
    );
}

export default App;
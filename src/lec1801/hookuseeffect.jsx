import * as React from "react";

function fetchUseData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({x:"Pooja",y:1});
        }, 5000);
    });
}

function ApiSimulatoin(){
    const[name,setName]=React.useState("loading....")
    const[id,setId]=React.useState("loading....")
    React.useEffect(()=>{
    fetchUseData().then((abc)=>{
        setName(abc.x);
        setId(abc.y);
    });
    });
    return(
        <div>
           <b> User: {name} <br />
           Id: {id}</b>
        </div>
    );
}

export default ApiSimulatoin;

//Implement Countdown timer with useeffect
//pass array of string as argument
//convert array to unordered list
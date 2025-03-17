//one method to declare all state variables
import { useReducer } from "react";
function Func1(state,action) {
    switch(action.type){
        case 'changeName':
            return {...state, name: action.name};
            // ... return all values and name update values returned
        case 'changeAge':
            return {...state, age: action.age};
             // ... return all values and age update values returned
        default:
            return state;
    }
    
}

function ReducerExmp(){
    const[{name,age},dispatch]=useReducer(Func1,{
        name:"Pooja",
        age:20
    });
    return (
        <div>
            <input type="text"
            value={name}
            onChange={(e)=>{
                dispatch({type:'changeName',name:e.target.value})
            }}
            />
            <br />
            <br />
            Name:{name}
            <br />
            <br />
            <input type="text"
            value={age}
            onChange={(e)=>{
                dispatch({type:'changeAge',age:e.target.value})
            }}
            />
              <br />
              <br />
            Age:{age}
        </div>
      )
}
 export default ReducerExmp;
import { useEffect,useState } from "react";
import {Promise, resolve} from "bluebird";

function fetchuserDate() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id:1,name:"PG"});
        }, 3000);
    })
}
function UserComp1() {
    const [id,setId] = useState("loading....");
    const [name,setNamed] = useState("loading....");
    useEffect(() => {
        const promise = fetchuserDate().then((user)=>{
            setId(user.id);
            setNamed(user.name);
        });
        return()=>{
            promise.cancel();
        }
    });
    return (
        <div>
            Id:{id} <br />
            Name:{name}
        </div>
    );
}
export default UserComp1;
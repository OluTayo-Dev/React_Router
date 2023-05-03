import React from "react";
import  {useState} from "react";



export default function Parent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onChangeFirstName = (event) => {
        setFirstName(event.target.value)
    };
    const onChangeLastName = (event) => {
        setLastName(event.target.value)
    };
    const onSubmit = () => {
        alert("successful");
    }
    console.log(firstName, "firstName", lastName, "lastName");








    return (
        <div>
            <form onSubmit={onSubmit}> 
                 <input type="text"  required
                 placeholder="enter firstName" 
                 id="firstName"
                 onchange={onChangeFirstName}
                />
                <input type="text" required
                 placeholder="enter lastName"
                 id="lastName"
                 onChange={onChangeLastName}
                 />
                 <button>Submit</button>
            </form>
            
        </div>
    );
}
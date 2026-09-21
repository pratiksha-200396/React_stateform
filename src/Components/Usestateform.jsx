import { useEffect, useState } from 'react'

function Usestateform() {
let[name, setName] = useState("");
let [email, setEmail] = useState("");

    function onFormSubmit(e){
        alert("form submitted...");
        console.log("Name : " + name);
        console.log("Email : " + email);
        e.preventDefault();
    }
    useEffect(()=>{
        console.log("usestateform created/updated");  
    },[name]);

  return (
    <div>
        <h1>usestate form</h1>
        <form onSubmit={onFormSubmit}>
        Name : <input type='text' onChange={(e)=>setName(e.target.value)}/> <br />
        Email : <input type='email' onChange={(e)=>setEmail(e.target.value)}/> <br/>
        <button type='submit'> Submit</button>
        </form>
    </div>
  )
}

export default Usestateform
import React from 'react'
import { useForm } from 'react-hook-form';

function UseFormHook() {
    const{register,handleSubmit}=useForm();


    function onFOrmsubmit(data){
        alert("form submtted...!");
        console.log(data);

    }
  return (
    <div>
        <h1>useform hook</h1>
        <form onSubmit={handleSubmit(onFOrmsubmit)}>
            <fieldset>
                <legend>Personal Details</legend>
            Name : <input type= "text"{...register("name")}/>
            <br />
            Email : <input type= "email"{...register("email")}/>
            <br />
            Gender : Male <input type= "radio"{...register("gender")} value="male"/>
            Female <input type= "radio"{...register("gender")} value="female"/>
            <br />
            Courses : Java :<input type= "checkbox"{...register("course")} value="java"/>
            SQL :<input type= "checkbox"{...register("course")} value="sql"/>
            React :<input type= "checkbox"{...register("course")} value="React"/>
            <br />
            </fieldset>
            <fieldset>
            City : <select {...register("city")}>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
            </select>
            </fieldset>
            <br />
            <button type='submit'>sumbit</button>

        </form>
    </div>
  )
}

export default UseFormHook
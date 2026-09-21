import React from 'react'
import { useForm } from 'react-hook-form';

function ResetUsefrom() {
    const{register,handleSubmit,reset,setValue,formState:{errors}}=useForm();


    function onFOrmsubmit(data){
        alert("form submtted...!");
        console.log(data);

    }
    function onSetValue(){
setValue("name","abc");
setValue("email","abc@gmail.com")

    }
  return (
    <div>
        <h1>useform hook</h1>
        <form onSubmit={handleSubmit(onFOrmsubmit)}>
            <fieldset>
                <legend>Personal Details</legend>
            Name : <input type= "text"{...register("name",{required : "Name required",
                minLength : {value:3,message:"Name must be atleast 3 characters"}
            })}/>
            <br />

            {errors.name && <p>{errors.name.message}</p>}
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

export default ResetUsefrom
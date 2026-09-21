import React from 'react'
import { useForm } from 'react-hook-form';

function FieldValidation() {
    const{register,handleSubmit,reset,setValue,formState:{errors}}=useForm();


    function onFOrmsubmit(data){
        alert("form submtted...!");
        console.log(data);

    }
    function onSetValue(){
setValue("name","abc");
setValue("email","abc@gmail.com")

    }

    const FieldValidation = {
        name : {
            required : {value : true, message : "name required...!"},
            minLength:{ value :3,message:"Name must be alteast 3 character"},
            maxLength : {value : 15, message : "name must be less than 15 characters"}
        },
        contact : {
            pattern : {value : /^[6-9]\d{9}$/,message : "enter valid contact"}
        }
    }
  return (
    <div>
        <h1>useform hook</h1>
        <form onSubmit={handleSubmit(onFOrmsubmit)}>
            <fieldset>
                <legend>Personal Details</legend>
            Name : <input type= "text"{...register("name",FieldValidation.name)}/>
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

export default FieldValidation
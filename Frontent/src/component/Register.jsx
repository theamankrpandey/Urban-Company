import {useState} from "react";
import API from "../api/axios";


function Register(){


const [user,setUser]=useState({

username:"",
phone:"",
address:"",
city:"",
pincode:""

});


const handleChange=(e)=>{

setUser({

...user,

[e.target.name]:e.target.value

})

}



const submitUser=async(e)=>{

e.preventDefault();


try{


const res=await API.post(
"/UserApi/",
user
);


console.log(res.data);

alert("User Created");


}

catch(error){

console.log(error.response.data)

}


}



return(

<form onSubmit={submitUser}>


<input 
name="username"
placeholder="Username"
onChange={handleChange}
/>


<input 
name="phone"
placeholder="Phone"
onChange={handleChange}
/>


<input 
name="address"
placeholder="Address"
onChange={handleChange}
/>


<input 
name="city"
placeholder="City"
onChange={handleChange}
/>


<input 
name="pincode"
placeholder="Pincode"
onChange={handleChange}
/>



<button>
Register
</button>


</form>

)

}


export default Register;
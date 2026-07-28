import {useState} from "react";
import API from "../Axios/api/axios";


function VendorRegister(){

const [vendor,setVendor] = useState({

    name:"",
    phone:"",
    address:"",
    city:"",
    experience:""

});



const handleChange=(e)=>{

    setVendor({

        ...vendor,

        [e.target.name]:e.target.value

    })

}



const handleSubmit=async(e)=>{
e.preventDefault();
try{
const res = await API.post(
    "/VendorApi/",
    vendor
);
console.log(res.data);
alert("Vendor Registered Successfully");
}
catch(error){
console.log(error.response.data);
}

}




return(

<div>

<h2>Vendor Registration</h2>


<form onSubmit={handleSubmit}>


<input

type="text"

name="name"

placeholder="Vendor Name"

onChange={handleChange}

/>



<input

type="text"

name="phone"

placeholder="Phone Number"

onChange={handleChange}

/>



<input

type="text"

name="address"

placeholder="Address"

onChange={handleChange}

/>



<input

type="text"

name="city"

placeholder="City"

onChange={handleChange}

/>



<input

type="number"

name="experience"

placeholder="Experience"

onChange={handleChange}

/>



<button type="submit">

Register Vendor

</button>


</form>


</div>


)

}


export default VendorRegister;
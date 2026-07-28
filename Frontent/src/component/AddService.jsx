import API from "../Axios/api/axios";
import {useState} from "react";


function AddService(){


const [service,setService]=useState({

category:"",
name:"",
description:"",
price:"",
duration:""

});


const submit=async(e)=>{

e.preventDefault();


let res=await API.post(

"/ServiceApi/",

service

);


console.log(res.data);


}



return(

<form onSubmit={submit}>


<input
placeholder="Category ID"
onChange={(e)=>
setService({...service,category:e.target.value})
}
/>


<input
placeholder="Service Name"
onChange={(e)=>
setService({...service,name:e.target.value})
}
/>


<input
placeholder="Description"
onChange={(e)=>
setService({...service,description:e.target.value})
}
/>


<input
placeholder="Price"
onChange={(e)=>
setService({...service,price:e.target.value})
}
/>


<input
placeholder="Duration"
onChange={(e)=>
setService({...service,duration:e.target.value})
}
/>


<button>
Add Service
</button>


</form>

)


}

export default AddService;
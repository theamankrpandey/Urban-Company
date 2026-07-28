import { useEffect } from "react";
import API from "../Axios/api/axios";

function AddressApi(){

    useEffect(()=>{

        API.post("/AddressApi/", {
            user: 1,
            house_no: "101",
            area: "MP Nagar",
            city: "Bhopal",
            pincode: "462001",
            landmark: "Near Mall"
        })
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });

    },[]);


    return (
        <>
            <h2>Address API</h2>
        </>
    )
}

export default AddressApi;
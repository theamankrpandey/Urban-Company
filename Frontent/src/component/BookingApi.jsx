import API from "../Axios/api/axios";

const BookingApi = () => {

    const createBooking = () => {

        API.post("/BookingApi/", {
            user: 1,
            service: 2,
            Vendor: 1,
            booking_date: "2026-07-25",
            booking_time: "10:30",
            address: 1,
            status: "pending"
        })
        .then((res)=>{
            console.log("Booking Created", res.data);
        })
        .catch((err)=>{
            console.log("Booking Error", err);
        });

    };


    return (
        <button onClick={createBooking}>
            Create Booking
        </button>
    );
};


export default BookingApi;
import API from "../Axios/api/axios";

const PaymentApi = () => {

  const makePayment = async () => {
    try {

      const response = await API.post("/PaymentApi/", {
        booking: 1,
        amount: 500,
        payment_id: "PAY123",
        status: "success"
      });

      console.log(response.data);

    } catch(error) {

      console.log(error);

    }
  };


  return (
    <div>
      <button onClick={makePayment}>
        Make Payment
      </button>
    </div>
  );
};


export default PaymentApi;
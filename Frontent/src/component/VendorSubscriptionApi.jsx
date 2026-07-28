import API from "../Axios/api/axios";

const VendorSubscriptionApi = () => {

  const subscribeVendor = async () => {

    try {

      const response = await API.post("/VendorSubscriptionApi/", {

        Vendor: 1,
        plan: 2,
        payment_id: "TXN123"

      });

      console.log(response.data);

    } catch(error) {

      console.log(error);

    }

  };


  return (
    <div>
      <button onClick={subscribeVendor}>
        Subscribe Plan
      </button>
    </div>
  );

};


export default VendorSubscriptionApi;
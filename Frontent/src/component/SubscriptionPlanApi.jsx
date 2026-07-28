import API from "../Axios/api/axios";

const SubscriptionPlanApi = () => {

  const createSubscriptionPlan = async () => {

    try {

      const response = await API.post("/SubscriptionPlanApi/", {
        name: "premium",
        price: 999,
        duration_months: 3,
        features: "create_booking,analytics"
      });

      console.log(response.data);

    } catch(error) {

      console.log(error);

    }

  };


  return (
    <div>
      <button onClick={createSubscriptionPlan}>
        Create Plan
      </button>
    </div>
  );

};


export default SubscriptionPlanApi;
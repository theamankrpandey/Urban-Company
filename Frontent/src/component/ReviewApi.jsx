import API from "../Axios/api/axios";

const ReviewApi = () => {

  const submitReview = async () => {
    try {

      const response = await API.post("/ReviewApi/", {
        user: 1,
        service: 2,
        rating: 5,
        comment: "Excellent service"
      });

      console.log(response.data);

    } catch(error) {

      console.log(error);

    }
  };


  return (
    <div>
      <button onClick={submitReview}>
        Submit Review
      </button>
    </div>
  );
};


export default ReviewApi;
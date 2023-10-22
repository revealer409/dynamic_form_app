import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { Link, useNavigate } from "react-router-dom";

const ThankYouCard: React.FC = () => {
  const formData = useSelector((state: RootState) => state.form.data);

  let navigate = useNavigate();
  
  useEffect(() => {
    if(formData==null || typeof formData.firstName=='undefined'){
      navigate('/');
    } 
  }, [formData, navigate]);

  return (
    // <div>
    //   {/* Display the collected data in the same layout as the form field UI */}
    //   {Object.entries(formData).map(([key, value])=> (
    //     <div key={key}>
    //       <strong>{key}:</strong> {value}
    //     </div>

    //   )
    // )}
    // </div>

    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="card col-lg-5 col-md-6  col-10 bg-white shadow-md p-5   ">
        <div className="mb-4 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-success bi bi-check-circle"
            width="75"
            height="75"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
          </svg>
        </div>
        <div className="text-center">
          <h3>
            Thank You {formData.firstName} {formData.lastName} !
          </h3>
          <p className="my-3">Your response is submitted for further processing.</p>
          
          <Link className="btn btn-primary mt-5" to={`/`}>
          Go Back To Home
                </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouCard;

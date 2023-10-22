import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submit } from "../../store/reducers/formSlice";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormDataModel from "../../models/FormDataModel";
import FormBody from "./FormBody";
import jsonFields from "../../data/fields.json";
const DynamicForm: React.FC = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const initialForm: FormDataModel = {
    firstName: "",
    lastName: "",
    Email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    jobTitle: "",
    reason: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("FirstName is required"),
    lastName: Yup.string().required("LastName is required"),
    Email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10,15}$/, "Invalid phone number format")
      .required("Phone is required"),
  });

  // const objectEntries=(data:FormData)=>{
  //   Object.entries(data).map(([key, value])=> {
  //      console.log(key)
  //   }
  //   );
  // }

  const handleSubmit = async (data: FormDataModel) => {
    try {
      await dispatch(submit({ ...data }));
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Formik
      initialValues={initialForm}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form
        className="pt-5"
        style={{ width: "80%", marginRight: "auto", marginLeft: "auto" }}
      >
        <div className="card mb-4">
          <div className="card-header">Candidate Details</div>
          <div className="card-body">
            <div className="row gx-3 mb-3">
              {jsonFields.map((field) => (
                <div key={field.id} className="col-md-6">
                  {
                    <FormBody
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      label={field.label}
                      placeholder={field.placeholder}
                      options={field.options}
                    />
                  }
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-end ">
              <button
                className="btn btn-primary mt-0  btn-lg mx-5 "
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default DynamicForm;

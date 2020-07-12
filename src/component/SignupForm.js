import React, { useState } from "react";
import "./main.css";
import CustomInput from "./common/CustomInput";
import FormCreator from "./signup_form/FormCreator";
import {
  signupFormStage1,
  signupFormStage2
} from "./yup_validation_schemas/yupSchemas";

const SignupForm = () => {
  //form state to change form stage
  const [formStage, setFormState] = useState(0);
  //component to group form stages
  const FormStage = ({ children }) => children;
  //form inital values
  const initialValuesArray = [
    { email: "", phone: "", password: "", reEnterPassword: "" },
    { otp: "" }
  ];
  return (
    <>
      <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
          <div className="card card-3">
            <div className="card-heading"></div>
            <div className="card-body">
              <h2 className="title">Registration Info</h2>

              <FormCreator>
                <FormStage
                  initValues={initialValuesArray[0]}
                  validationSchema={signupFormStage1}
                >
                  <CustomInput
                    className="input--style-3"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <CustomInput
                    className="input--style-3"
                    type="text"
                    placeholder="Phone"
                    name="phone"
                  />
                  <CustomInput
                    className="input--style-3"
                    type="password"
                    placeholder="Enter password"
                    name="password"
                  />
                  <CustomInput
                    className="input--style-3"
                    type="password"
                    placeholder="Re-enter your password"
                    name="reEnterPassword"
                  />
                  <button className="btn btn--pill btn--green" type="submit">
                    Submit
                  </button>
                </FormStage>
                <FormStage
                  initValues={initialValuesArray[1]}
                  validationSchema={signupFormStage2}
                >
                  <CustomInput
                    className="input--style-3"
                    type="password"
                    placeholder="Re-enter your password"
                    name="otp"
                  />
                  <button className="btn btn--pill btn--green" type="submit">
                    Submit
                  </button>
                </FormStage>
              </FormCreator>
              <div className="p-t-10"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;

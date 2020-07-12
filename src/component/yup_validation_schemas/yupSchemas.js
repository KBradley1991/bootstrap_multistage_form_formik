import * as yup from "yup";

//phone number validation
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signupFormStage1 = yup.object().shape({
  email: yup.string().email().required("Please enter a email address"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please enter a phone number"),
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Password needs to be more than 8 characters"),
  reEnterPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
});

export const signupFormStage2 = yup.object().shape({
  otp: yup
    .number()
    .min(4, "Enter the correct OTP code")
    .max(4, "Enter the correct OTP code")
});

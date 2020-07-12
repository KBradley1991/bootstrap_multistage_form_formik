import React from "react";
import { useField } from "formik";
import "./customInput.css";

const CustomInput = (props) => {
  const [field, meta] = useField(props);
  //console.log("field", field);
  console.log("meta", meta);
  return (
    <>
      <div className="input-group">
        <input
          name={field.name}
          value={field.value || ""}
          onChange={field.onChange}
          {...props}
        />
        {meta.error && meta.touched && (
          <div>
            <h1>{meta.error}</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomInput;

import React from "react";

const FormSignupInput = ({
  id,
  label,
  type,
  name,
  placeholder,
  register,
  errors,
}) => (
  <div className="mb-3">
    <label htmlFor={id} className="float-left ml-5">
      {label} <span className="text-red-600">*</span>
    </label>
    <br />
    <input
      className="w-11/12 py-2 px-4 border rounded-lg text-sm text-center"
      type={type}
      {...register(id, {
        required: "Obavezno",
        minLength:
          type === "password"
            ? {
                value: 8,
                message: "TOO SHORT",
              }
            : null,
        pattern:
          name === "email"
            ? {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              }
            : null,
      })}
      name={name}
      placeholder={placeholder}
      id={id}
    />
    {errors[id] ? (
      <p className="text-xs text-red-500">{errors[id].message}</p>
    ) : null}
  </div>
);

export default FormSignupInput;

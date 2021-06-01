import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormSignupInput from "./FormSignupInput";

const FormSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    setSubmitting(true);

    console.log(values);

    setSubmitting(false);
  };
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="w-11/12 inline-block">
      <h1 className="my-5">Napravite nalog!!!!!!!</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormSignupInput
          id="email"
          label="Email adresa"
          type="text"
          name="email"
          placeholder="Unesite email"
          register={register}
          errors={errors}
        />

        <FormSignupInput
          id="firstName"
          label="Ime"
          type="text"
          name="firstName"
          placeholder="Unesite ime"
          register={register}
          errors={errors}
        />

        <FormSignupInput
          id="lastName"
          label="Prezime"
          type="text"
          name="lastName"
          placeholder="Unesite prezime"
          register={register}
          errors={errors}
        />

        <FormSignupInput
          id="password"
          label="Lozinka"
          type="password"
          name="password"
          placeholder="Unesite password"
          register={register}
          errors={errors}
        />

        <FormSignupInput
          id="password2"
          label="Potvrdite Lozinku"
          type="password"
          name="password2"
          placeholder="Potvrdite password"
          register={register}
          errors={errors}
        />

        <FormSignupInput
          id="date"
          label="Datum rođenja"
          type="date"
          name="date"
          register={register}
          errors={errors}
        />

        <button
          type="submit"
          className="mt-4 w-full py-2 px-4 border rounded-lg text-center"
          disabled={submitting}
        >
          Registruj se
        </button>
      </form>

      <p className="float-left ml-2 mt-5">Vec imate nalog?</p>
      <button className="w-full py-2 px-4 border rounded-lg text-center">
        Ulogujte se
      </button>
    </div>
  );
};

export default FormSignup;

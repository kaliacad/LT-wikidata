import React from "react";
import { useForm } from "react-hook-form";

export default function Header() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="Seach"
          id="seach"
          {...register("text", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <button type="submit">Seach</button>
      </form>
    </div>
  );
}

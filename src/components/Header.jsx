import React from "react";
import { useForm } from "react-hook-form";

export default function Header({ setInput }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (search) => {
    setInput(search.text);
  };
  return (
    <div>
      <img src="/wikipedia_PNG1.png" alt="" />
      <div className="input-div">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input
            type="text"
            name="Search"
            placeholder="Tapez ici votre recherche..."
            id="search"
            {...register("text", {
              required: true,
              maxLength: 20,
            })}
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
      </div>
    </div>
  );
}

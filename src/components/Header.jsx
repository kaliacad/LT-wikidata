import React from "react";
import { useForm } from "react-hook-form";

export function ResearchImage(){
  return(
    <div className="logo">
      <img src="/wikipedia_PNG1.png" alt="" />
      <p>Recherche wikidata</p>
    </div>
  )
}



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
    <div className="haeder">   
      <div className="input-div">
        <ResearchImage />
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

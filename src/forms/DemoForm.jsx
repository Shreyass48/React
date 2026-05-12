import React from "react";
import { useForm } from "react-hook-form";

export default function DemoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { name: "" } });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && <p>Name is required</p>}
        </div>
        <div>{/* //use controller for 3rd party libraries */}</div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

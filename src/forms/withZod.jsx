import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define Zod validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Please select a country"),
  gender: z.string().min(1, "Please select a gender"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function WithZod() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      gender: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        Form with React Hook Form & Zod
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Input 1: Name */}
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            {...register("name")}
            type="text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Input 2: Email */}
        <div>
          <label className="block mb-2 font-medium">Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Dropdown: Country */}
        <div>
          <label className="block mb-2 font-medium">Country</label>
          <select
            {...register("country")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a country</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Radio Button: Gender */}
        <div>
          <label className="block mb-2 font-medium">Gender</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                {...register("gender")}
                type="radio"
                value="male"
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                {...register("gender")}
                type="radio"
                value="female"
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                {...register("gender")}
                type="radio"
                value="other"
                className="mr-2"
              />
              Other
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Text Area: Message */}
        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            {...register("message")}
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your message (minimum 10 characters)"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

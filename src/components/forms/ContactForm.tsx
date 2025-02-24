"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  message: string;
}

const countryCodes = [
  {
    code: "+1",
    label: "USA/Canada",
    flag: "https://www.svgrepo.com/show/248844/canada.svg",
  },
  {
    code: "+44",
    label: "UK",
    flag: "https://www.svgrepo.com/show/248821/united-kingdom-uk.svg",
  },
  {
    code: "+91",
    label: "India",
    flag: "https://www.svgrepo.com/show/248832/india.svg",
  },
  {
    code: "+971",
    label: "Emirates ",
    flag: "https://www.svgrepo.com/show/248916/united-arab-emirates.svg",
  },
  {
    code: "+81",
    label: "Japan",
    flag: "https://www.svgrepo.com/show/241285/japan.svg",
  },
  {
    code: "+49",
    label: "Germany",
    flag: "https://www.svgrepo.com/show/405490/flag-for-flag-germany.svg",
  },
  {
    code: "+20",
    label: "Egypt",
    flag: "https://www.svgrepo.com/show/405472/flag-for-flag-egypt.svg",
  },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setSubmitted(true);
  };

  const handleCountrySelect = (country: (typeof countryCodes)[0]) => {
    setSelectedCountry(country);
    setValue("countryCode", country.code); // Update hidden input value
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-4">
          <div className="w-full">
            <label className="block font-semibold text-sm text-secondary-light mb-1">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className="w-full p-2 border rounded-lg outline-none"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block font-semibold text-sm text-secondary-light mb-1">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full p-2 border rounded-lg outline-none"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-semibold text-sm text-secondary-light mb-1">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full p-2 border rounded-lg outline-none"
            placeholder="You@Company.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-sm text-secondary-light mb-1">
            Phone Number
          </label>
          <div className="flex space-x-2">
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-2 p-2 border rounded-lg bg-white"
                onClick={() =>
                  document
                    .getElementById("country-menu")
                    ?.classList.toggle("hidden")
                }>
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.label}
                  className="w-6 h-4"
                />
                <span>{selectedCountry.code}</span>
              </button>
              <div
                id="country-menu"
                className="absolute bg-white border rounded-lg shadow-lg hidden mt-2 w-36">
                {countryCodes.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleCountrySelect(country)}>
                    <img
                      src={country.flag}
                      alt={country.label}
                      className="w-6 h-4"
                    />
                    {country.code}
                  </button>
                ))}
              </div>
            </div>
            <input
              type="hidden"
              {...register("countryCode", {
                required: "Country code is required",
              })}
              value={selectedCountry.code}
            />
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{7,15}$/,
                  message: "Invalid phone number",
                },
              })}
              placeholder="123456789"
              className="w-full p-2 border rounded-lg outline-none"
            />
          </div>
          {errors.countryCode && (
            <p className="text-red-500 text-sm">{errors.countryCode.message}</p>
          )}
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold text-sm text-secondary-light mb-1">
            Message
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full p-2 border rounded-lg outline-none resize-none min-h-[150px]"
            placeholder="Leave us a message..."></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded-lg hover:bg-black disabled:opacity-50 link-smooth"
          disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
function setSubmitted(arg0: boolean) {
  throw new Error("Function not implemented.");
}

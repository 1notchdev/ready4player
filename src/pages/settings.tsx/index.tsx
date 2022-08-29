import Navigation from "../../components/Nagivation";
import Footer from "../../components/Footer";
import DarkInput from "../../components/DarkInput";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Settings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  return (
    <div className="flex flex-col py-4 w-full min-h-screen bg-main overflow-hidden overscroll-none text-white">
      <Navigation />
      <main className="flex flex-col justify-start items-start min-h-[50vh] px-[10rem] gap-10">
        <p className="font-bold text-xl">Settings</p>
        <div className="flex flex-col gap-4 w-full">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
            className="flex flex-col gap-4 items-start w-full"
          >
            <div className="w-1/3 flex flex-col gap-2">
              <input
                {...register("email", { pattern: /^\S+@\S+\.\S+$/ })}
                placeholder={"Your email"}
                className="text-sm text-white outline-none bg-[#131416] border-[#383B42] border px-3 py-3  rounded-md flex gap-3 "
              />
              <p>{errors.email && "Please enter valid email"}</p>
            </div>

            <div className="w-1/3 flex flex-col gap-2">
              <input
                {...register("displayname", {
                  minLength: {
                    value: 4,
                    message: "Display name should be at least 4 characters",
                  },
                  maxLength: {
                    value: 30,
                    message: "Display name should be max 30 characters",
                  },
                })}
                placeholder={"Display Name"}
                className="text-sm text-white outline-none bg-[#131416] border-[#383B42] border px-3 py-3  rounded-md flex gap-3 "
              />
              {/* @ts-ignore */}
              <p>{errors.displayname?.message}</p>
            </div>

            <button
              type="submit"
              className={`flex items-center bg-teal-200 hover:bg-teal-300 text-gray-800 rounded px-3 py-2 disabled:cursor-default disabled:bg-gray-300`}
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

"use client";
import React from "react";
import { signUp } from "../lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  const onsubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const user = Object.fromEntries(formdata.entries()) as {
      name: string;
      email: string;
      password: string;
    };
    const { data, error } = await signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    if (data) {
      console.log(data);
      redirect("/");
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center gap-5 justify-center mt-10">
      <h5 className="text-3xl">Sign Up</h5>
      <form onSubmit={onsubmit} action="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input name="name" type="Name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
        <button type="submit" className="btn btn-neutral mt-4">
            Sign Up
          </button>
          
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;

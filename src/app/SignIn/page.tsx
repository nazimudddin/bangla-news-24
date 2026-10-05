"use client"
import React from "react";
import { redirect } from "next/navigation";

import { toast } from "react-toastify";
import { signIn } from "../lib/auth-client";

const SignIn = () => {
  const onsubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const user = Object.fromEntries(formdata.entries()) as {
      email: string;
      password: string;
    };
    const { data, error } = await signIn.email({
      email: user.email,
      password: user.password,
    });
    if (data) {
      console.log(data);
      redirect("/");
    }
    if (error) {
      toast.error("Invalid email or password")
      console.log(error);
    }
  };
  const googlesignin = async()=>{
    const signinwithgoogle = await signIn.social({
      provider: "google"
    })
    console.log(signinwithgoogle);
  }
  const githubignin = async()=>{
    const githubwith = await signIn.social({
      provider: "github"
    })
    console.log(githubignin);
  }
  return (
    <div className="flex flex-col items-center gap-5 justify-center mt-10">
      <h5 className="text-3xl">Sign Up</h5>
      <form onSubmit={onsubmit} >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
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
         
            {" "}
            <button className="btn btn-neutral mt-4 bg-red-600 text-white">Login</button>
            
      
        </fieldset>
      </form>
      <button onClick={googlesignin} className="btn bg-black btn-neutral text-white font-bold ">Sign in with google</button>
      <button onClick={githubignin} className="btn bg-black btn-neutral text-white font-bold ">Sign in with github</button>
    </div>
  );
};

export default SignIn;

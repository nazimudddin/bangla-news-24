"use client";
import { signOut, useSession } from "@/app/lib/auth-client";
import Link from "next/link";
import React from "react";

const HeaderBtn = () => {
  const { data: setsson } = useSession();
  console.log(setsson);
  return (
    <div className="absolute right-4 top-1/2 -translate-y-1/1 flex gap-2">
      {setsson?.user ? (
        <div className="flex gap-3 items-center">
            <p>{setsson?.user.name}</p>
          <button
            className="btn bg-red-600 text-white"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <div className=" ">
            <Link href={"/SignIn"}>
              <button className="btn  hover:translate-px hover:scle-100 hover:border-red-800 hover:text-red-800">
                Sign In
              </button>
            </Link>
            <Link href={"SignUp"}>
              {" "}
              <button className="btn bg-red-600 hover:translate-px hover:scle-100 text-white">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBtn;

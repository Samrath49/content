import React, { useState } from "react";

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="relative w-full h-screen py-44 bg-gradient-to-br from-cyan-500 via-red-300 to-violet-400">
      <div className="relative  container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12">
          <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                {signIn ? "Sign in to your account" : "Create new account"}
              </h2>
              <form action="" className="space-y-8">
                {!signUp ? (
                  <>
                    <div className="space-y-2">
                      <label for="email" className="text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label for="pwd" className="text-gray-700">
                          Password
                        </label>
                      </div>
                      <input
                        type="password"
                        name="pwd"
                        id="pwd"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                    focus:ring-2 focus:ring-sky-300 focus:outline-none
                    invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-md bg-sky-600 focus:bg-sky-700 active:bg-sky-500"
                    >
                      <span className="text-white">Login</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label for="name" className="text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label for="email" className="text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label for="question" className="text-gray-700">
                        Your favorite dish
                      </label>
                      <input
                        type="text"
                        name="question"
                        id="question"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label for="pwd" className="text-gray-700">
                          Password
                        </label>
                      </div>
                      <input
                        type="password"
                        name="pwd"
                        id="pwd"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                    focus:ring-2 focus:ring-sky-300 focus:outline-none
                    invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-md bg-sky-600 focus:bg-sky-700 active:bg-sky-500"
                    >
                      <span className="text-white">Sign Up</span>
                    </button>
                  </>
                )}
              </form>
              <p class="border-t pt-6 text-sm">
                Don't have an account ?{" "}
                <button class="text-sky-500" onClick={() => setSignUp(!signUp)}>
                  {!signUp ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

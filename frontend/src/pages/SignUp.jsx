import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col items-center  sm:h-screen dark:bg-[#0d121cf9]">
        <div className="w-full max-w-md sm:mt-10 p-8 space-y-8 sm:rounded-xl sm:border-2 dark:border-gray-600 sm:shadow-md hover:shadow-lg duration-200 dark:hover:border-pink-400 font-poppins">
          <h1 className="text-2xl md:text-4xl font-bold text-center dark:text-white ">
            Sign Up
          </h1>
          {/* <div className="space-y-8"> */}
          <form action="" method="post">
            <div className="space-y-6">
              <div className="sm:flex space-y-8 sm:space-y-0 gap-2 items-center justify-center">
                <div className="space-y-4">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="John"
                    required
                    className="w-full px-3 py-4 placeholder-gray-500 focus:outline-none  text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="space-y-4">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Doe"
                    required
                    className="w-full px-3 py-4 placeholder-gray-500 focus:outline-none  text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@mail.com"
                  required
                  className="w-full px-3 py-4 placeholder-gray-500 focus:outline-none  text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="pass@123"
                  required
                  className="w-full px-3 py-4 placeholder-gray-500 focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                />
              </div>
              {/* <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name=""
                  id="agree"
                  required
                  className="rounded-md bg-gray-50 dark:bg-[#2c3437] border-gray-300 dark:border-gray-500"
                />
                <label htmlFor="agree" className="dark:text-white flex flex-wrap text-sm">
                  I agree with the&nbsp;
                  <Link
                    to="/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    terms and conditions
                  </Link>
                </label>
              </div> */}
              <div className="flex items-center justify-center text-sm gap-1 text-gray-600 dark:text-white">
                Already have an account?
                <Link
                  to="/signin"
                  className="text-blue-600 dark:text-orange-400 underline"
                >
                  Signin
                </Link>
              </div>
              <Button
                outline
                gradientDuoTone="pinkToOrange"
                className="w-full"
                type="submit"
                name="Sign Up"
              >
                Sign Up
              </Button>
            </div>
          </form>

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default SignUp;

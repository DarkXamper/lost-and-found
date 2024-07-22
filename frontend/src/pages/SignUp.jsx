import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" pb-8 flex flex-col items-center min-h-screen dark:bg-[#0d121cf9] overflow-x-hidden">
        <div className="w-full max-w-md mt-10 p-8 space-y-8 rounded-xl border-2 dark:border-gray-600 shadow-md hover:shadow-lg duration-200 dark:hover:border-pink-400 font-poppins">
          <h1 className="text-2xl md:text-4xl font-bold text-center dark:text-white">
            Sign Up
          </h1>
          <form action="" method="post">
            <div className="space-y-6">
              <div className="flex flex-wrap sm:flex-nowrap space-y-4 sm:space-y-0 gap-2 items-center justify-center">
                <div className="w-full">
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
                    className="w-full px-3 py-4 placeholder-gray-500 focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="w-full">
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
                    className="w-full px-3 py-4 placeholder-gray-500 focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="w-full px-3 py-4 placeholder-gray-500 focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="w-full px-3 py-4 placeholder-gray-500 focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
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
              <div className="mt-8">
                <div className="flex items-center dark:text-white">
                  <div className="border flex-grow mr-4 border-gray-300 dark:border-gray-600"></div>
                  or
                  <div className="border flex-grow ml-4 border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-8">
                  {/* <Button color="dark" className="w-full"> */}
                  <GoogleLogin
                    theme="filled_black"
                    context="signup"
                    text="signup_with"
                    onSuccess={(credentialResponse) => {
                      const userData = jwtDecode(credentialResponse.credential);
                      console.log(userData);
                      navigate("/");
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                  {/* </Button> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

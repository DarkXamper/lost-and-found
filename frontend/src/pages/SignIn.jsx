import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center  sm:h-screen dark:bg-[#0d121cf9]">
        <div className="w-full max-w-md sm:mt-10 p-8 space-y-8 sm:rounded-xl sm:border-2 dark:border-gray-600  sm:shadow-md hover:shadow-lg duration-200 hover:border-pink-400 font-poppins">
          <h1 className="text-2xl md:text-4xl font-bold text-center dark:text-white ">
            Sign In
          </h1>
          {/* <div className="space-y-8"> */}
          <form action="" method="post">
            <div className="space-y-8">
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
                Don&apos;t have an account?
                <Link
                  to="/signup"
                  className="text-blue-600 dark:text-orange-400 underline"
                >
                  SignUp
                </Link>
              </div>
              <Button
                gradientDuoTone="pinkToOrange"
                className="w-full"
                type="submit"
                name="Sign In"
              >
                Sign In
              </Button>

              <div className="">
                {/* <HR.Text text="Or sign in with" /> */}
                <div className="flex items-center dark:text-white">
                  <div className="border flex-grow mr-4 border-gray-300 dark:border-gray-600"></div>
                  or
                  <div className="border flex-grow ml-4 border-gray-300 dark:border-gray-600"></div>
                  {/* <hr className="border-gray-300 dark:border-gray-600" /> */}
                </div>
                <div className="flex items-center justify-center gap-4 mt-8">
                  <GoogleLogin
                    theme="filled_black"
                    context="signup"
                    text="signup_with"
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                      navigate("/");
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              </div>
            </div>
          </form>

          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default SignIn;

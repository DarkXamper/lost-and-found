import logo from "../assets/images/logo.svg";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
const FooterSection = () => {
  return (
    // <Footer container>
    //   <div className="w-full">
    //     <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
    //       <div>
    //         <Footer.Brand
    //           href="#"
    //           // src="https://flowbite.com/docs/images/logo.svg"
    //           className="text-white"
    //           src="./images/logo.svg"
    //           alt="LO&F Logo"
    //           // sizes="200px"
    //           name="LO&F"
    //         />
    //       </div>
    //       <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
    //         <div>
    //           <Footer.Title title="about" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Flowbite</Footer.Link>
    //             <Footer.Link href="#">Tailwind CSS</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //         <div>
    //           <Footer.Title title="Follow us" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Github</Footer.Link>
    //             <Footer.Link href="#">Discord</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //         <div>
    //           <Footer.Title title="Legal" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Privacy Policy</Footer.Link>
    //             <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //       </div>
    //     </div>
    //     <Footer.Divider />
    //     <div className="w-full sm:flex sm:items-center sm:justify-between">
    //       <Footer.Copyright href="#" by="LO&F™" year={2022} />
    //       <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
    //         <Footer.Icon href="#" icon={BsFacebook} />
    //         <Footer.Icon href="#" icon={BsInstagram} />
    //         <Footer.Icon href="#" icon={BsTwitter} />
    //         <Footer.Icon href="#" icon={BsGithub} />
    //         <Footer.Icon href="#" icon={BsDribbble} />
    //       </div>
    //     </div>
    //   </div>
    // </Footer>

    <footer className=" z-10 bg-[#FAFAFA] dark:bg-[#0D121C] text-gray-800 dark:text-white border-t dark:border-none border-gray-200 dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Logo and Brand */}
          <div className="mb-4 sm:mb-0">
            <Link to="/" className="flex items-center justify-center">
              <img
                className="h-28 w-auto dark:invert"
                // src="https://flowbite.com/docs/images/logo.svg"
                src={logo}
                alt="LO&F Logo"
              />
              <div className=" text-2xl md:text-5xl">
                <span className="dark:text-white">LO</span>
                <span className="text-orange-500">&F</span>
              </div>
            </Link>
          </div>

          {/* Links */}
          {/* <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase mb-2 dark:text-gray-300">
              About
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                >
                  Flowbite
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                >
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div> */}

          {/* Follow Us */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase mb-2 dark:text-gray-300">
              Follow us
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase mb-2 dark:text-gray-300">
              Legal
            </h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Copyright and Social Icons */}
        <div className="flex sm:flex-row flex-col-reverse gap-y-4 items-center justify-between">
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Copyright &copy; LO&F™ {new Date().getFullYear()} | All rights
            reserved
          </p>
          <div className="flex space-x-4 text-xl sm:text-base">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
            >
              <BsFacebook />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
            >
              <BsInstagram />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
            >
              <BsTwitter />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

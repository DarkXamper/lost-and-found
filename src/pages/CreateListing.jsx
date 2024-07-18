import { useState } from "react";

const CreateListing = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const hanldeDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const hanldeFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <>
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-center justify-center md:justify-between dark:bg-[#0d121cf9]">
        <form
          onSubmit={handleSubmit}
          className="md:mt-20 flex flex-col md:flex-row items-center justify-evenly"
        >
          <div className="flex flex-col items-center md:items-start justify-center md:justify-between p-6">
            <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left dark:text-white ">
              Create Listing
            </h2>
            <p className="mt-4 max-w-2xl text-xl md:text-2xl text-gray-400 ">
              Create a new listing and find the one you lost!
            </p>
            <div className="flex flex-col rounded-md shadow mt-6 md:mt-10 w-full p-4 gap-2">
              {/* <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
            >
              Create
            </a> */}
              {/* <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600">
            Create</button> */}
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                required
                className="w-full px-3 py-4 placeholder-gray-500 focus:outline-none  text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <textarea
                rows="5"
                cols="30"
                name="Description"
                id="description"
                placeholder="Description"
                required
                className="w-full px-3 py-4 border rounded-md focus:outline-none placeholder-gray-500 bg-gray-50 text-gray-900 border-gray-300 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-4 p-6">
            <img
              className="object-cover w-full h-full rounded-lg"
              src="https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lost & Found"
            />

            <div className="border p-2 rounded-md flex items-center justify-between">
              <input type="file" name="file" id="file" accept="image/*" />
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md active:scale-95 duration-100">
                Upload
              </button>
            </div>
            <button
              type="submit"
              className="bg-gray-700 text-white p-4 font-medium rounded-md active:scale-95 duration-100"
            >
              Create Listing
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateListing;

import { useState } from "react";

const CreateListing = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const hanldeDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const hanldeFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center md:justify-between dark:bg-[#0d121cf9] min-h-screen">
        <div className="max-w-[1280px] mx-auto ">
          <form
            onSubmit={handleSubmit}
            className="md:mt-10 flex flex-col md:flex-row items-center justify-evenly"
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
                  value={title}
                  onChange={handleTitleChange}
                  required
                  className="w-full px-3 py-4 placeholder-gray-500 focus:outline-none  text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  aria-label="Title"
                />
                <textarea
                  rows="5"
                  cols="30"
                  name="Description"
                  id="description"
                  placeholder="Description"
                  value={description}
                  onChange={hanldeDescriptionChange}
                  required
                  className="w-full px-3 py-4 border rounded-md focus:outline-none placeholder-gray-500 bg-gray-50 text-gray-900 border-gray-300 dark:bg-[#2c3437] dark:border-gray-600 dark:placeholder-[#929fa5] dark:text-white"
                  aria-label="Description"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4 p-6">
              {preview ? (
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={preview}
                  alt="Selected for Upload"
                />
              ) : (
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src=" https://example.com/image.png"
                  alt="Lost & Found"
                />
              )}

              <div className="border p-2 rounded-md flex items-center justify-between">
                <input
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  onChange={hanldeFileChange}
                />
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-4 py-2 rounded-md active:scale-95 duration-100"
                >
                  Upload
                </button>
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-gray-700 text-white p-4 font-medium rounded-md active:scale-95 duration-100"
              >
                Create Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateListing;

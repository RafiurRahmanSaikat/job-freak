import React from "react";

const Contact = () => {
  return (
    <section class=" w-screen ">
      <div class="container px-6 py-12 mx-auto">
        <div class="lg:flex lg:items-center lg:-mx-6">
          <div class="mt-8 lg:w-1/2 lg:mx-6">
            <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <h1 class="text-lg dark:text-white font-bold  text-black">
                What do you want to know ?
              </h1>

              <form class="mt-6">
                <div class="flex-1">
                  <label class="block mb-2 text-sm text-gray-900 font font-semibold dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    class="block w-full px-5 py-3 mt-2 dark:text-white text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="flex-1 mt-6">
                  <label class="block mb-2 text-sm text-gray-900 font font-semibold dark:text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="......@example.com"
                    class="block w-full px-5 py-3 mt-2 dark:text-white text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="w-full mt-6">
                  <label class="block mb-2 text-sm text-gray-900 font font-semibold dark:text-white">
                    Message
                  </label>
                  <textarea
                    class="block w-full h-32 px-5 py-3 mt-2 dark:text-white text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div class="lg:w-1/2 lg:mx-6">
            <h1 class="text-2xl text-center m-4 font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
              Contact Us
            </h1>

            <img className="rounded-2xl" src="assets/contact-us.svg" alt="contact-us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

<template>
  <!-- Start -->
  <section
    class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
    id="contact"
  >
    <div class="container">
      <div
        class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp"
        data-wow-delay=".1s"
      >
        <h3
          class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold"
        >
          Get In Touch !
        </h3>

        <!-- <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p> -->
      </div>
      <!--end grid-->

      <div
        class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]"
      >
        <div class="lg:col-span-8">
          <div
            class="p-6 rounded-md shadow bg-white dark:bg-slate-900 wow animate__animated animate__fadeInUp"
            data-wow-delay=".3s"
          >
            <form
              method="post"
              name="myForm"
              id="myForm"
              onsubmit="return validateForm()"
            >
              <p class="mb-0" id="error-msg"></p>
              <div id="simple-msg"></div>
              <div class="grid lg:grid-cols-12 lg:gap-5">
                <div class="lg:col-span-6 mb-5">
                  <input
                    name="name"
                    id="name"
                    type="text"
                    class="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-dark/50 dark:focus:border-dark/50 focus:shadow-none focus:ring-0 text-[15px]"
                    placeholder="Name :"
                  />
                </div>

                <div class="lg:col-span-6 mb-5">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    class="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-dark/50 dark:focus:border-dark/50 focus:shadow-none focus:ring-0 text-[15px]"
                    placeholder="Email :"
                  />
                </div>
                <!--end col-->
              </div>

              <div class="grid grid-cols-1">
                <div class="mb-5">
                  <input
                    name="subject"
                    id="subject"
                    class="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-10 outline-none bg-transparent focus:border-dark/50 dark:focus:border-dark/50 focus:shadow-none focus:ring-0 text-[15px]"
                    placeholder="Subject :"
                  />
                </div>

                <div class="mb-5">
                  <textarea
                    name="comments"
                    id="comments"
                    class="form-input w-full py-2 px-3 border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded h-28 outline-none bg-transparent focus:border-dark/50 dark:focus:border-dark/50 focus:shadow-none focus:ring-0 text-[15px]"
                    placeholder="Message :"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                id="submit"
                name="send"
                class="btn bg-dark hover:bg-slate-700 border-dark hover:border-slate-700 text-white rounded-md h-11 justify-center flex items-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div class="lg:col-span-4">
          <div class="lg:ms-8">
            <div
              class="flex wow animate__animated animate__fadeInUp"
              data-wow-delay=".5s"
            >
              <div class="icons text-center mx-auto">
                <i
                  class="uil uil-phone block rounded text-2xl dark:text-white mb-0"
                ></i>
              </div>

              <div class="flex-1 ms-6">
                <h5 class="text-[17px] dark:text-white mb-2 font-medium">
                  Phone
                </h5>
                <a href="tel:+503-708-8570" class="text-slate-400 text-[15px]"
                  >503-708-8570</a
                >
              </div>
            </div>

            <div
              class="flex mt-4 wow animate__animated animate__fadeInUp"
              data-wow-delay=".7s"
            >
              <div class="icons text-center mx-auto">
                <i
                  class="uil uil-envelope block rounded text-2xl dark:text-white mb-0"
                ></i>
              </div>

              <div class="flex-1 ms-6">
                <h5 class="text-[17px] dark:text-white mb-2 font-medium">
                  Email
                </h5>
                <a
                  href="mailto:mr.eman.garcia@gmail.com"
                  class="text-slate-400 text-[15px]"
                  >mr.eman.garcia@gmail.com</a
                >
              </div>
            </div>

            <div
              class="flex mt-4 wow animate__animated animate__fadeInUp"
              data-wow-delay=".9s"
            >
              <div class="icons text-center mx-auto">
                <i
                  class="uil uil-map-marker block rounded text-2xl dark:text-white mb-0"
                ></i>
              </div>

              <div class="flex-1 ms-6">
                <h5 class="text-[17px] dark:text-white mb-2 font-medium">
                  Location
                </h5>
                <p class="text-slate-400 text-[15px] mb-2">
                  Portland, OR 97201
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
</template>

<script>
export default {
  name: "getInTOuch",
}
</script>

<style lang="scss" scoped></style>

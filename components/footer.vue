<template>
  <!-- Footer Start -->
  <footer class="footer bg-dark relative text-gray-200 dark:text-gray-200">
    <div class="py-[30px] px-0 border-t border-slate-800">
      <div class="container text-center">
        <div
          class="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center"
        >
          <div class="lg:col-span-3 md:text-start text-center">
            <a href="#" class="text-[22px] focus:outline-none">
              <img
                src="../assets/images/logo-light-v3.png"
                class="mx-auto md:me-auto md:ms-0 max-w-[150px]"
                alt=""
              />
            </a>
          </div>

          <div class="lg:col-span-5 text-center mt-6 md:mt-0">
            <p class="mb-0">© {{ date }} Emmanuel Garcia</p>
          </div>

          <ul
            class="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0"
          >
            <li class="inline">
              <a
                href="https://www.linkedin.com/in/emanpgarcia/"
                target="_blank"
                class="btn btn-icon btn-sm border border-gray-700 rounded-md hover:slate-700 dark:hover:slate-700 hover:bg-slate-700 dark:hover:bg-slate-700"
                ><i class="uil uil-linkedin" title="Linkedin"></i
              ></a>
            </li>
            <li class="inline">
              <a
                href="https://github.com/emangarcia"
                target="_blank"
                class="btn btn-icon btn-sm border border-gray-700 rounded-md hover:slate-700 dark:hover:slate-700 hover:bg-slate-700 dark:hover:bg-slate-700"
                ><i class="uil uil-github align-middle" title="github"></i
              ></a>
            </li>
            <!-- <li class="inline">
              <a
                href="https://www.instagram.com/shreethemes/"
                target="_blank"
                class="btn btn-icon btn-sm border border-gray-700 rounded-md hover:slate-700 dark:hover:slate-700 hover:bg-slate-700 dark:hover:bg-slate-700"
                ><i class="uil uil-instagram align-middle" title="instagram"></i
              ></a>
            </li> -->
            <!-- <li class="inline">
              <a
                href="https://twitter.com/shreethemes"
                target="_blank"
                class="btn btn-icon btn-sm border border-gray-700 rounded-md hover:slate-700 dark:hover:slate-700 hover:bg-slate-700 dark:hover:bg-slate-700"
                ><i class="uil uil-twitter align-middle" title="twitter"></i
              ></a>
            </li> -->
            <li class="inline">
              <a
                href="mailto:mr.eman.garcia@gmail.com"
                class="btn btn-icon btn-sm border border-gray-700 rounded-md hover:slate-700 dark:hover:slate-700 hover:bg-slate-700 dark:hover:bg-slate-700"
                ><i class="uil uil-envelope align-middle" title="email"></i
              ></a>
            </li>
          </ul>
          <!--end icon-->
        </div>
        <!--end grid-->
      </div>
      <!--end container-->
    </div>
  </footer>
  <!--end footer-->
  <!-- Footer End -->
</template>

<script>
export default {
  name: "footerComp",
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped></style>

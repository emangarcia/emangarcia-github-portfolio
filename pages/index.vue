<template>
  <navbar
    :socialLight="false"
    :menuLight="'nav-light sidebar-nav'"
    :navLight="true"
  />
  <!-- Start Hero -->
  <section
    class="relative table w-full lg:py-60 py-36 bg-[url('../../assets/images/bg/mthood.jpg')] bg-no-repeat bg-center bg-cover"
    id="home"
  >
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="container">
      <div class="grid grid-cols-1 text-center mt-5 relative">
        <!-- <img
          src="../assets/images/hero/4.jpg"
          class="rounded-full h-28 w-28 mx-auto wow animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
          alt=""
        /> -->
        <h5
          class="font-light uppercase lg:text-[18px] tracking-wide text-base lg:leading-none leading-none text-white/95 my-0 wow animate__animated animate__fadeInUp"
          data-wow-delay=".3s"
        >
          Hello, I am
        </h5>
        <h4
          class="font-bold lg:text-[40px] text-3xl lg:leading-normal leading-normal text-white my-6 wow animate__animated animate__fadeInUp"
          data-wow-delay=".3s"
        >
          Emmanuel Garcia
        </h4>
        <h5
          class="font-light lg:text-[18px] text-base tracking-wide lg:leading-none leading-none uppercase wow animate__animated animate__fadeInUp"
          data-wow-delay=".5s"
        >
          <vue-typewriter-effect
            class="typewrite relative text-type-element text-white"
            data-period="100"
            :strings="[
              'Front-End Engineer',
              'Vue/Nuxt Developer',
              'Responsive Dev/Design',
            ]"
          /><span class="wrap"></span>
        </h5>
        <!-- <p
          class="text-white/50 max-w-xl mx-auto wow animate__animated animate__fadeInUp"
          data-wow-delay=".5s"
        >
          Obviously I'm a Web Designer. Web Developer with over 7 years of
          experience. Experienced with all stages of the development.
        </p> -->

        <div
          class="mt-14 wow animate__animated animate__fadeInUp flex gap-4 justify-center"
          data-wow-delay=".7s"
        >
          <a
            href="#contact"
            class="btn rounded-md bg-dark hover:bg-slate-800 border-dark hover:border-slate-800 text-white text-sm uppercase font-light"
            type="submit"
            >Contact Me</a
          >
          <a
            href="/Emmanuel-Garcias-Resume.pdf"
            download
            class="btn rounded-md bg-dark hover:bg-slate-800 border-dark hover:border-slate-800 text-white text-sm uppercase font-light"
            type="button"
            ><span class="text-white mr-1"
              ><i class="uil uil-file-download align-middle"></i></span
            >Resume</a
          >
        </div>
      </div>
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End Hero -->
  <!-- <about />
  <services /> -->
  <experience />
  <projects />
  <!-- <client />
  <blog /> -->
  <getintouch />
</template>

<script>
import about from "@/components/about/about-animation.vue"
import blog from "@/components/blog/blog-animation.vue"
import client from "@/components/client/clients-animation.vue"
import experience from "@/components/experience/experience-animation.vue"
import getintouch from "@/components/getInTouch/getInTouch-animation.vue"
import navbar from "@/components/navbar/navbar.vue"
import projects from "@/components/project/projects-animation.vue"
import services from "@/components/services/services-animation.vue"
import feather from "feather-icons"
import VueTypewriterEffect from "vue-typewriter-effect"

export default {
  data() {
    return {}
  },
  components: {
    navbar,
    about,
    services,
    experience,
    projects,
    client,
    blog,
    getintouch,
    VueTypewriterEffect,
  },
  mounted() {
    feather.replace()
  },
}
</script>

<style lang="scss" scoped></style>

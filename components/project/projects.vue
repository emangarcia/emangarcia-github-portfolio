<template>
  <!-- Start -->
  <section class="relative md:py-24 py-16" id="project">
    <div class="container">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3
          class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold"
        >
          My Work & Projects
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto text-[15px]">
          Obviously I'm a Web Designer. Web Developer with over 7 years of
          experience. Experienced with all stages of the development.
        </p>
      </div>
      <!--end grid-->

      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]"
      >
        <div
          v-for="item in projects"
          :key="item"
          class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800"
        >
          <img :src="item.image" alt="" />
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"
          ></div>
          <div
            class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500"
          >
            <a
              href=""
              class="text-white hover:text-dark font-semibold transition-all duration-500"
              >{{ item.name }}</a
            >
            <span class="block text-sm text-slate-400">{{ item.languag }}</span>
          </div>

          <div
            class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500"
          >
            <a
              @click="showMultiple"
              class="btn bg-dark hover:bg-slate-700 border-dark hover:border-amber-600 text-white btn-icon rounded-full lightbox cursor-pointer"
              ><i class="uil uil-camera"></i
            ></a>
          </div>
        </div>
        <!--end content-->
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
  <vue-easy-lightbox
    :visible="visibleRef"
    :imgs="imgsRef"
    :index="indexRef"
    @hide="onHide"
  ></vue-easy-lightbox>
</template>

<script>
import { ref } from "vue"
import VueEasyLightbox from "vue-easy-lightbox"
import image from "../../assets/images/works/1.jpg"
import image2 from "../../assets/images/works/2.jpg"
import image3 from "../../assets/images/works/3.jpg"
import image4 from "../../assets/images/works/4.jpg"
import image5 from "../../assets/images/works/5.jpg"
import image6 from "../../assets/images/works/6.jpg"
import image7 from "../../assets/images/works/7.jpg"
import image8 from "../../assets/images/works/8.jpg"

export default {
  name: "projectComp",
  data() {
    return {
      projects: [
        {
          image: image,
          name: "Fronter Theme",
          languag: "UI / UX Design",
        },
        {
          image: image2,
          name: "Landrick Theme",
          languag: "Technology",
        },

        {
          image: image3,
          name: "Valexy Theme",
          languag: "Landing",
        },

        {
          image: image4,
          name: "Superex Theme",
          languag: "Digital",
        },

        {
          image: image5,
          name: "Motos Theme",
          languag: "Landing",
        },

        {
          image: image6,
          name: "Giglink Theme",
          languag: "Digital",
        },

        {
          image: image7,
          name: "Upwind Theme",
          languag: "Landing",
        },

        {
          image: image8,
          name: "Techwind Theme",
          languag: "Multipurpose",
        },
      ],
    }
  },
  components: {
    VueEasyLightbox,
  },
  setup() {
    const visibleRef = ref(false)
    const indexRef = ref(0)
    const imgsRef = ref([])

    const onShow = () => {
      visibleRef.value = true
    }
    const showMultiple = () => {
      imgsRef.value = [
        image,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
      ]

      indexRef.value = 0
      onShow()
    }
    const onHide = () => (visibleRef.value = false)

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showMultiple,
      onHide,
    }
  },
}
</script>

<style lang="scss" scoped></style>

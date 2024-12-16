<template>
  <!-- Start -->
  <section class="relative md:py-24 py-16" id="project">
    <div class="container">
      <div
        class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp"
        data-wow-delay=".1s"
      >
        <h3
          class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold"
        >
          My Work & Projects
        </h3>

        <!-- <p class="text-slate-400 max-w-xl mx-auto text-[15px]">
          Obviously I'm a Web Designer. Web Developer with over 7 years of
          experience. Experienced with all stages of the development.
        </p> -->
      </div>
      <!--end grid-->

      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]"
      >
        <div
          v-for="item in projects"
          :key="item"
          class="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800 wow animate__animated animate__fadeInUp"
          data-wow-delay=".3s"
        >
          <img :src="item.image" alt="" />
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"
          ></div>
          <div
            class="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500"
          >
            <a
              :href="item.url"
              target="_blank"
              class="text-white hover:text-white font-semibold transition-all duration-500"
              >{{ item.name }}</a
            >
            <span class="block text-sm text-slate-400">{{
              item.position
            }}</span>
          </div>

          <div
            class="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500"
          >
            <a
              :href="item.url"
              target="_blank"
              class="cursor-pointer btn rounded-md bg-dark hover:bg-gray-100 hover:text-dark border-dark hover:border-slate-700 text-white lightbox font-light text-xs uppercase"
              ><i class="uil uil-external-link-alt mr-1"> </i>View</a
            >
          </div>
        </div>
        <!--end content-->
        <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="imgsRef"
          :index="indexRef"
          @hide="onHide"
        ></vue-easy-lightbox>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
</template>

<script>
import { ref } from "vue"
import VueEasyLightbox from "vue-easy-lightbox"
import image3 from "../../assets/images/works/cuvaison.png"
import image2 from "../../assets/images/works/dda.png"
import image4 from "../../assets/images/works/fifthwall.png"
import image5 from "../../assets/images/works/kirkpalmer.png"
import image6 from "../../assets/images/works/realm.png"
import image from "../../assets/images/works/skb.png"
import image7 from "../../assets/images/works/zdwines.png"
export default {
  name: "projectComp",
  data() {
    return {
      projects: [
        {
          image: image,
          name: "SKB",
          url: "https://skbcos.com/",
        },
        {
          image: image2,
          name: "Dawson Design Associates",
          url: "https://www.dawsondesignassociates.com/",
        },

        {
          image: image3,
          name: "Cuvaison",
          url: "https://www.cuvaison.com/",
        },

        {
          image: image4,
          name: "Fifth Wall",
          url: "https://fifthwall.com/",
        },

        {
          image: image5,
          name: "Kirk Palmer",
          url: "https://www.kirkpalmer.com/",
        },

        {
          image: image6,
          name: "Realm Cellars",
          url: "https://www.realmcellars.com/",
        },

        {
          image: image7,
          name: "ZD Wines",
          url: "https://www.zdwines.com/",
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

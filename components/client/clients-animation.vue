<template>
     <!-- Start -->
     <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="project">
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                    <h3 class="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">Client's Review</h3>

                    <p class="text-slate-400 max-w-xl mx-auto text-[15px]">Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.</p>
                </div><!--end grid-->

                <div class="grid relative grid-cols-1 mt-6">
                    <swiper class="swiper-wrapper wow animate__animated animate__fadeInUp" data-wow-delay=".3s" :autoplay="true"  :spaceBetween="10" :pagination="{
                        clickable: true,
                    }" :breakpoints="{
                        '640': {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        '768': {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        '1024': {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                    }" :modules="modules">
                        <swiper-slide   v-for="item in clients" :key="item" class="swiper-slide">
                            <!-- Content -->
                            <div class="customer-testi">
                                <div class="content relative rounded shadow shadow-gray-200 dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
                                    <i class="mdi mdi-format-quote-open mdi-48px text-amber-500"></i>
                                    <p class="text-slate-400 text-[15px]">{{ item.desc }}</p>
                                    <ul class="list-none mb-0 text-amber-400 mt-3">
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                        <li class="inline"><i class="mdi mdi-star"></i></li>
                                    </ul>
                                </div>
                                
                                <div class="text-center mt-5">
                                    <img :src="item.image" class="h-14 w-14 rounded-full shadow-md mx-auto mb-1" alt="">
                                    <a href="" class="text-base font-medium h5 hover:text-amber-500 duration-500 ease-in-out">{{item.name}}</a>
                                    <span class="text-slate-400 text-sm block">{{item.position}}</span>
                                </div>
                            </div>
                            <!-- Content -->
                        </swiper-slide >                       
                    </swiper>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
</template>

<script>
  
import client from 'assets/images/client/01.jpg'
import client2 from 'assets/images/client/02.jpg'
import client3 from 'assets/images/client/03.jpg'
import client4 from 'assets/images/client/04.jpg'
import client5 from 'assets/images/client/04.jpg'
import client6 from 'assets/images/client/04.jpg'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default {
    data() {
        return {

            clients:[
                    {
                       image: client,
                       desc: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!" ,
                       name: 'Thomas Israel',
                       position: 'Manager',
                    },
                    {
                       image: client2,
                       desc: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it." ,
                       position: 'Manager',
                       name: 'Barbara McIntosh',
                    },
                    {
                       image: client3,
                       desc: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined." ,
                       position: 'Manager',
                       name: 'Carl Oliver',
                    },
                    {
                       image: client4,
                       desc: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away." ,
                       position: 'Manager',
                       name: 'Jill Webb',
                    },
                    {
                       image: client5,
                       desc: "I used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though." ,
                       position: 'Manager',
                       name: 'Barbara McIntosh',
                    },
                    {
                       image: client6,
                       desc: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important." ,
                       position: 'Manager',
                       name: 'Janisha Doll',
                    },

                ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [
                Navigation,
                Autoplay,


            ],
        };
    },

};
</script>

<style lang="scss" scoped>

</style>
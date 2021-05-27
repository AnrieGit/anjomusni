<template>
  <div class="grid grid-cols-1 justify-items-center">
    <!-- Header -->
    <Header />

    <div class="w-3/4 lg:w-3/4 -mt-40 bg-white shadow-lg rounded-2xl z-10">
      <div class="grid sm:grid-cols-2 justify-items-center">
        <!-- Image -->
        <div class="sm:pl-5 sm:pb-5 sm:mr-auto">
          <img src="../assets/images/pic2.jpg" alt="pic" class="-mt-24 rounded-full border-4 border-white h-48">
        </div>

        <!-- Icons -->
        <div class="p-5 sm:ml-auto">
          <div class="flex space-x-5">
            <MailIcon class="h-7 w-7 text-tapa-700" />
            <GithubIcon class="h-7 w-7 text-tapa-700" />
          </div>
        </div>

        <!-- Name -->
        <div class="sm:col-span-2 px-5 pb-5 text-center sm:text-left sm:mr-auto text-tapa-700">
          <h2>Anjo Musni</h2>
        </div>
      </div>

      <!-- Nav -->
      <div class="px-5 pb-5">
        <Nav />
      </div>

      <!-- Content -->
      <div class="px-5 pb-5">
        <!-- Skills -->
        <Skills />
      </div>
    </div>
  </div>

  <!-- Footer -->
  <Footer />
</template>

<script>
import { MailIcon } from '@heroicons/vue/outline'
import GithubIcon from '../components/icons/GithubIcon'

import Header from '../components/Header'
import Nav from '../components/Nav'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    MailIcon,
    GithubIcon,
    Header,
    Nav,
    Skills,
    Footer,
  },
}
</script>

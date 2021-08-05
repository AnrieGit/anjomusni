<template>
    <div class="px-10 xl:px-40 pt-20 pb-40">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-10 justify-items-center items-center">
            <div class="max-w-lg order-2 xl:order-1">
                <div class="relative flex flex-col justify-center items-center text-center">
                    <div id="header-content">
                        <div class="text-white font-bold mt-10">
                            <div id="header-content-1" class="text-4xl lg:text-5xl transition duration-1000 transform -translate-x-20 opacity-0">
                                <span>Hi! I am <span class="text-orange-400">Anjo</span> Musni</span>
                            </div>
                            <div id="header-content-2" class="mt-1 text-xl transition duration-1000 delay-500 transform -translate-x-20 opacity-0">
                                Web Developer
                            </div>
                        </div>
                        
                        <div id="header-content-3" class="transition duration-1000 delay-1000 transform -translate-x-20 opacity-0">
                            <ButtonLink link="./pdf/CV(Anjo)v7.pdf" target="__blank" class="mt-10">
                                Download Resume
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>

            <img class="mt-10 order-1 xl:order-2" src="../assets/images/svg/thinking.svg" alt="thinking.svg">
        </div>
    </div>
</template>

<script>
    import ButtonLink from '../components/ButtonLink'
    import { ArrowDownIcon } from '@heroicons/vue/outline'

    export default {
        name: 'Home',
        components: {
            ButtonLink,
            ArrowDownIcon,
        },
        mounted() {
            const content1 = document.getElementById('header-content-1');
            const content2 = document.getElementById('header-content-2');
            const content3 = document.getElementById('header-content-3');

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        content1.classList.remove('-translate-x-20');
                        content1.classList.remove('opacity-0');

                        content2.classList.remove('-translate-x-20');
                        content2.classList.remove('opacity-0');

                        content3.classList.remove('-translate-x-20');
                        content3.classList.remove('opacity-0');
                    }
				});
            });

            observer.observe(document.querySelector('#header-content'));
        },
    }
</script>
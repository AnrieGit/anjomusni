<template>
    <div>
        <svg :class="classes" height="100%" width="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,300 0,300 C 87.14285714285711,325.2857142857143 174.28571428571422,350.57142857142856 303,366 C 431.7142857142858,381.42857142857144 602.0000000000002,387 723,366 C 843.9999999999998,345 915.7142857142856,297.42857142857144 1027,282 C 1138.2857142857144,266.57142857142856 1289.1428571428573,283.2857142857143 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#3b3735ff" class="transition-all duration-300 ease-in-out delay-150"></path></svg>
        <!-- <svg :class="classes" height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 104.89285714285714,204.03571428571428 209.78571428571428,208.07142857142858 334,230 C 458.2142857142857,251.92857142857142 601.75,291.75 713,271 C 824.25,250.25000000000003 903.2142857142856,168.92857142857144 1019,147 C 1134.7857142857144,125.07142857142856 1287.3928571428573,162.53571428571428 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#3b3735ff" class="transition-all duration-300 ease-in-out delay-150"></path></svg> -->
    </div>
</template>

<script>
    export default {
        name: 'Wave',
        props: {
            classes: String,
        }
    }
</script>
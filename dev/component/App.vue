<template lang="html">
    <div class="app-container">
        <banner></banner>

        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Banner from './Banner.vue';

export default {
    components: {
        Banner,
    },
};
</script>

<style lang="scss">
@import "../style/reset";
@import "../style/mixin";

@include font-face("BrandonGrotesque-Regular");

:root{
    --color1: red;
}


.app-container{
}
</style>

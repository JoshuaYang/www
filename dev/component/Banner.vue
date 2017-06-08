<template lang="html">
    <div class="banner">
        <div class="bg-container"></div>

        <div class="content-container">
            <h1>Joshua</h1>
            <h2>code / design / movie</h2>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@keyframes bg-scale {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.2);
    }
}

.banner {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;


    .bg-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-image: url('../image/banner.jpg');
        background-position: center center;
        background-size: cover;
        animation: bg-scale 10s ease-in-out infinite alternate;
    }

    .content-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h1 {
            font-size: 80px;
            color: white;
        }
        h2 {
            font-size: 24px;
            color: white;
        }
    }
}
</style>

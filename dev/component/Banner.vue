<template lang="html">
    <div class="banner">
        <img class="land" src="../image/land.svg" alt="">
        <img class="cloud cloud1" src="../image/cloud.svg" alt="">
        <img class="cloud cloud2" src="../image/cloud.svg" alt="">

        <div class="content-container">
            <h1>Joshua Yang</h1>
            <h2>code / design / movie / biology</h2>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
:root {
    --banner-h1-font-size: 80px;
    --banner-h2-font-size: 25px;
    --banner-land-width: 800px;
}

@media (max-width: 500px) {
    :root {
        --banner-h1-font-size: 50px;
        --banner-h2-font-size: 20px;
        --banner-land-width: 600px;
    }
}

.banner {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #e0ebe8;

    .land {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: var(--banner-land-width);
        z-index: 2;
    }

    .cloud {
        position: absolute;
        z-index: 1;

        &.cloud1 {
            top: 50%;
            left: 10%;
            animation: cloud-animate 5s ease infinite;
        }

        &.cloud2 {
            top: 15%;
            right: 10%;
            animation: cloud-animate 6s ease 1s infinite;
        }
    }

    .content-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transform: translateY(-15%);

        h1 {
            font-family: 'BrandonGrotesque-Regular';
            font-size: var(--banner-h1-font-size);
            color: #45b29a;
        }
        h2 {
            font-family: 'BrandonGrotesque-Regular';
            font-size: var(--banner-h2-font-size);
            color: #45b29a;
        }
    }
}
</style>

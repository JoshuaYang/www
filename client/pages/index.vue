<template>
  <div class="banner">
        <img class="land" src="~/assets/image/land.svg" alt="">
        <img class="cloud cloud1" src="~/assets/image/cloud.svg" alt="">
        <img class="cloud cloud2" src="~/assets/image/cloud.svg" alt="">

        <div class="content-container">
            <h1>Joshua Yang</h1>
            <h2>code / design / movie / biology</h2>
        </div>

        <ul class="link-container">
            <li>
                <a target="_blank" href="https://www.zhihu.com/people/wan-fa-zhu-mie">知乎</a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/JoshuaYang">Github</a>
            </li>
            <li>
                <a target="_blank" href="http://blog.orzy.me/">Blog</a>
            </li>
            <li>
                <a target="_blank" href="http://showcase.orzy.me/">Showcase</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@include font-face("BrandonGrotesque-Regular");

$skin-color: #45b29a;

:root {
    --banner-h1-font-size: 80px;
    --banner-h2-font-size: 25px;
    --banner-link-font-size: 25px;
    --banner-land-width: 800px;
}

@media (max-width: 500px) {
    :root {
        --banner-h1-font-size: 50px;
        --banner-h2-font-size: 20px;
        --banner-link-font-size: 20px;
        --banner-land-width: 600px;
    }
}

body {
    font-family: 'BrandonGrotesque-Regular';
    color: $skin-color;
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
            animation: cloud-animate 6s ease 0.1s infinite;
        }

        &.cloud2 {
            top: 15%;
            right: 10%;
            animation: cloud-animate 8s ease 1s infinite;
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
            font-size: var(--banner-h1-font-size);
        }
        h2 {
            font-size: var(--banner-h2-font-size);
        }
    }

    .link-container {
        position: absolute;
        top: 2.5%;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;

        li {
            margin: 0 4.4%;

            a {
                position: relative;
                font-size: var(--banner-link-font-size);
                color: $skin-color;

                &:after {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 2px;
                    background-color: #45b29a;
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }

                &:hover {
                    &:after {
                        transform: scaleX(1);
                    }
                }
            }
        }
    }
}

@keyframes cloud-animate {
  0% {
      transform: translateX(0%);
  }
  50% {
      transform: translateX(50%);
  }
  100% {
      transform: translateX(0%);
  }
}
</style>

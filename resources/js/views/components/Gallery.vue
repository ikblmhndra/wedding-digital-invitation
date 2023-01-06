<template>
    <div>
        <section id="gallery" class="uk-section uk-section-default bg-f2" style="padding-bottom: 40px;">
            <div class="uk-container uk-container-small">
                <h2 class="tw-text-3xl sm:tw-text-4xl tw-mb-8 uk-text-center midnight yn-color yn-anim uk-scrollspy-inview "
                    style="">
                    Our Moment
                </h2>
                <center>
                    <video id="video1" width="420" controls>
                        <source src="assets/video/prewed.mp4" type="video/mp4">
                    </video>
                </center>
                <br>
                <br>
            </div>
            <div class="uk-container uk-container-small">
                <h2 class="tw-text-3xl sm:tw-text-4xl tw-mb-8 uk-text-center midnight yn-color yn-anim uk-scrollspy-inview "
                    style="">
                    Gallery
                </h2>
                <div class="uk-child-width-1-2 uk-child-width-1-4@m uk-grid" uk-grid="" uk-lightbox="animation: slide">
                    <div class="uk-first-column">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/1.webp">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/1.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div>
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/4.webp">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/4.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div class="uk-grid-margin uk-first-column">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/8.webp" style="">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/8.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div class="uk-grid-margin">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/11.webp" style="">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/11.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div class="uk-grid-margin uk-first-column">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/2.webp" style="">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/2.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div class="uk-grid-margin">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/3.webp" style="">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/3.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div class="uk-grid-margin uk-first-column">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/6.webp" style="">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/6.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div class="uk-grid-margin">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/10.webp" style="">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/10.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div class="uk-grid-margin uk-first-column">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/9.webp" style="">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/9.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div class="uk-grid-margin">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/12.webp" style="">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/12.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div class="uk-grid-margin uk-first-column">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/13.webp" style="">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/13.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                    <div class="uk-grid-margin">
                        <a class="uk-inline yn-anim uk-scrollspy-inview "
                            href="assets/images/gallery/pw/14.webp" style="">
                            <img class="thumb-gallery" src="assets/images/gallery/pw/14.webp" alt="Our Prawedding Photo">
                        </a>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
    export default {
        mounted() {
            document.getElementById('video1').addEventListener('play',function (event){
                document.getElementById('audio').pause();
            })
            document.getElementById('video1').addEventListener('pause',function (event){
                document.getElementById('audio').play();
            })
        }
    }
</script>

<style>

</style>

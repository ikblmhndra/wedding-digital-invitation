import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

window.Vue = Vue;
Vue.use(VueRouter)
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.bottom = "0";
    } else {
        document.getElementById("navbar").style.bottom = "-78px";
    }
    prevScrollpos = currentScrollPos;
}

const modal = UIkit.modal("#my_id");
modal.show();

window.document.getElementById('play-sound').addEventListener('click', function (event) {
    // window.document.getElementById('audio').play();
    const sourceAudio = new Audio();
    sourceAudio.src = "assets/music/beauty-in-white.m4a"
    sourceAudio.play();

    document.getElementById('video1').addEventListener('play',function (event){
        document.getElementById('musicStatus').setAttribute("value",2);
        sourceAudio.src ="";
    })
    document.getElementById('video1').addEventListener('pause',function (event){
        document.getElementById('musicStatus').setAttribute("value",3);
        sourceAudio.play();
    })
    document.getElementById('musicStatus').addEventListener('change',function () {
        let status = document.getElementById('musicStatus').getAttribute("value");
        if (status == 0) {
            sourceAudio.src ="";
        }else if (status == 1){
            sourceAudio.play();
        }
    })
});

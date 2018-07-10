import { Timeout } from './util/timeout';

window.onload = () => {
    objectFitPolyfill();
    const loadBar = document.getElementById('load-bar');
    const logoWrap = document.getElementById('logo-wrap');
    const closeVideo = document.getElementById('close-btn');
    const mainBox = document.getElementById('main');
    const endingBox = document.getElementById('ending-box');
    const tb = document.querySelectorAll('.tb');
    // const didLoad = Timeout.set(greetWorld, 2000)
    loadBar.classList.add('anim-out');
    title.classList.add('anim-in');

    Timeout.set(() => {
        logoWrap.classList.add('anim-out');
        [].forEach.call(tb, el => {
            el.classList.add('anim-in');
        })
    }, 3600)

    const video = videojs('franciacorta-video');
    video.markers({
        markers: [
            { time: 9.5, text: "this" },
            { time: 16, text: "is" },
            { time: 23.6, text: "so" },
            { time: 28, text: "cool" }
        ]
    });

    closeVideo.onclick = () => {
        video.pause();
        endingBox.classList.add('anim-in');
        mainBox.classList.add('anim-out');
    }

    video.on('ended', function() {
        endingBox.classList.add('anim-in');
        mainBox.classList.add('anim-out');
    });

    // if (Timeout.exists(greetWorld)) {// true
    //     console.log('greeting has been scheduled')
    // }

    // if (Timeout.pending(greetWorld)) {// true
    //     console.log('greeting is waiting to be issued')
    // }

    // ...wait for 2 seconds to elapse...

    // if (didLoad()) {// true
    //     console.log('the greeting was issued')
    // }

}

import { Timeout } from './util/timeout';

window.onload = () => {
    const loadBar = document.getElementById('load-bar');
    const pictogram = document.getElementById('pictogram');
    const title = document.getElementById('title');
    const tb = document.querySelectorAll('.tb');
    // const didLoad = Timeout.set(greetWorld, 2000)
    loadBar.classList.add('anim-out');
    title.classList.add('anim-in');

    Timeout.set(() => {
        title.classList.add('anim-out');
        pictogram.classList.add('anim-out');
        [].forEach.call(tb, el => {
            el.classList.add('anim-in');
        })
    }, 4000)

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

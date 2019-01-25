window.addEventListener("keydown", e => {
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`);
    const keys = document.querySelectorAll(".key");

    if (!audio) return;

    async function audioPlay() {
        try {
            await audio.play();
            console.log(audio);
        } catch (err) {
            console.log(err.name, err.message);
        }
    };

    function removeTransition(e) {
        if (e.propertyName !== "transform") { return; }
        this.classList.remove('playing');

    }

    audio.currentTime = 0;
    audioPlay();
    key.classList.add('playing');
    keys.forEach(key => key.addEventListener("transitionend", removeTransition));
})
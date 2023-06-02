const btn = document.querySelector('#cv');
btn.onclick = function () {
    console.log('clicked bait');
    console.log('hey ma0n');
}
btn.onmouseenter = moan;
function moan() {
    console.log('stop touching me');
    console.log('yeah');
}

const btn3 = document.querySelector('#sr');
btn3.addEventListener('click', function () {
    alert('u clicked me assoh');
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const neo = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = neo;
})

const tweetcomment = document.querySelector('#tweetcomment')
tweetcomment.addEventListener('submit', function (e) {
    console.log('submit')
    console.log(tweetcomment.elements.username.value);
    console.log(tweetcomment.elements.comment.value);
    e.preventDefault();
});




function hendelKbdButtonUp(event) {
    // plyer pressed 
    const plyerPressedKey = event.key;


    // get the expect to pressed
    const corentAlphaBateEliment = document.getElementById('current-alphabate');
    const corentAlphaBate = corentAlphaBateEliment.innerText;
    const expectedAlphaBate = corentAlphaBate.toLowerCase();

    // check matched or not 
    if (plyerPressedKey === expectedAlphaBate) {
        const removebg = document.getElementById(plyerPressedKey);
        removebg.classList.remove('bg-[#FFA500]');
        removebg.classList.remove('text-black');

        // update score 
        // const yourScore = document.getElementById('your-score');
        // const scoreText = yourScore.innerText;
        // const coruntScore = parseInt(scoreText);

        // element value by use function 
        const scoreValue = getTextElementValueById('your-score');
        const newScore = scoreValue + 1;
        const scoreTextSet = setTextElementValueById('your-score', newScore);


        continueGame();
        // console.log('you get score');
    }
    else {
        // update life
        // const yourLife = document.getElementById('your-life');
        // const lifeText = yourLife.innerText ;
        // const coruntLife = parseInt(lifeText);
        const lifeValue = getTextElementValueById('your-life');
        const newLife = lifeValue - 1;
        const lifeTextSet = setTextElementValueById('your-life', newLife);

        // change the screen or end the game and show the score
        if (newLife === 0) {
            // hide playground section
            hideElementById('play-ground');

            // show the result-page section
            showElementById('result-page');
            const resultScoreGet = document.getElementById('your-score').innerText;
            setTextElementValueById('result-score', resultScoreGet)
        }


        // const newLife = coruntLife - 1 ;
        // yourLife.innerText = newLife ;
    }
}
document.addEventListener('keyup', hendelKbdButtonUp);



function continueGame() {
    const alphabet = getRendomAlfabate();
    const currentAlphaBate = document.getElementById('current-alphabate');
    const confarmAlphaBate = currentAlphaBate.innerText = alphabet;
    setKyeBackgroundColor(confarmAlphaBate);
}

function play() {
    // step one : hide the home section
    hideElementById('home-section');
    showElementById('play-ground')
    continueGame()
}

function playAgain() {
    showElementById('play-ground');
    hideElementById('result-page');
    setTextElementValueById('your-score', 0);
    setTextElementValueById('your-life', 5);
    const coreantAlphaBate = document.getElementById('current-alphabate').innerText;
    const lastBgRemove = document.getElementById(coreantAlphaBate);
    lastBgRemove.classList.remove('bg-[#FFA500]');
    lastBgRemove.classList.remove('text-black');
    // coreantAlphaBate.classList.remove('bg-[#FFA500]');
    continueGame();


}
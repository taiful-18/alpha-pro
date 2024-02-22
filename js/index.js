function hendelKbdButtonUp(event){
    const plyerPresdKey = event.key;
    console.log(plyerPresdKey);


    // get the expect to pressed
    const corentAlphaBateEliment = document.getElementById('current-alphabate');
    const corentAlphaBate = corentAlphaBateEliment.innerText;
    const expectedAlphaBate = corentAlphaBate.toLowerCase();
    console.log(expectedAlphaBate , plyerPresdKey);
}
document.addEventListener('keyup', hendelKbdButtonUp);



function continueGame(){
    const alphabet = getRendomAlfabate();
    console.log(alphabet);
    const currentAlphaBate = document.getElementById('current-alphabate');
    const confarmAlphaBate = currentAlphaBate.innerText = alphabet;
    setKyeBackgroundColor(confarmAlphaBate);
}

function play(){
    // step one : hide the home section
    const homeButton = document.getElementById('home-section');
    homeButton.classList.add('hidden');
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden')
    continueGame()
}


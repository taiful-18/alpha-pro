function getRendomAlfabate(){
    // create a rendom alfabate
    const alphabetString = 'abcdefghijklmnopqrstubwxyz';
    const alphaBates = alphabetString.split('')
    const RandomNumber = Math.random() * 25;
    const index = Math.round(RandomNumber)
    const alphabet = alphaBates[index];
    // console.log(alphabet)
    return alphabet;
}
function setKyeBackgroundColor(elimentid){
    const kyeBackground = document.getElementById(elimentid);
    kyeBackground.classList.add('bg-[#FFA500]');
}
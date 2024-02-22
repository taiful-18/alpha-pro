function hideElementById(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('hidden');
}
function showElementById(elementid){
    const element = document.getElementById(elementid);
    element.classList.remove('hidden');
}
function getRendomAlfabate(){
    // create a rendom alfabate
    const alphabetString = 'abcdefghijklmnopqrstubwxyz';
    const alphaBates = alphabetString.split('');
    const RandomNumber = Math.random() * 25;
    const index = Math.round(RandomNumber)
    const alphabet = alphaBates[index];
    // console.log(alphabet)
    return alphabet;
}
function setKyeBackgroundColor(elimentid){
    const kyeBackground = document.getElementById(elimentid);
    kyeBackground.classList.add('bg-[#FFA500]');
    kyeBackground.classList.add('text-black');
}

function getTextElementValueById(elementid){
    const element = document.getElementById(elementid);
    const elementValueText = element.innerText;
    const elementValue = parseFloat(elementValueText);
    return elementValue

}
function setTextElementValueById(elimentid , value){
    const element = document.getElementById(elimentid);
    element.innerText = value;
}
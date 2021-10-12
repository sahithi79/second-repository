// var verbs, nouns, adjectives, adverbs, preposition;

// nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
// verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
// adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
// adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
// preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

var sentences;
sentences=[["I'm studying English to help improve my communication skills"],
["Communication, comprehension and confidence become extremely important for success at work"],
["Hi! I'm working at Anudip to help skill the students. What do you do?"],
["Simple sentences can consist only of one word. Examples: Go. Run! Fly"], 
["Perching on a branch, the eagle shrieked"],
["The frog jumped and landed in the pond"],
["Do you drink tea early in the morning?"],
["My dad does not like tea, he drinks coffee"],
["The train leaves every morning at Ten AM"],
["Pramila brushes her teeth twice a day"],
["The client was quite unhappy because of the spelling mistakes"]];

var rand1 = Math.floor(Math.random() * 10);
// var rand2 = Math.floor(Math.random() * 10);
// var rand3 = Math.floor(Math.random() * 10);
// var rand4 = Math.floor(Math.random() * 10);
// var rand5 = Math.floor(Math.random() * 10);
// var rand6 = Math.floor(Math.random() * 10);
  
//var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1];
console.log(rand1);
var content = sentences[rand1];
//console.log(sentences[rand1]);
console.log(content);

let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  //console.log(voices);
  speech.voice = voices[0];
  console.log(speech.voice);
  let voiceSelect = document.querySelector("#voices");
  console.log(voiceSelect);
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// document.querySelector("#voices").addEventListener("change", () => {
//     console.log("Helo");
//     speech.voice = voices[document.querySelector("#voices").value];
//     console.log(speech.voice)
//   });

let btn = document.querySelector("span");
btn.onclick = () => {   
console.log(content) ;  
console.log("HI");   
document.querySelector("#voices").addEventListener("change", () => {
  console.log("Helo");
  speech.voice = voices[document.querySelector("#voices").value];
  console.log(speech.voice);
});  
let speaknow = new SpeechSynthesisUtterance(content); 
window.speechSynthesis.speak(speaknow); 
}


function fn1(){
    var str = document.getElementById("text1").value;
    console.log(content)
    var pa = document.getElementById("p");
    if(str==content){
        // alert("You have listened correctly");
        pa.innerHTML="You have listened Properly. Try Another sentence by refreshing the page";
    }
    else{
        //alert("Please listen carefully");
        pa.innerHTML="Please listen carefully and try again";
    }
}
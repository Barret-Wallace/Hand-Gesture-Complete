Webcam.set({
    height: 300,
    width: 400,
    image_format: 'png',
    png_quality: '90'
});
var cam = document.getElementById("camera");
Webcam.attach("camera");
function Capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="pic" src="'+ data_uri +'">';
    }
    )};
    console.log(ml5.version);
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/418E-xnnM/model.json",modelLoaded);
    function modelLoaded(){
        console.log("Model is Loaded");
    }
    function Predict(){
        img = document.getElementById("pic");
        classifier.classify(img,gotResults);
    }
    function gotResults(error,result){
        if(error){
            console.error(error);
        }
        else{
            console.log(result);
            Pre = result[0].label;
            if(result[0].label == "Best"){
                speakData = "Best";
                document.getElementById("answer").innerHTML = Pre + "<span>&#9994;</span>";
            }
            if(result[0].label == "Amazing"){
                speakData = "Amazing"
                document.getElementById("answer").innerHTML = Pre + "<span>&#128075;</span>";
            }
            if(result[0].label == "Victory"){
                speakData = "Victory"
                document.getElementById("answer").innerHTML = Pre + "<span>&#128077;</span>";
            }
            if(result[0].label == "Wave"){
                speakData = "Wave"
                document.getElementById("answer").innerHTML = Pre + "<span>&#129304;</span>";
            }
            if(result[0].label == "Spider-Man"){
                speakData = "Spider Man"
                document.getElementById("answer").innerHTML = Pre + "<span>&#128078;</span>";
            }
            if(result[0].label == "Punch"){
                speakData = "Punch"
                document.getElementById("answer").innerHTML = Pre + "<span>&#128076;</span>";
            }
            if(result[0].label == "Not Good"){
                speakData = "Not Good"
                document.getElementById("answer").innerHTML = Pre + "<span>&#9996;</span>";
            }
            synth = window.speechSynthesis;
            say = "Gesture is " + speakData;
            utterthis = new SpeechSynthesisUtterance(say);
            synth.speak(utterthis);
        }
    }
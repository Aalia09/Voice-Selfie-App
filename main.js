var SpeechRecognition = window.webkitSpeechRecognition; //SpeechRecognition is storing an API which will convert speech to text

var recognition = new SpeechRecognition();//creating a new web speech API to use in our webapp and storing it in a variable recognition
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start(); //start function is a predefined function of the API that  will start the conversion of speech to text
}

recognition.onresult = function(event) //onresult holds all the values of converted speech to text and to get this converted text from onresult we write a function  

{
    console.log(event);

    var Content = event.results[0][0].transcript; //console and check 

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content == "take my selfie")
    {
       console.log("taking selfie...");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis; // this is an API for converting text to speech
    speak_data = "taking your selfie in 5 seconds..."; // this variable will store the thext of the textarea

    var utterThis = new SpeechSynthesisUtterance(speak_data); // utterThis is a variable which will store the converted text to speech. SpeechSynthesisUtterance is an function of API that will convert text to speech. 

    synth.speak(utterThis); // synth is used as we have stored the API. Speak is the predefined function of an API. 

    Webcam.attach(camera); // This will ask to allow the camera and the pop up will come for asking the permision of using the webcam and the webcam live view will start
    
    setTimeout(function(){
        take_snapshot();
        save();
     },5000);
}

var camera = document.getElementById("camera"); //this will store the empty div with id camera in the variable camera

Webcam.set({ // webcam.set is a function of webcam.js to see the properties for the live view of the webcam
    width : 360,
    height : 250,
    image_format : "jpeg",
    jpeg_quality : 100 //it means the quality of the webcam it starts from 0 (worst quality) and 100 is the maximum value it is best quality
});

function take_snapshot()
{
    Webcam.snap(
        function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
        }
    );
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}




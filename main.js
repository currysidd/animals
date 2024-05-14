function startidentification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JC3NVXTYG/model.json", modelLoaded)
}
function modelLoaded() {
    classifier.classify(gotResults)
}
function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
}

function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        img1 = document.getElementById("image")

        sound = result[0].label
        if (sound == 'barking') {
            img1.src = "dog.png"

        }
        else if (sound == 'meowing') {
            img1.src = "cat.png"

        }
        else if (sound == 'roaring') {

            img1.src = "lion.png"
        }
        else if (sound == 'squeaking') {

            img1.src = "mouse.png"
    
        }
        else{
            img1.src="ear.jpg"
        }
        document.getElementById("resultLabel").innerHTML = 'I can hear ' + sound
        document.getElementById("resultAccuracy").innerHTML = 'Accuracy ' + (result[0].confidence * 100).toFixed(2) + ' %'
    }

}

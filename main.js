function setup() {
  canvas = createCanvas(300, 200);
  canvas.position(500, 225)
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", ModelLoaded);
}

function ModelLoaded() {
  console.log("Model Loaded!");
}

function draw() {
  image(video, 0, 0, 300, 200);
  classifier.classify(video, GetResults);
}

function GetResults(Error, Results) {
  if (Error) {
    console.error(Error);
  } else {
    console.log(Results);
    document.getElementById("ObjectName").innerHTML = Results[0].label;
    document.getElementById("ObjectAccuracy").innerHTML = Results[0].confidence.toFixed(3) * 100 + "%";
  }
}
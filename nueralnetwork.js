var input = [0, 0, 1, 0];
var weights = [0, 0, 0, 0];
var desiredResult = 1;
var learningRate = 0.20;
var error;
var trials = 6;
var neuralNetResult;

function evaluateNeuralNetwork(inputVector, weightVector) {
  var result = 0;
  inputVector.forEach(function(inputValue, weightIndex) {
    layerValue = inputValue * weightVector[weightIndex];
    result += layerValue;
  });
  return (result.toFixed(2));
}

function evaluateNeuralNetError(desired, actual) {
  return (desired - actual).toFixed(2);
}

function learn(inputVector, weightVector) {
  weightVector.forEach(function(weight, index, weights) {
    if (inputVector[index] > 0) {
      weights[index] = (weight + learningRate);
    }
  });
}

function train(trials) {
  for (i = 0; i < trials; i++) {
    neuralNetResult = evaluateNeuralNetwork(input, weights);
    console.log("Neural Net output: " + neuralNetResult + " Error: " + evaluateNeuralNetError(desiredResult, neuralNetResult) + " Weight Vector: " + weights);
    learn(input, weights);
  }
}

train(trials);
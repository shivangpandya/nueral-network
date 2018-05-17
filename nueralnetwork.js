var inputs = [0,1,0,0];
var weights = [0,0,0,0];
var desiredResult = 1;
// we can call these vectors for convenience.

function evaluateNeuralNetwork(inputVector, weightVector){    
  var result = 0;  
  inputVector.forEach(function(inputValue, weightIndex) {
   layerValue = inputValue*weightVector[weightIndex];
    result += layerValue;
  });   
  return (result.toFixed(2));  
}
// Might look complex, but all it does is multiply weight/input pairs and adds the result.

function evaluateNeuralNetError(desired,actual) {
  return (desired — actual);
}
// After evaluating both the Network and the Error we would get:
// "Neural Net output: 0.00 Error: 1"



evaluateNeuralNetwork(inputs, weights);

Error = Reality - Neural Net Output

var learningRate = 0.20; 
// bigger rate,bigger faster learnings : )

function learn(inputVector, weightVector) {
  weightVector.forEach(function(weight, index, weights) {
   if (inputVector[index] > 0) {
    weights[index] = weight + learningRate;
   }
  });
}

// Original weight vector: [0,0,0,0]
// Neural Net output: 0.00 Error: 1
learn(input, weights);
// New Weight vector: [0,0.20,0,0]
// Neural Net output: 0.20 Error: 0.8 
// If it is not apparently obvious, a Neural Net output closer to 1 
// (chicken dinner) is what we want, so we are heading in the right 
// direction 

var trials = 6;

function train(trials) {
 for (i = 0; i < trials; i++) {
  neuralNetResult = evaluateNeuralNetwork(input, weights);
  learn(input, weights);
 }
}

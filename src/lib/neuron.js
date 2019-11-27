
class InputNeuron {
 constructor() {
        this._predVal = 0;
    }
  CalculatePredictions(dataPoint) {
      this._predVal = dataPoint;
  }
}

class Neuron{
    constructor(neuronNumber, neuronConnections, activationType) {
        this._predVal = 0;
        this.neuronConnections = neuronConnections;
        this.activationType = activationType;
        this._weights = [];
        this._bias = 0;

        for(var i = 0; i < this.neuronConnections.length; i++){
            this._weights[i] = ((Math.random() * 2) - 1) * 
                                (Math.sqrt(2)/Math.sqrt(this.neuronConnections.length + neuronNumber));
        } 
    }

    CalculatePredictions(){
        var sum = 0;
        var multVal = 0;
        for( var i= 0; i < this.neuronConnections.length; i++){
            multVal = this._weights[i] * this.neuronConnections[i]._predVal;
            sum = sum + multVal[i];
          }
        sum = sum + this._bias
        
        if(this.activationType === 0){
            this._predVal = this.Sigmoid(sum);
        } else if(this.activationType === 1){
            this._predVal = this.Relu(sum);
        } else if (this.activationType === 2) {
            this._predVal = this.Tanh(sum);
        } 
    }

    static Sigmoid(num) {
        return (1/1 + Math.exp(-1*num));
    }

    static Relu(num) {
        if ( num < 0 || num === 0 ){
            return 0;
        }
        else {
            return num;
        }
    }

    static Tanh(num) {
        return ( (Math.exp(num) + Math.exp(-num)) / (Math.exp(num) - Math.exp(-num)) )
    }
}

export {InputNeuron, Neuron};

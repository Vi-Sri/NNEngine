class InputNeuron {
    constructor(dataPoint) {
        this._predVal = dataPoint;
    }
}

class Neuron {
    constructor(neuronConnections, activationType) {
        this._predVal = 0;
        this.neuronConnections = neuronConnections;
        this.activationType = activationType
        this._weights = [];
        this._bias = 0;


        for(var i = 0; i < this.neuronConnections.length; i++){
            this._weights[i] = 0;
          } 
    }

    CalculatePredictions(){
        var sum = 0;
        var multVal = 0;
        for( var i= 0; i < this.neuronConnections.length; i++){
            multVal = this._weights[i] * this.neuronConnections[i].predVal;
            sum = sum + multVal[i];
          }
        sum = sum + this._bias
        
        if(this.activation_type == 0){
            this.pred_val = this.sigmoid(sum);
          }
        
        if(this.activation_type == 1){
            this.pred_val = this.relu(sum);
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
}

export default {InputNeuron, Neuron};

import {Neuron, InputNeuron} from './neuron.js';

class InputLayer {
     constructor (InputShape){
        this.neuronNumber = InputShape;
        this.neuronList = new Array(this.neuronNumber);
        for(var i = 0; i < this.neuronNumber; i++){
            this.neuronList.push(new InputNeuron(data[i]));
        }   
    }
}

class Layer{
   constructor(previousLayer, neuronNumber, activationType) {
        this.neuronNumber = neuronNumber
        this.neuronList = new Array(this.neuronNumber);
        this.activationType = activationType;

        for (var i = 0; i < this.neuronNumber; i++ ) {
            this.neuronList.push(
                new Neuron(this.neuronNumber,previousLayer.neuronList, this.activationType)
            )
        }
    }
    calculatePredictions() {
        
    }
}

export {InputLayer, Layer};
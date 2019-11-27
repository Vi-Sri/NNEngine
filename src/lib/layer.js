import {Neuron, InputNeuron} from './neuron';

class InputLayer {
     constructor (InputShape){
        this.neuronNumber = InputShape;
        this.neuronList = new Array(this.neuronNumber);
        for(var i = 0; i < this.neuronNumber; i++){
            this.neuronList.push(new InputNeuron());
        }   
    }

    CalculatePredictions(dataPoint) {
        this.neuronList.forEach(inputNeuron => {
            inputNeuron.CalculatePredictions(dataPoint);
        });
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

    CalculatePredictions() {
        this.neuronList.forEach(neuron => {
            neuron.CalculatePredictions();
        });
    }
}

export {InputLayer, Layer};
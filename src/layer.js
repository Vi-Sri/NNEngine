import {Neuron, InputNeuron} from './neuron.js';

class InputLayer {
    constructor (data) {
        this.neuronList = [];
        this.neuronNumber = data.length;
        for(var i = 0; i < this.neuronNumber; i++){
            this.neuronList.push(new InputNeuron(data[i]));
        }
    }
}

class Layer {
    constructor (previousLayer, neuronNumber, activationType){
        this.neuronNumber = neuronNumber;
        this.neuronList = [];
        this.activationType = activationType;

        for (var i = 0; i < neuronNumber; i++ ) {
            this.neuronList.push(
                new Neuron(this.neuronNumber,previousLayer.neuronList, this.activationType)
            )
        }
    }
}

export default { InputLayer, Layer };

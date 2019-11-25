import { InputLayer, Layer} from './layer.js';

let Network = (data) => {
    let inputLayer = new InputLayer(data);
    let layer1 = new Layer(inputLayer, 128, 1);
    let layer2 = new Layer(layer1, 18, 1);
    let finalLayer = new Layer(layer2, 1, 0);
    finalLayer.neuronList.forEach(neuron => {
        console.log(neuron._predVal)
    });
}

let ForwardPropogate = (Dataset) => {
    Dataset.forEach(data => {
        Network(data);
    });
}

export {ForwardPropogate};
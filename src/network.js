import { InputLayer, Layer} from './layer.js';

function Network(data){
    inputLayer = new InputLayer(data);
    layer1 = new Layer(inputLayer, 128, 1);
    layer2 = new Layer(layer1, 18, 1);
    finalLayer = new Layer(layer2, 1, 0);
    finalLayer.neuronList.forEach(neuron => {
        console.log(neuron._predVal)
    });
}

function ForwardPropogate(Dataset){
    Dataset.forEach(data => {
        Network(data);
    });
}

export default {ForwardPropogate};
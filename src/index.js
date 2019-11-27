import {Network} from './lib/network';
import {InputLayer, Layer} from './lib/layer';

let CreateDataset = () => {
    let dataset = [];
    let data = [];
    let randomChoiceMultiplier = [5,10];

    for (var i =0; i < 100; i++) {
        data =  [Math.random()*randomChoiceMultiplier[i%2], Math.random()*randomChoiceMultiplier[i%2]]
        dataset.push(data);
    }
    return dataset;
}

let dataset = new CreateDataset();

let BuildNetwork = (InputShape) => {
    let Model = new Network();
    let inputLayer = new InputLayer(InputShape);
    Model.addLayer(inputLayer);
    let hiddenlayer1 = new Layer(inputLayer, 100, 1);
    Model.addLayer(hiddenlayer1);
    let hiddenlayer2 = new Layer(hiddenlayer1, 85,1);
    Model.addLayer(hiddenlayer2);
    let finalLayer = new Layer(hiddenlayer2, 2, 0);
    Model.addLayer(finalLayer);
    return Model;
}

let model = new BuildNetwork(3);
model.forwardPropogate(dataset);






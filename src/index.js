import {ForwardPropogate} from './network.js';

var CreateDataset = () => {
    let dataset = [];
    let data = [];
    let randomChoiceMultiplier = [5,10];

    for (var i =0; i < 100; i++) {
        data =  [Math.random()*randomChoiceMultiplier[i%2], Math.random()*randomChoiceMultiplier[i%2]]
        dataset.push(
            data
        );
    }
    return dataset;
}

let dataset = new CreateDataset();
ForwardPropogate(dataset);




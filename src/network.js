import { InputLayer, Layer} from './layer';

Network = (Dataset) => {
    Dataset.forEach(data => {
        inputLayer = new InputLayer(data);
        layer1 = new Layer(inputLayer, 128, 1);
        layer2 = new Layer(layer1, 18, 1);
        finalLayer = new Layer(layer2, 1, 0);
    });
}
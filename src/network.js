import { InputLayer, Layer} from './layer';

class Network {
    constructor(data) {
        this.LayerList = {};
    }

    addLayer(layer) {
        LayerProps = {}
        LayerProps['LayerName'] = layer.constructor.name;
        LayerProps['LayerType'] = layer.constructor;
        LayerProps['NeuronNumber'] = layer.neuronNumber;
        LayerProps['ActivationType'] = layer.ActivationType;
        LayerProps['LayerObject'] = layer;
        this.LayerList.push(LayerProps);
     }

    forwardPropogate(dataset){
        dataset.forEach(data => {
            this.LayerList.forEach(layer => {
                this.output = layer().calculatePredictions(data);
            });
        });
    }

    predict() {
        
    
    }

    backwardPropogate() {

    }
}

export {Network};
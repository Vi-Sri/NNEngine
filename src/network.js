class Network {
    constructor(data) {
        this.LayerList = [];
    }

    addLayer(layer) {
        let LayerProps = {}
        LayerProps['LayerName'] = layer.constructor.name;
        LayerProps['NeuronNumber'] = layer.neuronNumber;
        LayerProps['ActivationType'] = layer.activationType;
        LayerProps['LayerObject'] = layer;
        this.LayerList.push(LayerProps);
     }

    forwardPropogate(dataset){
        dataset.forEach(data => {
            for ( let i =0; i < this.LayerList.length; i++){
                if (this.LayerList[i]['LayerName'] === ' InputLayer') {
                    this.LayerList[i]['LayerObject'].CalculatePredictions(data);
                } else {
                    this.LayerList[i]['LayerObject'].CalculatePredictions();
                }
            }
        });
    }

    predict() {


        return
    }

    backwardPropogate() {

    }
}

export {Network};
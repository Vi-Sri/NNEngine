import { InputLayer, Layer} from './layer';

class Network {
    constructor(data) {
        this.LayerList = new Array();
    }

    addLayer(layer) {
        this.LayerList.push(layer);
    }

    train() {
        return false;
    }

    predict() {
        this.LayerList.forEach(layer => {
            layer
        });
    }
}

export {Network};
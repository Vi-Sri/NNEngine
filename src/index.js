import p5 from 'p5';


let p5functions = (p5Obj) => {

    p5Obj.setup = () => {
        p5Obj.createCanvas(600,400);

    }

    p5Obj.draw = () => {
        p5Obj.background(51);
    }

}

const P5 = new p5(p5functions);
export default P5;

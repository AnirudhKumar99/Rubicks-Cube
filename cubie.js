class Cubie {
    constructor(x, y, z, size,cols) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.colors=cols;
        this.cos={
            "UPP":cols[3],
            "DWN":cols[2],
            "FRT":cols[4],
            "BCK":cols[5],
            "LFT":cols[0],
            "RGT":cols[1]
        };
    }
    show() {
        push();
        translate(this.x, this.y, this.z);
        let r = this.size / 2;
        normalMaterial();
        stroke(0);
        strokeWeight(1);
        // RED
        // fill(255, 0, 0);
        // fill(this.colors[0]);
        fill(this.cos["LFT"]);
        beginShape()
        vertex(-r, -r, r);
        vertex(-r, r, r);
        vertex(r, r, r);
        vertex(r, -r, r);
        endShape(CLOSE);
        // ORANGE
        // fill(255, 165, 0);
        // fill(this.colors[1]);
        fill(this.cos["RGT"]);

        beginShape()
        vertex(-r, -r, -r);
        vertex(-r, r, -r);
        vertex(r, r, -r);
        vertex(r, -r, -r);
        endShape(CLOSE);
        // WHITE
        // fill(255, 255, 255);
        // fill(this.colors[2]);
        fill(this.cos["DWN"]);

        beginShape()
        vertex(-r, r, r);
        vertex(-r, r, -r);
        vertex(r, r, -r);
        vertex(r, r, r);
        endShape(CLOSE);
        // YELLOW
        // fill(255, 255, 0);
        // fill(this.colors[3]);  
        fill(this.cos["UPP"]);
        beginShape()
        vertex(-r, -r, r);
        vertex(-r, -r, -r);
        vertex(r,  -r, -r);
        vertex(r,  -r, r);
        endShape(CLOSE);
        // GREEN
        // fill(0, 255, 0);
        // fill(this.colors[4]);
        fill(this.cos["FRT"]);
        beginShape()
        vertex(r, r, r);
        vertex(r, r, -r);
        vertex(r,  -r, -r);
        vertex(r,  -r, r);
        endShape(CLOSE);
        // BLUE
        // fill(0, 0, 255);
        // fill(this.colors[5]);
        fill(this.cos["BCK"]);
        beginShape()
        vertex(-r, r, r);
        vertex(-r, r, -r);
        vertex(-r,  -r, -r);
        vertex(-r,  -r, r);
        endShape(CLOSE);
        pop();
    }
    turnX(){
        let temp=this.cos["RGT"];
        this.cos["RGT"]=this.cos["DWN"];
        this.cos["DWN"]=this.cos["LFT"];
        this.cos["LFT"]=this.cos["UPP"];
        this.cos["UPP"]=temp;
    }
    turnY(){
        let temp=this.cos["LFT"];
        this.cos["LFT"]=this.cos["FRT"];
        this.cos["FRT"]=this.cos["RGT"];
        this.cos["RGT"]=this.cos["BCK"];
        this.cos["BCK"]=temp;
    }
    turnZ(){
        let temp=this.cos["DWN"];
        this.cos["DWN"]=this.cos["BCK"];
        this.cos["BCK"]=this.cos["UPP"];
        this.cos["UPP"]=this.cos["FRT"];
        this.cos["FRT"]=temp;
    }
}


        // vertex(-r, -r,0);
        // vertex(-r, r,0);
        // vertex(r, r,0);
        // vertex(r, -r,0);

        // vertex(0, 0,0);
        // vertex(0, 100,0);
        // vertex(100, 100,0);
        // vertex(100, 0,0);
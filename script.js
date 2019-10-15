let cubes = [];
let s = 50;
let cols;
// let cube2;

function swapCos(i, j, k, l) {
    let tem = Object.assign({}, cubes[i].cos);
    cubes[i].cos = cubes[j].cos;
    cubes[j].cos = cubes[k].cos;
    cubes[k].cos = cubes[l].cos;
    cubes[l].cos = tem;
}
function dupe(mainObj) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
}
let Xan = 0;
let Yan = 0;
let Zan = 0;
function keyPressed() {
    console.log(key);
    if (key === 'x') {
        Xan += 10;
        // } else if (key === 'y') {
        //     Yan += 10;
    } else if (key === 'z') {
        Zan += 10;
    } else if (key === 'X') {
        Xan -= 10;
        // } else if (key === 'Y') {
        //     Yan -= 10;
    } else if (key === 'Z') {
        Zan -= 10;
    }
    else if (key === "ArrowUp") {
        Zan += 10;
        Xan -= 10;
    }
    else if (key === "ArrowDown") {
        Zan -= 10;
        Xan += 10;
    }
    else if (key === "ArrowRight") {
        // Zan += 10;
        Yan += 10;
    }
    else if (key === "ArrowLeft") {
        // Zan -= 10;
        Yan -= 10;
    }
    move(key);

}
let ddd = -1;
let allMoves = ['u', 'd', 'l', 'r', 'f', 'b']
let possMoves = ['u', 'u', 'd', 'd', 'l', 'l', 'r', 'r', 'f', 'f', 'b', 'b'];
let movs = 50;
let but;
let randMoves = [];
let revMoves = [];
function setup() {
    createCanvas(s * 8, s * 8, WEBGL);
    // but=createButton('Scramble');
    // but.mousePressed(scramble);
    but = document.getElementById("scram");
    console.log(but);
    cols = [
        color(255, 0, 0), color(255, 165, 0),
        color(255, 255, 255), color(255, 255, 0),
        color(0, 255, 0), color(0, 0, 255)
    ]
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            for (let k = -1; k <= 1; k++) {
                cubes.push(new Cubie(i * s, j * s, k * s, s, cols));
            }
        }
    }
    // cubes.push(new Cubie(0, 0, 0, s, cols));
    for (let i = 0; i < movs; i++) {
        let ch = random(allMoves);
        if (random() > 0.5) {
            ch = ch.toUpperCase();
        }
        randMoves.push(ch);

        if (allMoves.includes(ch)) {
            revMoves.push(ch.toUpperCase());
        } else {
            revMoves.push(ch.toLowerCase());
        }
    }
    // console.log(randMoves);
    // console.log(revMoves);
    revMoves = revMoves.reverse();
    // console.log(revMoves);

}
let cond = true;
let ctr = 0
function draw() {
    background(200);
    frameRate(6);
    angleMode(DEGREES);
    // Xan = (Xan + 1) % 360;
    // Yan = (Yan + 1) % 360;
    rotateX(45 * ddd);
    rotateY(45 * ddd);
    // rotateZ(1.5 * angle);
    rotateX(Xan);
    rotateY(Yan);
    rotateZ(Zan);
    // angle = (angle + 0.01) % 10;
    for (cube of cubes) {
        cube.show();
    }
    newCols = {
        "UPP": color(100),
        "DWN": color(100),
        "FRT": color(100),
        "BCK": color(100),
        "LFT": color(100),
        "RGT": color(100)
    };
    // console.log(ctr);
    // if(cond){
    //     move(randMoves[ctr]);
    // }else{
    //     move(revMoves[ctr]);
    // }
    // ctr=(ctr+1)%movs;
    // if(ctr==movs-1)cond=!cond;
    // scramble();

}
function move(keyVal) {
    // console.log(keyVal);
    let pos;
    switch (keyVal) {
        // Front or Green
        case 'F':
            for (let i = 18; i < 27; i++) {
                cubes[i].turnX();
            }
            swapCos(24, 26, 20, 18);
            swapCos(21, 25, 23, 19);
            break;
        case 'f':
            for (let i = 18; i < 27; i++) {
                cubes[i].turnX();
                cubes[i].turnX();
                cubes[i].turnX();
            }
            swapCos(18, 20, 26, 24);
            swapCos(19, 23, 25, 21);
            break;
        case 'G':
            for (let i = 18; i < 27; i++) {
                cubes[i].turnX();
            }
            swapCos(24, 26, 20, 18);
            swapCos(21, 25, 23, 19);
            break;
        case 'g':
            for (let i = 18; i < 27; i++) {
                cubes[i].turnX();
                cubes[i].turnX();
                cubes[i].turnX();
            }
            swapCos(18, 20, 26, 24);
            swapCos(19, 23, 25, 21);
            break;

        // Back or Blue
        case 'B':
            for (let i = 0; i < 9; i++) {
                cubes[i].turnX();
            }
            swapCos(6, 8, 2, 0);
            swapCos(3, 7, 5, 1);
            break;
        case 'b':
            for (let i = 0; i < 9; i++) {
                cubes[i].turnX();
                cubes[i].turnX();
                cubes[i].turnX();
            }
            swapCos(0, 2, 8, 6);
            swapCos(1, 5, 7, 3);
            break;

        // Left or rEd
        case 'L':
            for (let i = 2; i < 27; i += 3) {
                cubes[i].turnZ();
            }
            swapCos(2, 20, 26, 8);
            swapCos(11, 23, 17, 5);
            break;
        case 'l':
            for (let i = 2; i < 27; i += 3) {
                cubes[i].turnZ();
                cubes[i].turnZ();
                cubes[i].turnZ();
            }
            swapCos(8, 26, 20, 2);
            swapCos(5, 17, 23, 11);
            break;
        case 'E':
            for (let i = 2; i < 27; i += 3) {
                cubes[i].turnZ();
            }
            swapCos(2, 20, 26, 8);
            swapCos(11, 23, 17, 5);
            break;
        case 'e':
            for (let i = 2; i < 27; i += 3) {
                cubes[i].turnZ();
                cubes[i].turnZ();
                cubes[i].turnZ();
            }
            swapCos(8, 26, 20, 2);
            swapCos(5, 17, 23, 11);
            break;

        // Right or Orange
        case 'R':
            pos = [0, 3, 6, 9, 15, 18, 21, 24];

            for (let i of pos) {
                cubes[i].turnZ();
                cubes[i].turnZ();
                cubes[i].turnZ();
            }
            swapCos(6, 24, 18, 0);
            swapCos(3, 15, 21, 9);
            break;
        case 'r':
            pos = [0, 3, 6, 9, 15, 18, 21, 24];
            // for (let i = 0; i < 25; i += 3) {
            for (let i of pos) {
                cubes[i].turnZ();
            }
            swapCos(0, 18, 24, 6);
            swapCos(9, 21, 15, 3);
            break;
        case 'O':
            pos = [0, 3, 6, 9, 15, 18, 21, 24];

            for (let i of pos) {
                cubes[i].turnZ();
                cubes[i].turnZ();
                cubes[i].turnZ();
            }
            swapCos(6, 24, 18, 0);
            swapCos(3, 15, 21, 9);
            break;
        case 'o':
            pos = [0, 3, 6, 9, 15, 18, 21, 24];
            // for (let i = 0; i < 25; i += 3) {
            for (let i of pos) {
                cubes[i].turnZ();
            }
            swapCos(0, 18, 24, 6);
            swapCos(9, 21, 15, 3);
            break;

        // Up or Yellow
        case 'u':
            pos = [0, 1, 2, 9, 11, 18, 19, 20];
            for (let i of pos) {
                cubes[i].turnY();
            }
            swapCos(2, 20, 18, 0);
            swapCos(1, 11, 19, 9);
            break;
        case 'U':
            pos = [0, 1, 2, 9, 11, 18, 19, 20];
            for (let i of pos) {
                // for (let i = 0; i < 25; i += 3) {
                cubes[i].turnY();
                cubes[i].turnY();
                cubes[i].turnY();
            }
            swapCos(0, 18, 20, 2);
            swapCos(9, 19, 11, 1);
            break;
        case 'y':
            pos = [0, 1, 2, 9, 11, 18, 19, 20];
            for (let i of pos) {
                cubes[i].turnY();
            }
            swapCos(2, 20, 18, 0);
            swapCos(1, 11, 19, 9);
            break;
        case 'Y':
            pos = [0, 1, 2, 9, 11, 18, 19, 20];
            for (let i of pos) {
                // for (let i = 0; i < 25; i += 3) {
                cubes[i].turnY();
                cubes[i].turnY();
                cubes[i].turnY();
            }
            swapCos(0, 18, 20, 2);
            swapCos(9, 19, 11, 1);
            break;

        // Down or White
        case 'D':
            pos = [6, 7, 8, 15, 17, 24, 25, 26];
            for (let i of pos) {
                cubes[i].turnY();
                cubes[i].turnY();
                cubes[i].turnY();

                // cubes[i].turnY();
            }
            swapCos(6, 24, 26, 8);
            swapCos(15, 25, 17, 7);
            break;
        case 'd':
            pos = [6, 7, 8, 15, 17, 24, 25, 26];
            for (let i of pos) {
                // for (let i = 0; i < 25; i += 3) {
                cubes[i].turnY();

                // cubes[i].turnY();
                // cubes[i].turnY();
                // cubes[i].turnY();
            }
            swapCos(8, 26, 24, 6);
            swapCos(7, 17, 25, 15);
            break;
        case 'W':
            pos = [6, 7, 8, 15, 17, 24, 25, 26];
            for (let i of pos) {
                cubes[i].turnY();
                cubes[i].turnY();
                cubes[i].turnY();

                // cubes[i].turnY();
            }
            swapCos(6, 24, 26, 8);
            swapCos(15, 25, 17, 7);
            break;
        case 'w':
            pos = [6, 7, 8, 15, 17, 24, 25, 26];
            for (let i of pos) {
                // for (let i = 0; i < 25; i += 3) {
                cubes[i].turnY();

                // cubes[i].turnY();
                // cubes[i].turnY();
                // cubes[i].turnY();
            }
            swapCos(8, 26, 24, 6);
            swapCos(7, 17, 25, 15);
            break;
    }
}

    // cube = new Cubie(0, 0, 0, s);
    // cubes.push(new Cubie(0, 0, 0, s));
    // cubes.push(new Cubie(0, s, 0, s));
    // cubes.push(new Cubie(0, -s, 0, s));

    // cubes.push(new Cubie(s, 0, 0, s));
    // cubes.push(new Cubie(s, s, 0, s));
    // cubes.push(new Cubie(s, -s, 0, s));

    // cubes.push(new Cubie(-s, 0, 0, s));
    // cubes.push(new Cubie(-s, s, 0, s));
    // cubes.push(new Cubie(-s, -s, 0, s));

    // cubes.push(new Cubie(0, 0,   s, s));
    // cubes.push(new Cubie(0, s,  s, s));
    // cubes.push(new Cubie(0, -s, s, s));

    // cubes.push(new Cubie(s, 0,  s, s));
    // cubes.push(new Cubie(s, s,  s, s));
    // cubes.push(new Cubie(s, -s, s, s));

    // cubes.push(new Cubie(-s, 0, s, s));
    // cubes.push(new Cubie(-s, s, s, s));
    // cubes.push(new Cubie(-s, -s, s, s));

    // cubes.push(new Cubie(0, 0,   -s, s));
    // cubes.push(new Cubie(0, s,  -s, s));
    // cubes.push(new Cubie(0, -s, -s, s));

    // cubes.push(new Cubie(s, 0,  -s, s));
    // cubes.push(new Cubie(s, s,  -s, s));
    // cubes.push(new Cubie(s, -s, -s, s));

    // cubes.push(new Cubie(-s, 0, -s, s));
    // cubes.push(new Cubie(-s, s, -s, s));
    // cubes.push(new Cubie(-s, -s, -s, s));



    // newCols = [
    //     color(255, 0, 0), color(255, 165, 0),
    //     color(255, 255, 255), color(255, 255, 0),
    //     color(0, 255, 0), color(0, 0, 255)
    // ]
    // newCols = [color(100), color(100), color(100), color(100), color(100), color(100)]



// MAIN LOGIC
    // -----------------------------------------------------------------
    // // Front
    // if (key === "F") {
    //     for (let i = 18; i < 27; i++) {
    //         cubes[i].turnX();
    //     }
    //     swapCos(24, 26, 20, 18);
    //     swapCos(21, 25, 23, 19);
    // }
    // if (key === "f") {
    //     for (let i = 18; i < 27; i++) {
    //         cubes[i].turnX();
    //         cubes[i].turnX();
    //         cubes[i].turnX();
    //     }
    //     swapCos(18, 20, 26, 24);
    //     swapCos(19, 23, 25, 21);
    // }
    // // Back
    // if (key === "B") {
    //     for (let i = 0; i < 9; i++) {
    //         cubes[i].turnX();
    //     }
    //     swapCos(6, 8, 2, 0);
    //     swapCos(3, 7, 5, 1);
    // }
    // if (key === "b") {
    //     for (let i = 0; i < 9; i++) {
    //         cubes[i].turnX();
    //         cubes[i].turnX();
    //         cubes[i].turnX();
    //     }
    //     swapCos(0, 2, 8, 6);
    //     swapCos(1, 5, 7, 3);
    // }
    // // Left
    // if (key === "L") {
    //     // let arr=[2,5,8,11,14,17,20,23,]
    //     for (let i = 2; i < 27; i += 3) {
    //         cubes[i].turnZ();
    //     }
    //     swapCos(2, 20, 26, 8);
    //     swapCos(11, 23, 17, 5);
    // }
    // if (key === "l") {
    //     for (let i = 2; i < 27; i += 3) {
    //         cubes[i].turnZ();
    //         cubes[i].turnZ();
    //         cubes[i].turnZ();
    //     }
    //     swapCos(8, 26, 20, 2);
    //     swapCos(5, 17, 23, 11);
    // }
    // // Right
    // if (key == "r") {
    //     pos = [0, 3, 6, 9, 15, 18, 21, 24];
    //     // for (let i = 0; i < 25; i += 3) {
    //     for (let i of pos) {
    //         cubes[i].turnZ();
    //     }
    //     swapCos(0, 18, 24, 6);
    //     swapCos(9, 21, 15, 3);
    // }
    // if (key === "R") {
    //     // for (let i = 0; i < 25; i += 3) {
    //     pos = [0, 3, 6, 9, 15, 18, 21, 24];

    //     for (let i of pos) {
    //         cubes[i].turnZ();
    //         cubes[i].turnZ();
    //         cubes[i].turnZ();
    //     }
    //     swapCos(6, 24, 18, 0);
    //     swapCos(3, 15, 21, 9);
    // }
    // // UP
    // if (key == "U") {
    //     // for (let i = 0; i < 25; i += 3) {
    //     pos = [0, 1, 2, 9, 11, 18, 19, 20];
    //     for (let i of pos) {
    //         cubes[i].turnY();
    //     }
    //     swapCos(2, 20, 18, 0);
    //     swapCos(1, 11, 19, 9);
    // }
    // if (key === "u") {
    //     pos = [0, 1, 2, 9, 11, 18, 19, 20];
    //     for (let i of pos) {
    //         // for (let i = 0; i < 25; i += 3) {
    //         cubes[i].turnY();
    //         cubes[i].turnY();
    //         cubes[i].turnY();
    //     }
    //     swapCos(0, 18, 20, 2);
    //     swapCos(9, 19, 11, 1);
    // }
    // // Down
    // if (key == "D") {
    //     // for (let i = 0; i < 25; i += 3) {
    //     pos = [6, 7, 8, 15, 17, 24, 25, 26];
    //     for (let i of pos) {
    //         cubes[i].turnY();
    //     }
    //     swapCos(6, 24, 26, 8);
    //     swapCos(15, 25, 17, 7);
    // }
    // if (key === "d") {
    //     pos = [6, 7, 8, 15, 17, 24, 25, 26];
    //     for (let i of pos) {
    //         // for (let i = 0; i < 25; i += 3) {
    //         cubes[i].turnY();
    //         cubes[i].turnY();
    //         cubes[i].turnY();
    //     }
    //     swapCos(8, 26, 24, 6);
    //     swapCos(7, 17, 25, 15);
    // }
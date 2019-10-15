function scramble() {
    // console.log(random(allMoves));
    for (let i = 0; i < 100; i++) {
        let r = random(allMoves)
        if (random() > 0.5) {
            move(r);
            // console.log(r);
        }
        else {
            // console.log(r.toUpperCase())
            move(r.toUpperCase())
        }
    }
}
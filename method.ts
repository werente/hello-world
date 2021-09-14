function method (): void{
    let choice: number = Math.floor(Math.random()*3)+1
    switch(emotion()){
        case 1: {
            if (choice = 1) { basic.showString('tranquila 1')}
            if (choice = 2) { basic.showString('tranquila 2') }
            if (choice = 3) { basic.showString('tranquila 3') }
            break;
        }
        case 2: {
            if (choice = 1) { basic.showString('amor 1') }
            if (choice = 2) { basic.showString('amor 2') }
            if (choice = 3) { basic.showString('amor 3') }
            break;
        }
        case 3: {
            if (choice = 1) { basic.showString('feliz 1') }
            if (choice = 2) { basic.showString('feliz 2') }
            if (choice = 3) { basic.showString(' feliz 3') }
        }
    }
}
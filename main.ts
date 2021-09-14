 function emotion(): number {
     let cad: string = "";
     let st: number = 0;
    if (input.pinIsPressed(TouchPin.P0)) {
        cad = "TRANQUILIDAD";
        basic.showString(cad)
        st = 1;
    }
     if (input.pinIsPressed(TouchPin.P1)) {
        cad = "AMOR";
        basic.showString(cad)
        st = 2
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        cad = "FELICIDAD";
        basic.showString(cad) 
        st = 3    
    }
    basic.clearScreen()
     return st

}

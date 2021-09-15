function method(): void {
  let choice: number = Math.floor(Math.random() * 3) + 1;
  switch (emotion()) {
    case 1: {
      if ((choice = 1)) {
        basic.showString('calma');
      }
      if ((choice = 2)) {
        basic.showString('sosiego');
      }
      if ((choice = 3)) {
        basic.showString('t');
      }
      break;
    }
    case 2: {
      if ((choice = 1)) {
        basic.showString('gusto');
      }
      if ((choice = 2)) {
        basic.showString('querida');
      }
      if ((choice = 3)) {
        basic.showString('a');
      }
      break;
    }
    case 3: {
      if ((choice = 1)) {
        basic.showString('happy');
      }
      if ((choice = 2)) {
        basic.showString('felicitat');
      }
      if ((choice = 3)) {
        basic.showString(' feliz');
      }
    }
  }
}

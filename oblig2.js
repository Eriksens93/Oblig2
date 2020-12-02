     // controller 

    //  For å velge stolpe ved å klikke på den, skal også komme svart ramme(border) rundt. 
    //  Hvis den ikke er selecta så selecter den som vil si at border settes til black (stroke)

     function selectedBar(barNo) {
         if (barNo == chosenBar) {
             chosenBar = '';
         }  else {
             chosenBar = barNo;
         }
         show();
     }

    //  Slette en stolpe. Splice funksjonen er for å fjerne et number ut fra et array
    //  Chosenbar starter på +1 i arrayet derfor bruker vi -1 her
    //  Hvor mange plasser i arrayet det skal fjerne er etter (-1). Hadde det stått 2 der så hadde den fjernet 2 stolper.

     function removeBar() {
        numbers.splice(chosenBar -1,  1);
        show();
     }
     
    //  Endre en stolpe til ønsket verdi ved bruk av inputValue

     function changeBar() {
         if (inputValue > 10 || inputValue <=0) {
             alert('Feil, tallet er ikke mellom 1 og 10.');
         } else if(inputValue <= 10) {
             numbers [chosenBar -1 ] = parseInt(inputValue);
         }

    // Avslutter inputvaluen her slik at den ikke blir "lagret" når man legger til ny stolpe 2 ganger

         inputValue = '';
         show();
     }

    // Legge til en stolpe ved bruk av inputValue
    // Number pusher verdien (legger til ny bar) i arrayet som er i inputvalue

     function addBar() {
         if (inputValue > 10 || inputValue <=0) {
             alert('Feil, tallet er ikke mellom 1 og 10');
        } else if (inputValue <= 10 ) {
            numbers.push(inputValue);
        }

    // Avslutter inputvaluen her slik at den ikke blir "lagret" når man legger til ny stolpe 2 ganger

            inputValue = '';
        
        show();
     }
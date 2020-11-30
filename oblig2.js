     // controller 

     // For å velge stolpe

     function selectedBar(barNo) {
         if (barNo == chosenBar) {
             chosenBar = '';
         }  else {
             chosenBar = barNo;
         }
         show();
     }

    //  Slette en stolpe. Splice funksjonen er for å fjerne en ting ut fra en array

        //  Chosenbar starter på +1 i arrayet derfor bruker vi -1 her


     function removeBar() {
        numbers.splice(chosenBar -1,  1);
        show();
     }
     
    //  Endre en stolpe 

     function changeBar() {
         if (inputValue > 10 && inputValue <=0) {
             alert('Feil, tallet er ikke mellom 1 og 10.');
         } else if(inputValue <= 10) {
             numbers [chosenBar -1 ] = parseInt(inputValue);
         }
         show();
     }

    //  Legge til en stolpe
    // Number pusher verdien i arrayet som er innen inputvalue

     function addBar() {
         if (inputValue > 10) {
             alert('Feil, tallet er ikke mellom 1 og 10');
        } else if (inputValue <= 10 ) {
            numbers.push(inputValue);
        }
        show();
     }
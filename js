function funkcijaF() {
  document.getElementById("rt").reset();
}


  function mojaFunkcija() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  var x = document.Z.kontakt.value;
  var y = document.Z.komentar.value;
  var s = document.Z.broj.value;
  var ukupno = (x+y+s)/1000;
  
  var table1 = document.getElementById ("myRable");
  var row1 = table1.insertRow(-1);
  var cell4 = row1.insertCell(0);

  cell1.innerHTML = document.Z.ime.value;
  cell2.innerHTML = ukupno;
  //cell3.innerHTML = '<span style="cursor: pointer;" class="close"></span>'
} 



function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

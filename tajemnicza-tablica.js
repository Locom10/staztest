console.log("tajemnicza-tablica.js")
function myFunction() {
    // var result = document.getElementById("myTable");
    for (var i = 0, n = myTable.rows.length; i < n; i++) {
        for (var j = 0, n = myTable.cells.length; j < n; j++)
        var result = document.getElementById("myTable").rows[i].cells[j].innerHTML
    }
    console.log(myTable.rows.length)
}
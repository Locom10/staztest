console.log("choinka.js");
function generuj(){
    const pietra = document.getElementById("pietra").value;
    const poziomy = document.getElementById("poziom").value;
    const result = poziomy/pietra;
    const div = document.getElementById('liczba');
    div.innerHTML += result;
    const tree = document.getElementById('tree');
    tree.innerHTML += "*";
    // var i = 0;
    var m = 0;
    var k = 0;
    for (let i=0; i<result; i++) {
        for (let j = m; j<pietra; j++) {
            tree.innerHTML += "<br>/" + new Array(j + 1).join(j*' ')+"\\";
            k=j
            console.log(k);
        }
        m = k - 1;
        pietra =k;
        console.log(pietra);
    }
}
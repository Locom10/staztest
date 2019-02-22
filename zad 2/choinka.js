console.log("choinka.js");
function generuj(){
    const pietra = document.getElementById("pietra").value;
    const poziomy = document.getElementById("poziom").value;
    const result = poziomy/pietra;
    const div = document.getElementById('liczba');
    div.innerHTML += result;
    const tree = document.getElementById('tree');
    tree.innerHTML += "*";
    for (let i=0; i<result; i++) {
        tree.innerHTML += "<br>";
        for (let j=0; j<pietra; j++) {
            tree.innerHTML += "<br>xD";
        }
    }
}
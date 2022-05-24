//Webapp mit Pagination

//Deklaration der Variablen
let index;
let blog = undefined;

//Ausgabe zeigen
function showUI() {
    //bild
    let htmlObj = document.getElementById("picture");
    htmlObj.innerHTML =
        `<a class="" href="" data-bs-toggle="modal" data-bs-target="${blog.picture.databstarget}"><img src="../images/${blog.picture.dataname}" class="card-img-top img-scale" alt="${blog.picture.alttext}"></a>`;

    //titel
    htmlObj = document.getElementById("title");
    htmlObj.innerHTML =
        `${blog.text.title}`;

    //beschreibung
    htmlObj = document.getElementById("description");
    htmlObj.innerHTML =
        `${blog.text.description}`;

    //test ob download möglich ist
    let download = "<em>No downloads available</em>"
    if (blog.download.possible){
        download = `<a href="../downloads/${blog.download.pdfname}" download="${blog.download.pdfname}"><i class="far fa-file-pdf"></i>&nbsp;Download (PDF)</a>`;
    }
    //download
    htmlObj = document.getElementById("download");
    htmlObj.innerHTML =
        `${download}`;

    //datum
    htmlObj = document.getElementById("date");
    htmlObj.innerHTML =
        `${blog.date}`;

    //Index im Pagination-Element anzeigen
    htmlObj = document.getElementById("showIndex")
    //set
    htmlObj.innerHTML = index + 1;
}

//Vorheriger Eintrag zeigen
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
        index = localStorage.getItem("index");
        //Testausgabe auf der Console
        console.log(index);
        //Falls der index nicht definiert ist ...
        if (index === undefined){
            //... dann setze den index auf 0 (Anfang)
            index = 0;
        } else {
            //... sonst falls der index eins grösser als das Minimum ist
            if (index > 0){
                //... erhöhe den index um 1
                index--;
            }
        }
        //speichere wieder den index im Browser-Speicher
        localStorage.setItem("index", index);
        //hole den nächst höheren Eintrag
        blog = blogliste[index];
        //zeige den Eintrag
        showUI();
}

//Nächster Eintrag zeigen
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index === undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (blogliste.length-1 > index){
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    blog = blogliste[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (blog === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    blog = blogliste[index];
    //zeige den Eintrag
    showUI();
}
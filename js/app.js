//picture
let htmlObj = document.getElementById("picture");
htmlObj.innerHTML =
    `<a class="" href="" data-bs-toggle="modal" data-bs-target="${blog1.picture.databstarget}"><img src="../images/${blog1.picture.dataname}" class="card-img-top img-scale" alt="${blog1.picture.alttext}"></a>`;

//title
htmlObj = document.getElementById("title");
htmlObj.innerHTML =
    `${blog1.text.title}`;

//description
htmlObj = document.getElementById("description");
htmlObj.innerHTML =
    `${blog1.text.description}`;

//test if download is possible
let download = "<em>No Downloads available</em>"
if (blog1.download.possible){
    download = `<a href="../downloads/${blog1.download.pdfname}" download="infochart_milk.pdf"><i class="far fa-file-pdf"></i>&nbsp;Download (PDF)</a>`;
}
//download
htmlObj = document.getElementById("download");
htmlObj.innerHTML =
    `${download}`;

//date
htmlObj = document.getElementById("date");
htmlObj.innerHTML =
    `${blog1.date}`;

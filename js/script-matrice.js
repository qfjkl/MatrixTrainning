
let matrice = document.getElementById("content-matrice");
let buildButtonMathrix = document.getElementById("button-creerMatrice");
let nLigne = document.getElementById("nLigne");
let nColone = document.getElementById("nColone");
let tabMatrice = [];

// building of the matrix
buildButtonMathrix.addEventListener("click",e => {
    e.preventDefault();
    matrice.innerHTML = "";
    createMatrix(updateMatrix);   
    loadData();    
});

/*
    procedure role : update matrix
    @params : update mathrix function
    @return : void 

*/

function createMatrix(callbackUpdateMatrix){
    // create the table of the matrice
    let ligne = 1;
    let countCellule = 0;
    while(ligne <= nLigne.value){

        // lines
        tr = document.createElement("tr");
        tr.id = "ligne";
        tr.setAttribute("data",ligne);

        matrice.appendChild(tr);
        // build column
        colone = 1;

        while(colone <= nColone.value){
            // column
            td = document.createElement("td");
            td.id = "cellule"+countCellule;
            td.title = "Click to change the value";
            td.setAttribute("data", colone);
            tdContent = document.createTextNode(countCellule);
            td.appendChild(tdContent);
            tr.appendChild(td);

            countCellule++;
            colone++; 
        }
        ligne++;
    }
    callbackUpdateMatrix();
};


let updateMatrix = () => {
    // when we want to update one value of the matrix        
    cellule = document.querySelectorAll("td");    
    for(i=0; i < cellule.length; i++ ){
        // Events columns
        cellule[i].addEventListener("click",e => {

            e.target.innerText = Number(prompt("Veuillez entrer la valeur de la cellule choisie."));            
            nLigne = Number(e.target.parentNode.getAttribute("data"))-1; 
            nCellule = Number(e.target.getAttribute("data"))-1;            
            tabMatrice[nLigne][nCellule] = Number(e.target.innerText);
            console.log(tabMatrice);
        });
    }                 
};
 // load the data in matrice table
 let loadData = () => {

    let tr = document.querySelectorAll("tr");
    tabMatrice = [];
    tr.forEach((l) => {
        let mat = [];
        for(i=0; i < l.childNodes.length; i++){
            mat[i] = parseInt(l.childNodes[i].innerText);
            if(i+1 == l.childNodes.length){
                tabMatrice.push(mat);
            }        
        }
    });
};
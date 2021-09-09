function listenList() {
    //place des écouteurs d'évènements sur les li
    let a = document.querySelectorAll("span");
    for (let i=0; i<a.length; i++) {
        a[i].addEventListener('click', editItem);
    }
}

function editItem() {
    //permet à l'utilisateur de saisir un texte de remplacement
    let resp = prompt("Saisir le texte de remplacement : ");
    resp = resp.padEnd()
    //remplace la ligne par le texte saisi
    this.innerHTML = resp;
}

function NewItem() {

    //permet à l'utilisateur de saisir un texte de remplacement
    let resp = prompt("Saisir le nouvel item : ");
    if (resp != "" && resp != null) {
        //modifie le li nouvellement créé dans la UL
        let parentUl = document.getElementById("ulList");
        parentUl.innerHTML += '<li><span>' + resp + '</span><button type"button">Supprimer</button></li>';
    }

}

function deleteItem () {
    let r = confirm("Voulez-vous vraiment supprimer cet item ?");
    if (r==true) {
        this.parentNode.remove();
    }
}
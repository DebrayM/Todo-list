function listenList() {
    //place des écouteurs d'évènements sur les li
    let a = document.querySelectorAll("li");
    for (let i=0; i<a.length; i++) {
        a[i].addEventListener('click', editItem);
    }
}

function editItem() {
    //permet à l'utilisateur de saisir un texte de remplacement
    let resp = prompt("Saisir le texte de remplacement : ");
    //remplace la ligne par le texte saisi
    this.innerHTML = resp;
}
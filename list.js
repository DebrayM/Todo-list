window.onload = function() {
    //crée le tableau à transformer en liste ul>li
    let list = ['UI Design', 'UX Design', 'JavaScript', 'HTML', 'CSS', 'SASS', 'SCSS'];
    //liList contient les li à intégrer dans la UL HTML
    let liList = "";
    //boucle de création des li
    for (let i=0; i<(list.length); i++) {
        liList = liList + '<li><span>' + list[i] + '</span><button type="button">Supprimer</button></li>';
    }
    //intègre les li dans la UL
    document.getElementById("ulList").innerHTML = liList;

    listenList();

    let additem = document.getElementById('bnt');
    additem.addEventListener('click', NewItem);

    let del = document.querySelectorAll("button");
    for (let i=0; i<del.length; i++) {
        del[i].addEventListener('click', deleteItem);
    }

}


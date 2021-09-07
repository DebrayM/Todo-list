window.onload = function() {
    //crée le tableau à transformer en liste ul>li
    let list = ['UI Design', 'UX Design', 'JavaScript', 'HTML', 'CSS', 'SASS', 'SCSS'];
    //liList contient les li à intégrer dans la UL HTML
    let liList = "";
    //boucle de création des li
    for (let i=0; i<(list.length); i++) {
        liList = liList + '<li>' + list[i] + "</li>";
    }
    //intègre les li dans la UL
    document.getElementById("ulList").innerHTML = liList;

    listenList();

}


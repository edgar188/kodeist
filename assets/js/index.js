function onNavBtn() {
    var asideNode = document.getElementById("aside");

    if(asideNode.className === "sect-cont open") {
        asideNode.className = "sect-cont close";
    } else {
        asideNode.className = "sect-cont open";
    }
}


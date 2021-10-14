function SEND() {
    let name = document.getElementById("nameInput").value;
    let subject = document.getElementById("subjectInput").value;
    let body=document.getElementById("bodyInput").value;
    return "mailto:np.patelneel@gmail.com?subject=[WEBSITE] "+name+": "+subject+"&body="+body;
}
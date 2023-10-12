function addUser(){
    Player1Name=document.getElementById("play1").value;
     Player2Name=document.getElementById("play2").value;
    
    localStorage.setItem("play1",Player1Name);
    localStorage.setItem("play2",Player2Name);
    window.location="pageindex.html";
}
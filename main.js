function toggleBackground() {
    var body = document.body;
    console.log(body.style.backgroundColor);
    if (body.style.backgroundColor == "rgb(246, 246, 246)" || body.style.backgroundColor == "") {
        body.style.backgroundColor = "black";
        body.style.color = "white";

        var h1 = Array.from(document.getElementsByTagName("h1"));
        h1.forEach(element => element.style.color = "white");

        var twitter = document.getElementById("twitter");
        twitter.style.fill = "white";
        var linkedin = document.getElementById("linkedin");
        linkedin.style.fill = "white";

        

        console.log("now black");
        
    } else {
        body.style.backgroundColor = "#F6F6F6";
        body.style.color = "black";

        var h1 = Array.from(document.getElementsByTagName("h1"));
        h1.forEach(element => element.style.color = "black");

        var twitter = document.getElementById("twitter");
        twitter.style.fill = "black";
        var linkedin = document.getElementById("linkedin");
        linkedin.style.fill = "black";
        console.log("now white");
    }
    
}
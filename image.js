
function getData(){
    var x = new XMLHttpRequest();
    x.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    x.send();
    x.onreadystatechange = function(){
        if(this.readyState == 4 || this.status == 200){
            var data = JSON.parse(this.responseText);
            for(var i=0;i<100;i++){
                document.getElementById("div").innerHTML += data[i].title + "<br>";
            } document.getElementById('result').style.visibility='hidden';
        } else{
            document.getElementById("div").innerHTML = "sorry , no results found !";
        }
        
    }
}

function getPhotos(){
var x=new XMLHttpRequest();
x.open("Get","https://jsonplaceholder.typicode.com/photos",true);
x.send();
x.onreadystatechange=function() {
    if(this.readyState == 4 || this.status == 200) {
    var resultdata=JSON.parse(this.responseText);
        for(var i=0; i <100; i++) {
            document.getElementById("div").innerHTML+="<div class='container'><div class='id'>"+ 
                resultdata[i].id + "</div><div class='title'>"+ 
                resultdata[i].title+"</div><div class='image'><img src='"+ 
                resultdata[i].thumbnailUrl +"' alt='img' ></div><div class='url'>"+"<a href='"+ 
                resultdata[i].url +"'>"+ resultdata[i].url+ "</a></div></div>";
            } document.getElementById('btn').style.visibility='hidden';
        }else{
            document.getElementById("div").innerHTML = "sorry , no results found !";
        }
    }
}


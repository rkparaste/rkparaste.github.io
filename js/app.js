function discon()
{
    var p=document.getElementById("para");
    var b=document.getElementById("btn");
    if(p.innerHTML=="")
    {
    p.innerHTML="This is optional text";
    b.innerHTML="Close";
    }
    else
    {
        p.innerHTML="";
        b.innerHTML="Learn more";
    }
}




   
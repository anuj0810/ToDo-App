var mylistItem = document.getElementsByTagName("LI");
var checkStatus=false;

function addListItem(){

    var li=document.createElement('li');
    var checkIcon=document.createElement('i');
    checkIcon.className="far fa-circle";
    li.className = "checkBox";
    var div= document.createElement('div');
    div.appendChild(checkIcon);


    var spanText = document.createElement('span');
    var inputValue = document.getElementById('search').value;
    var inputText = document.createTextNode(inputValue);
    console.log('inputValue',inputValue)
console.log('inputText',inputText)
    // add input text in the list
    if(inputValue==""){
        alert("You must write something!");
    }
    else{
        spanText.appendChild(inputText);
        div.appendChild(spanText);
    li.appendChild(div);
    document.getElementById('list').appendChild(li);
}




document.getElementById('search').value = "";

// to add the Delete button
var spanClose = document.createElement("span");
  var closeIcon=document.createElement('i');
  closeIcon.className="far fa-times-circle";
  spanClose.className = "close";
  spanClose.appendChild(closeIcon);
  li.appendChild(spanClose);

  

  // to delete the itemList
  for(let i=0;i<clickClose.length;i++){
    clickClose[i].onclick= function(){
        var deleteLi=this.parentElement;
        deleteLi.style.display= "none";
    }
   
}
}
var clickClose= document.getElementsByClassName('close');

var submitButton = document.getElementById('button');
submitButton.addEventListener('click',addListItem);




//change the LI tag class as checked when we click 
var clickCheck = document.getElementById('list');

clickCheck.addEventListener('click',function(ev){

 ev.target.classList.toggle('checked');

 checkOn();

},false)

//change the class of i tag and list border color from blue to green 
function checkOn(){
    var p=document.querySelectorAll('ul li')
    for(var i=0;i<p.length;i++){
        if(p[i].className=="checkBox checked"){
            console.log(i)
            p[i].querySelector('div i').className="fas fa-circle";
            p[i].querySelector('div i').style.color='green';
        }
        else{
            p[i].querySelector('div  i').className="far fa-circle";
            p[i].querySelector('div  i').style.color='blue';
            }
    }
}

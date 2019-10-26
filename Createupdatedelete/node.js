var btn=document.getElementById('btn-click')
var list=document.getElementById('items')
var listType=document.getElementById('type')

var currentListType = '';
listType.addEventListener('input',function(e){
      currentListType = e.target.value;
})

listType.addEventListener('keyup',function(e){
      if(e.keyCode===13){
            addListeItem();
      }
});

function addListeItem(){
      if(currentListType!==undefined && currentListType!==null && currentListType!==''){
                  var newListElement=document.createElement('li');
                  var textNode=document.createTextNode(currentListType);
                  newListElement.appendChild(textNode);
                  newListElement.id='item' + (list.childElementCount + 1);
                  console.log(newListElement);
               
                  list.appendChild(newListElement);
                  console.log(newListElement);
               
                  listType.value=''
                  currentListType=''
               
            
               
      }else{
            alert('Please Enter TODO List Item');
      }
      }

btn.addEventListener('click',addListeItem);


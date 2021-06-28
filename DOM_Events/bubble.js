//bubble-delegate, purpose of it



// document.getElementById('first',).addEventListener('click',function(){
//     console.log('first item click');
//     // event.stopPropagation();
// })
// document.getElementById('myList').addEventListener('click',function(){
//   console.log('ul clicked');
//   event.stopPropagation();  //stop bubbling
// })

// document.getElementById('container').addEventListener('click',function(){
//   console.log('container is being clicked');
  
// })
               // end of bubbling

// var items = document.getElementsByClassName('item')
// for(let i= 0; i<items.length; i++){
//   var item = items[i];
//   // console.log(item);
//   item.addEventListener('click',function(event){
//     event.target.parentNode.removeChild(event.target);
//   })
// }

document.getElementById('addNew').addEventListener('click',function(event){
  var itemParent= document.getElementById('myList');
  var newItem = document.createElement('li')
  newItem.innerText = 'Brand New Item';
  itemParent.appendChild(newItem);
})

document.getElementById('myList').addEventListener('click',function(event){
  // console.log(this,event.target);
  event.target.parentNode.removeChild(event.target);
})
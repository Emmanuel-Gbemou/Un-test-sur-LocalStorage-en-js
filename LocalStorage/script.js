let addItems = document.querySelector('.add-items');
console.log(addItems.value) ;
 let itemsList = document.querySelector('.plates');
 console.log(itemsList) ;
 let items=document.getElementById("items") ;
    console.log(items) ;
   let  compteur = localStorage.length ;
  addItems.addEventListener("submit" ,function(event){
          event.preventDefault() ;
          let enfant=document.createElement("li") ;
          enfant.innerHTML=items.value ;
          itemsList.appendChild(enfant) ;
          localStorage.setItem(compteur,items.value);
  }) ;

for(index = 0 ; index<localStorage.length;index++){
  let enfant2=document.createElement("li") ;
  enfant2.innerHTML=localStorage.getItem(index);
  itemsList.appendChild(enfant2) ;

}

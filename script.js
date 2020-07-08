
function search_blog() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('blogpost'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 


$.get('top.html',function(response){ 
    $('#top').html(response); 
   });

$.get('footer.html',function(response){ 
    $('#footer').html(response); 
   });
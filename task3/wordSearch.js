document.addEventListener('DOMContentLoaded',function(){
  
    const Button = document.getElementById('btn');
    Button.addEventListener('click',function(){
        
        const str = document.getElementById('enter').value.trim();
        const search = document.getElementById('search').value.trim();
        const word = str.split(" ");
        const display = document.getElementById('display');
        display.innerHTML = "";
        display.style.backgroundColor = "";
        let flag = false;
        if(search.length===0){
            alert("Please enter a word");
            return;
        }
        for(i=0;i<word.length;i++){
            if(word[i]===search){
                flag = true;
                break;
            }
        }
        if(flag){
            
            newstr = str.replace(search,`<span style="background-color:green">${search}</span>`);
            display.innerHTML = `<h1>${newstr}</h1>`;
           
        }
        else{
            display.style.backgroundColor = 'red'; 
            display.innerHTML = str +`<h1>Word not found</h1>`;
        }
      
        
        
    })
})
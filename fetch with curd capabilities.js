
fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(response => response.json())  
    .then(posts => {    

        console.log(posts);

        let output = '';

        for (let i = 0; i < posts.length; i++) {  

            output += `<li>${posts[i].title}</li>`; 

        }

        document.getElementById('output').innerHTML = output;   
    })

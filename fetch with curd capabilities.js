// this is a simple fetch api that has curd cabability in javascript
fetch('https://jsonplaceholder.typicode.com/posts') //this will get the data from jsonplaceholder and store it into posts variable 
    .then(response => response.json()) //convert the data to json format and store it into post variable 
    .then(posts => {  //when we have the posts data, then we can do something with it like print or display on screen  

        console.log(posts);

        let output = '';

        for (let i = 0; i < posts.length; i++) { //for loop to iterate through all elements of array and add them one by one to output string 

            output += `<li>${posts[i].title}</li>`; //adding each element of array to output string using template literal syntax as shown below 

        }

        document.getElementById('output').innerHTML = output; //displaying the result inside id=output div tag on html page using innerHTML property of dom node object  
    })

//and then display it in a table.
    //this is the fetch api for postman

    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let output = '';

            data.forEach((post, index) => {

                output += `<tr>  <td>${index + 1}</td><td>${post.title}</td><td>${post.body}</td></tr>`;

            });//end of for each loop to get all posts from the json file and put them in the table rows 

            document.getElementById('output').innerHTML = output;//putting all the posts in one row into html page using innerhtml function of javascript 

        })//end of second then block which will run after first one has finished running successfully 
        .catch(function (error) { console.log(error); });//catches any errors that might occur while getting data from json file  

     //fetch api ends here

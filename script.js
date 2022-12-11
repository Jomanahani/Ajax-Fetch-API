
// // create array to hold all posts
// let allPosts =[]

// // using Ajax to display all posts
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = ()=>{
//     if(xhr.readyState ===4 && xhr.status===200){
//         const posts = JSON.parse(xhr.responseText);
//         allPosts = posts ;
//         displayData(allPosts)
//     }
// } ;
// xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true)
// xhr.send();
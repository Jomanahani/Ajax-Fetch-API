const Container = document.querySelector(".container");
// create array to hold all posts
let allPosts = [];

// using Ajax to display all posts
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);
    allPosts = posts;
    displayData(allPosts);
  }
};
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.send();

function displayData(arr) {
  arr.forEach((element) => {
    createPost(element.title, element.body);
  });
}

function createPost(title, body) {
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  Container.appendChild(postDiv);

  const Title = document.createElement("h3");
  Title.textContent = title;
  postDiv.appendChild(Title);

  const Body = document.createElement("p");
  Body.textContent = body;
  postDiv.appendChild(Body);
}


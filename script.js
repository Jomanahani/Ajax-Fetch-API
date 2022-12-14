// access html elements
const Container = document.querySelector(".container");
const plusButo = document.querySelector("#plus");
const optionsBut = document.querySelector(".optionsBut");
const Form = document.querySelector("#form");
const closeBout = document.querySelector(".close");
const sendBout = document.getElementById("send");
const newTitle = document.getElementById("title");
const newBody = document.getElementById("body");

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

// function to create element in html
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

plusButo.onclick = () => {
  plusButo.style.display = "none";
  optionsBut.style.display = "block";
  Form.style.display = "block";
};
closeBout.onclick = () => {
  plusButo.style.display = "block";
  Form.style.display = "none";
  optionsBut.style.display = "none";
};

// add new post with fetch
sendBout.addEventListener("click", () => {
  const post = {
    userId: 1,
    title: newTitle.value,
    body: newBody.value,
  };

  if (post.title !== "" && post.body !== "") {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: JSON.stringify(post), //send data as a text
    })
      .then((res) => {
        createPost(post.title, post.body);
        newTitle.value = "";
        newBody.value = "";
        plusButo.style.display = "block";
        Form.style.display = "none";
        optionsBut.style.display = "none";
      })
      .catch((error) => console.log(error));
  } else {

  }
});

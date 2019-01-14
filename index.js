const GetDataPromise = () => {
  fetch("https://api.github.com/users/ChristianJehoshaphatS/followers")
    .then(response => {
      return response.json();
    })
    .then(data => {
      const array = data.forEach(item => {
        console.log(`Name: ${item.login}`);
        document.getElementById("list").innerHTML += `
        <div class="card" style="display: flex; flex-direction: column; margin:10px; align-items: center;">
      <img class="card-img-top" style="width: 9rem;" src="${
        item.avatar_url
      }" alt="Avatar" />
      <div class="card-body">
        <h5 class="card-title">${item.login}</h5>
        <a href="${item.html_url}" class="btn btn-primary">Go to Profile</a>
      </div>
    </div>
        `;
      });
    });
};

GetDataPromise();

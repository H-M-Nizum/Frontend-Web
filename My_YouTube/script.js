// call api
const search_data = () => {
  fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    .then((res) => res.json())
    .then((value) => displaydata(value.data));
};

// display category list
const displaydata = (data) => {
  const caragory = document.getElementById("caragory");
  data.forEach((element) => {
    const btn = document.createElement("div");
    // btn.classList.add("iteam_button");

    btn.innerHTML = `
    <button
    id='${element.category_id}'
    class="iteam_button"
    onclick="loadcategorydetails('${element.category_id}')"
   
    >
    ${element.category}
    </button>
    
    `;
    caragory.appendChild(btn);
  });
  document.getElementById("1000").classList.add("clicked");
};
let temp = "1000";
const loadcategorydetails = (id) => {
  temp = id;
  // add click class and change color.
  let buttons = document.getElementsByClassName("iteam_button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("clicked");
  }
  document.getElementById("sortbyview").classList.remove("clicked");
  // add 'click' class to the button
  document.getElementById(temp).classList.add("clicked");

  fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((res) => res.json())
    .then((value) => {
      if (value.data.length > 0) {
        display_alldata(value.data);
      } else {
        display_sorry();
      }
    });
};

// show alltime
const showalltime = () => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    .then((res) => res.json())
    .then((value) => {
      display_alldata(value.data);
    });
};
// display all data
const display_alldata = (data) => {
  const iteams = document.getElementById("products");
  iteams.innerHTML = "";
  const sorry_div = document.getElementById("sorry");
  sorry_div.innerHTML = "";

  data.forEach((iteam) => {
    // If iteam is verifyed, show verify icon
    function isverified() {
      if (iteam.authors[0].verified) {
        return "img/verify.png";
      } else {
        return "";
      }
    }
    // create new tag
    const card = document.createElement("div");
    // add class
    card.classList.add("box");
    card.innerHTML = `
    <div class="time_continar">   <img class="box_img" src="${
      iteam.thumbnail
    }" alt="">
    <div class="time_text">${
      iteam.others.posted_date.length > 0
        ? date_find(iteam.others.posted_date)
        : ""
    }</div></div>
 
    <div class="title">
        <img class="box_logo" src="${iteam.authors[0].profile_picture}" alt="">
        
        <h5> ${iteam.title}</h5>
    </div>
    <div class="name">
        <p class="text">${iteam.authors[0].profile_name}</p>
        <img class="verify" src="${isverified()}" alt="">
    </div>
    <div class="view">
        <p class="text">${iteam.others.views} views</p>
    </div>
   
   

    `;

    iteams.appendChild(card);
  });
};

function date_find(data) {
  if (data.length > 0) {
    let time = parseInt(data);
    let hour = parseInt(time / 3600);
    let tem = time % 3600;
    let min = parseInt(tem / 60);
    return `${hour}hrs ${min} min ago`;
  }
  // } else {
  //   return "";
  // }
}
// display opps sorry message
const display_sorry = () => {
  const iteams = document.getElementById("products");
  iteams.innerHTML = "";
  const sorry_div = document.getElementById("sorry");
  sorry_div.innerHTML = "";
  const sorry_card = document.createElement("div");
  sorry_card.innerHTML = `
  <img class="sorry_img" src="img/Icon.png" alt="">
  <h1>Oops!! Sorry, There is no </br>
  content here</h1>
  `;
  sorry_div.appendChild(sorry_card);
};
// sort data depend on view

const practice = () => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/${temp}`)
    .then((res) => res.json())
    .then((value) => sort_item(value.data));
};

const sort_item = (data) => {
  document.getElementById("sortbyview").classList.add("clicked");
  data.sort(
    (s1, s2) => s2.others.views.slice(0, -1) - s1.others.views.slice(0, -1)
  );
  if (data.length > 0) {
    display_alldata(data);
  }
};

search_data();
showalltime();

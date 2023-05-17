const ulList = document.getElementsByClassName("ul-list")[0];
const imageContent = document.getElementsByClassName("image-content")[0];
const listParent = document.querySelector(".people");
const items = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
  "item10",
  "item11",
  "item12",
  "item13",
  "item14",
  "item15",
  "item16",
  "item17",
  "item18",
  "item19",
  "item20",
  "item21",
  "item22",
  "item23",
  "item24",
  "item25",
  "item26",
  "item27",
  "item28",
  "item29",
  "item30",
  "item31",
  "item32",
  "item33",
  "item34",
  "item35",
  "item36",
  "item37",
  "item38",
  "item39",
  "item40",
  "item41",
  "item42",
  "item43",
  "item44",
  "item45",
  "item46",
  "item47",
  "item48",
  "item49",
  "item50",
  "item51",
];
const personNames = [
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
  "Chris M",
];
const personTitle = [
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
  "Chief Financial Officer",
];
const imgs = [
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
  "img1.webp",
  "img2.webp",
  "img3.webp",
  "img4.webp",
  "img5.webp",
];
const min = 0;
const max = 70;
// var x = window.matchMedia("(max-width:991px)");
// console.log(x);
let previousItem = null;
const firstImg = document.createElement("img");
firstImg.src = `./images/${imgs[0]}`;
firstImg.alt = `img ${0}`;
firstImg.setAttribute("data-id", `${0}`);
firstImg.classList.add("animate-image");
firstImg.style;
imageContent.appendChild(firstImg);
let firstImgB = true;
// create lis of the list
items.forEach((item, index) => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const headingText = document.createTextNode(
    `${index + 1} ${personNames[index]}`
  );
  const p = document.createElement("p");
  const pText = document.createTextNode(personTitle[index]);
  li.classList.add(`item${index + 1}`);
  li.setAttribute("data-id", `${index}`);
  if (index === 0) li.classList.add("active");
  if (index === 49) li.style.cssText = "margin-top:10px;";
  h2.appendChild(headingText);
  p.appendChild(pText);
  p.style.cssText = `color: gray;`;
  li.appendChild(h2);
  li.appendChild(p);
  ulList.append(li);
});
//////////////////////////////////////////////////////////
// Scrolling Event Handler
ulList.addEventListener("wheel", function (event) {
  event.preventDefault();
  let mobileWindow = window.matchMedia("(max-width:765px)");
  // console.log(mobileWindow);
  let smallWindow = window.matchMedia("(max-width:991px)");
  let scrollVar = smallWindow.matches ? 600 : 790;
  // console.log(smallWindow);
  let activeElement = document.querySelector(".active");
  // console.log(activeElement);
  let currentEle = document.querySelector(".active");
  // console.log(event.deltaY);
  if (Number(currentEle.getAttribute("data-id")) < 48) {
    if (mobileWindow.matches) {
      ulList.scrollTop += event.deltaY;
      // console.log(event);
    } else {
      ulList.scrollLeft += event.deltaY;
    }
  }
  if (event.deltaY > 0) {
    let randomColor = Math.floor(Math.random() * 5);
    const nextEle = currentEle.nextElementSibling;
    const randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log(nextEle.getAttribute("data-id"));
    if (nextEle && Number(nextEle.getAttribute("data-id")) < 50) {
      // console.log(nextEle);
      listItems.forEach((e) => {
        e.classList.remove("active");
        e.style.cssText = "background-color:#000;";
      });
      currentEle.classList.remove("active");
      nextEle.classList.add("active");
      currentEle = nextEle;
      nextEle.style.cssText = `background-color: #fff;`;
      //////////////////////
      const i = Number(currentEle.getAttribute("data-id"));
      // console.log(randomNumber1, randomNumber2);
      const img = document.createElement("img");
      img.src = `./images/${imgs[i]}`;
      img.alt = `img ${i + 1}`;
      img.setAttribute("data-id", `${i}`);
      img.classList.add("animate-image");
      img.style.cssText = `top:${randomNumber1}px; left:${randomNumber1}px; right:${randomNumber2}px; bottom:${randomNumber2}px;`;
      imageContent.appendChild(img);
      ///600 , 800
      if (mobileWindow.matches) {
        ulList.scrollBy({
          top: currentEle.getBoundingClientRect().y - 400,
          // top: 120,
          behavior: "smooth",
        });
        // console.log("True");
        // console.log(currentEle.getBoundingClientRect());
      } else {
        ulList.scrollBy({
          left: currentEle.getBoundingClientRect().x - scrollVar,
          behavior: "smooth",
        });
      }
    }
  } else {
    const prevEle = currentEle.previousElementSibling;
    const randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    if (prevEle) {
      listItems.forEach((e) => {
        e.classList.remove("active");
        e.style.cssText = "background-color:#000;";
      });
      currentEle.classList.remove("active");
      prevEle.classList.add("active");
      currentEle = prevEle;
      currentEle.style.cssText = `background-color: #fff;`;
      //////////////
      const i = Number(currentEle.getAttribute("data-id"));
      // console.log(randomNumber1, randomNumber2);
      const img = document.createElement("img");
      img.src = `./images/${imgs[i]}`;
      img.alt = `img ${i + 1}`;
      img.setAttribute("data-id", `${i}`);
      img.classList.add("animate-image");
      img.style.cssText = `top:${randomNumber1}px; left:${randomNumber1}px; right:${randomNumber2}px;bottom:${randomNumber2}px;`;
      imageContent.appendChild(img);
      /////////////
      if (mobileWindow.matches) {
        ulList.scrollBy({
          top: currentEle.getBoundingClientRect().y - 400,
          behavior: "smooth",
        });
        // console.log("True");
        // console.log(currentEle.getBoundingClientRect());
      } else {
        ulList.scrollBy({
          left: currentEle.getBoundingClientRect().x - scrollVar,
          behavior: "smooth",
        });
      }
    }
  }
});
//////////////////////////////////////////////////////////
// Click Event Handler
const listItems = document.querySelectorAll(".ul-list li");
ulList.addEventListener("click", (event) => {
  let mobileWindow = window.matchMedia("(max-width:765px)");
  let smallWindow = window.matchMedia("(max-width:991px)");
  let scrollVar = smallWindow.matches ? 600 : 790;
  const randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const currentEle = event.target.closest("li");
  if (currentEle) {
    if (currentEle === previousItem) {
    } else if (
      firstImgB &&
      Number(firstImg.getAttribute("data-id")) ===
        Number(currentEle.getAttribute("data-id"))
    ) {
      firstImgB = false;
    } else {
      const i = Number(currentEle.getAttribute("data-id"));
      // console.log(randomNumber1, randomNumber2);
      const img = document.createElement("img");
      img.src = `./images/${imgs[i]}`;
      img.alt = `img ${i + 1}`;
      img.setAttribute("data-id", `${i}`);
      img.classList.add("animate-image");
      img.style.cssText = `top:${randomNumber1}px; left:${randomNumber1}px; right:${randomNumber2}px;bottom:${randomNumber2}px;`;
      imageContent.appendChild(img);
      const activeEle = document.querySelector(".active");
      // console.log(activeEle);
      listItems.forEach((e) => {
        e.classList.remove("active");
        e.style.cssText = "background-color:#000;";
      });
      currentEle.classList.add("active");
      currentEle.style.cssText = `background-color: #fff;`;
    }
    previousItem = currentEle;
    if (mobileWindow.matches) {
      ulList.scrollBy({
        top: currentEle.getBoundingClientRect().y - 400,
        behavior: "smooth",
      });
      // console.log(currentEle.getBoundingClientRect());
    } else {
      ulList.scrollBy({
        left: currentEle.getBoundingClientRect().x - scrollVar,
        behavior: "smooth",
      });
    }
    // ulList.scrollBy({
    //   left: currentEle.getBoundingClientRect().x - scrollVar,
    //   behavior: "smooth",
    // });
  }
});
/////////////////////////////////////////////////////////

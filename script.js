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
const colors = ["#fe58a1", "#005100", "#d5c22b", "#25e6dc", "#0064ff"];
const min = 0;
const max = 70;
let previousItem = null;
const firstImg = document.createElement("img");
firstImg.src = `./images/${imgs[0]}`;
firstImg.alt = `img ${0}`;
firstImg.setAttribute("data-id", `${0}`);
firstImg.classList.add("animate-image");
firstImg.style;
imageContent.appendChild(firstImg);
let firstImgB = true;
items.forEach((item, index) => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const headingText = document.createTextNode(`${personNames[index]}`);
  const p = document.createElement("p");
  const pText = document.createTextNode(personTitle[index]);
  li.classList.add(`item${index + 1}`);
  li.setAttribute("data-id", `${index}`);
  if (index === 0) li.classList.add("active");
  // li.style.cssText = `left: ${index === 0 ? `0` : `50*(index+1)`}px`;
  h2.appendChild(headingText);
  p.appendChild(pText);
  li.appendChild(h2);
  li.appendChild(p);
  ulList.append(li);
});

// ulList.addEventListener("wheel", (event) => {
//   // event.preventDefault();
//   // ulList.scrollLeft += event.deltaY;
//   const active = document.querySelector("ul .active");
//   console.log(active);
//   if (active) {
//     const next = active.nextElementSibling;
//     listItems.forEach((e) => e.classList.remove("active"));
//     next.classList.add("active");
//     console.log(next);
//     if (next) {
//       ulList.scrollTo({
//         left: next.offset,
//         behavior: "smooth",
//       });
//     }
//   }
// });
// let x = 700;
const listItems = document.querySelectorAll(".ul-list li");
ulList.addEventListener("click", (event) => {
  const randomNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
  let randomColor = Math.floor(Math.random() * 5);
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
      console.log(randomNumber1, randomNumber2);
      const img = document.createElement("img");
      img.src = `./images/${imgs[i]}`;
      img.alt = `img ${i + 1}`;
      img.setAttribute("data-id", `${i}`);
      img.classList.add("animate-image");
      img.style.cssText = `top:${randomNumber1}px; left:${randomNumber1}px; right:${randomNumber2}px;bottom:${randomNumber2}px;`;
      imageContent.appendChild(img);
      const activeEle = document.querySelector(".active");
      console.log(activeEle);
      listItems.forEach((e) => {
        e.classList.remove("active");
        e.style.cssText = "background-color:#3700c8;";
      });
      currentEle.classList.add("active");
      currentEle.style.cssText = `background-color: ${colors[randomColor]};`;
    }
    previousItem = currentEle;
    console.log(currentEle.getBoundingClientRect());
    ulList.scrollBy({
      left: currentEle.getBoundingClientRect().x - 720,
      behavior: "smooth",
    });

    // listParent.style.cssText = `left: ${x <= 0 ? 0 : x}px;`;
    // x -= 60;
    // listParent.console.log(listParent);
  }
});

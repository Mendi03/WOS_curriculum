console.log("script connected");

// 1
let titleHeading = document.querySelector("h1");
console.log(titleHeading);
let para = document.querySelector("p");
console.log(para);

// 2
let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// 3
let button1 = document.querySelector("#contact-button");
console.log(button1);

// 4
console.log(`Found ${paragraphs.length} paragraphs!`);

// 5
for (const p of paragraphs) {
    console.log(p.innerText);
}

// 6
let highlighted = document.querySelectorAll(".highlight");
console.log(highlighted);

// 7
let section1 = document.querySelector("section");
console.log(section1);

let section2 = document.querySelectorAll("section");
console.log(section2);

// Jam Master:
console.log("Jam Master stuff:");


// 1

let spans_inside_div = document.querySelectorAll("div span");
console.log(spans_inside_div);

// 2 
let directChildren = document.querySelectorAll("nav > ul > li");
console.log(directChildren);

// 3
let registerButton = document.querySelector("p + button");
console.log(registerButton);

// 4
let pSiblings = document.querySelectorAll("h2 ~ p");
console.log(pSiblings);

// 5







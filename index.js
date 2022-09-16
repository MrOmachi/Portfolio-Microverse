const closeX = document.getElementById('closeX');
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
const logoMobile = document.getElementById('logoMobile');
const btnId1 = document.getElementById('btnId1');
const btnId2 = document.getElementById('btnId2');
const btnId3 = document.getElementById('btnId3');
const btnId4 = document.getElementById('btnId4');
const userName = document.getElementById('userName');
const email = document.getElementById('email');
const comment = document.getElementById('comment');
const textError = document.getElementById('textError');
const myForm = document.getElementById('myForm');
const workArr = [
  {
    id: '0',
    title: 'Awesome Books Library',
    image: 'images/desktop.png',
    paragraph:
      'This educational project involves creating a straightforward website that shows a list of books and lets you add and remove books from that list. The intention is to use modules and learn ES6 syntax to make it more orderly. built with JavaScript, CSS and HTML.',
    ulList1: 'html',
    ulList2: 'Ruby on rail',
    ulList3: 'css',
    btnLive: 'https://mromachi.github.io/awsomeBooksInModules/',
    btnSource: 'https://github.com/MrOmachi/awsomeBooksInModules.git',
  },

  {
    id: '1',
    title: 'Second Multy Post - Stories ',
    image: 'images/desktop22.png',
    paragraph:
      ' A JavaScript project for the Leaderboard list app, using webpack and ES6 features. This project is MIT Licensed',
    ulList1: 'html',
    ulList2: 'Ruby on rail',
    ulList3: 'css',
    btnLive: 'https://snazzy-chebakia-6e07d3.netlify.app/',
    btnSource: 'https://github.com/MrOmachi/Leaderboard.git',
  },

  {
    id: '2',
    title: 'Todo App, React JS',
    image: 'images/todo.png',
    paragraph:
      "This project is written in React JS with minimal npm scripts and commands. It is a minimal implementation of a 'To Do List' application. This helps trach the list of thing to do and the ones done already.",
    ulList1: 'html',
    ulList2: 'Ruby on rail',
    ulList3: 'css',
    btnLive: 'https://mromachi.github.io/Todo-App-React/',
    btnSource: 'https://github.com/MrOmachi/Todo-App-React',
  },

  {
    id: '3',
    title: 'Movies Display',
    image: 'images/capstone2.png',
    paragraph:
      ' This JavaScript capstone project is built on the TVMAZE API, an external API. The cards display the movies information that was retrieved from the API. The user has the option to like and comment on the movies cards.',
    ulList1: 'html',
    ulList2: 'Ruby on rail',
    ulList3: 'css',
    btnLive: 'https://creative-snickerdoodle-94ec3b.netlify.app/',
    btnSource: 'https://github.com/MrOmachi/capestone-II',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const local = JSON.parse(localStorage.getItem('userArr'));
  if (local) {
    userName.value = local.userName;
    email.value = local.email;
    comment.value = local.comment;
  }
});

let i = 0;

[closeX, menu, hamburger].forEach((elements) => {
  elements.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    closeX.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    logoMobile.classList.toggle('noVisibility');
  });
});

function objArr() {
  const obj = {
    userName: userName.value,
    email: email.value,
    comment: comment.value,
  };
  localStorage.setItem('userArr', JSON.stringify(obj));
  myForm.submit();
}

function ErrorMessage() {
  const emailRegex = /^([a-z0-9_\-.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
  if (email.value.match(emailRegex)) {
    objArr();
  } else {
    textError.innerHTML = 'Kindly provide valid email address without the use of uppercase';
  }
}

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  ErrorMessage();
});

// CREATE HTML ELEMENTS
function display() {
  const popScreen = document.querySelector('body');
  const modalSection = document.createElement('section');
  const sectionDivContainer = document.createElement('div');
  const sectionDiv = document.createElement('div');
  const sectionHeader = document.createElement('header');
  const divTitle = document.createElement('h1');
  const divClosImg = document.createElement('img');
  const divImgContainer = document.createElement('div');
  const divImg = document.createElement('img');
  const divParagraph = document.createElement('p');
  const ulLi1st = document.createElement('ul');
  const ulLi1 = document.createElement('li');
  const ulLi2 = document.createElement('li');
  const ulLi3 = document.createElement('li');
  const divButton = document.createElement('div');
  const popBtn1 = document.createElement('button');
  const popBtn2 = document.createElement('button');

  // CREATE A CLASS FOR HTML ELEMENTS
  popScreen.className = 'popbody';
  modalSection.className = 'popupsection';
  sectionDivContainer.className = 'popDivContainer';
  sectionDiv.className = 'popDiv';
  sectionHeader.className = 'popHeader';
  divTitle.className = 'popdivTitle';
  divClosImg.className = 'closeX';
  divImgContainer.className = 'divImgContain';
  divImg.className = 'popdivImg';
  divParagraph.className = 'divParagraphagraph';
  ulLi1st.className = 'ulMain';
  ulLi1.className = 'ulItems1';
  ulLi2.className = 'ulItems2';
  ulLi3.className = 'ulItems3';
  divButton.className = 'btnDiv';
  popBtn1.className = 'button1';
  popBtn2.className = 'button2';

  // APPEND HTML ELEMENTS RESPECTIVELY
  popScreen.appendChild(modalSection);
  modalSection.appendChild(sectionDivContainer);
  sectionDivContainer.appendChild(sectionDiv);
  sectionDiv.appendChild(sectionHeader);
  sectionHeader.appendChild(divTitle);
  sectionHeader.appendChild(divClosImg);
  sectionDiv.appendChild(divImgContainer);
  divImgContainer.appendChild(divImg);
  sectionDiv.appendChild(divParagraph);
  sectionDiv.appendChild(ulLi1st);
  ulLi1st.appendChild(ulLi1);
  ulLi1st.appendChild(ulLi2);
  ulLi1st.appendChild(ulLi3);
  sectionDiv.appendChild(divButton);
  divButton.appendChild(popBtn1);
  divButton.appendChild(popBtn2);

  // CREATE ELEMENT CONTENTS
  document.querySelector('.popdivTitle').textContent = workArr[i].title;
  document.querySelector('.closeX').src = 'images/close.png';
  document.querySelector('.popdivImg').src = workArr[i].image;
  document.querySelector('.divParagraphagraph').textContent = workArr[i].paragraph;
  document.querySelector('.ulItems1').textContent = workArr[i].ulList1;
  document.querySelector('.ulItems2').textContent = workArr[i].ulList2;
  document.querySelector('.ulItems3').textContent = workArr[i].ulList3;
  document.querySelector('.button1').textContent = 'See Live';
  document.querySelector('.button2').textContent = 'See Source';

  divClosImg.addEventListener('click', () => {
    modalSection.remove();
  });

  popBtn1.addEventListener('click', () => {
    window.open(workArr[i].btnLive);
  });

  popBtn2.addEventListener('click', () => {
    window.open(workArr[i].btnSource);
  });
}

btnId1.addEventListener('click', () => {
  i = 0;
  display();
});

btnId2.addEventListener('click', () => {
  i = 1;
  display();
});

btnId3.addEventListener('click', () => {
  i = 2;
  display();
});

btnId4.addEventListener('click', () => {
  i = 3;
  display();
});

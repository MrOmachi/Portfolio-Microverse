const closeX = document.getElementById('closeX');
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
const logoMobile = document.getElementById('logoMobile');
const btnId1 = document.getElementById('btnId1');
const btnId2 = document.getElementById('btnId2');
const btnId3 = document.getElementById('btnId3');
const btnId4 = document.getElementById('btnId4');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const textError = document.getElementById('textError');
let userName = document.getElementById('userName');
let email = document.getElementById('email');
let comment = document.getElementById('comment');
const workArr = [
  {
    id: '0',
    title: 'Multy Post - Stories',
    image: 'images/SnapshootPortfolio.png',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    ulList1: 'html',
    ulList2: 'Ruby on rail',
    ulList3: 'css',
    btnLive: 'https://mromachi.github.io/Portfolio-Microverse/',
    btnSource: 'https://github.com/MrOmachi/Portfolio-Microverse ',
  },

  {
    id: '1',
    title: 'Second Multy Post - Stories ',
    image: 'images/SnapshootPortfolio.png',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    ulList1: 'html',
    ulList2: 'Ruby on rail',
    ulList3: 'css',
    btnLive: 'https://mromachi.github.io/Portfolio-Microverse/',
    btnSource: 'https://github.com/MrOmachi/Portfolio-Microverse ',
  },

  {
    id: '2',
    title: 'Third Multy Post - Stories',
    image: 'images/SnapshootPortfolio.png',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    ulList1: 'html',
    ulList2: 'Ruby on rail',
    ulList3: 'css',
    btnLive: 'https://mromachi.github.io/Portfolio-Microverse/',
    btnSource: 'https://github.com/MrOmachi/Portfolio-Microverse ',
  },

  {
    id: '3',
    title: 'Fourth Multy Post - Stories',
    image: 'images/SnapshootPortfolio.png',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    ulList1: 'html',
    ulList2: 'Ruby on rail',
    ulList3: 'css',
    btnLive: 'https://mromachi.github.io/Portfolio-Microverse/',
    btnSource: 'https://github.com/MrOmachi/Portfolio-Microverse ',
  },
];

let i = 0;

[closeX, menu, hamburger].forEach((elements) => {
  elements.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    closeX.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    logoMobile.classList.toggle('noVisibility');
  });
});

function ErrorMessage() {
  const emailRegex =
    /^([a-z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

  if (userName.value == '') {
    ClearErrors();
    nameError.innerHTML = 'Kindly input a valid Name';
    return false;
  } else if (!email.value.match(emailRegex)) {
    ClearErrors();
    emailError.innerHTML =
      'Kindly provide valid email address without the use of uppercase';
    return false;
  } else if (comment.value == '') {
    ClearErrors();
    textError.innerHTML = 'Kindly leave a coment';
    return false;
  }
}

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

  document.querySelector('.popdivTitle').textContent = workArr[i].title;
  document.querySelector('.closeX').src = 'images/close.png';
  document.querySelector('.popdivImg').src = workArr[i].image;
  document.querySelector('.divParagraphagraph').textContent =
    workArr[i].paragraph;
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

const mobileFrame = document.querySelector('[main_page]');

// Pop Up window for projects
const workHeaderSection = document.querySelector('#work_link');

const workHeaderSubSection = () => {
  const workHeaderSectionTitle = document.createElement('div');
  workHeaderSectionTitle.className = 'works-title-block';
  workHeaderSectionTitle.innerHTML = `
    <h3 class="title flex">My Recent Works</h3> 
      <div class="divider-desktop"> 
        <img class="desktop-divider" src="images/desktop-divider.png" alt="vector">
      </div>
    </div>
    <div class="crossline">
      <img src="images/Vector (2).png" alt="vector">
    </div>`;
  workHeaderSection.appendChild(workHeaderSectionTitle);

  const yogaImageCard = document.createElement('div');  
  yogaImageCard.className = 'works-card';  
  yogaImageCard.innerHTML = `
    <div class="yoga-placeholder">
      <img src="images/Img Placeholder.png" alt="yoga">
    </div>
    <h3 id="bold-text" class="flex">Multi-Post Stories</h3>
    <p id="works-description">
      A daily selection of privately personalized reads; no accounts or sign-ups required.
      has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard
      dummy text.
    </p>
    <ul id="competencies" class="flex">
      <li>CSS</li>
      <li>HTML</li>
      <li>JAVASCRIPT</li>
    </ul>
    <button type="button" class="btn-type-a flex">See project</button>`;
  workHeaderSection.appendChild(yogaImageCard);    
};
workHeaderSubSection();

function worksDesktop() {
  const worksCardDesktop = document.createElement('div');
  worksCardDesktop.className = 'works-card-desktop';
  worksCardDesktop.innerHTML = `
  <img src="images/Img Placeholder.png" class="project-cards flex">
  <div class="extras side-text">
    <h3 id="bold-text">Multi-Post Stories</h3>
    <p id="works-description">
          A daily selection of privately personalized reads; 
          no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a standard dummy text.
    </p>
    <ul id="competencies" class="flex">
      <li>CSS</li>
      <li>HTML</li>
      <li>Bootstrap</li>
      <li>Ruby</li>
    </ul>
    <button type="button" class="btn-type-a">See project</button>
  </div>`;
  workHeaderSection.appendChild(worksCardDesktop);
}
worksDesktop();

const cardsContainer = document.createElement('div');
cardsContainer.className = 'grid-container';

const projectArray = [
  {
    name: 'Professional Art<br>Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard.<br>&nbsp',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(2).png',
        alt: '',
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
  },

  {
    name: 'Data Dashboard<br>Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard.<br>&nbsp',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(3).png',
        alt: '',
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
  },

  {
    name: '<br>Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard.<br>&nbsp',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(4).png',
        alt: '',
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
  },

  {
    name: 'Professional Art<br>Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard.<br>&nbsp',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
  },

  {
    name: 'Data Dashboard<br>Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard.<br>&nbsp',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(3).png',
        alt: '',
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
  },

  {
    name: '<br>Website Portfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry standard.<br>&nbsp',
    'Featured image': {
      mobile: {
        src: 'images/Img-Placeholder(1).png',
        alt: '',
      },
      desktop: {
        src: 'images/Img-Placeholder(4).png',
        alt: '',
      },
    },
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    'Link to live version': '#',
    'Link to source': '#',
  },
];

function prjCards(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    const card = document.createElement('div');
    card.className = 'grid-item';
    const cardDetails = arr[i];
    card.innerHTML = `
    <img src=${cardDetails['Featured image'].mobile.src} alt=${cardDetails['Featured image'].alt} width class="project-cards-mobile">
    <img class='project-cards-desktop' src=${cardDetails['Featured image'].desktop.src} alt=${cardDetails['Featured image'].alt}>
    <div class="image-text flex">
      <div>
        <h3 class="bold-text flex">${cardDetails.name}</h3>
      </div>
      <p class="works-description">${cardDetails.description}</p>
      <ul class="competencies flex">
        <li>${cardDetails.technologies.tech1}</li>
        <li>${cardDetails.technologies.tech2}</li>
        <li>${cardDetails.technologies.tech3}</li>
      </ul>
    </div>
    <div><button type="button" class="btn-type-b flex">See project</button></div>`;
    cardsContainer.appendChild(card);
  }
  return cardsContainer;
}
prjCards(projectArray);
workHeaderSection.appendChild(cardsContainer);

const cardButton = document.querySelectorAll('.btn-type-b');

function popupButton(arr, elem) {
  for (let i = 0; i < arr.length; i += 1) {
    const popupBtn = arr[i];
    popupBtn.addEventListener('click', () => {
      for (let j = 0; j < elem.length; j += 1) {
        if (j === i) {
          const details = elem[j];
          const detailsPopup = document.createElement('section');
          detailsPopup.id = 'details-popup';
          detailsPopup.innerHTML = `
            <div class="popup-header flex">
            <h3 class="bold-text">${details.name}</h3>
            <button id="popup-close">X</button></div>
            <ul class="competencies flex popup-technologies">
              <li>${details.technologies.tech1}</li>
              <li>${details.technologies.tech2}</li>
              <li>${details.technologies.tech3}</li>
            </ul>
            <div class="popup-body flex">
              <img src="images/Snapshoot Portfolio.png" alt="" class="popup-image">
              <div class="side-text">
                <div class="works-description popup-text">${details.description}</div>
                <div class="demoButtons flex">
                  <a href=${details['Link to live version']} class="btn-type-a">See live <img src="images/export-icon.png" alt="" width='13'></a>
                  <a href=${details['Link to live version']} class="btn-type-a">See source <img src="images/github-icon.png" alt="" width='13'></a>
                </div>
              </div>
            </div>`;
          mobileFrame.appendChild(detailsPopup);

          const popupClose = document.querySelector('#popup-close');
          const popHeader = document.querySelector('.popup-header');
          popupClose.addEventListener('click', () => {
            popHeader.parentNode.remove();
          });          
        }
      }
    });
  }
}
popupButton(cardButton, projectArray);

// Adding functionality to mobile menu
const hamburgerButton = document.querySelector('[hb_menu_list]');

const showMobileMenu = () => {
  const modal = document.createElement('section');
  modal.id = 'custom-modal';

  const deleteButton = document.createElement('div');
  deleteButton.textContent = 'X';
  deleteButton.id = 'modal-delete';
  modal.appendChild(deleteButton);

  const menuList = document.createElement('ul');
  menuList.id = 'menu-list';

  const listItem1 = document.createElement('li');
  const portfolio = document.createElement('a');
  portfolio.href = '#work';
  portfolio.className = 'menu-content';
  portfolio.textContent = 'Portfolio';
  listItem1.appendChild(portfolio);
  portfolio.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    const workSection = document.querySelector('#work-link');
    workSection.scrollIntoView({ behaviour: 'smooth' });
  });

  const listItem2 = document.createElement('li');
  const about = document.createElement('a');
  about.href = '#about';
  about.className = 'menu-content';
  about.textContent = 'About';
  listItem2.appendChild(about);
  about.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    const aboutSection = document.querySelector('#about-link');
    aboutSection.scrollIntoView({ behaviour: 'smooth' });
  });

  const listItem3 = document.createElement('li');
  const contact = document.createElement('a');
  contact.href = '#contact_section';
  contact.className = 'menu-content';
  contact.textContent = 'Contact';
  listItem3.appendChild(contact);
  contact.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    const contactSection = document.querySelector('#contact-link');
    contactSection.scrollIntoView({ behaviour: 'smooth' });
  });

  menuList.appendChild(listItem1);
  menuList.appendChild(listItem2);
  menuList.appendChild(listItem3);
  modal.appendChild(menuList);
  mobileFrame.appendChild(modal);

  const removeModal = () => {
    modal.style.visibility = 'hidden';
  };

  deleteButton.addEventListener('click', removeModal);
};

hamburgerButton.addEventListener('click', showMobileMenu);

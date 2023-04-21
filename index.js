const mobileFrame = document.querySelector('[main_page]');
const header = document.querySelector('.wrapper');

// Pop Up window for projects
const workHeaderSection = document.querySelector('#work_link');

const workHeaderSubSection = () => {
  const workHeaderSectionTitle = document.createElement('div');
  workHeaderSectionTitle.className = 'works-title-block';
  workHeaderSectionTitle.innerHTML = `
    <h3 class="title flex">My Recent Works</h3> 
      <div class="divider_1"> 
        <img class="divider_2" src="images/desk_tab.png" alt="vector">
      </div>
    </div>
    <div class="crossline">
      <img src="images/cross_vector.png" alt="vector">
    </div>`;
  workHeaderSection.appendChild(workHeaderSectionTitle);

  const yogaImageCard = document.createElement('div');
  yogaImageCard.className = 'works-card';
  yogaImageCard.innerHTML = `
    <div class="yoga-placeholder">
      <img src="images/yoga-image.png" alt="yoga">
    
    <h3 id="bold-text" class="flex">Multi-Post Stories</h3>
    <p id="works-description">
      A daily selection of privately personalized reads; no accounts or sign-ups required.
      has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard
      dummy text.
    </p>
    <ul id="skillset" class="flex">
      <li>CSS</li>
      <li>HTML</li>
      <li>JAVASCRIPT</li>
    </ul>
    <button type="button" class="btn-type-a flex">See project</button>
    </div>`;
  workHeaderSection.appendChild(yogaImageCard);
  // Add event listener to the button
  const btnTypeAMb = yogaImageCard.querySelector('.btn-type-a');
  btnTypeAMb.addEventListener('click', () => {
    // Create the popup modal
    const popupMb = document.createElement('section');
    popupMb.id = 'details-popup';
    popupMb.innerHTML = `
      <div class="popup-header flex">
      <h3 class="bold-text">Multi-Post Stories</h3>
      <button id="popup-close">X</button></div>
      <ul class="skillset flex popup-skills">
        <li>CSS</li>
        <li>HTML</li>
        <li>JAVASCRIPT</li>        
      </ul>
      <div class="popup-body flex">
      <img src="images/Snapshoot Portfolio.png" alt="" class="popup-image">
      <div class="side-text">
        <div class="works-description popup-text">A daily selection of privately personalized reads; 
          no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a standard dummy text.
        </div>
        <div class="demoButtons flex">
          <a href=# class="btn-type-c">See live <img src="images/export-icon.png" alt="" width='13'></a>
          <a href=# class="btn-type-c">See source <img src="images/github-icon.png" alt="" width='13'></a>
        </div>
      </div>
      </div>`;
    mobileFrame.appendChild(popupMb);
    header.classList.add('all');
    const popupDeleteYogaMb = document.querySelector('#popup-close');
    const popupBodyYogaMb = document.querySelector('.popup-header');
    popupDeleteYogaMb.addEventListener('click', () => {
      popupBodyYogaMb.parentNode.remove();
      header.classList.remove('all');
    });
  });
};
workHeaderSubSection();

function worksDesktop() {
  const worksCardDesktop = document.createElement('div');
  worksCardDesktop.className = 'works-card-desktop';
  worksCardDesktop.innerHTML = `
  <img src="images/yoga-image.png" class="project-cards flex">
  <div class="extras side-text">
    <h3 id="bold-text">Multi-Post Stories</h3>
    <p id="works-description">
          A daily selection of privately personalized reads; 
          no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a standard dummy text.
    </p>
    <ul id="skillset" class="flex">
      <li>CSS</li>
      <li>HTML</li>
      <li>Bootstrap</li>
      <li>Ruby</li>
    </ul>
    <button type="button" class="btn-type-a">See project</button>
  </div>`;
  // Add event listener to the button
  const btnTypeA = worksCardDesktop.querySelector('.btn-type-a');
  btnTypeA.addEventListener('click', () => {
    // Create the popup modal
    const popup = document.createElement('section');
    popup.id = 'details-popup';
    popup.innerHTML = `
      <div class="popup-header flex">
      <h3 class="bold-text">Multi-Post Stories</h3>
      <button id="popup-close">X</button></div>
      <ul class="skillset flex popup-skills">
        <li>CSS</li>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Ruby</li>
      </ul>
      <div class="popup-body flex">
      <img src="images/Snapshoot Portfolio.png" alt="" class="popup-image">
      <div class="side-text">
        <div class="works-description popup-text">A daily selection of privately personalized reads; 
          no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a standard dummy text.
        </div>
        <div class="demoButtons flex">
          <a href=# class="btn-type-c">See live <img src="images/export-icon.png" alt="" width='13'></a>
          <a href=# class="btn-type-c">See source <img src="images/github-icon.png" alt="" width='13'></a>
        </div>
      </div>  
      </div>`;
    mobileFrame.appendChild(popup);
    header.classList.add('all');

    const popupDeleteYoga = document.querySelector('#popup-close');
    const popupBodyYoga = document.querySelector('.popup-header');
    popupDeleteYoga.addEventListener('click', () => {
      popupBodyYoga.parentNode.remove();
      header.classList.remove('all');
    });
  });

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
        src: 'images/mob_img_1.png',
        alt: '',
      },
      desktop: {
        src: 'images/desktop_img_Placeholder_1.png',
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
        src: 'images/mob_img_1.png',
        alt: '',
      },
      desktop: {
        src: 'images/desktop_img_Placeholder_2.png',
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
        src: 'images/mob_img_1.png',
        alt: '',
      },
      desktop: {
        src: 'images/desktop_img_Placeholder_3.png',
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
        src: 'images/mob_img_1.png',
        alt: '',
      },
      desktop: {
        src: 'images/mob_img_1.png',
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
        src: 'images/mob_img_1.png',
        alt: '',
      },
      desktop: {
        src: 'images/desktop_img_Placeholder_2.png',
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
        src: 'images/mob_img_1.png',
        alt: '',
      },
      desktop: {
        src: 'images/desktop_img_Placeholder_3.png',
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
    const contentCard = arr[i];
    card.innerHTML = `
    <img src=${contentCard['Featured image'].mobile.src} alt=${contentCard['Featured image'].alt} width class="project-cards-mobile">
    <img class='project-cards-desktop' src=${contentCard['Featured image'].desktop.src} alt=${contentCard['Featured image'].alt}>
    <div class="image-text flex">
      <div>
        <h3 class="bold-text flex">${contentCard.name}</h3>
      </div>
      <p class="works-description">${contentCard.description}</p>
      <ul class="skillset flex">
        <li>${contentCard.technologies.tech1}</li>
        <li>${contentCard.technologies.tech2}</li>
        <li>${contentCard.technologies.tech3}</li>
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
          const features = elem[j];
          const featuresContent = document.createElement('section');
          featuresContent.id = 'details-popup';
          featuresContent.innerHTML = `
            <div class="popup-header flex">
            <h3 class="bold-text">${features.name}</h3>
            <button id="popup-close">X</button></div>
            <ul class="skillset flex popup-skills">
              <li>${features.technologies.tech1}</li>
              <li>${features.technologies.tech2}</li>
              <li>${features.technologies.tech3}</li>
            </ul>
            <div class="popup-body flex">
              <img src="images/Snapshoot Portfolio.png" alt="" class="popup-image">
              <div class="side-text">
                <div class="works-description popup-text">${features.description}</div>
                <div class="demoButtons flex">
                  <a href=${features['Link to live version']} class="btn-type-a">See live <img src="images/export-icon.png" alt="" width='13'></a>
                  <a href=${features['Link to live version']} class="btn-type-a">See source <img src="images/github-icon.png" alt="" width='13'></a>
                </div>
              </div>
            </div>`;
          mobileFrame.appendChild(featuresContent);
          header.classList.add('all');

          const popupDelete = document.querySelector('#popup-close');
          const popupBody = document.querySelector('.popup-header');
          popupDelete.addEventListener('click', () => {
            popupBody.parentNode.remove();
            header.classList.remove('all');
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

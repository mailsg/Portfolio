  const mobileVersionContainer = document.querySelector('[main_page]');
  const menuButton = document.querySelector('[hb_menu_list]');

  const menuDisplay = () => {
      const modal = document.createElement('section');
      modal.id = 'custom-modal';

      const deleteButton = document.createElement('div');
      deleteButton.textContent = 'X';
      deleteButton.id = 'modal-delete';
      modal.appendChild(deleteButton);

      const menuList = document.createElement('ul');
      menuList.id = 'menu-list';

      const item1 = document.createElement('li');
      const portfolio = document.createElement('a');
      portfolio.href = '#work';
      portfolio.className = 'menu-content';
      portfolio.textContent = 'Portfolio';
      item1.appendChild(portfolio);
      portfolio.addEventListener('click', () => {
        modal.style.visibility = 'hidden';

        const workSection = document.querySelector('#work-link');
        workSection.scrollIntoView({ behaviour: 'smooth' });

      });

      const item2 = document.createElement('li');
      const about = document.createElement('a');
      about.href = '#about';
      about.className = 'menu-content';
      about.textContent = 'About';
      item2.appendChild(about);

      about.addEventListener('click', () => {
        
        modal.style.visibility = 'hidden';
        const aboutSection = document.querySelector('#about-link');
        aboutSection.scrollIntoView({ behaviour: 'smooth' });

      });

      const item3 = document.createElement('li');
      const contact = document.createElement('a');
      contact.href = '#contact_section';
      contact.className = 'menu-content';
      contact.textContent = 'Contact';
      item3.appendChild(contact);
      contact.addEventListener('click', () => {
        modal.style.visibility = 'hidden';

        const contactSection = document.querySelector('#contact-link');
        contactSection.scrollIntoView({ behaviour: 'smooth' });

      });

      menuList.appendChild(item1);
      menuList.appendChild(item2);
      menuList.appendChild(item3);
      modal.appendChild(menuList);
      mobileVersionContainer.appendChild(modal);

      const removeModal = () => {
        modal.style.visibility = 'hidden';
      };

      deleteButton.addEventListener('click', removeModal);
  };
  menuButton.addEventListener('click', menuDisplay);

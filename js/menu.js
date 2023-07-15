const menu = document.querySelector('.menu-icon');

const handleMenu = () => {
  const headerNav = document.querySelector('.nav-header');

  if(!headerNav.classList.contains('show')){
    document.body.classList.add('no-scroll');
    headerNav.classList.add('show');
    menu.setAttribute('src','../images/icon-close.svg');
  } else {
    document.body.classList.remove('no-scroll');
    headerNav.classList.remove('show');
    menu.setAttribute('src','../images/icon-hamburger.svg');
  }

  menu.classList.toggle('rotate')
}


menu.addEventListener('click', handleMenu)
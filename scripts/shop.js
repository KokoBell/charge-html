function addNav(sectionId) {
  const targetSection = document.getElementById(sectionId)

  const shopNav = document.querySelector('.shopNav')

  targetSection.appendChild(shopNav)
}

let siteId = window.location.hash.replace('#', '')
siteId = siteId === '' ? 'icecream-1' : siteId

addNav(siteId)

let shopNav = document.getElementsByClassName('shopNav')[0]

let shopNavChildren = Array.from(shopNav.children)

for (let i = 0; i < shopNavChildren.length; i++) {
  shopNavChildren[i].addEventListener('click', () => {
    shopNavChildren.forEach(child => {
      if (child.classList != shopNavChildren[i].classList) {
        child.classList.replace('clicked', 'notClicked')
      }
    })
    shopNavChildren[i].classList.replace('notClicked', 'clicked')
  })
}

const shopNavLinks = document.querySelectorAll('.shopNav a');

shopNavLinks.forEach(link => {
  link.addEventListener('click', handleShopNavLinkClick);
});

function handleShopNavLinkClick(event) {
  event.preventDefault(); // Prevent default link behavior (jumping)

  const targetElementId = `${event.target.getAttribute('href')}`; // Get target ice cream section ID

  document.querySelector(targetElementId).scrollIntoView({
    behavior: 'smooth',
  });

  const siteId = targetElementId.replace('#', '')

  setTimeout(() => {
    addNav(siteId)
  }, 300)
}

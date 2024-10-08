/// Dynamically adding the navBar to every page
let classAttr = 'class'
let hrefAttr = 'href'
let spaceChar = ' '

let body = document.getElementsByTagName('body');

let navBar = document.createElement('nav')

navBar.setAttribute(classAttr, `${location.pathname === '/contact.html' ? 'brownBackground' : ''}`)

// Nav links
let elementShadow = `${location.pathname === '/contact.html' ? 'darkShadow' : 'lightShadow'}`
let navCss = 'navLink' + spaceChar + elementShadow + spaceChar

let navLinks = document.createElement('div')

navLinks.setAttribute(classAttr, 'navLinks')

navBar.appendChild(navLinks)

// Charge logo
let charge_logo = document.createElement('a')

charge_logo.setAttribute(hrefAttr, 'index.html')

charge_logo.setAttribute(classAttr, navCss)

charge_logo.innerHTML = '<img alt="Logo for the Charge ice-cream sales website." src="../assets/charge_logo.webp" height="32" />'

navBar.appendChild(charge_logo)

// Contact us button 
let contactUs = document.createElement('a')

contactUs.setAttribute(hrefAttr, 'contact.html')

contactUs.setAttribute(classAttr, navCss)

contactUs.innerHTML = 'Contact Us'

navLinks.appendChild(contactUs)

// Shop button
let shop = document.createElement('a')

shop.setAttribute(hrefAttr, 'shop.html')

shop.setAttribute(classAttr, navCss)

shop.innerHTML = 'Shop'

navLinks.appendChild(shop)

// About us button
let aboutUs = document.createElement('a')

aboutUs.setAttribute(hrefAttr, 'about.html')

aboutUs.setAttribute(classAttr, navCss)

aboutUs.innerHTML = 'Our Story'

navLinks.appendChild(aboutUs)

// Login container
let loginContainer = document.createElement('div')

loginContainer.setAttribute(classAttr, 'loginContainer')

navLinks.appendChild(loginContainer)

// Shop svg icon
let shopIcon = document.createElement('a')

shopIcon.setAttribute(hrefAttr, 'shop.html')

shopIcon.setAttribute(classAttr, 'navLink darkShadow icon')

shopIcon.innerHTML = `<svg width="36" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 7.02857C6 6.75578 6.10837 6.49416 6.30128 6.30126C6.49419 6.10837 6.75583 6 7.02864 6H7.79395C9.0969 6 9.87867 6.87634 10.3244 7.69097C10.622 8.23406 10.8374 8.86354 11.0061 9.43406C11.0517 9.43046 11.0974 9.42863 11.1432 9.42857H28.2845C29.4229 9.42857 30.2458 10.5175 29.9331 11.6133L27.426 20.4027C27.2012 21.1911 26.7256 21.8848 26.0713 22.3787C25.417 22.8726 24.6195 23.1399 23.7996 23.1401H15.6418C14.8155 23.1401 14.012 22.8688 13.3548 22.3678C12.6977 21.8668 12.2233 21.1639 12.0045 20.3671L10.9622 16.5655L9.23405 10.7397L9.23268 10.7287C9.01872 9.95109 8.81848 9.22286 8.51949 8.67977C8.23284 8.15177 8.00243 8.05714 7.79533 8.05714H7.02864C6.75583 8.05714 6.49419 7.94878 6.30128 7.75588C6.10837 7.56299 6 7.30137 6 7.02857ZM12.9577 16.0663L13.9878 19.8226C14.1935 20.5659 14.8696 21.083 15.6418 21.083H23.7996C24.1723 21.083 24.5348 20.9615 24.8323 20.7371C25.1297 20.5127 25.346 20.1974 25.4482 19.8391L27.8306 11.4857H11.6027L12.9385 15.9936L12.9577 16.0663ZM17.658 27.2571C17.658 27.9846 17.369 28.6823 16.8545 29.1966C16.3401 29.711 15.6424 30 14.9149 30C14.1874 30 13.4897 29.711 12.9753 29.1966C12.4609 28.6823 12.1719 27.9846 12.1719 27.2571C12.1719 26.5297 12.4609 25.832 12.9753 25.3177C13.4897 24.8033 14.1874 24.5143 14.9149 24.5143C15.6424 24.5143 16.3401 24.8033 16.8545 25.3177C17.369 25.832 17.658 26.5297 17.658 27.2571ZM15.6007 27.2571C15.6007 27.0753 15.5284 26.9009 15.3998 26.7723C15.2712 26.6437 15.0968 26.5714 14.9149 26.5714C14.733 26.5714 14.5586 26.6437 14.43 26.7723C14.3014 26.9009 14.2291 27.0753 14.2291 27.2571C14.2291 27.439 14.3014 27.6134 14.43 27.742C14.5586 27.8706 14.733 27.9429 14.9149 27.9429C15.0968 27.9429 15.2712 27.8706 15.3998 27.742C15.5284 27.6134 15.6007 27.439 15.6007 27.2571ZM27.2586 27.2571C27.2586 27.9846 26.9696 28.6823 26.4552 29.1966C25.9408 29.711 25.2431 30 24.5156 30C23.7881 30 23.0904 29.711 22.576 29.1966C22.0615 28.6823 21.7725 27.9846 21.7725 27.2571C21.7725 26.5297 22.0615 25.832 22.576 25.3177C23.0904 24.8033 23.7881 24.5143 24.5156 24.5143C25.2431 24.5143 25.9408 24.8033 26.4552 25.3177C26.9696 25.832 27.2586 26.5297 27.2586 27.2571ZM25.2013 27.2571C25.2013 27.0753 25.1291 26.9009 25.0005 26.7723C24.8719 26.6437 24.6975 26.5714 24.5156 26.5714C24.3337 26.5714 24.1593 26.6437 24.0307 26.7723C23.9021 26.9009 23.8298 27.0753 23.8298 27.2571C23.8298 27.439 23.9021 27.6134 24.0307 27.742C24.1593 27.8706 24.3337 27.9429 24.5156 27.9429C24.6975 27.9429 24.8719 27.8706 25.0005 27.742C25.1291 27.6134 25.2013 27.439 25.2013 27.2571Z" fill="black" /> </svg>`

loginContainer.appendChild(shopIcon)

// Login button
let login = document.createElement('a')

login.setAttribute(hrefAttr, 'login.html')

login.setAttribute(classAttr, 'navLink darkShadow login')

login.innerHTML = 'Login'

loginContainer.appendChild(login)

navBar.appendChild(navLinks)
navBar.appendChild(loginContainer)

// Insert the navbar as the first child of the body element
document.body.insertBefore(navBar, document.body.firstChild)

/// Update favicon
function updateFavicon() {
    // Get a reference to the favicon link element
    const favicon = document.querySelector('link[rel="icon"]');

    // If the favicon link element exists, update its href attribute
    if (favicon) {
        favicon.href = "../assets/favicon.ico";
    } else {
        // If the favicon link element doesn't exist, create a new one
        const newFavicon = document.createElement('link');
        newFavicon.rel = "icon";
        newFavicon.href = "../assets/favicon.ico";
        document.head.appendChild(newFavicon);
    }
}

updateFavicon()
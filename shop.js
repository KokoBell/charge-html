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
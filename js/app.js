document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.main-menu__item')

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('mouseover', function () {
            var subMenu = menuItem.querySelector('.sub-menu')
            if (subMenu) {
                subMenu.style.display = 'block'

                var items = subMenu.querySelectorAll('.sub-menu__item')
                items.forEach(item => {
                    // item.style.opacity = 0;
                    // console.log(this)
                })
            }

        })

        menuItem.addEventListener('mouseout', function () {
            var subMenu = menuItem.querySelector('.sub-menu')
            if (subMenu) {
                subMenu.style.display = 'none'
            }
        })
    })
})
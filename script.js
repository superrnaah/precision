document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active') 
    })
})









const menuToggle = document.querySelector ('.toggle')
        const showcase = document.querySelector ('.showcase')

        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active')
            showcase.classList.toggle('active')

        })
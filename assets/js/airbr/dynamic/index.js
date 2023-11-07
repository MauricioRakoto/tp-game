

const notifications = document.querySelectorAll(".top-side .notifications .items")
const profile = document.querySelector('.top-side .profiles .my-profile')
const modalProfile  = document.querySelector('.top-side .profiles .my-profile .modal')

notifications.forEach((notification) => {
    const icon = notification.querySelector('.icon')
    const modalNotification = notification.querySelector('.modal')

    icon.addEventListener('click',  showModalNotification)

    function showModalNotification  () {
        modalNotification.classList.toggle('show')
        modalNotification.style.transform = 'translateY(0)'
    }

})

profile.addEventListener('click', showModalProfile)

function showModalProfile () {
    modalProfile.classList.toggle('show')
    modalProfile.style.top = '40px'
}


const initSliderNewGame = () => {
    const carouselNewGame = document.querySelector('.content .new-games .carousel .items')
    const arrowIconsNewGame = document.querySelectorAll('.content .new-games .carousel .icon')
    const maxScrollLeft = carouselNewGame.scrollWidth - carouselNewGame.clientWidth

    arrowIconsNewGame.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === "prev" ? -1 : 1
            const scrollAmount = carouselNewGame.clientWidth * direction
            carouselNewGame.scrollBy({ left: scrollAmount, behavior: "smooth" })
    
        })

        const handleSlideButtons = () => {
            arrowIconsNewGame[0].style.display = carouselNewGame.scrollLeft <= 0 ? "none" : "flex"
            arrowIconsNewGame[1].style.display = carouselNewGame.scrollLeft >= maxScrollLeft ? "none" : "flex"
        }

        carouselNewGame.addEventListener('scroll', () => {
            handleSlideButtons()
        })
       
    })
}

const initSliderMyGame = () => {
    const carouselMyGame = document.querySelector('.content .my-games .carousel .items')
    const arrowIconsMyGame = document.querySelectorAll('.content .my-games .carousel .icon')
    const maxScrollLeft = carouselMyGame.scrollWidth - carouselMyGame.clientWidth

    arrowIconsMyGame.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === "prev" ? -1 : 1
            const scrollAmount = carouselMyGame.clientWidth * direction
            carouselMyGame.scrollBy({ left: scrollAmount, behavior: "smooth" })
    
        })

        const handleSlideButtonsMyGame = () => {
            arrowIconsMyGame[0].style.display = carouselMyGame.scrollLeft <= 0 ? "none" : "flex"
            arrowIconsMyGame[1].style.display = carouselMyGame.scrollLeft >= maxScrollLeft ? "none" : "flex"
        }

        carouselMyGame.addEventListener('scroll', () => {
            handleSlideButtonsMyGame()
        })
       
    })
}

window.addEventListener('load', initSliderNewGame)
window.addEventListener('load', initSliderMyGame)





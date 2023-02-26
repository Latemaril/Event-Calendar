document.addEventListener('DOMContentLoaded', function() {
    const months = document.querySelectorAll('.events-list')
    const monthButton = document.querySelectorAll('.month-button')

    monthButton.forEach((button) => {
        button.addEventListener('click', ()=> {
            let month = button.innerHTML
            console.log(month)
            let currentMonth = document.getElementById(month)

            function disable() {
                if (document.querySelector('.month-button.is-active')) {
                    document.querySelector('.month-button.is-active').classList.toggle('is-active')
                    document.querySelector('.events-list.is-active').classList.toggle('is-active')
                }
            }

            const enable = async () => {
                await disable()
                button.classList.toggle('is-active')
                currentMonth.classList.toggle('is-active')
            }

            enable().then(() => {
            })
        })
    })
})
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const body = document.querySelector('body');
    const links = document.querySelectorAll("a[href^='#']");

    function toggleMenu() {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            menu.classList.remove('active');
            menu.classList.add('hide');
            setTimeout(() => {
                menu.classList.remove('hide');
                body.classList.remove('hidden')
            }, 300)

        } else {
            burger.classList.add('active');
            menu.classList.add('active');
            body.classList.add('hidden')
        }
    }

    burger.addEventListener('click', toggleMenu);

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            event.preventDefault();

            burger.classList.remove('active');
            menu.classList.remove('active');
            menu.classList.add('hide');
            setTimeout(() => {
                menu.classList.remove('hide');
                body.classList.remove('hidden')
            }, 300)


            //получаем href у ссылки и отрезаем первый элемент то есть решетку #
            const blockID = links[i].getAttribute("href").substr(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
});
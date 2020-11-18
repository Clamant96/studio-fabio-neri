document.getElementById('menu').onclick = function() {opcaoMenu()};

var menu = document.getElementById('sideBar');

var contador = 0;

function opcaoMenu(){
    switch(contador % 2) {
        case 1:
            menu.style.marginLeft = '-22%';

            contador = 0;

        break;

        case 0:
            menu.style.marginLeft = '0%';

            contador = 1;

        break;

        default:
            console.log('Erro na aplicacao!');
        break;

    }
}
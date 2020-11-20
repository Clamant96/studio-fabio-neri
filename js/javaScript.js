function myFunction(x) {
    document.getElementById('menu').onclick = function() {opcaoMenu()};

    var menu = document.getElementById('sideBar');

    var contador = 0;

    if (x.matches) { // If media query matches
        function opcaoMenu(){
            switch(contador % 2) {
                case 1:
                    menu.style.marginLeft = '-32%';
        
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
    } else {
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
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)");
  myFunction(x);
  x.addListener(myFunction);
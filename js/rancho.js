
//variables para acceder a la clase hiden 
 const seccionesOcultas = document.querySelectorAll('.hidden');


 //el observador
 const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
       
        entry.target.classList.toggle('mostrar', entry.
        isIntersecting);
         
    })
   
 },
 //limite
 {threshold:0}
 );

    
 seccionesOcultas.forEach((seccion) =>observer.observe(seccion));


//efectos Menu:

$(document).ready(function(){
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top:'0'
        }, 2000 + (index * 500));
    });
    //titulos y subtitulos de la pag de inicio
    $('header .titulo2').animate({
        opacity: 1,
        marginTop:'-55px'
        }, 1500);

    $('header .subtitulo').animate({
        opacity: 1,
        marginTop:'-10px'
        }, 1500);

        

    //scroll Elementos del menu:
    var historia = $('#historia'). offset().top,
        carta = $('#carta'). offset().top,
        local = $('#local'). offset().top,
        contacto = $('#contacto'). offset().top;



       

    $('#btn-historia').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: historia - 100
      }, 500);
  });
    $('#btn-carta').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: carta
      }, 500);
  });
  $('#btn-local').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: local
      }, 500);
  });
  $('#btn-contacto').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: contacto
      }, 500);
  });
 

});


AOS.init({
			duration: 3000,
			
		});

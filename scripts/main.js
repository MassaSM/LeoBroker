//Sticky
$(document).ready(function() {
  var stickyNavTop = $('header').offset().top;

  var stickyNav = function(){
      var scrollTop = $(window).scrollTop();

      if (scrollTop > stickyNavTop) { 
          $('header').addClass('sticky');
      } else {
          $('header').removeClass('sticky'); 
      }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });
});

// Menu Mobile
$(".menu__mobile").click(function() {
  $('.site__menu').addClass('active');
});

// Verificar se os Campos estão vazios//
$('#anuncie').submit(function(e){
  e.preventDefault();
  
  $('.required').each(function(){        
        if($(this).val().length !== 0){
          $('#anuncie').find('.formulario_error_mensagem').css('display','none');
          $('#anuncie').find('.input').removeClass('formulario_error_box')
          $('#anuncie').find('.input__area').removeClass('formulario_error_box')
          $('#anuncie').find('.select-selected').removeClass('formulario_error_box')
        }else{
            $('#anuncie').find('.formulario_error_mensagem').css('display','block');
            $('#anuncie').find('.input').addClass('formulario_error_box')
            $('#anuncie').find('.input__area').addClass('formulario_error_box')
            $('#anuncie').find('.select-selected').addClass('formulario_error_box')
        }
    })
});

$('#fale__conosco').submit(function(e){
  e.preventDefault();
  
  $('.required').each(function(){        
        if($(this).val().length !== 0){
          $('#fale__conosco').find('.formulario_error_mensagem').css('display','none');
          $('#fale__conosco').find('.input').removeClass('formulario_error_box')
          $('#fale__conosco').find('.input__area').removeClass('formulario_error_box')
        }else{
            $('#fale__conosco').find('.formulario_error_mensagem').css('display','block');
            $('#fale__conosco').find('.input').addClass('formulario_error_box')
            $('#fale__conosco').find('.input__area').addClass('formulario_error_box')
        }
    })
});


// Removendo a mensagem de erro quando clicar no input 
$(function(){
    $('.input, .input__area, .select-selected').focus(function(){
        $(this).parent().find('.formulario_error_mensagem').css('display','none');
        $(this).parent().find('.input').removeClass('formulario_error_box')
        $(this).parent().find('.input__area').removeClass('formulario_error_box')
        $(this).parent().find('.select-selected').removeClass('formulario_error_box')
    })
    $('.select-selected').click(function(){
      $(this).parent().find('.select-selected').removeClass('formulario_error_box')
      $(this).parent().parent().find('.formulario_error_mensagem').css('display','none');
    })
})


/*Mask Telefone */
$(function(){
  var behavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  options = {
    onKeyPress: function (val, e, field, options) {
        field.mask(behavior.apply({}, arguments), options);
    }
  };

  $('.telefone').mask(behavior, options);
  $('.fixo').mask('(00) 00000-0000');
  $('.data').mask('00/00/0000');
})

/*Slick*/
var embarcaoesalugueis = {
  init:function(){
      $('.container__embarcacoes__alugueis').slick({
          infinite: false,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: false,
          slidesToShow: 3,
          dots: true,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
      });
  }
}

var depoimentos = {
  init:function(){
      $('.container__depoimentos').slick({
          infinite: false,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: false,
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1
      });
  }
}

var galeria = {
  init:function(){
      $('.container__galeria__de__fotos__horizontal').slick({
          infinite: false,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: false,
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1
      });
  }
}

var seminovos = {
  init:function(){
      $('.container__galeria__de__fotos').slick({
          infinite: false,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: true,
          slidesToShow: 2,
          dots: false,
          slidesToScroll: 2,
          prevArrow:"<img class='slick-prev' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU3N0IzQUFDMzFGNTExRUVBRkI2QUU0NkJBN0JFMzFCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU3N0IzQUFEMzFGNTExRUVBRkI2QUU0NkJBN0JFMzFCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTc3QjNBQUEzMUY1MTFFRUFGQjZBRTQ2QkE3QkUzMUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTc3QjNBQUIzMUY1MTFFRUFGQjZBRTQ2QkE3QkUzMUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7u/3xYAAAE7klEQVR42tSZf2hVZRjHzxUNJ9UyXbkiaxHqJe8MKmmVqxjpMtQs1Jb0Q6E/oiBolcOC7LdWqz8qIoKKgdoqZ4605jTKhRVlkBl3i8p+jkqsrZVGGvZ94XNub4e7e895z7l39MCHe7jnnPf93nue93me9zmppzu6vf+bjU5onNPFeSLN8TGiQhwUQ+IrkRXvczxiojPiOnGVqOG7w+J7sR/B48UEsdiaa6/YINrEp+USfaG4W8wRh0SXeFy8LT4Xf+W55ygxRVzMfbeK27n3QdETRcCoCNdWi/VMcJZoESeLeeIpsWcYwR7f7+G6edzXwjg7GLc6adHzeZQLxL24wxqxz9G19nF/DeMt4EfNT0p0s3gNXz1brMJfk7CDjGfG/ZZ5muOKvl88JtqJDtkSRTEzbh3zmPkecF2ILSy4Z8VN4kiJw++f4hoxKO4Sv4vVUURfJh4Sa8sk2LcjzHc0838i3gjjHtVWDL2xjIJt4Wbe3eg4KYzoVn7pkgQXnMsCvRodrcVEm8TRRDjqHeESoxcdRvws+0QqUDBtFbXEzzj/8glio5hU5Lp3xXLx9zDnK0j7xlUvzbcQM5xYEVNwldhO4bQ2z5o4X0wXO8UtBQT7bvIEUSTj1yq26GupJV6IIXii2IbgueKdPFHpBvEB54dCjPk8+cIUZ3cEfXoRBYxraj4e9zqDdBwUPAeX2c3xYISU30Wl+J+FaP6Z08SbjoKPQ7CppxfiHrYZt+sQn3E8GHF8o2uymGqLruOzx0FwJYIzCN4aOH8JNYUpW2eLAYc5fF3n2KLTFPBZB8EmY80QV+Z5UvXidfElgvfHqE0OozMnuoYq61CEgcyWajMV2mKOgzF/MyGrIcZa8dD1jb9DGm35ZJTHNg5BMwn+mwLn6zj/XQKCfRtEZ070seJABMFbiLdNLDDbZuIyPyL4p4Qy5AF05tzjN8S4FDdBS1nnkiy2xqEzJ3rA/+tD/uLLyWjrWIC2+YnDVGdvkdKTsErfhUdZ23oTB8eEHOAPhH/IpjS4t9uJ8MkIr4op2Og6FZ050Vn8Ox1hoCGEfSxe4ThYDM1lxW8jxbtaGn1ZW/R7fM5yWNGN7DA2cmzbDloGJrV3k+pdzNf1kS3atKq+zjNpWOGzqcA6OLbNuMcVpODuCGvHtkbySF+wYHqVQsbF/wYQ28c/3hA4302KP5PjyoilrtH1cr6dSxsOv8zxEf5CMfSF6BQXBc53EWlqSfdhhS9HV1spdy5VuESYTUBjkZq66M7F2H1UVCvo/Li2vBqGcRPPWkOT6O0V2m4ZHSfatXQ+0SZMvcTF633Hd7CfxQUxY/NUdLQThQq2EJrp7rTzeEbCKpjf6LgtTN+jX1yPbz9n1RLlshTz1qKjP2wD0lRxK8VS8UwZhaeYbynzb4nagFxNob+S8LSMJmGpbCydAFOfPzxc87GYaI/upYm/j5L/m7zStHvTVIwzWHyPFLo4TFO9lTR8itgl7klwgVYw3i6quIXFBIcV7ZHhMnyuIuDfGaPknMj9exmvk4SzKczNUV4U9eNv9TRcTHPwBya8mUnHFKiHp3NdJ2OtIdPVM25/WCEur+R6KI4ytLgWUX56bPNNNfYr6dks5PFsBvy5zGb3SfGi5/geMZXQa2aTvc4V07x/39iOJdr4b2x7qYdjt5CTes3cFyPlR7Z/BBgAlb02l7MyaEYAAAAASUVORK5CYII='>",
          nextArrow:"<img class='slick-next' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LjE2NDc1MywgMjAyMS8wMi8xNS0xMTo1MjoxMyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjMgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY0MzFBMUY1MzFGNTExRUVBMDI0ODFFMUIyQzk0RjhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY0MzFBMUY2MzFGNTExRUVBMDI0ODFFMUIyQzk0RjhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjQzMUExRjMzMUY1MTFFRUEwMjQ4MUUxQjJDOTRGOEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjQzMUExRjQzMUY1MTFFRUEwMjQ4MUUxQjJDOTRGOEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ID+IFAAAE/ElEQVR42tSZf2hVZRjH7xWtzTKzHLWs5fpDXbksKslIqeyHBfMnm5qlNoqSgqBFGxVkv7Oa/VESNSkZWq506KBVZmlNKkqFytgW1cxqFaNya8ylA/s++DmXw+F67jnnnrvRCx/uZe89z/vd++N5nvc5yTWNHyT+b214THbOE5eLEr6PEvnikPhH/Chaxed8HzLRpWKpWCCK+duA+EX8ieAx4nRR4RqrQ2wW9eKbwRJ9pXhY3CCOiPfFarFTfCcOp3nmBDFBXMVz94r7efZJ0RJGwLAQvy0UbzLARaJGjBNl4iWx7ziCE/x9H78r47ka7HyC3cK4Rc9mKeeIR9kOq0RXxK3VxfPF2JvDPzU7LtFVYgt79RKxkv0aRzuEPbN7gHGqshX9uHheNOAdWnPkxczuNMax8Z6IehBrOHCviBXiaI7db7+4WXSLh0SveCaM6BvFU2LDIAl22lHGO5nxvxLvBtkehS4fescgCnYLt3G/RsdZQUTX8p8ujPHARTmgi9BRm0m0BY7FuKO2IU4x2tBh4qe7O5KehGmbuBD/6TfLI8UbhHK/9r0oFz0RhecT9m2rXpdupkvpWB1gW/Sx7/pJkCzX2O7hY8J2M8scdZu8IK51T5Bb9K3kEq+HiGrXsIwTxTpxp4tKXNhUhI+MKPw1dC1NJ7qcBCZMaP4D4b/jmqZ6+i2bWyKuEO9EFN6FrgqvaFvi8eK9CEZ/EzMxvo2Q7G5vi1s4TFsjCjddRaxoSvQ0PlsiLqHlJVezt+1kX+zp3yiW85tGkRfSvqPrUrfoEhL4bHILR3g3Mz7F079e3M5hbyTHDpObDKAzJbqYLOtIlr71AHu8jxmf7Olfh9eZFVK46frJuSE5ok8VB2MKCh0I/1d8JM5P4w3uEjeR1QUV3o3OlOhTmJ242g9sFbuxfCgmefpfFfeQ/FuQGhHAZh86U6J7svCjmVrSJzHy608XhXvcog86Ux9jSWEHSz8zTR5jB3KNaCLXCXKWRjtbeJhrHxYFXKZMbTyCT0Twt57+SrZHMwHjcACbputcdKZEt3IhKMlScBGCT8K1eesayxFsEW5+QMGOSx7uuGRH9Gd8Ts9C8Nl4C1vG67l1uJtFxbUczHkhBLt17XaLtlLVfvxnlDaOGR6L4L2e/oX46B0I7g9pfxYxoN2bMG2i+lMQ0mAhM1yA4N2e/nLumrtwcWFdawG63kqX5dWz4W8LYfAMBJ9JsPjC078AwZ/SHyUWVKKrPtubizMDttwXMLt705x4S0u/ZHl747q5eEsIj5FRVVP58XP0dRi183Aatwtv28n26I14VqpZzQq/uscu0shqioLtPiF1bo4vthPR0UCR0reEUMXMNDCTQ9HyGd903Bek7tEplrG360LkBnHmKnWMvww9gQqQFmIf5CC9PIjCk4y3hPGbwxYgrfg3iodH4wr7cyg4j0qAFWeePl7xMZPoBNXLv8RzxP/FidyUe0vIq6dw+J71+3GQonotnuIcsUc8EuMBzcfeHrK4eZkEBxWdIO8t5XMlDv+BCCHfaWN5vgN7TdwntwZ5OMyLok7224zEsTKsFQd/ZcC7GXSETz48md81YWsVkW4GdjuDConySq6FxKiU/NgiXhl9A2RjfyeOvfS0gzyGPNsZ62fxIllfpPeIyZheM1v0uowLrPPGNg9v47yxbSNHybqEHNdr5nafkB97+0+AAQCfkzaIcF9kiAAAAABJRU5ErkJggg=='>",
          responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            }
          ]
      });
  }
}



/*Select*/
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("select");

for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);

/*Click Out*/
$(document).mouseup(function (e) {
  var container = $(".site__menu");

  if (!container.is(e.target) && container.has(e.target).length === 0 && !$('.site__menu').is(e.target)) {
      $('.site__menu').removeClass('active');
  }
});

/*Hover*/
$(".container__lista__embarcacoes .item__embarcacao, .container__embarcacoes__alugueis .item__embarcacao__aluguel, .container__galeria__de__fotos .item__foto__galeria").hover(function () {
  $(".container__lista__embarcacoes .item__embarcacao, .container__embarcacoes__alugueis .item__embarcacao__aluguel, .container__galeria__de__fotos .item__foto__galeria").not($(this)).css({ "opacity": 0.6 });
  $(".container__lista__embarcacoes .item__embarcacao, .container__embarcacoes__alugueis .item__embarcacao__aluguel, .container__galeria__de__fotos .item__foto__galeria").not($(this)).css({ "filter": 'blur(2px)' });
  },
  function () {
      $(".container__lista__embarcacoes .item__embarcacao, .container__embarcacoes__alugueis .item__embarcacao__aluguel, .container__galeria__de__fotos .item__foto__galeria").css({ "opacity": 1 });
      $(".container__lista__embarcacoes .item__embarcacao, .container__embarcacoes__alugueis .item__embarcacao__aluguel, .container__galeria__de__fotos .item__foto__galeria").css({ "filter": 'blur(0px)' });
  });

/*Opacity Header */
var header = $('.video__banner,.banner, .breadcumb');
var video = $('.video__banner');
var range = 200;
var embarcacao = $('.embarcacoes__novas, .subHeader');

$(window).on('scroll', function () {
  
  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;
      scrollTop = scrollTop / 100;
      calcB = 1.2 - (scrollTop) / range;
      blurVar = 10 - (scrollTop) - 5;

  header.css({"-webkit-filter": "blur("+scrollTop+"px)","filter": "blur("+scrollTop+"px)" })   
  header.css({ 'opacity': calc, });
  embarcacao.css({ 'opacity': calcB, });
  embarcacao.css({"-webkit-filter": "blur("+blurVar+"px)","filter": "blur("+blurVar+"px)" }) 

  if (calc > '1') {
    header.css({ 'opacity': 1 });
    embarcacao.css({'opacity': 0});    
  } else if ( calc < '0' ) {
    header.css({ 'opacity': 0 });    
    video.css({ 'pointer-events': 'none' });  
    embarcacao.css({'opacity': 1});   
  }
  
});

/*Animation Width*/
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
      $('.descricao__embarcacao h3').addClass('animate');
  } else {
      $('.descricao__embarcacao h3').removeClass('animate');
  }
});


jQuery(document).scroll( function(){
  jQuery('.contato__anuncio, .anuncie').fadeIn(1000);
} );

/*Range Ano*/
$(document).ready(function(){
  $('input').on('mousedown touchstart', function(){
    $(this).addClass('active');
  });
  $('body').on('mouseup touchend', function(){
    $('input').removeClass('active');
  });
  
 $('input').on('change mousemove', function(){
    var $input_1 = $('#anoinicial');
    var $input_2 = $('#anofinal');

    var input_1_val = parseInt($input_1.val());
    var input_2_val = parseInt($input_2.val());

    if ( input_1_val >= input_2_val ) {
      if ( $('#anoinicial').hasClass('active') ) {
        $('#anofinal').val(input_1_val+1);        
      } else if ( $('#anofinal').hasClass('active') ) {
        $('#anoinicial').val(input_2_val-1);        
      }
    }

    $('.ano__inicial').text( input_1_val);
    $('.ano__final').text( (input_2_val) );

 });
});

/*Range Preço*/
$(document).ready(function(){
  $('input').on('mousedown touchstart', function(){
    $(this).addClass('active');
  });
  $('body').on('mouseup touchend', function(){
    $('input').removeClass('active');
  });
  
 $('input').on('change mousemove', function(){
    var $input_1 = $('#precoinicial');
    var $input_2 = $('#precofinal');

    var input_1_val = parseInt($input_1.val());
    var input_2_val = parseInt($input_2.val());

    if ( input_1_val >= input_2_val ) {
      if ( $('#precoinicial').hasClass('active') ) {
        $('#precofinal').val(input_1_val+1);        
      } else if ( $('#precofinal').hasClass('active') ) {
        $('#precoinicial').val(input_2_val-1);        
      }
    }

    $('.valor__minimo').text( 'R$'+' '+input_1_val);
    $('.valor__maximo').text( 'R$'+' '+input_2_val);

 });
});


/*Upload*/
updateList = function() {
  var input = document.getElementById('file');
  var output = document.getElementById('fileList');
  var children = "";
  for (var i = 0; i < input.files.length; ++i) {
      children +=  '<li>'+ input.files.item(i).name + '<span class="remove-list" onclick="return this.parentNode.remove()">X</span>' + '</li>'
  }
  output.innerHTML = children;
}


/*Accordion*/
const accordionItem = document.querySelectorAll(".accordion-item");

accordionItem.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItem.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);

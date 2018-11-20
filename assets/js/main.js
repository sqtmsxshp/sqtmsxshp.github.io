let vm = new Vue({
  el: '#app',
  data: {
    introduction: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vel culpa aut accusamus, eaque numquam, tenetur asperiores dicta et, labore autem reprehenderit nihil adipisci optio cupiditate! Ad at minus nisi quo architecto earum dolores exercitationem qui omnis hic esse animi recusandae quos reiciendis, ipsam similique quas sed sapiente porro? Dicta, atque necessitatibus! Architecto quisquam repudiandae necessitatibus assumenda et sit at odit quae pariatur, dolorum voluptatem facilis non dolores quod, placeat commodi vel labore modi ad iure hic excepturi. Asperiores, non? Lorem ipsum, dolor sit amet consectetur adipisicing elit. In blanditiis molestias at qui nulla accusamus neque praesentium, sunt libero nihil. Vitae, ipsum mollitia inventore, consequatur nihil voluptatibus tenetur autem blanditiis quos, ex eveniet architecto facere dolorum voluptates sapiente suscipit accusantium.',    
    categories: [
      {
        name: 'Delírios',
        id: 'delirios',
        products: [
          {
            img: 'assets/img/produtos/anel-vibrador.jpg',
            title: 'Anel Vibrador',
            description: 'Este simples brinquedinho pode transformar totalmente suas noites de prazer. O anel vibrador possui duas funções, estimular o clitóris de sua parceira causando muito prazer nela, contribuindo para proporcionar intensos orgasmos e ao mesmo tempo te faz durar mais tempo na cama pois ele ajuda a manter a ereção e a retardar a ejaculação',
            price: 'R$ 12'
          },
          {
            img: 'assets/img/produtos/bolinhas.jpg',
            title: 'Bolinhas',
            description: 'Pote com 02 unidades. Bolinhas explosivas gelatinosas com óleo corporal, com aroma que provoca deliciosas sensações. Dicas de uso: Você pode masturbar sua parceira com a bolinha até explodir, ou então introduzir a bolinha dentro da vagina cerca de 2 minutos antes da relação. *A bolinha se dissolve, não deixando resíduos',
            price: 'R$ 10'
          },
          {
            img: 'assets/img/produtos/lubrificante-ice.jpg',
            title: 'Lubrificante Ice',
            description: 'Lubrificante Ice para dar aquela sensação de geladinho e deixar ela (/ele) louca (/louco)',
            price: 'R$ 12'
          },
          {
            img: 'assets/img/produtos/vibrador-bullet.jpg',
            title: 'Vibrador Bullet',
            description: 'Vibrador para fazer aquela massagem íntima nela. Com este brinquedo o orgasmo é garantido. Dica de uso (para os homens): Peça para ela se masturbar com o vibrador ao mesmo tempo em que você estiver penetrando nela com o pênis',
            price: 'R$ 15'
          }          
        ]
      },
      {        
        name: 'Jogos',
        id: 'jogos',
        products: [
          {
            img: 'assets/img/produtos/baralho.jpg',
            title: 'Baralho',
            description: 'Possui todas as cartas de um baralho comum, com o diferencial de que cada carta possui uma posição diferente do kama sutra, para você elevar a brincadeira a um novo nível',
            price: 'R$ 15'
          },
          {
            img: 'assets/img/produtos/dados-acao-partedocorpo.jpg',
            title: 'Dados ação e parte do corpo',
            description: 'Possui 2 dadinhos, um contendo ações e o outro contendo as partes do corpo em que a ação deve ser realizada.',
            price: 'R$ 13'
          },
          {
            img: 'assets/img/produtos/dados-posicao-local.jpg',
            title: 'Dados posição e local',
            description: 'Um dado contendo uma posição sexual e outro com o local da casa em que o casal deve fazer a posição',
            price: 'R$ 13'
          },
          {
            img: 'assets/img/produtos/dado-strip.jpg',
            title: 'Dado Strip Tease',
            description: 'Dado Strip Tease, quem ficar sem roupa primeiro perde o jogo! mas pode ganhar outra coisa ;)',
            price: 'R$ 13'
          }
        ]
      },
      {        
        name: 'Fantasias',
        id: 'fantasias',
        products: [
          {
            img: 'assets/img/produtos/fantasia-mamaenoel-frente.jpg',
            title: 'Mamãe Noel',
            description: 'Fantasia mamãe noel, tamanho único veste do 36 ao 44',
            price: 'R$ 20'
          },
          {
            img: 'assets/img/produtos/fantasia-medica-frente.jpg',
            title: 'Médica',
            description: 'Fantasia médica, tamanho único veste do 36 ao 44',
            price: 'R$ 20'
          },
          {
            img: 'assets/img/produtos/fantasia-pm-frente.jpg',
            title: 'PM',
            description: 'Fantasia PM, tamanho único veste do 36 ao 44',
            price: 'R$ 20'
          },
          {
            img: 'assets/img/produtos/fantasia-presidiaria-frente.jpg',
            title: 'Presidiária',
            description: 'Fantasia presidiária, tamanho único veste do 36 ao 44',
            price: 'R$ 20'
          }
        ]
      },
      {        
        name: 'Sado',
        id: 'sado',
        products: [
          {
            img: 'assets/img/produtos/algema-preta.jpg',
            title: 'Algema',
            description: 'Para você mostrar quem é que está no controle',
            price: 'R$ 15'
          },
          {
            img: 'assets/img/produtos/chicote.jpg',
            title: 'Chicote',
            description: 'Para os mais selvagens! base de madeira revestida em couro sintético',
            price: 'R$ 25'
          },
          {
            img: 'assets/img/produtos/venda-tapaolhos.jpg',
            title: 'Venda tapa olhos',
            description: 'Sabia que ao vendar os olhos todos os outros sentidos aumentam, o que pode proporcionar prazeres intensos e inesquecíveis no ato do amor',
            price: 'R$ 7'
          }
        ]
      }
    ],
    modal: {},
    ebooks: [
      {
        title: 'Como Enlouquecer uma Mulher na Cama + Bônus',
        img: 'assets/img/infoprodutos/como-enlouquecer-uma-mulher-na-cama.png',
        description: 'O e-book Com Enloquecer uma Mulher na Cama é voltado para o público masculino e ele traz dicas de sexo e sobre o orgasmo feminino. Ele aborda assuntos como: - Como fazer uma mulher gozar na cama; - Sexo oral - Técnica e como é o processo; - O momento certo da penetração; - Como os detalhes influenciam na cama; - Posições ideais de acordo com o tamanho do pênis; - Explorando o corpo; - Conteúdo Bônus: Como perder a timidez com as mulheres. E muito mais. Ele aborda um tema que todo homem tem curiosidade e interesse em evoluir/aprender: Sexo!',
        link: 'https://go.hotmart.com/K10228572R'
      },
      {
        title: 'Manual do Sexo Moderno',
        img: 'assets/img/infoprodutos/manual-do-sexo-moderno.png',
        description: 'Surpreenda e enlouqueça qualquer pessoa na cama com as técnicas ensinadas nesse material destinado ao público masculino e feminino. Tire da rotina todos os seus encontros, relacionamentos e até mesmo casamentos. Através do Manual do Sexo Moderno você aprenderá o passo a passo para se ter a transa perfeita, ele é composto por três grandes blocos de técnicas que foram muito bem selecionadas em 11 módulos para que você aprenda sem enrolação, sendo: Antes do encontro, que contem 2 módulos; Durante o encontro, que contém 8 módulos; Depois do encontro, que contem 1 módulo; Todo o conteúdo foi criado para que as mulheres e os homens possam aprender, em cada módulo existem exemplos e o que fazer para ambos os sexos. Além disso, você aprenderá quais são os 10 principais erros dos homens e da mulheres durante o sexo. Exemplos reais são apresentados e como devemos agir e o que falar em cada caso. Te garanto que se você conseguir corrigir ao menos 8 deles, sua vida sexual mudará de imediato.',        
        link: 'https://go.hotmart.com/L10229235K'
      },
      {
        title: 'GUIA DO ORGASMO FEMININO PARA HOMENS',
        img: 'assets/img/infoprodutos/guia-do-orgasmo-feminino-para-homens.png',
        description: 'Neste Guia você vai aprender como deixar sua parceira cheia de tesão por você, não importa se você se acha feio, tímido ou qualquer coisa do gênero, o que importa é você fazer bem feito e levar sua parceira ao orgasmo. Aprenda passo a passo como fazer sua parceira ter muitos orgasmos de forma rápida e simples. Aprenda onde estimular, como tocar, como penetrar, como deixar ela pensando em você o dia todo... Aprenda o que 90% dos homens não sabem e se torne um verdadeiro mestre do sexo, deixando ela completamente apaixonada por você em todos os sentidos.',
        link: 'https://go.hotmart.com/P10228735T'
      },
      {
        title: 'E-book Mulheres Boas de Cama + Bônus',
        img: 'assets/img/infoprodutos/mulheres-boas-de-cama.png',
        description: 'O e-book Mulheres Boas de Cama é um Guia prático para revolucionar sua vida sexual escrito por Jaque Barbosa e Eme Viegas, criadores do site Casal Sem Vergonha, que já alcançou metade dos 100 milhões de internautas brasileiros.',
        link: 'https://go.hotmart.com/I10228791A'
      }
    ]
  },
  methods: {
    toogleProducts(id) {
      var x = document.getElementById(id);
      if (x.className.indexOf("products-wrapper") == -1) {
          x.className += " products-wrapper";
          document.getElementById("chevron-"+id).classList.add("fa-chevron-up")
      } else { 
          x.className = x.className.replace(" products-wrapper", "");
          document.getElementById("chevron-"+id).classList.remove("fa-chevron-up")
      }
    },

    showModal(item) {  
      this.modal = {
        title: item.title,
        img: item.img,
        description: item.description,
        price: item.price
      }
    
      document.getElementById('modal-product').style.display='block';
    }

  }
})



$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){  
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(".limitText").text(function(index, currentText) {
    return  currentText.substr(0, 90) + '...';
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('bodyContainer').innerHTML += `
      <div id="navbar" data-state="closed" class="content min-h-full z-10 h-fit flex flex-col items-start data-[state=closed]:-translate-x-full sm:data-[state=closed]:translate-x-0 absolute sm:relative sm:min-w-96 duration-300 transition-all">
        <a href="/index.html" class="max-w-[35rem]">
          <!--<h1 class="customFont font-[1000] text-[2.5rem] ml-3">Andrea Naharro</h1>-->
          <img src="/imgs/logo.png" class="max-w-full max-h-full object-contain mt-10" alt="">
        </a>
        <div class="flex flex-col *:mt-5 *:ml-3 *:mr-3 hover:*:underline *:text-[1.5rem]">
          <a href="/Pages/about.html" class="hover:underline">1. About</a>
          <a href="">2. No lugares digitales: Paisajes efímeros
            entre el mundo físico y el entorno
            digital</a>
          <a href="/Pages/colab.html">3. Colaboraciones</a>
          <a href="/Pages/eventos.html">4. Eventos</a>
        </div>
        <!-- <div class="bg-black rounded-full h-[0.125rem] w-9/12 mt-5 ml-3"></div> -->
        <div class="flex flex-col mt-5 *:ml-3 hover:*:underline *:text-[1.5rem]">
          
          <a href="/Pages/proximasFechas.html">5. Próximas fechas</a>
          <div class="myNoUnderline *:text-[1.5rem] mt-[3rem] font-bold">
            <a href="mailto:contact@andreanaharro.com" class="hover:underline flex flex-row *:mr-[.3rem]">contact@andreanaharro.com</a>
            <a href="https://www.instagram.com/andreanaharro/" class="hover:underline flex flex-row *:mr-[.3rem]">@andreanaharro</a>
          </div>
        </div>
      </div>
    <button id="navbarBtn" class="absolute top-0 right-0 rounded-full border border-transparent p-2 *:bg-black sm:hidden z-20">
        <div class='h-[0.1875rem] w-6 rounded bg-foreground transition-all duration-300 ease-in-out m-block-end'></div>
        <div class='h-[0.1875rem] w-6 rounded bg-foreground transition-all duration-300 ease-in-out m-block-end'></div>
        <div class='h-[0.1875rem] w-6 rounded bg-foreground transition-all duration-300 ease-in-out'></div>
    </button>
    <style lang="postcss">
        button[aria-expanded='true'] {
          div:nth-child(2) {
            opacity: 0;
            transform: scale(0);
          }

          div:nth-child(1) {
            transform: translateY(0.5625rem) rotate(45deg);
          }

          div:nth-child(3) {
            transform: translateY(-0.5625rem) rotate(-45deg);
          }
        }
    </style>

    `;
    const navbar = $('#navbar');
    const navbarBtn = $('#navbarBtn');
    $("#navbarBtn").on('click', () => {
      console.log("aa");
      navbar.attr('data-state', navbar.attr('data-state') === 'open' ? 'closed' : 'open');
      navbarBtn.attr('aria-expanded', navbarBtn.attr('aria-expanded') === 'true' ? 'false' : 'true');
    });
});

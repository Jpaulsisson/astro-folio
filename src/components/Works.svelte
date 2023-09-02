<script defer lang="ts">
  import Retrofolio from '../../resources/retrofolio.jpg';
  import CirclePainter from '../../resources/circle-painter.jpg';
  import Blackjack from '../../resources/blackjack.jpg';
  import AgeCalc from '../../resources/age-calc.png';
  import Counter from '../../resources/counter.png';
  import HTMLIcon from '../../resources/HTML-icon.svg';
  import CSSIcon from '../../resources/CSS-icon.svg';
  import JSIcon from '../../resources/JS-icon.svg';
  import ReactIcon from '../../resources/React-icon.svg';
  import GitIcon from '../../resources/Git-icon.svg';
  import SassIcon from '../../resources/Sass-icon.svg';
  import Travel from '../../resources/travel.jpeg';
  import Arrow from '../../resources/arrow.svg';
  
  type Project = {
    name: string,
    href: string,
    img: string,
    tags: string[],
    repo: string,
    status?: boolean
  }

  type Skill = {
    name: string,
    color: string,
  }

let openRecent = 'scale-0';
let openCurrent = 'scale-0';
let currentIndex = 0;

const skills:Skill[] = [
  {
    name: 'HTML',
    color: 'text-orange-700',
  },
  {
    name: 'CSS',
    color: 'text-blue-500',
  },
  {
    name: 'JavaScript',
    color: 'text-yellow-500',
  },
  {
    name: 'React',
    color: 'text-blue-300',
  },
  {
    name: 'Sass',
    color: 'text-pink-500',
  },
  {
    name: 'TypeScript',
    color: 'text-blue-500',
  },
  {
    name: 'Tailwind',
    color: 'text-accentGreen',
  },
  {
    name: 'Git',
    color: 'text-orange-600',
  },
  {
    name: 'Bootstrap',
    color: 'text-purple-600',
  },
  {
    name: 'Svelte',
    color: 'text-red-700',
  },
  {
    name: 'SQL',
    color: 'text-amber-800',
  },
  {
    name: 'PostgreSQL',
    color: 'text-sky-700',
  },
]
const projects:Project[] = [
    {
      name: 'Retrofolio',
      href: 'https://jpaulsisson.netlify.app/',
      img: Retrofolio,
      tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/portfolio-site',
      status: true,
    },
    {
      name: 'Circle Painter',
      href: 'https://circle-paint.netlify.app/',
      img: CirclePainter,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/circle-generator-app',
      status: false,
    },
    {
      name: 'Blackjack',
      href: 'https://jpaulsisson-blackjack.netlify.app/',
      img: Blackjack,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/blackjack',
      status: false,
    },
    {
      name: 'Age Calculator',
      href: 'https://calculate-age-fem.netlify.app',
      img: AgeCalc,
      tags: [HTMLIcon, SassIcon, JSIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/age-calculator-app',
      status: false,
    },
    {
      name: 'Customizable Counter',
      href: 'https://customizable-counter.netlify.app',
      img: Counter,
      tags: [HTMLIcon, CSSIcon, JSIcon, ReactIcon, GitIcon],
      repo: 'https://github.com/Jpaulsisson/wds-react-hooks-course/tree/main',
      status: false,
    },
  ]

const current:Project = {
  name: 'Travel Planner',
  href: '#',
  img: Travel,
  tags: [HTMLIcon, SassIcon, JSIcon, ReactIcon, GitIcon],
  repo: '#',
};

function handleToggleRecent() {
  openRecent === 'scale-100' ? openRecent = 'scale-0' : openRecent = 'scale-100';
}
function handleToggleCurrent() {
  openCurrent === 'scale-100' ? openCurrent = 'scale-0' : openCurrent = 'scale-100';
}
function handlePrev() {
  currentIndex === 0 ? currentIndex = projects.length - 1 : currentIndex -= 1;
}
function handleNext() {
  currentIndex === projects.length - 1 ? currentIndex = 0 : currentIndex += 1;
}
</script>

<main class='w-full max-w-cutoff flex flex-col items-center justify-center'>

  <!-- skills -->

  <section class='my-10'>
    <h2 class='text-3xl text-center my-4 md:text-5xl'>proficiencies</h2>
    <ul class=' grid grid-cols-3 gap-x-12 tracking-wide text-xl md:text-2xl'>
      {#each skills as {name, color}}
        <li class={`p-3 ${color}`}>{name}</li>
      {/each}
    </ul>
  </section>

  <!-- recent projects -->

  <h2 class='mb-10 text-center text-3xl md:text-5xl'>recent</h2>
  <section aria-label="my recent projects">
    <div class="carousel-container relative">
      <button on:click={handlePrev} class="carousel-button prev absolute top-1/2 left-2 p-2 text-primaryBg bg-primaryBg opacity-40 aspect-square rounded-full hover:opacity-100 z-10"><img class="rotate-180" src={Arrow} alt='arrow-right' width={40}></button>
      <button on:click={handleNext} class="carousel-button next absolute top-1/2 right-2 text-primaryBg font-semibold bg-primaryBg opacity-40 aspect-square rounded-full hover:opacity-100 z-10"><img src={Arrow} alt='arrow-right' width={40}></button>
      <ul class=" list-none">
        {#each projects as {name, href, img, tags, repo}, index}
          <li class={`car-slide ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`} >
            <a href={href} aria-label={name + ' live site'} rel="noopener noreferrer" target="_blank" class="absolute z-40 bg-transparent w-8/12 h-3/4 inset-0 m-auto"> </a>
            <img src={img} alt={name} class="rounded-md"/>

            <!-- more info content -->

            <div class={`more-info w-full inset-0 absolute ${openRecent} bg-primaryFont opacity-90 flex flex-col items-center justify-center`}>
              <h3 class='flex items-center justify-center text-accentGreen text-xl md:text-3xl'>{name}</h3>
              <p class='text-primaryBg text-xl md:text-2xl' >Tech stack:</p>
              <div class='flex items-center justify-around gap-2 md:gap-6'>
                {#each tags as tag}
                  <img src={tag} alt={name} class=' w-10 md:w-[10%]'/>
                {/each}
              </div>
              <a class='flex justify-center items-center text-primaryBg text-xl md:text-2xl' target="_blank" rel="noopener noreferrer" href={repo}><span class='text-accentGreen text-2xl' >&#60;</span>github repo<span class='text-accentGreen text-2xl'>&#62;</span>
              </a>
            </div>

        <!-- end of more info content -->

          </li>
        {/each}
      </ul>
    </div>
  </section>
  <button on:click={handleToggleRecent} class='mb-20 mt-4 rounded-md text-primaryFont w-1/4 border-[1px] border-accentGreen md:text-2xl'>More info</button>

<!-- end of recent projects -->
<!-- current project -->

  <h2 class='mb-10 text-center text-3xl md:text-5xl'>current</h2>
  <div class='w-4/5 relative'>
      <div>
        <img src={Travel} alt='van traveling road' class="w-full rounded-md" />

        <!-- begin more info content -->

        <div class={`more-info w-full inset-0 absolute ${openCurrent} bg-primaryFont opacity-90 flex flex-col items-center justify-center text-primaryBg`}>
          <h3 class='flex items-center justify-center text-accentGreen text-xl md:text-3xl'>Travel Planner</h3>
          <p class='text-xl md:text-2xl' >Tech stack:</p>
          <div class='flex items-center justify-around gap-2 md:gap-6'>
            {#each current.tags as tag}
              <img src={tag} alt={current.name} class=' w-10 md:w-[10%]' />
            {/each}
          </div>
          <a class='flex justify-center items-center text-xl md:text-2xl' href='/contact'><span class='text-accentGreen text-2xl' >&#60;</span>collaborate<span class='text-accentGreen text-2xl'>&#62;</span>
          </a>
        </div>
        
      <!-- end more info content -->

      </div>
  </div>
  <button on:click={handleToggleCurrent} class='mb-20 mt-4 rounded-md text-primaryFont w-1/4 border-[1px] border-accentGreen md:text-2xl'>More info</button>

<!-- mini-nav -->

  <div class=' brightness-75 flex items-center justify-evenly w-1/2 mb-8 text-md text-accentGreen md:text-xl md:mb-16'><a class='text-primaryFont' href='/'>home</a> || <a class='text-primaryFont' href='/contact'>contact</a></div>

</main>


<style>
  .more-info {
    transition: all 400ms;
  }

  .carousel-button {
    transform: translateY(-50%);
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carousel-button:focus {
    opacity: 1;
    outline: 3px solid var(--accentGreen);
  }

  .carousel-container {
    width: clamp(320px, 80vw, 750px);
    aspect-ratio: 16/9;
  }

  .car-slide {
    position: absolute;
    inset: 0;
    transition: opacity 500ms;
  }

  
</style>
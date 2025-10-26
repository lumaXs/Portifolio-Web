// 🔹 === Create the dynamic main ===

function createMain() {
      const main = addElement('main')
      main.className = "max-w-3xl mx-auto mt-12 px-6 space-y-10"

      const sections = [
        {
          title: 'Sobre mim',
          text: `Sou desenvolvedor Full-Stack apaixonado por tecnologia, design e automação. 
          Gosto de criar soluções simples e funcionais que unem estética e performance. 
          Tenho experiência com JavaScript, Node.js, TailwindCSS, e integração de APIs — 
          sempre buscando aprimorar minhas habilidades e aprender novas ferramentas.`
        },
        {
          title: 'Formação',
          text: `Atualmente sou estudante de Análise e Desenvolvimento de Sistemas. 
          Desde cedo me envolvi com programação e me dedico a construir projetos próprios, 
          explorando desde o front-end com HTML, CSS e JS puro até o back-end com Node e Express.`
        },
        {
          title: 'Cursos',
          text: `Concluí diversos cursos livres sobre desenvolvimento web, 
          JavaScript moderno (ES6+), Git e controle de versão, além de fundamentos de UI/UX. 
          Também estudo de forma independente linguagens como Python e TypeScript 
          para ampliar meu domínio sobre o ecossistema de desenvolvimento.`
        }
      ]

      for (const { title, text } of sections) {
        const section = addElement('section')
        const topic = addElement('h3')
        topic.textContent = title
        topic.className = "text-xl font-semibold text-[#5BBE42] mb-2"

        const paragraph = addElement('p')
        paragraph.textContent = text
        paragraph.className = "text-neutral-300 leading-relaxed"

        section.append(topic, paragraph)
        main.append(section)
      }

      return main
    }

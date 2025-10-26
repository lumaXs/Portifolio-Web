// 🔹 === Creates the navbar dynamically ===

function createNavbar() {
      const nav = addElement('nav')
      nav.className = "fixed top-0 left-0 w-full bg-black/80 border-b border-neutral-800 backdrop-blur-md shadow-sm z-50"

      const ul = addElement('ul')
      ul.className = "flex justify-around gap-10 py-4"

      const items = ['Home', 'Projetos', 'Contato']

      for (const text of items) {
        const li = addElement('li')
        const a = addElement('a')
        a.href = '#'
        a.textContent = text
        a.className = `
          text-white font-medium tracking-wide
          border-b-2 border-transparent
          hover:text-[#5BBE42] hover:border-[#5BBE42]
          transition-all duration-200
        `
        li.appendChild(a)
        ul.appendChild(li)
      }

      nav.appendChild(ul)
      return nav
    }

function createHeader() {
      const header = addElement('header')
      header.className = "text-center pt-24 flex flex-col items-center"

      const image = addElement('img')
      image.src = 'media/profile.png'
      image.alt = 'Foto de perfil'
      image.className = "w-36 aspect-square object-cover rounded-full border-4 border-[#5BBE42] shadow-[0_4px_20px_rgba(91,190,66,0.3)]"

      const title = addElement('h1')
      title.textContent = 'Emersom O Bernardini'
      title.className = "text-2xl font-semibold mt-4 text-[#5BBE42]"

      const subtitle = addElement('h2')
      subtitle.textContent = 'Desenvolvedor Full-Stack'
      subtitle.className = "text-lg text-neutral-400"

      header.append(image, title, subtitle)
      return header
    }

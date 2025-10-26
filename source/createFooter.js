// 🔹 === Creates the footer dynamically ===

function createFooter() {
    const footer = addElement('footer')
    footer.className = "flex justify-center flex-wrap gap-8 mt-12 pb-8"

    const links = [
      { href: '#', img: 'media/github.svg', alt: 'GitHub', text: 'GitHub' },
      { href: '#', img: 'media/instagram.svg', alt: 'Instagram', text: 'Instagram' },
      { href: '#', img: 'media/youtube.svg', alt: 'YouTube', text: 'YouTube' },
      { href: '#', img: 'media/whatsapp.svg', alt: 'WhatsApp', text: 'WhatsApp' }
    ]

    for (const { href, img, alt, text } of links) {
      const a = addElement('a')
      a.href = href
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
      a.className = "flex flex-col items-center gap-2 hover:text-[#5BBE42] transition-colors"

      const icon = addElement('img')
      icon.src = img
      icon.alt = alt
      icon.className = "w-10 h-10"

      const label = addElement('span')
      label.textContent = text
      label.className = "text-sm font-medium"
 
      a.append(icon, label)
      footer.appendChild(a)
    }

    return footer
}

;(function (z) {
  z.onReady = (ready) => {
    if (document.readyState != 'loading') {
      ready()
    } else {
      document.addEventListener('DOMContentLoaded', ready)
    }
  }

  const linkHeadings = () => {
    ;[1, 2, 3, 4, 5, 6].forEach((i) => {
      for (const el of document.getElementsByTagName(`h${i}`)) {
        const id = el.getAttribute('id')
        const heading = el.cloneNode()
        const link = document.createElement('a')

        link.setAttribute('href', `#${id}`)
        link.classList.add('heading_link')
        link.textContent = el.textContent
        heading.textContent = undefined
        heading.appendChild(link)

        el.replaceWith(heading)
      }
    })
  }

  z.onReady(linkHeadings)
})((window.z = window.z || {}))

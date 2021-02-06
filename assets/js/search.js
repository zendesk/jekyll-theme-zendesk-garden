---
layout: bare
---
(function(z) {

z.onReady = (ready) => {
  if (document.readyState != 'loading') {
    ready()
  } else {
    document.addEventListener('DOMContentLoaded', ready)
  }
}

const initSearch = (query) => {
  const request = new XMLHttpRequest()
  request.open('GET', '{{ "/assets/js/search_data.json" | absolute_url }}', true)

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const docs = JSON.parse(request.responseText)

      lunr.tokenizer.separator = {{ site.search.tokenizer_separator | default: site.search_tokenizer_separator | default: "/[\s\-/]+/" }}

      const index = lunr(function() {
        this.ref('id')
        this.field('title', { boost: 200 })
        this.field('content', { boost: 2 })
        {%- if site.search.rel_url != false %}
        this.field('relUrl')
        {%- endif %}
        this.metadataWhitelist = ['position']

        for (const i in docs) {
          this.add({
            id: i,
            title: docs[i].title,
            content: docs[i].content,
            {%- if site.search.rel_url != false %}
            relUrl: docs[i].relUrl
            {%- endif %}
          })
        }
      })

      performSearch(index, docs, query)
    } else {
      console.log('Error loading ajax request. Request status:' + request.status)
    }
  }

  request.onerror = () => {
    console.log('There was a connection error')
  }

  request.send()
}

const parseParams = () => {
  const paramParts = window.location.search.replace('?', '').split('=')
  const params = {}

  for (let i = 0; i < paramParts.length; i += 2) {
    params[paramParts[i]] = paramParts[i+ 1]
  }

  return params
}

const performSearch = (index, docs, query) => {
  const results = index.search(query)

  if (results?.length === 0) {
    showNoResults(query)
  } else {
    buildResults(results)
  }
}

const submitSearch = (event) => {
  event.preventDefault()
  const input = document.getElementById('search_input')
  const query = input?.value
  const search_results_url = "{{ '/assets/html/search_results' | absolute_url }}"

  if (!query) return

  window.location = `${search_results_url}?q=${query}`
}

const showNoResults = (query) => {
  const el = document.getElementById('no_results')
  const termEl = document.getElementById('no_results_search_term')

  termEl.textContent = query
  el.classList.remove('no_search_results:hidden')
}

const buildResults = (results) => {

}

z.onReady(() => {
  document.getElementById('search').addEventListener('submit', submitSearch)

  if (window.location.pathname === '/assets/html/search_results/') {
    const params = parseParams()
    document.getElementById('search_input').value = params.q
    initSearch(params.q)
  }
})

})(window.z = window.z || {})

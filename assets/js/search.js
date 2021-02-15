---
layout: bare
---
(function(z) {

z.onSearchReady = (ready) => {
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

  if (results?.length > 0) {
    buildResults(results, docs)
  } else {
    showNoResults(query)
  }
}

const submitSearch = (event) => {
  event.preventDefault()
  const input = document.getElementById('search_input')
  const query = input?.value
  const search_results_url = "{{ '/assets/html/search_results' | absolute_url }}"

  if (query) {
    window.location = `${search_results_url}?q=${query}`
  }
}

const showNoResults = (query) => {
  const el = document.getElementById('no_results')
  const termEl = document.getElementById('no_results_search_term')

  termEl.textContent = query
  el.classList.remove('no_search_results:hidden')
}

const resultNode = () => {
  const el = document.createElement('div')

  el.classList.add('search_result')

  return el
}

const highlightContent = (metadata, prop, input) => {
  let result = input
  let offset = 0

  for (const phrase in metadata) {
    metadata[phrase][prop]?.position?.forEach(([pos, len]) => {
      const start = pos + offset
      const end = start + len
      const left = result.slice(0, start)
      const right = result.slice(end)
      const highlight = `<span class="search_result:highlight">${result.slice(start, end)}</span>`

      result = left + highlight + right
      offset += highlight.length - len
    })
  }

  return result
}

const resultTitle = (metadata, doc) => {
  const el = document.createElement('div')
  const link = document.createElement('a')

  link.setAttribute('href', doc.relUrl)
  link.innerHTML = highlightContent(metadata, 'title', doc.title)

  el.appendChild(link)
  el.classList.add('search_result:title')

  return el
}

const resultPreview = (metadata, doc) => {
  const el = document.createElement('div')
  const p = document.createElement('p')

  p.innerHTML = highlightContent(metadata, 'content', doc.content)
  p.classList.add('search_result:preview_text')

  el.appendChild(p)
  el.classList.add('search_result:preview')

  return el
}

const buildResult = (metadata, doc) => {
  const result = resultNode()
  const title = resultTitle(metadata, doc)
  const preview = resultPreview(metadata, doc)

  result.appendChild(title)
  result.appendChild(preview)

  return result
}

const buildResults = (results, docs) => {
  const resultsEl = document.getElementById('search_results')

  results.forEach(({ matchData, ref }) => {
    const result = buildResult(matchData.metadata, docs[ref])

    resultsEl.appendChild(result)
  })
}

z.onSearchReady(() => {
  document.getElementById('search').addEventListener('submit', submitSearch)

  if (window.location.pathname.includes('assets/html/search_results')) {
    const params = parseParams()
    document.getElementById('search_input').value = params.q
    initSearch(params.q)
  }
})

})(window.z = window.z || {})

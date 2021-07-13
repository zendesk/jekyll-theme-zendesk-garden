---
id: search
title: Search
previous_page: sidebar
next_page: relative-nav
---

Site search can be configured in your `_config.yml` by setting `search_enabled`.

```yaml
search_enabled: true
```

### Indexing Pages

For a page to be indexed, it must meet two criteria:

1. It must produce HTML content.

   This means markdown/text/etc... files are included while things like asset files are not.

1. The pages [front matter](https://docs.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll#front-matter)
   must include a non-empty `title` property.

   **Example**

   ```
   ---
   id: my-doc
   title: My Searchable Documenet
   ---

   ## My Document
   ```

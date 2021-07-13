---
id: relative-nav
title: Relative Navigation
previous_page: search
next_page: additional-config
---

Relative navigation links can be added at the end of the content for any page.

In the [front matter](https://docs.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll#front-matter)
of any page, set `previous_page` or `next_page` to the `id` of the page to link to.

The label will behave similar to the sidebar nav label. If `sidebar_label` is set, that will be
used otherwise the `title` will be used.

#### Example

```markdown
---
id: page-2
title: Page 2
previous_page: page-1
next_page: page-3
---
```

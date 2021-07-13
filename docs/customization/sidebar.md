---
id: sidebar
title: Sidebar Navigation
sidebar_label: Sidebar Nav
next_page: search
---

A navigation sidebar can be configured in your `_config.yml` by adding the `sidebar` property.

Sidebar navigation supports direct links or a single level of nesting with collapsible categories.

To support including pages in the sidebar navigation panel, the page must have
[front matter](https://docs.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll#front-matter)
that contains an `id`.

### Root Sidebar Items

To reference a page at the sidebar root, directly use its `id` in the list of sidebar items.

#### Example

##### `getting_started.md`

```
---
id: getting-started
---

## Some Instructions

...
```

##### `_config.yml`

```yaml
sidebar:
  - getting-started
```

### Collapsible Sidebar Items

To create a collapsible list of pages in the sidebar, create an entry with `label` and `children`.
The `children` property must then contain a list of document `id`s to be included in that section.

#### Example

```yaml
sidebar:
  - label: Section One
    children:
      - document-one
      - document-two
      - document-three
```

### Mixed Sidebar Types

You can mix both root level links and collapsible items in a sidebar.

#### Example

```yaml
sidebar:
  - getting-started
  - label: Dev Docs
    children:
      - doc-1
      - doc-2
  - deployment
```

### Label Customization

By default, the `title` of a page will be used as the label in the sidebar. If you do not specify a
`title` in your documents [front matter](https://docs.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll#front-matter)
then the first heading in the document will be extracted using the [`jekyll-titles-from-headings`](https://github.com/benbalter/jekyll-titles-from-headings) plugin (which GitHub automatically includes).

If you want to customize the sidebar label further, you can do so by setting a `sidebar_label`
attribute in the [front matter](https://docs.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll#front-matter).

```
---
id: my-document
title: This is a really long title that is bad for a sidebar
sidebar_label: Long Title
---

## Some header that is also a bad sidebar title

```

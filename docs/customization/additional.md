---
id: additional-config
title: Additional Config
---

## Version

The layout includes an updated timestamp in the footer by default, but can also include a version
string.

Set the `version` attribute in your `_config.yml` file and it's value will be displayed in the
footer next to the updated timestamp.

```yaml
version: v1.2.3
```

## Automatic Page Titles

The layout can automatically add a `<h1>` element at the top of the content containing the page's
title if it is present.

To enable this, set `auto_page_title` to `true` in your `_config.yml` file.

```yaml
auto_page_title: true
```

### Per-page Opt-out

If you don't want this behavior on a specific page, you can add set `auto_title` to `false` in the
[front matter](https://docs.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll#front-matter)
of the page.

```
---
id: my-page
title: My Title
auto_title: false
---

# My explicit title here

```

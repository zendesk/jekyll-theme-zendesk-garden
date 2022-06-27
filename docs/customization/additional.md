---
id: additional-config
title: Additional Config
previous_page: search
---

| Property                                    | Default                               |
| ------------------------------------------- | ------------------------------------- |
| [`version`](#version)                       | `site.github.latest_release.tag_name` |
| [`auto_page_title`](#automatic-page-titles) | `false`                               |
| [`mermaid_enabled`](#mermaid-enabled)       | `true`                                |
| [`meraid_theme`](#mermaid-theme)            | `forest`                              |

## Version

The layout includes an updated timestamp in the footer by default, but can also include a version
string.

This will automatically pull the `tag_name` from the latest release of the repository on GitHub. If
there is no latest release or tag name, then it will fall back to the `build_revision`, i.e. the
git SHA, of the commit that triggered the page build.

If you don't want this behavior, you can explicitly set the `version` attribute in your
`_config.yml` file and it's value will be displayed in the footer next to the updated timestamp.

```yaml
version: v1.2.3
```

If you don't want a version to be displayed at all, you can opt-out by setting `version` to `false.

```yaml
version: false
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

# Mermaid
This theme supports rendering of [MermaidJS](https://mermaid-js.github.io/) diagrams. It does so in a way that maintains compatibility with the native Mermaid diagram rendering in the Github UI. For example:

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

## Disabling Mermaid Support {#mermaid-enabled}
If you don't want to use Mermaid diagrams, you can set the `mermaid_enabled` option in your `_config.yml` file to `false`.

## Customising the Mermaid theme {#mermaid-theme}
Mermaid supports a number of default themes. This can be configured using the `mermaid_theme` option in your `_config.yml` file. Note that this theme must be supported in the [Mermaid configuration](https://mermaid-js.github.io/mermaid/#/./Setup?id=theme).

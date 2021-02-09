---
id: development
title: Development
---

To set up your environment to develop this theme, install Jekyll.

```
gem install jekyll -v '~> 4.2'
```

Setup is just like a normal Jekyll site! To test the theme, run `jekyll serve` and open your browser
at `http://localhost:4000`. This starts a Jekyll server using the theme. Add pages, documents, data,
etc. like normal to test the theme's contents. As you make modifications to the theme and to your
content, your site will regenerate and you should see the changes in the browser after a refresh,
just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked
with Git will be bundled. To add a custom directory to your theme-gem, please edit the regexp in
`jekyll-theme-zendesk-garden.gemspec` accordingly.

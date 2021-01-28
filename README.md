---
layout: default
---

# jekyll-theme-zendesk-garden

A Jekyll theme using Zendesk Garden design patterns.

This is possible thanks to the following awesome libraries:

- [`jekyll-postcss` plugin](https://github.com/mhanberg/jekyll-postcss)
- [`tailwind-css` as a PostCSS plugin](https://tailwindcss.com/docs/installation#add-tailwind-as-a-post-css-plugin)
- [zendeskgarden/tailwindcss](https://github.com/zendeskgarden/tailwindcss)

## Usage

### GitHub Pages

Define a `_config.yml` file in your GitHub pages root directory and specify this remote theme:

```yaml
remote_theme: zendesk/jekyll-theme-zendesk-garden
```

### As a Gem Theme

#### Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-zendesk-garden"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-zendesk-garden
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-zendesk-garden

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/zendesk/jekyll-theme-zendesk-garden. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-zendesk-garden.gemspec` accordingly.

## License

Copyright 2021 Zendesk

Licensed under the [Apache License, Version 2.0](LICENSE.txt)

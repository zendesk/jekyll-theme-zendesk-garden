# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-zendesk-garden"
  spec.version       = "0.3.0"
  spec.authors       = ["Craig Day"]
  spec.email         = ["cday@zendesk.com"]
  spec.license       = "Apache-2.0"

  spec.summary       = "A Jekyll theme using the Zendesk Garden design patterns."
  spec.homepage      = "https://github.com/zendesk/jekyll-theme-zendesk-garden"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "jekyll-postcss"
end

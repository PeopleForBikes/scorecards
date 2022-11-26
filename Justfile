# Meta task running ALL the CI tasks at onces.
ci: lint

# Meta task running all the linters at once.
lint: lint-js lint-md

# Lint javascript files.
lint-js:
    npx --yes prettier --check "**/*.js"

# Lint markown files.
lint-md:
    npx --yes markdownlint-cli2 "**/*.md" "#node_modules"

# Meta tasks running all formatters at once.
fmt: fmt-js fmt-just fmt-md

# Format javascript files.
fmt-js:
    npx --yes prettier --write "**/*.js"

# Format the justfile.
fmt-just:
    just --fmt --unstable

# Format markdown files.
fmt-md:
    npx --yes prettier --write --prose-wrap always "**/*.md"

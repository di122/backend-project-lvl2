install:
	npm install
publish:
	npm publish
run:
	src/bin/gendiff.js
lint:
	npx eslint .
test:
	npm test
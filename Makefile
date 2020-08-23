install:
	npm install
publish:
	npm publish
run:
	bin/gendiff.js
lint:
	npx eslint .
test:
	npm test
test-coverage:
	npm test -- --coverage --coverageProvider=v8
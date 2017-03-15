TypeScript Library Template
===

Template for authoring TypeScript modules for the browser. This template
includes:

- Mocha as testing framework
- Karma for in browser testing
- Webpack for bundling your static library.

Usage
---

Clone and install the dependencies:

```
git clone https://github.com/endel/library-template.ts.git
cd library-template.ts
npm install
```

Start [karma](https://github.com/karma-runner/karma) test-runner and watch for
changes.

```
npm start
```

Run `mocha` in node environment.

```
npm test
```

Generate distribution files and typing definitions.

```
npm prepublish
```

Bundling your static library
---

```
npm bundle
```

License
---

MIT

TypeScript Library Template
===

Template for authoring TypeScript libraries for the browser. Uses Webpack +
Karma + Mocha for testing.

Usage
---

First, clone and install the dependencies:

```
git clone https://github.com/endel/library.ts.git
cd library.ts
npm install
```

Start [karma](https://github.com/karma-runner/karma) test-runner and watch for
code change.

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

License
---

MIT

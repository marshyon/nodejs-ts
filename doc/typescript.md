# typescript

needs to be installed locally to the project and if required globally.

```bash
npm install typescript --save-dev
npm install -g typescript
```

at the project level, a tsconfig file needs to be created and can be automatically generated with the following command:

```bash
tsc --init
```

the file needs to be configured to be useful changing `rootDir` and `outDir` to the correct values.

```json
{
  "compilerOptions": {
    "target": "es2016",                                  /* Set the JavaScript language version for emitteJavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "rootDir": "./src",                                  /* Specify the root folder within your source files. */
    "moduleResolution": "node16",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
```

with scripts installed to a package.json file like the following:

```json
  "scripts": {
    "start": "node dist/app.js",
    "dev": "nodemon src/app.ts",
    "build": "tsc -p ."
  },
```

the poject can be developed with

```bash
npm run dev
```

and built with

```bash
npm run build
```

or served with

```bash
npm start
```


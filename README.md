# Snowpack React Typescript Starter 🧨 🤙

A Snowpack starter pack using React and Typescript using Pnpm.

> ✨ Bootstrapped with Create Snowpack App (CSA).

Throughout the code used in this project are comments to assist you in quickly understanding the awesomeness of Snowpack (as we learn ourselves 🤝).

---

## Setup

Make a `.npmrc` `.nvmrc` and add the information you need (optional).

Run your Starter

```sh
npx create-snowpack-app --template @snowpack/app-template-react-typescript --target . --force --use-pnpm
# use force to build project in your current directory
```

## Available Scripts

### pnpm run start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### pnpm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

### pnpm run test

Launches the application test runner.
Run with the `--watch` flag (`pnpm run test -- --watch`) to run in interactive watch mode.

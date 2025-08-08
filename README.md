<!-- language-all: typescript -->

# GitHub NPM Package RN Expo TS Template

This [React-Native](https://reactnative.dev/) [Expo](https://docs.expo.dev/) template allows you to bootstrap a _private_ **NPM package** hosted on GitHub, perfect for propritory modules within your organisation! You will be able to consume it in your main app using a [GitHub access token](#consume-package).

You will be able to run [Storybook](#storybook) for both native and web to QA and using **[WritingTests](./WritingTests.md)** you can keep up the 100 % test coverage.

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) [![Expo](https://img.shields.io/badge/expo-blue?style=for-the-badge&logo=expo&logoColor=white)](#expo)
[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](#run-storybook)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](#typescript)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)](#jest) [![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
](#jest) [![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](#linting) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/thomashagstrom/npm-github-react-native/actions/new)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thomashagstrom/npm-github-react-native) [![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
](#recommended-tools) [![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)](https://github.com/thomashagstrom/npm-github-react-native/packages/) [![Node.js Package](https://github.com/thomashagstrom/npm-github-react-native/actions/workflows/npm-publish.yml/badge.svg?branch=main)](https://github.com/thomashagstrom/npm-github-react-native/actions/workflows/npm-publish.yml)

[![](https://media.giphy.com/media/wqS44mdZqYgHpLXv4j/giphy.gif)
![](https://media.giphy.com/media/QKhOzr9WAG5yLAfdJ3/giphy.gif)](#run-storybook)

- [Using this template](#using-this-template)
  - [Configure package](#configure-package)
- [Developing](#developing)
  - [Requirements](#requirements)
  - [Recommended tools](#recommended-tools)
  - [Recommended plugins](#recommended-plugins)
  - [Installation](#installation)
- [Build](#build)
- [Expo](#expo)
- [Storybook](#storybook)
  - [iOS](#ios)
  - [Android](#android)
  - [Configure storybook](#configure-storybook)
- [Linting](#linting)
- [Continuous Integration](#continuous-integration)
  - [GitHub Actions](#github-actions)
- [Optimizations](#optimizations)
- [Module Formats](#module-formats)
- [Named Exports](#named-exports)
- [Publish a new version](#publish-a-new-version)
- [Consume package](#consume-package)
  - [Peer dependencies](#peer-dependencies)
- [Configure libs](#configure-libs)
  - [Jest](#jest)
  - [Bundle Analysis](#bundle-analysis)
    - [Setup Files](#setup-files)
  - [Rollup](#rollup)
  - [TypeScript](#typescript)
- [Contributors ✨](#contributors--)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Using this template

When you use this template you will get a React-Native Expo repo that's almost ready to be build and deployed to GitHub as a private NPM package.

### Configure package

Make sure to update **package name** in [package.json](./package.json#L2) as well as **publishConfig** in [package.json](./package.json#L6).

You will probably want to change the **license** field from `APACHE` (this repo) to `UNLICENSED` (private repo) too.

For organisation "expohacks" the config would look like this.

> Replace "expohacks" with your organisation name and "npm-github-react-native" with the package name

```json
// package.json
{
  "name": "@expohacks/npm-github-react-native",
  "author": "Expo Hackers",
  "version": "0.1.1",
  "license": "UNLICENCED",
  "publishConfig": {
    "@ expohacks:registry": "https://npm.pkg.github.com",
    "access": "restricted"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/expohacks/npm-github-react-native.git"
  },
  "bugs": {
    "url": "https://github.com/expohacks/npm-github-react-native/issues"
  },
  "homepage": "https://github.com/expohacks/npm-github-react-native#readme",
  ...
}
```

Update the [.npmrc](./.npmrc) to match your new organization id

```json
// .npmrc
@expohacks
```

Optionally configure Expo [app.json](./app.json).

**Next:**

- [Publish a new version](#publish-a-new-version)
- [Consume package](#consume-package)

## Developing

Follow the **[React-Native Expo installation guide](https://reactnative.dev/docs/environment-setup)** to set up a developer environment.

This project is bootstrapped using [TSDX](https://tsdx.io/), but with some heavy modifications to produce React-Native Expo compatible code.

> There is no fancy auto renaming CLI so make sure to change [package name](./package.json#L2) the first thing you do.

> This TSDX setup is meant for developing libraries (not apps!) that can be published to NPM. If you’re looking to build a Node app, you could use `ts-node-dev`, plain `ts-node`, or simple `tsc`.

> If you’re new to TypeScript, checkout [this handy cheatsheet](https://devhints.io/typescript)

### Requirements

- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) for macOS or Linux users

### Recommended tools

- [Visual Studio Code](https://code.visualstudio.com/) - cross-platoform modular IDE with [React-Native support](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) and integrated [terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).
- Windows users: [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/dev-cross-plat/vscode/using-vscode?view=powershell-7.2), [Bash via WSL](https://docs.microsoft.com/en-us/windows/wsl/about)

Optionally install [Yarn](https://classic.yarnpkg.com/en/) - a fast package manager for installing NPM dependencies. However, do not add new packages using Yarn as that would create a yarn.lock.

### Recommended plugins

Just a recommendation based on what worked for this developer:

- **[React-Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)**
- **[Expo tools](https://marketplace.visualstudio.com/items?itemName=byCedric.vscode-expo)**
- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
- **[TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)**
- **[TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)**
- **[TypeScript toolbox](https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter)**
- **[Add jsdoc comments](https://marketplace.visualstudio.com/items?itemName=stevencl.addDocComments)**
- **[JSDoc markdown highlighting](https://marketplace.visualstudio.com/items?itemName=bierner.jsdoc-markdown-highlighting)**
- **[ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)**
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**
- **[GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)**
- **[Markdown editor](https://marketplace.visualstudio.com/items?itemName=zaaack.markdown-editor)**
- **[HTML Preview](https://marketplace.visualstudio.com/items?itemName=tht13.html-preview-vscode)**

### Installation

Once above environment is in place you can open a [terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) in the repository root (in VS Code).

```
npm install # or yarn install
```

## Build

TSDX scaffolds your new library inside `/src`.

To compile the code into the NPM deployable product, run

```bash
npm run start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

- To do a one-off build, use `npm run build` or `yarn build`.
- To run tests, see **[jest](#jest)**
- To release, see **[Publish a new version](#publish-a-new-version)**
- To run, see **[Storybook](#storybook)**

## Expo

The app is built using [Expo](https://docs.expo.io/) for React-Native. It allows working with JavaScript without native code and instant releases Over The Air (OTA). The commands (above) uses Expo to start, run, build and deploy the app.

- [app.json](./app.json) - Expo config
- [expo](./.expo/README.md) - shared Expo config for all developers

## Storybook

The app is integrated with [Storybook](https://github.com/storybookjs/react-native) which provides an environment to develop and test components in isolation.

Make sure you have a react-native environment for [Expo](https://www.expo.io) setup.

To run, first start the metro bundler:

```bash
npm run start:native # or yarn start:native
```

Use the terminal commands to start iOS (press **i**), Android (press **a**) or start developer tools (press **d**). Optinally, you can use a second terminal to run commands:

### iOS

```bash
npm run ios # or yarn ios
```

### Android

```bash
npm run android # or yarn android
```

### Configure storybook

Configuration is found in the [storybook/index.tsx](./storybook/index.tsx) entry point. Stories are added to [storybook/stories/index.tsx](./storybook/stories/index.tsx).

For a new component stories should be added that replicate the requirements like Figma designs.

Storybook specific components are written that connect the component to [Storybook knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs#available-knobs) that allow manipulation of the props while running the app.

_[LoginForm.stories.tsx](storybook/stories/LoginForm/LoginForm.stories.tsx)_

Notice how we use `text` and `action` from storybook to make these dynamic values that can be changed in the storybook knobs UI:

```typescript
// LoginForm.stories.tsx
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';

storiesOf('LoginForm', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <LoginForm mode="contained" onLogin={action('onLogin')}>
      {text('Text', 'Login')}
    </LoginForm>
  ))
  .add('with some emoji', () => (
    <LoginForm mode="outlined" onLogin={action('clicked-emoji')}>
      😀 😎 👍 💯
    </LoginForm>
  ));
```

## Linting

The project is setup to use ESLINT with Prettier.

```bash
npm run lint # or yarn lint
```

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `npm-publish` used to **[publish a new version](#publish-a-new-version)**

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Publish a new version

Make sure this package has [.npmrc](./.npmrc) to match your organization id, e.g. "@expohacks"

```json
// .npmrc
@expohacks:registry=https://npm.pkg.github.com
```

1. Commit and push your feature.
2. Up [version](https://docs.npmjs.com/about-semantic-versioning) in [`package.json`](./package.json) using the script `npm run version:next` or `yarn version:next`. This will tag and push to your branch.
3. PR and merge your branch.
4. [Draft a new Release](https://github.com/thomashagstrom/npm-github/releases) from that the new tag.
5. GitHub Action builds and publishes. The package becomes available in "packages" GitHub page.

## Consume package

These details are valid if the package is private scoped.

1. Open the lib where u want to consume the private NPM package
2. Create a [personal access token](https://github.com/settings/tokens) with `write:packages` scope
3. Config [`.npmrc`](./.npmrc) to use the token (below)
4. Install the scoped package, e.g. `yarn add https://github.com/thomashagstrom/npm-github`

Example [`npmrc`](./.npmrc) config for consuming `thomashagstrom` org scoped packages:

> replace "thomashagstrom" with your organisation name

```
@thomashagstrom:registry=https://npm.pkg.github.com/thomashagstrom
//npm.pkg.github.com/:_authToken=MyTopSecretTokenWithPackageScope
```

### Peer dependencies

Install the dev [**peerDependencies**](./package.json#L53-L65). At this time:

```bash
npm i --save expo react react-native react-native-paper react-native-web @react-navigation/core @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-safe-area-context@3.3.2 react-native-screens react-native-web
# or yarn
```

## Configure libs

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

The project uses [**Jest**](https://jestjs.io/docs/tutorial-react-native) to run unit tests. Together with [Testing Library React Native](https://testing-library.com/docs/react-native-testing-library/intro/) it allows powerful testing capabilities without use of a real device.

See also: _[WritingTests.md](./WritingTests.md)_

Find all available commands in [`package.json`](./package.json#L26-L34).

The `test` command uses CI config, so when developing use below command for optimal performance.

```
npm run test:dev # or yarn test:dev
```

Jest has a `--watch` parameter that looks for changed files and only tests your changes, in real time. There's an alias for this parameter:

```
npm run test:watch # or yarn test:watch
```

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/src
  index.tsx       # EDIT THIS
/test
  blah.test.tsx   # EDIT THIS
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings.

This is not very optimal for React-Native with Babel so we've opted for regular TypeScript build instead.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore-start -->

<!-- markdownlint-disable -->

<table>
  <tr>
    <td align="center"><a href="https://jaredpalmer.com/"><img src="https://avatars.githubusercontent.com/u/4060187?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jared Palmer</b></sub></a><br /><a href="#plugin-jaredpalmer" title="Plugin/utility libraries">🔌</a></td>
    <td align="center"><a href="https://github.com/thomashagstrom"><img src="https://avatars.githubusercontent.com/u/396545?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Hagström</b></sub></a><br /><a href="#projectManagement-thomashagstrom" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->

<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

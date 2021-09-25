# Test

<p align="center">
  <a href="#">
    <img src="https://imgur.com/PAAfWdp.png" width="100%">
  </a>
  <h3 align="center"><strong>Software Developer Intern Technical Test</strong><br></h3>
  <p align="center">
    <br />
    <a href="https://annaabsi.github.io/test/">Live preview</a>
  </p>
</p>

<p align="center">
  <a href="#">
    <img src="https://imgur.com/AeLkMEG.png" height="1" width="100%">
  </a>
</p>

## Installation

Different ways to deploy the app

### Dependencies

- nvm: [Node Version Manager](https://github.com/nvm-sh/nvm)
- yarn: [Package manager](https://yarnpkg.com/getting-started/install)

### Deploy to localhost

```bash
yarn install # install dependencies
yarn start # localhost:3000
yarn test # test
```

### Deploy to Github Pages

If you want to change the host, change the following lines in [package.json](package.json)

```json
{
  "homepage": "http://annaabsi.github.io/test",
  "...": "..."
}
```

Build the page to deploy to Github Pages.

```bash
yarn deploy # deploy to gh-pages
```

<p align="center">
  <a href="#">
    <img src="https://imgur.com/AeLkMEG.png" height="1" width="100%">
  </a>
</p>

## Changelogs and Roadmap

Changelogs stored [here](CHANGELOG.md)

### v0.1
- [x] ReactJs project start
- [x] Github Pages deploy
- [x] API: Fetch data dinamically
- [x] API: Params handler
- [x] Search bar
- [x] API: Pagination with infinite scroll
- [x] Search page: searchbar style
- [x] Landing layout
- [x] Responsive
- [x] Documentation

### v0.2 (Feedback)
- [x] Define end-points as env variables
- [x] Fix texts going out of borders
- [X] Fix colors and contrast for some texts
- [ ] Delete unused imports and variables
- [ ] Delete commented code
- [ ] Divide code in multiple components
- [ ] Delete hardcoded variables
- [ ] CSS with BEM methodology

<p align="center">
  <a href="#">
    <img src="https://imgur.com/AeLkMEG.png" height="2" width="100%">
  </a>
</p>

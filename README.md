# HiLearn website

#### To run locally

- `yarn dev` for development
- `yarn dev:ts` for development and additionally for type checking 

#### For updating production

- run `yarn build` for building static files.
- run `yarn export -o docs && cp config/* docs/`, this will export static files to `docs` folder and move configuration files rewritten by yarn
- commit the modified `docs` folder.

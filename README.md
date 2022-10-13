# HiLearn website

#### To run localy

- `yarn dev` for development
- `yarn dev:ts` for development and additionally for type checking 

#### For updating production

- run `yarn build` for building static files.
- run `yarn export -o docs`, this will export static files to `docs` folder.
- run `cp CNAME ./docs/` and `cp .nojekyll ./docs/` to move configuration files back.
- commit the modified `docs` folder.
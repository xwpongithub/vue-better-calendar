#!/bin/bash

# git pull
git pull origin master
# build
npm run build
# ADD commit
git add -A
git commit -m 'publish build'
git push origin master
# replace src/ __VERSION__
node ./build/release/replace-version.js
# publish
npm publish
# checkout dist/vue-better-calendar.js
git checkout dist/vue-better-calendar.js
git checkout master
git rebase master
git push origin master
git checkout master

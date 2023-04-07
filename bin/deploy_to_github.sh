#!/usr/bin/env bash
rm -rf dist
npm run build -- --base=/Orange-bookkeeping/
cd dist
git init
git checkout -B main
git add -A
git commit -m 'deploy'
git push -f git@github.com:shyhhh/Orange-bookkeeping.git main:preview-pages
cd -

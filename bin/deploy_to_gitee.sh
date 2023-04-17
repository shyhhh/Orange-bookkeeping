rm -rf dist
npm run build -- --base orangebk
cd dist
git init
git checkout -B main
git add -A
git commit -m 'deploy'
git push -f gitee git@gitee.com:he-honghe/orangebk.git main:preview-pages
cd -

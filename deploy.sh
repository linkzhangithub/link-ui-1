rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@github.com:linkzhangithub/link-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://linkzhangithub.github.io/link-ui-website/#/
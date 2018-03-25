#!/bin/bash
set -o nounset # Treat unset variables as an error
[  "$TRAVIS_PULL_REQUEST" != "false" ] || [  "$TRAVIS_BRANCH" != "master" ] && echo -e "\n" && exit 0

# Update submodule for main repo
git clone git://github.com/g0v/summit.g0v.tw.git
cd summit.g0v.tw
git status
git remote -v
echo "Before submodule update: `cd 2018; git describe --always`"
git submodule init
git submodule update --remote
echo "After submodule update: `cd 2018; git describe --always`"
git config user.email lawrencechou1024@gmail.com
git config user.name choznerol
git add 2018
git commit -m "update submodule '2018' to `cd 2018; git describe --always`"
git push "https://${CHOZNEROL_TOKEN}@github.com/g0v/summit.g0v.tw.git" gh-pages --verbose

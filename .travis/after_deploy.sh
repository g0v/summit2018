#!/bin/bash
[  "$TRAVIS_PULL_REQUEST" != "false" ] || [  "$TRAVIS_BRANCH" != "master" ] && echo -e "\n" && exit 0

git remote set-url origin git://github.com/g0v/summit.g0v.tw.git
git config --global user.email "lawrencechou1024@gmail.com"
git config --global user.name "choznerol"
mkdir -p ~/.ssh
cat >> ~/.ssh/config <<EOF
Host *
IdentityFile           ~/.ssh/id_rsa
StrictHostKeyChecking  no
PasswordAuthentication no
CheckHostIP            no
BatchMode              yes
EOF

# to create a deploy key and encrypt it for travis:
# ssh-keygen -f .travis/deploy-key
## add .travis/deploy-key.pub as your github project's deploy key
## make sure you git add only .travis/deploy-key.enc
# password=`cat /dev/urandom | head -c 10000 | openssl sha1`
# openssl aes-256-cbc -k "$password" -in .travis/deploy-key -a -out .travis/deploy-key.enc
# travis encrypt -r OWNER/REPONAME secret=$password
## add the result line to .travis.yml
## see also http://about.travis-ci.org/docs/user/encryption-keys/
openssl aes-256-cbc -k "$secret" -in .travis/deploy-key.enc -d -a -out ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa # this key should have push access
echo -e ">>> Current Repo:$REPO --- Travis Branch:$TRAVIS_BRANCH"

# Update submodule for main repo
git clone git://github.com/g0v/summit.g0v.tw.git
cd summit.g0v.tw
git remote
git submodule update --remote
git config user.email lawrencechou1024@gmail.com
git config user.name choznerol
git add 2018
git commit -m "update submodule '2018' to `cd 2018; git describe --always`"
git push gh-pages > /dev/null 2>&1

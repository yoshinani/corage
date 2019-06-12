#!/bin/sh
set -eu

# .envを生成
cd `dirname $0`
cp .env.example .env

# パッケージのインストール
yarn install
echo "yarn install: [ \033[0;32mOK\033[0;39m ]"

# 完了メッセージ
echo "done: [ \033[0;32msuccess\033[0;39m ]"
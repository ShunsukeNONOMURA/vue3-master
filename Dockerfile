# slim系のnodeから構築することを定義
FROM node:19.9.0-bullseye
# コンテナ内の作業ディレクトリを作成
WORKDIR /app
# プロジェクト作成後にyarn installの内容を設定するためにコピーする
COPY vue3/ ./
# パッケージ一覧(インデックス)を更新
RUN apt update && yarn install
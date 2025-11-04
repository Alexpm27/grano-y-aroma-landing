#!/usr/bin/env sh

# Abortar en caso de errores
set -e

# Construir la aplicación
npm run build

# Navegar al directorio de salida
cd dist

# Si estás desplegando en un dominio personalizado
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# Si estás desplegando en https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -

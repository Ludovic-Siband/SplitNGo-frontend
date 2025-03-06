# Utiliser une image Node.js Alpine
FROM node:23.9-alpine3.20

# Installe Chromium et ses dépendances
RUN apk add --no-cache chromium nss freetype && rm -rf /var/cache/apk/*

# Définit la variable d'environnement pour Chrome pour effectuer les tests avec Karma
ENV CHROME_BIN=/usr/bin/chromium

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json pour optimiser le cache
COPY package*.json ./

# Installer npm et Angular CLI
RUN npm install -g npm @angular/cli@latest && npm install --legacy-peer-deps && npm cache clean --force

# Vérification de l'installation
RUN node -v && npm -v && ng version

# Copier le reste du projet
COPY . .

# Exposer le port Angular
EXPOSE 4200

# Démarrer Angular avec le serveur de développement
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "1000"]

# Utiliser une image Node.js Alpine
FROM node:23.9-alpine3.20

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json pour optimiser le cache
COPY package*.json ./

# Installer npm et Angular CLI
RUN npm install -g npm @angular/cli@latest && npm install --legacy-peer-deps

# Vérification de l'installation
RUN node -v && npm -v && ng version

# Copier le reste du projet
COPY . .

# Exposer le port Angular
EXPOSE 4200

# Démarrer Angular avec le serveur de développement
CMD ["ng", "serve", "--host", "0.0.0.0"]

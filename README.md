# SplitNGo-Frontend

Ce projet utilise **Docker** et **Docker Compose** pour exécuter une application Angular en mode développement et production.

---

## 🚀 1. Prérequis
Avant de commencer, assure-toi d'avoir installé :
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## ⚙️ 2. Lancer l'application en mode développement (avec hot-reload)

En mode développement, l'application utilise un serveur Node.js avec **`npm run start`** et le hot-reload activé.

```sh
# Démarrer l'application Angular en mode développement
docker-compose --profile dev up
```
📌 L'application sera accessible sur **http://localhost:4200**

### ⏹️ **Arrêter le conteneur**
```sh
docker-compose down
```

📌 **Avantages du mode développement :**
- Code source monté en **volume** ✅
- Hot-reload automatique ✅
- Pas besoin de reconstruire l’image à chaque modification ✅

---

## 🌐 3. Lancer l'application en mode production
En mode production, l'application est compilée et servie via **Nginx** ou **http-server**.

```sh
# Construire et démarrer le conteneur en mode production
docker-compose --profile prod up --build
```
📌 L'application sera accessible sur **http://localhost:8080**

### ⏹️ **Arrêter le conteneur**
```sh
docker-compose down
```

📌 **Avantages du mode production :**
- Code Angular compilé en **mode production** ✅
- Serveur optimisé pour servir les fichiers statiques ✅

---

## 🛠 4. Commandes utiles

### 🔄 **Rebuilder une image après modification du Dockerfile**
```sh
docker-compose build
```

### 📦 **Lister les conteneurs actifs**
```sh
docker ps
```

### 🛑 **Arrêter et supprimer tous les conteneurs**
```sh
docker-compose down --volumes
```

### 🗑 **Nettoyer les images non utilisées**
```sh
docker system prune -a
```

---

## 🎯 5. Structure du projet
```
📂 angular-project/
├── 📂 src/               # Code source Angular
├── 📜 Dockerfile         # Fichier Docker pour la production
├── 📜 docker-compose.yml # Configuration Docker Compose
├── 📜 .dockerignore      # Exclusions pour Docker
├── 📜 README.md          # Ce fichier !
```

---

## 💡 6. Prochaines étapes
- Ajouter un **proxy backend** dans Nginx pour interagir avec l'API.
- Ajouter des **tests end-to-end** et les exécuter en CI/CD.

🔥 **Bon développement !** 🚀
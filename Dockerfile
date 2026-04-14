# Utilise nginx comme serveur web
FROM nginx:alpine

# Copie les fichiers dans le dossier web de nginx
COPY . /usr/share/nginx/html

# Expose le port 80
EXPOSE 80
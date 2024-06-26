# Usa la imagen oficial de Node.js LTS como base
FROM node:lts-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente de la aplicación
COPY . .

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
# Usamos la imagen oficial de Node.js 18 como base
FROM node:18

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Instalamos nodemon y las dependencias de desarrollo
RUN npm install -g nodemon

# Copiamos el código fuente al contenedor
COPY . .

# Exponemos el puerto en el que corre la app
EXPOSE 3001

# Comando para correr la aplicación con nodemon en modo módulos ES
CMD ["nodemon", "--exec", "node --loader ts-node/esm", "--watch", "src", "src/index.ts"]

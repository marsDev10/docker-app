# Usa Node.js como base
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos y dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copia el código fuente
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto
EXPOSE 3000

# Comando para ejecutar el frontend
CMD ["npm", "run", "dev", "--", "--host"]

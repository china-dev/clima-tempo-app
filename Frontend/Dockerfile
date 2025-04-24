# Usar imagem base do Node
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta que o Vite usa
EXPOSE 5173

# Rodar o servidor Vite com host 0.0.0.0 para funcionar no container
CMD ["npm", "run", "dev", "--", "--host"]

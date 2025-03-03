# Sử dụng Node.js 20-alpine làm base image  
FROM node:20-alpine  

# Set biến môi trường để ReactJS không sinh ra các cảnh báo  
ENV NODE_ENV=development  
ENV CHOKIDAR_USEPOLLING=true  

# Thiết lập thư mục làm việc bên trong container  
WORKDIR /app  

# Sao chép package.json và package-lock.json vào container  
COPY package*.json ./  

# Cài đặt các dependencies  
RUN npm install  

# Sao chép toàn bộ mã nguồn vào container  
COPY . .  

# Expose cổng 3000 cho server ReactJS chạy  
EXPOSE 3000  

# Mở terminal và khởi chạy server phát triển bằng npm  
CMD ["npm", "start"]

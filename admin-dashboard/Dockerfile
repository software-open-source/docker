# Sử dụng hình ảnh node:18-alpine thay cho phiên bản mới nhất vì nó ổn định  
FROM node:18-alpine  

# Thiết lập biến môi trường để giảm lỗi khi chạy ứng dụng  
ENV NODE_ENV=development  
ENV CHOKIDAR_USEPOLLING=true  

# Cài đặt các công cụ build cần thiết để hỗ trợ esbuild và các công cụ Node.js  
RUN apk add --no-cache build-base python3  

# Thiết lập thư mục làm việc bên trong container  
WORKDIR /app  

# Sao chép các file cấu hình của dự án (package.json và package-lock.json hoặc yarn.lock) vào container  
COPY package*.json ./  

# Cài đặt dependencies  
RUN npm install  

# Nếu bạn sử dụng yarn, thay thế bằng:  
# RUN npm install -g yarn && yarn install  

# Sao chép toàn bộ mã nguồn dự án vào container  
COPY . .  

# Nếu bạn dùng TypeScript (vite.config.ts), đảm bảo TypeScript được cài đặt:  
RUN npm install typescript --save-dev  

# Expose cổng mà ứng dụng sẽ chạy  
EXPOSE 3000  

# Khởi chạy ứng dụng Vite (dùng npm run dev)  
CMD ["npm", "run", "dev"]
import { defineConfig } from "vite";  
import react from "@vitejs/plugin-react";  
import svgr from "vite-plugin-svgr";  

export default defineConfig({  
  server: {  
    host: "0.0.0.0", // Cho phép truy cập từ bên ngoài container  
    port: 3000       // Thiết lập cổng chạy ứng dụng  
  },  
  plugins: [  
    react(),  
    svgr({  
      svgrOptions: {  
        icon: true,  
        exportType: "named",  
        namedExport: "ReactComponent",  
      },  
    }),  
  ],  
});
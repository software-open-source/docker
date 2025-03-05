import { defineConfig } from "vite";  
import react from "@vitejs/plugin-react";  
import svgr from "vite-plugin-svgr";  

export default defineConfig({  
  server: {  
    host: "0.0.0.0", // Cho phép truy cập container từ mọi IP  
    port: 3000       // Ứng dụng chạy trên cổng 3000 trong container  
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
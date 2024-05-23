import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    base:'./',
    server: {
        host: true,
        port: 5555,
        cors: true // Lägg till denna rad för att aktivera CORS  tillåta åtkomst 
    }
})

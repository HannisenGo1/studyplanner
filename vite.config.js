import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    base:'./',
    server: {
        host: true,
        port: 5555,
    },
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './tests/setup.js',
     
    
    } 
    })

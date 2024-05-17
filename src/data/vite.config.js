import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc';


export default defineConfig({
    plugIns: [react()],
    baseUrl: './',
    server: {
        host:true,
        port:5555
    }
})
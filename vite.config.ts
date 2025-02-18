import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // Diretório de saída
    lib: {
      entry: './src/index.tsx', // Ponto de entrada do seu pacote
      name: 'Alert', // Nome global da biblioteca (se usado em um ambiente sem módulos)
      fileName: 'index', // Nome do arquivo de saída
      formats: ['es', 'cjs'], // Formatos de módulo (ESM e CommonJS)
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Dependências externas
      output: {
        globals: {
          react: 'React', // Mapeia 'react' para a variável global 'React'
          'react-dom': 'ReactDOM', // Mapeia 'react-dom' para a variável global 'ReactDOM'
        },
      },
    },
  },
});
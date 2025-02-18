import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts'; // Plugin para gerar arquivos .d.ts

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({ // Configuração do plugin para gerar arquivos .d.ts
      insertTypesEntry: true, // Adiciona entradas de tipos no package.json
      include: ['src'], // Inclui todos os arquivos da pasta src
      outDir: 'dist/types', // Diretório de saída para os arquivos .d.ts
    }),
  ],
  build: {
    outDir: 'dist', // Diretório de saída
    lib: {
      entry: './src/index.tsx', // Ponto de entrada do seu pacote
      name: 'Alert', // Nome global da biblioteca
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
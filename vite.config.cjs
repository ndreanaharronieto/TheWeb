const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './Pages/about.html',
        bio: './Pages/bio.html',
        colab: './Pages/colab.html',
        eventos: './Pages/eventos.html',
        proximasFechas: './Pages/proximasFechas.html',
        inserter: './Scripts/inserter.js',
        // ...
        // List all files you want in your build
      }
    }
  }
})
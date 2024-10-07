<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
>>>>>>> 732fa8045be398516e730c411b13aed6e9a23be4

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
<<<<<<< HEAD
    outDir: 'dist', // Ensure this matches the publish directory in netlify.toml
  },
});
=======
    outDir: "dist",
  },
});
>>>>>>> 732fa8045be398516e730c411b13aed6e9a23be4

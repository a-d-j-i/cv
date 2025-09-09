// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import pdf from 'astro-pdf'; // Import the integration

// https://astro.build/config
export default defineConfig({
    site: 'https://a-d-ji.github.io',
    base: '/cv',
    integrations: [pdf({
        pages: {"/cv/text": "cv.pdf"},
        launch: {args: ['--no-sandbox']}
    })],
    vite: {
        plugins: [tailwindcss()]
    }
});
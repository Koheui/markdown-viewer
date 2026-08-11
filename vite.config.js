import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'en/index.html'),
        guideIndex: resolve(__dirname, 'guide/index.html'),
        guideMarkdownSyntax: resolve(__dirname, 'guide/markdown-syntax/index.html'),
        guideMarkdownTable: resolve(__dirname, 'guide/markdown-table/index.html'),
        guideMarkdownLinebreak: resolve(__dirname, 'guide/markdown-linebreak/index.html'),
        guideMarkdownLinkImage: resolve(__dirname, 'guide/markdown-link-image/index.html'),
        guideWhatIsMarkdown: resolve(__dirname, 'guide/what-is-markdown/index.html'),
        guideMarkdownList: resolve(__dirname, 'guide/markdown-list/index.html'),
        guideMarkdownCodeBlock: resolve(__dirname, 'guide/markdown-code-block/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
      },
    },
  },
});

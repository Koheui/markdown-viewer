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
        guideMarkdownImageSize: resolve(__dirname, 'guide/markdown-image-size/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        guideMarkdownQuote: resolve(__dirname, 'guide/markdown-quote/index.html'),
        guideMarkdownTextDecoration: resolve(__dirname, 'guide/markdown-text-decoration/index.html'),
        guideExcelToMarkdown: resolve(__dirname, 'guide/excel-to-markdown/index.html'),
        guideMarkdownTableWidth: resolve(__dirname, 'guide/markdown-table-width/index.html'),
        guideNotionMarkdown: resolve(__dirname, 'guide/notion-markdown/index.html'),
        guideVscodeMarkdownPreview: resolve(__dirname, 'guide/vscode-markdown-preview/index.html'),
        guideMarkdownToHtml: resolve(__dirname, 'guide/markdown-to-html/index.html'),
        guideHowToWriteReadme: resolve(__dirname, 'guide/how-to-write-readme/index.html'),
      },
    },
  },
});

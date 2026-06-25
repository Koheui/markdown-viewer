export const fontOptions = [
  { id: 'system-sans', name: 'ゴシック体 (システム)', value: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif" },
  { id: 'system-serif', name: '明朝体 (システム)', value: "Georgia, 'Times New Roman', 'Hiragino Mincho ProN', 'Yu Mincho', YuMincho, serif" },
  { id: 'noto-sans-jp', name: 'Noto Sans JP (Google)', value: "'Noto Sans JP', sans-serif", importUrl: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap' },
  { id: 'noto-serif-jp', name: 'Noto Serif JP (Google)', value: "'Noto Serif JP', serif", importUrl: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;700&display=swap' },
  { id: 'm-plus-1p', name: 'M PLUS 1p (Google)', value: "'M PLUS 1p', sans-serif", importUrl: 'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300;400;500;700&display=swap' },
  { id: 'kosugi-maru', name: 'Kosugi Maru (Google)', value: "'Kosugi Maru', sans-serif", importUrl: 'https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap' }
];

export const defaultLightStyles = {
  global: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif",
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    accentColor: '#6366f1'
  },
  h1: {
    fontSize: 32, // px
    color: '#111827',
    fontWeight: '700',
    marginBottom: 16, // px
    borderBottomShow: true,
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 2 // px
  },
  h2: {
    fontSize: 24, // px
    color: '#1f2937',
    fontWeight: '600',
    marginBottom: 12, // px
    borderBottomShow: true,
    borderBottomColor: '#e5e7eb',
    borderBottomWidth: 1 // px
  },
  h3: {
    fontSize: 20, // px
    color: '#374151',
    fontWeight: '600',
    marginBottom: 8 // px
  },
  p: {
    fontSize: 16, // px
    color: '#4b5563',
    fontWeight: '400',
    marginBottom: 16, // px
    lineHeight: 1.7
  },
  strong: {
    color: '#000000',
    fontWeight: '700'
  }
};

export const defaultDarkStyles = {
  global: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif",
    backgroundColor: '#18181b', // zinc-900 (gentle dark background)
    textColor: '#e4e4e7', // zinc-200
    accentColor: '#6366f1'
  },
  h1: {
    fontSize: 32, // px
    color: '#f4f4f5', // zinc-100
    fontWeight: '700',
    marginBottom: 16, // px
    borderBottomShow: true,
    borderBottomColor: '#27272a', // zinc-800
    borderBottomWidth: 2 // px
  },
  h2: {
    fontSize: 24, // px
    color: '#e4e4e7', // zinc-200
    fontWeight: '600',
    marginBottom: 12, // px
    borderBottomShow: true,
    borderBottomColor: '#27272a',
    borderBottomWidth: 1 // px
  },
  h3: {
    fontSize: 20, // px
    color: '#d4d4d8', // zinc-300
    fontWeight: '600',
    marginBottom: 8 // px
  },
  p: {
    fontSize: 16, // px
    color: '#a1a1aa', // zinc-400
    fontWeight: '400',
    marginBottom: 16, // px
    lineHeight: 1.7
  },
  strong: {
    color: '#ffffff',
    fontWeight: '700'
  }
};

export const defaultStyles = defaultLightStyles;


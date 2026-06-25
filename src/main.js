import './style.css';
import { marked } from 'marked';
import { 
  createIcons, 
  FileText, 
  RotateCcw, 
  Sun, 
  Moon, 
  Edit3, 
  Sliders, 
  Eye, 
  Copy, 
  Code, 
  Type, 
  Bold, 
  Underline, 
  Space, 
  Palette, 
  CheckCircle2,
  LayoutGrid,
  FileUp
} from 'lucide';
import { fontOptions, defaultStyles, defaultLightStyles, defaultDarkStyles } from './defaultStyles.js';

// ==========================================================================
// Default Sample Markdown (Japanese)
// ==========================================================================
const sampleMarkdown = `# 【見やすさ劇的改善】Markdown（マークダウン）が読みづらい？ブログや資料を見やすく綺麗に整えるデザインのコツ

Notionやブログ、社内ドキュメントを**Markdown（マークダウン）**で書いているけれど、「文字がぎっしり詰まっていて読みづらい」「なぜか単調で内容が頭に入ってこない」と感じていませんか？
実は、デフォルト状態のMarkdownは余白や装飾が不足していることが多く、それが読者の途中離脱や理解の妨げ（直帰率の悪化）に繋がっています。

この「**Markdown Viewer**」を使えば、フォントの種類やサイズ、行間、見出しのデザインをスライダーを動かすだけで直感的に調整でき、あなたの文章を劇的に読みやすく改善できます。

---

## 📝 マークダウン（Markdown）とは？基礎知識と書き方ガイド

### マークダウンの基本概要
マークダウン（Markdown）とは、文書を書きやすく、読みやすくするために開発された**軽量マークアップ言語**です。
1991年に誕生したHTML（HyperText Markup Language）はWebページを記述するのに不可欠ですが、タグ（\`<h1>\`や\`<p>\`など）の入力が多く、人間がテキストエディタで直接執筆するには複雑すぎました。
そこで2004年、ジョン・グルーバー（John Gruber）とアーロン・スワーツ（Aaron Swartz）によって、「プレーンテキストのままでも読みやすく、かつ簡単にHTMLに変換できる形式」としてマークダウンが設計されました。

現在では、以下のような多くのプラットフォームやサービスで標準的なドキュメント記述方法として採用されています。
* **Notion（ノーション）**: 社内ドキュメントや個人ナレッジの整理・編集
* **GitHub（ギットハブ）**: \`README.md\` によるソフトウェアプロジェクトの説明・仕様記述
* **Zenn / Qiita**: エンジニア向けの技術ブログ記事執筆・共有
* **はてなブログ / WordPress**: 一般ブログのMarkdown執筆モード
* **Slack / Discord / Teams**: チャットツール内での簡易的な書式装飾・コード共有

### なぜマークダウンが使われるのか？（5つの圧倒的メリット）
1. **キーボードだけで素早く書式設定ができる**: マウスを操作して太字ボタンをクリックしたり、見出しタグを手入力したりする必要がありません。\`#\` や \`*\` などの簡単な記号を付けるだけで瞬時に装飾が定義されます。
2. **プレーンテキストなので互換性が極めて高い**: 特定のワープロソフト（Microsoft Wordなど）に依存しないため、どのようなOS（Mac, Windows, Linux, iOS, Android）やテキストエディタでも開いて編集・閲覧ができます。
3. **HTMLへの変換・出力が非常に容易**: パーサーと呼ばれる解析プログラムを通すことで、一瞬でクリーンなHTMLコードに変換できます。ブログの下書きから本番反映までがスムーズです。
4. **執筆（コンテンツ作成）に集中できる**: レイアウト調整の細かなパラメータに気を取られることなく、プレーンテキストの執筆そのものに意識を集中させることができます。
5. **記述が視覚的で直感的にわかりやすい**: ソースコードのままでも、例えば箇条書きリストなら \`*\` が付いているなど、人間がパッと見て文書の構造（レイアウト）を認識しやすくなっています。

### 生成AI活用・LLM・開発環境（IDE）におけるマークダウンの重要性
近年、ChatGPT、Claude、GeminiといったLLM（大規模言語モデル）や、各種**「生成AIツール」**の台頭に伴い、**「AI活用」**や**「AIプログラミング」**の現場においてマークダウンの価値が急上昇しています。
特に、GitHub Copilot、Cursor、WindsurfなどのAIコーディングアシスタントや、高度な自律型**「AIエージェント」**を利用する開発者にとって、マークダウンは必須の基礎スキルとなっています。

* **プロンプトエンジニアリングでの構造化**: 生成AIへのプロンプトテンプレートやシステム指示（System Instructions）を記述する際、指示内容、前提条件、入力コンテキスト、出力形式（フォーマット）をマークダウンの見出しやリスト、引用（>）を用いて整理することで、AIの理解度が劇的に向上し、意図通りの高精度な回答を引き出せます。
* **RAG（検索拡張生成）やコンテキストインジェクションにおけるトークン節約**: マークダウンはHTMLやJSON、XMLと比較して非常に軽量なテキスト形式です。そのため、AIモデルに読み込ませる「コンテキスト（背景知識）」の文字数を大幅に削減でき、LLMのコンテキストウィンドウの制限やAPI利用時のトークン料金（Token Cost）を効率的に節約できます。
* **AI出力結果（コード・長文テキスト）の標準形式**: 各種対話型AIやエージェントシステムが生成するプログラムコードやドキュメントは、そのほとんどがマークダウン形式で返されます。本ツールを使用すれば、AIが吐き出したマークダウン記号付きのRawテキストを瞬時に人間が読みやすい「美しいレイアウトのプレビュー」としてレンダリング・確認できます。
* **モダンIDE（統合開発環境）やエディタとの高い親和性**: VS Code（Visual Studio Code）、Cursor、Windsurf、XcodeなどのAIエディタやIDEでは、マークダウンが標準のドキュメント記述用ファイル（\`.md\`）として採用されています。開発の仕様書、GitHubのREADME、プロンプト用メモをIDE内でシームレスに編集・プレビュー表示する上で、共通言語となっています。

### マークダウンの主要な書き方・構文（チートシート）
マークダウンの基本的な書き方は非常にシンプルです。以下は日常的に頻出する代表的な構文です。

#### 1. 見出し（Headers）
行頭に \`#\` を記述し、その後に半角スペースを空けます。\`#\` の数によって見出しレベル（H1〜H6）を指定します。
* \`# 見出し1\` (HTMLの \`<h1>\` に対応。ページタイトルなどに使用)
* \`## 見出し2\` (HTMLの \`<h2>\` に対応。大見出し・章見出しに使用)
* \`### 見出し3\` (HTMLの \`<h3>\` に対応。中見出し・小見出しに使用)

#### 2. 強調（太字・イタリック）
強調したいテキストの前後に特定の記号を配置します。
* \`**太字**\`（星マーク2つで挟むとボールド体になります。HTMLの \`<strong>\`）
* \`*斜体*\`（星マーク1つで挟むとイタリック体になります。HTMLの \`<em>\`）

#### 3. リスト（箇条書き）
行頭に \`*\`、\`-\`、または \`+\` を書き、半角スペースを空けることで箇条書きリストを作成できます。
* 項目1
* 項目2
  * ネスト（インデントをあけることで、リスト構造を深くできます）

#### 4. 番号付きリスト
行頭に \`1.\` などの数字とピリオドを書き、半角スペースを空けます。
1. 第一ステップ
2. 第二ステップ

#### 5. 引用（Blockquotes）
他サイトの文章や参考文献を引用する場合、行頭に \`>\` を記述します。
> これは引用文です。段落をまたいだ長文の解説文や、著名人の言葉、利用規約などの表示によく使われます。

#### 6. コードブロック（Code Blocks）
プログラムのソースコードやコマンドを等幅フォントで綺麗に表示できます。バッククォート（\\\`）3つで上下を囲みます。
\`\`\`javascript
// JavaScriptの例
console.log("Hello, Markdown!");
\`\`\`

#### 7. リンク（Links）と画像（Images）
* リンクの形式: \`[表示テキスト](URL)\`
* 画像の形式: \`![代替テキスト](画像URL)\`

#### 8. テーブル（表）
縦棒（\`|\`）とハイフン（\`-\`）を組み合わせて簡素なテーブルを表現できます。
| 機能名 | レンダリング対応 | 特徴 |
|---|---|---|
| スライダー調整 | リアルタイム | 直感的 |
| CSS書き出し | ワンクリック | ブログ貼付用 |

---

## 💻 インストール不要！Chrome拡張機能「Markdown Viewer」との違いと強み

Markdownファイルをブラウザで閲覧・プレビューする方法として、Google Chromeの拡張機能「Markdown Viewer」などのプラグインを使う方法が知られています。しかし、これらの拡張機能にはローカルファイルの読み込み権限設定が必要だったり、ブラウザごとにインストールする手間がかかるというハードルがあります。

本ツール「**Markdown Viewer (markdown-viewer.net)**」は、それらの拡張機能と異なり、以下のような圧倒的な手軽さを備えた**完全オンライン型のWebアプリケーション**です。

* **インストール不要・完全無料**: 面倒な拡張機能のインストールや、アドオンの追加設定は一切必要ありません。Webサイトにアクセスするだけですぐに使えます。
* **コピペ＆ドラッグするだけで即時確認**: 左側のエディターにMarkdownテキストを直接貼り付ける（コピペする）か、ローカルの \`.md\` ファイルを画面にドラッグ＆ドロップするだけで、その場で瞬時に美しくレンダリングされます。
* **デザインの自由な調整が可能**: 拡張機能は通常、あらかじめ用意されたテーマ（CSS）を適用するだけですが、本ツールはスライダーを用いてフォントサイズ、行間、余白などを直感的に細かくカスタマイズできます。
* **マルチデバイス対応**: PCだけでなく、タブレットやスマートフォン（iPhone/Android）など、Chrome拡張機能が使えないモバイルブラウザからでも、貼り付けるだけで簡単に見栄えを確認できます。

手軽に・その場でサクッとMarkdownを確認したい時や、ブログやQiita、Zennに載せる前のプレビュー調整ツールとして最適です。

---

## 🎨 Markdown Viewer でできること

1. **リアルタイム見やすさ確認**: 左側のエディターに入力した文章が、即座に右側のプレビューに美しいレイアウトで反映されます。
2. **直感的な余白・サイズ調整**: 中央（スマホでは「スタイル」タブ）のコントローラーで、\`H1\` \`H2\` \`H3\` \`本文(p)\` \`太字(strong)\` のフォントサイズや行間、下余白を自由にスライド調整できます。
3. **見出しの境界線デザイン**: \`H1\` \`H2\` にスッキリとした下線（境界線）を表示・カスタマイズでき、セクションの区切りを視覚的にわかりやすくします。
4. **フォントで全体の印象をチェンジ**: Noto Sans JP などの読みやすい和文フォントから、洗練された英語フォントまで、全体の書体を一瞬で切り替えられます。
5. **ブログやサイトへの簡単適用**: デザインが完成したら、「CSSコピー」または「HTMLコピー」をクリックしてブログ（はてなブログ、WordPress、Qiita、Zennなど）に貼り付けるだけで反映できます。

---

## 🧠 なぜデフォルトのMarkdownは読みづらいのか？（3つの原因）

文章の読みやすさは、Webサイトの成果（滞在時間やコンバージョン率）に直結する重要なSEO要素です。デフォルトの見た目が読みづらいのには以下の原因があります。

### 1. 見出しの境界線が曖昧
文章の段落（セクション）が切り替わる際、見出しの文字サイズが本文とあまり変わらなかったり、仕切り線がなかったりすると、読者はどこがテーマの区切りなのか迷子になってしまいます。

### 2. 余白（マージン）の不足
段落と段落の間や、見出しの上の余白が詰まっていると、目が滑ってしまい、読者はストレスを感じて読むのをやめてしまいます（直帰や離脱の原因）。

### 3. フォントが用途に合っていない
硬すぎるゴシック体や標準 of システムフォントのままだと、文章全体が冷たい印象になり、長文を読み進める意欲が低下しがちです。

---

## 🚀 見やすさを劇的にアップさせる3つのデザイン黄金比

本ツールを使って、以下の「見やすさの黄金ルール」を取り入れてみましょう。

* **本文のフォントサイズと行高**: 本文は \`16px\`、行高は \`1.8\`（文字の高さの1.8倍）に設定するのが、最も目が疲れにくいとされています。
* **見出しの下線装飾**: \`H1\` や \`H2\` の下に線を引き、少しフォントを太くすることで、読者が「ここから新しいテーマが始まる」と瞬時に理解できます。
* **余白を十分に空ける**: 見出しの下余白（Margin Bottom）を \`16px〜24px\` 程度あけることで、テキストのブロックが綺麗に区切られます。

\`\`\`css
/* 見やすさを追求したCSSデザインの例 */
.markdown-body h1 {
  font-size: 28px;
  color: #6366f1;
  border-bottom: 3px solid #6366f1;
  margin-bottom: 20px;
}
.markdown-body p {
  font-size: 16px;
  line-height: 1.8;
  color: #f3f4f6;
}
\`\`\`

> **💡 ワンポイントアドバイス**:
> 読みやすさは、読者の信頼と滞在時間の増加に直結します。ぜひ、様々なパラメータを動かして「最高に読みやすいスタイル」を見つけてください！
`;

// ==========================================================================
// App State Variables
// ==========================================================================
let currentStyles = JSON.parse(JSON.stringify(defaultStyles));
let activeElementTag = 'h1'; // Default selected control tab is H1
let appTheme = 'dark-theme';
let leftWidth = 50; // Percentage width for Editor panel on desktop
let rightWidth = 50; // Percentage width for Preview panel on desktop
let bottomHeight = 280; // Pixel height for Bottom Styles panel on desktop

// ==========================================================================
// Marked Parser Options Setup
// ==========================================================================
marked.setOptions({
  gfm: true,
  breaks: true,
  headerIds: false,
  mangle: false
});

// ==========================================================================
// Initialize Lucide Vector Icons
// ==========================================================================
function initIcons() {
  createIcons({
    icons: {
      FileText,
      RotateCcw,
      Sun,
      Moon,
      Edit3,
      Sliders,
      Eye,
      Copy,
      Code,
      Type,
      Bold,
      Underline,
      Space,
      Palette,
      CheckCircle2,
      LayoutGrid,
      FileUp
    }
  });
}

// ==========================================================================
// Local Storage Persistence Functions
// ==========================================================================
function saveState() {
  localStorage.setItem('md_styler_text', document.getElementById('markdown-input').value);
  localStorage.setItem('md_styler_styles', JSON.stringify(currentStyles));
  localStorage.setItem('md_styler_theme', appTheme);
  localStorage.setItem('md_styler_panel_sizes', JSON.stringify({ leftWidth, rightWidth, bottomHeight }));
}

function loadState() {
  const savedText = localStorage.getItem('md_styler_text');
  const savedStyles = localStorage.getItem('md_styler_styles');
  const savedTheme = localStorage.getItem('md_styler_theme');
  const savedSizes = localStorage.getItem('md_styler_panel_sizes');

  // Load input text
  document.getElementById('markdown-input').value = (savedText && savedText.trim()) ? savedText : sampleMarkdown;

  // Load theme preference first to determine base styles
  if (savedTheme) {
    appTheme = savedTheme;
  } else {
    appTheme = 'dark-theme';
  }

  const baseDefault = appTheme === 'dark-theme' ? defaultDarkStyles : defaultLightStyles;

  // Load custom styles state
  if (savedStyles) {
    try {
      currentStyles = JSON.parse(savedStyles);
      // Ensure missing structure properties from default are filled (in case schema updates)
      Object.keys(baseDefault).forEach(tag => {
        if (!currentStyles[tag]) {
          currentStyles[tag] = JSON.parse(JSON.stringify(baseDefault[tag]));
        } else {
          Object.keys(baseDefault[tag]).forEach(prop => {
            if (currentStyles[tag][prop] === undefined) {
              currentStyles[tag][prop] = baseDefault[tag][prop];
            }
          });
        }
      });
    } catch (e) {
      console.error('Error parsing saved styles, fallback to default', e);
      currentStyles = JSON.parse(JSON.stringify(baseDefault));
    }
  } else {
    currentStyles = JSON.parse(JSON.stringify(baseDefault));
  }

  // Ensure colors are properly synced with theme (cleans up stale cached/localstorage light styles in dark mode)
  syncColorsWithTheme(appTheme);

  // Load resizable columns and panels sizes
  if (savedSizes) {
    try {
      const parsed = JSON.parse(savedSizes);
      leftWidth = parsed.leftWidth || 50;
      rightWidth = parsed.rightWidth || 50;
      bottomHeight = parsed.bottomHeight || 280;
    } catch (e) {
      console.error('Error parsing saved columns, fallback to default', e);
    }
  }
}

// ==========================================================================
// CSS Generation Logic
// ==========================================================================
function generateCSS() {
  const styles = currentStyles;
  const fontObj = fontOptions.find(f => f.value === styles.global.fontFamily) || fontOptions[0];
  const fontValue = fontObj.value;

  let css = `/* ==========================================
   Generated by Markdown Preview Styler
   ========================================== */
.markdown-body {
  font-family: ${fontValue};
  line-height: 1.8;
  background-color: ${styles.global.backgroundColor || '#ffffff'};
  color: ${styles.global.textColor || '#1f2937'};
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
`;

  // H1
  css += `.markdown-body h1 {
  font-size: ${styles.h1.fontSize}px;
  color: ${styles.h1.color};
  font-weight: ${styles.h1.fontWeight};
  margin-bottom: ${styles.h1.marginBottom}px;
  border-bottom: ${styles.h1.borderBottomShow ? `${styles.h1.borderBottomWidth}px solid ${styles.h1.borderBottomColor}` : 'none'};
}
`;

  // H2
  css += `.markdown-body h2 {
  font-size: ${styles.h2.fontSize}px;
  color: ${styles.h2.color};
  font-weight: ${styles.h2.fontWeight};
  margin-bottom: ${styles.h2.marginBottom}px;
  border-bottom: ${styles.h2.borderBottomShow ? `${styles.h2.borderBottomWidth}px solid ${styles.h2.borderBottomColor}` : 'none'};
}
`;

  // H3
  css += `.markdown-body h3 {
  font-size: ${styles.h3.fontSize}px;
  color: ${styles.h3.color};
  font-weight: ${styles.h3.fontWeight};
  margin-bottom: ${styles.h3.marginBottom}px;
}
`;

  // P
  css += `.markdown-body p {
  font-size: ${styles.p.fontSize}px;
  color: ${styles.p.color};
  font-weight: ${styles.p.fontWeight};
  margin-bottom: ${styles.p.marginBottom}px;
  line-height: ${styles.p.lineHeight};
}
`;

  // Strong
  css += `.markdown-body strong {
  color: ${styles.strong.color};
  font-weight: ${styles.strong.fontWeight};
}
`;

  return css;
}

// Apply styles dynamically into the document <style> block
function applyStyles() {
  const dynamicStyleTag = document.getElementById('dynamic-preview-styles');
  dynamicStyleTag.innerHTML = generateCSS();

  // Apply Accent Color variables dynamically
  const accentHex = currentStyles.global.accentColor || (appTheme === 'light-theme' ? '#4f46e5' : '#6366f1');
  applyAccentColor(accentHex);

  // Load WebFont dynamically if Google font
  const currentFont = fontOptions.find(f => f.value === currentStyles.global.fontFamily);
  const webfontLink = document.getElementById('dynamic-webfont');
  if (currentFont && currentFont.importUrl) {
    if (webfontLink.href !== currentFont.importUrl) {
      webfontLink.href = currentFont.importUrl;
    }
  } else {
    webfontLink.href = '';
  }
}

// ==========================================================================
// Live Render Markdown Function
// ==========================================================================
function renderMarkdown() {
  const inputVal = document.getElementById('markdown-input').value;
  const outputEl = document.getElementById('preview-content');
  outputEl.innerHTML = marked.parse(inputVal);
}

// ==========================================================================
// Interactive Elements Highlights (Pulse Effect)
// ==========================================================================
let pulseTimeout = null;
function triggerPulseHighlight(element) {
  // Clear any active timeouts to prevent collision
  if (pulseTimeout) clearTimeout(pulseTimeout);

  // Identify targets in preview (like '#preview-content h1', etc.)
  const targets = document.querySelectorAll(`#preview-content ${element}`);
  
  targets.forEach(el => {
    el.classList.remove('preview-pulse-active');
    // Force a browser reflow to reset CSS transition animations
    void el.offsetWidth;
    el.classList.add('preview-pulse-active');
  });

  pulseTimeout = setTimeout(() => {
    targets.forEach(el => {
      el.classList.remove('preview-pulse-active');
    });
  }, 850);
}

// ==========================================================================
// Sync Controllers UI with Current Styles state
// ==========================================================================
function updateControlsUI() {
  const settings = currentStyles[activeElementTag];
  if (!settings) return;

  // Dropdown Font Family Selector (global)
  document.getElementById('style-font-family').value = currentStyles.global.fontFamily;

  // Global Accent Color UI Sync
  const accentColor = currentStyles.global.accentColor || (appTheme === 'light-theme' ? '#4f46e5' : '#6366f1');
  document.getElementById('style-accent-color').value = accentColor;
  document.getElementById('style-accent-color-hex').value = accentColor.toUpperCase();

  // Global Canvas Background Color UI Sync
  const bgColor = currentStyles.global.backgroundColor || '#ffffff';
  document.getElementById('style-bg-color').value = bgColor;
  document.getElementById('style-bg-color-hex').value = bgColor.toUpperCase();

  // Font Size (Show/Hide & Set value)
  if (settings.fontSize !== undefined) {
    document.getElementById('group-font-size').style.display = 'flex';
    document.getElementById('style-font-size').value = settings.fontSize;
    document.getElementById('val-font-size').textContent = `${settings.fontSize}px`;
  } else {
    document.getElementById('group-font-size').style.display = 'none';
  }

  // Color picker
  if (settings.color !== undefined) {
    document.getElementById('group-color').style.display = 'flex';
    document.getElementById('style-color').value = settings.color;
    document.getElementById('style-color-hex').value = settings.color.toUpperCase();
  } else {
    document.getElementById('group-color').style.display = 'none';
  }

  // Font weights
  if (settings.fontWeight !== undefined) {
    document.getElementById('group-font-weight').style.display = 'flex';
    const btns = document.querySelectorAll('#style-font-weight .btn-toggle');
    btns.forEach(btn => {
      if (btn.dataset.weight === settings.fontWeight.toString()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  } else {
    document.getElementById('group-font-weight').style.display = 'none';
  }

  // Margin Bottom
  if (settings.marginBottom !== undefined) {
    document.getElementById('group-margin-bottom').style.display = 'flex';
    document.getElementById('style-margin-bottom').value = settings.marginBottom;
    document.getElementById('val-margin-bottom').textContent = `${settings.marginBottom}px`;
  } else {
    document.getElementById('group-margin-bottom').style.display = 'none';
  }

  // Border Bottom Settings (H1, H2 only)
  if (settings.borderBottomShow !== undefined) {
    document.getElementById('group-border-settings').style.display = 'flex';
    
    const showCheckbox = document.getElementById('style-border-show');
    showCheckbox.checked = settings.borderBottomShow;

    const detailsBlock = document.getElementById('border-details-fields');
    if (settings.borderBottomShow) {
      detailsBlock.classList.add('show');
    } else {
      detailsBlock.classList.remove('show');
    }

    document.getElementById('style-border-color').value = settings.borderBottomColor;
    document.getElementById('style-border-color-hex').value = settings.borderBottomColor.toUpperCase();
    document.getElementById('style-border-width').value = settings.borderBottomWidth;
    document.getElementById('val-border-width').textContent = `${settings.borderBottomWidth}px`;
  } else {
    document.getElementById('group-border-settings').style.display = 'none';
  }
}

// ==========================================================================
// Toast Notifications (Bounce Anim)
// ==========================================================================
let toastTimeout1 = null;
let toastTimeout2 = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');

  msgEl.textContent = message;

  // Clear running timeouts & classes
  if (toastTimeout1) clearTimeout(toastTimeout1);
  if (toastTimeout2) clearTimeout(toastTimeout2);
  toast.classList.remove('show', 'hide');
  
  // Force Reflow
  void toast.offsetWidth;

  // Bounce in
  toast.classList.add('show');

  // Queue bounce out after 2.5s
  toastTimeout1 = setTimeout(() => {
    toast.classList.add('hide');
    toastTimeout2 = setTimeout(() => {
      toast.classList.remove('show', 'hide');
    }, 350); // Matches CSS transition duration
  }, 2300);
}

// ==========================================================================
// Event Listeners Binding
// ==========================================================================
function bindEvents() {
  // 1. Textarea direct editing event -> Instant sync
  const editor = document.getElementById('markdown-input');
  editor.addEventListener('input', () => {
    renderMarkdown();
    saveState();
  });

  // 2. Global Font Family Selector dropdown change
  const fontDropdown = document.getElementById('style-font-family');
  fontDropdown.addEventListener('change', (e) => {
    currentStyles.global.fontFamily = e.target.value;
    applyStyles();
    saveState();
    triggerPulseHighlight(activeElementTag);
  });

  // 2b. Global Accent Color Picker change
  const accentColorPicker = document.getElementById('style-accent-color');
  const accentColorHex = document.getElementById('style-accent-color-hex');

  accentColorPicker.addEventListener('input', (e) => {
    const hex = e.target.value;
    currentStyles.global.accentColor = hex;
    accentColorHex.value = hex.toUpperCase();
    applyStyles();
    saveState();
  });

  accentColorHex.addEventListener('input', (e) => {
    let hex = e.target.value;
    if (hex.charAt(0) !== '#') hex = '#' + hex;
    if (/^#[0-9A-F]{6}$/i.test(hex) || /^#[0-9A-F]{3}$/i.test(hex)) {
      currentStyles.global.accentColor = hex;
      accentColorPicker.value = hex;
      applyStyles();
      saveState();
    }
  });

  // 2c. Global Canvas Background Color Picker change
  const bgColorPicker = document.getElementById('style-bg-color');
  const bgColorHex = document.getElementById('style-bg-color-hex');

  bgColorPicker.addEventListener('input', (e) => {
    const hex = e.target.value;
    currentStyles.global.backgroundColor = hex;
    bgColorHex.value = hex.toUpperCase();
    applyStyles();
    saveState();
  });

  bgColorHex.addEventListener('input', (e) => {
    let hex = e.target.value;
    if (hex.charAt(0) !== '#') hex = '#' + hex;
    if (/^#[0-9A-F]{6}$/i.test(hex) || /^#[0-9A-F]{3}$/i.test(hex)) {
      currentStyles.global.backgroundColor = hex;
      bgColorPicker.value = hex;
      applyStyles();
      saveState();
    }
  });

  // 3. Elements selector tabs click (H1, H2, H3, p, strong)
  const tabs = document.querySelectorAll('.element-selector .selector-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      
      activeElementTag = e.target.dataset.element;
      updateControlsUI();
      triggerPulseHighlight(activeElementTag);
    });
  });

  // 4. Style Control Inputs Events (Sliders / Color / Weights)
  
  // Font Size Slider
  const fontSizeSlider = document.getElementById('style-font-size');
  fontSizeSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    currentStyles[activeElementTag].fontSize = val;
    document.getElementById('val-font-size').textContent = `${val}px`;
    applyStyles();
    saveState();
  });
  fontSizeSlider.addEventListener('change', () => {
    triggerPulseHighlight(activeElementTag);
  });

  // Color Pickers & Hex Text Fields Sync
  const colorPicker = document.getElementById('style-color');
  const colorHexInput = document.getElementById('style-color-hex');

  colorPicker.addEventListener('input', (e) => {
    const hex = e.target.value;
    currentStyles[activeElementTag].color = hex;
    colorHexInput.value = hex.toUpperCase();
    applyStyles();
    saveState();
  });
  colorPicker.addEventListener('change', () => {
    triggerPulseHighlight(activeElementTag);
  });

  colorHexInput.addEventListener('input', (e) => {
    let hex = e.target.value;
    if (hex.charAt(0) !== '#') hex = '#' + hex;
    
    // Validate HEX color format (#FFF or #FFFFFF)
    if (/^#[0-9A-F]{6}$/i.test(hex) || /^#[0-9A-F]{3}$/i.test(hex)) {
      currentStyles[activeElementTag].color = hex;
      colorPicker.value = hex;
      applyStyles();
      saveState();
    }
  });
  colorHexInput.addEventListener('change', () => {
    triggerPulseHighlight(activeElementTag);
  });

  // Font Weight button triggers
  const weightButtons = document.querySelectorAll('#style-font-weight .btn-toggle');
  weightButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      weightButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      const weight = e.target.dataset.weight;
      currentStyles[activeElementTag].fontWeight = weight;
      applyStyles();
      saveState();
      triggerPulseHighlight(activeElementTag);
    });
  });

  // Margin Bottom Slider
  const marginSlider = document.getElementById('style-margin-bottom');
  marginSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    currentStyles[activeElementTag].marginBottom = val;
    document.getElementById('val-margin-bottom').textContent = `${val}px`;
    applyStyles();
    saveState();
  });
  marginSlider.addEventListener('change', () => {
    triggerPulseHighlight(activeElementTag);
  });

  // Border bottom show checkbox toggle
  const borderCheckbox = document.getElementById('style-border-show');
  const borderDetailsBlock = document.getElementById('border-details-fields');
  borderCheckbox.addEventListener('change', (e) => {
    const checked = e.target.checked;
    currentStyles[activeElementTag].borderBottomShow = checked;
    
    if (checked) {
      borderDetailsBlock.classList.add('show');
    } else {
      borderDetailsBlock.classList.remove('show');
    }
    applyStyles();
    saveState();
    triggerPulseHighlight(activeElementTag);
  });

  // Border Color
  const borderColorPicker = document.getElementById('style-border-color');
  const borderColorHexInput = document.getElementById('style-border-color-hex');

  borderColorPicker.addEventListener('input', (e) => {
    const hex = e.target.value;
    currentStyles[activeElementTag].borderBottomColor = hex;
    borderColorHexInput.value = hex.toUpperCase();
    applyStyles();
    saveState();
  });
  borderColorPicker.addEventListener('change', () => {
    triggerPulseHighlight(activeElementTag);
  });

  borderColorHexInput.addEventListener('input', (e) => {
    let hex = e.target.value;
    if (hex.charAt(0) !== '#') hex = '#' + hex;

    if (/^#[0-9A-F]{6}$/i.test(hex) || /^#[0-9A-F]{3}$/i.test(hex)) {
      currentStyles[activeElementTag].borderBottomColor = hex;
      borderColorPicker.value = hex;
      applyStyles();
      saveState();
    }
  });
  borderColorHexInput.addEventListener('change', () => {
    triggerPulseHighlight(activeElementTag);
  });

  // Border Width Slider
  const borderWidthSlider = document.getElementById('style-border-width');
  borderWidthSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    currentStyles[activeElementTag].borderBottomWidth = val;
    document.getElementById('val-border-width').textContent = `${val}px`;
    applyStyles();
    saveState();
  });
  borderWidthSlider.addEventListener('change', () => {
    triggerPulseHighlight(activeElementTag);
  });


  // 5. Header / Actions buttons
  
  // Load sample markdown
  document.getElementById('btn-load-sample').addEventListener('click', () => {
    editor.value = sampleMarkdown;
    renderMarkdown();
    saveState();
    showToast('サンプルマークダウンを読み込みました！');
  });

  // Clear editor button
  document.getElementById('btn-clear-editor').addEventListener('click', () => {
    if (editor.value.trim() === '') {
      showToast('すでに空です');
      return;
    }
    // Animate the button for feedback
    const btn = document.getElementById('btn-clear-editor');
    btn.classList.add('btn-danger-flash');
    setTimeout(() => btn.classList.remove('btn-danger-flash'), 600);

    editor.value = '';
    renderMarkdown();
    saveState();
    showToast('マークダウンをクリアしました');
  });

  // Reset styles button (Reset to default)
  document.getElementById('btn-reset-styles').addEventListener('click', () => {
    currentStyles = JSON.parse(JSON.stringify(appTheme === 'dark-theme' ? defaultDarkStyles : defaultLightStyles));
    applyStyles();
    updateControlsUI();
    saveState();
    
    // Visual flash highlight on reset
    triggerPulseHighlight('h1');
    triggerPulseHighlight('h2');
    triggerPulseHighlight('h3');
    triggerPulseHighlight('p');
    triggerPulseHighlight('strong');
    
    showToast('スタイル設定を初期値にリセットしました！');
  });

  // Theme Toggle Dark/Light Mode
  const themeToggle = document.getElementById('btn-theme-toggle');
  themeToggle.addEventListener('click', () => {
    const body = document.body;

    if (appTheme === 'dark-theme') {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      appTheme = 'light-theme';
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      appTheme = 'dark-theme';
    }

    // Automatically check and convert colors for better readability/contrast
    syncColorsWithTheme(appTheme);

    applyStyles();
    updateControlsUI();
    saveState();
    showToast(`${appTheme === 'dark-theme' ? 'ダーク' : 'ライト'}モードに切り替えました`);
  });

  // 6. Copy Buttons CSS / HTML
  
  // Copy CSS code utility
  document.getElementById('btn-copy-css').addEventListener('click', () => {
    const css = generateCSS();
    navigator.clipboard.writeText(css).then(() => {
      showToast('CSSコードをクリップボードにコピーしました！');
    }).catch(err => {
      console.error('Error copying CSS:', err);
      showToast('コピーに失敗しました');
    });
  });

  // Copy Rendered HTML utility
  document.getElementById('btn-copy-html').addEventListener('click', () => {
    const html = document.getElementById('preview-content').innerHTML;
    // Format HTML slightly
    navigator.clipboard.writeText(html).then(() => {
      showToast('HTMLコードをクリップボードにコピーしました！');
    }).catch(err => {
      console.error('Error copying HTML:', err);
      showToast('コピーに失敗しました');
    });
  });

  // 7. Responsive Mobile Panel Switching Navigation
  const navItems = document.querySelectorAll('.app-nav .nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const btn = e.currentTarget;
      navItems.forEach(i => i.classList.remove('active'));
      btn.classList.add('active');

      const targetPanelId = btn.dataset.target;
      const panels = document.querySelectorAll('.app-main .panel');
      panels.forEach(p => p.classList.remove('active'));
      
      document.getElementById(targetPanelId).classList.add('active');

      // Re-trigger for mobile navigation views
      initAdSense();
    });
  });

  // 8. Privacy Policy Modal Event Listeners
  const privacyBtn = document.getElementById('btn-privacy-policy');
  const privacyModal = document.getElementById('modal-privacy');
  const closePrivacyBtn = document.getElementById('btn-close-privacy');
  const privacyOverlay = document.getElementById('modal-privacy-overlay');

  if (privacyBtn && privacyModal && closePrivacyBtn && privacyOverlay) {
    const openModal = (e) => {
      e.preventDefault();
      privacyModal.classList.add('show');
    };

    const closeModal = () => {
      privacyModal.classList.remove('show');
    };

    privacyBtn.addEventListener('click', openModal);
    closePrivacyBtn.addEventListener('click', closeModal);
    privacyOverlay.addEventListener('click', closeModal);

    // Close on Escape key press
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && privacyModal.classList.contains('show')) {
        closeModal();
      }
    });
  }
}

// ==========================================================================
// Resizable Columns Logic (IDE Terminal split layout)
// ==========================================================================
function initResizers() {
  const resizerX = document.getElementById('resizer-x');
  const resizerY = document.getElementById('resizer-y');
  const container = document.querySelector('.app-main');
  const topSection = document.querySelector('.main-top-section');

  if (!resizerX || !resizerY || !container || !topSection) return;

  const updateGridSizes = () => {
    if (window.innerWidth >= 1024) {
      container.style.gridTemplateRows = `1fr 6px ${bottomHeight}px`;
      topSection.style.gridTemplateColumns = `${leftWidth}fr 6px ${rightWidth}fr`;
    } else {
      container.style.gridTemplateRows = '';
      topSection.style.gridTemplateColumns = '';
    }
  };

  // Initial sizing apply
  updateGridSizes();

  // Resize listener
  window.addEventListener('resize', () => {
    updateGridSizes();
    initAdSense();
  });

  // 1. Horizontal Split dragging (X-axis, left-right Editor vs Preview)
  const startDragX = (e) => {
    e.preventDefault();
    resizerX.classList.add('dragging');
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    const onDrag = (moveEvent) => {
      const clientX = moveEvent.touches ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const topRect = topSection.getBoundingClientRect();
      const relativeX = clientX - topRect.left;
      const percentage = (relativeX / topRect.width) * 100;
      
      const minPercentage = 15; // Minimum size percentage
      const newLeft = Math.max(minPercentage, Math.min(percentage, 100 - minPercentage));
      
      leftWidth = newLeft;
      rightWidth = 100 - newLeft;
      updateGridSizes();
    };

    const stopDrag = () => {
      resizerX.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';

      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchmove', onDrag);
      document.removeEventListener('touchend', stopDrag);

      saveState();
    };

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchmove', onDrag, { passive: false });
    document.addEventListener('touchend', stopDrag);
  };

  // 2. Vertical Split dragging (Y-axis, up-down Top Section vs Bottom Styles)
  const startDragY = (e) => {
    e.preventDefault();
    resizerY.classList.add('dragging');
    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';

    const onDrag = (moveEvent) => {
      const clientY = moveEvent.touches ? moveEvent.touches[0].clientY : moveEvent.clientY;
      const containerRect = container.getBoundingClientRect();
      
      // Calculate height from bottom of container
      const relativeY = containerRect.bottom - clientY - 3; // Subtracting half resizer width
      const minHeight = 120; // Min terminal height in pixels
      const maxHeight = containerRect.height - 150; // Maintain at least 150px for editor/preview
      
      const newHeight = Math.max(minHeight, Math.min(relativeY, maxHeight));
      bottomHeight = newHeight;
      updateGridSizes();
    };

    const stopDrag = () => {
      resizerY.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';

      document.removeEventListener('mousemove', onDrag);
      document.removeEventListener('mouseup', stopDrag);
      document.removeEventListener('touchmove', onDrag);
      document.removeEventListener('touchend', stopDrag);

      saveState();
    };

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchmove', onDrag, { passive: false });
    document.addEventListener('touchend', stopDrag);
  };

  resizerX.addEventListener('mousedown', startDragX);
  resizerX.addEventListener('touchstart', startDragX, { passive: false });
  resizerY.addEventListener('mousedown', startDragY);
  resizerY.addEventListener('touchstart', startDragY, { passive: false });
}

// ==========================================================================
// Accent Color Styling Helpers
// ==========================================================================
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function adjustColorBrightness(hex, percent) {
  let R = parseInt(hex.substring(1, 3), 16);
  let G = parseInt(hex.substring(3, 5), 16);
  let B = parseInt(hex.substring(5, 7), 16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;

  R = (R > 0) ? R : 0;
  G = (G > 0) ? G : 0;
  B = (B > 0) ? B : 0;

  const rHex = R.toString(16).padStart(2, '0');
  const gHex = G.toString(16).padStart(2, '0');
  const bHex = B.toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}

function applyAccentColor(hex) {
  if (!hex) return;
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  const r = rgb.r, g = rgb.g, b = rgb.b;
  const root = document.body;
  root.style.setProperty('--accent', hex);
  
  // Derive hover (slightly darker for light theme, slightly lighter for dark theme)
  const isDark = document.body.classList.contains('dark-theme') || appTheme === 'dark-theme';
  const hoverHex = adjustColorBrightness(hex, isDark ? -10 : 10);
  root.style.setProperty('--accent-hover', hoverHex);
  
  root.style.setProperty('--accent-fade', `rgba(${r}, ${g}, ${b}, 0.08)`);
  root.style.setProperty('--accent-fade-hover', `rgba(${r}, ${g}, ${b}, 0.15)`);
  root.style.setProperty('--accent-border', `rgba(${r}, ${g}, ${b}, 0.3)`);
  root.style.setProperty('--accent-focus', `rgba(${r}, ${g}, ${b}, 0.4)`);
}

function isColorDark(hex) {
  if (!hex) return false;
  const rgb = hexToRgb(hex);
  if (!rgb) return false;
  // YIQ luminance calculation
  const yiq = ((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000;
  return yiq < 128;
}

function syncColorsWithTheme(theme) {
  const isDarkTheme = theme === 'dark-theme';
  
  // Adjust global background color if it conflicts with the theme mode
  const isBgDark = isColorDark(currentStyles.global.backgroundColor);
  if (isDarkTheme && !isBgDark) {
    currentStyles.global.backgroundColor = '#18181b';
  } else if (!isDarkTheme && isBgDark) {
    currentStyles.global.backgroundColor = '#ffffff';
  }

  const nextBgDark = isColorDark(currentStyles.global.backgroundColor);

  // Helper to ensure color has proper contrast with background
  const adjustColorContrast = (currentColor, targetDarkHex, targetLightHex) => {
    const isCurrentDark = isColorDark(currentColor);
    if (nextBgDark && isCurrentDark) {
      // Background is dark, but text is also dark -> change to light hex
      return targetLightHex;
    } else if (!nextBgDark && !isCurrentDark) {
      // Background is light, but text is also light -> change to dark hex
      return targetDarkHex;
    }
    return currentColor;
  };

  // Sync global text color
  currentStyles.global.textColor = adjustColorContrast(
    currentStyles.global.textColor, 
    '#1f2937', // Light theme dark text
    '#e4e4e7'  // Dark theme light text
  );

  // Sync element-specific colors
  const tags = ['h1', 'h2', 'h3', 'p', 'strong'];
  const darkDefaults = {
    h1: '#f4f4f5',
    h2: '#e4e4e7',
    h3: '#d4d4d8',
    p: '#a1a1aa',
    strong: '#ffffff'
  };
  const lightDefaults = {
    h1: '#111827',
    h2: '#1f2937',
    h3: '#374151',
    p: '#4b5563',
    strong: '#000000'
  };

  tags.forEach(tag => {
    if (currentStyles[tag]) {
      if (currentStyles[tag].color !== undefined) {
        currentStyles[tag].color = adjustColorContrast(
          currentStyles[tag].color,
          lightDefaults[tag],
          darkDefaults[tag]
        );
      }
      if (currentStyles[tag].borderBottomColor !== undefined) {
        currentStyles[tag].borderBottomColor = adjustColorContrast(
          currentStyles[tag].borderBottomColor,
          '#e5e7eb', // Light border
          '#27272a'  // Dark border
        );
      }
    }
  });
}

function initAdSense() {
  const ads = document.querySelectorAll('.adsense-container ins.adsbygoogle:not([data-ad-initialized])');
  ads.forEach(ins => {
    if (ins.offsetParent !== null) {
      ins.setAttribute('data-ad-initialized', 'true');
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Error pushing AdSense slot:', e);
      }
    }
  });
}

// ==========================================================================
// Drag and Drop File Import Logic
// ==========================================================================
function initDragAndDrop() {
  const overlay = document.getElementById('drag-drop-overlay');
  if (!overlay) return;

  // Prevent default behaviors for drag & drop across the window
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    window.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
    }, false);
  });

  // Track drag target depth to handle window leaving/entering accurately without flickering
  let dragCounter = 0;

  window.addEventListener('dragenter', (e) => {
    // Only trigger if files are being dragged
    if (e.dataTransfer && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files')) {
      dragCounter++;
      overlay.classList.add('show');
    }
  });

  window.addEventListener('dragleave', (e) => {
    if (e.dataTransfer && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files')) {
      dragCounter--;
      if (dragCounter <= 0) {
        dragCounter = 0;
        overlay.classList.remove('show');
      }
    }
  });

  // Handle dragleave directly on the overlay backdrop
  overlay.addEventListener('dragleave', () => {
    dragCounter = 0;
    overlay.classList.remove('show');
  });

  overlay.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  overlay.addEventListener('drop', (e) => {
    e.preventDefault();
    dragCounter = 0;
    overlay.classList.remove('show');

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileName = file.name;
      const extension = fileName.split('.').pop().toLowerCase();
      
      // Allow markdown, text files or generic text mime-types
      if (extension === 'md' || extension === 'txt' || file.type.startsWith('text/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target.result;
          const editor = document.getElementById('markdown-input');
          if (editor) {
            editor.value = content;
            renderMarkdown();
            saveState();
            // Automatically focus and scroll to editor
            editor.focus();
            showToast(`ファイル「${fileName}」を読み込みました！`);
          }
        };
        reader.readAsText(file);
      } else {
        showToast('エラー: .md または .txt ファイルのみ対応しています');
      }
    }
  });
}

// ==========================================================================
// App Startup Initialization
// ==========================================================================
function initApp() {
  // Load State
  loadState();

  // Apply Theme class
  document.body.className = appTheme;

  // Build Font family select elements options
  const select = document.getElementById('style-font-family');
  fontOptions.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.value;
    option.textContent = opt.name;
    select.appendChild(option);
  });

  // Perform Initial Renders & Style applications
  renderMarkdown();
  applyStyles();
  updateControlsUI();

  // Initialize columns resizing mechanics
  initResizers();

  // Bind Listeners
  bindEvents();

  // Create Lucide Icons elements
  initIcons();

  // Initialize Drag & Drop functionality
  initDragAndDrop();

  // Lazy init AdSense slots
  setTimeout(initAdSense, 50);
}

// Launch application on DOM Load
window.addEventListener('DOMContentLoaded', initApp);

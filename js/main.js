/* ========================================
   i18n Translations
   ======================================== */

const i18n = {
  'nav.research':   { en: 'Research',  zh: '研究' },
  'nav.blog':       { en: 'Blog',      zh: '博客' },
  'nav.resume':     { en: 'Resume',    zh: '简历' },

  'hero.greeting':  { en: "Hello, I'm",          zh: '你好，我是' },
  'hero.tagline':   { en: 'Building the future of LLM infrastructure.',
                      zh: '构建 LLM 基础设施的未来。' },
  'hero.desc':      { en: 'Software engineer at Salesforce and core contributor to SGLang-Omni. Focused on LLM inference serving, multi-GPU inference pipelines, TTS model optimization, and GPU performance benchmarking across H100 / H200 / H20.',
                      zh: 'Salesforce 软件工程师，SGLang-Omni 核心贡献者。专注于 LLM 推理服务、多 GPU 推理流水线、TTS 模型优化及 H100 / H200 / H20 GPU 性能基准测试。' },

  'research.title':    { en: 'Research Interests', zh: '研究方向' },
  'research.subtitle': { en: 'Focused on making large language models faster, cheaper, and more accessible.',
                         zh: '致力于让大语言模型更快、更省、更易用。' },

  'research.serving.title':  { en: 'LLM Serving',                   zh: 'LLM 服务' },
  'research.serving.item1':  { en: 'Request scheduling & batching',  zh: '请求调度与批处理' },
  'research.serving.item2':  { en: 'Prefix caching strategies',      zh: '前缀缓存策略' },
  'research.serving.item3':  { en: 'Multi-modal serving pipelines',  zh: '多模态服务流水线' },
  'research.serving.item4':  { en: 'Throughput & latency optimization', zh: '吞吐与延迟优化' },
  'research.serving.short':  { en: 'Serving',       zh: '服务' },

  'research.infra.title':  { en: 'LLM Infrastructure',          zh: 'LLM 基础设施' },
  'research.infra.item1':  { en: 'Distributed inference systems', zh: '分布式推理系统' },
  'research.infra.item2':  { en: 'GPU cluster orchestration',    zh: 'GPU 集群编排' },
  'research.infra.item3':  { en: 'Model deployment pipelines',   zh: '模型部署流水线' },
  'research.infra.item4':  { en: 'System reliability & scaling', zh: '系统可靠性与扩展' },
  'research.infra.short':  { en: 'Infrastructure',  zh: '基础设施' },

  'research.opt.title':  { en: 'Inference Optimization',           zh: '推理优化' },
  'research.opt.item1':  { en: 'CUDA Graph capture & optimization',  zh: 'CUDA Graph 捕获与优化' },
  'research.opt.item2':  { en: 'Sampler vectorization & tensorization', zh: '采样器向量化与张量化' },
  'research.opt.item3':  { en: 'Encoder-stage optimization (LRU caching, batched encoding)', zh: '编码器阶段优化（LRU 缓存、批量编码）' },
  'research.opt.item4':  { en: 'GPU profiling & benchmarking (H100 / H200 / H20)', zh: 'GPU 性能分析与基准测试 (H100 / H200 / H20)' },
  'research.opt.short':  { en: 'Optimization',      zh: '优化' },

  'blog.title':        { en: 'Blog & Videos',                    zh: '博客与视频' },
  'blog.subtitle':     { en: 'Thoughts on LLM systems, tutorials, and project updates.',
                         zh: '关于 LLM 系统的思考、教程与项目动态。' },
  'blog.filter.all':   { en: 'All',   zh: '全部' },
  'blog.filter.blog':  { en: 'Blog',  zh: '博客' },
  'blog.filter.video': { en: 'Video', zh: '视频' },
  'blog.empty':        { en: 'No posts yet. Check back soon!',
                         zh: '暂无文章，敬请期待！' },

  'resume.title':      { en: 'Resume',                  zh: '简历' },
  'resume.opensource':  { en: 'Open Source & Projects',  zh: '开源项目' },
  'resume.experience': { en: 'Work Experience',          zh: '工作经历' },
  'resume.education':  { en: 'Education',                zh: '教育经历' },
  'resume.skills':     { en: 'Skills',                   zh: '技能' },
  'resume.download':   { en: 'Download PDF',             zh: '下载 PDF' },

  'resume.oss1.date':  { en: 'April 2026 – Present',    zh: '2026年4月 – 至今' },
  'resume.oss1.title': { en: 'SGLang-Omni — Core Contributor (Lead Higgs TTS Optimization)',
                         zh: 'SGLang-Omni — 核心贡献者（主导 Higgs TTS 优化）' },
  'resume.oss1.desc':  { en: 'Led the Higgs TTS inference-optimization workstream: designed optimization roadmap across encoder, AR-decode, and vocoder stages. Delivered +103% throughput, +107% audio-s/s, and −51% RTF on H200. Drove CUDA Graph capture for the autoregressive decode path.',
                         zh: '主导 Higgs TTS 推理优化工作流：设计了编码器、AR 解码和声码器阶段的优化路线图。在 H200 上实现 +103% 吞吐量、+107% 音频秒/秒和 −51% RTF。推动了自回归解码路径的 CUDA Graph 捕获。' },
  'resume.oss2.date':  { en: 'September 2025 – Present', zh: '2025年9月 – 至今' },
  'resume.oss2.title': { en: 'SGLang — OSS Contributor',
                         zh: 'SGLang — 开源贡献者' },
  'resume.oss2.desc':  { en: 'Created and presented official SGLang tutorial videos (Diffusion, Cookbook). Expanded test coverage for OpenAI-compatible API endpoints across multiple PRs.',
                         zh: '制作并发布 SGLang 官方教程视频（Diffusion、Cookbook）。通过多个 PR 扩展了 OpenAI 兼容 API 端点的测试覆盖率。' },

  'resume.exp1.date':  { en: 'July 2025 – Present',     zh: '2025年7月 – 至今' },
  'resume.exp1.title': { en: 'Software Engineer (AMTS) — Salesforce',
                         zh: '软件工程师 (AMTS) — Salesforce' },
  'resume.exp1.desc':  { en: 'Led Tableau Mobile end-to-end feature efforts. Delivered TabAgent, an embedded AI assistant for Tableau serving millions of users. Built a LangGraph AI agent automating bug-blitz processes, improving UX validation efficiency by 50%+.',
                         zh: '主导 Tableau Mobile 端到端功能开发。交付了 TabAgent——服务百万级用户的 Tableau 嵌入式 AI 助手。构建 LangGraph AI 代理自动化 bug-blitz 流程，提升 UX 验证效率 50%+。' },
  'resume.exp2.date':  { en: 'May 2024 – Aug 2024',     zh: '2024年5月 – 2024年8月' },
  'resume.exp2.title': { en: 'Software Engineer Intern — Salesforce',
                         zh: '软件工程实习生 — Salesforce' },
  'resume.exp2.desc':  { en: 'Implemented Tableau-Pulse features (React Native + Redux) shipping to 100k+ customers.',
                         zh: '实现了 Tableau-Pulse 功能（React Native + Redux），面向 10 万+ 客户发布。' },
  'resume.exp3.title': { en: 'Software Engineer Intern — RevArt',
                         zh: '软件工程实习生 — RevArt' },
  'resume.exp3.desc':  { en: 'Built an AI content assistant (ChatGPT APIs) generating social posts from artist prompts, reducing content-creation time by 80% and serving 10k+ artists.',
                         zh: '构建 AI 内容助手（ChatGPT API），根据艺术家提示生成社交帖子，减少 80% 内容创作时间，服务 1 万+ 艺术家。' },
  'resume.exp4.title': { en: 'AI Engineer Intern — Inspur Group',
                         zh: 'AI 工程实习生 — 浪潮集团' },
  'resume.exp4.desc':  { en: 'Deployed production-grade extraction models on cloud inference servers. Built a LangChain + Qwen agent to normalize heterogeneous EMR formats.',
                         zh: '在云推理服务器上部署生产级抽取模型。构建 LangChain + Qwen 代理规范化异构 EMR 格式。' },

  'resume.edu1.title': { en: 'B.A. Computer Science & Mathematics (Double Major)',
                         zh: '计算机科学与数学学士（双专业）' },
  'resume.edu1.place': { en: 'University of Virginia (UVA)',
                         zh: '弗吉尼亚大学 (UVA)' },
  'resume.edu1.honor': { en: 'Graduated with High Distinction.',
                         zh: '以优异成绩毕业 (High Distinction)。' },
};

/* ========================================
   Blog / Video Post Data
   Add new posts here — they render automatically.
   ======================================== */

const posts = [
  {
    type: 'video',
    date: '2025-03-15',
    title: { en: 'SGLang Cookbook Full Tutorial: Your One-Click Model Deployment Guide',
             zh: 'SGLang Cookbook 完整教程：一键模型部署指南' },
    desc:  { en: 'A comprehensive walkthrough of SGLang runtime configuration, server deployment, and inference pipeline setup for production workloads.',
             zh: 'SGLang 运行时配置、服务器部署与推理流水线设置的全面教程，面向生产工作负载。' },
    url: 'https://www.youtube.com/watch?v=73815NLx2s4',
    tags: ['SGLang', 'Tutorial', 'Deployment']
  },
  {
    type: 'video',
    date: '2025-02-20',
    title: { en: 'SGLang Diffusion: Open-Source High-Performance Inference for Image & Video Generation',
             zh: 'SGLang Diffusion：开源高性能图像与视频生成推理' },
    desc:  { en: 'Exploring SGLang\'s diffusion model serving capabilities for high-performance image and video generation inference.',
             zh: '探索 SGLang 的扩散模型服务能力，实现高性能图像与视频生成推理。' },
    url: 'https://www.youtube.com/watch?v=YwNrdtoYJnc',
    tags: ['SGLang', 'Diffusion', 'Tutorial']
  },
];

/* ========================================
   App State
   ======================================== */

let currentLang = localStorage.getItem('lang') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
let currentFilter = 'all';

/* ========================================
   Theme Toggle
   ======================================== */

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

document.getElementById('theme-toggle').addEventListener('click', function () {
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
});

/* ========================================
   Language Toggle
   ======================================== */

function setLang(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  localStorage.setItem('lang', lang);

  document.getElementById('lang-toggle').textContent = lang === 'en' ? 'EN' : '中';

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var entry = i18n[key];
    if (entry) {
      el.textContent = entry[lang] || entry.en;
    }
  });

  renderBlog();
}

document.getElementById('lang-toggle').addEventListener('click', function () {
  setLang(currentLang === 'en' ? 'zh' : 'en');
});

/* ========================================
   Blog Rendering
   ======================================== */

function renderBlog() {
  var grid = document.getElementById('blog-grid');
  var empty = document.getElementById('blog-empty');
  var filtered = posts.filter(function (p) {
    return currentFilter === 'all' || p.type === currentFilter;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  grid.innerHTML = filtered.map(function (p) {
    var typeClass = p.type === 'video' ? ' bc-type--video' : '';
    var typeLabel = p.type === 'video'
      ? (currentLang === 'zh' ? '视频' : 'Video')
      : (currentLang === 'zh' ? '博客' : 'Blog');
    var title = p.title[currentLang] || p.title.en;
    var desc = p.desc[currentLang] || p.desc.en;
    var tags = p.tags.map(function (t) {
      return '<span class="bc-tag">' + t + '</span>';
    }).join('');

    return '<a href="' + p.url + '" class="blog-card anim-item visible" target="_blank" rel="noopener">'
      + '<div class="bc-top">'
      + '<span class="bc-type' + typeClass + '">' + typeLabel + '</span>'
      + '<span class="bc-date">' + p.date + '</span>'
      + '</div>'
      + '<h3 class="bc-title">' + title + '</h3>'
      + '<p class="bc-desc">' + desc + '</p>'
      + '<div class="bc-tags">' + tags + '</div>'
      + '</a>';
  }).join('');
}

/* ========================================
   Blog Filters
   ======================================== */

document.querySelectorAll('.filter-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');
    currentFilter = btn.getAttribute('data-filter');
    renderBlog();
  });
});

/* ========================================
   Scroll Animations
   ======================================== */

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.anim-item').forEach(function (el) {
  observer.observe(el);
});

/* ========================================
   Navigation
   ======================================== */

var nav = document.getElementById('nav');
var navLinks = document.getElementById('nav-links');
var hamburger = document.getElementById('nav-hamburger');

window.addEventListener('scroll', function () {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ========================================
   Active Nav Link on Scroll
   ======================================== */

var sections = document.querySelectorAll('.section, .hero');

var navObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var id = entry.target.id;
      navLinks.querySelectorAll('a').forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(function (s) { navObserver.observe(s); });

/* ========================================
   Init
   ======================================== */

setLang(currentLang);

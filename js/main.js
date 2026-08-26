/* ========================================
   i18n Translations
   ======================================== */

const i18n = {
  'nav.research':   { en: 'Research',  zh: '研究' },
  'nav.blog':       { en: 'Blog',      zh: '博客' },
  'nav.resume':     { en: 'Resume',    zh: '简历' },

  'hero.greeting':  { en: "Hello, I'm",          zh: '你好，我是' },
  'hero.desc':      { en: 'Software engineer at Salesforce and core contributor to SGLang-Omni. Focused on LLM inference serving, multi-GPU inference pipelines, and TTS model optimization.',
                      zh: 'Salesforce 软件工程师，SGLang-Omni 核心贡献者。专注于 LLM 推理服务、多 GPU 推理流水线与 TTS 模型优化。' },

  'research.title':    { en: 'Research Interests', zh: '研究方向' },
  'research.subtitle': { en: 'Focused on making large language models faster, cheaper, and more accessible.',
                         zh: '致力于让大语言模型更快、更省、更易用。' },

  'research.infra.title':    { en: 'LLM Infrastructure',       zh: 'LLM 基础设施' },
  'research.infra.subtitle': { en: 'Building serving frameworks for TTS / Omni model architectures',
                               zh: '构建面向 TTS / Omni 模型架构的服务框架' },
  'research.infra.item1':  { en: 'Request scheduling & batching',  zh: '请求调度与批处理' },
  'research.infra.item2':  { en: 'Prefix caching strategies',      zh: '前缀缓存策略' },
  'research.infra.item3':  { en: 'Multi-modal serving pipelines',  zh: '多模态服务流水线' },
  'research.infra.item4':  { en: 'Distributed inference systems',  zh: '分布式推理系统' },
  'research.infra.item5':  { en: 'GPU cluster orchestration',      zh: 'GPU 集群编排' },
  'research.infra.item6':  { en: 'Model deployment & system reliability', zh: '模型部署与系统可靠性' },
  'research.infra.short':  { en: 'Infrastructure',  zh: '基础设施' },

  'research.opt.title':    { en: 'Optimization & Benchmarking',    zh: '优化与基准测试' },
  'research.opt.subtitle': { en: 'Runtime optimization and GPU performance profiling',
                             zh: '运行时优化与 GPU 性能分析' },
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
  'resume.skills.systems': { en: 'LLM Inference & Systems', zh: 'LLM 推理与系统' },
  'resume.skills.infra':   { en: 'Infra & Tools',           zh: '基础设施与工具' },
  'resume.skills.lang':    { en: 'Programming Languages',   zh: '编程语言' },

  'resume.oss1.date':  { en: 'April 2026 – Present',    zh: '2026年4月 – 至今' },
  'resume.oss1.title': { en: 'SGLang-Omni — Core Contributor',
                         zh: 'SGLang-Omni — 核心贡献者' },
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
   url is a string, or { en, zh } when the target page has per-language versions.
   ======================================== */

const posts = [
  {
    type: 'blog',
    date: '2026-08-26',
    title: { en: 'DSpark in SGLang: Confidence-Sized Verification',
             zh: 'DSpark in SGLang：按置信度定验证预算的投机解码' },
    desc:  { en: 'Speculative decoding sours at high load: the target verifies B×K tokens every step. DSpark drafts a block per forward, scores each token\'s survival, and SGLang sizes a per-request verify budget and replays the front-packed batch as a genuinely smaller CUDA graph. An interactive visualized tutorial.',
             zh: '投机解码在高负载下会变亏：target 每步要验证 B×K 个 token。DSpark 一次 forward 起草一整块并给每个草稿打存活分，SGLang 据此逐请求定验证预算，再把 front-pack 后的批次回放成真正更小的 CUDA graph。交互式可视化教程。' },
    url: { en: 'https://yichizhang.dev/AI-Infra-Visualized/en/lessons/dspark-speculative-decoding/',
           zh: 'https://yichizhang.dev/AI-Infra-Visualized/lessons/dspark-speculative-decoding/' },
    tags: ['SGLang', 'Speculative Decoding', 'Visualized']
  },
  {
    type: 'blog',
    date: '2026-08-22',
    title: { en: 'Unified Radix Cache: One Tree for Hybrid Model Prefix Caching',
             zh: 'Unified Radix Cache：一棵树覆盖混合模型前缀缓存' },
    desc:  { en: 'SGLang runs hybrid-model prefix caching on one radix tree: FULL/SWA/MAMBA components vote out a safe reuse boundary on a shared token topology, with tiered HiCache and session-aware eviction on the same prefix identity. An interactive visualized tutorial.',
             zh: 'SGLang 把混合模型的前缀缓存收回一棵 radix 树：FULL/SWA/MAMBA 组件在共享 token 拓扑上投票出安全复用边界，HiCache 分层与会话感知驱逐建立在同一个前缀身份上。交互式可视化教程。' },
    url: { en: 'https://yichizhang.dev/AI-Infra-Visualized/en/lessons/unified-radix-cache/',
           zh: 'https://yichizhang.dev/AI-Infra-Visualized/lessons/unified-radix-cache/' },
    tags: ['SGLang', 'Radix Cache', 'Visualized']
  },
  {
    type: 'blog',
    date: '2026-08-18',
    title: { en: 'Advanced CUDA Graph Techniques in SGLang',
             zh: 'SGLang 的 CUDA Graph 进阶' },
    desc:  { en: 'Breakable CUDA Graph, proposed and first open-sourced in SGLang, inserts eager breaks directly during capture; full CUDA Graph for prefill pins both dynamic dimensions with token buckets and zero-length sentinels. An interactive visualized tutorial.',
             zh: 'Breakable CUDA Graph 由 SGLang 提出并率先开源，通过在 capture 过程中直接插入 eager 断点，解决了靠编译器切图带来的启动慢、兼容性差的问题；prefill 的 full CUDA Graph 也一并展开。交互式可视化教程。' },
    url: { en: 'https://yichizhang.dev/AI-Infra-Visualized/en/lessons/breakable-cuda-graph/',
           zh: 'https://yichizhang.dev/AI-Infra-Visualized/lessons/breakable-cuda-graph/' },
    tags: ['SGLang', 'CUDA Graph', 'Visualized']
  },
  {
    type: 'blog',
    date: '2026-07-28',
    title: { en: 'Kimi K3: Architecture and SGLang Day-0 Support',
             zh: 'Kimi K3：架构与 SGLang Day-0 Support' },
    desc:  { en: 'From MHA to DeltaNet to KDA — how Kimi K3\'s hybrid architecture supports 2.8T parameters and a 1M context, and how SGLang runs K3 efficiently with a unified memory pool, chunked PP, and DCP. An interactive visualized tutorial.',
             zh: '从 MHA 到 DeltaNet 再到 KDA，详解不同注意力机制；Kimi K3 架构如何支撑 2.8T 参数 + 1M 上下文的混合架构；以及 SGLang 如何用统一显存池、chunked PP 和 DCP 把 K3 高效跑起来。交互式可视化教程。' },
    url: { en: 'https://yichizhang.dev/AI-Infra-Visualized/en/lessons/kimi-k3-day0-support/',
           zh: 'https://yichizhang.dev/AI-Infra-Visualized/lessons/kimi-k3-day0-support/' },
    tags: ['SGLang', 'Kimi K3', 'Visualized']
  },
  {
    type: 'blog',
    date: '2026-07-28',
    title: { en: 'Continuous Batching: From Static to Iteration-Level Scheduling',
             zh: 'Continuous Batching：从 static 到 iteration-level scheduling' },
    desc:  { en: 'A visual walkthrough of why static batching wastes GPU time and how continuous batching fixes it, with iteration-by-iteration comparisons. An interactive visualized tutorial.',
             zh: '通过可视化工具讲解 static batching 为什么浪费 GPU，以及 continuous batching 的优化方案，提供逐 iteration 对比。交互式可视化教程。' },
    url: { en: 'https://yichizhang.dev/AI-Infra-Visualized/en/lessons/continuous-batching/',
           zh: 'https://yichizhang.dev/AI-Infra-Visualized/lessons/continuous-batching/' },
    tags: ['SGLang', 'Batching', 'Visualized']
  },
  {
    type: 'blog',
    date: '2026-07-19',
    title: { en: 'Optimizing ASR Models to Transcribe 90-Minute Multi-Speaker Audio',
             zh: '优化 ASR 模型：转写 90 分钟多说话人音频' },
    desc:  { en: 'Bringing MOSS-Transcribe-Diarize to SGLang-Omni — the engineering behind transcribing and diarizing up to 90-minute multi-speaker audio: profiling, chunked prefill, CUDA Graph, async decode, and benchmarks.',
             zh: '将 MOSS-Transcribe-Diarize 引入 SGLang-Omni——转写并区分长达 90 分钟多说话人音频背后的工程实践：性能分析、分块预填充、CUDA Graph、异步解码与基准测试。' },
    url: 'blog/moss-td-asr.html',
    tags: ['SGLang', 'ASR', 'Optimization']
  },
  {
    type: 'blog',
    date: '2026-06-05',
    title: { en: 'Optimizing TTS Inference: Engineering Lessons from Profiling to Streaming in SGLang Omni',
             zh: '优化 TTS 推理：SGLang Omni 中从性能分析到流式传输的工程实践' },
    desc:  { en: 'A deep dive into optimizing the Higgs TTS pipeline — CUDA Graph migration, LRU caching for reference audio, and async GPU-CPU decode patterns for significant latency and throughput gains.',
             zh: '深入优化 Higgs TTS 流水线——CUDA Graph 迁移、参考音频 LRU 缓存、异步 GPU-CPU 解码模式，实现显著的延迟降低与吞吐提升。' },
    url: 'blog/tts-optimization.html',
    tags: ['SGLang', 'TTS', 'Optimization']
  },
  {
    type: 'video',
    date: '2026-02-18',
    title: { en: 'SGLang Cookbook Full Tutorial: Your One-Click Model Deployment Guide',
             zh: 'SGLang Cookbook 完整教程：一键模型部署指南' },
    desc:  { en: 'A comprehensive walkthrough of SGLang runtime configuration, server deployment, and inference pipeline setup for production workloads.',
             zh: 'SGLang 运行时配置、服务器部署与推理流水线设置的全面教程，面向生产工作负载。' },
    url: 'https://www.youtube.com/watch?v=73815NLx2s4',
    tags: ['SGLang', 'Tutorial', 'Deployment']
  },
  {
    type: 'video',
    date: '2025-12-11',
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

    var url = typeof p.url === 'string' ? p.url : (p.url[currentLang] || p.url.en);
    var isExternal = url.startsWith('http');
    var linkAttrs = isExternal ? ' target="_blank" rel="noopener"' : '';
    return '<a href="' + url + '" class="blog-card anim-item visible"' + linkAttrs + '>'
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

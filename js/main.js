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
  'hero.desc':      { en: 'Researcher and engineer working on large language model serving systems, distributed inference infrastructure, and runtime optimization. Currently contributing to SGLang.',
                      zh: '专注于大语言模型服务系统、分布式推理基础设施与运行时优化的研究者和工程师。目前是 SGLang 的核心贡献者。' },
  'hero.contact':   { en: 'Resume', zh: '简历' },

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
  'research.opt.item1':  { en: 'KV cache compression',             zh: 'KV 缓存压缩' },
  'research.opt.item2':  { en: 'Quantization (FP8 / INT4)',        zh: '量化 (FP8 / INT4)' },
  'research.opt.item3':  { en: 'Speculative decoding',             zh: '推测解码' },
  'research.opt.item4':  { en: 'Custom CUDA kernel development',   zh: '自研 CUDA 内核开发' },
  'research.opt.short':  { en: 'Optimization',      zh: '优化' },

  'blog.title':        { en: 'Blog & Videos',                    zh: '博客与视频' },
  'blog.subtitle':     { en: 'Thoughts on LLM systems, tutorials, and project updates.',
                         zh: '关于 LLM 系统的思考、教程与项目动态。' },
  'blog.filter.all':   { en: 'All',   zh: '全部' },
  'blog.filter.blog':  { en: 'Blog',  zh: '博客' },
  'blog.filter.video': { en: 'Video', zh: '视频' },
  'blog.empty':        { en: 'No posts yet. Check back soon!',
                         zh: '暂无文章，敬请期待！' },

  'resume.title':      { en: 'Resume',      zh: '简历' },
  'resume.education':  { en: 'Education',   zh: '教育经历' },
  'resume.experience': { en: 'Experience',  zh: '工作经历' },
  'resume.skills':     { en: 'Skills',      zh: '技能' },
  'resume.download':   { en: 'Download PDF', zh: '下载 PDF' },

  'resume.edu1.place': { en: 'University — Update this', zh: '学校名称 — 请更新' },
  'resume.edu2.place': { en: 'University — Update this', zh: '学校名称 — 请更新' },

  'resume.exp1.date':  { en: '2024 – Present',  zh: '2024 – 至今' },
  'resume.exp1.title': { en: 'Open-Source Contributor — SGLang',
                         zh: '开源贡献者 — SGLang' },
  'resume.exp1.desc':  { en: "Contributing to SGLang's multi-modal serving pipeline, TTS inference, and benchmark infrastructure.",
                         zh: '参与 SGLang 的多模态服务流水线、TTS 推理与基准测试基础设施的开发。' },
  'resume.exp2.title': { en: 'Role — Company (Update this)',
                         zh: '职位 — 公司名称（请更新）' },
  'resume.exp2.desc':  { en: 'Description of your work experience here.',
                         zh: '在此填写你的工作经历描述。' },
};

/* ========================================
   Blog / Video Post Data
   Add new posts here — they render automatically.
   ======================================== */

const posts = [
  {
    type: 'blog',
    date: '2024-12-15',
    title: { en: 'Understanding Continuous Batching in LLM Serving',
             zh: '理解 LLM 服务中的连续批处理' },
    desc:  { en: 'A deep dive into how continuous batching dramatically improves GPU utilization and serving throughput for autoregressive models.',
             zh: '深入分析连续批处理如何显著提高自回归模型的 GPU 利用率与服务吞吐量。' },
    url: '#',
    tags: ['LLM Serving', 'Batching']
  },
  {
    type: 'video',
    date: '2024-11-20',
    title: { en: 'FP8 Quantization: From Theory to Production',
             zh: 'FP8 量化：从理论到生产' },
    desc:  { en: 'Practical guide to deploying FP8 quantized models with minimal accuracy loss and maximum throughput gains.',
             zh: '部署 FP8 量化模型的实践指南——最小精度损失，最大吞吐提升。' },
    url: '#',
    tags: ['Optimization', 'Quantization']
  },
  {
    type: 'blog',
    date: '2024-10-05',
    title: { en: 'Building Multi-Modal Serving Pipelines with SGLang',
             zh: '使用 SGLang 构建多模态服务流水线' },
    desc:  { en: 'How we designed and benchmarked the TTS and audio serving pipeline in SGLang for production workloads.',
             zh: '我们如何在 SGLang 中设计和基准测试面向生产的 TTS 与音频服务流水线。' },
    url: '#',
    tags: ['SGLang', 'Multi-Modal']
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

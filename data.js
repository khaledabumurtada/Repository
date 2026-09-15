// بيانات التطبيقات والتصنيفات - يمكن تعديلها يدويًا أو عبر لوحة التحكم admin.html
const CATEGORIES = [
  {
    "slug": "ai",
    "name_ar": "أدوات الذكاء الاصطناعي",
    "name_en": "AI Tools",
    "icon": "🤖"
  },
  {
    "slug": "app-building",
    "name_ar": "بناء التطبيقات",
    "name_en": "App Building",
    "icon": "🛠️"
  },
  {
    "slug": "automation",
    "name_ar": "الأتمتة",
    "name_en": "Automation",
    "icon": "⚙️"
  },
  {
    "slug": "audio",
    "name_ar": "الصوت والصوتيات",
    "name_en": "Audio & Voice",
    "icon": "🎙️"
  },
  {
    "slug": "design",
    "name_ar": "التصميم",
    "name_en": "Design",
    "icon": "🎨"
  },
  {
    "slug": "digital-products",
    "name_ar": "المنتجات الرقمية",
    "name_en": "Digital Products",
    "icon": "💾"
  },
  {
    "slug": "articles",
    "name_ar": "المقالات والكتابة",
    "name_en": "Articles & Writing",
    "icon": "✍️"
  },
  {
    "slug": "images",
    "name_ar": "صور مجانية",
    "name_en": "Free Images",
    "icon": "🖼️"
  },
  {
    "slug": "google",
    "name_ar": "أدوات جوجل",
    "name_en": "Google Tools",
    "icon": "🔎"
  },
  {
    "slug": "marketing",
    "name_ar": "التسويق والتجارة",
    "name_en": "Marketing & E-commerce",
    "icon": "📈"
  },
  {
    "slug": "prompts",
    "name_ar": "البرومبت",
    "name_en": "Prompts",
    "icon": "💬"
  },
  {
    "slug": "tools",
    "name_ar": "أدوات عامة",
    "name_en": "General Tools",
    "icon": "🧰"
  },
  {
    "slug": "domains",
    "name_ar": "الدومينات والاستضافة",
    "name_en": "Domains & Hosting",
    "icon": "🌐"
  }
];

const APPS = [
  {
    "id": "ai-1",
    "category": "ai",
    "url": "https://www.notion.com",
    "domain": "www.notion.com",
    "name_ar": "Notion AI",
    "name_en": "Notion AI",
    "desc_ar": "مساحة عمل ذكية تجمع الملاحظات والمهام والذكاء الاصطناعي بمكان واحد.",
    "desc_en": "All-in-one workspace with AI-assisted notes, docs and task management."
  },
  {
    "id": "ai-2",
    "category": "ai",
    "url": "https://supersimple.com",
    "domain": "supersimple.com",
    "name_ar": "SuperSimple",
    "name_en": "SuperSimple",
    "desc_ar": "أداة تبسّط المهام المكتبية والتحليلية بمساعدة الذكاء الاصطناعي.",
    "desc_en": "AI tool that simplifies office and analytical tasks."
  },
  {
    "id": "ai-3",
    "category": "ai",
    "url": "https://www.easemate.ai/webapp/chat",
    "domain": "www.easemate.ai",
    "name_ar": "Easemate AI",
    "name_en": "Easemate AI",
    "desc_ar": "مساعد ذكاء اصطناعي للمحادثة وتلخيص المستندات والصفحات.",
    "desc_en": "AI chat assistant for summarizing documents and web pages."
  },
  {
    "id": "ai-4",
    "category": "ai",
    "url": "https://www.tasteatlas.com/map",
    "domain": "www.tasteatlas.com",
    "name_ar": "TasteAtlas",
    "name_en": "TasteAtlas",
    "desc_ar": "خريطة تفاعلية عالمية لاكتشاف الأكلات والمطابخ المحلية.",
    "desc_en": "Interactive world map for discovering local dishes and cuisines."
  },
  {
    "id": "ai-5",
    "category": "ai",
    "url": "https://atoms.dev/ar",
    "domain": "atoms.dev",
    "name_ar": "Atoms",
    "name_en": "Atoms",
    "desc_ar": "منصة لبناء تطبيقات وواجهات بمساعدة الذكاء الاصطناعي.",
    "desc_en": "Platform for building apps and interfaces with AI assistance."
  },
  {
    "id": "ai-6",
    "category": "ai",
    "url": "https://www.buzzy.now",
    "domain": "www.buzzy.now",
    "name_ar": "Buzzy",
    "name_en": "Buzzy",
    "desc_ar": "أداة ذكاء اصطناعي لإنشاء محتوى وأتمتة مهام صغيرة.",
    "desc_en": "AI tool for content creation and small task automation."
  },
  {
    "id": "ai-7",
    "category": "ai",
    "url": "https://tesana.ai/en",
    "domain": "tesana.ai",
    "name_ar": "Tesana AI",
    "name_en": "Tesana AI",
    "desc_ar": "منصة ذكاء اصطناعي لتوليد وتحرير المحتوى.",
    "desc_en": "AI platform for generating and editing content."
  },
  {
    "id": "ai-8",
    "category": "ai",
    "url": "https://doitong.com/ar",
    "domain": "doitong.com",
    "name_ar": "Doitong",
    "name_en": "Doitong",
    "desc_ar": "أداة ذكاء اصطناعي لإدارة المهام والإنتاجية.",
    "desc_en": "AI-powered productivity and task tool."
  },
  {
    "id": "ai-9",
    "category": "ai",
    "url": "https://phet.colorado.edu",
    "domain": "phet.colorado.edu",
    "name_ar": "PhET Simulations",
    "name_en": "PhET Simulations",
    "desc_ar": "محاكاة تفاعلية مجانية للفيزياء والعلوم من جامعة كولورادو.",
    "desc_en": "Free interactive science and physics simulations from University of Colorado."
  },
  {
    "id": "ai-10",
    "category": "ai",
    "url": "https://www.vascak.cz",
    "domain": "www.vascak.cz",
    "name_ar": "Vascak Physics",
    "name_en": "Vascak Physics",
    "desc_ar": "محاكاة تفاعلية لمفاهيم الفيزياء مثل الحركة الدائرية.",
    "desc_en": "Interactive physics simulations such as circular motion."
  },
  {
    "id": "ai-11",
    "category": "ai",
    "url": "https://animagraffs.com",
    "domain": "animagraffs.com",
    "name_ar": "Animagraffs",
    "name_en": "Animagraffs",
    "desc_ar": "إنفوجرافيك متحرك يشرح كيف تعمل الأشياء بطريقة بصرية ممتعة.",
    "desc_en": "Animated infographics that explain how things work."
  },
  {
    "id": "ai-12",
    "category": "ai",
    "url": "https://redpandaai.com",
    "domain": "redpandaai.com",
    "name_ar": "RedPanda AI",
    "name_en": "RedPanda AI",
    "desc_ar": "أدوات ذكاء اصطناعي لإنشاء محتوى مرئي وفيديو قصير.",
    "desc_en": "AI tools for creating short-form video and visual content."
  },
  {
    "id": "ai-13",
    "category": "ai",
    "url": "https://app.runwayml.com",
    "domain": "app.runwayml.com",
    "name_ar": "Runway",
    "name_en": "Runway",
    "desc_ar": "منصة رائدة في توليد وتحرير الفيديو بالذكاء الاصطناعي.",
    "desc_en": "Leading AI video generation and editing platform."
  },
  {
    "id": "ai-14",
    "category": "ai",
    "url": "https://www.topview.ai",
    "domain": "www.topview.ai",
    "name_ar": "TopView AI",
    "name_en": "TopView AI",
    "desc_ar": "أداة لإنشاء فيديوهات إعلانية تسويقية بالذكاء الاصطناعي.",
    "desc_en": "AI tool for creating marketing and ad videos."
  },
  {
    "id": "ai-15",
    "category": "ai",
    "url": "https://pollo.ai",
    "domain": "pollo.ai",
    "name_ar": "Pollo AI",
    "name_en": "Pollo AI",
    "desc_ar": "منصة توليد فيديو وصور بالذكاء الاصطناعي.",
    "desc_en": "AI platform for generating video and images."
  },
  {
    "id": "ai-16",
    "category": "ai",
    "url": "https://faceless.video",
    "domain": "faceless.video",
    "name_ar": "Faceless Video",
    "name_en": "Faceless Video",
    "desc_ar": "إنشاء فيديوهات بدون ظهور وجه باستخدام الذكاء الاصطناعي.",
    "desc_en": "Create faceless videos automatically using AI."
  },
  {
    "id": "ai-17",
    "category": "ai",
    "url": "https://www.doratoon.com/workplace",
    "domain": "www.doratoon.com",
    "name_ar": "Doratoon",
    "name_en": "Doratoon",
    "desc_ar": "أداة لإنشاء رسوم متحركة وفيديوهات كرتونية بسهولة.",
    "desc_en": "Tool for creating animated cartoon videos easily."
  },
  {
    "id": "ai-18",
    "category": "ai",
    "url": "https://abdallah.ai/r/remotion",
    "domain": "abdallah.ai",
    "name_ar": "Remotion Studio",
    "name_en": "Remotion Studio",
    "desc_ar": "أداة لإنشاء فيديوهات برمجيًا باستخدام React.",
    "desc_en": "Programmatic video creation tool built on React."
  },
  {
    "id": "ai-19",
    "category": "ai",
    "url": "https://arcadium3d.com",
    "domain": "arcadium3d.com",
    "name_ar": "Arcadium3D",
    "name_en": "Arcadium3D",
    "desc_ar": "توليد نماذج وعناصر ثلاثية الأبعاد بالذكاء الاصطناعي.",
    "desc_en": "AI-generated 3D models and assets."
  },
  {
    "id": "ai-20",
    "category": "ai",
    "url": "https://rokon.ai/ar",
    "domain": "rokon.ai",
    "name_ar": "Rokon AI",
    "name_en": "Rokon AI",
    "desc_ar": "أداة ذكاء اصطناعي لإنشاء محتوى رقمي.",
    "desc_en": "AI tool for digital content creation."
  },
  {
    "id": "ai-21",
    "category": "ai",
    "url": "https://higgsfield.ai",
    "domain": "higgsfield.ai",
    "name_ar": "Higgsfield AI",
    "name_en": "Higgsfield AI",
    "desc_ar": "منصة متقدمة لتوليد فيديوهات سينمائية بالذكاء الاصطناعي.",
    "desc_en": "Advanced AI platform for cinematic video generation."
  },
  {
    "id": "ai-22",
    "category": "ai",
    "url": "https://dreamina.capcut.com/tools/seedance-2-0",
    "domain": "dreamina.capcut.com",
    "name_ar": "Dreamina (CapCut)",
    "name_en": "Dreamina (CapCut)",
    "desc_ar": "أداة من CapCut لتوليد صور وفيديو بالذكاء الاصطناعي.",
    "desc_en": "CapCut's AI tool for image and video generation."
  },
  {
    "id": "ai-23",
    "category": "ai",
    "url": "https://tasawur.ai",
    "domain": "tasawur.ai",
    "name_ar": "Tasawur AI",
    "name_en": "Tasawur AI",
    "desc_ar": "أداة عربية لتوليد الصور والتصورات بالذكاء الاصطناعي.",
    "desc_en": "Arabic AI tool for generating images and visual concepts."
  },
  {
    "id": "ai-24",
    "category": "ai",
    "url": "https://kaiber.ai",
    "domain": "kaiber.ai",
    "name_ar": "Kaiber",
    "name_en": "Kaiber",
    "desc_ar": "منصة لتحويل الأفكار والموسيقى إلى فيديوهات فنية بالذكاء الاصطناعي.",
    "desc_en": "AI platform turning ideas and music into artistic videos."
  },
  {
    "id": "ai-25",
    "category": "ai",
    "url": "https://suno.com",
    "domain": "suno.com",
    "name_ar": "Suno AI",
    "name_en": "Suno AI",
    "desc_ar": "توليد أغاني وموسيقى كاملة بالذكاء الاصطناعي من نص بسيط.",
    "desc_en": "Generate full songs and music from a simple text prompt."
  },
  {
    "id": "ai-26",
    "category": "ai",
    "url": "https://app.pixverse.ai",
    "domain": "app.pixverse.ai",
    "name_ar": "PixVerse",
    "name_en": "PixVerse",
    "desc_ar": "أداة توليد فيديو قصير بالذكاء الاصطناعي من نص أو صورة.",
    "desc_en": "AI tool for generating short video from text or image."
  },
  {
    "id": "ai-27",
    "category": "ai",
    "url": "https://pictory.ai",
    "domain": "pictory.ai",
    "name_ar": "Pictory AI",
    "name_en": "Pictory AI",
    "desc_ar": "تحويل النصوص والمقالات إلى فيديوهات قصيرة تلقائيًا.",
    "desc_en": "Automatically turn articles and scripts into short videos."
  },
  {
    "id": "ai-28",
    "category": "ai",
    "url": "https://invideo.io",
    "domain": "invideo.io",
    "name_ar": "InVideo AI",
    "name_en": "InVideo AI",
    "desc_ar": "إنشاء فيديوهات احترافية من فكرة نصية بالذكاء الاصطناعي.",
    "desc_en": "Create professional videos from a text idea using AI."
  },
  {
    "id": "ai-29",
    "category": "ai",
    "url": "https://www.adobe.com",
    "domain": "www.adobe.com",
    "name_ar": "Adobe Creative Cloud",
    "name_en": "Adobe Creative Cloud",
    "desc_ar": "مجموعة أدوات أدوبي للتصميم والفيديو مع مزايا ذكاء اصطناعي.",
    "desc_en": "Adobe's design and video suite with built-in AI features."
  },
  {
    "id": "ai-30",
    "category": "ai",
    "url": "https://ai.byteplus.com/lumina/en",
    "domain": "ai.byteplus.com",
    "name_ar": "BytePlus Lumina",
    "name_en": "BytePlus Lumina",
    "desc_ar": "مجموعة أدوات ذكاء اصطناعي إبداعية من BytePlus.",
    "desc_en": "BytePlus's suite of creative AI tools."
  },
  {
    "id": "ai-31",
    "category": "ai",
    "url": "https://skywork.ai",
    "domain": "skywork.ai",
    "name_ar": "Skywork AI",
    "name_en": "Skywork AI",
    "desc_ar": "مساعد ذكاء اصطناعي لإنشاء المستندات والعروض والتقارير.",
    "desc_en": "AI assistant for creating documents, slides and reports."
  },
  {
    "id": "ai-32",
    "category": "ai",
    "url": "https://whacka.app/ar",
    "domain": "whacka.app",
    "name_ar": "Whacka",
    "name_en": "Whacka",
    "desc_ar": "أداة ذكاء اصطناعي عربية لإنشاء المحتوى.",
    "desc_en": "Arabic AI content creation tool."
  },
  {
    "id": "ai-33",
    "category": "ai",
    "url": "https://www.brmej.ai",
    "domain": "www.brmej.ai",
    "name_ar": "Brmej AI",
    "name_en": "Brmej AI",
    "desc_ar": "أداة عربية لتوليد المحتوى بالذكاء الاصطناعي.",
    "desc_en": "Arabic AI-powered content generation tool."
  },
  {
    "id": "ai-34",
    "category": "ai",
    "url": "https://www.designarena.ai",
    "domain": "www.designarena.ai",
    "name_ar": "Design Arena",
    "name_en": "Design Arena",
    "desc_ar": "منصة لمقارنة واختبار نماذج الذكاء الاصطناعي في التصميم.",
    "desc_en": "Platform for comparing AI models on design tasks."
  },
  {
    "id": "ai-35",
    "category": "ai",
    "url": "https://askaichat.app",
    "domain": "askaichat.app",
    "name_ar": "AskAI Chat",
    "name_en": "AskAI Chat",
    "desc_ar": "تطبيق يجمع عدة نماذج ذكاء اصطناعي للمحادثة والكتابة في مكان واحد.",
    "desc_en": "App bundling multiple AI chat models for writing and Q&A."
  },
  {
    "id": "ai-36",
    "category": "ai",
    "url": "https://www.kimi.com/en",
    "domain": "www.kimi.com",
    "name_ar": "Kimi",
    "name_en": "Kimi",
    "desc_ar": "مساعد ذكاء اصطناعي للمحادثة من شركة Moonshot AI.",
    "desc_en": "AI chat assistant by Moonshot AI."
  },
  {
    "id": "ai-37",
    "category": "ai",
    "url": "https://www.oreateai.com",
    "domain": "www.oreateai.com",
    "name_ar": "Oreate AI",
    "name_en": "Oreate AI",
    "desc_ar": "منصة توليد فيديو وصوت بالذكاء الاصطناعي.",
    "desc_en": "AI platform for video and voice generation."
  },
  {
    "id": "ai-38",
    "category": "ai",
    "url": "https://apps.apple.com/us/app/ai-video-ai-video-generator/id6478868302",
    "domain": "apps.apple.com",
    "name_ar": "AI Video Generator",
    "name_en": "AI Video Generator",
    "desc_ar": "تطبيق آيفون لتوليد فيديوهات بالذكاء الاصطناعي.",
    "desc_en": "iPhone app for AI-generated videos."
  },
  {
    "id": "ai-39",
    "category": "ai",
    "url": "https://www.perplexity.ai",
    "domain": "www.perplexity.ai",
    "name_ar": "Perplexity AI",
    "name_en": "Perplexity AI",
    "desc_ar": "محرك بحث بالذكاء الاصطناعي يجاوب بإجابات موثّقة بمصادر.",
    "desc_en": "AI search engine that answers with cited sources."
  },
  {
    "id": "ai-40",
    "category": "ai",
    "url": "https://claude.ai/login",
    "domain": "claude.ai",
    "name_ar": "Claude",
    "name_en": "Claude",
    "desc_ar": "مساعد ذكاء اصطناعي من Anthropic للمحادثة والكتابة والبرمجة.",
    "desc_en": "Anthropic's AI assistant for chat, writing and coding."
  },
  {
    "id": "ai-41",
    "category": "ai",
    "url": "https://app.heygen.com/home",
    "domain": "app.heygen.com",
    "name_ar": "HeyGen",
    "name_en": "HeyGen",
    "desc_ar": "إنشاء فيديوهات بأفاتار وصوت واقعي بالذكاء الاصطناعي.",
    "desc_en": "Create videos with realistic AI avatars and voices."
  },
  {
    "id": "ai-42",
    "category": "ai",
    "url": "https://elrebh.net",
    "domain": "elrebh.net",
    "name_ar": "الربح",
    "name_en": "Elrebh",
    "desc_ar": "موقع عربي يجمع طرق وأدوات للربح من الإنترنت.",
    "desc_en": "Arabic site listing ways and tools to earn money online."
  },
  {
    "id": "ai-43",
    "category": "ai",
    "url": "https://duckduckgo.com",
    "domain": "duckduckgo.com",
    "name_ar": "DuckDuckGo",
    "name_en": "DuckDuckGo",
    "desc_ar": "محرك بحث يحترم الخصوصية ولا يتتبع المستخدم.",
    "desc_en": "Privacy-focused search engine that doesn't track users."
  },
  {
    "id": "ai-44",
    "category": "ai",
    "url": "https://www.grammarly.com",
    "domain": "www.grammarly.com",
    "name_ar": "Grammarly",
    "name_en": "Grammarly",
    "desc_ar": "مساعد كتابة بالذكاء الاصطناعي لتصحيح وتحسين النصوص الإنجليزية.",
    "desc_en": "AI writing assistant for grammar and style in English."
  },
  {
    "id": "ai-45",
    "category": "ai",
    "url": "https://www.bing.com/images/create/ai-image-generator",
    "domain": "www.bing.com",
    "name_ar": "Bing Image Creator",
    "name_en": "Bing Image Creator",
    "desc_ar": "توليد صور بالذكاء الاصطناعي مجانًا من مايكروسوفت.",
    "desc_en": "Free AI image generation tool from Microsoft."
  },
  {
    "id": "ai-46",
    "category": "ai",
    "url": "https://www.synthesia.io",
    "domain": "www.synthesia.io",
    "name_ar": "Synthesia",
    "name_en": "Synthesia",
    "desc_ar": "إنشاء فيديوهات احترافية بأفاتار ذكاء اصطناعي بعدة لغات.",
    "desc_en": "Create professional videos with AI avatars in many languages."
  },
  {
    "id": "ai-47",
    "category": "ai",
    "url": "https://www.descript.com",
    "domain": "www.descript.com",
    "name_ar": "Descript",
    "name_en": "Descript",
    "desc_ar": "تحرير صوت وفيديو بالذكاء الاصطناعي عن طريق تعديل النص.",
    "desc_en": "Edit audio and video by editing text, powered by AI."
  },
  {
    "id": "automation-1",
    "category": "automation",
    "url": "https://n8n.io",
    "domain": "n8n.io",
    "name_ar": "n8n",
    "name_en": "n8n",
    "desc_ar": "أداة أتمتة مفتوحة المصدر لربط التطبيقات وبناء مسارات عمل تلقائية.",
    "desc_en": "Open-source automation tool for connecting apps and building workflows."
  },
  {
    "id": "tools-1",
    "category": "tools",
    "url": "https://tinywow.com",
    "domain": "tinywow.com",
    "name_ar": "TinyWow",
    "name_en": "TinyWow",
    "desc_ar": "مجموعة أدوات مجانية لتحرير الصور والفيديو وملفات PDF.",
    "desc_en": "Free suite of tools for images, video and PDF editing."
  },
  {
    "id": "tools-2",
    "category": "tools",
    "url": "https://hilltopads.com/login",
    "domain": "hilltopads.com",
    "name_ar": "HilltopAds",
    "name_en": "HilltopAds",
    "desc_ar": "شبكة إعلانية لعرض وإدارة الإعلانات على المواقع.",
    "desc_en": "Ad network for displaying and managing website ads."
  },
  {
    "id": "prompts-1",
    "category": "prompts",
    "url": "https://prompthero.com",
    "domain": "prompthero.com",
    "name_ar": "PromptHero",
    "name_en": "PromptHero",
    "desc_ar": "مكتبة ضخمة لبرومبتات الصور والفيديو بالذكاء الاصطناعي.",
    "desc_en": "Large library of prompts for AI image and video generation."
  },
  {
    "id": "prompts-2",
    "category": "prompts",
    "url": "https://www.meigen.ai",
    "domain": "www.meigen.ai",
    "name_ar": "Meigen AI",
    "name_en": "Meigen AI",
    "desc_ar": "أداة مساعدة لصياغة برومبتات احترافية للذكاء الاصطناعي.",
    "desc_en": "Tool for crafting professional AI prompts."
  },
  {
    "id": "prompts-3",
    "category": "prompts",
    "url": "https://aicameramovements.com",
    "domain": "aicameramovements.com",
    "name_ar": "AI Camera Movements",
    "name_en": "AI Camera Movements",
    "desc_ar": "مرجع لحركات الكاميرا السينمائية لاستخدامها في برومبتات الفيديو.",
    "desc_en": "Reference for cinematic camera moves to use in video prompts."
  },
  {
    "id": "prompts-4",
    "category": "prompts",
    "url": "https://enzozid.com/prompts.html",
    "domain": "enzozid.com",
    "name_ar": "Enzozid Prompts",
    "name_en": "Enzozid Prompts",
    "desc_ar": "مجموعة برومبتات جاهزة للاستخدام مع أدوات الذكاء الاصطناعي.",
    "desc_en": "Collection of ready-to-use prompts for AI tools."
  },
  {
    "id": "marketing-1",
    "category": "marketing",
    "url": "https://app.fieldagent.net",
    "domain": "app.fieldagent.net",
    "name_ar": "Field Agent",
    "name_en": "Field Agent",
    "desc_ar": "منصة لتنفيذ مهام ميدانية وأبحاث سوق مقابل أجر.",
    "desc_en": "Platform for paid field tasks and market research."
  },
  {
    "id": "marketing-2",
    "category": "marketing",
    "url": "https://affiliate.cjdropshipping.com",
    "domain": "affiliate.cjdropshipping.com",
    "name_ar": "CJ Dropshipping - Affiliate",
    "name_en": "CJ Dropshipping Affiliate",
    "desc_ar": "برنامج تسويق بالعمولة لمنصة CJ Dropshipping.",
    "desc_en": "Affiliate program for the CJ Dropshipping platform."
  },
  {
    "id": "marketing-3",
    "category": "marketing",
    "url": "https://affiliate-program.amazon.com",
    "domain": "affiliate-program.amazon.com",
    "name_ar": "Amazon Associates",
    "name_en": "Amazon Associates",
    "desc_ar": "برنامج أمازون للتسويق بالعمولة.",
    "desc_en": "Amazon's affiliate marketing program."
  },
  {
    "id": "marketing-4",
    "category": "marketing",
    "url": "https://temu.to/m/u43na3xawpu",
    "domain": "temu.to",
    "name_ar": "Temu",
    "name_en": "Temu",
    "desc_ar": "منصة تسوق إلكتروني عالمية بأسعار منخفضة.",
    "desc_en": "Global e-commerce shopping platform with low prices."
  },
  {
    "id": "marketing-5",
    "category": "marketing",
    "url": "https://medium.com",
    "domain": "medium.com",
    "name_ar": "Medium",
    "name_en": "Medium",
    "desc_ar": "منصة نشر مقالات وكتابة للمدونين والكتّاب.",
    "desc_en": "Publishing platform for articles and writers."
  },
  {
    "id": "marketing-6",
    "category": "marketing",
    "url": "https://cjdropshipping.com",
    "domain": "cjdropshipping.com",
    "name_ar": "CJ Dropshipping",
    "name_en": "CJ Dropshipping",
    "desc_ar": "منصة دروبشيبنج لإيجاد وشحن المنتجات للمتاجر الإلكترونية.",
    "desc_en": "Dropshipping platform for sourcing and shipping products."
  },
  {
    "id": "marketing-7",
    "category": "marketing",
    "url": "https://www.verdent.ai/ar",
    "domain": "www.verdent.ai",
    "name_ar": "Verdent AI",
    "name_en": "Verdent AI",
    "desc_ar": "أداة ذكاء اصطناعي للتسويق والمحتوى.",
    "desc_en": "AI tool for marketing and content."
  },
  {
    "id": "marketing-8",
    "category": "marketing",
    "url": "https://blazr.net",
    "domain": "blazr.net",
    "name_ar": "Blazr",
    "name_en": "Blazr",
    "desc_ar": "أداة لإدارة وتحسين حملات التسويق الرقمي.",
    "desc_en": "Tool for managing and optimizing digital marketing campaigns."
  },
  {
    "id": "marketing-9",
    "category": "marketing",
    "url": "https://www.etsy.com",
    "domain": "www.etsy.com",
    "name_ar": "Etsy",
    "name_en": "Etsy",
    "desc_ar": "سوق إلكتروني عالمي لبيع المنتجات اليدوية والإبداعية.",
    "desc_en": "Global marketplace for handmade and creative goods."
  },
  {
    "id": "marketing-10",
    "category": "marketing",
    "url": "https://www.easyorders.ai",
    "domain": "www.easyorders.ai",
    "name_ar": "Easy Orders",
    "name_en": "Easy Orders",
    "desc_ar": "نظام لإدارة طلبات المتاجر الإلكترونية والدروبشيبنج.",
    "desc_en": "Order management system for e-commerce and dropshipping."
  },
  {
    "id": "marketing-11",
    "category": "marketing",
    "url": "https://jo.iherb.com",
    "domain": "jo.iherb.com",
    "name_ar": "iHerb",
    "name_en": "iHerb",
    "desc_ar": "متجر عالمي لمنتجات الصحة والمكملات الغذائية.",
    "desc_en": "Global store for health products and supplements."
  },
  {
    "id": "marketing-12",
    "category": "marketing",
    "url": "https://www.alibaba.com",
    "domain": "www.alibaba.com",
    "name_ar": "Alibaba",
    "name_en": "Alibaba",
    "desc_ar": "منصة تجارة إلكترونية عالمية للشراء بالجملة من الموردين.",
    "desc_en": "Global B2B e-commerce platform for wholesale sourcing."
  },
  {
    "id": "marketing-13",
    "category": "marketing",
    "url": "https://c8ke.com",
    "domain": "c8ke.com",
    "name_ar": "C8ke",
    "name_en": "C8ke",
    "desc_ar": "أداة لتتبع وتحليل بيانات المنتجات والمتاجر.",
    "desc_en": "Tool for tracking and analyzing product and store data."
  },
  {
    "id": "marketing-14",
    "category": "marketing",
    "url": "https://www.kalodata.com",
    "domain": "www.kalodata.com",
    "name_ar": "Kalodata",
    "name_en": "Kalodata",
    "desc_ar": "أداة تحليل بيانات المنتجات الرائجة على TikTok Shop.",
    "desc_en": "Data analytics tool for trending TikTok Shop products."
  },
  {
    "id": "marketing-15",
    "category": "marketing",
    "url": "https://www.jasper.ai",
    "domain": "www.jasper.ai",
    "name_ar": "Jasper AI",
    "name_en": "Jasper AI",
    "desc_ar": "أداة ذكاء اصطناعي لكتابة محتوى تسويقي احترافي.",
    "desc_en": "AI tool for writing professional marketing content."
  },
  {
    "id": "marketing-16",
    "category": "marketing",
    "url": "https://www.dropship.io",
    "domain": "www.dropship.io",
    "name_ar": "Dropship.io",
    "name_en": "Dropship.io",
    "desc_ar": "أداة بحث عن منتجات رابحة للدروبشيبنج.",
    "desc_en": "Product research tool for finding winning dropshipping items."
  },
  {
    "id": "marketing-17",
    "category": "marketing",
    "url": "https://jobright.ai",
    "domain": "jobright.ai",
    "name_ar": "Jobright AI",
    "name_en": "Jobright AI",
    "desc_ar": "مساعد ذكاء اصطناعي للبحث عن وظائف وتحسين السيرة الذاتية.",
    "desc_en": "AI assistant for job search and resume optimization."
  },
  {
    "id": "marketing-18",
    "category": "marketing",
    "url": "https://durable.com",
    "domain": "durable.com",
    "name_ar": "Durable",
    "name_en": "Durable",
    "desc_ar": "إنشاء موقع ويب لعملك بالذكاء الاصطناعي خلال دقائق.",
    "desc_en": "Build a business website with AI in minutes."
  },
  {
    "id": "marketing-19",
    "category": "marketing",
    "url": "https://www.lightfunnels.com/ar",
    "domain": "www.lightfunnels.com",
    "name_ar": "LightFunnels",
    "name_en": "LightFunnels",
    "desc_ar": "منصة لبناء صفحات هبوط ومتاجر إلكترونية سريعة.",
    "desc_en": "Platform for building landing pages and fast online stores."
  },
  {
    "id": "digital-products-1",
    "category": "digital-products",
    "url": "https://gumroad.com",
    "domain": "gumroad.com",
    "name_ar": "Gumroad",
    "name_en": "Gumroad",
    "desc_ar": "منصة لبيع المنتجات الرقمية والكورسات مباشرة للجمهور.",
    "desc_en": "Platform for selling digital products and courses directly."
  },
  {
    "id": "digital-products-2",
    "category": "digital-products",
    "url": "https://payhip.com",
    "domain": "payhip.com",
    "name_ar": "Payhip",
    "name_en": "Payhip",
    "desc_ar": "منصة لبيع الكتب الرقمية والمنتجات والاشتراكات.",
    "desc_en": "Platform for selling ebooks, digital products and memberships."
  },
  {
    "id": "digital-products-3",
    "category": "digital-products",
    "url": "https://alfan.io/ar",
    "domain": "alfan.io",
    "name_ar": "Alfan",
    "name_en": "Alfan",
    "desc_ar": "منصة عربية لبيع المنتجات الرقمية والدورات.",
    "desc_en": "Arabic platform for selling digital products and courses."
  },
  {
    "id": "digital-products-4",
    "category": "digital-products",
    "url": "https://ko-fi.com",
    "domain": "ko-fi.com",
    "name_ar": "Ko-fi",
    "name_en": "Ko-fi",
    "desc_ar": "منصة لدعم المبدعين وبيع منتجات رقمية بسيطة.",
    "desc_en": "Platform for supporting creators and selling simple digital goods."
  },
  {
    "id": "digital-products-5",
    "category": "digital-products",
    "url": "https://digify.store",
    "domain": "digify.store",
    "name_ar": "Digify",
    "name_en": "Digify",
    "desc_ar": "متجر لبيع وحماية المنتجات الرقمية.",
    "desc_en": "Store for selling and protecting digital products."
  },
  {
    "id": "articles-1",
    "category": "articles",
    "url": "https://nathre.com/dashboard",
    "domain": "nathre.com",
    "name_ar": "Nathre",
    "name_en": "Nathre",
    "desc_ar": "أداة عربية لإنشاء مقالات ومحتوى بالذكاء الاصطناعي.",
    "desc_en": "Arabic AI tool for generating articles and content."
  },
  {
    "id": "articles-2",
    "category": "articles",
    "url": "https://seowriting.ai",
    "domain": "seowriting.ai",
    "name_ar": "SEOWriting AI",
    "name_en": "SEOWriting AI",
    "desc_ar": "أداة لكتابة مقالات متوافقة مع محركات البحث SEO بالذكاء الاصطناعي.",
    "desc_en": "AI tool for writing SEO-optimized articles."
  },
  {
    "id": "images-1",
    "category": "images",
    "url": "https://pixabay.com",
    "domain": "pixabay.com",
    "name_ar": "Pixabay",
    "name_en": "Pixabay",
    "desc_ar": "مكتبة صور وفيديوهات مجانية خالية من حقوق الملكية.",
    "desc_en": "Free library of royalty-free images and videos."
  },
  {
    "id": "google-1",
    "category": "google",
    "url": "https://workspace.google.com/products/vids/",
    "domain": "workspace.google.com",
    "name_ar": "Google Vids",
    "name_en": "Google Vids",
    "desc_ar": "أداة من جوجل لإنشاء فيديوهات عمل بسيطة بالذكاء الاصطناعي.",
    "desc_en": "Google's AI tool for creating simple work videos."
  },
  {
    "id": "google-2",
    "category": "google",
    "url": "https://www.dola.com/chat/",
    "domain": "www.dola.com",
    "name_ar": "Dola AI",
    "name_en": "Dola AI",
    "desc_ar": "مساعد ذكاء اصطناعي للجدولة والتذكير عبر المحادثة.",
    "desc_en": "AI chat assistant for scheduling and reminders."
  },
  {
    "id": "google-3",
    "category": "google",
    "url": "https://labs.google/fx/ar/tools/flow",
    "domain": "labs.google",
    "name_ar": "Google Flow",
    "name_en": "Google Flow",
    "desc_ar": "أداة تجريبية من Google Labs لإنشاء فيديو بالذكاء الاصطناعي.",
    "desc_en": "Experimental Google Labs tool for AI video creation."
  },
  {
    "id": "google-4",
    "category": "google",
    "url": "https://snapgen.ai",
    "domain": "snapgen.ai",
    "name_ar": "SnapGen AI",
    "name_en": "SnapGen AI",
    "desc_ar": "أداة لتوليد صور بالذكاء الاصطناعي بسرعة عالية.",
    "desc_en": "AI tool for fast image generation."
  },
  {
    "id": "google-5",
    "category": "google",
    "url": "https://vibes.ai",
    "domain": "vibes.ai",
    "name_ar": "Vibes AI",
    "name_en": "Vibes AI",
    "desc_ar": "أداة ذكاء اصطناعي لتوليد محتوى إبداعي.",
    "desc_en": "AI tool for creative content generation."
  },
  {
    "id": "google-6",
    "category": "google",
    "url": "https://docs.google.com",
    "domain": "docs.google.com",
    "name_ar": "Google Docs",
    "name_en": "Google Docs",
    "desc_ar": "محرر مستندات سحابي مجاني من جوجل.",
    "desc_en": "Google's free cloud document editor."
  },
  {
    "id": "google-7",
    "category": "google",
    "url": "https://gemini.google.com/app",
    "domain": "gemini.google.com",
    "name_ar": "Gemini",
    "name_en": "Gemini",
    "desc_ar": "مساعد الذكاء الاصطناعي من Google للمحادثة والإنتاجية.",
    "desc_en": "Google's AI assistant for chat and productivity."
  },
  {
    "id": "google-8",
    "category": "google",
    "url": "https://opal.google/landing/",
    "domain": "opal.google",
    "name_ar": "Google Opal",
    "name_en": "Google Opal",
    "desc_ar": "أداة تجريبية من جوجل لبناء تطبيقات ذكاء اصطناعي بدون كود.",
    "desc_en": "Google's experimental no-code AI app builder."
  },
  {
    "id": "google-9",
    "category": "google",
    "url": "https://ads.google.com/intl/ar/start/",
    "domain": "ads.google.com",
    "name_ar": "Google Ads",
    "name_en": "Google Ads",
    "desc_ar": "منصة جوجل لإنشاء وإدارة الحملات الإعلانية.",
    "desc_en": "Google's platform for creating and managing ad campaigns."
  },
  {
    "id": "google-10",
    "category": "google",
    "url": "https://developers.google.com/analytics?hl=ar",
    "domain": "developers.google.com",
    "name_ar": "Google Analytics",
    "name_en": "Google Analytics",
    "desc_ar": "أداة تحليل زوار وأداء المواقع من جوجل.",
    "desc_en": "Google's tool for tracking website traffic and performance."
  },
  {
    "id": "google-11",
    "category": "google",
    "url": "https://blog.google/innovation-and-ai/technology/ai/",
    "domain": "blog.google",
    "name_ar": "Google AI Blog",
    "name_en": "Google AI Blog",
    "desc_ar": "مدونة جوجل الرسمية لآخر أخبار وتحديثات الذكاء الاصطناعي.",
    "desc_en": "Google's official blog for AI news and updates."
  },
  {
    "id": "google-12",
    "category": "google",
    "url": "https://www.chatartpro.com",
    "domain": "www.chatartpro.com",
    "name_ar": "ChatArt Pro",
    "name_en": "ChatArt Pro",
    "desc_ar": "تطبيق دردشة وتوليد صور بالذكاء الاصطناعي.",
    "desc_en": "AI chat and image generation app."
  },
  {
    "id": "google-13",
    "category": "google",
    "url": "https://notebooklm.google.com",
    "domain": "notebooklm.google.com",
    "name_ar": "NotebookLM",
    "name_en": "NotebookLM",
    "desc_ar": "مساعد بحث وتدوين من جوجل يلخّص مصادرك الخاصة.",
    "desc_en": "Google's research assistant that summarizes your own sources."
  },
  {
    "id": "app-building-1",
    "category": "app-building",
    "url": "https://app.emergent.sh/landing/",
    "domain": "app.emergent.sh",
    "name_ar": "Emergent",
    "name_en": "Emergent",
    "desc_ar": "منصة لبناء تطبيقات كاملة بالذكاء الاصطناعي من وصف نصي.",
    "desc_en": "AI platform for building full apps from a text description."
  },
  {
    "id": "app-building-2",
    "category": "app-building",
    "url": "https://manus.im/login",
    "domain": "manus.im",
    "name_ar": "Manus",
    "name_en": "Manus",
    "desc_ar": "وكيل ذكاء اصطناعي عام لتنفيذ مهام معقدة تلقائيًا.",
    "desc_en": "General AI agent for executing complex tasks autonomously."
  },
  {
    "id": "app-building-3",
    "category": "app-building",
    "url": "https://replit.com/~",
    "domain": "replit.com",
    "name_ar": "Replit",
    "name_en": "Replit",
    "desc_ar": "بيئة تطوير سحابية للبرمجة وبناء التطبيقات بمساعدة الذكاء الاصطناعي.",
    "desc_en": "Cloud coding environment with AI-assisted app building."
  },
  {
    "id": "app-building-4",
    "category": "app-building",
    "url": "https://www.autocoder.cc/en/",
    "domain": "www.autocoder.cc",
    "name_ar": "Autocoder",
    "name_en": "Autocoder",
    "desc_ar": "أداة تحويل الأفكار إلى تطبيقات برمجية بالذكاء الاصطناعي.",
    "desc_en": "AI tool that turns ideas into working apps."
  },
  {
    "id": "domains-1",
    "category": "domains",
    "url": "https://www.namecheap.com/domains/registration/results/",
    "domain": "www.namecheap.com",
    "name_ar": "Namecheap",
    "name_en": "Namecheap",
    "desc_ar": "تسجيل أسماء نطاقات (دومينات) بأسعار تنافسية.",
    "desc_en": "Domain name registration at competitive prices."
  },
  {
    "id": "domains-2",
    "category": "domains",
    "url": "https://www.hostinger.com/ae",
    "domain": "www.hostinger.com",
    "name_ar": "Hostinger",
    "name_en": "Hostinger",
    "desc_ar": "خدمات استضافة مواقع وتسجيل دومينات بأسعار مناسبة.",
    "desc_en": "Web hosting and domain registration services."
  },
  {
    "id": "audio-1",
    "category": "audio",
    "url": "https://lahajati.ai/login",
    "domain": "lahajati.ai",
    "name_ar": "لهجاتي AI",
    "name_en": "Lahajati AI",
    "desc_ar": "أداة تحويل النص إلى كلام باللهجات العربية المختلفة.",
    "desc_en": "Arabic dialect text-to-speech AI tool."
  },
  {
    "id": "audio-2",
    "category": "audio",
    "url": "https://elevenlabs.io",
    "domain": "elevenlabs.io",
    "name_ar": "ElevenLabs",
    "name_en": "ElevenLabs",
    "desc_ar": "أداة رائدة لتحويل النص إلى صوت واقعي واستنساخ الأصوات.",
    "desc_en": "Leading AI text-to-speech and voice cloning tool."
  },
  {
    "id": "audio-3",
    "category": "audio",
    "url": "https://www.minimax.io",
    "domain": "www.minimax.io",
    "name_ar": "MiniMax",
    "name_en": "MiniMax",
    "desc_ar": "منصة ذكاء اصطناعي متعددة الوسائط للصوت والفيديو والنص.",
    "desc_en": "Multimodal AI platform for audio, video and text."
  },
  {
    "id": "audio-4",
    "category": "audio",
    "url": "https://voicebox.sh/download",
    "domain": "voicebox.sh",
    "name_ar": "Voicebox",
    "name_en": "Voicebox",
    "desc_ar": "أداة لتوليد وتحرير الأصوات بالذكاء الاصطناعي.",
    "desc_en": "AI tool for generating and editing voices."
  },
  {
    "id": "audio-5",
    "category": "audio",
    "url": "https://murf.ai",
    "domain": "murf.ai",
    "name_ar": "Murf AI",
    "name_en": "Murf AI",
    "desc_ar": "استوديو تحويل نص إلى صوت احترافي للفيديوهات والعروض.",
    "desc_en": "Professional text-to-speech studio for videos and presentations."
  },
  {
    "id": "design-1",
    "category": "design",
    "url": "https://www.canva.com/ar/login/",
    "domain": "www.canva.com",
    "name_ar": "Canva",
    "name_en": "Canva",
    "desc_ar": "أداة تصميم جرافيك سهلة للجميع مع ميزات ذكاء اصطناعي.",
    "desc_en": "Easy graphic design tool for everyone with AI features."
  },
  {
    "id": "design-2",
    "category": "design",
    "url": "https://looka.com",
    "domain": "looka.com",
    "name_ar": "Looka",
    "name_en": "Looka",
    "desc_ar": "أداة لتصميم شعارات وهوية بصرية بالذكاء الاصطناعي.",
    "desc_en": "AI tool for designing logos and brand identity."
  },
  {
    "id": "ai-new-metaai",
    "category": "ai",
    "url": "https://www.meta.ai/",
    "domain": "www.meta.ai",
    "name_ar": "ميتا AI",
    "name_en": "Meta AI",
    "desc_ar": "مساعد ذكاء اصطناعي من ميتا للمحادثة وتوليد الصور والإجابة على الأسئلة.",
    "desc_en": "Meta's AI assistant for chat, image generation and answering questions."
  },
  {
    "id": "audio-new-mureka",
    "category": "audio",
    "url": "https://www.mureka.ai/create",
    "domain": "www.mureka.ai",
    "name_ar": "Mureka AI",
    "name_en": "Mureka AI",
    "desc_ar": "منصة لتوليد أغاني وموسيقى كاملة بالذكاء الاصطناعي من كلمات أو وصف نصي.",
    "desc_en": "AI platform for generating full songs and music from lyrics or a text prompt."
  }
];

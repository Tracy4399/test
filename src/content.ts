// 以下全部是展示用示例。收到真实文字与照片后，在本文件替换并重新构建。
export type Category = '日常随笔' | '旅行记录' | '读书感想'

export type Article = {
  slug: string
  title: string
  category: Category
  date: string
  summary: string
  readMinutes: number
  image?: string
  listImage?: string
  imageAlt?: string
  paragraphs: string[]
  sections: { title: string; paragraphs: string[] }[]
  quote?: string
}

export const site = {
  name: '你的名字（示例占位）',
  logo: '博主名字 / Blog Title',
  intro: '这里放一段自我介绍。关于日常、旅行与阅读的记录，从一篇文字或一组照片开始认识我。',
  focus: '文字与影像是抵抗遗忘的双重锚点。这里汇集长文深度随笔、零散野外札记与偶得观察。',
}

export const categories: Category[] = ['日常随笔', '旅行记录', '读书感想']

export const articles: Article[] = [
  {
    slug: 'morning-notes',
    title: '晨光、修剪植物与未写的笔记',
    category: '日常随笔',
    date: '2025.02.18',
    summary: '在静默的早晨整理被日光浸润的书桌，留白即是重新生长的土壤。修剪窗台植物的枯叶，记录尚未写完的日常思绪。',
    readMinutes: 4,
    image: '/images/article-1.jpg',
    listImage: '/images/writing-1.jpg',
    imageAlt: '晨光下的植物和打开的笔记本，示例照片',
    paragraphs: [
      '窗外的天光在清晨七点十分左右变得明亮。冬天房间里那盏靠前一晚的干燥和微凉，水壶烧开的白汽在玻璃窗上凝结成细小的雾气。桌上一向保持整洁，却总摆着几件暂时放不下的东西：一本翻到半页的书，一枝笔，还有一盆生长得不太整齐的小植物。',
      '我们常常习惯性地以为，日常生活的秩序来源于精密的钟表刻度或是日程表上排列整齐的待办清单。然而在那些不需要匆忙出门的清晨，真正安静的往往是更为细微的物理变化：水温从烫手逐渐变得温吞，房间里的阴影沿着白墙以毫米为刻度爬行。',
    ],
    sections: [
      {
        title: '关于日常节奏与注意力的留存',
        paragraphs: [
          '拿起植物小剪刀，绕着向上的几处东西根部轻轻地逐一度量清水。水滴在空中悬浮了几秒，随后化作极其细小的波浪挂在潮湿的叶缘边缘。修剪掉最近被阳光抽离变薄的旧叶，指尖会沾上一股清淡的草木汁液香气。',
          '现代环境里最大的消耗，也许并不是体力的支出，而是注意力被无休止的即时信号切割得支离破碎。在信息浪潮的拍打下，我们很难保持完整的感受。而观察一株植物的过程恰恰是对抗这种碎裂的解药。',
        ],
      },
      {
        title: '纸本笔记与未完成的篇章',
        paragraphs: [
          '那些留在笔记本边缘尚未完结的段落，常常让人产生一种特别的温情。翻开上个月写下的零散旅行，字迹里还保留着书写时笔尖在纸张纹理上的轻微阻尼。未完成的句子并不意味着停顿，而是给日后的回忆保留了一处透气的空隙。',
          '当太阳升到与窗台平齐的高度，屋内的亮气终于彻底铺散。阳光直射往往开始有点让人感到温热，白色的纸面反射出柔和而坚定的明亮。在这样的早晨里，写下一行朴素的字句，就像是在无垠的时间长河里轻轻投下一枚石子。',
        ],
      },
    ],
    quote: '如果一件事情值得被记录，那它首先值得被安静地对待。',
  },
  {
    slug: 'harbour-evening',
    title: '海港的暮色与渡轮汽笛',
    category: '旅行记录',
    date: '2025.01.24',
    summary: '傍晚港口的冷风吹起薄雾，渡轮鸣笛划过微凉的水面。坐在避风的木椅上，看着夕阳一寸寸退回地平线以下。',
    readMinutes: 6,
    image: '/images/writing-2.jpg',
    imageAlt: '暮色中的海港与渡轮，示例照片',
    paragraphs: ['天色渐暗时来到海边，码头的木板仍留着一整天的温度。渡轮靠岸，汽笛声短促地响起，似乎把岸上的时间也向前推了一小格。', '旅途中最想记下来的，未必是抵达了哪里。有时只是一阵风、一张等候的长椅，或远处亮起来的第一盏灯。'],
    sections: [{ title: '沿着水边慢慢走', paragraphs: ['海面把余光揉成细碎的线。回头看时，来时的路和将要走的路都在同一个傍晚里，变得比地图上更清楚。'] }],
  },
  {
    slug: 'reading-houses',
    title: '读《造房子》：重温建筑里的朴素手工感',
    category: '读书感想',
    date: '2025.01.08',
    summary: '重读王澍的文字，感知砖石、瓦片与木作在空间中留存的人类劳作痕迹。朴素的手工质感在快节奏技术时代里显温润。',
    readMinutes: 5,
    paragraphs: ['读一本关于建筑的书时，目光会不自觉地停在窗框、墙角和门槛上。那些平时被匆匆略过的地方，忽然有了手的温度。'],
    sections: [{ title: '把目光放慢', paragraphs: ['这是一篇示例读书笔记。正式发布前，请以真实阅读感受替换这里的文字，并核对书名、作者和引用。'] }],
  },
  {
    slug: 'letters-and-film',
    title: '关于整理旧书信与胶片底片的一天',
    category: '日常随笔',
    date: '2024.12.19',
    summary: '年末整理物品的思考，关于时间痕迹与记忆存储的占位文字。玻璃纸底片缓缓泛出微黄，很像散落在透光台下重现七年前的夏日午后。',
    readMinutes: 6,
    paragraphs: ['从抽屉里翻出旧信封时，原本只是想为新一年腾出一点空间。纸张边缘已经变软，墨色却依旧清晰。'],
    sections: [{ title: '旧物里的时间', paragraphs: ['这一段为示例内容。它展示长文与短文都可以自然向下生长，不需要被固定高度裁切。'] }],
  },
  {
    slug: 'kyoto-garden',
    title: '深秋京都寺院苔庭漫步',
    category: '旅行记录',
    date: '2024.11.14',
    summary: '安静的庭园与脚步声，视觉旅行记录的占位摘要。落叶覆在青苔之上，石灯笼旁的细雨将沙砾打湿成近乎墨色的石墨色。',
    readMinutes: 8,
    image: '/images/writing-3.jpg',
    imageAlt: '秋日庭园与湿润石径，示例照片',
    paragraphs: ['石径被细雨洗过，树叶落在路旁，像替行人标出一条更缓慢的路线。走近庭园时，首先听到的是脚下的声音。'],
    sections: [{ title: '沿着苔庭往里走', paragraphs: ['这里是一篇旅行记录示例。实际地点、经历和时间都应由你提供后替换。'] }],
  },
  {
    slug: 'reading-time',
    title: '读《时间的秩序》：物理学中的流动与停留',
    category: '读书感想',
    date: '2024.10.30',
    summary: '物理学随笔读书感悟占位摘要。罗韦利将坚实的世界拆解为关系与事件的编织。过去与未来的边界在微观尺度下消解。',
    readMinutes: 4,
    paragraphs: ['书中的“时间”不再像日历上整齐排列的数字。读到这里，忍不住停下来，望向窗外正在变化的光。'],
    sections: [{ title: '留给自己的一页笔记', paragraphs: ['这是示例读书感想。请在替换时核对自己的阅读理解与书中原意。'] }],
  },
]

export type Photo = { id: string; src: string; alt: string; title: string; description: string }
export type PhotoGroup = { id: string; title: string; subtitle: string; cover: string; photos: Photo[] }

export const photoGroups: PhotoGroup[] = [
  {
    id: 'journey', title: '关西行旅：光影与木造建筑', subtitle: '在行走中，收藏远方与木造空间里的自然光。', cover: '/images/home-1.jpg',
    photos: [
      { id: 'veranda', src: '/images/home-1.jpg', alt: '阳光落在木造回廊，示例照片', title: '木造回廊的午后', description: '示例图片说明：透过敞开的廊道，看见庭园和往前延伸的路。' },
      { id: 'garden', src: '/images/writing-3.jpg', alt: '雨后庭园石径，示例照片', title: '雨后的庭园', description: '示例图片说明：石径与绿意让脚步自然放慢。' },
      { id: 'horizon', src: '/images/collection-4.jpg', alt: '木造舞台望向山间晨光，示例照片', title: '望向远山的晨光', description: '示例图片说明：视线越过栏杆，落在薄雾中的山脊。' },
    ],
  },
  {
    id: 'desk', title: '书桌物语与日常静物', subtitle: '从一杯热饮、一本笔记和窗边植物开始的观察。', cover: '/images/home-2.jpg',
    photos: [
      { id: 'coffee', src: '/images/collection-1.jpg', alt: '晨光中的手冲壶与咖啡杯，示例照片', title: '晨起第一杯咖啡', description: '示例图片说明：桌面上的热气与清晨的光线。' },
      { id: 'ink', src: '/images/collection-2.jpg', alt: '墨水试纸与打开的笔记本，示例照片', title: '墨水试纸与笔记', description: '示例图片说明：纸张、墨迹和未完成的想法。' },
      { id: 'plants', src: '/images/collection-3.jpg', alt: '窗台上排列的多肉植物，示例照片', title: '窗台上的植物', description: '示例图片说明：午后的光穿过玻璃，落在陶盆和叶片上。' },
    ],
  },
]

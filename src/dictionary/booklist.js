import html1 from "../assets/img/booklist/html1.jpeg";
import html2 from "../assets/img/booklist/html2.jpeg";
import css1 from "../assets/img/booklist/css1.jpeg";
import css2 from "../assets/img/booklist/css2.jpeg";
import js1 from "../assets/img/booklist/js1.jpeg";
import js2 from "../assets/img/booklist/js2.jpeg";
import js3 from "../assets/img/booklist/js3.jpeg";
import dom1 from "../assets/img/booklist/dom1.jpeg";
import dom2 from "../assets/img/booklist/dom2.jpeg";
import dom3 from "../assets/img/booklist/dom3.jpeg";
import es6 from "../assets/img/booklist/es6.jpeg";
const booklistapi = () => {
  let booklist = [
    {
      name: "《Head First HTML与CSS(第2版)》",
      logo: html1,
      href: "https://book.douban.com/subject/25752357/",
      describe:
        "是前端入门的经典书籍，手把手教学，丰富的案例让你从 0 开始学前端。前端初学者首选书籍",
      technology: ["HTML", "CSS"],
      time: "2022-03-16",
      reply: [
        {
          name: "Puter",
          comment:
            "本书适合自学过 CSS 的人但希望全面了解 CSS 的人阅读。由浅入深，全面易懂，不愧为权威指南。虽然内容有点儿老，但依然能够满足学习的需求。希望出版社能引进更新的版本。",
        },
        {
          name: "蚂蚁",
          comment:
            "快速翻读，细看了前两章（第二章“选择器”），目的在于大概明白CSS是咋回事，能做什么本书细节很多，应该是给前端设计人员读的吧。",
        },
        {
          name: "咩咩",
          comment:
            "豆瓣笔记18篇, 与平常看博客的相比，很有内容。但中文翻译一般, 内容又与标准文档很暧昧, 总是不愿把文档的原文拿出来, 非要自己说一遍, 还有几处错误, 超出文档讲浏览器实现差异的东西也不多。所以虽然给4星还是建议如果到了想看这本书的程度还是直接看文档吧，文档其实很清晰~",
        },
      ],
    },
    {
      name: "《精通CSS：高级Web标准解决方案(第3版)》",
      logo: html2,
      href: "https://book.douban.com/subject/30450258/",
      describe:
        "前端大神Winter在最近公开推荐过这本书，将它和《JavaScript高级程序设计（第3版）》列为前端必读。书中介绍了涉及字体、网页布局、响应式Web设计、表单、动画等方面的实用技巧，并讨论了如何实现稳健、灵活、无障碍访问的Web设计，以及在技术层面如何实现跨浏览器方案和后备方案",
      technology: ["CSS"],
      time: "2022-03-16",
      reply: [
        {
          name: "ccccc",
          comment:
            "在命名变量时，我用下划线来分隔各个单词；在命名函数时，我从第二个单词开始把每个单词的第一个字母写成大写形式（也就是所谓的camel记号）。我这么做是为了让自己能够一眼看出哪些名字是变量、哪些名字是函数。函数在行为方面应该像一个自我包容的脚本，而这意味着在定义一个函数时，我们必须把它内部的变量全都明确地声明为局部变量。 (",
        },
        {
          name: "和海龙",
          comment:
            "在没有实践操作的情况下阅读了全书，解决了我这个外行人很多代码方面的困惑。不愧是最佳入门书籍。改天有空要把示例亲自实现一遍并完成几项留给自己的作业。",
        },
        {
          name: "lry",
          comment:
            "半年前，当我对JavaScript还停留在只认识这几个字母的时候，有一天我突然心血来潮，在网上下了DOM Scripting的样章，照着里面的例子写了我平生第一个能让我知所以然JavaScript，在浏览器运行成功，兴奋不已，从此能把学习编程的热情持续半年以上，破了过去只能热一两个星期的记...",
        },
      ],
    },

    {
      name: "《CSS权威指南(第三版)》",
      logo: css1,
      href: "https://book.douban.com/subject/2308234/",
      describe:
        "这本书也是非常的经典了，2007 年的书了，但是无不影响这本书作为 CSS 的经典著作，把原理讲得非常的通透，除了 w3c 标准，算最权威的一本了，毕竟权威指南，可以当做开发工具书来查阅",
      technology: ["HTML", "CSS"],
      time: "2022-03-16",
      reply: [
        {
          name: "Puter",
          comment:
            "本书适合自学过 CSS 的人但希望全面了解 CSS 的人阅读。由浅入深，全面易懂，不愧为权威指南。虽然内容有点儿老，但依然能够满足学习的需求。希望出版社能引进更新的版本。",
        },
        {
          name: "蚂蚁",
          comment:
            "快速翻读，细看了前两章（第二章“选择器”），目的在于大概明白CSS是咋回事，能做什么本书细节很多，应该是给前端设计人员读的吧。",
        },
        {
          name: "咩咩",
          comment:
            "豆瓣笔记18篇, 与平常看博客的相比，很有内容。但中文翻译一般, 内容又与标准文档很暧昧, 总是不愿把文档的原文拿出来, 非要自己说一遍, 还有几处错误, 超出文档讲浏览器实现差异的东西也不多。所以虽然给4星还是建议如果到了想看这本书的程度还是直接看文档吧，文档其实很清晰~",
        },
      ],
    },
    {
      name: "《CSS揭秘》",
      logo: css2,
      href: "https://book.douban.com/subject/26745943/",
      describe:
        "豆瓣评分9.4。神书，47 个 css 技巧让你在面对各种 css 问题的时候游刃有余。豆瓣评分 9.4 ，是 css 书籍中评分最高的了，css 进阶必备",
      technology: ["HTML", "CSS"],
      time: "2022-03-16",
    },
    {
      name: "《JavaScript高级程序设计(第4版)》",
      logo: js1,
      href: "https://book.douban.com/subject/35175321/",
      describe:
        "经典红宝书，是JavaScript入门书籍最佳选择之一。Zakas大神把概念深入浅出，将JavaScript的语法要点讲清楚明白。小红书配合犀牛书，相互印证",
      technology: ["JavaScript"],
      time: "2022-03-16",
      reply: [
        {
          name: "望春风",
          comment:
            "书评九成是刷的，写出那么空洞书评的人不可能读过这本书。内容挺多，实用部分不到十分之一，不过工作中也一样，object方法千千万，实际调用一二三。是本纯粹的框架书兼字典书，某个常用方法的用法，直接翻阮一峰的博客可能比这本书有效，但书的作用在于完整的框架，特别生僻的，即将被丢进历史垃圾桶的东西也包括进去了。",
        },
        {
          name: "yuguo",
          comment:
            "书籍太多了,我们反而不能每本都详读。如果你需要全面的了解JavaScript,知道JavaScript的语法,DOM,正则表达式,事件,浏览器差异等等,那么仅仅看这本书就够了,剩下的就是需要一个api手册和不停的实践了。",
        },
      ],
    },
    {
      name: "《JavaScript权威指南》",
      logo: js2,
      href: "https://book.douban.com/subject/35396470/",
      describe:
        "犀牛书是每个FE都绕不过的一本书，可以先大致通读几遍，也可以把其当作工具书，时时翻阅",
      technology: ["JavaScript"],
      time: "2022-03-16",
      reply: [
        {
          name: "wshe",
          comment:
            "算是仔细读过一遍，但是内容实在太多，感觉适合快速读过一遍之后当参考书用。想要提升 JavaScript 代码功力还得读一些专题性的书籍。",
        },
        {
          name: "石头",
          comment:
            "原文发表于《程序员》杂志。  《JavaScript 权威指南》的第 6 版是去年 4 月份出来的。当时我在 O’Reilly 官方网上商店购买《The Book of CSS3》，然后就顺手多买了一本最新版的《JavaScript 权威指南》。现在我买书都倾向于买电子版，好处是不用想办法把厚厚的一叠纸弄会国内..",
        },
        {
          name: "leechoera",
          comment:
            "书中较全面地对 JavaScript 的各种函数以及特性作了介绍，而后面占了全书超过一半内容的 JavaScript 核心参考、客户端 JavaScript 参考、DOM 参考，无疑是编写 JavaScript 时最有力的参考手册（当然，在线的除外）。",
        },
      ],
    },
    {
      name: "《你不知道的JavaScript》",
      logo: js3,
      href: "https://book.douban.com/subject/26351021/",
      describe:
        "堪称JavaScript的神书，分为上中下三册。书中的闭包、异步这些内容讲得很通透，读完有一种醍醐灌顶的感觉，值得花时间好好看一遍",
      technology: ["JavaScript"],
      time: "2022-03-16",
      reply: [
        {
          name: "ccccc",
          comment:
            "在命名变量时，我用下划线来分隔各个单词；在命名函数时，我从第二个单词开始把每个单词的第一个字母写成大写形式（也就是所谓的camel记号）。我这么做是为了让自己能够一眼看出哪些名字是变量、哪些名字是函数。函数在行为方面应该像一个自我包容的脚本，而这意味着在定义一个函数时，我们必须把它内部的变量全都明确地声明为局部变量。 (",
        },
        {
          name: "和海龙",
          comment:
            "在没有实践操作的情况下阅读了全书，解决了我这个外行人很多代码方面的困惑。不愧是最佳入门书籍。改天有空要把示例亲自实现一遍并完成几项留给自己的作业。",
        },
        {
          name: "lry",
          comment:
            "半年前，当我对JavaScript还停留在只认识这几个字母的时候，有一天我突然心血来潮，在网上下了DOM Scripting的样章，照着里面的例子写了我平生第一个能让我知所以然JavaScript，在浏览器运行成功，兴奋不已，从此能把学习编程的热情持续半年以上，破了过去只能热一两个星期的记...",
        },
      ],
    },
    {
      name: "《ES6 标准入门（第3版）》",
      logo: es6,
      href: "https://book.douban.com/subject/27127030/",
      describe:
        "还有阮一峰老师的开源书籍《ES6标准入门》也是值得推荐的。是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。虽然是开源书籍，但是有条件的可以购买实体书，支持一下阮一峰老师",
      technology: ["ES6"],
      time: "2022-03-16",
      reply: [
        {
          name: "李白白不起来",
          comment:
            "读完了，五星好评，望野前辈翻译的太有意思了，这个系列的丛书完全超越了老道的Good Parts，谁读谁知道。",
        },
        {
          name: "无疑",
          comment:
            "断断续续读了一个礼拜，了解到以前不太接触的东西，好神奇，虽然读到后面因为不了解ES6不太hold得住，技术还是很渣渣呀~",
        },
        {
          name: "yiyiyi",
          comment: "这是一套超越语言本身，能给你带来对编程模式思考的好书，",
        },
        {
          name: "Lee",
          comment:
            "断断续续花了两周的时间,总算是看完了怎么说呢,感觉这本书简直是前端界的鲁迅，class已经救不了ES6了哈哈哈哈",
        },
      ],
    },
    {
      name: "《JavaScript DOM高级程序设计》",
      logo: dom1,
      href: "https://book.douban.com/subject/3082278/",
      describe:
        "通过学习本书，可以理解一个JS的库如何产生，自己动手写一个简单的自己的JS库，如果你打算研究其他的JS库或者正在研究其他的JS库，那么这本书会使你的理解达到新的高度，进阶高级必读，写库必读",
      technology: ["JavaScript高级"],
      time: "2022-03-16",
      reply: [
        {
          name: "Puter",
          comment:
            "本书适合自学过 CSS 的人但希望全面了解 CSS 的人阅读。由浅入深，全面易懂，不愧为权威指南。虽然内容有点儿老，但依然能够满足学习的需求。希望出版社能引进更新的版本。",
        },
        {
          name: "蚂蚁",
          comment:
            "快速翻读，细看了前两章（第二章“选择器”），目的在于大概明白CSS是咋回事，能做什么本书细节很多，应该是给前端设计人员读的吧。",
        },
        {
          name: "咩咩",
          comment:
            "豆瓣笔记18篇, 与平常看博客的相比，很有内容。但中文翻译一般, 内容又与标准文档很暧昧, 总是不愿把文档的原文拿出来, 非要自己说一遍, 还有几处错误, 超出文档讲浏览器实现差异的东西也不多。所以虽然给4星还是建议如果到了想看这本书的程度还是直接看文档吧，文档其实很清晰~",
        },
      ],
    },
    {
      name: "《JavaScript DOM编程艺术(第2版)》",
      logo: dom2,
      href: "https://book.douban.com/subject/6038371/",
      describe:
        "本书在简洁明快地讲述JavaScript和DOM的基本知识之后，通过几个实例演示了专业水准的网页开发技术，透彻阐述了平稳退化等一批至关重要的 JavaScript编程原则和最佳实践",
      technology: ["JavaScript高级"],
      time: "2022-03-16",
      reply: [
        {
          name: "ccccc",
          comment:
            "在命名变量时，我用下划线来分隔各个单词；在命名函数时，我从第二个单词开始把每个单词的第一个字母写成大写形式（也就是所谓的camel记号）。我这么做是为了让自己能够一眼看出哪些名字是变量、哪些名字是函数。函数在行为方面应该像一个自我包容的脚本，而这意味着在定义一个函数时，我们必须把它内部的变量全都明确地声明为局部变量。 (",
        },
        {
          name: "和海龙",
          comment:
            "在没有实践操作的情况下阅读了全书，解决了我这个外行人很多代码方面的困惑。不愧是最佳入门书籍。改天有空要把示例亲自实现一遍并完成几项留给自己的作业。",
        },
        {
          name: "lry",
          comment:
            "半年前，当我对JavaScript还停留在只认识这几个字母的时候，有一天我突然心血来潮，在网上下了DOM Scripting的样章，照着里面的例子写了我平生第一个能让我知所以然JavaScript，在浏览器运行成功，兴奋不已，从此能把学习编程的热情持续半年以上，破了过去只能热一两个星期的记...",
        },
      ],
    },

    {
      name: "《javascript设计模式与开发实践》",
      logo: dom3,
      href: "https://book.douban.com/subject/26382780/",
      describe:
        "前端设计模式类的书本来就很少，这本是腾讯前端AlloyTeam团队出品，综合讲述前端的设计模式，设计原则，编程技巧，代码重构等等。AlloyTeam有自己的资源站，感兴趣的读者可以自行搜索，资源还有博客非常多，质量也很高",
      technology: ["JavaScript高级"],
      time: "2022-03-16",
      reply: [
        {
          name: "鱼鱼鱼",
          comment:
            "难得的国内作者著有的、基于 JavaScript 讲解设计模式的书，针对十来种更适合 JavaScript 的设计模式进行讲解，同时对模拟传统面向对象方法的类实现和原生 JavaScript 实现方式进行辨析，力荐！",
        },
        {
          name: "达茂旗仪式",
          comment: "js的“任性”导致很多设计模式实现起来都简化了，有利有弊吧。",
        },
        {
          name: "s1ojy",
          comment: "js的“任性”导致很多设计模式实现起来都简化了，有利有弊吧。",
        },
      ],
    },
  ];
  return booklist;
};
export default booklistapi;

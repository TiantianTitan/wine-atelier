export type SalesContent = {
  position: string;
  intro: string;
  craft: string;
  palate: string;
  story: string;
};

export const salesContent: Record<string, SalesContent> = {
  "les-grands-fiefs-1996": {
    position: "Listrac-Médoc AOC · 1.5L Magnum",
    intro: "1996 左岸强年装入少见的 1.5L Magnum，大瓶气势与成熟年份兼具，适合作为聚会主角、酒窖陈列或重要年份纪念藏品。",
    craft: "以赤霞珠、梅洛与品丽珠等左岸传统品种为基础；正标明确标示酒庄装瓶并经橡木桶熟成。1.5L 相当于两瓶标准装，Magnum 通常拥有更从容的陈年节奏。",
    palate: "在理想保存状态下，可期待干黑加仑、李子皮、雪松、烟草与皮革等成熟左岸气息，单宁趋于柔和。",
    story: "“1996 左岸强年 × 1.5L Magnum”是这瓶最鲜明的收藏标签；同规格老年份在私人聚会与生日年份场景中尤其少见。"
  },
  "chasse-spleen-1967": {
    position: "Moulis-en-Médoc AOC · Château Chasse-Spleen",
    intro: "近六十年瓶龄的 Château Chasse-Spleen，兼具 Moulis 风土与酒庄独特的文学气质，是一瓶辨识度很高的纪念年份藏酒。",
    craft: "以梅洛、赤霞珠等 Moulis 传统混酿为基础，由 Bordeaux 酒商 L. Bernial 留下历史装瓶标签，保留了当年酒庄与酒商体系并行的流通印记。",
    palate: "成熟风格可联想到干红果、雪松、烟草、皮革与干花，单宁经过漫长瓶陈后趋于纤细。",
    story: "Chasse-Spleen 的酒名常被理解为“驱散忧郁”，使它天然拥有诗歌、艺术与谈资属性，是 Bordeaux 最令人过目不忘的庄名之一。"
  },
  "grand-vin-medoc-1971": {
    position: "Médoc AOC · Cave de Bégadan 历史装瓶",
    intro: "来自 Bégadan-Médoc 地方酒窖的 1971 老年份，呈现了 Médoc 合作酿造与地方流通的真实历史切片。",
    craft: "采用 Médoc 传统红葡萄混酿，由 Cave de Vinification de Bégadan-Médoc 装瓶；古老控制标与旧式版面共同构成鲜明年代感。",
    palate: "成熟风格可联想到干红果、雪松、烟叶、土壤与皮革，适合围绕经典 Médoc 老酒气息展开品鉴话题。",
    story: "它的魅力不在现代品牌包装，而在一张完整保存至今的 1970 年代地方酒窖酒标，是出生年份与 Bordeaux 民间酿酒史的双重纪念。"
  },
  "chateau-verdus-1980-01": {
    position: "Haut-Médoc AOC · 历史酒标载 Cru Bourgeois",
    intro: "Château Verdus 1980 是一瓶带有历史 Cru Bourgeois 字样的 Haut-Médoc 老酒，旧标签本身便具有档案与收藏趣味。",
    craft: "以赤霞珠、梅洛、小维多等 Haut-Médoc 传统品种构成；酒标中的家族姓名与庄园装瓶信息保留了当时的生产脉络。",
    palate: "成熟表达可联想到红醋栗、雪松、烟草、皮革与落叶，呈现轻盈而古典的左岸轮廓。",
    story: "Peragallo 与 Dailledouze 两组姓名同现于酒标，记录了庄园家族交接；Verdus 与 Bardis 的历史关联也为藏家留下继续考据的空间。"
  },
  "phelan-segur-1961": {
    position: "Saint-Estèphe AOC · 历史名庄",
    intro: "传奇 1961 年份与 Château Phélan Ségur 的组合，是整批收藏中最具名庄号召力的酒款之一，酒庄亦为这一年份保留了官方档案。",
    craft: "酒庄装瓶，以赤霞珠与梅洛为核心，体现 Saint-Estèphe 结构、力量与漫长陈年的传统。",
    palate: "酒庄回顾样瓶展现松露、林下气息、蜜饯果与丝滑单宁；成熟黑果、雪松和皮革共同构成经典老左岸图景。",
    story: "18 世纪末，爱尔兰酒商 Bernard O’Phelan 来到 Bordeaux 并逐步建立庄园；“爱尔兰血统 × 传奇 1961”令这瓶酒拥有鲜明人物与时代故事。"
  },
  "haut-callens-1968": {
    position: "Graves Supérieures AOC · 历史 sec 标签",
    intro: "1968 年、Graves Supérieures 与 sec 三项信息同现于正标，是一瓶少见的 Bordeaux 历史干白酒标签藏品。",
    craft: "酒庄装瓶，以赛美蓉、长相思与密斯卡岱等地区传统白葡萄为风格背景，呈现 Sauternais 邻近地区的旧式白酒文化。",
    palate: "成熟白酒气息可联想到蜂蜜、杏脯、橙皮、干花、蜂蜡、坚果与茶感，层次带有明显岁月印记。",
    story: "Graves Supérieures 于 1967 年完成国际原产地名称登记，1968 正是紧随其后的首个收获年份；这使酒标成为制度与产区历史的时间节点。"
  },
  "bel-air-1976": {
    position: "Saint-Estèphe AOC · 酒庄装瓶",
    intro: "Héritiers Maurice Ortet 时期的 1976 Saint-Estèphe，保留了 Château Bel-Air 在重要家族交接前夕的旧标签。",
    craft: "以赤霞珠、梅洛等 Saint-Estèphe 传统品种混酿，并在庄园装瓶；炎热年份赋予这瓶酒鲜明的时代背景。",
    palate: "成熟风格可联想到黑醋栗、红李、雪松、烟草与皮革，单宁经过长时间瓶陈后趋于圆润。",
    story: "Quancard 家族于 1977 年收购庄园，因此 1976 很可能接近 Ortet 家族时代的最后一个收获年份，是交接节点型藏品。"
  },
  "villenoble-1983": {
    position: "Saint-Estèphe AOC · Sélection Borie-Manoux",
    intro: "1983 Saint-Estèphe 老年份，由历史悠久的 Borie-Manoux 遴选并装瓶，兼具产区辨识度与经典 négociant 文化。",
    craft: "以赤霞珠、梅洛与品丽珠等传统品种为风格基础，经 Borie-Manoux 选酒及装瓶，体现 Bordeaux 酒商体系的专业分工。",
    palate: "成熟气息可联想到黑醋栗、李子皮、雪松、烟草、石墨与皮革，呈现古典 Saint-Estèphe 轮廓。",
    story: "Borie 家族酒商业务始于 1870 年，后来扎根 Bordeaux 的 Chartrons 酒商区；这瓶旧标正是百年葡萄酒贸易传统的实物见证。"
  },
  "marquis-saint-estephe-1995": {
    position: "Saint-Estèphe AOC · 1997 巴黎农业大赛银牌",
    intro: "1995 Bordeaux 优秀年份、Saint-Estèphe 产区与巴黎农业大赛银牌汇聚于一瓶，标签完整，纪念属性突出。",
    craft: "由 1934 年成立的 Saint-Estèphe 合作社生产并装瓶，以赤霞珠、梅洛与品丽珠等当地传统品种构成。",
    palate: "可期待黑醋栗、梅干、雪松、烟草、皮革与落叶等成熟风味，单宁趋于柔和。",
    story: "正标保留 1997 Concours Général Agricole de Paris 银牌，既记录 1995 收成，也保存了法国最具知名度农业竞赛之一的获奖印记。"
  },
  "birkedal-hartmann-margaux-1974": {
    position: "Margaux AOC · Birkedal Hartmann 酒商装瓶",
    intro: "一瓶来自 1974 年的 Margaux 产区老酒，由 Birkedal Hartmann 装瓶，适合聚焦经典左岸产区与老派酒商文化。",
    craft: "以赤霞珠、梅洛、品丽珠和小维多等 Margaux 传统品种为背景，由 Bordeaux négociant 完成历史装瓶。",
    palate: "成熟风格可联想到干红果、干花、雪松、烟草与皮革，气质轻盈而带有年代感。",
    story: "在 château 装瓶成为主流之前，酒商深度参与 Bordeaux 的选酒、熟成与流通；这瓶酒保存了那一时代的商业印记。"
  },
  "ripeau-1985": {
    position: "Saint-Émilion Grand Cru Classé",
    intro: "1985 强劲而均衡的 Saint-Émilion 年份，来自持续拥有 Grand Cru Classé 身份的 Château Ripeau，是等级、年份与产地兼备的右岸藏品。",
    craft: "酒庄装瓶，以梅洛为主轴、品丽珠与赤霞珠辅助，呈现经典右岸混酿结构。",
    palate: "成熟风格可联想到黑樱桃干、李子、烟草、雪松、松露与皮革，单宁细致柔和。",
    story: "Château Ripeau 同时出现在 1986 与 2022 两轮 Saint-Émilion Grand Cru Classé 名单中，葡萄园又毗邻 Pomerol 边界，收藏身份清晰。"
  },
  "trimoulet-1986": {
    position: "1986 年份 Saint-Émilion Grand Cru Classé",
    intro: "Château Trimoulet 1986 封存了酒庄仍位列 Grand Cru Classé 榜单的历史阶段，是分级更替被保留在瓶中的典型藏品。",
    craft: "酒庄装瓶，以梅洛与品丽珠为核心，体现 Saint-Émilion 传统右岸风格。",
    palate: "成熟香气可联想到干樱桃、李子干、烟草、雪松、皮革与蘑菇，单宁经瓶陈后趋于柔顺。",
    story: "酒庄起源可追溯至 1802 年；1986 是其历史列级身份最具代表性的年份节点之一，因此比普通旧标更有叙事价值。"
  },
  "tour-saint-pierre-1976": {
    position: "Saint-Émilion Grand Cru AOC",
    intro: "Jean Goudineau 时期的 1976 Saint-Émilion Grand Cru，以近半世纪瓶龄保存了欧洲大旱年份的 Bordeaux 记忆。",
    craft: "酒庄装瓶，以梅洛为主的 Saint-Émilion 传统红葡萄混酿为风格核心。",
    palate: "成熟表现可联想到干李子、枣、雪松、烟叶、皮革与蘑菇，酒体细致，单宁柔化。",
    story: "1976 年欧洲经历著名炎热与干旱，这瓶酒如同一枚气候时间胶囊；旧庄主 Jean Goudineau 又为它增添 Saint-Émilion 地方人物色彩。"
  },
  "haut-callens-1969": {
    position: "Graves Supérieures AOC · 历史 sec 标签",
    intro: "1969 年份与 Graves Supérieures sec 的旧式表述同现，是一瓶难得的 Bordeaux 历史白酒标签藏品。",
    craft: "以赛美蓉、长相思、长相思灰与密斯卡岱等传统品种为产区背景；旧标记录了当时 sec 与 demi-sec 并行的风格语言。",
    palate: "成熟气息可联想到干蜂蜜、蜂蜡、洋甘菊、柑橘皮、榛子与烟熏矿物，具有典型老白酒层次。",
    story: "“Graves Supérieures × sec”如今已极少见，恰好折射 Bordeaux 白酒分类语言的变化，适合出生年份与产区史收藏。"
  },
  "du-mirail-1989": {
    position: "Graves AOC · 1989 优秀年份",
    intro: "1989 杰出暖年、Graves 经典产区与整洁老标相结合，是一瓶年份优势非常鲜明的 Bordeaux 藏酒。",
    craft: "酒庄装瓶，以赤霞珠、梅洛、品丽珠和小维多等 Graves 法定品种为背景，延续左岸传统混酿方向。",
    palate: "成熟风格可联想到黑莓、李子、黑醋栗、烟草、雪松、石墨与烟熏矿物。",
    story: "1989 是近百年来采收最早的 Bordeaux 年份之一；Graves 又是早在 12 世纪便输往英格兰的历史酒源地，年份与产区故事相互加成。"
  },
  "chateau-verdus-1980-02": {
    position: "Haut-Médoc AOC · 历史酒标载 Cru Bourgeois",
    intro: "Château Verdus 1980 的另一瓶实物，奖章带与历史 Cru Bourgeois 字样清晰，适合组成双瓶旧标专题收藏。",
    craft: "酒庄装瓶，以赤霞珠、梅洛、小维多等 Haut-Médoc 传统品种构成，保留经典左岸酒标与装瓶信息。",
    palate: "成熟风格可联想到干黑醋栗、雪松、烟草、铅笔屑、皮革与泥土。",
    story: "酒标上的奖章带以及 Verdus／Bardis 的历史关联，使这瓶酒兼具视觉辨识度与档案考据趣味。"
  },
  "du-paradis-1986-01": {
    position: "Saint-Émilion Grand Cru AOC",
    intro: "Raby Saugeon 旧东家时期的 1986 Saint-Émilion Grand Cru，是品牌家族交接之前的成熟右岸老年份。",
    craft: "以梅洛为主、品丽珠与赤霞珠辅助，采用传统 Saint-Émilion 混酿思路并由酒庄装瓶。",
    palate: "成熟气息可联想到干李子、酸樱桃、雪松、烟草、皮革与松露，单宁趋于柔和。",
    story: "酒庄在 Raby 家族经营后于 2013 年进入 Bardet 家族时代；这瓶 1986 旧标让两个时期形成鲜明对读。"
  },
  "haut-caillou-1979-01": {
    position: "Canon-Fronsac AOC · Sélection Borie-Manoux",
    intro: "酒庄装瓶并由 Borie-Manoux 遴选流通的 1979 Canon-Fronsac，兼具右岸小产区魅力与百年酒商印记。",
    craft: "以梅洛为核心，搭配品丽珠、赤霞珠等传统右岸品种；Canon-Fronsac 的石灰岩与黏土风土赋予酒款结构背景。",
    palate: "成熟表现可联想到干李子、酸樱桃、雪松、烟草、皮革、蘑菇与甘草。",
    story: "Canon-Fronsac 曾因 Richelieu 家族进入凡尔赛餐桌，酒标上的 Sélection Borie-Manoux 又连接到创立于 1870 年的 Bordeaux 酒商史。"
  },
  "plaisance-saint-lambert-1987": {
    position: "Pauillac AOC · Castéja 家族历史装瓶",
    intro: "来自 Pauillac 核心产区的 1987 历史酒标，正标保留 Castéja propriétaire 与酒庄装瓶信息，家族印记鲜明。",
    craft: "以赤霞珠、梅洛、品丽珠与小维多等 Pauillac 传统品种为背景，并明确标示 Mis en bouteille au château。",
    palate: "成熟气息可联想到酸樱桃、黑加仑、雪松、烟草、咖啡与皮革，展现 Pauillac 的古典线条。",
    story: "Castéja 家族在 Bordeaux 酒业拥有深厚历史，而这款如今少见的 Plaisance-Saint-Lambert 酒标，保存了名门版图中的一段隐秘支线。"
  },
  "inglenook-petite-sirah-1988": {
    position: "Napa Valley AVA · Petite Sirah",
    intro: "Inglenook 品牌转型期的 1988 Napa Valley Petite Sirah，以深色、结构感与美国经典酒庄历史形成独特收藏组合。",
    craft: "以 Petite Sirah（Durif）为品种核心；这一葡萄以颜色深、酸度与单宁充沛、陈年能力突出而著称。",
    palate: "典型风格包含黑莓、李子、胡椒与甘草，成熟后可发展出无花果、干李、雪松与皮革。",
    story: "Inglenook 由 Gustave Niebaum 于 1879 年创建；这瓶 1988 正处于品牌历史转型阶段，是 Napa 商业与酒庄变迁的时间胶囊。"
  },
  "pape-clement-1955": {
    position: "Cru Classé de Graves",
    intro: "71 年瓶龄、1955 年份与 Château Pape Clément 的教宗渊源相遇，是整批收藏中历史跨度与庄名份量最突出的酒款。",
    craft: "酒庄装瓶，以赤霞珠与梅洛等 Graves 红葡萄混酿为核心，延续 Pessac 烟熏、石墨与结构感传统。",
    palate: "成熟 Graves 风格可联想到黑加仑、雪松、烟草、石墨、烟熏与松露，具有古典名庄老酒的香气想象。",
    story: "酒庄得名于 1305 年成为教宗 Clément V 的 Bertrand de Got。1955 又恰逢 Bordeaux 著名 1855 分级百周年，而本庄自身荣耀来自 Graves 列级体系。"
  },
  "haut-caillou-1979-02": {
    position: "Canon-Fronsac AOC · Sélection Borie-Manoux",
    intro: "1979 Canon-Fronsac 的第二瓶实物，旧标完整，适合与同款组成右岸小产区双瓶专题。",
    craft: "酒庄装瓶并进入 Borie-Manoux 选品渠道，以梅洛为核心、品丽珠与赤霞珠辅助，呈现传统右岸结构。",
    palate: "成熟风格可联想到轻盈果干、烟草、雪松、皮革与土壤气息。",
    story: "Canon-Fronsac 的凡尔赛餐桌传说与 Borie-Manoux 百年酒商渠道在同一张酒标上交汇，为小产区老酒增添可讲述性。"
  },
  "du-paradis-1986-02": {
    position: "Saint-Émilion Grand Cru AOC",
    intro: "Château du Paradis 1986 的第二瓶旧东家版本，可与同款组成成对收藏，完整展现 1980 年代 Saint-Émilion 酒标风貌。",
    craft: "以梅洛主导，辅以品丽珠与赤霞珠，遵循经典 Saint-Émilion 右岸混酿方向。",
    palate: "成熟风格可联想到纤细红果、茶叶、皮革、松露与泥土，气质柔和而富年代感。",
    story: "Raby 家族自 1966 年经营，2013 年由 Bardet 家族接续；这瓶酒正属于前一时代，为品牌传承提供清晰时间坐标。"
  },
  "porets-saint-georges-1978": {
    position: "Nuits-Saint-Georges Premier Cru · Les Porêts Saint-Georges",
    intro: "1978 经典红勃艮第年份与 Nuits-Saint-Georges 一级园 Les Porêts Saint-Georges 相遇，是本批中风土等级最鲜明的 Burgundy 藏品。",
    craft: "以 Pinot Noir 为核心，一级园位于村庄南侧，石砾与褐色石灰岩土壤通常赋予酒体结构、深色果味与陈年骨架。",
    palate: "同园典型风格包括黑樱桃、黑醋栗、紫罗兰、烟熏与单宁，成熟后转向皮革、松露与林地气息。",
    story: "Les Porêts Saint-Georges 曾获 Lavalle 1855 年风土评价，1978 又是战后 Burgundy 经典年份；“名园 × 强年 × 老式装瓶”三重故事十分完整。"
  },
  "tertre-saint-mayme-1997": {
    position: "Monbazillac AOC",
    intro: "1997 Monbazillac 小庄甜酒呈现深金至琥珀色泽，适合甜酒、出生年份与西南法产区专题收藏。",
    craft: "以赛美蓉、长相思与密斯卡岱为传统品种；晨雾与午后干燥为贵腐发展提供经典条件，并形成分次选择性采收传统。",
    palate: "成熟风格可联想到蜂蜡、杏脯、柑橘皮、焦糖与坚果，甜润中带有岁月发展的复杂度。",
    story: "Monbazillac 拥有悠久海运史：1984 年，人们曾从一艘 1747 年沉船中发现 14 瓶该产区酒，成为甜酒耐久与贸易传统的传奇注脚。"
  },
  "saint-christoly-1967": {
    position: "Médoc AOC · 酒庄装瓶",
    intro: "酒庄装瓶的 1967 Médoc，拥有近六十年历史，适合作为出生年份、家族传承与传统左岸酒标藏品。",
    craft: "以赤霞珠、梅洛等 Médoc 传统品种为核心，保留酒庄装瓶与家族酒标信息。",
    palate: "成熟表达可联想到轻盈红果、茶叶、雪松与土壤，呈现古典 Médoc 的纤细一面。",
    story: "酒庄家族史可追溯至约 1850 年并延续至第七代；正标还保存了酒庄 1924 年巴黎金牌这一更早的历史荣誉。"
  },
  "lalande-1975": {
    position: "Cru Bourgeois · Listrac-Médoc AOC",
    intro: "1975 Château Lalande 正标明确载有 Cru Bourgeois，是等级身份、家族旧标与近半世纪瓶龄兼具的 Listrac 藏酒。",
    craft: "以梅洛、赤霞珠与小维多等 Médoc 品种构成，延续 Listrac 结构扎实、适合熟成的传统方向。",
    palate: "成熟风格可联想到干黑果、雪松、茶叶、甘草与皮革，呈现典型左岸陈年气息。",
    story: "庄园档案可追溯至 1816 年并跨越约十代；Listrac 又有 Médoc“屋脊”之称，Dubosc-Darriet 旧标让家族传承清晰可见。"
  },
  "turpin-pomerol-1982": {
    position: "Pomerol AOC · 1982 经典年份",
    intro: "1982 伟大右岸年份与 Pomerol 产区结合，酒液位置醒目，是一瓶年份号召力很强的 Bordeaux 酒商旧装瓶。",
    craft: "以梅洛为主，搭配品丽珠、赤霞珠等 Pomerol 传统品种，由 Turpin Frères & Riout 完成历史装瓶。",
    palate: "成熟表现可联想到李子、紫罗兰、雪松、茶叶、松露与泥土，体现 Pomerol 柔润而深沉的风格。",
    story: "Turpin Frères & Riout 是历史 Bordeaux 商号，档案显示其在 1925 年曾为国际卧铺车公司的餐车供酒，将这瓶酒连接到黄金旅行时代。"
  },
  "ballot-1959": {
    position: "1959 Bordeaux 名年 · Premières Côtes de Bordeaux 历史 AOC",
    intro: "1959 著名 Bordeaux 年份与已经更名的历史 AOC 同框，67 年时间跨度令这瓶酒具有鲜明的陈列与年份纪念价值。",
    craft: "以梅洛、赤霞珠与品丽珠等传统 Bordeaux 品种为背景，酒标完整记录 Premières Côtes de Bordeaux 的旧产区名称。",
    palate: "完好同类老酒的成熟风格通常围绕果干、雪松、烟草、皮革与土壤展开；本瓶更适合作为封存年份的历史藏品欣赏。",
    story: "Premières Côtes de Bordeaux 红酒自 2009 年起改以 Cadillac–Côtes de Bordeaux 名称生产，这张 1959 酒标保存了已经退出当地红酒使用的 AOC 表述。"
  },
  "la-maynotte-1991": {
    position: "Médoc AOC · Valeyrac 家族旧标",
    intro: "Château La Maynotte 1991 来自 Médoc 北部 Valeyrac，家族旧标与高颈酒液位置赋予它清晰的出生年份收藏定位。",
    craft: "以赤霞珠、梅洛、品丽珠与小维多等 Médoc 传统混酿为背景，呈现左岸地方小庄的经典框架。",
    palate: "成熟风格可联想到轻盈红果、茶叶、雪松与土壤，线条纤细而带有老 Médoc 气息。",
    story: "酒标把 Lassalle Yves et Fils 与 Valeyrac 紧密相连，是一件保存地方家族酿酒足迹的实物档案，适合 1991 年份纪念收藏。"
  }
};

export type SalesContent = {
  position: string;
  intro: string;
  occasion: string;
  storyTitle: string;
  palateTitle: string;
  craftTitle: string;
  craft: string;
  palate: string;
  story: string;
};

export const salesContent: Record<string, SalesContent> = {
  "les-grands-fiefs-1996": {
    position: "Listrac-Médoc AOC · 1.5L Magnum",
    intro: "1996，1.5L。普通酒瓶放在它旁边，立刻就小了一号。旧酒标、左岸好年份和少见的大瓶装，摆上桌已经很有分量。",
    occasion: "1996 年出生的人；相识或结婚纪念，也适合多人聚会时陈列。",
    storyTitle: "一只大瓶的分量",
    palateTitle: "真要开这瓶",
    craftTitle: "Listrac-Médoc 的底色",
    craft: "Listrac-Médoc 位于 Bordeaux 左岸，传统混酿以赤霞珠、梅洛和品丽珠为主。正标写明酒庄装瓶并经橡木桶熟成；当年的具体比例没有公开资料。",
    palate: "先让酒瓶直立一天，等沉淀慢慢落下。成熟风味大致会往黑加仑干、李子皮、雪松和烟草走；三十年后的答案，以这一瓶开出来为准。",
    story: "1996 是 Bordeaux 左岸公认亮眼的一年。Magnum 相当于两瓶标准装，在餐桌上更醒目，酒液通常也比小瓶走得慢一些。"
  },
  "chasse-spleen-1967": {
    position: "Moulis-en-Médoc AOC · Château Chasse-Spleen",
    intro: "先看年份：1967。再看名字：Chasse-Spleen，常被译作“驱散忧郁”。送给同年出生的长辈，不用讲酒评分，光这两个信息就足够聊上一阵。",
    occasion: "1967 年出生的长辈、退休或寿宴；也适合送给爱文学、爱旧书的人。",
    storyTitle: "“驱散忧郁”",
    palateTitle: "五十九年后的答案",
    craftTitle: "酒商装瓶，怎么看",
    craft: "瓶上带有 L. Bernial 酒商标签，属于当年的酒商装瓶。Moulis 的红酒多由梅洛与赤霞珠构成，这一年的实际比例没有留在标签上。",
    palate: "老 Moulis 常会走向干红果、雪松、烟叶和皮革。开瓶后先倒一小杯，不急着长时间醒酒；它若还在状态，香气会自己慢慢出来。",
    story: "Chasse-Spleen 这个名字总让人想到诗、旧书和晚餐后的谈话。酒还没开，故事已经有了开头。"
  },
  "grand-vin-medoc-1971": {
    position: "Médoc AOC · Cave de Bégadan 历史装瓶",
    intro: "酒标没有响亮的 château 名，只写着 Bégadan 的地方酒窖。也正因为普通，它很像 1971 年法国人家里真的会出现的一瓶酒：纸张旧了，年份还清清楚楚。",
    occasion: "1971 年出生的人、父母辈纪念，或第一次买法国老酒的人。",
    storyTitle: "Bégadan 的日常",
    palateTitle: "开不开，都成立",
    craftTitle: "一瓶老式 Médoc",
    craft: "这瓶由 Bégadan-Médoc 地方酒窖装瓶，采用 Médoc 常见的红葡萄混酿。标签没有另列独立庄园，风格更接近当年的地方酒。",
    palate: "想开的话，先把期待放轻一点：烟叶、泥土、干果，都可能出现。若选择继续封存，它也是一件完整的 1971 年法国旧物。",
    story: "老式控制标和合作酒窖名称，留下了 1970 年代 Bordeaux 普通葡萄酒的流通方式。不是每段历史都来自名庄，日常生活也值得被保存。"
  },
  "chateau-verdus-1980-01": {
    position: "Haut-Médoc AOC · 历史酒标载 Cru Bourgeois",
    intro: "1980 的纸标已经褪成温暖的米黄色，家族姓名和 Cru Bourgeois 字样仍看得见。拿在手里，它更像一页从 Haut-Médoc 撕下来的旧档案。",
    occasion: "1980 年出生的人、四十岁以后的人生纪念，或法国旧酒标收藏。",
    storyTitle: "酒标上的两个家族",
    palateTitle: "杯里的 1980",
    craftTitle: "Cru Bourgeois 这行字",
    craft: "赤霞珠、梅洛和小维多构成了 Haut-Médoc 的传统底色。正标印有 Cru Bourgeois；现存历史资料的记载并不完全一致，所以这里按酒标原文保留。",
    palate: "1980 的 Bordeaux 多半偏轻。走到今天，杯中若还有红醋栗、雪松、烟草和落叶气息，已经是很有趣的相遇。",
    story: "Peragallo 与 Dailledouze 两组姓名同时留在瓶上，像一次家族经营的交接。小小一张纸标，装得下的不只是酒名。"
  },
  "phelan-segur-1961": {
    position: "Saint-Estèphe AOC · 历史名庄",
    intro: "这批藏酒里，1961 Château Phélan Ségur 是很有分量的一瓶。好年份、认得出的庄名、六十五年时间，懂不懂酒都能明白它为什么特别。",
    occasion: "1961 年出生的长辈、家族大寿，或一份郑重的商务礼物。",
    storyTitle: "从爱尔兰到 Saint-Estèphe",
    palateTitle: "值得耐心的一瓶",
    craftTitle: "左岸的骨架",
    craft: "酒庄装瓶，以赤霞珠和梅洛为主。1961 年的精确配比没有完整公开，但 Saint-Estèphe 一贯的结构感和陈年取向很清楚。",
    palate: "酒庄回顾过的 1961 样瓶曾有松露、林下、蜜饯果和丝滑单宁。轮到这一瓶，先直立、慢开、少量试杯，不要让醒酒器抢走它最后的香气。",
    story: "18 世纪末，爱尔兰人 Bernard O’Phelan 来到 Bordeaux，后来建立这座庄园。一位远行者的姓氏，就这样留在 Saint-Estèphe 两百多年。"
  },
  "haut-callens-1968": {
    position: "Graves Supérieures AOC · 历史 sec 标签",
    intro: "透明瓶、深琥珀色酒液、褪色纸标，再加一个醒目的 1968。它和今天常见的 Bordeaux 白酒完全不是一个样子，摆在灯下尤其有年代感。",
    occasion: "1968 年出生的人、父母辈纪念，或喜欢老酒颜色和旧标签的人。",
    storyTitle: "名称登记后的第一年",
    palateTitle: "先看这抹琥珀色",
    craftTitle: "酒标上的 sec",
    craft: "标签同时写着 Graves Supérieures 与 sec。葡萄以赛美蓉、长相思和密斯卡岱等当地品种为背景；这套老写法和今天常见的分类并不一样。",
    palate: "蜂蜡、杏脯、橙皮、坚果和茶，是老 Bordeaux 白酒可能走到的方向。颜色已经很深，若开瓶，适合小杯慢尝，不必把它当作年轻白酒来喝。",
    story: "Graves Supérieures 在 1967 年完成国际原产地名称登记，1968 紧接着迎来下一次收获。这只瓶子刚好站在制度落地后的第一年。"
  },
  "bel-air-1976": {
    position: "Saint-Estèphe AOC · 酒庄装瓶",
    intro: "1976 到今年，整整五十年。生日、金婚、相识半世纪，很多话都可以用这一只酒瓶来讲，不需要再加复杂的酒评。",
    occasion: "1976 年出生者的 50 岁生日、金婚，或任何走过半世纪的纪念。",
    storyTitle: "易主前的那个年份",
    palateTitle: "半世纪后的 Saint-Estèphe",
    craftTitle: "酒庄装瓶的左岸酒",
    craft: "酒庄装瓶，以赤霞珠、梅洛等 Saint-Estèphe 传统品种混酿。瓶上留下的是 Ortet 家族时期的名字，与今天的庄园面貌不同。",
    palate: "成熟方向会落在黑醋栗干、红李、雪松和皮革。五十年的酒不必急着证明什么：可以开来分享，也可以继续完整地留在酒柜里。",
    story: "Quancard 家族在 1977 年接手庄园。这瓶 1976 正好来自易主前一年，像旧主人关门前留下的一页。"
  },
  "villenoble-1983": {
    position: "Saint-Estèphe AOC · Sélection Borie-Manoux",
    intro: "1983 年的 Saint-Estèphe，带着 Borie-Manoux 老酒商的印记。它不是需要背诵庄名的酒，反倒很适合第一次买老 Bordeaux：年份够久，来历也说得清。",
    occasion: "1983 年出生的人、朋友间的小礼，或第一次尝试法国老酒。",
    storyTitle: "从 Chartrons 走出去",
    palateTitle: "抱着好奇心开",
    craftTitle: "酒商在其中做了什么",
    craft: "Borie-Manoux 负责遴选与装瓶，酒的底子来自 Saint-Estèphe，通常以赤霞珠、梅洛和品丽珠构成。Villenoble 是酒商品牌，并非独立 château。",
    palate: "黑醋栗干、雪松、烟草和皮革，是它成熟后可能留下的几笔。酒体若已经变轻，也不意外；这类老酒适合慢慢试，不适合豪饮。",
    story: "Borie 家族的酒商业务始于 1870 年，后来扎根 Bordeaux 的 Chartrons。那时，酒商把一桶桶酒送往更远的餐桌，这瓶酒还留着那套旧商业的影子。"
  },
  "marquis-saint-estephe-1995": {
    position: "Saint-Estèphe AOC · 1997 巴黎农业大赛银牌",
    intro: "年份、产区、银牌，三件事都直接写在瓶上。1995 Marquis de Saint-Estèphe 的标签完整利落，送出去时不必费力解释。",
    occasion: "1995 年出生的人、结婚周年，或偏爱完整老酒标的人。",
    storyTitle: "标签旁的巴黎银牌",
    palateTitle: "三十年的成熟味",
    craftTitle: "合作社里的 Saint-Estèphe",
    craft: "它由 1934 年成立的 Saint-Estèphe 合作社生产并装瓶，使用赤霞珠、梅洛和品丽珠等当地传统品种。",
    palate: "黑醋栗、梅干、雪松、烟草和已经柔下来的单宁，是这类成熟左岸酒的典型方向。瓶身外观在这批老酒里也较为整齐。",
    story: "副标记录了 1997 年巴黎农业大赛银牌。它不是酒庄分级，而是一枚当年真正贴到瓶上的法国农业荣誉。"
  },
  "birkedal-hartmann-margaux-1974": {
    position: "Margaux AOC · Birkedal Hartmann 酒商装瓶",
    intro: "先把最容易看错的地方说清：瓶上的 Margaux 是产区，不是 Château Margaux。身份说明白以后，这瓶 1974 依然是一件很漂亮的老酒商装瓶。",
    occasion: "1974 年出生的人、法国旅行纪念，或喜欢老派酒商文化的人。",
    storyTitle: "手写痕迹留下的年代",
    palateTitle: "1974 的轻盈",
    craftTitle: "négociant 装瓶",
    craft: "Birkedal Hartmann 负责装瓶，酒来自 Margaux 产区。葡萄大致离不开赤霞珠、梅洛、品丽珠和小维多，原始庄园没有印在标签上。",
    palate: "1974 不是力量型年份。杯中若还有干红果、干花、雪松和皮革，会是偏轻、偏安静的表达；更适合小杯慢喝。",
    story: "在酒庄装瓶普及以前，négociant 会参与选酒、熟成和流通。标签上的手写笔迹，让这瓶酒保留了真正被经手、被保存过的感觉。"
  },
  "ripeau-1985": {
    position: "Saint-Émilion Grand Cru Classé",
    intro: "1985 Château Ripeau 的好处，是一眼就讲得明白：四十多年的 Saint-Émilion，而且有 Grand Cru Classé 身份。年份和等级都写得清清楚楚。",
    occasion: "1985 年出生的人、看重列级身份的礼赠，或右岸老酒入门。",
    storyTitle: "四十年后，名字还在",
    palateTitle: "右岸老酒的样子",
    craftTitle: "梅洛做主角",
    craft: "1985 年酒庄装瓶，以梅洛为主，品丽珠和赤霞珠辅助。这是 Saint-Émilion 右岸最经典的一套混酿。",
    palate: "黑樱桃干、李子、烟草和松露，会比新鲜果味更靠前；单宁也应当柔和许多。开瓶时少倒一点，给它几分钟再判断。",
    story: "Château Ripeau 出现在 1986 年的列级名单里，到了 2022 年依然在册。四十年过去，庄名与等级都延续下来，这比一串临时评分更有分量。"
  },
  "trimoulet-1986": {
    position: "1986 年份 Saint-Émilion Grand Cru Classé",
    intro: "1986 到今年正好四十年。Château Trimoulet 当时仍列在 Grand Cru Classé 名单中，瓶上的年份恰好把那段身份留了下来。",
    occasion: "1986 年出生者的 40 岁生日、四十周年，或一组历史列级收藏。",
    storyTitle: "留在 1986 的列级身份",
    palateTitle: "香气已经慢下来",
    craftTitle: "Saint-Émilion 的传统",
    craft: "酒庄装瓶，以梅洛和品丽珠为核心。它的 Grand Cru Classé 身份属于 1986 年当时的官方分级，后来名单变化，并不会改写这只老瓶。",
    palate: "干樱桃、李子干、烟草、皮革和蘑菇，是四十年右岸酒常见的成熟气息。它不会再像年轻酒那样张扬，慢慢喝反而合适。",
    story: "庄园历史可追溯至 1802 年。今天再看这只瓶子，有趣之处正在于：一个后来改变的列级身份，被原封不动地留在 1986。"
  },
  "tour-saint-pierre-1976": {
    position: "Saint-Émilion Grand Cru AOC",
    intro: "1976 年的欧洲热得出名，这瓶 Saint-Émilion 就来自那个干旱夏天。五十年后再把它放上桌，年份本身已经是一段天气记忆。",
    occasion: "1976 年出生者的 50 岁生日、金婚，或喜欢年份与气候故事的人。",
    storyTitle: "欧洲大旱那一年",
    palateTitle: "半世纪后的右岸",
    craftTitle: "Grand Cru，不是 Classé",
    craft: "酒庄装瓶，以梅洛为主的右岸传统混酿。标签写的是 Saint-Émilion Grand Cru AOC，与 Grand Cru Classé 是两回事。",
    palate: "干李子、枣、烟叶、皮革和蘑菇，是它如今比较合理的风味方向。先直立酒瓶，再轻手开塞，会比长时间醒酒稳妥。",
    story: "1976 年欧洲大旱至今仍常被提起。旧庄主 Jean Goudineau 的名字也在酒标上，让一个宏大的气候年份，落回到一个具体家庭。"
  },
  "haut-callens-1969": {
    position: "Graves Supérieures AOC · 历史 sec 标签",
    intro: "深琥珀色的 1969 Bordeaux 白酒，今天已经不常见。酒标上的 sec 更有意思——这是一种旧时风格写法，和现在人们熟悉的 Graves Supérieures 不太一样。",
    occasion: "1969 年出生的人、父母辈礼物，或法国白酒旧标签收藏。",
    storyTitle: "一张消失的风格标签",
    palateTitle: "老白酒先看颜色",
    craftTitle: "Graves 的白葡萄",
    craft: "赛美蓉、长相思、长相思灰和密斯卡岱，是这一带传统的白葡萄。标签明确写着 sec，说明当时曾用干型语言来区分风格。",
    palate: "干蜂蜜、蜂蜡、洋甘菊、柑橘皮和榛子，都可能出现在老白酒里。颜色已深，若决定开瓶，适合把它当作少量品尝，而不是配餐主角。",
    story: "同一产区过去曾并行使用 sec 与 demi-sec 等字样。1969 年的这张纸标，留下了 Bordeaux 白酒分类还没变成今天模样的时候。"
  },
  "du-mirail-1989": {
    position: "Graves AOC · 1989 优秀年份",
    intro: "1989 是 Bordeaux 很拿得出手的年份。这瓶 Château du Mirail 的酒标和液面看上去也利落，适合既想要纪念意义、又认真考虑开瓶的人。",
    occasion: "1989 年出生的人、结婚纪念，或想兼顾陈列和开瓶的人。",
    storyTitle: "采收很早的一年",
    palateTitle: "这瓶可以慢慢试",
    craftTitle: "Graves 的烟熏底色",
    craft: "酒庄装瓶，品种背景包括赤霞珠、梅洛、品丽珠和小维多。Graves 的砾石地常给红酒带来一点烟熏、石墨般的气息。",
    palate: "黑莓、李子、烟草、雪松，再带一点烟熏矿物感，是 1989 Graves 老酒令人期待的方向。开瓶后先试杯，再决定是否换瓶醒酒。",
    story: "1989 是 Bordeaux 近百年来采收很早的年份之一。这里的酒早在中世纪就运往英格兰，一只瓶子里，天气与贸易史碰到了一起。"
  },
  "chateau-verdus-1980-02": {
    position: "Haut-Médoc AOC · 历史酒标载 Cru Bourgeois",
    intro: "同样是 Château Verdus 1980，这一瓶的奖章带和标签细节更清楚。单独是一瓶出生年份酒；和另一瓶并排，又成了一组真正有岁月差异的旧标。",
    occasion: "1980 年出生的人、双瓶成对赠礼，或法国旧酒标陈列。",
    storyTitle: "同年同酒，不同模样",
    palateTitle: "第二瓶的开瓶预期",
    craftTitle: "标签里的分级线索",
    craft: "酒庄装瓶，以赤霞珠、梅洛和小维多等 Haut-Médoc 品种为背景。Cru Bourgeois 字样来自实物标签，历史资料则留下了不同记载。",
    palate: "黑醋栗干、雪松、铅笔屑和泥土，是它可能留下的老派左岸气息。1980 的酒体本就偏轻，开瓶时不妨从小杯开始。",
    story: "两瓶同年同款的酒，纸张颜色、磨损和封帽都不完全相同。并排看最能说明：老酒不是复制品，每瓶都有自己的路。"
  },
  "du-paradis-1986-01": {
    position: "Saint-Émilion Grand Cru AOC",
    intro: "1986，正好四十年。Château du Paradis 的庄名又带着“天堂”的意思，送出去不需要先上一堂葡萄酒课，别人也很容易记住。",
    occasion: "1986 年出生者的 40 岁生日、四十周年，或情侣与家庭赠礼。",
    storyTitle: "“天堂”的上一代酒标",
    palateTitle: "先别急着醒酒",
    craftTitle: "这里的 Grand Cru 是什么",
    craft: "酒庄装瓶，以梅洛为主，品丽珠与赤霞珠辅助。它属于 Saint-Émilion Grand Cru AOC，并不是 Grand Cru Classé。",
    palate: "干李子、酸樱桃、烟草、皮革和松露，是这类成熟右岸酒会去的方向。先直立、轻柔开塞，倒出一小杯后再决定要不要醒。",
    story: "1986 年仍是 Raby 家族经营时期。2013 年酒庄转入 Bardet 家族手中，所以这只瓶子留下的是前一代人的名字和手艺。"
  },
  "haut-caillou-1979-01": {
    position: "Canon-Fronsac AOC · Sélection Borie-Manoux",
    intro: "1979、右岸小产区、Borie-Manoux 的旧酒商印记。它像一封从 Bordeaux 地方生活寄来的旧信，价格不高，也不需要名庄光环。",
    occasion: "1979 年出生的人、朋友间的有趣小礼，或第一次认识法国小产区。",
    storyTitle: "曾走上凡尔赛餐桌的产区",
    palateTitle: "一瓶小产区老酒",
    craftTitle: "石灰岩上的梅洛",
    craft: "酒庄装瓶，并由 Borie-Manoux 遴选流通。Canon-Fronsac 以石灰岩和黏土著称，酒通常由梅洛领衔，搭配品丽珠与赤霞珠。",
    palate: "果干、烟草、雪松、蘑菇和甘草，构成了它比较老派的一面。开瓶是一场探索，倒一小杯慢慢看它会不会舒展开。",
    story: "Canon-Fronsac 曾因 Richelieu 家族走上凡尔赛餐桌，后来又借 Bordeaux 酒商之手去往更远的地方。小产区也有自己的旅行史。"
  },
  "plaisance-saint-lambert-1987": {
    position: "Pauillac AOC · Castéja 家族历史装瓶",
    intro: "Pauillac 这个地名，本身就带着 Bordeaux 左岸的声望。1987 Plaisance-Saint-Lambert 不是列级庄，却留下了 Castéja 家族和酒庄装瓶文字，是一条如今很少见的旧支线。",
    occasion: "1987 年出生的人、Pauillac 主题礼物，或喜欢法国酒业家族史的人。",
    storyTitle: "Castéja 家族的一条旧支线",
    palateTitle: "1987 的轻巧",
    craftTitle: "一瓶酒庄装瓶的 Pauillac",
    craft: "标签明确写着 Mis en bouteille au château。赤霞珠、梅洛、品丽珠和小维多，是 Pauillac 传统混酿的基本骨架。",
    palate: "酸樱桃、黑加仑干、雪松、咖啡和皮革，会比浓厚果味更合乎这个年份。它不是强劲型老酒，轻一点喝更对路。",
    story: "Castéja 家族在 Bordeaux 酒业延续多代，而 Plaisance-Saint-Lambert 这个名字后来淡出了常见目录。旧支线的魅力，就在这种难再遇见。"
  },
  "inglenook-petite-sirah-1988": {
    position: "Napa Valley AVA · Petite Sirah",
    intro: "三十瓶里少见的一只美国老酒：1988 Napa Valley，深色 Petite Sirah，还有 Inglenook 这个老名字。送给在加州生活过的人，会很有共鸣。",
    occasion: "1988 年出生的人、美国生活纪念，或加州葡萄酒爱好者。",
    storyTitle: "Coppola 回来以前",
    palateTitle: "Petite Sirah 的深色性格",
    craftTitle: "Napa 的法国葡萄",
    craft: "Petite Sirah 通常指 Durif，颜色深，酸度和单宁都高，天生比许多红葡萄更耐陈。这瓶属于 Inglenook 品牌历史的中间阶段。",
    palate: "黑莓干、李子、胡椒、甘草和皮革，是老 Petite Sirah 很有辨识度的一组味道。即使经过多年，它通常也不会像轻盈红酒那样纤细。",
    story: "Inglenook 由 Gustave Niebaum 于 1879 年创建，后来几经转手，直到 2011 年才重新归入 Coppola 体系。1988 这瓶，正来自那段曲折的中间岁月。"
  },
  "pape-clement-1955": {
    position: "Cru Classé de Graves",
    intro: "1955，距今七十一年。Château Pape Clément 的名字来自一位真正的教宗；在这批藏酒里，它的庄名、年份和历史分量都排在前面。",
    occasion: "1955 年出生的长辈、家族大寿，或一份郑重的商务赠礼。",
    storyTitle: "教宗留下的名字",
    palateTitle: "这一瓶，以收藏为先",
    craftTitle: "它属于 Graves 列级",
    craft: "酒庄装瓶，以赤霞珠和梅洛等 Graves 红葡萄混酿。Pape Clément 是 Graves 列级庄，并不在 1855 Médoc 列级名单中。",
    palate: "成熟 Pape Clément 会走向黑加仑干、雪松、烟草、石墨和松露。这瓶已有七十一年，更适合先按历史藏品看；若决定开，少量试杯即可。",
    story: "Bertrand de Got 在 1305 年成为教宗 Clément V。到了 1955 年，恰好过去 650 年；同年又是 Bordeaux 1855 分级百周年。两个时间刻度，在这一只瓶子上相遇。"
  },
  "haut-caillou-1979-02": {
    position: "Canon-Fronsac AOC · Sélection Borie-Manoux",
    intro: "同为 1979 Château Haut Caillou，这一瓶的酒标和液面观感更整齐。单独送是一份年份礼物，和另一瓶配成一对，则更有收藏的趣味。",
    occasion: "1979 年出生的人、成对赠礼，或右岸小产区收藏。",
    storyTitle: "两瓶酒，各走各的路",
    palateTitle: "这一瓶看起来更从容",
    craftTitle: "Borie-Manoux 的选品印记",
    craft: "酒庄装瓶，并进入 Borie-Manoux 的选品渠道。混酿以梅洛为核心，品丽珠与赤霞珠在旁辅助。",
    palate: "轻盈果干、烟草、雪松和仍撑得住的酸度，是值得寻找的部分。同年同款走过四十多年，开出来也可能各有性格。",
    story: "老酒很有人情味：两瓶原本一样的酒，也会慢慢长成不同模样。纸张、液面和封帽，都记录着各自走过的路。"
  },
  "du-paradis-1986-02": {
    position: "Saint-Émilion Grand Cru AOC",
    intro: "第二瓶 Château du Paradis 1986，让“四十年”有了成双的可能。送给夫妻、兄弟姐妹或相识多年的朋友，比单独一瓶更有画面。",
    occasion: "1986 年的双人生日、夫妻四十周年，或成对收藏。",
    storyTitle: "两瓶，刚好成一份礼",
    palateTitle: "先让软木塞说话",
    craftTitle: "Raby 家族时期",
    craft: "以梅洛为主，辅以品丽珠和赤霞珠，属于 Saint-Émilion Grand Cru AOC。瓶上留下的是 Raby 家族经营时期的版本。",
    palate: "纤细红果、茶叶、皮革、松露和泥土，都可能藏在软木塞后面。先开一瓶，另一瓶继续留着，也是成对老酒才有的乐趣。",
    story: "Raby 家族从 1966 年经营酒庄，2013 年由 Bardet 家族接续。两瓶旧东家版本放在一起，就是一小段可以拿在手里的家族史。"
  },
  "porets-saint-georges-1978": {
    position: "Nuits-Saint-Georges Premier Cru · Les Porêts Saint-Georges",
    intro: "1978 是 Burgundy 战后很受重视的年份，Les Porêts Saint-Georges 又是法定 Premier Cru。简单说，就是好年份里的一瓶一级园老勃艮第。",
    occasion: "1978 年出生的人、勃艮第爱好者，或看重葡萄园等级的纪念礼。",
    storyTitle: "十九世纪已经有名字的园",
    palateTitle: "这瓶更适合先收藏",
    craftTitle: "Premier Cru 的来处",
    craft: "Les Porêts Saint-Georges 位于 Nuits-Saint-Georges 村南侧，法定品种以 Pinot Noir 为核心。照片上的装瓶者姓名仍有判读空间，因此不借用其他名家同园酒的身份。",
    palate: "这块园常见黑樱桃、黑醋栗、紫罗兰、烟熏和陈年松露气息。这只老瓶更适合先按年份与园名收藏；真要开，建议小心取塞、少量试饮。",
    story: "这块 climat 在 19 世纪就已有风土评价。1978 好年份、一级园名称和旧式装瓶聚在一起，不用再添传奇，分量已经够了。"
  },
  "tertre-saint-mayme-1997": {
    position: "Monbazillac AOC",
    intro: "深金到琥珀色的酒液，在灯光下很好看。1997 Monbazillac 和满桌红酒也不一样，价格亲切，餐后拿出来很容易打开话题。",
    occasion: "1997 年出生的人、甜酒入门，或餐后小聚与乔迁礼物。",
    storyTitle: "一艘沉船里的 Monbazillac",
    palateTitle: "琥珀色甜酒",
    craftTitle: "晨雾与贵腐",
    craft: "赛美蓉、长相思和密斯卡岱是 Monbazillac 的传统品种。当地晨雾潮湿、午后转干，为贵腐发展提供了很特别的环境。",
    palate: "蜂蜡、杏脯、柑橘皮、焦糖和坚果，是老 Monbazillac 很讨喜的一面。小杯、微凉，放在餐后比放在正餐中更合适。",
    story: "1984 年，人们曾从一艘 1747 年沉船中发现 14 瓶 Monbazillac。那批酒不属于本庄，却说明这个产区很早就沿水路去往远方。"
  },
  "saint-christoly-1967": {
    position: "Médoc AOC · 酒庄装瓶",
    intro: "1967 年的 Médoc，已经走过五十九年。旧纸标、酒庄装瓶文字和清楚的年份都在，送给同年出生的长辈，一拿出来便知道心意在哪里。",
    occasion: "1967 年出生的长辈、家庭纪念，或几十欧预算的老酒体验。",
    storyTitle: "酒标上的 1924 金牌",
    palateTitle: "五十九年后的 Médoc",
    craftTitle: "“酒庄装瓶”四个字",
    craft: "标签写明在酒庄装瓶。葡萄以赤霞珠和梅洛等 Médoc 传统品种为背景，1967 年的具体混酿没有公开记录。",
    palate: "轻淡红果、茶叶、雪松和土壤感，是这类老 Médoc 可能留下的轮廓。开瓶前先看液面与软木塞，再决定是否慢慢试一杯。",
    story: "酒庄家族史可追溯到约 1850 年。标签还印着 1924 年巴黎金牌——那是酒庄更早的荣誉，并非 1967 这瓶获奖，却让一张酒标同时装下两段时间。"
  },
  "lalande-1975": {
    position: "Cru Bourgeois · Listrac-Médoc AOC",
    intro: "1975、Cru Bourgeois、家族旧标，都直接写在瓶上。即便不熟悉酒，也能一眼看出这不是刚从超市货架拿下来的新酒。",
    occasion: "1975 年出生的人、家族传承礼物，或 Cru Bourgeois 主题收藏。",
    storyTitle: "十代人的姓氏",
    palateTitle: "1975 的单宁",
    craftTitle: "Cru Bourgeois，不是 1855",
    craft: "混酿以梅洛、赤霞珠和小维多等 Médoc 品种为背景。正标明确写着 Cru Bourgeois；它与 1855 Grand Cru Classé 并不是同一套分级。",
    palate: "干黑果、雪松、茶叶、甘草和皮革，是它成熟后的大致方向。1975 的单宁原本结实，半世纪后若已磨圆，会很有老派 Médoc 的味道。",
    story: "庄园档案可追溯至 1816 年，前后跨越约十代。酒标上的 Dubosc-Darriet 姓名，让家族传承变成了可以指给别人看的东西。"
  },
  "turpin-pomerol-1982": {
    position: "Pomerol AOC · 1982 经典年份",
    intro: "1982 是 Bordeaux 最有号召力的年份之一，Pomerol 又是右岸响亮的名字。这瓶外观整齐，年份和产区都够漂亮，摆在餐桌上很容易成为话题。",
    occasion: "1982 年出生的人、Bordeaux 经典年份礼物，或餐桌陈列。",
    storyTitle: "卧铺列车上的酒商",
    palateTitle: "1982 的右岸想象",
    craftTitle: "Pomerol，未署酒庄",
    craft: "Turpin Frères & Riout 负责装瓶，酒来自 Pomerol，混酿以梅洛为主，通常搭配品丽珠和赤霞珠。标签没有列出具体 château。",
    palate: "成熟李子、紫罗兰、雪松、茶叶和松露，是 1982 Pomerol 最让人向往的方向。它不是名庄瓶，但年份与产区仍给开瓶留了想象。",
    story: "档案显示，Turpin Frères & Riout 在 1925 年曾为国际卧铺车公司的餐车供酒。火车、银器、长途旅行——知道这一点，老酒商的名字立刻有了画面。"
  },
  "ballot-1959": {
    position: "1959 Bordeaux 名年 · Premières Côtes de Bordeaux 历史 AOC",
    intro: "1959 是 Bordeaux 的名年，离今天已经六十七年。这瓶更适合放进书房或酒柜：买的是一个真实的 1959，一张旧产区酒标，也是一件法国老物。",
    occasion: "1959 年出生的人、书房或酒柜陈列，或历史老物件礼物。",
    storyTitle: "已经改名的产区",
    palateTitle: "留在瓶里，也很好",
    craftTitle: "1959 Bordeaux 的来处",
    craft: "梅洛、赤霞珠和品丽珠等传统 Bordeaux 品种构成了它的背景。Premières Côtes de Bordeaux 是当年的产区名称，如今红酒已改用新的 AOC 名称。",
    palate: "这瓶的液面与封口已经不适合拿口感做承诺。把它完整地留在瓶里，看 1959、旧纸张和老玻璃一起慢慢变旧，反而是更好的归宿。",
    story: "2009 年后，当地红酒改以 Cadillac–Côtes de Bordeaux 名称生产。1959 这张酒标，保存了一个已经退出日常使用的法国原产地称呼。"
  },
  "la-maynotte-1991": {
    position: "Médoc AOC · Valeyrac 家族旧标",
    intro: "1991 年的 Médoc，价格仍在日常礼物的范围里，酒标上还留着 Valeyrac 的家族名字。想从一瓶真实法国旧酒开始，它不会让人有太大压力。",
    occasion: "1991 年出生的人、朋友生日，或第一次买法国地方酒庄老酒。",
    storyTitle: "Valeyrac 的一个家庭",
    palateTitle: "轻一点的 Médoc",
    craftTitle: "传统左岸混酿",
    craft: "赤霞珠、梅洛、品丽珠和小维多，是 Médoc 常见的几种葡萄。1991 年的详细配方没有留下公开技术表，酒标上的家族与村庄才是最直接的线索。",
    palate: "轻盈红果、茶叶、雪松和土壤感，会比浓厚黑果更符合 1991 的性格。它适合安静地喝一小杯，也适合只为年份留下。",
    story: "标签把 Lassalle Yves et Fils 与 Valeyrac 这个小地方留在了一起。不是每瓶老酒都需要国王和名人；一个普通法国家庭的名字，也足够让人记住。"
  }
};

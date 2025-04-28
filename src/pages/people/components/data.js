export function importImage(imgPath) {
  if (!imgPath) {
    console.error('Image path is undefined');
    return '';
  }
  const imgUrl = new URL(`../../../assets/imgs/${imgPath}`, import.meta.url).href;
  return imgUrl;
};

export const faculty = [
  {
    name_cn: '侯廷军',
    name_en: 'Tingjun Hou',
    title_cn: '教授、博士生导师',
    title_en: 'Professor, PhD Supervisor',
    location_cn: '浙江大学紫金港校区药学院446室',
    location_en: '446, School of Pharmacy, Zijingang Campus, Zhejiang University',
    email: 'tingjunhou@zju.edu.cn',
    phone: '0571-88208412',
    image: importImage('people_tingjunhou.png'),
    education: [
      {
        description_cn: '1992年至1997年：北京大学化学与分子工程学院，本科（导师：徐筱杰教授）',
        description_en: '1992-1997: Peking University School of Chemistry and Molecular Engineering, Bachelor (Supervisor: Prof. Xiaojie Xu)',
      },
      {
        description_cn: '1997年至2002年：北京大学化学与分子工程学院，硕博连读（导师：徐筱杰教授）',
        description_en: '1997-2002: Peking University School of Chemistry and Molecular Engineering, Master-PhD Program (Supervisor: Prof. Xiaojie Xu)',
      },
      {
        description_cn: '2002年至2004年：北京大学化学与分子工程学院，博士后（合作导师：徐筱杰教授）',
        description_en: '2002-2004: Peking University School of Chemistry and Molecular Engineering, Postdoctoral Researcher (Collaborating Supervisor: Prof. Xiaojie Xu)',
      },
      {
        description_cn: '2004年至2008年：美国加州大学圣地亚哥分校化学与生物学系，博士后和项目研究员',
        description_en: '2004-2008: University of California San Diego, Department of Chemistry and Biology, Postdoctoral and Project Researcher',
      },
      {
        description_cn: '2009年至2012年：苏州大学功能纳米与软物质研究院/药学院，特聘教授、博士生导师',
        description_en: '2009-2012: Soochow University, Institute of Functional Nano & Soft Materials/School of Pharmacy, Distinguished Professor and PhD Supervisor',
      },
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
        description_en: '2013-present: Zhejiang University School of Pharmacy, Qiushi Distinguished Professor and PhD Supervisor',
      },
    ],
    academic_positions: [
      {
        title_cn: '专业委员会',
        title_en: 'Professional Committee',
        description_cn: '中国化学会计算(机)化学专业委员会副主任委员，中国计算机学会数字医学分会副主任委员，中国药学会智能药学专业委员会委员，中国生物化学与分子生物学会蛋白质专业分会，中国药学会药物化学专业委员会委员，中国生物信息学会生物信息与药物发现专委会常务理事，中国药理学会分析药理学委员会常务委员',
        description_en: 'Deputy Director of Computational Chemistry Committee of Chinese Chemical Society, Deputy Director of Digital Medicine Branch of China Computer Federation, Member of Intelligent Pharmacy Committee of Chinese Pharmaceutical Association, Member of Protein Division of Chinese Society of Biochemistry and Molecular Biology, Member of Medicinal Chemistry Committee of Chinese Pharmaceutical Association, Executive Director of Bioinformatics and Drug Discovery Committee of Chinese Society of Bioinformatics, Executive Committee Member of Analytical Pharmacology Committee of Chinese Pharmacological Society',
      },
      {
        title_cn: '学术期刊编委',
        title_en: 'Editorial Board',
        description_cn: 'Briefings in Bioinformatics (handling editor), Journal of Cheminformatics, Journal of Chemical Information and Modeling, International Journal of Molecular Sciences (Molecular Informatics Section), Frontiers in Pharmacology (associate editor of Experimental Pharmacology and Drug Discovery Section), Current Pharmaceutical Design, Chemical Biology & Drug Design (senior editor), Mini-Reviews in Medicinal Chemistry, Current Computer-aided Drug Design, Medicinal Chemistry, Computational and Mathematical Methods in Medicine, Genomics, Proteomics & Bioinformatics (2015~2017), Journal of Pharmaceutics, Journal of Molecular Graphics & Modeling, Heliyon',
        description_en: 'Briefings in Bioinformatics (handling editor), Journal of Cheminformatics, Journal of Chemical Information and Modeling, International Journal of Molecular Sciences (Molecular Informatics Section), Frontiers in Pharmacology (associate editor of Experimental Pharmacology and Drug Discovery Section), Current Pharmaceutical Design, Chemical Biology & Drug Design (senior editor), Mini-Reviews in Medicinal Chemistry, Current Computer-aided Drug Design, Medicinal Chemistry, Computational and Mathematical Methods in Medicine, Genomics, Proteomics & Bioinformatics (2015~2017), Journal of Pharmaceutics, Journal of Molecular Graphics & Modeling, Heliyon',
      },
      {
        title_cn: '特刊客座编辑',
        title_en: 'Guest Editor',
        description_cn: 'Advanced Drug Delivery Reviews, Current Drug Targets, Evidence-Based Complementary and Alternative Medicine, Combinatorial Chemistry & High Throughput Screening',
        description_en: 'Advanced Drug Delivery Reviews, Current Drug Targets, Evidence-Based Complementary and Alternative Medicine, Combinatorial Chemistry & High Throughput Screening',
      },
    ],
    awards: [
      {
        description_cn: '2024年，2024年科睿唯安全球高被引科学家',
        description_en: '2024, 2024 Global Highly Cited Researcher',
      },
      {
        description_cn: '2023年，2023年中国高被引学者（爱思唯尔）',
        description_en: '2023, 2023 China Highly Cited Scholar (Elsevier)',
      },
      {
        description_cn: '2023年，2023年科睿唯安全球高被引科学家',
        description_en: '2023, 2023 Global Highly Cited Researcher',
      },
      {
        description_cn: '2022年，2022年中国高被引学者（爱思唯尔）',
        description_en: '2022, 2022 China Highly Cited Scholar (Elsevier)',
      },
      {
        description_cn: '2022年，2022年科睿唯安全球高被引科学家',
        description_en: '2022, 2022 Global Highly Cited Researcher',
      },
      {
        description_cn: '2021年，2021年中国高被引学者（爱思唯尔）',
        description_en: '2021, 2021 China Highly Cited Scholar (Elsevier)',
      },
      {
        description_cn: '2020年，国家万人计划领军人才',
        description_en: '2020, National Ten Thousand Talents Program Leader',
      },
      {
        description_cn: '2020年，英国皇家化学会"Top 1%"高被引中国作者',
        description_en: '2020, Royal Society of Chemistry "Top 1%" Highly Cited Chinese Author',
      },
      {
        description_cn: '2019年，2019年中国高被引学者（爱思唯尔）',
        description_en: '2019, 2019 China Highly Cited Scholar (Elsevier)',
      },
      {
        description_cn: '2019年，英国皇家化学会"Top 1%"高被引中国作者',
        description_en: '2019, Royal Society of Chemistry "Top 1%" Highly Cited Chinese Author',
      },
      {
        description_cn: '2018年，2018年中国高被引学者（爱思唯尔）',
        description_en: '2018, 2018 China Highly Cited Scholar (Elsevier)',
      },
      {
        description_cn: '2018年，科技部中青年科技创新领军人才（国家创新人才推进计划）',
        description_en: '2018, Ministry of Science and Technology Young and Middle-aged Science and Technology Innovation Leading Talent',
      },
      {
        description_cn: '2017年，英国皇家化学会"Top 1%"高被引中国作者',
        description_en: '2017, Royal Society of Chemistry "Top 1%" Highly Cited Chinese Author',
      },
      {
        description_cn: '2017年，青年计算化学家奖，中国化学会计算(机)化学专业委员会',
        description_en: '2017, Young Computational Chemist Award, Chinese Chemical Society',
      },
      {
        description_cn: '2015年，浙江省药学会医药科技一等奖（个人奖）',
        description_en: '2015, First Prize of Medical Science and Technology, Zhejiang Pharmaceutical Association',
      },
      {
        description_cn: '2014年，药明康德生命化学研究奖（学者奖）',
        description_en: '2014, WuXi AppTec Life Chemistry Research Award (Scholar Award)',
      },
      {
        description_cn: '2014年，高校科学研究优秀成果奖（二等，排名第2）',
        description_en: '2014, Outstanding Scientific Research Achievement Award of Universities (Second Prize, Ranked 2nd)',
      },
      {
        description_cn: '2012年，第四届寻找青年科学之星（铜奖），中科院和中国科学报社',
        description_en: '2012, 4th Young Science Star (Bronze Award), Chinese Academy of Sciences',
      },
      {
        description_cn: '2008年，高校科学研究优秀成果奖（二等，排名第2）',
        description_en: '2008, Outstanding Scientific Research Achievement Award of Universities (Second Prize, Ranked 2nd)',
      },
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: '',
      },
      {
        title: 'Mingyang Wang, Shuai Li, Jike Wang, Odin Zhang, Hongyan Du, Dejun Jiang, Zhenxing Wu, Yafeng Deng, Yu Kang, Peichen Pan, Dan Li, Xiaorui Wang, Tingjun Hou*, Chang-Yu Hsieh*, ClickGen: Directed Exploration of Synthesizable Chemical Space Leading to the Rapid Synthesis of Novel and Active Lead Compounds via Modular Reactions and Reinforcement Learning, Nature Communications, 2024, accepted.',
        url: '',
      },
      {
        title: 'Xiaorui Wang, Xiaodan Yin, Dejun Jiang, Huifeng Zhao, Zhenxing Wu, Odin Zhang, Jike Wang, Yuquan Li, Yafeng Deng, Huanxiang Liu, Pei Luo, Yuqiang Han, Tingjun Hou*, Xiaojun Yao*, Chang-Yu Hsieh*, Multi-Modal Deep Learning Enables Ultrafast and Accurate Annotation of Enzymatic Active Sites, Nature Communications, 2024, 15, 7348.',
        url: '',
      },
      {
        title: 'Yuqiang Han, Xiaoyang Xu, Chang-Yu Hsieh, Keyan Ding, Hongxia Xu, Renjun Xu, Tingjun Hou*, Qiang Zhang*, Huajun Chen*, Retrosynthesis prediction with an iterative string editing model, Nature Communications, 2024, 15, 6404.',
        url: '',
      },
      {
        title: 'Xiaohong Zhu, Mengqi Luo, Ke An, Danfeng Shi, Tingjun Hou*, Arieh Warshel*, Chen Bai*, Exploring the activation mechanism of metabotropic glutamate receptor 2, Proceedings of the National Academy of Sciences, 2024, 121, e2401079121.',
        url: '',
      },
      {
        title: 'Xujun Zhang, Chao Shen, Haotian Zhang, Yu Kang, Chang-Yu Hsieh*, Tingjun Hou*, Advancing Ligand Docking through Deep Learning: Challenges and Prospects in Virtual Screening, Accounts of Chemical Research, 2024, 57, 1500-1509.',
        url: '',
      },
      {
        title: 'Jiacai Yi, Shaohua Shi, Li Fu, Ziyi Yang, Peifei Nie, Aiping Lu, Chengkun Wu, Yafeng Deng, Changyu Hsieh, Xiangxiang Zeng, Tingjun Hou*, Dongsheng Cao*, OptADMET: an open substructure modification guiding workspace for multiple ADMET property optimization, Nature Protocols, 2024, 19, 1105-1121.',
        url: '',
      },
      {
        title: 'Odin Zhang, Tianyue Wang, Gaoqi Weng, Dejun Jiang, Ning Wang, Xiaorui Wang, Huifeng Zhao, Jialu Wu, Ercheng Wang, Guangyong Chen, Yafeng Deng, Peichen Pan, Yu Kang*, Chang-Yu Hsieh*, Tingjun Hou*, Learning on topological surface and geometric structure for 3D molecular generation, Nature Computational Science, 2023, 3, 849-859.',
        url: '',
      },
      {
        title: 'Xujun Zhang, Odin Zhang, Chao Shen, Wanglin Qu, Shicheng Chen, Hanqun Cao, Yu Kang, Zhe Wang, Ercheng Wang, Jintu Zhang, Yafeng Deng, Furui Liu, Tianyue Wang, Hongyan Du, Langcheng Wang, Peichen Pan*, Guangyong Chen*, Chang-Yu Hsieh*, Tingjun Hou*, Efficient and accurate large library ligand docking with KarmaDock, Nature Computational Science, 2023, 3, 789-804.',
        url: '',
      },
      {
        title: 'Odin Zhang, Jintu Zhang, Jieyu Jin, Xujun Zhang, RenLing Hu, Chao Shen, Hanqun Cao, Hongyan Du, Yu Kang, Yafeng Deng, Furui Liu*, Guangyong Chen*, Chang-Yu Hsieh*, Tingjun Hou*, ResGen is a pocket-aware 3D molecular generation model based on parallel multiscale modelling, Nature Machine Intelligence, 2023, 5, 1020-1030.',
        url: '',
      },
    ],
  },
  {
    name_cn: '李丹',
    name_en: 'Dan Li',
    title_cn: '教授',
    title_en: 'Professor',
    location_cn: '浙江大学紫金港校区药学院446室',
    location_en: '446, School of Pharmacy, Zijingang Campus, Zhejiang University',
    email: 'lidancps@zju.edu.cn',
    phone: '0571-88208412',
    image: importImage('people_danli.png'),
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
        description_en: '2013 - present: Zhejiang University School of Pharmacy, Professor and PhD Supervisor',
      },
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
        description_en: '2013 - present: Zhejiang University School of Pharmacy, Professor and PhD Supervisor',
      },
    ],
    academic_positions: [
      {
        title_cn: '专业委员会',
        title_en: 'Professional Committee',
        description_cn: '中国化学会计算(机)化学专业委员会副主任委员，中国计算机学会数字医学分会副主任委员，中国药学会智能药学专业委员会委员，中国生物化学与分子生物学会蛋白质专业分会，中国药学会药物化学专业委员会委员，中国生物信息学会生物信息与药物发现专委会常务理事，中国药理学会分析药理学委员会常务委员',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
      {
        title_cn: '专业委员会',
        title_en: 'Professional Committee',
        description_cn: '中国化学会计算(机)化学专业委员会副主任委员，中国计算机学会数字医学分会副主任委员，中国药学会智能药学专业委员会委员，中国生物化学与分子生物学会蛋白质专业分会，中国药学会药物化学专业委员会委员，中国生物信息学会生物信息与药物发现专委会常务理事，中国药理学会分析药理学委员会常务委员',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
    ],
    awards: [
      {
        description_cn: '2024年，2024年科睿唯安全球高被引科学家',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
      {
        description_cn: '2024年，2024年科睿唯安全球高被引科学家',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '潘培辰',
    name_en: 'Peichen Pan',
    title_cn: '特聘研究员、博士生导师',
    title_en: 'Assistant Professor, PhD Supervisor',
    location_cn: '浙江大学紫金港校区药学院446室',
    location_en: '446, School of Pharmacy, Zijingang Campus, Zhejiang University',
    email: 'panpeichen@zju.edu.cn',
    phone: '0571-88208412',
    image: importImage('people_peichenpan.png'),
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
        description_en: '2013 - present: Zhejiang University School of Pharmacy, Professor and PhD Supervisor',
      },
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
        description_en: '2013 - present: Zhejiang University School of Pharmacy, Professor and PhD Supervisor',
      },
    ],
    academic_positions: [
      {
        title_cn: '专业委员会',
        title_en: 'Professional Committee',
        description_cn: '中国化学会计算(机)化学专业委员会副主任委员，中国计算机学会数字医学分会副主任委员，中国药学会智能药学专业委员会委员，中国生物化学与分子生物学会蛋白质专业分会，中国药学会药物化学专业委员会委员，中国生物信息学会生物信息与药物发现专委会常务理事，中国药理学会分析药理学委员会常务委员',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
      {
        title_cn: '专业委员会',
        title_en: 'Professional Committee',
        description_cn: '中国化学会计算(机)化学专业委员会副主任委员，中国计算机学会数字医学分会副主任委员，中国药学会智能药学专业委员会委员，中国生物化学与分子生物学会蛋白质专业分会，中国药学会药物化学专业委员会委员，中国生物信息学会生物信息与药物发现专委会常务理事，中国药理学会分析药理学委员会常务委员',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
    ],
    awards: [
      {
        description_cn: '2024年，2024年科睿唯安全球高被引科学家',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
      {
        description_cn: '2024年，2024年科睿唯安全球高被引科学家',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '沈超',
    name_en: 'Chao Shen',
    title_cn: '特聘研究员',
    title_en: 'Assistant Professor',
    location_cn: '浙江大学医学院附属第一医院庆春院区4号楼4-0206室',
    location_en: '4-0206, Building 4, Qichun Campus, Zhejiang University School of Medicine附属第一医院',
    email: 'shenchao513@zju.edu.cn',
    phone: '0571-88208412',
    image: importImage('people_chaoshen.png'),
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
        description_en: '2013 - present: Zhejiang University School of Pharmacy, Professor and PhD Supervisor',
      },
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
        description_en: '2013 - present: Zhejiang University School of Pharmacy, Professor and PhD Supervisor',
      },
    ],
    academic_positions: [
      {
        title_cn: '专业委员会',
        title_en: 'Professional Committee',
        description_cn: '中国化学会计算(机)化学专业委员会副主任委员，中国计算机学会数字医学分会副主任委员，中国药学会智能药学专业委员会委员，中国生物化学与分子生物学会蛋白质专业分会，中国药学会药物化学专业委员会委员，中国生物信息学会生物信息与药物发现专委会常务理事，中国药理学会分析药理学委员会常务委员',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
      {
        title_cn: '专业委员会',
        title_en: 'Professional Committee',
        description_cn: '中国化学会计算(机)化学专业委员会副主任委员，中国计算机学会数字医学分会副主任委员，中国药学会智能药学专业委员会委员，中国生物化学与分子生物学会蛋白质专业分会，中国药学会药物化学专业委员会委员，中国生物信息学会生物信息与药物发现专委会常务理事，中国药理学会分析药理学委员会常务委员',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
    ],
    awards: [
      {
        description_cn: '2024年，2024年科睿唯安全球高被引科学家',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
      {
        description_cn: '2024年，2024年科睿唯安全球高被引科学家',
        description_en: '2024, 2024, Global Highly Cited Researcher',
      },
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
]

export const postdoc = [
  {
    name_cn: '王栋',
    name_en: 'Zhang San',
    title_cn: '博士后/助理研究员',
    title_en: 'Professor',
    email: 'duke.wang@zju.edu.cn',
    research_direction: [
      '基于机器学习的药物筛选方法研究',
      '基于深度学习的GPCR专一性预测研究'
    ],
    image: importImage('people_dongwang.png'),
    education: [
      {
        description_cn: '2010年9月-2014年6月：江苏大学，学士',
        description_en: 'Sep 2010 - Jun 2014: Jiangsu University, Bachelor',
      },
      {
        description_cn: '2014年9月-2016年6月：华中农业大学，硕士（导师：孔德信 教授）',
        description_en: 'Sep 2014 - Jun 2016: Huazhong Agricultural University, Master (Supervisor: Prof. Dexin Kong)',
      },
      {
        description_cn: '2016年7月-2017年7月：中科院昆明植物研究所，研究助理',
        description_en: 'Jul 2016 - Jul 2017: Kunming Institute of Botany, Chinese Academy of Sciences, Research Assistant',
      },
      {
        description_cn: '2017年9月-2021年6月：华中农业大学，博士（导师：孔德信 教授）',
        description_en: 'Sep 2017 - Jun 2021: Huazhong Agricultural University, PhD (Supervisor: Prof. Dexin Kong)',
      },
      {
        description_cn: '2021年8月至今：浙江大学，博士后（合作导师：侯廷军 教授）',
        description_en: 'Aug 2021 - present: Zhejiang University, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Wang, D., Chen, N. H.; Alex G. T.; Jin Y. T.; Wen C. C.; Kong, D. X.*, Accelerating the Identification of Subtype Selective Inhibitors via Three-Dimensional Biologically Relevant Spectrum (BRS-3D): The Monoamine Oxidase Subtypes as a Case Study, Bioorg. Chem., 2020, 106, 104503.',
        url: '',
      },
    ],
  },
  {
    name_cn: '柴昕',
    name_en: 'Xin Chai',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: 'chaixin0428@foxmail.com',
    research_direction: ['新型雄激素受体拮抗剂的设计、合成与生物活性评价'],
    image: importImage('people_xinchai.png'),
    education: [
      {
        description_cn: '2016年9月-2022年6月：浙江大学，博士',
        description_en: 'Sep 2016 - Jun 2022: Zhejiang University, PhD',
      },
      {
        description_cn: '2022年7月至今：浙江大学，博士后（合作导师：侯廷军）',
        description_en: 'Jul 2022 - present: Zhejiang University, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Xin Chai, Huiyong Sun, Wenfang Zhou, Changwei Chen, Luhu Shan, Yuhui Yang, Junzhao He, Jinping Pang, Liu Yang, Xinyue Wang, Sunliang Cui, Yaqin Fu, Xiaohong Xu, Lei Xu, Xiaojun Yao, Dan Li*, Tingjun Hou*. Discovery of N-(4-(Benzyloxy)-phenyl)-sulfonamide Derivatives as Novel Antagonists of the Human Androgen Receptor Targeting the Activation Function 2, Journal of Medicinal Chemistry, 2022,65, 2507-2521',
        url: '',
      },
      {
        title: 'Changwei Chen#, Xin Chai#(co-first authors), Xueping Hu, Shengying Lou, Dan Li*, Tingjun Hou*, Sunliang Cui*, Discovery of 2-(1-(3-Chloro-4-cyanophenyl)-1H-pyrazol-3-yl)acetamides as Potent, Selective, and Orally Available Antagonists Targeting the Androgen Receptor, Journal of Medicinal Chemistry, 2022, 65, 13074-13093',
        url: '',
      },
      {
        title: 'Qing Ye, Xin Chai#(co-first authors), Dejun Jiang, Liu Yang, Chao Shen, Xujun Zhang, Dan Li*, Dongsheng Cao*, Tingjun Hou*, Identification of Active Molecules against Mycobacterium Tuberculosis through Machine Learning, Briefings in Bioinformatics, 2021, 22, bbab068',
        url: '',
      },
    ],
  },
  {
    name_cn: '王颖',
    name_en: 'Ying Wang',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: '0622652@zju.edu.cn',
    research_direction: ['基于靶点的计算机辅助药物发现与设计'],
    image: importImage('people_yingwang.png'),
    education: [
      {
        description_cn: '2013年9月-2017年6月：沈阳药科大学，中药学院，学士 （导师：高慧媛教授）',
        description_en: 'Sep 2013 - Jun 2017: Shenyang Pharmaceutical University, School of Traditional Chinese Medicine, Bachelor (Supervisor: Prof. Huiyuan Gao)',
      },
      {
        description_cn: '2017年9月-2019年6月：沈阳药科大学，中药学院，硕士 （导师：高慧媛教授）',
        description_en: 'Sep 2017 - Jun 2019: Shenyang Pharmaceutical University, School of Traditional Chinese Medicine, Master (Supervisor: Prof. Huiyuan Gao)',
      },
      {
        description_cn: '2019年9月-2022年6月：沈阳药科大学，无涯创新学院，博士 （导师：张凤娇教授）',
        description_en: 'Sep 2019 - Jun 2022: Shenyang Pharmaceutical University, Wuya Innovation College, PhD (Supervisor: Prof. Fengjiao Zhang)',
      },
      {
        description_cn: '2022年9月至今：浙江大学，药学院，博士后 （合作导师：侯廷军教授）',
        description_en: 'Sep 2022 - present: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Ying Wang, Huan Wang, Yupeng Zhang, Feng Xu, Jian Wang*, Fengjiao Zhang*. Stepwise Strategy to Identify Thrombin as a Hydrolytic Substrate for Nattokinase, Journal of chemical information and modeling, 2022, in press.',
        url: '',
      },
      {
        title: 'Ying Wang, Baichun Hu, Yupeng Zhang, DongWang, Zhaohu Luo, Jian Wang, Fengjiao Zhang*. Perspective of structural flexibility on selective inhibition towards CYP1B1 over CYP1A1 by alpha-naphthoflavone analogs, Physical Chemistry Chemical Physics, 2021, 23, 20230-20246.',
        url: '',
      },
      {
        title: 'Ying Wang, Xiaomei He, Chunshi Li, Yan Ma, Wenchi Xue, Baichun Hu, Jian Wang, Tingting Zhang, Fengjiao Zhang*. Carvedilol serves as a novel CYP1B1 inhibitor, a systematic drug repurposing approach through structure-based virtual screening and experimental verification, European Journal of Medicinal Chemistry, 2020, 193: 112235.',
        url: '',
      },
      {
        title: 'Ying Wang, Baichun Hu, YuSheng Peng, Xin Xiong, Wenhua Jing, Jian Wang*, Huiyuan Gao*. In Silico Exploration of the Molecular Mechanism of Cassane Diterpenoids on Anti-inflammatory and Immunomodulatory Activity, Journal of chemical information and modeling, 2019, 59, 2309-2323.',
        url: '',
      },
    ],
  },
  {
    name_cn: '吴振兴',
    name_en: 'Zhenxing Wu',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: '3140101624@zju.edu.cn',
    research_direction: ['基于机器学习和人工智能技术的成药性预测研究'],
    image: importImage('people_zhenxingwu.png'),
    education: [
      {
        description_cn: '2014年9月-2018年6月：浙江大学，药学院，学士',
        description_en: 'Sep 2014 - Jun 2018: Zhejiang University, School of Pharmacy, Bachelor',
      },
      {
        description_cn: '2018年9月-2023年6月：浙江大学，药学院，博士（导师：侯廷军教授）',
        description_en: 'Sep 2018 - Jun 2023: Zhejiang University, School of Pharmacy, PhD (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2023年7月至今：浙江大学，药学院，博士后（合作导师：侯廷军教授）',
        description_en: 'Jul 2023 - present: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Dejun Jiang, Jike Wang, Xujun Zhang, Hongyan Du, Lurong Pan, Changyu Hsieh*, Dongsheng Cao*, Tingjun Hou*, Knowledge-based BERT: a method to extract molecular features like computational chemists, Briefings in Bioinformatics, 2022, 23, bbac131.',
        url: '',
      },
      {
        title: 'Zhenxing Wu, Dejun Jiang, Jike Wang, Chang-Yu Hsieh*, Dongsheng Cao*, Tingjun Hou*, Mining Toxicity Information from Large Amounts of Toxicity Data, Journal of Medicinal Chemistry, 2021, 64, 6924-6936.',
        url: '',
      },
      {
        title: 'Zhenxing Wu, Dejun Jiang, Chang-Yu Hsieh, Guangyong Chen, Ben Liao, Dongsheng Cao*, Tingjun Hou*, Hyperbolic Relational Graph Convolution Networks Plus: a Simple but Highly Efficient QSAR-modeling Method, Briefings in Bioinformatics, 2021, 22, bbab112.',
        url: '',
      },
    ],
  },
]

export const graduate = [
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
]

export const undergraduate = [
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
]

export const alumni = [
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    location_cn: '北京',
    location_en: 'Beijing',
    phone: '1234567890',
    description_url: 'https://arxiv.org/abs/2101.00000',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    location_cn: '北京',
    location_en: 'Beijing',
    phone: '1234567890',
    description_url: 'https://arxiv.org/abs/2101.00000',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    location_cn: '北京',
    location_en: 'Beijing',
    phone: '1234567890',
    description_url: 'https://arxiv.org/abs/2101.00000',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    location_cn: '北京',
    location_en: 'Beijing',
    phone: '1234567890',
    description_url: 'https://arxiv.org/abs/2101.00000',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
  {
    name_cn: '张三',
    name_en: 'Zhang San',
    title_cn: '教授',
    title_en: 'Professor',
    email: 'zhangsan@gmail.com',
    location_cn: '北京',
    location_en: 'Beijing',
    phone: '1234567890',
    description_url: 'https://arxiv.org/abs/2101.00000',
    research_direction: '计算机视觉',
    image: 'https://via.placeholder.com/150',
    education: [
      {
        description_cn: '2013年3月至今：浙江大学药学院，求是特聘教授、博士生导师',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
      {
        title: 'Zhenxing Wu, Odin Zhang, Xiaorui Wang, Li Fu, Huifeng Zhao, Jike Wang, Hongyan Du, Dejun Jiang, Yafeng Deng, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, accepted.',
        url: 'https://arxiv.org/abs/2101.00000',
      },
    ],
  },
]



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
    image: importImage('people_tingjunhou.jpg'),
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
        description_cn: '2025年，2024年中国高被引学者（爱思唯尔）',
        description_en: '2025, 2024 China Highly Cited Scholar (Elsevier)',
      },
      {
        description_cn: '2024年，2024年科睿唯安全球高被引科学家',
        description_en: '2024, 2024 Global Highly Cited Researcher',
      },
      {
        description_cn: '2024年，2023年中国高被引学者（爱思唯尔）',
        description_en: '2024, 2023 China Highly Cited Scholar (Elsevier)',
      },
      {
        description_cn: '2023年，2023年科睿唯安全球高被引科学家',
        description_en: '2023, 2023 Global Highly Cited Researcher',
      },
      {
        description_cn: '2023年，2022年中国高被引学者（爱思唯尔）',
        description_en: '2023, 2022 China Highly Cited Scholar (Elsevier)',
      },
      {
        description_cn: '2022年，2022年科睿唯安全球高被引科学家',
        description_en: '2022, 2022 Global Highly Cited Researcher',
      },
      {
        description_cn: '2022年，2021年中国高被引学者（爱思唯尔）',
        description_en: '2022, 2021 China Highly Cited Scholar (Elsevier)',
      },
      {
        description_cn: '2021年，2020年中国高被引学者（爱思唯尔）',
        description_en: '2021, 2020 China Highly Cited Scholar (Elsevier)',
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
        description_cn: '2020年，2019年中国高被引学者（爱思唯尔）',
        description_en: '2020, 2019 China Highly Cited Scholar (Elsevier)',
      },
      {
        description_cn: '2019年，英国皇家化学会"Top 1%"高被引中国作者',
        description_en: '2019, Royal Society of Chemistry "Top 1%" Highly Cited Chinese Author',
      },
      {
        description_cn: '2019年，2018年中国高被引学者（爱思唯尔）',
        description_en: '2019, 2018 China Highly Cited Scholar (Elsevier)',
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
        title: 'Huifeng Zhao, Odin Zhang*, Dejun Jiang, Zhenxing Wu, Hongyan Du, Xiaorui Wang, Yihao Zhao, Yuansheng Huang, Jingxuan Ge, Tingjun Hou*, Yu Kang*, RAPiDock: Pushing the Boundaries of Protein-peptide Docking with Rational and Accurate Diffusion Generative Model, Nature Machine Intelligence, 2025, accepted.',
        url: '',
      },
      {
        title: 'Bowen Wang, Junyou Li, Donghao Zhou, Lanqing Li, Jinpeng Li, Ercheng Wang, Jianye Hao, Liang Shi, Chengqiang Lu, Jiezhong Qiu, Tingjun Hou*, Dongsheng Cao*, Guangyong Chen*, PhengAnn Heng, Unified and Explainable Molecular Representation Learning for Imperfectly Annotated Data from the Hypergraph View, Nature Communications, 2025, accepted.',
        url: '',
      },
      {
        title: 'Shicheng Chen, Odin Zhang, Chenran Jiang, Huifeng Zhao, Xujun Zhang, Mengting Chen, Yun Liu, Qun Su, Zhenxing Wu, Xinyue Wang, Wanglin Qu, Yuanyi Ye, Xin Chai, Ning Wang, Tianyue Wang, Yuan An, Guanlin Wu, Qianqian Yang, Jiean Chen, Wei Xie, Haitao Lin, Dan Li, Chang-Yu Hsieh*, Yong Huang*, Yu Kang*, Tingjun Hou*, Peichen Pan*, Deep lead optimization enveloped in protein pocket and its application in designing potent and selective ligands targeting LTK protein, Nature Machine Intelligence, 2025, 7, 448-458.',
        url: '',
      },
      {
        title: 'Shukai Gu, Chao Shen, Xujun Zhang, Huiyong Sun, Heng Cai, Hao Luo, Huifeng Zhao, Bo Liu, Hongyan Du, Yihao Zhao, Chenggong Fu, Silong Zhai, Yafeng Deng, Huanxiang Liu, Tingjun Hou*, Yu Kang*, Benchmarking AI-powered docking methods from the perspective of virtual screening, Nature Machine Intelligence, 2025, 7, 509-520.',
        url: '',
      },
      {
        title: 'Jike Wang, Rui Qin, Mingyang Wang, Meijing Fang, Yangyang Zhang, Yuchen Zhu, Qun Su, Qiaolin Gou, Chao Shen, Odin Zhang, Zhenxing Wu, Dejun Jiang, Xujun Zhang, Huifeng Zhao, Jingxuan Ge, Zhourui Wu, Yu Kang*, Chang-Yu Hsieh*, Tingjun Hou*, Token-Mol 1.0: tokenized drug design with large language models, Nature Communications, 2025, 16, 4416.',
        url: '',
      },
      {
        title: 'Yue Wan, Jialu Wu, Tingjun Hou*, Chang-Yu Hsieh*, Xiaowei Jia*, Multi-channel learning for integrating structural hierarchies into context-dependent molecular representation, Nature Communications, 2025, 16, 413.',
        url: '',
      },
      {
        title: 'Jike Wang, Jianwen Feng, Yu Kang, Peichen Pan, Jingxuan Ge, Yan Wang, Mingyang Wang, Zhenxing Wu, Xingcai Zhang, Jiameng Yu, Xujun Zhang, Tianyue Wang, Lirong Wen, Guangning Yan, Yafeng Deng, Hui Shi, Chang-Yu Hsieh*, Zhihui Jiang*, Tingjun Hou*, Discovery of antimicrobial peptides with notable antibacterial potency by an LLM-based foundation model, Science Advances, 2025, 11, eads8932.',
        url: '',
      },
      {
        title: 'Yifei Liu, Yiheng Zhu, Jike Wang, Renling Hu, Chao Shen, Wanglin Qu, Gaoang Wang, Qun Su, Yuchen Zhu, Yu Kang*, Peichen Pan*, Chang-Yu Hsieh*, Tingjun Hou*, A Multi-Objective Molecular Generation Method Based on Pareto Algorithm and Monte Carlo Tree Search, Advanced Science, 2025, 12, e2410640.',
        url: '',
      },
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
      {
        title: 'Zhenxing Wu, Jike Wang, Hongyan Du, Dejun Jiang, Yu Kang, Dan Li, Peichen Pan, Yafeng Deng, Dongsheng Cao, Chang-Yu Hsieh*, Tingjun Hou*, Substructure Mask Explanation (SME): an intuitive graph neural network explanation approach for mining structure-activity information from molecular property prediction models, Nature Communications, 2023, 14, 2585.',
        url: '',
      },
      {
        title: 'Weitao Fu, Hao Yang, Chenxian Hu, Jianing Liao, Zhou Gong, Minkui Zhang, Shuai Yang, Shangxiang Ye, Yixuan Lei, Rong Sheng, Zhiguo Zhang, Xiaojun Yao, Chun Tang*, Dan Li*, Tingjun Hou*, Small-Molecule Inhibition of Androgen Receptor Dimerization as a Strategy against Prostate Cancer, ACS Central Science, 2023, 9, 675-684.',
        url: '',
      },
      {
        title: 'Rui Shi, Peichen Pan, Rui Lv, Chongqing Ma, Enhui Wu, Ruochen Guo, Zhihao Zhao, Hexing Song, Joe Zhou, Yang Liu, Guoqiang Xu, Tingjun Hou*, Zhenhui Kang*, Jian Liu*, High-throughput glycolytic inhibitor discovery targeting glioblastoma by graphite dots-assisted LDI mass spectrometry, Science Advances, 2022, 8, eabl4923.',
        url: '',
      },
      {
        title: 'Xin Chai, Huiyong Sun, Wenfang Zhou, Changwei Chen, Luhu Shan, Yuhui Yang, Junzhao He, Jinping Pang, Liu Yang, Xinyue Wang, Sunliang Cui, Yaqin Fu, Xiaohong Xu, Lei Xu, Xiaojun Yao, Dan Li*, Tingjun Hou*, Discovery of N-(4-(Benzyloxy)-phenyl)-sulfonamide Derivatives as Novel antagonists of the human androgen receptor targeting the activation function 2, Journal of Medicinal Chemistry, 2022, 65, 2507-2521.',
        url: '',
      },
      {
        title: 'Xueping Hu, Jinping Pang, Jintu Zhang, Chao Shen, Xin Chai, Ercheng Wang, Haiyi Chen, Xuwen Wang, Mojie Duan, Weitao Fu, Lei Xu, Yu Kang, Dan Li*, Hongguang Xia*, Tingjun Hou*, Discovery of novel GR ligands towards druggable GR antagonist conformations identified by MD Simulations and Markov state model analysis, Advanced Science, 2022, 9, 2102435.',
        url: '',
      },
      {
        title: 'Dejun Jiang, Chang-Yu Hsieh, Zhenxing Wu, Yu Kang, Jike Wang, Ercheng Wang, Ben Liao, Chao Shen, Lei Xu, Jian Wu*, Dongsheng Cao*, Tingjun Hou*, InteractionGraphNet: a novel and efficient deep graph representation learning framework for accurate protein-ligand interaction predictions, Journal of Medicinal Chemistry, 2021, 64, 18209-18232.',
        url: '',
      },
      {
        title: 'Weitao Fu, Minkui Zhang, Jianing Liao, Qing Tang, Yixuan Lei, Zhou Gong, Luhu Shan, Mojie Duan, Xin Chai, Jinping Pang, Chun Tang, Xuwen Wang, Xiaohong Xu, Dan Li*, Rong Sheng*, Tingjun Hou*, Discovery of a novel androgen receptor antagonist manifesting evidence to disrupt the dimerization of the ligand-binding domain via attenuating the hydrogen-bonding network, Journal of Medicinal Chemistry, 2021, 64, 17221-17238.',
        url: '',
      },
      {
        title: 'Qing Ye, Chang-Yu Hsieh, Ziyi Yang, Yu Kang, Jiming Chen, Dongsheng Cao*, Shibo He*, Tingjun Hou*, A unified drug-target interaction prediction framework based on knowledge graph and recommendation system, Nature Communications, 2021, 12, 6775.',
        url: '',
      },
      {
        title: 'Gaoqi Weng, Dan Li, Yu Kang*, Tingjun Hou*, Integrative modeling of PROTAC-mediated ternary complexes, Journal of Medicinal Chemistry, 2021, 64, 16271-16281.',
        url: '',
      },
      {
        title: 'Jike Wang, Chang-Yu Hsieh, Mingyang Wang, Xiaorui Wang, Zhenxing Wu, Dejun Jiang, Benben Liao, Xujun Zhang, Bo Yang, Qiaojun He, Dongsheng Cao*, Xi Chen*, Tingjun Hou*, Multi-constraint molecular generation based on conditional transformer, knowledge distillation and reinforcement learning, Nature Machine Intelligence, 2021, 3, 914-922.',
        url: '',
      },
      {
        title: 'Haiyi Chen, Yu Kang, Mojie Duan*, Tingjun Hou*, Regulation mechanism for the binding between the SARS-CoV-2 spike protein and host angiotensin-converting enzyme II, Journal of Physical Chemistry Letters, 2021, 12, 6252-6261.',
        url: '',
      },
      {
        title: 'Weitao Fu, Ercheng Wang, Di Ke, Hao Yang, Lingfeng Chen, Jingjing Shao, Xueping Hu, Lei Xu, Na Liu*, Tingjun Hou*, Discovery of a novel Fusarium Graminearum Mitogen-activated Protein Kinase (FgGpmk1) inhibitor for the treatment of fusarium head blight,Journal of Medicinal Chemistry, 2021, 64, 13841-13852.',
        url: '',
      },
      {
        title: 'Yongchang Xu, Haiyi Chen, Huimin Zhang, Saif Ullah, Tingjun Hou*, Youjun Feng*, The MCR-3 inside linker appears as a facilitator of colistin resistance, Cell Reports, 2021, 35, 109135.',
        url: '',
      },
      {
        title: 'Guoli Xiong, Zhenxing Wu, Jiacai Yi, Li Fu, Zhijiang Yang, Changyu Hsieh, Mingzhu Yin, Xiangxiang Zeng, Chengkun Wu, Aiping Lu, Xiang Chen, Tingjun Hou*, Dongsheng Cao*, ADMETlab 2.0: an integrated online platform for accurate and comprehensive predictions of ADMET properties, Nucleic Acids Research, 2021, 49(W1), W5-W14.',
        url: '',
      },
      {
        title: 'Zhenxing Wu, Dejun Jiang, Jike Wang, Chang-Yu Hsieh*, Dongsheng Cao*, Tingjun Hou*, Mining toxicity information from large amounts of toxicity data, Journal of Medicinal Chemistry, 2021, 64, 6924-6936.',
        url: '',
      },
      {
        title: 'Gaoqi Weng, Chao Shen, Dongsheng Cao, Junbo Gao, Xiaowu Dong, Qiaojun He, Bo Yang, Dan Li*, Jian Wu*, Tingjun Hou*, PROTAC-DB: an online database of PROTACs, Nucleic Acids Research, 2021, 49(D1), D1381-D1387.',
        url: '',
      },
      {
        title: 'Hongyan Du, Junbo Gao, Gaoqi Weng, Junjie Ding, Xin Chai, Jinping Pang, Yu Kang, Dan Li, Dongsheng Cao*, Tingjun Hou*, CovalentInDB: a comprehensive database facilitating the discovery of covalent inhibitors, Nucleic Acids Research, 2021, 49(D1), D1122-D1129.',
        url: '',
      },
      {
        title: 'Zhenxing Wu, Dejun Jiang, Chang-Yu Hsieh, Guangyong Chen, Ben Liao, Dongsheng Cao*, Tingjun Hou*, Hyperbolic Relational graph convolution networks plus: a simple but highly efficient QSAR-modeling method, Briefings in Bioinformatics, 2021, 22, bbab112.',
        url: '',
      },
      {
        title: 'Dejun Jiang, Zhenxing Wu, Chang-Yu Hsieh, Guangyong Chen, Ben Liao, Zhe Wang, Chao Shen, Dongsheng Cao*, Jian Wu*, Tingjun Hou*, Could graph neural networks learn better molecular representation for drug discovery? A comparison study of descriptor-based and graph-based models, Journal of Cheminformatics, 2021, 13, 12.',
        url: '',
      },
      {
        title: 'Jie Dong, Minfeng Zhu, Yonghuan Yun, Aiping Lu, Tingjun Hou*, Dongsheng Cao*, BioMedR: An R/CRAN Package for Integrated Data Analysis Pipeline in Biomedical Study, Briefings in Bioinformatics, 2021, 22, 474-484.',
        url: '',
      },
      {
        title: 'Gaoqi Weng, Junbo Gao, Zhe Wang, Ercheng Wang, Xueping Hu, Xiaojun Yao, Dongsheng Cao*, Tingjun Hou*, Comprehensive evaluation of fourteen docking programs on protein-peptide complexes, Journal of Chemical Theory and Computation, 2020, 16, 3959-3969.',
        url: '',
      },
      {
        title: 'Ziyi Yang, Junhong He, Aiping Lu, Tingjun Hou*, Dongsheng Cao*, The Application of Negative Design to Design More Desirable Virtual Screening Library, Journal of Medicinal Chemistry, 2020, 63, 4411-4429.',
        url: '',
      },
      {
        title: 'Chao Shen, Junjie Ding, Zhe Wang, Dongsheng Cao, Xiaoqin Ding, Tingjun Hou*, From machine learning to deep learning: advances in scoring functions for computational docking,WIRES Computational Molecular Science, 2020, 10, e1429.',
        url: '',
      },
      {
        title: 'Ercheng Wang, Huiyong Sun, Junmei Wang, Zhe Wang, Hui Liu, John Zenghui Zhang*, Tingjun Hou*, End-Point binding free energy calculation with MM/PBSA and MM/GBSA: strategies and applications in drug design, Chemical Reviews, 2019, 119, 9478-9508.',
        url: '',
      },
      {
        title: 'Gaoqi Weng, Ercheng Wang, Zhe Wang, Hui Liu, Feng Zhu, Dan Li, Tingjun Hou*, HawkDock: a web server to predict and analyze the protein-protein complex based on computational docking and MM/GBSA, Nucleic Acids Research, 2019, 47, W322-W330.',
        url: '',
      },
      {
        title: 'Zhe Wang, Xuwen Wang, Youyong Li, Tailong Lei, Ercheng Wang, Dan Li, Yu Kang, Feng Zhu, Tingjun Hou*, farPPI: a webserver for accurate prediction of protein-ligand binding structures for small-molecule PPI inhibitors by MM/PB(GB)SA methods, Bioinformatics, 2019, 35, 1777-1779.',
        url: '',
      },
      {
        title: 'Peichen Pan, Huidong Yu, Qinglan Liu, Xiaotian Kong, Hu Chen, Jiean Chen, Qi Liu, Dan Li, Yu Kang, Huiyong Sun, Wenfang Zhou, Sheng Tian, Sunliang Cui, Feng Zhu, Youyong Li, Yong Huang*, Tingjun Hou*, Combating drug-resistant mutants of ALK with potent and selective Type-I1/2 inhibitors by stabilizing unique DFG-shifted loop conformation, ACS Central Science, 2017, 3, 1208-1220.',
        url: '',
      },
      {
        title: 'Tailong Lei, Huiyong Sun, Yu Kang, Feng Zhu. Hui Liu, Wenfang Zhou, Zhe Wang, Dan Li, Youyong Li, Tingjun Hou*, ADMET evaluation in drug discovery. 18. Reliable prediction of chemical-induced urinary tract toxicity by boosting machine learning approaches, Molecular Pharmaceutics, 2017, 14, 3935-3953.',
        url: '',
      },
      {
        title: 'Huiyong Sun, Pengcheng Chen, Dan Li, Youyong Li, Tingjun Hou*, Directly-binding rather than induced-fit dominated binding affinity difference in (S) and (R)-crizotinib bound MTH1, Journal of Chemical Theory and Computation, 2016, 12, 851-860.',
        url: '',
      },
      {
        title: 'Hui Liu, Tingjun Hou*, CaFE: a tool for binding affinity prediction using end-point free energy methods,Bioinformatics, 2016, 32, 2216-2218.',
        url: '',
      },
      {
        title: 'Sheng Tian, Junmei Wang, Youyong Li, Tingjun Hou*, The application of in silico drug-likeness predictions in pharmaceutical research, Advanced Drug Delivery Reviews, 2015, 86, 2-10.',
        url: '',
      },
      {
        title: 'Huiyong Sun, Youyong Li, Sheng Tian, Junmei Wang, Tingjun Hou*, P-loop conformation governed Crizotinib resistance in G2032R-mutated ROS1 tyrosine kinase: clues from free energy landscape, PLoS Computational Biologys, 2014, 10, e1003729.',
        url: '',
      },
      {
        title: 'Huiyong Sun, Youyong Li, Sheng Tian, Lei Xu, Tingjun Hou*, Assessing the performance of MM/PBSA and MM/GBSA methods. 4. accuracies of MM/PBSA and MM/GBSA methodologies evaluated by various simulation protocols using PDBbind data set, Physical Chemistry Chemical Physics, 2014, 16, 16719-16729.',
        url: '',
      },
      {
        title: 'Qian Zhang, Wei Zhang, Youyong Li, Junmei Wang, Jian Zhang, Tingjun Hou*, MORT: a powerful foundational library for computational biology and CADD, Journal of Cheminformatics, 2014, 6, 36.',
        url: '',
      },
      {
        title: 'Lei Xu, Yu Zhang, Longtai Zheng, Chunhua Qiao, Youyong Li, Dan Li, Xuechu Zhen*, Tingjun Hou*, Discovery of novel inhibitors targeting macrophage migration inhibitory factor via structure-based virtual screening and bioassays, Journal of Medicinal Chemistry, 2014, 57, 3737-3745.',
        url: '',
      },
      {
        title: 'Lei Xu, Huiyong Sun, Youyong Li, Junmei Wang, Tingjun Hou*, Assessing the performance of MM/PBSA and MM/GBSA methods. 3. the impact of force fields and ligand charge models, Journal of Physical Chemistry B, 2013, 117, 8408-8421.',
        url: '',
      },
      {
        title: 'Tingjun Hou*, Nan Li, Youyong Li, Wei Wang, Characterization of domain-peptide interaction interface: prediction of SH3 domain-mediated protein-protein interaction network in yeast by generic structure-based models,Journal of Proteome Research, 2012, 11, 2982-2995.',
        url: '',
      },
      {
        title: 'Sheng Tian, Junmei Wang, Youyong Li, Xiaojie Xu, Tingjun Hou*, Drug-likeness analysis of Traditional Chinese Medicines: prediction of drug-likeness using machine learning approaches, Molecular Pharmaceutics, 2012, 9, 2875-2886.',
        url: '',
      },
      {
        title: 'Tingjun Hou*, Junmei Wang, Youyong Li, Wei Wang*, Assessing the performance of the MM/PBSA and MM/GBSA methods: II. the accuracy of ranking poses generated by molecular docking calculations, Journal of Computational Chemistry, 2011, 32, 866-877.',
        url: '',
      },
      {
        title: 'Tingjun Hou*, Junmei Wang, Youyong Li, Wei Wang*, Assessing the performance of the MM/PBSA and MM/GBSA methods: I. The accuracy of binding free energy calculations based on molecular dynamics simulations, Journal of Chemical Information and Modeling, 2011, 51, 69-82.',
        url: '',
      },
      {
        title: 'Jing Zhang#, Tingjun Hou# (Co-first authors), Wei Wang, Jun S. Liu, A Bayesian method for detecting combinatorial mutation patterns responsible for HIV drug resistance, Proceedings of the National Academy of Sciences, 2010, 107, 1321-1326.',
        url: '',
      },
      {
        title: 'Tingjun Hou*, Yon Yu, Molecular dynamics and free energy studies on the wild-type and double mutant HIV-1 protease complexed with amprenavir and two amprenavir-related inhibitors: mechanism for binding and drug resistance, Journal of Medicinal Chemistry, 2007, 50, 1177-1188.',
        url: '',
      },
    ],
  },
  {
    name_cn: '李 丹',
    name_en: 'Dan Li',
    title_cn: '教授、博士生导师',
    title_en: 'Professor, PhD Supervisor',
    location_cn: '浙江大学紫金港校区药学院446室',
    location_en: '446, School of Pharmacy, Zijingang Campus, Zhejiang University',
    email: 'lidancps@zju.edu.cn',
    phone: '0571-88208412',
    image: importImage('people_danli.jpg'),
    education: [
      {
        description_cn: '1996年9月至2000年6月：中国药科大学，药学院，学士',
        description_en: '1996-2000: China Pharmaceutical University, School of Pharmacy, Bachelor',
      },
      {
        description_cn: '2001年9月至2004年6月：中国药科大学，药学院药物化学系，硕士',
        description_en: '2001-2004: China Pharmaceutical University, Department of Medicinal Chemistry, Master',
      },
      {
        description_cn: '2005年2月至2009年4月：德国马堡大学，药学院药物化学系，博士',
        description_en: '2005-2009: University of Marburg, Germany, Department of Medicinal Chemistry, PhD',
      },
      {
        description_cn: '2009年5月至2010年2月：德国马堡大学，药学院药物化学系，博士后',
        description_en: '2009-2010: University of Marburg, Germany, Department of Medicinal Chemistry, Postdoctoral Researcher',
      },
      {
        description_cn: '2010年7月至2013年5月：德国吉森大学，生物化学系，洪堡学者',
        description_en: '2010-2013: University of Giessen, Germany, Department of Biochemistry, Humboldt Scholar',
      },
      {
        description_cn: '2013年5月至2013年12月：浙江大学，药学院，教师',
        description_en: '2013-2013: Zhejiang University, School of Pharmacy, Faculty',
      },
      {
        description_cn: '2013年12月至2022年12月：浙江大学，药学院，副教授',
        description_en: '2013-2022: Zhejiang University, School of Pharmacy, Associate Professor',
      },
      {
        description_cn: '2022年12月至今：浙江大学，药学院，教授',
        description_en: '2022-present: Zhejiang University, School of Pharmacy, Professor',
      },
    ],
    research_direction: [
      {
        description_cn: '创新型（新靶点、新结构、新的筛选思路和策略）小分子药物的设计和发现。针对相应靶点，通过分子对接、分子动力学模拟和自由能计算等计算机辅助药物设计方法发现潜在的候选活性化合物；对候选化合物进行酶、细胞或细菌活性评价，并且通过生化和分子生物学手段进行深入的分子水平的论证和研究。目前研究体系主要包括：(1). 以卡介苗菌株BCG为模式菌，设计和发现抗结核杆菌药物；(2).针对雄激素受体，设计和发现抗前列腺癌药物；(3).针对糖皮质激素受体，设计和发现抗炎调节剂。',
        description_en: 'Design and discovery of innovative small molecule drugs (new targets, new structures, new screening ideas and strategies). Using computer-aided drug design methods such as molecular docking, molecular dynamics simulation and free energy calculations to discover potential candidate active compounds for corresponding targets; evaluating enzymatic, cellular or bacterial activities of candidate compounds, and conducting in-depth studies at the molecular level through biochemical and molecular biological methods. Current research systems mainly include: (1) Design and discovery of anti-tuberculosis drugs using BCG strain as a model; (2) Design and discovery of anti-prostate cancer drugs targeting the androgen receptor; (3) Design and discovery of anti-inflammatory modulators targeting the glucocorticoid receptor.',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Chai X, Wang XY, Cai LT, Chen HY, Wang SY, Liao JN, Wang HT, Zhou YX, Xu L, Shan LH, Xu XH, Yang YH, He JZ, Fu YQ, Hou TJ,* Sheng R,* Li D*. Unraveling the Efficacy of AR Antagonists Bearing N‑(4-Benzyloxy)phenyl)piperidine-1-sulfonamide Scaffold in Prostate Cancer Therapy by Targeting LBP Mutations. J Med Chem. 2025 Jun 12, 68:11962-11978.',
        url: '',
      },
      {
        title: 'Liao JN, Liao JB, Wang Y, Wang XY, Chai X, Wang HT, Xu L, Shan LH, Xu XH, Fu WT, Pan PC, Hou TJ, Sheng R*, Li D*. Discovery of N‑(1,2,4-Thiadiazol-5-yl)benzo[b]oxepine-4-carboxamide Derivatives as Novel Antiresistance Androgen Receptor Antagonists. J Med Chem. 2025 Feb, 68:3445-3459.',
        url: '',
      },
      {
        title: 'Yuan LE, Liao JN, Qin YY, Cai LT, Zhang MK, Liao JB, Li D*, Hou TJ, Sheng R*. Discovery of novel tetrahydroquinoline derivatives as potent, selective, and orally Available AR antagonists. Eur J Med Chem. 2025 Jul, 291: 117566.',
        url: '',
      },
      {
        title: 'Ge JX, Li SM, Weng GQ, Wang HT, Fang MJ, Sun HY, Deng YF, Hsieh CY, Li D*, Hou TJ*. PROTAC-DB 3.0: an Updated Database of PROTACs with Extended Pharmacokinetic Parameters. Nucleic Acids Res. 2025 Jan 6, 53(D1): D1510−D1515.',
        url: '',
      },
      {
        title: 'Wang HT, Wang XW, Zhong HY, Cai LT, Fu WT, Chai X, Liao JN, Sheng R, Shan LH, Xu XH, Xu L, Pan PC*, Hou TJ*, Li D*. Discovery of 5-Nitro-N-(3-(trifluoromethyl) phenyl) pyridin-2-amine as a Novel Pure Androgen Receptor Antagonist against Antiandrogen Resistance. J Med Chem. 2024 Nov, 67:20514-20530.',
        url: '',
      },
      {
        title: 'Liao JB, Liao JN, Zhang MK, Yu YZ, Cai LT, Le KX, Fu WT, Qin YY, Hou TJ, Li D*, Sheng R*. Identification of Oral Bioavailable Coumarin Derivatives as Potential AR Antagonists Targeting Prostate Cancer. J Med Chem. 2024 Nov, 67: 19395−19416.',
        url: '',
      },
      {
        title: 'Liao JN, Hu CX, Fu WT, Liao JB, Chai X, Shan LH, Xu XH, Hou TJ, Sheng R*, Li D*. Discovery of Thiadiazoleamide Derivatives as Potent, Selective, and Orally Available Antagonists Disrupting Androgen Receptor Homodimer. J Med Chem. 2024 Sep, 67, 17520−17541.',
        url: '',
      },
      {
        title: 'Wang XY, Chai X, Shan LH, Xu XH, Xu L, Hou TJ, Sun HY*, Li D*. A Potent New-scaffold Androgen Receptor Antagonist Discovered on the Basis of a MIEC-SVM Model. Acta Pharmacol Sin. 2024 Sep, 45:1978-1991.',
        url: '',
      },
      {
        title: 'Sun Y, Wang HT, Li YR, Li ZX, Mao ZH, Zhang MY, Shao YX, Ye JQ, Li D*, Shan LH*. The Design, Synthesis and Bioactivity Evaluation of Novel Androgen Receptor Degraders Based on Hydrophobic Tagging. Bioorg Chem. 2024 March, 146:107309.',
        url: '',
      },
      {
        title: 'Chen HY, Zhou YX, Wang XY, Chai X, Wang Z, Wang EC, Xu L, Hou TJ*, Li D*, Duan MJ*. Discovery of Novel Anti-Resistance AR Antagonists Guided by Funnel Metadynamics Simulation. Adv Sci. 2024 March, 11:2309261.',
        url: '',
      },
      {
        title: 'Yang L, Hu XP, Lu Y, Xu RL, Xu YP, Ma WL, Alam MS, Zhang TY, Chai X, Lei YX, Ye Q, Dong XW, Kang Y, Che JX*, Hou TJ *, Li D*. Discovery of N-(1-(6-oxo-1,6-dihydropyrimidine)-pyrazole) Acetamide Derivatives as Novel Noncovalent DprE1 Inhibitors against Mycobacterium tuberculosis. J Med Chem. 2024 Feb, 67:1914-1931.',
        url: '',
      },
      {
        title: 'Zhong HY, Wang XY, Chen SC, Wang Z, Wang HT, Xu L, Hou TJ, Yao XJ*, Li D*, Pan PC*. Discovery of Novel Inhibitors of BRD4 for Treating Prostate Cancer: A Comprehensive Case Study for Considering Water Networks in Virtual Screening and Drug Design. J Med Chem. 2024 Jan, 67:138−151.',
        url: '',
      },
      {
        title: 'Fu WT, Yang H, Hu CX, Liao JN, Gong Z, Zhang MK, Yang S, Ye SX, Lei YX, Sheng R, Zhang ZG, Yao XJ, Tang C*, Li D*, Hou TJ*. Small-Molecule Inhibition of AR Dimerization as a Strategy Against Prostate Cancer. ACS Cent Sci. 2023 March 8, 9(4):675-684.',
        url: '',
      },
      {
        title: 'Chai X, Hu XP, Wang XY, Wang HT, Pang JP, Zhou WF, Liao JN, Shan LH, Xu XH, Xia HG*, Hou TJ*, Li D*. Computationally Guided Discovery of Novel Non-steroidal AR-GR Dual Antagonists Demonstrating Potency Against Antiandrogen Resistance. Acta Pharmacol Sin. 2023 July, 44(7):1500-1518.',
        url: '',
      },
      {
        title: 'Weng GQ, Cai XY, Cao DS, Du HY, Shen C, Deng YF, He QJ, Yang B, Li D*, Hou TJ*. PROTAC-DB 2.0: an Updated Database of PROTACs. Nucleic Acids Res. 2023 Jan, 51(D1): D1367-D1372.',
        url: '',
      },
      {
        title: 'Li D†, Bao XD†, Pang JP†, Hu XP†, Wang LL†, Wang JJ, Yang ZX, Xu L, Wang SY, Weng QJ*, Cui SL*, Hou TJ*. Discovery and Optimization of N-acyl-6-sulfonamide-tetrahydroquinoline Derivatives as Novel Non-steroidal Selective Glucocorticoid Receptor Modulators. J Med Chem. 2022 Nov, 65:15710-15724.',
        url: '',
      },
      {
        title: 'Chen CW, Chai X, Hu XP, Lou SY, Li D*, Hou TJ*, Cui SL*. Discovery of 2-(1-(3-Chloro-4-cyanophenyl)-1H-pyrazol-3-yl) acetamides as Potent, Selective, and Orally Available Antagonists Targeting the Androgen Receptor. J Med Chem. 2022 Oct, 65:13074-13093.',
        url: '',
      },
      {
        title: 'Lei YX, Fei PY, Song B, Shi WJ, Luo C, Luo DH, Li D*, Chen W*, Zheng J*. A Loosened Gating Mechanism of RIG-I Leads to Autoimmune Disorders. Nucleic Acids Res. 2022 Jun, 50:5850-5863.',
        url: '',
      },
      {
        title: 'Hu XP, Yang L, Chai X, Lei YX, Alam MS, Liu L, Shen C, Jiang DJ, Wang Z, Liu ZY, Xu L, Wan KL, Zhang TY, Yin YL, Li D*, Cao DS*, Hou TJ*. Discovery of Novel DprE1 Inhibitors via Computational Bioactivity Fingerprints and Structure-based Virtual Screening. Acta Pharmacol Sin. 2022 Jun, 43:1605-1615.',
        url: '',
      },
      {
        title: 'Hu XP, Pang JP, Chen CW, Jiang DJ, Shen C, Chai X, Yang L, Zhang XJ, Xu L, Cui SL, Hou TJ, Li D*. Discovery of Novel Non-steroidal Selective Glucocorticoid Receptor Modulators by Structure- and IGN-based Virtual Screening, Structural Optimization, and Biological Evaluation. Eur J Med Chem. 2022 Apr, 237:114382.',
        url: '',
      },
      {
        title: 'Chai X, Sun HY, Zhou WF, Chen CW, Shan LH, Yang YH, He JZ, Pang JP, Yang L, Wang XY, Cui SL, Fu YQ, Xu XH, Xu L, Yao XJ, Li D*, Hou TJ*. Discovery of N-(4-(benzyloxy)-phenyl)-sulfonamide Derivatives as Novel Antagonists of Human Androgen Receptor Targeting the Activation Function 2. J Med Chem. 2022 Feb, 65:2507-2521.',
        url: '',
      },
      {
        title: 'Pang JP, Hu XP, Wang YX, Liao JN, Chai X, Wang XW, Shen C, Wang JJ, Zhang LL, Wang XY, Zhu F, Weng QJ, Xu L, Hou TJ, Li D*. Discovery of a Novel Nonsteroidal Selective Glucocorticoid Receptor Modulator by Virtual Screening and Bioassays. Acta Pharmacol Sin. 2022 Sep, 43:2429-2438.',
        url: '',
      },
      {
        title: 'Hu XP, Pang JP, Zhang JT, Shen C, Chai X, Wang EC, Chen HY, Wang XW, Duan MJ, Fu WT, Xu L, Kang Y, Li D*, Xia HG*, Hou TJ*. Discovery of Novel GR Ligands toward Druggable GR Antagonist Conformations Identified by MD Simulations and Markov State Model Analysis. Adv Sci. 2022 Jan, 9:2102435.',
        url: '',
      },
      {
        title: 'Yang L, Hu XP, Chai X, Ye Q, Pang JP, Li D*, Hou TJ*. Opportunities for Overcoming Tuberculosis: Emerging Targets and Their Inhibitors. Drug Discov Today. 2022 Jan, 27: 326-336.',
        url: '',
      },
      {
        title: 'Fu WT, Zhang MK, Liao JN, Tang Q, Lei YX, Gong Z, Shan LH, Duan MJ, Chai X, Pang JP, Tang C, Wang XW, Xu XH, Li D*, Sheng R*, Hou TJ*. Discovery of a Novel Androgen Receptor Antagonist Manifesting Evidence to Disrupt the Dimerization of the Ligand-Binding Domain via Attenuating the Hydrogen-Bonding Network Between the Two Monomers. J Med Chem. 2021 Dec, 64: 17221-38.',
        url: '',
      },
      {
        title: 'Ye Q, Chai X, Jiang DJ, Yang L, Shen C, Zhang XJ, Li D*, Cao DS*, Hou TJ*. Identification of Active Molecules against Mycobacterium Tuberculosis through Machine Learning. Brief Bioinform. 2021 Sep, 22: 1-15.',
        url: '',
      },
      {
        title: 'Pang JP, Shen C, Zhou WF, Wang YX, Shan LH, Chai X, Shao Y, Hu XP, Zhu F, Zhu DY, Xiao L, Xu L, Xu XH, Li D*, Hou TJ*. Discovery of Novel Antagonists Targeting the DNA Binding Domain of Androgen Receptor by Integrated Docking-Based Virtual Screening and Bioassays. Acta Pharmacol Sin. 2022 Jan, 43: 229-239.',
        url: '',
      },
      {
        title: 'Weng GQ, Shen C, Cao DS, Gao J, Dong X, He QJ, Yang B, Li D*, Wu J*, Hou TJ*. PROTAC-DB: an Online Database of PROTACs. Nucleic Acids Res. 2021 Jan, 49: D1381-D1387.',
        url: '',
      },
      {
        title: 'Tang Q, Fu WT, Zhang MK, Wang EC, Shan LH, Chai X, Pang JP, Wang XW, Xu XH, Xu L, Li D*, Sheng R*, Hou TJ*. Novel Androgen Receptor Antagonist Identified by Structure-based Virtual Screening, Structural Optimization, and Biological Evaluation. Eur J Med Chem. 2020 Apr, 192: 112156.',
        url: '',
      },
      {
        title: 'Hu XP, Chai X, Wang XW, Duan MJ, Pang JP, Fu WT, Li D*, Hou TJ*. Advances in the Computational Development of Androgen Receptor Antagonists. Drug Discov Today. 2020 Aug, 25: 1453-61.',
        url: '',
      },
    ],
  },
  {
    name_cn: '谢昌谕',
    name_en: 'Changyu Xie',
    title_cn: '教授、博士生导师',
    title_en: 'Professor, PhD Supervisor',
    location_cn: '浙江大学纳米技术研究院222室',
    location_en: '222, Nanosystems Institute, Zhejiang University',
    email: 'kimhsieh@zju.edu.cn', 
    phone: '',
    image: importImage('people_kim.jpg'),
    education: [
      {
        description_cn: '2007年至2011年：加拿大多伦多大学，工程物理学士',
        description_en: '2007-2011: University of Toronto, Bachelor of Engineering Physics',
      },
      {
        description_cn: '2011年至2015年：加拿大渥太华大学，物理博士',
        description_en: '2011-2015: University of Ottawa, PhD in Physics',
      },
      {
        description_cn: '2015年至2018年：多伦多大学与麻省理工学院，理论化学博士后',
        description_en: '2015-2018: University of Toronto and MIT, Postdoctoral Research in Theoretical Chemistry',
      },
      {
        description_cn: '2018年至2022年：腾讯量子实验室，量子计算和AI for Science研究',
        description_en: '2018-2022: Tencent Quantum Lab, Research in Quantum Computing and AI for Science',
      },
      {
        description_cn: '2022年至今：浙江大学药学院，教授',
        description_en: '2022-present: School of Pharmacy, Zhejiang University, Professor',
      },
    ],
    research_direction: [
      {
        description_cn: '主要研究方向包括：(1) AI辅助药物设计 (2) AI for Science (3) 量子计算',
        description_en: 'Main research interests include: (1) AI-assisted Drug Design (2) AI for Science (3) Quantum Computing',
      },
    ],
    awards: [
      {
        description_cn: '第24届中国专利奖-银奖',
        description_en: '24th China Patent Award - Silver Award',
      },
    ],
    papers: [
      {
        title: 'Zhenxing Wu, Jike Wang, Hongyan Du, Dejun Jiang, Yu Kang, Dan Li, Peichen Pan, Yafeng Deng, Dongsheng Cao, Chang-Yu Hsieh, Tingjun Hou, Chemistry-intuitive explanation of graph neural networks for molecular property prediction with substructure masking, Nature Communications, 2023, 14, 2585.',
        url: '',
      },
      {
        title: 'Shuo Liu, Shi-Xin Zhang, Chang-Yu Hsieh, Shengyu Zhang, Hong Yao; Discrete time crystal enabled by Stark many-body localization; Physical Review Letter, 2023, 130, 120403.',
        url: '',
      },
      {
        title: 'Yuquan Li, Chang-Yu Hsieh, Ruiqiang Lu, Xiaoqing Gong, Xiaorui Wang, Pengyong li, Shuo Liu, Yanan Tian, Dejun Jiang, Jiaxian Yan, Qifeng Bai, Huanxiang Liu, Shengyu Zhang, Xiaojun Yang,  An adaptive graph learning method for automated molecular interactions and properties predictions, Nature Machine Intelligence, 2022, 4, 645.',
        url: '',
      },
      {
        title: 'Yue Wan, Benben Liao, Chang-Yu Hsieh, Shengyu Zhang, Retroformer: Pushing the Limits of Interpretable End-to-end Retrosynthesis Transformer, ICML, 2022 , Accepted. (CCF-A top conference)',
        url: '',
      },
      {
        title: 'Yu-Qin Chen, Yu Chen, Chee-Kong Lee, Shengyu Zhang, Chang-Yu Hsieh, Optimizing quantum annealing schedules with Monte Carlo tree search enhanced with neural networks, Nature Machine Intelligence, 2022, 4, 269.',
        url: '',
      },
      {
        title: 'Shi-Xin Zhang, Zhou-Quan Wan, Chee-Kong Lee, Chang-Yu Hsieh, Shengyu Zhang, Hong Yao, Variational quantum-neural hybrid eigensolver, Physical Review Letters, 2022, 128, 120502.',
        url: '',
      },
      {
        title: 'Ziyi Yang, Zhaofeng Ye, Yijia Xiao, Chang-Yu Hsieh, Shengyu Zhang, SPLDExtraTrees: robust machine learning approach for predicting kinase inhibitor resistance, Briefings in Bioinformatics, 2022, bbac050.',
        url: '',
      },
      {
        title: 'Zhenxing Wu, Dejun Jiang, Jike Wang, Xujun Zhang, Hongyan Du, Lurong Pan, Chang-Yu Hsieh, Dongsheng Cao, Tingjun Hou, Knowledge-based BERT: a method to extract molecular features like computational chemists, Briefings in Bioinformatics, 2022, bbac131.',
        url: '',
      },
      {
        title: 'Qing Ye, Chang-Yu Hsieh, Ziyi Yang, Yu Kang, Jiming Chen, Dongsheng Cao, Shibo He, Tingjun Hou, A unified drug-target interaction prediction framework based on knowledge graph and recommendation system, Nature Communications, 2021, 12, 6775.',
        url: '',
      },
      {
        title: 'Jike Wang, Chang-Yu Hsieh, Mingyang Wang, Xiaorui Wang, Zhenxing Wu, Dejun Jiang, Benben Liao, Xujun Zhang, Bo Yang, Qiaojun He, Dongsheng Cao, Xi Chen, Tingjun Hou, Multi-constraint molecular generation based on conditional transformer, knowledge distillation and reinforcement learning, Nature Machine Intelligence, 2021, 3, 914.',
        url: '',
      },
      {
        title: 'Dejun Jiang, Chang-Yu Hsieh, Zhenxing Wu, Yu Kang, Jike Wang, Ercheng Wang, Ben Liao, Chao Shen, Lei Xu, Jian Wu, Dongsheng Cao, Tingjun Hou, InteractionGraphNet: a novel and efficient deep graph representation learning framework for accurate protein-ligand interaction predictions, Journal of Medicinal Chemistry, 2021, 64, 18209.',
        url: '',
      },
      {
        title: 'Chang-Yu Hsieh, Qiming Sun, Shengyu Zhang, Chee Kong Lee, Unitary-coupled restricted Boltzmann machine ansatz for quantum simulations, NPJ Quantum Information, 2021, 7, 1.',
        url: '',
      },
      {
        title: 'Zhenxing Wu, Dejun Jiang, Jike Wang, Chang-Yu Hsieh, Dongsheng Cao, Tingjun Hou, Mining toxicity information from large amounts of toxicity data, Journal of Medicinal Chemistry, 2021, 64, 6924.',
        url: '',
      },
      {
        title: 'Xiaorui Wang, Yuquan Li, Jiezhong Qiu, Guangyong Chen, Huanxiang Liu, Benben Liao, Chang-Yu Hsieh, Xiaojun Yao, RetroPrime: A Diverse, plausible and Transformer-based method for single-step retrosynthesis predictions, Chemical Engineering Journal, 2021, 420, 129845.',
        url: '',
      },
      {
        title: 'Jonathan Allcock, Chang-Yu Hsieh, A quantum extension of SVM-perf for training nonlinear SVMs in almost linear time, Quantum, 2020, 4, 342.',
        url: '',
      },
    ]
  },
  {
    name_cn: '潘培辰',
    name_en: 'Peichen Pan',
    title_cn: '特聘研究员、博士生导师',
    title_en: 'Assistant Professor, PhD Supervisor',
    location_cn: '浙江大学紫金港校区药学院513室',
    location_en: '513, School of Pharmacy, Zijingang Campus, Zhejiang University',
    email: 'panpeichen@zju.edu.cn',
    phone: '0571-88208412',
    image: importImage('people_peichenpan.jpg'),
    education: [
      {
        description_cn: '2007年至2011年：苏州大学材料与化学化工学部，学士（导师：侯廷军教授）',
        description_en: '2007 - 2011: Soochow University, School of Materials and Chemical Engineering, Bachelor (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2011年至2014年：苏州大学纳米与软物质研究院，硕士（导师：侯廷军教授）',
        description_en: '2011 - 2014: Soochow University, Institute of Nano and Soft Materials, Master (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2014年至2019年：浙江大学药学院，博士（导师：侯廷军教授）',
        description_en: '2014 - 2019: Zhejiang University School of Pharmacy, PhD (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2017年至2019年：哈佛医学院/Dana-Farber癌症研究所，国家公派联合培养博士（导师：Jean Zhao教授）',
        description_en: '2017 - 2019: Harvard Medical School/Dana-Farber Cancer Institute, Joint PhD Training (Supervisor: Prof. Jean Zhao)',
      },
      {
        description_cn: '2019年至2021年：哈佛医学院/Dana-Farber癌症研究所，博士后（合作导师：Jean Zhao教授）',
        description_en: '2019 - 2021: Harvard Medical School/Dana-Farber Cancer Institute, Postdoctoral Fellow (Collaborating Supervisor: Prof. Jean Zhao)',
      },
      {
        description_cn: '2021年9月至今：浙江大学药学院，特聘研究员、博士生导师',
        description_en: '2021 - present: Zhejiang University School of Pharmacy, Assistant Professor, PhD Supervisor',
      },
    ],
    research_direction: [
      {
        description_cn: '长期围绕分子模拟技术在药物设计中的应用，开发并利用基于生物物理学/化学理论的计算机辅助药物设计方法，针对重要的药物靶点进行先导化合物的发现与优化。并与药物化学、药理学以及动物科学等多个学科进行交叉融合，从靶点的验证、到小分子抑制剂的设计与筛选、到先导化合物的体内外活性评价，进行了一系列创新性的研究和探索，发现了多种具有全新结构的抗肿瘤和抗炎症先导化合物。',
        description_en: 'Long-term focus on the application of molecular simulation technology in drug design, developing and utilizing computer-aided drug design methods based on biophysical/chemical theories for the discovery and optimization of lead compounds for important drug targets. Interdisciplinary research with medicinal chemistry, pharmacology, and animal science, from target validation to small molecule inhibitor design and screening, to in vitro and in vivo activity evaluation of lead compounds, conducting a series of innovative research and exploration, discovering multiple novel anti-tumor and anti-inflammatory lead compounds with new structures.',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Xujun Zhang, Odin Zhang, Chao Shen, Wanglin Qu, Shicheng Chen, Hanqun Cao, Yu Kang, Zhe Wang, Ercheng Wang, Jintu Zhang, Yafeng Deng, Furui Liu, Tianyue Wang, Hongyan Du, Langcheng Wang, Peichen Pan*, Guangyong Chen*, Chang-Yu Hsieh*, Tingjun Hou*, Efficient and accurate large library ligand docking with KarmaDock, Nature Computational Science, 2023, 3, 789-804.',
        url: '',
      },
      {
        title: 'Xujun Zhang, Chao Shen, Tianyue Wang, Yafeng Deng, Yu Kang, Dan Li, Tingjun Hou*, Peichen Pan*, ML-PLIC: a web platform for characterizing protein–ligand interactions and developing machine learning-based scoring functions, Briefings in Bioinformatics, 2023, 24, bbad295.',
        url: '',
      },
      {
        title: 'Chao Shen, Xujun Zhang, Chang-Yu Hsieh, Yafeng Deng, Dong Wang, Lei Xu, Jian Wu, Dan Li, Yu Kang, Tingjun Hou*, Peichen Pan*, A generalized protein-ligand scoring framework with balanced scoring, docking, ranking and screening powers, Chemical Science, 2023, 14, 8129-8146.',
        url: '',
      },
      {
        title: 'Gaoang Wang, Lei Xu, Haiyi Chen, Yifei Liu, Peichen Pan*, Tingjun Hou*, Recent advances in computational studies on voltage-gated sodium channels: drug design and mechanism studies, WIRES Computational Molecular Science, 2023, 13, e1641.',
        url: '',
      },
      {
        title: 'Chao Shen, Xujun Zhang, Yafeng Deng, Junbo Gao, Dong Wang, Lei Xu, Peichen Pan*, Tingjun Hou*, Yu Kang*, Boosting Protein-Ligand Binding Pose Prediction and Virtual Screening Based on Residue-Atom Distance Likelihood Potential and Graph Transformer, Journal of Medicinal Chemistry, 2022, 65, 10691-10706.',
        url: '',
      },
      {
        title: 'Hongyan Du, Dejun Jiang, Junbo Gao, Xujun Zhang, Lingxiao Jiang, Yundian Zeng, Zhenxing Wu, Chao Shen, Lei Xu, Dongsheng Cao*, Tingjun Hou*, Peichen Pan*, Proteome-Wide Profiling of the Covalent-Druggable Cysteines with a Structure-Based Deep Graph Learning Network, Research, 2022, 9873564.',
        url: '',
      },
      {
        title: 'Rui Shi#, Peichen Pan#(Co-first authors), Rui Lv, Chongqing Ma, Enhui Wu, Ruochen Guo, Zhihao Zhao, Hexing Song, Joe Zhou, Yang Liu, Guoqiang Xu, Tingjun Hou*, Zhenhui Kang*, Jian Liu*, High-throughput glycolytic inhibitor discovery targeting glioblastoma by graphite dots-assisted LDI mass spectrometry, Science Advances, 2022, 8, eabl4923.',
        url: '',
      },
      {
        title: 'Kong, Xiaotian#, Peichen Pan#(Co-first authors), Huiyong Sun, Hongguang Xia, Xuwen Wang, Youyong Li, and Tingjun Hou*, Drug Discovery Targeting Anaplastic Lymphoma Kinase (ALK). Journal of Medicinal Chemistry, 2019, 62 (24), 10927-10954.',
        url: '',
      },
      {
        title: 'Chen, Changwei#, Peichen Pan#(Co-first authors), Ziyang Deng, Dahai Wang, Qifan Wu, Lei Xu, Tingjun Hou*, Sunliang Cui*. Discovery of 3,6-diaryl-1H-pyrazolo[3,4-b]pyridines as potent anaplastic lymphoma kinase (ALK) inhibitors. Bioorganic & Medicinal Chemistry Letters, 2019, 29 (7), 912-916.',
        url: '',
      },
      {
        title: 'Peichen Pan, Jiean Chen, Xijian Li, Miyang Li, Huidong Yu, Jean J Zhao, Jing Ni, Xuwen Wang, Huiyong Sun, Sheng Tian, Feng Zhu, Feng Liu, Yong Huang*, Tingjun Hou*. Structure-based Drug Design and Identification of H2O-soluble and Low Toxic Hexacyclic Camptothecin Derivatives with Improved Efficacy in both Cancer and Lethal Inflammation Models In Vivo. Journal of Medicinal Chemistry, 2018, 61 (19), 8613–8624.',
        url: '',
      },
      {
        title: 'Peichen Pan, Huidong Yu, Qinglan Liu, Xiaotian Kong, Hu Chen, Jiean Chen, Qi Liu, Dan Li, Yu Kang, Huiyong Sun, Wenfang Zhou, Sheng Tian, Sunliang Cui, Feng Zhu, Youyong Li, Yong Huang*, Tingjun Hou*. Combating drug-resistant mutants of ALK with potent and selective Type-I1/2 inhibitors by stabilizing unique DFG-shifted loop conformation. ACS Central Science, 2017, 3, 1208-1220.',
        url: '',
      },
      {
        title: 'Peichen Pan, Huiyong Sun, Hui Liu, Dan Li, Wenfang Zhou, Xiaotian Kong, Youyong Li, Huidong Yu, Tingjun Hou*. In Silico Exploration for Novel Type-I Inhibitors of Tie-2/TEK: The Performance of Different Selection Strategy in Selecting Virtual Screening Candidates. Scientific Reports, 2016, 6.',
        url: '',
      },
      {
        title: 'Peichen Pan, Sheng Tian, Huiyong Sun, Xiaotian Kong, Wenfang Zhou, Dan Li, Youyong Li, Tingjun Hou*. Identification and Preliminary SAR Analysis of Novel Type-I Inhibitors of TIE-2 via Structure-Based Virtual Screening and Biological Evaluation in in vitro Models. Journal of Chemical Information and Modeling, 2015, 55: 2693-2704.',
        url: '',
      },
      {
        title: 'Peichen Pan, Youyong Li, Huidong Yu, Tingjun Hou*, Molecular principle of topotecan resistance by topoisomerase I mutations through molecular modeling approaches, Journal of Chemical Information and Modeling, 2013, 53, 997-1006.',
        url: '',
      },
      {
        title: 'Peichen Pan, Mingyun Shen, Huidong Yu, Youyong Li, Dan Li, Tingjun Hou*, Advances in the development of Rho-associated protein kinase (ROCK) inhibitors, Drug Discovery Today, 2013, 18, 1323–1333.',
        url: '',
      },
      {
        title: 'Peichen Pan, Lin Li, Youyong Li, Dan Li*, Tingjun Hou*, Insights into susceptibility of antiviral drugs against the E119G mutant of 2009 influenza A (H1N1) neuraminidase by molecular dynamics simulations and free energy calculations, Antiviral Research, 2013, 100, 356–364.',
        url: '',
      },
    ],
  },
  {
    name_cn: '沈 超',
    name_en: 'Chao Shen',
    title_cn: '特聘研究员',
    title_en: 'Assistant Professor',
    location_cn: '浙江大学医学院附属第一医院庆春院区4号楼4-0206室',
    location_en: '4-0206, Building 4, Qichun Campus, Zhejiang University School of Medicine',
    email: 'shenchao513@zju.edu.cn',
    phone: '0571-88208412',
    image: importImage('people_chaoshen.jpg'),
    education: [
      {
        description_cn: '2013年9月至2017年6月：浙江大学药学院，学士（导师：侯廷军教授）',
        description_en: 'Sep 2013 - Jun 2017: Zhejiang University School of Pharmacy, Bachelor (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2017年9月至2022年6月：浙江大学药学院，博士（导师：侯廷军教授）',
        description_en: 'Sep 2017 - Jun 2022: Zhejiang University School of Pharmacy, PhD (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2022年7月至2024年6月：浙江大学智能创新药物研究院，博士后（合作导师：吴健教授/侯廷军教授）',
        description_en: 'Jul 2022 - Jun 2024: Institute of Intelligent Drug Discovery and Innovation, Zhejiang University, Postdoctoral Researcher (Supervisors: Prof. Jian Wu/Prof. Tingjun Hou)',
      },
      {
        description_cn: '2024年7月至今：浙江大学医学院附属第一医院，特聘研究员',
        description_en: 'Jul 2024 - present: The First Affiliated Hospital, Zhejiang University School of Medicine, Assistant Professor',
      },
    ],
    research_direction: [
      {
        description_cn: '蛋白-配体打分、对接及虚拟筛选方法的开发、评测和应用研究',
        description_en: 'Development, evaluation and application of protein-ligand scoring, docking and virtual screening methods',
      },
    ],
    papers: [
      {
        title: 'Chao Shen#, Jianfei Song#, Chang-Yu Hsieh, Dongsheng Cao, Yu Kang, Wenling Ye, Zhenxing Wu, Jike Wang, Odin Zhang, Xujun Zhang, Hao Zeng, Heng Cai, Yu Chen, Linkang Chen, Hao Luo, Xinda Zhao, Tianye Jian, Tong Chen, Dejun Jiang, Mingyang Wang, Qing Ye, Jialu Wu, Hongyan Du, Hui Shi, Yafeng Deng*, Tingjun Hou*, DrugFlow: an AI-driven one-stop platform for innovative drug discovery, Journal of Chemical Information and Modeling, 2024, 64, 5381-5391.',
        url: '',
      },
      {
        title: 'Heng Cai#, Chao Shen#, Tianye Jian, Xujun Zhang, Tong Chen, Xiaoqi Han, Zhuo Yang, Wei Dang, Chang-Yu Hsieh, Yu Kang, Peichen Pan, Xiangyang Ji, Jianfei Song*, Tingjun Hou*, Yafeng Deng*, CarsiDock: a deep learning paradigm for accurate protein-ligand docking and screening based on large-scale pre-training, Chemical Science, 2024, 15, 1449-1471.',
        url: '',
      },
      {
        title: 'Chao Shen, Xujun Zhang, Chang-Yu Hsieh, Yafeng Deng, Dong Wang, Lei Xu, Jian Wu, Dan Li, Yu Kang*, Tingjun Hou*, Peichen Pan*, A generalized protein–ligand scoring framework with balanced scoring, docking, ranking and screening powers, Chemical Science, 2023, 14, 8129-8146.',
        url: '',
      },
      {
        title: 'Chao Shen, Xujun Zhang, Yafeng Deng, Junbo Gao, Dong Wang, Lei Xu, Peichen Pan*, Tingjun Hou*, Boosting Protein-Ligand Binding Pose Prediction and Virtual Screening Based on Residue-Atom Distance Likelihood Potential and Graph Transformer, Journal of Medicinal Chemistry, 2022, 65, 10691-10706.',
        url: '',
      },
      {
        title: 'Guoli Xiong#, Chao Shen#, Ziyi Yang, Dejun Jiang, Shao Liu, Aiping Lu, Tingjun Hou*, Dongsheng Cao*, Featurization strategies for protein-ligand interactions and their applications in scoring function development, WIRES Computational Molecular Science, 2022, 12, e1567.',
        url: '',
      },
      {
        title: 'Jinping Pang#, Chao Shen#, Wenfang Zhou, Yunxia Wang, Luhu Shan, Xin Chai, Ying Shao, Xueping Hu, Feng Zhu, Danyan Zhu, Li Xiao, Lei Xu, Xiaohong Xu, Dan Li*, Tingjun Hou*, Discovery of novel antagonists targeting the DNA binding domain of androgen receptor by integrated docking-based virtual screening and bioassays, Acta Pharmacologica Sinica, 2022, 43, 229-239.',
        url: '',
      },
      {
        title: 'Chao Shen, Xueping Hu, Junbo Gao, Xujun Zhang, Haiyang Zhong, Zhe Wang, Lei Xu, Yu Kang*, Dongsheng Cao*, Tingjun Hou*, The impact of cross-docked poses on performance of machine learning classifier for protein–ligand binding pose prediction, Journal of Cheminformatics, 2021, 13, 81.',
        url: '',
      },
      {
        title: 'Chao Shen, Ye Hu, Zhe Wang, Xujun Zhang, Jinping Pang, Gaoang Wang, Haiyang Zhong, Lei Xu, Dongsheng Cao*, Tingjun Hou*, Beware of the generic machine learning-based scoring functions in structure-based virtual screening, Briefings in Bioinformatics, 2021, 22, bbaa070.',
        url: '',
      },
      {
        title: 'Chao Shen, Ye Hu, Zhe Wang, Xujun Zhang, Haiyang Zhong, Gaoang Wang, Xiaojun Yao, Lei Xu, Dongsheng Cao*, Tingjun Hou*, Can machine learning consistently improve the scoring power of classical scoring functions? Insights into the role of machine learning in scoring functions, Briefings in Bioinformatics, 2021, 22, 497-514.',
        url: '',
      },
      {
        title: 'Chao Shen, Gaoqi Weng, Xujun Zhang, Elaine Lai-Han Leung, Xiaojun Yao, Jinping Pang, Xin Chai, Dan Li, Ercheng Wang, Dongsheng Cao*, Tingjun Hou*, Accuracy or novelty: what can we gain from target-specific machine-learning-based scoring functions in virtual screening?, Briefings in Bioinformatics, 2021, 22, bbaa410.',
        url: '',
      },
    ],
  },
]

export const postdoc = [
  {
    name_cn: '柴 昕',
    name_en: 'Xin Chai',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: 'chaixin0428@foxmail.com',
    research_direction: ['靶向核受体的药物发现'],
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
        title: 'Xin Chai#, Xinyue Wang#, Lvtao Cai#, Haiyi Chen, Siyu Wang, Jianing Liao, Huating Wang, Yuxin Zhou, Lei Xu, Luhu Shan, Xiaohong Xu, Yuhui Yang, Junzhao He, Yaqin Fu, Tingjun Hou*, Rong Sheng*, Dan Li*. Unraveling the Efficacy of AR Antagonists Bearing N-(4-(Benzyloxy)phenyl)piperidine-1-sulfonamide Scaffold in Prostate Cancer Therapy by Targeting LBP Mutations, Journal of Medicinal Chemistry, 2025, 68, 11962-11978.',
        url: '',
      },
      {
        title: 'Xin Chai#, Xueping Hu#, Xinyue Wang, Huating Wang, Jinping Pang, Wenfang Zhou, Jianing Liao, Luhu Shan, Xiaohong Xu, Lei Xu, Hongguang Xia*, Tingjun Hou*, Dan Li*. Computationally guided discovery of novel non-steroidal AR-GR dual antagonists demonstrating potency against antiandrogen resistance, Acta Pharmacologica Sinica, 2023, 44, 1500-1518.',
        url: '',
      },
      {
        title: 'Xin Chai#, Huiyong Sun#, Wenfang Zhou, Changwei Chen, Luhu Shan, Yuhui Yang, Junzhao He, Jinping Pang, Liu Yang, Xinyue Wang, Sunliang Cui, Yaqin Fu, Xiaohong Xu, Lei Xu, Xiaojun Yao*, Dan Li*, Tingjun Hou*. Discovery of N-(4-(Benzyloxy)-Phenyl)-Sulfonamide Derivatives as Novel Antagonists of the Human Androgen Receptor Targeting the Activation Function 2, Journal of Medicinal Chemistry, 2022, 65, 2507-2521.',
        url: '',
      },
      {
        title: 'Changwei Chen#, Xin Chai#, Xueping Hu, Shengying Lou, Dan Li*, Tingjun Hou*, Sunliang Cui*. Discovery of 2-(1-(3-Chloro-4-cyanophenyl)-1H-pyrazol-3-yl)-acetamides as Potent, Selective, and Orally Available Antagonists Targeting the Androgen Receptor, Journal of Medicinal Chemistry, 2022, 65, 13074-13093.',
        url: '',
      },
      {
        title: 'Xueping Hu#, Xin Chai#, Xuwen Wang, Mojie Duan, Jinping Pang, Weitao Fu, Dan Li*, Tingjun Hou*. Advances in the Computational Development of Androgen Receptor Antagonists, Drug Discovery Today, 2020, 25, 1453-1461.',
        url: '',
      },
    ],
  },
  {
    name_cn: '王 颖',
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
    name_cn: '王極可',
    name_en: 'Jike Wang',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: 'jikewang@zju.edu.cn',
    research_direction: ['基于机器学习和人工智能技术的药物设计方法开发和应用'],
    image: importImage('people_jikewang.png'),
    education: [
      {
        description_cn: '2016年9月-2022年12月：武汉大学，计算机学院，博士',
        description_en: 'Sep 2016 - Dec 2022: Wuhan University, School of Computer Science, PhD',
      },
      {
        description_cn: '2023年12月至今：浙江大学，药学院，博士后（合作导师：侯廷军教授）',
        description_en: 'Dec 2023 - present: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Jike Wang, Chang-Yu Hsieh, Mingyang Wang, Xiaorui Wang, Zhenxing Wu, Dejun Jiang, Benben Liao, Xujun Zhang, Bo Yang, Qiaojun He, Dongsheng Cao*, Xi Chen*, Tingjun Hou*, Multi-constraint molecular generation based on conditional transformer, knowledge distillation and reinforcement learning, Nature Machine Intelligence, 2021, 3, 914-922.',
        url: '',
      },
      {
        title: 'Jike Wang, Rui Qin, Mingyang Wang, Meijing Fang, Yangyang Zhang, Yuchen Zhu, Qun Su, Qiaolin Gou, Chao Shen, Odin Zhang, Zhenxing Wu, Dejun Jiang, Xujun Zhang, Huifeng Zhao, Jingxuan Ge, Zhourui Wu, Yu Kang*, Chang-Yu Hsieh*, Tingjun Hou*, Token-Mo1.0: Tokenized drug design with language model, Nature Communications, 2025, 16, 4416.',
        url: '',
      },
      {
        title: 'Jike Wang, Jianwen Feng, Yu Kang, Peichen Pan, Jingxuan Ge, Yan Wang, Mingyang Wang, Zhenxing Wu, Xingcai Zhang, Jiameng Yu, Xujun Zhang, Tianyue Wang, Lirong Wen, Guangning Yan, Yafeng Deng, Hui Shi, Chang-Yu Hsieh*, Zhihui Jiang*, Tingjun Hou*, Discovery of antimicrobial peptides with notable antibacterial potency by an LLM-based foundation model, Science Advances, 2025, 11, eads8932.',
        url: '',
      },
      {
        title: 'Mingyang Wang#, Shuai Li#, Jike Wang#, Odin Zhang, Hongyan Du, Dejun Jiang, Zhenxing Wu, Yafeng Deng, Yu Kang, Peichen Pan, Dan Li, Xiaorui Wang, Tingjun Hou*, Chang-Yu Hsieh*, ClickGen: Directed Exploration of Synthesizable Chemical Space Leading to the Rapid Synthesis of Novel and Active Lead Compounds via Modular Reactions and Reinforcement Learning, Nature Communications, 2024, 15, 10127.',
        url: '',
      },
      {
        title: 'Jike Wang, Hao Luo, Rui Qin, Mingyang Wang, Xiaozhe Wan, Meijing Fang, Odin Zhang, Qiaolin Gou, Qun Su, Chao Shen, Ziyi You, Liwei Liu*, Chang-Yu Hsieh*, Tingjun Hou*, Yu Kang*, 3DSMILES-GPT: 3D Molecular Pocket-based Generation with Token-only Large Language Model, Chemical Science, 2024, 16, 637-648.',
        url: '',
      },
    ],
  },
  {
    name_cn: '王明阳',
    name_en: 'Mingyang Wang',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: '11919015@zju.edu.cn',
    research_direction: ['基于人工智能技术的分子生成以及全新药物设计'],
    image: importImage('people_mingyangwang.png'),
    education: [
      {
        description_cn: '2012年9月-2016年6月：辽宁中医药大学，药学院，学士',
        description_en: 'Sep 2012 - Jun 2016: Liaoning University of Traditional Chinese Medicine, School of Pharmacy, Bachelor',
      },
      {
        description_cn: '2016年9月-2019年6月：中国医科大学，药学院，硕士',
        description_en: 'Sep 2016 - Jun 2019: China Medical University, School of Pharmacy, Master',
      },
      {
        description_cn: '2019年9月-2023年6月：浙江大学，药学院，博士',
        description_en: 'Sep 2019 - Jun 2023: Zhejiang University, School of Pharmacy, PhD',
      },
      {
        description_cn: '2023年7月至今：浙江大学，药学院，博士后（合作导师：侯廷军教授）',
        description_en: 'Jul 2023 - present: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Mingyang Wang, Chang-Yu Hsieh, Jike Wang, Dong Wang, Gaoqi Weng, Chao Shen, Xiaojun Yao, Zhitong Bing, Honglin Li*, Dongsheng Cao*, Tingjun Hou*, RELATION: A Deep Generative Model for Structure-Based De Novo Drug Design, Journal of Medicinal Chemistry, 2022, 65, 9478-9492.',
        url: '',
      },
      {
        title: 'Mingyang Wang, Huiyong Sun, Jike Wang, Jinping Pang, Xin Chai, Lei Xu, Honglin Li*, Dongsheng Cao*, Tingjun Hou*, Comprehensive assessment of deep generative architectures for de novo drug design, Briefings in Bioinformatics, 2022, 23, bbab544.',
        url: '',
      },
      {
        title: 'Mingyang Wang, Zhe Wang, Huiyong Sun, Jike Wang, Chao Shen, Gaoqi Weng, Xin Chai, Honglin Li*, Dongsheng Cao*, Tingjun Hou*, Deep learning approaches for de novo drug design: an overview, Current Opinion in Structural Biology, 2022, 72, 135-144.',
        url: '',
      },
    ],
  },
  {
    name_cn: '陈克鹏',
    name_en: 'Kepeng Chen',
    title_cn: '博士后',
    title_en: 'Postdoctoral Researcher',
    email: 'kepengchen@zju.edu.cn',
    research_direction: ['基于AI的光动力治疗药物设计和有机分子逆合成路线规划'],
    image: importImage('people_kepengchen.png'),
    education: [
      {
        description_cn: '2010年9月-2014年6月：湖北大学，学士',
        description_en: 'Sep 2010 - Jun 2014: Hubei University, Bachelor',
      },
      {
        description_cn: '2014年9月-2020年6月：大连理工大学，博士（导师：赵建章 教授）',
        description_en: 'Sep 2014 - Jun 2020: Dalian University of Technology, PhD (Supervisor: Prof. Jianzhang Zhao)',
      },
      {
        description_cn: '2020年8月-2021年6月：万华化学集团股份有限公司',
        description_en: 'Aug 2020 - Jun 2021: Wanhua Chemical Group Co., Ltd.',
      },
      {
        description_cn: '2021年7月-2023年6月：北京晶泰科技有限公司',
        description_en: 'Jul 2021 - Jun 2023: XtalPi Inc., Beijing',
      },
      {
        description_cn: '2023年10月至今：浙江大学，药学院，博士后 （合作导师：侯廷军 教授）',
        description_en: 'Oct 2023 - present: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Chen K., Zhao J.* Anthryl-Appended Platinum(II) Schiff Base Complexes: Exceptionally Small Stokes Shift, Triplet Excited States Equilibrium, and Application in Triplet–Triplet-Annihilation Upconversion. Inorg. Chem. 2020, 59, 14731−14745.',
        url: '',
      },
      {
        title: 'Chen K., Zhao J.* Intersystem Crossing and Electron Spin Selectivity in Anthracene-Naphthalimide Compact Electron Donor-Acceptor Dyads Showing Different Geometry and Electronic Coupling Magnitudes. Chem. Eur. J. 2021, 27, 7572 –7587.',
        url: '',
      },
      {
        title: 'Chen K., Kang Y.* Effective generation of heavy-atom-free triplet photosensitizers containing multiple intersystem crossing mechanisms based on deep learning. Chem. Sci. 2025, 10.1039/d5sc03192c.',
        url: '',
      },
    ],
  },
  {
    name_cn: '张徐俊',
    name_en: 'Xujun Zhang',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: 'xujunzhang@zju.edu.cn',
    research_direction: ['基于人工智能的分子对接技术的开发'],
    image: importImage('people_xujunzhang.png'),
    education: [
      {
        description_cn: '2015年9月-2019年6月：浙江大学，药学院，学士',
        description_en: 'Sep 2015 - Jun 2019: Zhejiang University, School of Pharmacy, Bachelor',
      },
      {
        description_cn: '2019年9月-2024年6月：浙江大学，药学院，博士（导师：侯廷军教授）',
        description_en: 'Sep 2019 - Jun 2024: Zhejiang University, School of Pharmacy, PhD (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2024年7月至今：浙江大学，药学院，博士后（合作导师：侯廷军教授）',
        description_en: 'Jul 2024 - present: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Xujun Zhang, Chao Shen, Haotian Zhang, Yu Kang, Chang-Yu Hsieh*, Tingjun Hou*, Advancing Ligand Docking through Deep Learning: Challenges and Prospects in Virtual Screening, Accounts of Chemical Research, 2024, 57, 1500-1509.',
        url: '',
      },
      {
        title: 'Xujun Zhang#, Odin Zhang#, Chao Shen, Wanglin Qu, Shicheng Chen, Hanqun Cao, Yu Kang, Zhe Wang, Ercheng Wang, Jintu Zhang, Yafeng Deng, Furui Liu, Tianyue Wang, Hongyan Du, Langcheng Wang, Peichen Pan*, Guangyong Chen*, Chang-Yu Hsieh*, Tingjun Hou*, Efficient and accurate large library ligand docking with KarmaDock, Nature Computational Science, 2023, 3, 789-804.',
        url: '',
      },
      {
        title: 'Xujun Zhang, Chao Shen, Tianyue Wang, Yu Kang, Dan Li, Peichen Pan, Jike Wang, Gaoang Wang, Yafeng Deng, Lei Xu, Dongsheng Cao*, Tingjun Hou*, Zhe Wang*, Topology-Based and Conformation-Based Decoys Database: An Unbiased Online Database for Training and Benchmarking Machine-Learning Scoring Functions, Journal of Medicinal Chemistry, 2023, 66, 9174-9183.',
        url: '',
      },
      {
        title: 'Xujun Zhang, Chao Shen, Ben Liao, Dejun Jiang, Jike Wang, Zhenxing Wu, Hongyan Du, Tianyue Wang, Wenbo Huo, Lei Xu, Dongsheng Cao*, Chang-Yu Hsieh*, Tingjun Hou*, TocoDecoy: A New Approach to Design Unbiased Datasets for Training and Benchmarking Machine-Learning Scoring Functions, Journal of Medicinal Chemistry, 2022, 65, 7918-7932.',
        url: '',
      },
      {
        title: 'Xujun Zhang, Chao Shen, Chang-Yu Hsieh*, Tingjun Hou*, Harnessing deep learning for enhanced ligand docking, Trends in Pharmacological Sciences, 2024, 45, 103-106.',
        url: '',
      },
      {
        title: 'Tianyue Wang#, Xujun Zhang#, Odin Zhang#, Guangyong Chen, Peichen Pan, Ercheng Wang, Jike Wang, Jialu Wu, Donghao Zhou, Langcheng Wang, Ruofan Jin, Shicheng Chen, Chao Shen, Yu Kang*, Chang-Yu Hsieh*, Tingjun Hou*, Highly accurate and efficient deep learning paradigm for full-atom protein loop modeling with KarmaLoop, Research, 2024, 7, 0408.',
        url: '',
      },
    ],
  },
  {
    name_cn: '王晓瑞',
    name_en: 'Xiaorui Wang',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: 'wangxr2018@lzu.edu.cn',
    research_direction: ['基于机器学习的合成规划算法及酶催化相关预测算法研究'],
    image: importImage('people_xiaoruiwang.png'),
    education: [
      {
        description_cn: '2014年9月-2018年6月：兰州大学，化学化工学院，学士',
        description_en: 'Sep 2014 - Jun 2018: Lanzhou University, School of Chemistry and Chemical Engineering, Bachelor',
      },
      {
        description_cn: '2018年9月-2021年6月：兰州大学，化学化工学院，硕士（导师：姚小军教授）',
        description_en: 'Sep 2018 - Jun 2021: Lanzhou University, School of Chemistry and Chemical Engineering, Master (Supervisor: Prof. Xiaojun Yao)',
      },
      {
        description_cn: '2021年9月-2024年8月：澳门科技大学，中医药学院，博士（导师：姚小军、罗培教授；共同导师：侯廷军教授）',
        description_en: 'Sep 2021 - Aug 2024: Macau University of Science and Technology, Faculty of Chinese Medicine, PhD (Supervisors: Prof. Xiaojun Yao, Prof. Pei Luo; Co-supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2024年9月至今：浙江大学，药学院，博士后（合作导师：侯廷军教授）',
        description_en: 'Sep 2024 - present: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Wang, X., Yin, X., Jiang, D., Zhao, H., Wu, Z., Zhang, O., Wang, J., Li, Y., Deng, Y., Liu, H., Luo, P., Han, Y., Hou, T.*, Yao, X.*, Hsieh, C.-Y.* (2024). Multi-modal deep learning enables efficient and accurate annotation of enzymatic active sites. Nature Communications, 15, 7348.',
        url: '',
      },
      {
        title: 'Wang, X, Li Y., Qiu, J., Chen, G., Liu, H., Liao, B.*, Hsieh, C.-Y.*, Yao, X.* (2021). RetroPrime: A diverse, plausible and transformer-based method for single-step retrosynthesis predictions. Chemical Engineering Journal, 420, 129845.',
        url: '',
      },
      {
        title: 'Wang, X., Hsieh, C.-Y.*, Yin, X., Wang, J., Li, Y., Deng, Y., Jiang, D., Wu, Z., Du, H., Chen, H., Li, Y., Liu, H., Wang, Y., Luo, P., Hou, T.*, Yao, X.* (2023). Generic interpretable reaction condition predictions with open reaction condition datasets and unsupervised learning of reaction center. Research, 6, 0231.',
        url: '',
      },
      {
        title: 'Wang, J.#, Wang, X.#, Sun, H., Wang, M., Zeng, Y., Jiang, D., Wu, Z., Liu, Z., Liao, B., Yao, X., Hsieh, C.-Y.*, Cao, D.*, Chen, X.*, Hou, T.* (2022). ChemistGA: A chemical synthesizable accessible molecular generation algorithm for real-world drug discovery. Journal of Medicinal Chemistry, 65(18), 12482-12496.',
        url: '',
      },
      {
        title: 'Yin, X.#, Wang, X.#, Li, Y., Wang, J., Wang, Y., Deng, Y., Jiang, D., Wu, Z., Du, H., Chen, H., Li, Y., Liu, H., Wang, Y., Luo, P., Yao, X.* (2023). CODD-Pred: A web server for efficient target identification and bioactivity prediction of small molecules. Journal of Chemical Information and Modeling, 63(20), 6169-6176.',
        url: '',
      },
    ],
  },
  {
    name_cn: '尹晓丹',
    name_en: 'Xiaodan Yin',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: 'yinxd14@lzu.edu.cn',
    research_direction: ['基于机器学习的药物分子性质及化学反应性质预测'],
    image: importImage('people_xiaodanyin.png'),
    education: [
      {
        description_cn: '2014年9月-2018年6月：兰州大学，药学院，学士',
        description_en: 'Sep 2014 - Jun 2018: Lanzhou University, School of Pharmacy, Bachelor',
      },
      {
        description_cn: '2018年9月-2021年6月：兰州大学，药学院，硕士',
        description_en: 'Sep 2018 - Jun 2021: Lanzhou University, School of Pharmacy, Master',
      },
      {
        description_cn: '2021年9月-2024年8月：澳门科技大学，中医药学院，博士（导师：姚小军、罗培教授；共同导师：侯廷军教授）',
        description_en: 'Sep 2021 - Aug 2024: Macau University of Science and Technology, Faculty of Chinese Medicine, PhD (Supervisors: Prof. Xiaojun Yao, Prof. Pei Luo; Co-supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2024年9月至今：浙江大学，药学院，博士后（合作导师：侯廷军教授）',
        description_en: 'Sep 2024 - present: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Xiaodan Yin#, Chang-Yu Hsieh#*, Xiaorui Wang, Zhenxing Wu, Qing Ye, Honglei Bao, Yafeng Deng, Hongming Chen, Pei Luo, Huanxiang Liu, Tingjun Hou*, Xiaojun Yao*, Enhancing Generic Reaction Yield Prediction through Reaction Condition-Based Contrastive Learning, Research, 2024, 7, 0292.',
        url: '',
      },
      {
        title: 'Xiaodan Yin#, Xiaorui Wang#, Yuquan Li, Jike Wang, Yuwei Wang, Yafeng Deng, Tingjun Hou, Huanxiang Liu, Pei Luo, Xiaojun Yao*, CODD-Pred: A Web Server for Efficient Target Identification and Bioactivity Prediction of Small Molecules, Journal of Chemical Information and Modeling, 2024, 63, 6169-6176.',
        url: '',
      },
      {
        title: 'Xiaodan Yin, Kun-Yuan Ma, Yu-Ling Wang, Yu Sun, Xiao-Fei Shang, Zhong-Min Zhao, Ren-Xuan Wang, Yong-Jia Chen, Jia-Kai Zhu, Ying-Qian Liu*, Design, synthesis, and antifungal evaluation of 8-hydroxyquinoline metal complexes against phytopathogenic fungi, Journal of Agricultural and Food Chemistry, 2020, 68, 11096-11104.',
        url: '',
      },
      {
        title: 'Jing-Wen Peng#, Xiaodan Yin#, Hu Li, Kun-Yuan Ma, Zhi-Jun Zhang, Rui Zhou, Yu-Ling Wang, Guan-Fang Hu, Ying-Qian Liu*, Design, synthesis, and structure–activity relationship of quinazolinone derivatives as potential fungicides, Journal of Agricultural and Food Chemistry, 2021, 69, 4604-4614.',
        url: '',
      },
    ],
  },
  {
    name_cn: '张锦途',
    name_en: 'Jintu Zhang',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: 'zhangjt25@zju.edu.cn',
    research_direction: ['分子动力学模拟'],
    image: importImage('people_jintuzhang.png'),
    education: [],
    awards: [],
    papers: [
      {
        title: 'Zhang, J., Bonati, L., Trizio, E., Zhang, O., Kang, Y., Hou, T., & Parrinello, M. (2024). Descriptor-Free Collective Variables from Geometric Graph Neural Networks. Journal of Chemical Theory and Computation, 20(24), 10787-10797.',
        url: '',
      },
      {
        title: 'Zhang, J., Zhang, O., Bonati, L., & Hou, T. (2024). Combining transition path sampling with data-driven collective variables through a reactivity-biased shooting algorithm. Journal of Chemical Theory and Computation , 20(11), 4523-4532.',
        url: '',
      },
    ],
  },
  {
    name_cn: '赵博伟',
    name_en: 'Bowei Zhao',
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: 'zhaobowei@zju.edu.cn',
    research_direction: ['基于生物医药知识图谱的可解释性药物发现方法研究'],
    image: importImage('people_boweizhao.jpg'),
    education: [
      {
        description_cn: '2025年1月至今：浙江大学药学院，博士后（导师：侯廷军教授）',
        description_en: 'Jan 2025 - present: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2019年9月-2024年6月：中国科学院大学，计算机应用技术，博士（导师：胡伦研究员和尤著宏教授）',
        description_en: 'Sep 2019 - Jun 2024: University of Chinese Academy of Sciences, Computer Application Technology, PhD (Supervisors: Prof. Lun Hu and Prof. Zhuhong You)',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'B.-W. Zhao et al., Regulation-aware graph learning for drug repositioning over heterogeneous biological network, Information Sciences, 2025, 686: 121360.',
        url: '',
      },
      {
        title: 'B.-W. Zhao et al., Motif-aware miRNA-disease association prediction via hierarchical attention network, IEEE Journal of Biomedical and Health Informatics, 2024, 1-14.',
        url: '',
      },
      {
        title: 'B.-W. Zhao et al., iGRLDTI: An Improved Graph Representation Learning Method for Predicting Drug-Target Interactions over Heterogeneous Biological Information Network, Bioinformatics, 2023, 39(8): btad451.',
        url: '',
      },
      {
        title: 'B.-W. Zhao et al., Fusing Higher and Lower-order Biological Information for Drug Repositioning via Graph Representation Learning, IEEE Transactions on Emerging Topics in Computing, 2023, 12：163-176.',
        url: '',
      },
      {
        title: 'B.-W. Zhao et al., HINGRL: predicting drug-disease associations with graph representation learning on heterogeneous information networks, Briefings in Bioinformatics, 2022, 23(1): bbab515.',
        url: '',
      },
      {
        title: 'B.-W. Zhao et al., A geometric deep learning framework for drug repositioning over heterogeneous information networks, Briefings in Bioinformatics, 2022, 23(6): bbac384.',
        url: '',
      },
    ],
  },
  {
    name_cn: '王 洁',
    name_en: 'Jie Wang', 
    title_cn: '博士后/助理研究员',
    title_en: 'Postdoctoral Researcher/Assistant Researcher',
    email: 'jwangliu@163.com',
    research_direction: ['基于大语言模型的药物设计方法研究'],
    image: importImage('people_jiewang.jpg'),
    education: [
      {
        description_cn: '2017年9月-2023年6月：华东理工大学，药学院，博士（导师：李洪林教授）',
        description_en: 'Sep 2017 - Jun 2023: East China University of Science and Technology, School of Pharmacy, PhD (Supervisor: Prof. Honglin Li)',
      },
      {
        description_cn: '2013年9月-2017年6月：安徽中医药大学，药学院，学士',
        description_en: 'Sep 2013 - Jun 2017: Anhui University of Chinese Medicine, School of Pharmacy, Bachelor',
      }
    ],
    papers: [
      {
        title: 'Shiliang Li†, Fang Ye†, Yucheng Zheng†, Jie Wang†, Haoran Peng, Lili Zhu, Lili Chen, Tao Yu, Huan Ge, Jiaqi He, Binghao Zhang, Jiayun Wu, Zhiyi Zhang, Liangliang Jiang, Geng Chen, Ping Zhao, Ke Lan, Zhenjiang Zhao, Xuhong Qian, Ke Xu*, Yang Du*, Honglin Li*. Dual-Locking the SARS-CoV-2 Spike Trimer: An Amphipathic Molecular "Bolt" Stabilizes Conserved Druggable Interfaces for Coronavirus Inhibition. Adv. Sci., 2025. 12 : 2417534',
        url: '',
      },
      {
        title: 'Jie Wang†, Zihao Shen†, Yichen Liao, Zhen Yuan, Shiliang Li, Gaoqi He, Man Lan, Xuhong Qian, Kai Zhang*, Honglin Li*. Multi-Modal chemical information reconstruction from images and texts for exploring the near-drug space. Briefings Bioinf., 2022: bbac461.',
        url: '',
      },
      {
        title: 'Dou Dou†, Jie Wang†, Yunjin Qiao†, Gulinuer Wumaier†, Wenjie Sha†, Wenjie Li, Wenyi Mei, Tingyuan Yang, Chen Zhang, Huan He, Caolin Wang, Linna Chu, Baihui Sun, Rongrong Su, Xiangyu Ma, Mengdie Gong, Lijuan Xie, Yanyan Diao, Lili Zhu, Zhenjiang Zhao, Zhuo Chen*, Yufang Xu*, Shengqing Li*, and Honglin Li*. Discovery and optimization of 4-anilinoquinazoline derivatives that spanning ATP binding site and allosteric site as effective EGFR-C797S inhibitors. Eur. J. Med. Chem., 2022.',
        url: '',
      },
      {
        title: 'Huan He†, Qi Liu†, Lu Chen†, Jie Wang†, Yuan Yuan, Honglin Li, Xuhong Qian, Zhenjiang Zhao*, Zhuo Chen*. Design, synthesis and biological evaluation of Pteridine-7(8H)-one Derivatives as potent and selective CDK4/6 inhibitors. Bioorg. Med. Chem. Lett., 2022. 76: 128991.',
        url: '',
      },
      {
        title: 'Tong Zhao†, Jie Wang†, Yidi Chen, Shan Wang, Jian Lu, Jianlu Lv, Shiliang Li, Jiaying Wang, Minyi Qian*, Honglin Li*, Xu Shen*. Antiallergic drug Mebhydrolin ameliorates glucose homeostasis in type 2 diabetic mice by functioning as a selective FXR antagonist. Metabolism, 2021. 119 : 154771.',
        url: '',
      }
    ],
  }
]

export const graduate = [
  // 2021.09入学的博士研究生
  {
    name_cn: '赵奕淏',
    name_en: 'Yihao Zhao',
    title_cn: '博士研究生（2021.09～2026.06）',
    title_en: 'PhD Student (Sep 2021 ~ Jun 2026)',
    email: '22119062@zju.edu.cn',
    research_direction: ['广义系综方法增强采样中偏置势函数的构造'],
    image: importImage('people_yihaozhao.png'),
    education: [
      {
        description_cn: '共同导师：康玉副教授',
        description_en: 'Co-supervisor: Associate Prof. Yu Kang',
      },
    ],
    awards: [],
    papers: [],
  },
  {
    name_cn: '吴佳璐',
    name_en: 'Jialu Wu',
    title_cn: '博士研究生（2021.09～2026.06）',
    title_en: 'PhD Student (Sep 2021 ~ Jun 2026)',
    email: 'jialuwu@zju.edu.cn',
    research_direction: ['基于人工智能的小分子与化学反应表征学习；单细胞组学'],
    image: importImage('people_jialuwu.png'),
    education: [],
    awards: [],
    papers: [
      {
        title: 'Jialu, W., et al. Machine learning methods for pKa prediction of small molecules: advances and challenges, Drug Discovery Today, 2022.',
        url: '',
      },
      {
        title: 'Jialu, W., et al. ALipSol: An attention-driven mixture-of-experts model for lipophilicity and solubility prediction, Journal of Chemical Information and Modeling, 2022.',
        url: '',
      },
      {
        title: 'Jialu, W., et al. MF-SuP-pKa: Multi-fidelity modeling with subgraph pooling mechanism for pKa prediction, Acta Pharmaceutica Sinica B, 2023.',
        url: '',
      },
      {
        title: 'Jialu, W., et al. "HiCLR: Knowledge-Induced Hierarchical Contrastive Learning with Retrosynthesis Prediction Yields a Reaction Foundation Model." JACS Au, 2025.',
        url: '',
      },
      {
        title: 'Yiheng, Z.#, Jialu, W.# (co-first author), et al. Sample-efficient multi-objective molecular optimization with GFlowNets, NeurIPS, 2023.',
        url: '',
      },
    ],
  },
  {
    name_cn: '吴正健',
    name_en: 'Zhengjian Wu',
    title_cn: '博士研究生（2021.09～2024.06）',
    title_en: 'PhD Student (Sep 2021 ~ Jun 2024)',
    email: 'zhengjianwu@whu.edu.cn',
    research_direction: ['人工智能辅助药物发现，基于人工智能的分子生成技术研究'],
    image: importImage('people_zhengjianwu.png'),
    education: [
      {
        description_cn: '共同导师：孙世磊教授',
        description_en: 'Co-supervisor: Prof. Shilei Sun',
      },
    ],
    awards: [],
    papers: [],
  },
  {
    name_cn: '陈世诚',
    name_en: 'Shicheng Chen',
    title_cn: '博士研究生（2021.09～2026.06）',
    title_en: 'PhD Student (Sep 2021 ~ Jun 2026)',
    email: 'shichengchen@zju.edu.cn',
    research_direction: ['基于人工智能的抑制剂设计与活性评价'],
    image: importImage('people_shichengchen.png'),
    education: [],
    awards: [],
    papers: [
      {
        title: 'Shicheng Chen#, Odin Zhang#, Chenran Jiang#, Huifeng Zhao#, Xujun Zhang#, Mengting Chen, Yun Liu, Qun Su, Zhenxing Wu, Xinyue Wang, Wanglin Qu, Yuanyi Ye, Xin Chai, Ning Wang, Tianyue Wang, Yuan An, Guanlin Wu, Qianqian Yang, Jiean Chen, Wei Xie, Haitao Lin, Dan Li, Chang-Yu Hsieh*, Yong Huang*, Yu Kang*, Tingjun Hou*, Peichen Pan*, Nature Machine Intelligence, 2025: 1-11.',
        url: '',
      },
    ],
  },
  {
    name_cn: '金若凡',
    name_en: 'Ruofan Jin',
    title_cn: '博士研究生（2021.09～2026.06）',
    title_en: 'PhD Student (Sep 2021 ~ Jun 2026)',
    email: 'Jrf51835@163.com',
    research_direction: ['基于人工智能的抗原-抗体相互作用理论预测研究'],
    image: importImage('people_ruofanjin.png'),
    education: [
      {
        description_cn: '共同导师：周如鸿教授',
        description_en: 'Co-supervisor: Prof. Ruhong Zhou',
      },
    ],
    awards: [],
    papers: [],
  },
  {
    name_cn: '钱文佳',
    name_en: 'Wenjia Qian',
    title_cn: '博士研究生（2021.09～2026.06）',
    title_en: 'PhD Student (Sep 2021 ~ Jun 2026)',
    email: 'qianwjia@zju.edu.cn',
    research_direction: ['基于人工智能的酶-小分子相互作用研究'],
    image: importImage('people_wenjiaqian.png'),
    education: [
      {
        description_cn: '共同导师：郑明月研究员',
        description_en: 'Co-supervisor: Researcher Mingyue Zheng',
      },
    ],
    awards: [],
    papers: [],
  },
  {
    name_cn: '王天玥',
    name_en: 'Tianyue Wang',
    title_cn: '博士研究生（2021.09～2026.06）',
    title_en: 'PhD Student (Sep 2021 ~ Jun 2026)',
    email: 'tianyuewang@zju.edu.cn',
    research_direction: ['图神经网络和大模型在蛋白质领域的应用'],
    image: importImage('people_tianyuewang.png'),
    education: [
      {
        description_cn: '个人主页：https://scholar.google.cz/citations?user=3IGOGk8AAAAJ&hl=zh-CN',
        description_en: 'Personal page: https://scholar.google.cz/citations?user=3IGOGk8AAAAJ&hl=zh-CN',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Tianyue Wang#, Xujun Zhang#, Odin Zhang#, Guangyong Chen, Peichen Pan, Ercheng Wang, Jike Wang, Jialu Wu, Donghao Zhou, Langcheng Wang, Ruofan Jin, Shicheng Chen, Chao Shen, Yu Kang*, Chang-Yu Hsieh*, Tingjun Hou*, Highly accurate and efficient deep learning paradigm for full-atom protein loop modeling with KarmaLoop, Research, 2024, 7, 0408.',
        url: '',
      },
      {
        title: 'Tianyue Wang, Langcheng Wang, Xujun Zhang, Chao Shen, Odin Zhang, Jike Wang, Jialu Wu, Ruofan Jin, Donghao Zhou, Shicheng Chen, Liwei Liu, Xiaorui Wang, Chang-Yu Hsieh, Guangyong Chen, Peichen Pan*, Yu Kang*, Tingjun Hou*, Comprehensive Assessment of Protein Loop Modeling Programs on Large-scale Datasets: Prediction Accuracy and Efficiency, Briefings in Bioinformatics, 2024, 25, bbad486.',
        url: '',
      },
      {
        title: 'Odin Zhang#, Tianyue Wang#, Gaoqi Weng, Dejun Jiang, Ning Wang, Xiaorui Wang, Huifeng Zhao, Jialu Wu, Ercheng Wang, Guangyong Chen, Yafeng Deng, Peichen Pan, Yu Kang*, Chang-Yu Hsieh*, Tingjun Hou*, Learning on topological surface and geometric structure for 3D molecular generation, Nature Computational Science, 2023, 3, 849-859.',
        url: '',
      },
    ],
  },
  {
    name_cn: '王心玥',
    name_en: 'Xinyue Wang',
    title_cn: '博士研究生（2021.09～2026.06）',
    title_en: 'PhD Student (Sep 2021 ~ Jun 2026)',
    email: 'xinyuebear@163.com',
    research_direction: ['计算机辅助核受体药物筛选及其在治疗前列腺癌中的应用'],
    image: importImage('people_xinyuewang.png'),
    education: [],
    awards: [],
    papers: [
      {
        title: 'Wang XY, Chai X, Shan LH, Xu XH, Xu L, Hou TJ, Sun HY, Li D. A potent new-scaffold androgen receptor antagonist discovered on the basis of a MIEC-SVM model. Acta Pharmacol Sin. 2024 Sep;45(9):1978-1991.',
        url: '',
      },
      {
        title: 'Chai X, Wang X, Cai L, Chen H, Wang S, Liao J, Wang H, Zhou Y, Xu L, Shan L, Xu X, Yang Y, He J, Fu Y, Hou T, Sheng R, Li D. Unraveling the Efficacy of AR Antagonists Bearing N-(4-(Benzyloxy)phenyl)piperidine-1-sulfonamide Scaffold in Prostate Cancer Therapy by Targeting LBP Mutations. J Med Chem. 2025 Jun 12;68(11):11962-11978.',
        url: '',
      },
    ],
  },
  // 2022.02入学的博士研究生
  {
    name_cn: '曾韵典',
    name_en: 'Yundian Zeng',
    title_cn: '博士研究生（2022.02～2025.12）',
    title_en: 'PhD Student (Feb 2022 ~ Dec 2025)',
    email: '12232003@zju.edu.cn',
    research_direction: ['基于深度学习的多组学数据挖掘和药物设计'],
    image: importImage('people_yundianzeng.png'),
    education: [
      {
        description_cn: '共同导师：贺诗波教授',
        description_en: 'Co-supervisor: Prof. Shibo He',
      },
    ],
    awards: [],
    papers: [],
  },
  // 2022.09入学的博士研究生
  {
    name_cn: '赵慧锋',
    name_en: 'Huifeng Zhao',
    title_cn: '博士研究生（2022.09～2027.06）',
    title_en: 'PhD Student (Sep 2022 ~ Jun 2027)',
    email: '12319054@zju.edu.cn',
    research_direction: ['基于人工智能与物理的方法进行多肽类药物以及环肽类药物的设计和发现'],
    image: importImage('people_huifengzhao.png'),
    education: [
      {
        description_cn: '共同导师：康玉副教授',
        description_en: 'Co-supervisor: Associate Prof. Yu Kang',
      },
    ],
    awards: [],
    papers: [],
  },
  {
    name_cn: '戈婧萱',
    name_en: 'Jingxuan Ge',
    title_cn: '博士研究生（2022.09～2027.06）',
    title_en: 'PhD Student (Sep 2022 ~ Jun 2027)',
    email: 'rexmo0813@163.com',
    research_direction: ['基于人工智能的免疫相关药物设计'],
    image: importImage('people_jingxuange.png'),
    education: [
      {
        description_cn: '个人主页：https://www.researchgate.net/profile/Jingxuan-Ge-4',
        description_en: 'Personal page: https://www.researchgate.net/profile/Jingxuan-Ge-4',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'TRAP: a contrastive learning-enhanced framework for robust TCR–pMHC binding prediction with improved generalizability, Chemical Science, Jingxuan Ge, Jike Wang, Qing Ye, Liqiang Pan, Yu Kang, Chao Shen, Yafeng Deng, Chang-Yu Hsieh, Tingjun Hou',
        url: '',
      },
      {
        title: 'Deep-learning-based prediction framework for protein-peptide interactions with structure generation pipeline, Cell Reports Physical Science, Jingxuan Ge, Dejun Jiang, Huiyong Sun, Yu Kang, Peichen Pan, Yafeng Deng, Chang-Yu Hsieh, Tingjun Hou',
        url: '',
      },
      {
        title: 'PROTAC-DB 3.0: an updated database of PROTACs with extended pharmacokinetic parameters, Nucleic Acids Research, Jingxuan Ge, Shimeng Li, Gaoqi Weng, Huating Wang, Meijing Fang, Huiyong Sun, Yafeng Deng, Chang-Yu Hsieh, Dan Li, Tingjun Hou',
        url: '',
      },
      {
        title: 'Development of PROTACs using computational approaches, Trends in Pharmacological Sciences, Jingxuan Ge, Chang-Yu Hsieh, Meijing Fang, Huiyong Sun, Tingjun Hou',
        url: '',
      },
    ],
  },
  {
    name_cn: '胡仁龄',
    name_en: 'Renling Hu',
    title_cn: '博士研究生（2022.09～2027.06）',
    title_en: 'PhD Student (Sep 2022 ~ Jun 2027)',
    email: '12519007@zju.edu.cn',
    research_direction: ['AI与物理双驱动的结合自由能计算/预测方法'],
    image: importImage('people_renlinghu.png'),
    education: [],
    awards: [],
    papers: [
      {
        title: 'Renling Hu, Jintu Zhang, Yu Kang, Peichen Pan, Yafeng Deng, Chang-Yu Hsieh*, Tingjun Hou*, Comprehensive, Open-Source, and Automated Workflow for Multisite λ-Dynamics in Lead Optimization, Journal of Chemical Theory and Computation, 2024, 20, 11465-11478.',
        url: '',
      },
    ],
  },
  {
    name_cn: '叶元夷',
    name_en: 'Yuanyi Ye',
    title_cn: '博士研究生（2022.09～2028.06）',
    title_en: 'PhD Student (Sep 2022 ~ Jun 2028)',
    email: 'yuanyiye@zju.edu.cn',
    research_direction: [
      '抗前列腺癌及激酶抑制剂小分子的发现',
      '多肽药物发现算法开发'
    ],
    image: importImage('people_yuanyiye.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '王华婷',
    name_en: 'Huating Wang',
    title_cn: '博士研究生（2022.09～2027.06）',
    title_en: 'PhD Student (Sep 2022 ~ Jun 2027)',
    email: '3180101302@zju.edu.cn',
    research_direction: ['抗前列腺癌的小分子药物研究'],
    image: importImage('people_huatingwang.png'),
    education: [],
    awards: [],
    papers: [
      {
        title: 'Huating Wang#, Xuwen Wang#, Haiyang Zhong#, Lvtao Cai, Weitao Fu, Xin Chai, Jianing Liao, Rong Sheng, Luhu Shan, Xiaohong Xu, Lei Xu, Peichen Pan*, Tingjun Hou*, Dan Li*. Discovery of 5-Nitro-N-(3-(trifluoromethyl)phenyl) Pyridin-2-amine as a Novel Pure Androgen Receptor Antagonist against Antiandrogen Resistance. Journal of medicinal chemistry,2024, 67(22), 20514–20530.',
        url: '',
      },
    ],
  },
  {
    name_cn: '黄元盛',
    name_en: 'Yuansheng Huang',
    title_cn: '博士研究生（2022.09～2027.06）',
    title_en: 'PhD Student (Sep 2022 ~ Jun 2027)',
    email: 'yuanshenghuang@zju.edu.cn',
    research_direction: ['基于人工智能技术的酶催化反应表征研究'],
    image: importImage('people_yuanshenghuang.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '孙 博',
    name_en: 'Bo Sun',
    title_cn: '博士研究生（2022.09～2027.06）',
    title_en: 'PhD Student (Sep 2022 ~ Jun 2027)',
    email: 'bo_sun@tju.edu.cn',
    research_direction: ['基于人工智能的大分子药物设计'],
    image: importImage('people_bosun.png'),
    education: [{
      description_cn: '共同导师：天津大学高峰教授',
      description_en: 'Co-supervisor: Prof. Gaofeng Gao, Tianjin University',
    }],
    awards: [],
    papers: [],
  },
  // 2022.09入学的硕士研究生
  {
    name_cn: '周雨欣',
    name_en: 'Yuxin Zhou',
    title_cn: '博士研究生（2022.09～2027.06）',
    title_en: 'PhD Student (Sep 2022 ~ Jun 2027)',
    email: '22219184@zju.edu.cn',
    research_direction: ['靶向糖皮质激素受体的药物筛选与生物活性评价'],
    image: importImage('people_yuxinzhou.png'),
    education: [],
    awards: [],
    papers: [],
  },
  // 2023.09入学的博士研究生
  {
    name_cn: '谷书凯',
    name_en: 'Shukai Gu',
    title_cn: '博士研究生 （2023.09～2026.06）',
    title_en: 'PhD Student (Sep 2023 ~ Jun 2026)',
    email: '3160101168@zju.edu.cn',
    research_direction: ['基于人工智能的虚拟筛选策略研究'],
    image: importImage('people_shukaigu.png'),
    education: [
      {
        description_cn: '共同导师：刘焕香教授',
        description_en: 'Co-supervisor: Prof. Huanxiang Liu',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Gu, S., Shen, C., Zhang, X. et al. Benchmarking AI-powered docking methods from the perspective of virtual screening. Nat Mach Intell 7, 509–520 (2025).',
        url: '',
      },
      {
        title: 'Gu, S., Bao, L., Yang, Y. et al. AMGC is a multiple-task graph neutral network for epigenetic target profiling. Cell Reports Physical Science, Volume 5, Issue 3, 101850',
        url: '',
      },
      {
        title: 'Gu, S., Yang, Y., Zhao, Y. et al. Evaluation of AlphaFold2 Structures for Hit Identification across Multiple Scenarios. J. Chem. Inf. Model. 2024, 64, 9, 3630–3639.',
        url: '',
      },
      {
        title: 'Gu, S., Shen, C., Yu, J. et al. Can molecular dynamics simulations improve predictions of protein-ligand binding affinity with machine learning? Briefings in Bioinformatics, Volume 24, Issue 2, March 2023, bbad008.',
        url: '',
      },
      {
        title: 'Gu, S., Liu, H., Liu, L. et al. Artificial intelligence methods in kinase target profiling: Advances and challenges. Drug Discovery Today. Volume 28, Issue 11, November 2023, 103796',
        url: '',
      },
    ],
  },
  {
    name_cn: '祝 凯',
    name_en: 'Kai Zhu',
    title_cn: '博士研究生（2023.09～2028.06）',
    title_en: 'PhD Student (Sep 2023 ~ Jun 2028)',
    email: '22319143@zju.edu.cn',
    research_direction: ['基于机器学习的增强采样'],
    image: importImage('people_kaizhu.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '方美静',
    name_en: 'Meijing Fang',
    title_cn: '博士研究生（2023.09～2028.06）',
    title_en: 'PhD Student (Sep 2023 ~ Jun 2028)',
    email: 'fangmj2022@163.com',
    research_direction: ['基于大模型的药物设计'],
    image: importImage('people_meijingfang.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '张 辉',
    name_en: 'Hui Zhang',
    title_cn: '博士研究生（2023.09～2028.06）',
    title_en: 'PhD Student (Sep 2023 ~ Jun 2028)',
    email: '12519017@zju.edu.cn',
    research_direction: ['基于人工智能的限制性药物设计方法'],
    image: importImage('people_huizhang.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '秦 睿',
    name_en: 'Rui Qin',
    title_cn: '博士研究生（2023.09～2028.06）',
    title_en: 'PhD Student (Sep 2023 ~ Jun 2028)',
    email: 'ruiqin2001@zju.edu.cn',
    research_direction: ['化学语言模型和深度生成模型在药物设计的应用'],
    image: importImage('people_ruiqin.png'),
    education: [
      {
        description_cn: '个人主页：https://www.researchgate.net/profile/Rui_Qin19',
        description_en: 'Personal page: https://www.researchgate.net/profile/Rui_Qin19',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Jike Wang#, Rui Qin#, Mingyang Wang#, Meijing Fang, Yangyang Zhang, Yuchen Zhu, Qun Su, Qiaolin Gou, Chao Shen, Odin Zhang, Zhenxing Wu, Dejun Jiang, Xujun Zhang, Huifeng Zhao, Jingxuan Ge, Zhourui Wu, Yu Kang*, Chang-Yu Hsieh*, Tingjun Hou*, Token-Mol 1.0: tokenized drug design with large language models, Nature Communications, 2025, 16, 4416.',
        url: '',
      },
    ],
  },
  {
    name_cn: '洪楠棋',
    name_en: 'Nanqi Hong',
    title_cn: '博士研究生（2023.09～2027.06）',
    title_en: 'PhD Student (Sep 2023 ~ Jun 2027)',
    email: '12321070@zju.edu.cn',
    research_direction: ['基于抗体语言模型的抗体设计'],
    image: importImage('people_nanqihong.png'),
    education: [{
      description_cn: '共同导师：宋明黎教授',
      description_en: 'Co-supervisor: Prof. Mingli Song',
    }],
    awards: [],
    papers: [
      {
        title: 'Hong, N., Jiang, D., Wang, Z., Sun, H., Luo, H., Bao, L., Song, M., Kang, Y. and Hou, T. (2024) TransfIGN: A Structure-Based Deep Learning Method for Modeling the Interaction between HLA-A*02:01 and Antigen Peptides. J Chem Inf Model, 64, 5016-5027.',
        url: '',
      },
    ],
  },
  // 2023.09入学的硕士研究生和剩余博士生将继续在下一部分排序
  {
    name_cn: '苏 群',
    name_en: 'Qun Su',
    title_cn: '博士研究生（2023.09～2028.06）',
    title_en: 'PhD Student (Sep 2023 ~ Jun 2028)',
    email: 'qunsu01@gmail.com',
    research_direction: [
      '机器学习原子间势/几何图神经网络开发/分子生成'
    ],
    image: importImage('people_qunsu.png'),
    education: [],
    awards: [],
    papers: [
      {
        title: 'Qun Su, Kai Zhu, Qiaolin Gou, Jintu Zhang, Renling Hu, Yurong Li, Yongze Wang, Hui Zhang, Ziyi You, Linlong Jiang, Yu Kang, Jike Wang, Chang-Yu Hsieh, Tingjun Hou. A Scalable and Quantum-Accurate Foundation Model for Biomolecular Force Field via Linearly Tensorized Quadrangle Attention',
        url: 'https://arxiv.org/abs/2507.00884',
      },
      {
        title: 'Qun Su, Jike Wang, Qiaolin Gou, Renling Hu, … Robust protein–ligand interaction modeling through integrating physical laws and geometric knowledge for absolute binding free energy calculation',
        url: '',
      },
      {
        title: 'Qun Su, Hui Zhang, Qiaolin Gou, Huiyong Sun, Meijing Fang, ... LumiCharge: Spherical Harmonic Convolutional Networks for Atomic Charge Prediction in Drug Discovery',
        url: '',
      },
      {
        title: 'Qiaolin Gou, Qun Su, Jike Wang, Hui Zhang, Huiyong Sun, Xujun Zhang, … ChargeNet: E(3) Equivariant Graph Attention Network for Atomic Charge Prediction',
        url: '',
      }
    ],
  },
  {
    name_cn: '刘毅飞',
    name_en: 'Yifei Liu',
    title_cn: '硕士研究生（2023.09～2026.06）',
    title_en: 'Master Student (Sep 2023 ~ Jun 2026)',
    email: 'yifeiliu@zju.edu.cn',
    research_direction: ['基于机器学习的分子生成'],
    image: importImage('people_yifeiliu.jpg'),
    education: [],
    awards: [],
    papers: [
      {
        title: 'Yifei Liu, Yiheng Zhu, Jike Wang, Renling Hu, Chao Shen, Wanglin Qu, Gaoang Wang, Qun Su, Yuchen Zhu, Yu Kang*, Peichen Pan*, Chang-Yu Hsieh*, Tingjun Hou*, A Multi-Objective Molecular Generation Method Based on Pareto Algorithm and Monte Carlo Tree Search, Advanced Science, 2025, 12, e2410640.',
        url: '',
      },
    ],
  },
  {
    name_cn: '程颖娟',
    name_en: 'Yingjuan Cheng',
    title_cn: '硕士研究生（2023.09～2026.03）',
    title_en: 'Master Student (Sep 2023 ~ Mar 2026)',
    email: '22319108@zju.edu.cn',
    research_direction: ['图深度学习的组学下游应用研究'],
    image: importImage('people_yingjuancheng.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '郑阳阳',
    name_en: 'Yangyang Zheng',
    title_cn: '硕士研究生（2023.09～2026.06）',
    title_en: 'Master Student (Sep 2023 ~ Jun 2026)',
    email: '22319032@zju.edu.cn',
    research_direction: ['新型雄激素受体拮抗剂的发现与生物活性评价'],
    image: importImage('people_yangyangzheng.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '程圣韬',
    name_en: 'Shengtao Cheng',
    title_cn: '硕士研究生（2023.09～2026.03）',
    title_en: 'Master Student (Sep 2023 ~ Mar 2026)',
    email: 'michaelcheng@zju.edu.cn',
    research_direction: ['基于人工智能的抗体药物设计'],
    image: importImage('people_shengtaocheng.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '蒋麟龙',
    name_en: 'Linlong Jiang',
    title_cn: '硕士研究生（2023.09～2026.06）',
    title_en: 'Master Student (Sep 2023 ~ Jun 2026)',
    email: '3190104199@zju.edu.cn',
    research_direction: ['基于人工智能的蛋白质相关研究'],
    image: importImage('people_linlongjiang.png'),
    education: [],
    awards: [],
    papers: [
      {
        title: 'Linlong Jiang, Ke Zhang, Kai Zhu, Hui Zhang, Chao Shen*, Tingjun Hou*, From Traditional Methods to Deep Learning Approaches: Advances in Protein-Protein Docking, Wiley Interdisciplinary Reviews-Computational Molecular Science, 2025, 15, e70016.',
        url: '',
      },
      {
        title: 'Xujun Zhang#, Linlong Jiang#, Gaoqi Weng#, Chao Shen, Odin Zhang, Mingquan Liu, Chen Zhang, Shukai Gu, Jike Wang, Xiaorui Wang, Hongyan Du, Hui Zhang, Ke Zhang, Ercheng Wang*, Tingjun Hou*, HawkDock version 2: an updated web server to predict and analyze the structures of protein-protein complexes, Nucleic acids research, 53(W1), W306–W315.',
        url: '',
      },
    ],
  },
  // 2024.09入学的博士研究生
  {
    name_cn: '金婕妤',
    name_en: 'Jieyu Jin',
    title_cn: '博士研究生（2024.09～2027.06）',
    title_en: 'PhD Student (Sep 2024 ~ Jun 2027)',
    email: '22119149@zju.edu.cn',
    research_direction: ['基于人工智能技术的成药性预测研究'],
    image: importImage('people_jieyujin.png'),
    education: [
      {
        description_cn: '共同导师：姚小军教授',
        description_en: 'Co-supervisor: Prof. Xiaojun Yao',
      },
    ],
    awards: [],
    papers: [],
  },
  {
    name_cn: '苟巧林',
    name_en: 'Qiaolin Gou',
    title_cn: '博士研究生（2024.09～2027.06）',
    title_en: 'PhD Student (Sep 2024 ~ Jun 2027)',
    email: 'qlgxx0917@gmail.com',
    research_direction: ['基于双靶点的分子生成'],
    image: importImage('people_qiaolingou.png'),
    education: [
      {
        description_cn: '共同导师：刘焕香教授',
        description_en: 'Co-supervisor: Prof. Huanxiang Liu',
      }
    ],
    awards: [],
    papers: [
      {
        title: 'Gou, Q.; Liu, J.; Su, H.; Guo, Y.; Chen, J.; Zhao, X.; Pu, X., Exploring an accurate machine learning model to quickly estimate stability of diverse energetic materials. iScience 2024, 27 (4).',
        url: '',
      },
      {
        title: 'Gou, Q.; Su, Q.; Wang, J.; Zhang, H.; Sun, H.; Zhang, X.; Jiang, L.; Fang, M.; Kang, Y.; Liu, H.; Hou, T.; Hsieh, C.-Y., ChargeNet: E(3) Equivariant Graph Attention Network for Atomic Charge Prediction. Journal of Chemical Information and Modeling 2025.',
        url: '',
      },
      {
        title: 'Su, Q.; Wang, J.; Gou, Q.; Hu, R.; Jiang, L.; Zhang, H.; Wang, T.; Liu, Y.; Shen, C.; Kang, Y.; Hsieh, C.-Y.; Hou, T., Robust protein–ligand interaction modeling through integrating physical laws and geometric knowledge for absolute binding free energy calculation. Chemical Science 2025, 16 (12), 5043-5057.',
        url: '',
      },
      {
        title: 'Su, Q.; Zhu, K.; Gou, Q.; Zhang, J.; Hu, R.; Li, Y.; Wang, Y.; Zhang, H.; You, Z.; Jiang, L., A Scalable and Quantum-Accurate Foundation Model for Biomolecular Force Field via Linearly Tensorized Quadrangle Attention. arXiv preprint arXiv:2507.00884 2025.',
        url: '',
      },
    ],
  },
  {
    name_cn: '翟思龙',
    name_en: 'Silong Zhai',
    title_cn: '博士研究生 （2024.09～2027.06）',
    title_en: 'PhD Student (Sep 2024 ~ Jun 2027)',
    email: 'zhaisilong@outlook.com',
    research_direction: ['人工智能辅助多肽药物设计'],
    image: importImage('people_silongzhai.png'),
    education: [],
    awards: [],
    papers: [
      {
        title: 'Zhai, Silong, Tiantao Liu, Shaolong Lin, Dan Li, Huanxiang Liu, Xiaojun Yao, and Tingjun Hou. "Artificial Intelligence in Peptide-Based Drug Design." Drug Discovery Today 30, no. 2 (February 1, 2025): 104300. https://doi.org/10.1016/j.drudis.2025.104300.',
        url: '',
      },
    ],
  },
  {
    name_cn: '唐 琳',
    name_en: 'Lin Tang',
    title_cn: '博士研究生（2024.09～2029.06）',
    title_en: 'PhD Student (Sep 2024 ~ Jun 2029)',
    email: '22419024@zju.edu.cn',
    research_direction: ['基于深度学习预测抗体可开发性'],
    image: importImage('people_lintang.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '余云涛',
    name_en: 'Yuntao Yu',
    title_cn: '硕士研究生（2024.09～2027.06）',
    title_en: 'Master Student (Sep 2024 ~ Jun 2027)',
    email: '22419056@zju.edu.cn',
    research_direction: ['靶向RNA的分子生成'],
    image: importImage('people_yuntaoyu.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '尤子毅',
    name_en: 'Ziyi You',
    title_cn: '硕士研究生（2024.09～2027.06）',
    title_en: 'Master Student (Sep 2024 ~ Jun 2027)',
    email: '22419010@zju.edu.cn',
    research_direction: ['基于人工智能技术的药物设计方法开发和应用'],
    image: importImage('people_ziyiyou.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '张双烨',
    name_en: 'Shuangye Zhang',
    title_cn: '硕士研究生（2024.09～2027.03）',
    title_en: 'Master Student (Sep 2024 ~ Mar 2027)',
    email: 'zsy8017@163.com',
    research_direction: ['靶向糖皮质激素受体的新型调节剂虚拟筛选和活性评价'],
    image: importImage('people_shuangyezhang.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '张 柯',
    name_en: 'Ke Zhang',
    title_cn: '硕士研究生（2024.09～2027.06）',
    title_en: 'Master Student (Sep 2024 ~ Jun 2027)',
    email: 'wsmiptwtind7@gmail.com',
    research_direction: ['蛋白质对接构象生成'],
    image: importImage('people_kezhang.png'),
    education: [
      {
        description_cn: '个人主页：https://wsmitpwtind.github.io/',
        description_en: 'Personal page: https://wsmitpwtind.github.io/',
      },
    ],
    awards: [],
    papers: [],
  },
  {
    name_cn: '杜淦芃',
    name_en: 'Ganpeng Du',
    title_cn: '硕士研究生（2024.09～2027.06）',
    title_en: 'Master Student (Sep 2024 ~ Jun 2027)',
    email: 'duganpeng2756@126.com',
    research_direction: ['计算机辅助设计'],
    image: importImage('people_ganpengdu.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '王艺霖',
    name_en: 'Yilin Wang',
    title_cn: '硕士研究生（2024.09～2027.06）',
    title_en: 'Master Student (Sep 2024 ~ Jun 2027)',
    email: 'wylin5@163.com',
    research_direction: ['基于单细胞大模型的药物属性预测'],
    image: importImage('people_yilinwang.png'),
    education: [
      {
        description_cn: '个人主页：https://allenwang233.github.io/',
        description_en: 'Personal page: https://allenwang233.github.io/',
      },
    ],
    awards: [],
    papers: [],
  },
  {
    name_cn: '王 莉',
    name_en: 'Li Wang',
    title_cn: '硕士研究生（2024.09～2027.03）',
    title_en: 'Master Student (Sep 2024 ~ Mar 2027)',
    email: '22419212@zju.edu.cn',
    research_direction: ['计算机辅助药物设计'],
    image: importImage('people_liwang.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '田维鑫',
    name_en: 'Weixin Tian',
    title_cn: '硕士研究生（2024.09～2027.03）',
    title_en: 'Master Student (Sep 2024 ~ Mar 2027)',
    email: 'tianweixin@zju.edu.cn',
    research_direction: ['荧光蛋白传感器在检测细胞内信号通路中的应用'],
    image: importImage('people_weixintian.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '贾烁颖',
    name_en: 'Shuoying Jia',
    title_cn: '硕士研究生（2024.09～2027.06）',
    title_en: 'Master Student (Sep 2024 ~ Jun 2027)',
    email: '22419009@zju.edu.cn',
    research_direction: ['基于机器学习和人工智能的序列生成和预测'],
    image: importImage('people_shuoyingjia.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '黎雨蓉',
    name_en: 'Yurong Li',
    title_cn: '硕士研究生（2024.09～2027.03）',
    title_en: 'Master Student (Sep 2024 ~ Mar 2027)',
    email: '3499049692@qq.com',
    research_direction: ['计算机辅助药物设计'],
    image: importImage('people_yurongli.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '颜弋凯',
    name_en: 'Yikai Yan',
    title_cn: '硕士研究生（2025.09～2028.06）',
    title_en: 'Master Student (Sep 2025 ~ Jun 2028)',
    email: 'mryanyikai@gmail.com',
    research_direction: ['糖分子-蛋白质分子对接'],
    image: importImage('people_yikaiyan.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '胡如碧',
    name_en: 'Rubi Hu',
    title_cn: '博士研究生（2025.09～2030.06）',
    title_en: 'PhD Student (Sep 2025 ~ Jun 2030)',
    email: 'hurubi@zju.edu.cn',
    research_direction: ['靶向NPM-TYK2融合基因的抑制剂发现和活性评价'],
    image: importImage('people_rubihu.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '王青韩',
    name_en: 'Qinghan Wang', 
    title_cn: '硕士研究生（2025.09～2028.06）',
    title_en: 'Master Student (Sep 2025 ~ Jun 2028)',
    email: '22519009@zju.edu.cn',
    research_direction: ['分子生成/AI蛋白设计'],
    image: importImage('people_qinghanwang.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '金子长',
    name_en: 'Zichang Jin',
    title_cn: '硕士研究生（2025.09～2028.06）',
    title_en: 'Master Student (Sep 2025 ~ Jun 2028)',
    email: 'dragonworrier666@gmail.com',
    research_direction: ['AI辅助药物设计'],
    image: importImage('people_zichangjin.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '钱有桥',
    name_en: 'Youqiao Qian',
    title_cn: '硕士研究生（2025.09～2028.06）',
    title_en: 'Master Student (Sep 2025 ~ Jun 2028)',
    email: '22519024@zju.edu.cn',
    research_direction: ['人工智能辅助降解剂设计'],
    image: importImage('people_youqiaoqian.png'),
    education: [],
    awards: [],
    papers: [],
  },
  
  {
    name_cn: '任群策',
    name_en: 'Qunce Ren',
    title_cn: '硕士研究生（2025.09～2028.06）',
    title_en: 'Master Student (Sep 2025 ~ Jun 2028)',
    email: '2625734928@qq.com',
    research_direction: ['靶向BRD4的新型抗前列腺癌小分子的筛选与活性评价'],
    image: importImage('people_qunceren.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '胡小龙',
    name_en: 'Xiaolong Hu',
    title_cn: '硕士研究生（2025.09～2028.03）',
    title_en: 'Master Student (Sep 2025 ~ Mar 2028)',
    email: '22519187@zju.edu.cn',
    research_direction: ['成药性预测'],
    image: importImage('people_xiaolonghu.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '李 时',
    name_en: 'Shi Li',
    title_cn: '硕士研究生（2025.09～2028.06）',
    title_en: 'Graduate Student (Sep 2025 ~ Jun 2028)',
    email: 'ShiYue314@outlook.com',
    research_direction: ['分子对接'],
    image: importImage('people_shili.png'),
    education: [],
    awards: [],
    papers: [],
  },
]

export const undergraduate = [
  {
    name_cn: '许兢菁',
    name_en: 'Jingjing Xu',
    title_cn: '本科生（2021.09～2026.06）',
    title_en: 'Undergraduate (Sep 2021 ~ Jun 2026)',
    email: 'xujj21@m.fudan.edu.cn',
    research_direction: ['药物重定位的知识图谱'],
    image: importImage('people_jingjingxu.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '杜 刚',
    name_en: 'Gang Du',
    title_cn: '本科生（2022.09～2026.06）',
    title_en: 'Undergraduate (Sep 2022 ~ Jun 2026)',
    email: 'ganged@zju.edu.cn',
    research_direction: ['几何图神经网络、分子对接、蛋白设计'],
    image: importImage('people_gangdu.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '郑竹珈',
    name_en: 'Zhujia Zheng',
    title_cn: '本科生（2022.09～2026.06）',
    title_en: 'Undergraduate (Sep 2022 ~ Jun 2026)',
    email: '2036217354@qq.com',
    research_direction: ['基于抗体语言模型的亲和力预测'],
    image: importImage('people_zhujiazheng.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '李佳朦',
    name_en: 'Jiameng Li',
    title_cn: '本科生（2022.09～2026.06）',
    title_en: 'Undergraduate (Sep 2022 ~ Jun 2026)',
    email: '3220101162@zju.edu.cn',
    research_direction: ['人工智能辅助分子毒性预测'],
    research_direction_en: ['Artificial Intelligence-Assisted Molecular Toxicity Prediction'],
    image: importImage('people_jiamengli.png'),
    education: [],
    awards: [],
    papers: [],
  },
  
  {
    name_cn: '傅科智',
    name_en: 'Kezhi Fu',
    title_cn: '本科生（2022.09～2026.06）',
    title_en: 'Undergraduate (Sep 2022 ~ Jun 2026)',
    email: '3220100337@zju.edu.cn',
    research_direction: ['基于人工智能与组学信息的虚拟细胞模型开发及应用'],
    research_direction_en: ['Development and Application of Virtual Cell Models Based on Artificial Intelligence and Omics Information'],
    image: importImage('people_kezhifu.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '杨赛滨',
    name_en: 'Saibin Yang', 
    title_cn: '本科生（2022.09～2026.06）',
    title_en: 'Undergraduate (Sep 2022 ~ Jun 2026)',
    email: '3220102994@zju.edu.cn',
    research_direction: ['蛋白质柔性结构'],
    research_direction_en: ['Protein Flexibility Structure'],
    image: importImage('people_saibinyang.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '刘存宇',
    name_en: 'Cunyu Liu',
    title_cn: '本科生（2022.09～2026.06）',
    title_en: 'Undergraduate (Sep 2022 ~ Jun 2026)',
    email: 'tylcy020509@163.com',
    research_direction: ['基于语言模型的RNA定向条件设计和二三维结构预测'],
    research_direction_en: ['RNA Directed Design and 2D/3D Structure Prediction Based on Language Models'],
    image: importImage('people_cunyuliu.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '邓紫嫣',
    name_en: 'Ziyan Deng',
    title_cn: '本科生（2022.09～2026.06）',
    title_en: 'Undergraduate (Sep 2022 ~ Jun 2026)',
    email: '3220100107@zju.edu.cn',
    research_direction: ['基于人工智能的mRNA疫苗设计研究'],
    research_direction_en: ['AI-based mRNA Vaccine Design Research'],
    image: importImage('people_ziyandeng.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '陈俞伽',
    name_en: 'Yujia Chen',
    title_cn: '本科生（2022.09～2026.06）',
    title_en: 'Undergraduate (Sep 2022 ~ Jun 2026)',
    email: '3220104217@zju.edu.cn',
    research_direction: ['人工智能辅助蛋白口袋成药性预测'],
    image: importImage('people_yujiachen.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '沈祎杨',
    name_en: 'Yiyang Shen',
    title_cn: '本科生（2022.09～2026.06）',
    title_en: 'Undergraduate (Sep 2022 ~ Jun 2026)',
    email: 'kamijoumikoto12311@gmail.com',
    research_direction: ['基于大模型与生成式模型在药物设计领域的方法开发'],
    image: importImage('people_yiyangshen.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '木晨璋',
    name_en: 'Chenzhang Mu',
    title_cn: '本科生（2023.09～2027.06）',
    title_en: 'Undergraduate (Sep 2023 ~ Jun 2027)',
    email: 'Promistars@163.com',
    research_direction: ['人工智能辅助药物设计'],
    image: importImage('people_chenzhangmu.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '沈 欣',
    name_en: 'Xin Shen',
    title_cn: '本科生（2023.09～2027.06）',
    title_en: 'Undergraduate (Sep 2023 ~ Jun 2027)',
    email: 'shenxin2702@zju.edu.cn',
    research_direction: ['血脑屏障穿透肽的机器学习训练方法'],
    image: importImage('people_xinshen.png'),
    education: [],
    awards: [],
    papers: [],
  },
]

export const alumni = [
  {
    name_cn: '许 磊',
    name_en: 'Lei Xu',
    title_cn: '副教授',
    title_en: 'Associate Professor',
    email: 'leixu@jsut.edu.cn',
    location_cn: '江苏理工学院/生物信息与医药工程研究所，67号楼310室',
    location_en: 'Jiangsu University of Technology/Institute of Bioinformatics and Medical Engineering, Building 67, Room 310',
    phone: '0519-86953220',
    description_url: 'http://swyy.jsut.edu.cn',
    research_direction: [
      '计算机辅助药物分子设计方法学和应用研究。针对相应靶点，通过分子对接、分子动力学模拟和自由能计算等计算机辅助药物设计方法发现潜在的候选活性化合物；对候选化合物进行酶、细胞或细菌活性评价。目前研究体系主要包括：(1). 以MIF为靶点，设计和发现抗炎药物；(2). 针对HIV整合酶二聚体，设计和发现抗艾滋病药物。',
    ],
    research_direction_en: [
      'Research on methodology and applications of computer-aided drug molecular design. Using computational methods such as molecular docking, molecular dynamics simulations, and free energy calculations to discover potential active compounds against specific targets; evaluating candidate compounds through enzyme, cell, or bacterial activity assays. Current research systems mainly include: (1) Design and discovery of anti-inflammatory drugs targeting MIF; (2) Design and discovery of anti-AIDS drugs targeting HIV integrase dimers.'
    ],
    image: importImage('people_leixu.png'),
    education: [
      {
        description_cn: '2002年9月至2006年6月：吉林农业大学，中药材学院中药学系，学士',
        description_en: 'September 2002 to June 2006: Jilin Agricultural University, School of Chinese Medicinal Materials, Department of Chinese Pharmacy, Bachelor'
      },
      {
        description_cn: '2007年9月至2010年6月：东北师范大学，化学学院有机化学系，硕士',
        description_en: 'September 2007 to June 2010: Northeast Normal University, School of Chemistry, Department of Organic Chemistry, Master'
      },
      {
        description_cn: '2010年9月至2013年12月：苏州大学，功能纳米与软物质研究院药物化学系，博士',
        description_en: 'September 2010 to December 2013: Soochow University, Institute of Functional Nano & Soft Materials, Department of Medicinal Chemistry, PhD'
      },
      {
        description_cn: '2014年1月至2015年12月：浙江大学，药学院药物化学系，博士后',
        description_en: 'January 2014 to December 2015: Zhejiang University, College of Pharmaceutical Sciences, Department of Medicinal Chemistry, Postdoctoral Fellow'
      },
      {
        description_cn: '2016年1月至今：江苏理工学院，生物信息与医药工程研究所，副研究员',
        description_en: 'January 2016 to present: Jiangsu University of Technology, Institute of Bioinformatics and Medical Engineering, Associate Professor'
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Xu L, Li YY, Sun HY, Zhen XC, Qiao CH, Tian S, Hou TJ*, Current developments of macrophage migration inhibitory factor (MIF) inhibitors, Drug Discovery Today, 2013, 18, 592-600.',
        url: '',
      },
      {
        title: 'Xu L, Zhang Y, Zheng LT, Qiao CH, Li YY, Li D, Zhen XC, Hou TJ *, Discovery of novel inhibitors targeting macrophage migration inhibitory factor via structure-based virtual screening and bioassays, Journal of Medicinal Chemistry, 2014, 57, 3737-3745.',
        url: '',
      },
      {
        title: 'Xu L, Li YY, Li D, Xu P, Tian S, Sun HY, Liu H, Hou TJ*, Exploring the Binding Mechanisms of MIF to CXCR2 by Theoretical Approaches, Physical Chemistry Chemical Physics, 2015, 15, 3370-3382.',
        url: '',
      },
      {
        title: 'Xu L, Sun HY, Li YY, Wang JM, Hou TJ*, Assessing the Performance of MM/PBSA and MM/GBSA Methods. 3. The Impact of Force Fields and Ligand Charge Models, Journal of Physical Chemistry B, 2013, 117, 8408-8421.',
        url: '',
      },
      {
        title: 'Xu L, Li YY, Sun HY, Li Dan, Hou TJ*, Structural basis of the interactions between CXCR4 and CXCL12/SDF-1 revealed by theoretical approaches, Molecular Biosystems, 2013, 9, 2107-2117.',
        url: '',
      },
    ],
  },
  {
    name_cn: '冯志炜',
    name_en: 'Zhiwei Feng',
    title_cn: '特聘教授',
    title_en: 'Distinguished Professor',
    email: 'fengzhiwei@suat-sz.edu.cn & fengzhiwei128@gmail.com',
    location_cn: '深圳理工大学，药学院，广东省深圳市光明区公常路1号，518107',
    location_en: 'School of Pharmacy, Shenzhen University of Technology and Science, 1 Gongchang Road, Guangming District, Shenzhen, Guangdong Province, 518107',
    phone: '',
    description_url: 'https://pharm.suat-sz.edu.cn/info/1013/1320.htm',
    research_direction: [
      '专注于人工智能驱动的抗体类药物、小分子药物、疫苗设计等交叉领域的研究，致力于推动AI技术在新药研发中的系统化落地，拥有超过15年的计算机辅助药物设计（CADD）经验，8年AI驱动抗体与疫苗设计实践，以及5年以上AI大数据建模与算法研发背景。'
    ],
    research_direction_en: [
      'Focused on interdisciplinary research in AI-driven antibody drugs, small molecule drugs, and vaccine design, committed to promoting the systematic implementation of AI technology in new drug development, with over 15 years of experience in computer-aided drug design (CADD), 8 years of practice in AI-driven antibody and vaccine design, and more than 5 years of background in AI big data modeling and algorithm development.'
    ],
    image: importImage('people_zhiweifeng.png'),
    education: [
      {
        description_cn: '2003年9月至2007年6月：华南农业大学，信息学院-计算机科学与技术，学士',
        description_en: 'September 2003 to June 2007: South China Agricultural University, School of Information, Computer Science and Technology, Bachelor'
      },
      {
        description_cn: '2007年9月至2010年6月：华南农业大学，信息学院-计算机应用科学，硕士',
        description_en: 'September 2007 to June 2010: South China Agricultural University, School of Information, Computer Application Science, Master'
      },
      {
        description_cn: '2010年9月至2013年6月：苏州大学，功能纳米与软物质研究院，博士',
        description_en: 'September 2010 to June 2013: Soochow University, Institute of Functional Nano & Soft Materials, PhD'
      },
      {
        description_cn: '2013年7月至2015年6月：匹兹堡大学，药学院，博士后',
        description_en: 'July 2013 to June 2015: University of Pittsburgh, School of Pharmacy, Postdoctoral Fellow'
      },
      {
        description_cn: '2017年7月至2025年4月：匹兹堡大学，药学院，助理教授',
        description_en: 'July 2017 to April 2025: University of Pittsburgh, School of Pharmacy, Assistant Professor'
      },
      {
        description_cn: '2014年5月至今：深圳理工大学，药学院，特聘教授',
        description_en: 'May 2014 to present: Shenzhen University of Technology and Science, School of Pharmacy, Distinguished Professor'
      }
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Changrui Xing#, Youwen Zhuang#, Ting-Hai Xu#, Zhiwei Feng#(equal-first author), X. Edward Zhou, Maozi Chen, Lei Wang, Xing Meng, Ying Xue, Junmei Wang, Heng Liu, Terence Francis McGuire, Gongpu Zhao, Karsten Melcher, Cheng Zhang*, H. Eric Xu*, Xiang-Qun Xie*, Cryo-EM Structure of Human Cannabinoid Receptor CB2-Gi Signaling Complex, Cell, 2020, 180, 645-654.',
        url: '',
      },
      {
        title: 'Hyunjoo Cha-Molstad#, Ji Eun Yu#, Zhiwei Feng#(equal-first author), Su Hyun Lee#, Jung Gi Kim#, Peng Yang#, Young Dong Yoo, Joonsung Hwang, Terry McGuire , Sang Mi Shim, Hyun Dong Song, Srinivasrao Ganipisetti, Nuozhou Wang , Jun Min Jang, Min Jae Lee, Seung Jun Kim, Kyung Ho Lee, Jin Tae Hong, Aaron Ciechanover, Inhee Mook-Jung, Xiang-Qun Xie*, Yong Tae Kwon*, and Bo Yeon Kim*, The N-end rule pathway mediates autophagic proteolysis, Nature Communications, 2017, 8, 102.',
        url: '',
      },
      {
        title: 'Ze-Yu Sun, Jiayi Yuan, Divya Jaiswal, Jingxuan Ge, Tianjian Liang, Jiahui Wei, Jinghong Cao, Yulong Li, Xiaojie Chu, Yan Chen*, Ying Xue*, Wei Li*, Tingjun Hou*, Zhiwei Feng*, AntiBMPNN: Structure-Guided Graph Neural Networks for Precision Antibody Engineering, Advanced Science, Published online June 27, 2025.',
        url: '',
      },
      {
        title: 'Tianjian Liang, Ze-Yu Sun, Rieko Ishima, Xiang-Qun Xie*, Ying Xue*, Wei Li*, Zhiwei Feng*, ProstaNet: A Novel GVP-GNN Algorithm for Protein Stability Prediction in Single and Multiple Point Mutations, Research, 2025, 8, 0674.',
        url: '',
      },
      {
        title: 'Tianjian Liang, Margaret G. Hines, Ze-Yu Sun, Kerri Jo Penrose, Xiang-Qun Xie*, Wei Li*, Zhiwei Feng*, AI-based IsAb2.0 for Antibody Design, Briefings in Bioinformatics, 2024, 25, bbae445.',
        url: '',
      }
    ],
  },
  {
    name_cn: '田 盛',
    name_en: 'Sheng Tian',
    title_cn: '副教授',
    title_en: 'Associate Professor',
    email: 'shengtian@suda.edu.cn',
    location_cn: '苏州市工业园区仁爱路199号苏州大学独墅湖校区二期云轩楼E02-2307',
    location_en: 'E02-2307, Yunxuan Building, Phase II, Dushu Lake Campus, Soochow University, 199 Ren\'ai Road, Industrial Park, Suzhou',
    phone: '',
    description_url: '',
    research_direction: [
      '计算机辅助药物分子设计的理论和方法的发展及其在药物研发中的应用研究。主要包括：ADME/T和类药性的理论预测研究；新颖高效并行虚拟筛选方法的发展及应用研究；小分子化合物及其相应靶标相互作用模式的研究；针对激酶和GPCR等靶点的药物分子设计和开发。'
    ],
    research_direction_en: [
      'Development of theories and methods for computer-aided drug molecular design and their application in drug research and development. Main areas include: Theoretical prediction studies of ADME/T and drug-likeness; Development and application of novel efficient parallel virtual screening methods; Research on interaction patterns between small molecule compounds and their corresponding targets; Drug molecule design and development targeting kinases, GPCRs, and other targets.'
    ],
    image: importImage('people_shengtian.png'),
    education: [
      {
        description_cn: '2004年9月至2008年6月：合肥学院，化学与材料工程系，学士',
        description_en: 'September 2004 to June 2008: Hefei University, Department of Chemistry and Materials Engineering, Bachelor'
      },
      {
        description_cn: '2007年9月至2008年6月：中科大，火灾科学国家重点实验室，联合培养',
        description_en: 'September 2007 to June 2008: University of Science and Technology of China, State Key Laboratory of Fire Science, Joint Training'
      },
      {
        description_cn: '2008年9月至2011年6月：苏州大学，功能纳米与软物质研究院，硕士',
        description_en: 'September 2008 to June 2011: Soochow University, Institute of Functional Nano & Soft Materials, Master'
      },
      {
        description_cn: '2011年9月至2014年6月：苏州大学，功能纳米与软物质研究院，博士',
        description_en: 'September 2011 to June 2014: Soochow University, Institute of Functional Nano & Soft Materials, PhD'
      },
      {
        description_cn: '2014年6月至2016年8月：苏州大学，药学院，博士后',
        description_en: 'June 2014 to August 2016: Soochow University, College of Pharmaceutical Sciences, Postdoctoral Fellow'
      },
      {
        description_cn: '2016年9月至今：苏州大学，药学院，副教授',
        description_en: 'September 2016 to present: Soochow University, College of Pharmaceutical Sciences, Associate Professor'
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Sheng Tian, Junmei Wang, Youyong Li, Dan Li, Lei Xu, Tingjun Hou*, The application of in silico drug-likeness predictions in pharmaceutical research, Advanced Drug Delivery Reviews, 2015, 23, 2-10.',
        url: '',
      },
      {
        title: 'Sheng Tian, Huiyong Sun, Peichen Pan, Dan Li, Xuechu Zhen*, Youyong Li*, Tingjun Hou*, Assessing an Ensemble Docking-Based Virtual Screening Strategy for Kinase Targets by Considering Protein Flexibility, Journal of Chemical Information and Modeling, 2014, 54(10), 2664-2679.',
        url: '',
      },
      {
        title: 'Sheng Tian, Huiyong Sun, Youyong Li, Dan Li, Tingjun Hou*, Development and evaluation of an integrated virtual screening strategy by combining molecular docking and pharmacophore searching based on multiple protein structures, Journal of Chemical Information and Modeling, 2013, 53(10), 2743-2756.',
        url: '',
      },
      {
        title: 'Sheng Tian, Youyong Li, Dan Li, Xiaojie Xu, Junmei Wang, Qian Zhang, Tingjun Hou*, Modeling compound-target interaction network of Traditional Chinese Medicines for type II diabetes mellitus: insight for polypharmacology and drug design, Journal of Chemical Information and Modeling, 2013, 53(7), 1787–1803.',
        url: '',
      },
      {
        title: 'Sheng Tian, Junmei Wang, Youyong Li, Xiaojie Xu, Tingjun Hou*, Drug-likeness Analysis of Traditional Chinese Medicines: Prediction of Drug-likeness Using Machine Learning Approaches, Molecular Pharmaceutics, 2012, 9(10), 2875-2886.',
        url: '',
      },
    ],
  },
  {
    name_cn: '朱景宇',
    name_en: 'Jingyu Zhu',
    title_cn: '副研究员',
    title_en: 'Associate Researcher',
    email: 'zhjy_777@163.com',
    location_cn: '江南大学生命科学与健康工程学院',
    location_en: 'School of Life Sciences and Health Engineering, Jiangnan University',
    phone: '',
    description_url: '',
    research_direction: [
      '计算机辅助药物分子设计研究：定量构效关系模型（QSAR）、同源建模（Homology Modeling）、虚拟筛选（virtual screening）、药效团模型（pharmacophore modeling）、分子对接（molecular docking）、动力学模拟及自由能计算（MD simulations and free energy calculation）；丙型肝炎蛋白NS3/NS4A抑制剂的定量构效关系（QSAR）研究；动力学模拟以及自由能计算研究PI3K抑制剂对PI3K亚型蛋白的选择性；使用虚拟筛选以及生物学实验的方法发现新型PI3K抑制剂用于治疗多发性骨髓瘤；使用基于多构象的虚拟筛选方法以及生物学实验方法发现新型组蛋白去乙酰化酶（HDAC)、ROCK抑制剂用于治疗恶性肿瘤；使用虚拟筛选以及动力学模拟的方法发现新型的去泛素化蛋白（USP7）抑制剂。',
    ],
    research_direction_en: [
      'Computer-aided drug molecular design research: Quantitative structure-activity relationship (QSAR) models, homology modeling, virtual screening, pharmacophore modeling, molecular docking, molecular dynamics simulations and free energy calculations; QSAR research on hepatitis C virus NS3/NS4A protease inhibitors; Molecular dynamics simulations and free energy calculations to study the selectivity of PI3K inhibitors for PI3K subtype proteins; Discovery of novel PI3K inhibitors for multiple myeloma treatment using virtual screening and biological experiments; Discovery of novel histone deacetylase (HDAC) and ROCK inhibitors for malignant tumor treatment using multi-conformational virtual screening and biological experiments; Discovery of novel deubiquitinating protein (USP7) inhibitors using virtual screening and molecular dynamics simulations.'
    ],
    image: importImage('people_jingyuzhu.png'),
    education: [
      {
        description_cn: '2005.9-2009.6：制药工程学士，淮阴工学院生命科学与化学工程学院',
        description_en: 'September 2005 to June 2009: Bachelor in Pharmaceutical Engineering, School of Life Science and Chemical Engineering, Huaiyin Institute of Technology'
      },
      {
        description_cn: '2009.9-2011.6：计算机辅助药物设计硕士（导师：侯廷军），苏州大学功能纳米与软物质研究院',
        description_en: 'September 2009 to June 2011: Master in Computer-Aided Drug Design (Supervisor: Tingjun Hou), Institute of Functional Nano & Soft Materials, Soochow University'
      },
      {
        description_cn: '2011.7-2014.6：肿瘤药理学博士（导师：毛新良）， 苏州大学唐仲英血液研究中心',
        description_en: 'July 2011 to June 2014: PhD in Cancer Pharmacology (Supervisor: Xinliang Mao), Tang Zhongying Blood Research Center, Soochow University'
      },
      {
        description_cn: '2015.3-2016.9：药物化学博士后（合作导师：侯廷军），浙江大学药学院药物代谢与药物分析研究所',
        description_en: 'March 2015 to September 2016: Postdoctoral Fellow in Medicinal Chemistry (Co-supervisor: Tingjun Hou), Institute of Drug Metabolism and Pharmaceutical Analysis, College of Pharmaceutical Sciences, Zhejiang University'
      },
      {
        description_cn: '2016.9至今：江南大学，药学院，副研究员',
        description_en: 'September 2016 to present: Jiangnan University, College of Pharmaceutical Sciences, Associate Researcher'
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Jingyu Zhu, Tingjun Hou*, Xinliang Mao*. Discovery of selective phosphatidylinositol 3-kinase inhibitors to treat hematological malignancies. Drug Discovery Today. 2015; 20(8): 988-94.',
        url: '',
      },
      {
        title: 'Jingyu Zhu, Chunhua Qiao, Tingjun Hou*, Xinliang Mao*. A novel PI3K inhibitor PIK-C98 displays potent preclinical activity against multiple myeloma. Oncotarget. 2015; (1): 185-95.',
        url: '',
      },
      {
        title: 'Jingyu Zhu, Peichen Pan, Youyong Li, Biyin Cao, Xinliang Mao, Tingjun Hou*. Theoretical studies on beta and delta isoform-specific binding mechanisms of phosphoinositide 3-kinase inhibitors. Molecular Biosystems, 2014; 10(3): 454-66.',
        url: '',
      },
      {
        title: 'Jingyu Zhu, Tingjun Hou*, Xinliang Mao*. Targeting the phosphatidylinositol 3-kinase/AKT pathway for the treatment of multiple myeloma. Current Medicinal Chemistry. 2014; 21(27): 3173-87.',
        url: '',
      },
      {
        title: 'Jingyu Zhu, Youyong Li, Huidong Yu, Liling Zhang, Xinliang Mao, Tingjun Hou*. Insight into the structural requirements of narlaprevir-type inhibitors of NS3/NS4A protease based on hqsar and molecular field analyses. Combinatorial Chemistry & High Throughput Screening, 2012; 15(6): 439-50.',
        url: '',
      },
    ],
  },
  {
    name_cn: '沈明云',
    name_en: 'Mingyun Shen',
    title_cn: '研发主管',
    title_en: 'Research Director',
    email: 'mingyunshen@yahoo.com',
    location_cn: '扬子江药业集团有限公司',
    location_en: 'Yangtze River Pharmaceutical Group',
    phone: '',
    description_url: '',
    research_direction: '计算机辅助药物分子设计的理论和方法研究',
    image: importImage('people_mingyunshen.png'),
    education: [
      {
        description_cn: '2006年9月至2010年6月：苏州大学，药学院，学士',
        description_en: '2006-2010: Soochow University, School of Pharmacy, Bachelor'
      },
      {
        description_cn: '2010年9月至2015年6月：苏州大学，功能纳米如软物质研究院，博士',
        description_en: '2010-2015: Soochow University, Institute of Functional Nano & Soft Materials, PhD'
      },
      {
        description_cn: '2015年7月至今：扬子江药业集团有限公司，新品研发部，研发主管',
        description_en: '2015-present: Yangtze River Pharmaceutical Group, New Product R&D Department, Research Director'
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Mingyun Shen, Peichen Pan, Youyong Li, Dan Li, Huidong Yu*, Tingjun Hou*, Farnesyltransferase (FTase) and geranylgeranyltransferase I (GGTase-I): structures, mechanism, inhibitors and molecular modeling, Drug Discovery Today, 2015, 20, 267-76.',
        url: '',
      },
      {
        title: 'Mingyun Shen, Sheng Tian, Youyong Li, Qian Li, Xiaojie Xu, Junmei Wang, Tingjun Hou*, Drug-likeness analysis of Traditional Chinese Medicines: 1. Property distributions of Drug-like compounds, Non-drug-like compounds and Natural compounds from Traditional Chinese Medicines, Journal of Cheminformatics, 2012, 4, 31.',
        url: '',
      },
      {
        title: 'Mingyun Shen, Huidong Yu, Youyong Li, Pixu Li, Peichen Pan, Shunye Zhou, Liling Zhang, Shang Li, Simon Ming-Yuen Lee*, Tingjun Hou*, Discovery of Rho-kinase inhibitors by docking-based virtual screening, Molecular Biosystems, 2013, 9, 1511-1521.',
        url: '',
      },
      {
        title: 'Mingyun Shen, Shunye Zhou, Youyong Li, Peichen Pan, Liling Zhang, Tingjun Hou*, Discovery and optimization of triazine derivatives as ROCK1 inhibitors: molecular docking, molecular dynamics simulations and free energy calculations, Molecular Biosystems, 2013, 9, 361-374.',
        url: '',
      },
      {
        title: 'Mingyun Shen, Sheng Tian, Peichen Pan, Huiyong Suna, Dan Li, Youyong Li, Hefeng Zhou, Chuwen Li, Simon Ming-Yuen Lee*, Tingjun Hou*, Discovery of Novel ROCK1 Inhibitors via Integrated Virtual Screening Strategy and Bioassays. Scientific Reports, 2015, 5, 602.',
        url: '',
      },
    ],
  },
  {
    name_cn: '陈 浮',
    name_en: 'Fu Chen',
    title_cn: '副教授',
    title_en: 'Associate Professor',
    email: 'chenfu_jeff@yeah.net',
    location_cn: '上海师范大学生命与环境科学学院',
    location_en: 'School of Life and Environmental Sciences, Shanghai Normal University',
    phone: '',
    description_url: 'http://shenghuan.shnu.edu.cn',
    research_direction: '计算机辅助药物分子设计和分子模拟',
    image: importImage('people_fuchen.png'),
    education: [
      {
        description_cn: '2004年9月至2008年7月：昆明理工大学，环境科学系，学士',
        description_en: '2004-2008: Kunming University of Science and Technology, Department of Environmental Science, Bachelor'
      },
      {
        description_cn: '2008年9月至2014年12月：同济大学，环境科学系，博士',
        description_en: '2008-2014: Tongji University, Department of Environmental Science, PhD'
      },
      {
        description_cn: '2015年6月至2017年8月：浙江大学，药学院药物化学系，博士后',
        description_en: '2015-2017: Zhejiang University, School of Pharmacy, Postdoctoral Researcher'
      },
      {
        description_cn: '2017年9月至今：上海师范大学，生命与环境科学学院，副教授',
        description_en: '2017-present: Shanghai Normal University, School of Life and Environmental Sciences, Associate Professor'
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Fu Chen, Huiyong Sun, Hui Liu, Dan Li, Youyong Li, Tingjun Hou*. Prediction of luciferase inhibitors by the high-performance MIEC-GBDT approach based on interaction energetic patterns. 2017, Physical Chemistry Chemical Physics, 19(15), 10163-10176.',
        url: '',
      },
      {
        title: 'Fu Chen, Hui Liu, Huiyong Sun, Peichen Pan, Youyong Li, Dan Li, Tingjun Hou*. Assessing the performance of the MM/PBSA and MM/GBSA methods. 6. Capability to predict protein–protein binding free energies and re-rank binding poses generated by protein–protein docking. 2016, Physical Chemistry Chemical Physics, 18(32), 22129-22139.',
        url: '',
      },
      {
        title: 'Fu Chen, Shu-Shen Liu, Mo Yu, Rui Qu, Meng-Chao Wang. Blocking the entrance of AMP pocket results in hormetic stimulation of imidazolium-based ionic liquids to firefly luciferase. 2015, Chemosphere, 132, 108-113.',
        url: '',
      },
    ],
  },
  {
    name_cn: '刘 晖',
    name_en: 'Hui Liu',
    title_cn: '副研究员',
    title_en: 'Associate Researcher',
    email: 'hl@zju.edu.cn',
    location_cn: '华中农业大学信息学院',
    location_en: 'College of Informatics, Huazhong Agricultural University',
    phone: '',
    description_url: 'http://coi.hzau.edu.cn',
    research_direction: '计算机辅助药物分子设计和分子模拟',
    image: importImage('people_huiliu.png'),
    education: [
      {
        description_cn: '2001年9月至2005年7月：武汉大学，药学院，学士',
        description_en: '2001-2005: Wuhan University, School of Pharmacy, Bachelor'
      },
      {
        description_cn: '2005年9月至2010年12月：武汉大学，生命科学学院，博士',
        description_en: '2005-2010: Wuhan University, College of Life Sciences, PhD'
      },
      {
        description_cn: '2014年5月至2017年12月：浙江大学，药学院，博士后',
        description_en: '2014-2017: Zhejiang University, School of Pharmacy, Postdoctoral Researcher'
      },
      {
        description_cn: '2018年1月至今：华中农业大学，信息学院，副研究员',
        description_en: '2018-present: Huazhong Agricultural University, College of Informatics, Associate Researcher'
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Hui Liu, Fu Chen, Huiyong Sun, Dan Li, Tingjun Hou*, Improving the efficiency of non-equilibrium sampling in the aqueous environment via implicit-solvent simulations, Journal of Chemical Theory and Computation, 2017, 13, 1827-1836.',
        url: '',
      },
      {
        title: 'Hui Liu, Tingjun Hou*, CaFE: a tool for binding affinity prediction using end-point free energy methods, Bioinformatics, 2016, 32, 2216-2218.',
        url: '',
      },
      {
        title: 'Hui Liu, Dan Li, Youyong Li, Tingjun Hou*, Atomistic molecular dynamics simulations of ATP-binding cassette transporters, WIREs Computational Molecular Science, 2016, 6, 255-265.',
        url: '',
      },
    ],
  },
  {
    name_cn: '孙慧涌',
    name_en: 'Huiyong Sun',
    title_cn: '副研究员',
    title_en: 'Associate Researcher',
    email: 'huiyongsun@cpu.edu.cn',
    location_cn: '中国药科大学药学院，江宁新实验楼一期511',
    location_en: 'Room 511, Phase I New Laboratory Building, School of Pharmacy, China Pharmaceutical University',
    phone: '',
    description_url: 'https://www.researchgate.net/profile/Huiyong-Sun-2',
    research_direction: '基于分子模拟与人工智能技术的原创靶点/难靶靶点药物发现；基于分子模拟技术的药物-靶标作用机制分析',
    image: importImage('people_huiyongsun.png'),
    education: [
      {
        description_cn: '2012年9月至2015年6月：苏州大学，功能纳米与软物质研究院，博士',
        description_en: '2012-2015: Soochow University, Institute of Functional Nano & Soft Materials, PhD'
      },
      {
        description_cn: '2015年7月至2018年5月：浙江大学，药学院，博士后',
        description_en: '2015-2018: Zhejiang University, School of Pharmacy, Postdoctoral Researcher'
      },
      {
        description_cn: '2018年6月至今：中国药科大学，药学院，副研究员',
        description_en: '2018-present: China Pharmaceutical University, School of Pharmacy, Associate Researcher'
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Sutong Xiang, Zhe Wang, Qirui Deng, Rongfan Tang, Qinghua Wang, Yang Yu, Tingjun Hou*, Haiping Hao*, Huiyong Sun*, Shared Interaction Pathways of Ligands Targeting the Ligand-Binding Pocket of Nuclear Receptors, Cell Reports Physical Science, 2025, 6, 102352.',
        url: '',
      },
      {
        title: 'Wanfeng Xu, Yun Wang, Shuang Cui, Qiuling Zheng, Yanghao Lin, Qingqing Cui, Yuxin Xie, Yuming Zeng, Chuan Zhang, Yujie Li, Xin Jin , Minna Qin, Huiyong Sun*, Haiping Hao*, Lijuan Cao*, Methylcobalamin Protects Against Liver Failure via Engaging Gasdermin E, Nature Communications, 2025, 16, 1233.',
        url: '',
      },
      {
        title: 'Jingxuan Ge, Chang-Yu Hsieh, Meijing Fang, Huiyong Sun*, Tingjun Hou*, Development of PROTACs Using Computational Approaches, Trends in Pharmacological Sciences, 2024, 45, 1162-1174.',
        url: '',
      },
      {
        title: 'Qinghua Wang, Zhe Wang, Qirui Deng, Sutong Xiang, Rongfan Tang, Yang Yu, Tingjun Hou*, Haiping Hao*, Huiyong Sun*, Discriminating Functional and Non-functional Nuclear-Receptor Ligands with A Conformational Selection-Inspired Machine-Learning Algorithm, Cell Reports Physical Science, 2023, 4, 101466.',
        url: '',
      },
      {
        title: 'Ercheng Wang#, Huiyong Sun#, Junmei Wang, Zhe Wang, Hui Liu, John Z.H. Zhang*, Tingjun Hou*, End-Point Binding Free Energy Calculation with MM/PBSA and MM/GBSA: Strategies and Applications in Drug Design, Chemical Reviews, 2019, 119, 9478-9508.',
        url: '',
      },
    ],
  },
  {
    name_cn: '孔晓天',
    name_en: 'Xiaotian Kong',
    title_cn: '讲师',
    title_en: 'Lecturer',
    email: 'kongxt123@bjut.edu.cn',
    location_cn: '北京工业大学化学与生命科学学院',
    location_en: 'College of Chemistry and Life Science, Beijing University of Technology',
    phone: '',
    description_url: '',
    research_direction: '主要从事基于靶点结构的大规模小分子数据库的虚拟筛选。此外，另外一个主要研究方向是采用多尺度分子模拟（高斯加速动力学模拟、弹性网络模型和自由能微扰计算等）探索蛋白-配体/蛋白质/DNA/RNA相互作用微观机制，以及基于AI和分子模拟蛋白质-配体/蛋白质/DNA/RNA相互作用热点残基预测模型的构建。',
    image: importImage('people_xiaotiankong.png'),
    education: [
      {
        description_cn: '2015年9月至2018年6月：苏州大学，博士研究生（共同导师：李有勇教授）',
        description_en: '2015-2018: Soochow University, PhD Student (Co-supervisor: Prof. Youyong Li)'
      },
      {
        description_cn: '2018年至2021年：俄亥俄州立大学，博士后',
        description_en: '2018-2021: Ohio State University, Postdoctoral Researcher'
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'LC Tao, T Zhou, et al., XT Kong*, CH Li*. ESPDHot: An Effective Machine Learning-Based Approach for Predicting Protein-DNA Interaction Hotspots. J Chem Inf Model, 2024, 64(8): 3548-3557.',
        url: '',
      },
      {
        title: 'YJ Liu#, KR Yu#, XT Kong#, et al., SJ Wu*, JN Zhang*, YB Liu*. FOXA1 O-GlcNAcylation–mediated transcriptional switch governs metastasis capacity in breast cancer. Sci Adv, 2023, 9(33), eadg7112.',
        url: '',
      },
      {
        title: 'XT Kong, EM Xing, et al., XL Cheng*. Mechanistic insight into the allosteric inhibition of AR by BF3 antagonists from an integrated molecular modeling study, J Chem Inf Model, 2021, 61(7):3477-3494.',
        url: '',
      },
      {
        title: 'XT Kong, PC Pan, et al., TJ Hou*. Drug discovery targeting anaplastic lymphoma kinase (ALK), J Med Chem, 2019, 62(24): 10927-10954.',
        url: '',
      },
    ],
  },
  {
    name_cn: '雷太龙',
    name_en: 'Tailong Lei',
    title_cn: '助理研究员',
    title_en: 'Assistant Researcher',
    email: 'leitailong@zju.edu.cn',
    location_cn: '浙江大学医学院附属邵逸夫医院科教楼714室',
    location_en: 'Room 714, Science and Education Building, Sir Run Run Shaw Hospital, Zhejiang University School of Medicine',
    phone: '0571-86006142',
    description_url: '',
    research_direction: '计算机辅助药物分子设计方法学和应用研究。针对相应靶点，通过分子对接、分子动力学模拟和自由能计算等计算机辅助药物设计方法发现潜在的候选活性化合物；对候选化合物进行酶、细胞或细菌活性评价。目前研究体系主要包括：(1). 以双组分信号转导系统、β-内酰胺酶和核糖体为靶点，设计和发现抗耐药菌感染药物和感染性疾病诊断试剂；(2). 以AR为靶点，设计和发现抗前列腺癌药物。计算毒理学研究和ADME预测模型的开发。采用各种化学信息学和生物信息学的方法来提出和改进新的模型以预测药物的毒性和代谢。',
    image: importImage('people_tailonglei.png'),
    education: [
      {
        description_cn: '2006年9月至2010年6月：中国海洋大学, 海洋生命学院, 理学学士（导师：韩宝芹）',
        description_en: '2006-2010: Ocean University of China, College of Marine Life Sciences, Bachelor of Science (Supervisor: Prof. Baoqin Han)',
      },
      {
        description_cn: '2010年9月至2013年6月：电子科技大学, 生命科学与技术学院, 理学硕士（导师: 李朝义）',
        description_en: '2010-2013: University of Electronic Science and Technology of China, School of Life Science and Technology, Master of Science (Supervisor: Prof. Chaoyi Li)',
      },
      {
        description_cn: '2013年9月至2017年12月：浙江大学, 药学院, 医学博士（导师: 侯廷军）',
        description_en: '2013-2017: Zhejiang University, School of Pharmacy, PhD (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2018年3月至2021年3月：浙江大学，药学院, 博士后/助理研究员（合作导师: 侯廷军）',
        description_en: '2018-2021: Zhejiang University, School of Pharmacy, Postdoctoral Researcher/Assistant Researcher (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2021年4月至今：浙江大学医学院附属邵逸夫医院，生物医学研究中心/浙江省微生物技术与生物信息研究重点实验室，助理研究员',
        description_en: '2021-present: Biomedical Research Center/Zhejiang Key Laboratory of Microbiology Technology and Bioinformatics Research, Sir Run Run Shaw Hospital, Zhejiang University School of Medicine, Assistant Researcher',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Tailong Lei, Huiyong Sun, Yu Kang, Feng Zhu. Hui Liu, Wenfang Zhou, Zhe Wang, Dan Li, Youyong Li, Tingjun Hou*, ADMET evaluation in drug discovery. 18. Reliable prediction of chemical-induced urinary tract toxicity by boosting machine learning approaches. Molecular Pharmaceutics, 2017, 14, 3935-3953.',
        url: '',
      },
      {
        title: 'Tailong Lei, Fu Chen, Hui Liu, Huiyong Sun, Yu Kang, Dan Li, Youyong Li, Tingjun Hou*, ADMET evaluation in drug discovery. 17. Development of quantitative and qualitative prediction models for chemical-induced respiratory toxicity. Accurate prediction of rat oral acute toxicity using relevance vector machine and consensus modeling. Molecular Pharmaceutics, 2017, 14, 2407-2421.',
        url: '',
      },
      {
        title: 'Tailong Lei, Youyong Li, Yunlong Song; Dan Li, Huiyong Sun, Tingjun Hou. ADMET evaluation in drug discovery: 15. Accurate prediction of rat oral acute toxicity using relevance vector machine and consensus modeling. J. Cheminformatics, 2016, 8, 1-6.',
        url: '',
      },
    ],
  },
  {
    name_cn: '胡雪萍',
    name_en: 'Xueping Hu',
    title_cn: '副研究员',
    title_en: 'Associate Researcher',
    email: 'huxueping@sdu.edu.cn',
    location_cn: '山东大学化学与化工学院',
    location_en: 'School of Chemistry and Chemical Engineering, Shandong University',
    phone: '',
    description_url: '',
    research_direction: '长期围绕计算机辅助药物分子设计与分子动力学模拟，以发展创新药物的筛选方法为基础，与化学、生物学等多个学科进行交叉融合，主要研究内容包括：1）药物-靶标相互作用的多尺度模拟；2）基于结构的抗炎、抗癌先导化合物发现；3）基于结构的抗菌、抗病毒药物发现。',
    image: importImage('people_xuepinghu.png'),
    education: [
      {
        description_cn: '2009年9月至2013年6月：山东农业大学，植物保护学院，学士',
        description_en: '2009-2013: Shandong Agricultural University, College of Plant Protection, Bachelor',
      },
      {
        description_cn: '2013年9月至2018年6月：中国农业大学，理学院，博士',
        description_en: '2013-2018: China Agricultural University, College of Science, PhD',
      },
      {
        description_cn: '2018年7月至2021年12月：浙江大学，药学院，博士后',
        description_en: '2018-2021: Zhejiang University, School of Pharmacy, Postdoctoral Researcher',
      },
      {
        description_cn: '2022年1月至2023年11月：山东大学，前沿交叉科学青岛研究院，副研究员',
        description_en: '2022-2023: Qingdao Institute for Frontier Science, Shandong University, Associate Researcher',
      },
      {
        description_cn: '2023年12月至今：山东大学，化学与化工学院前沿化学研究院，副研究员',
        description_en: '2023-present: Institute of Frontier Chemistry, School of Chemistry and Chemical Engineering, Shandong University, Associate Researcher',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Hu Xueping#, Pang Jinping#, Zhang Jintu#, Shen Chao, Chai Xin, Wang Ercheng, Chen Haiyi, Wang Xuwen, Duan Mojie, Fu Weitao, Xu Lei, Kang Yu, Li Dan*, Xia Hongguang*, Hou Tingjun*. Discovery of Novel GR Ligands toward Druggable GR Antagonist Conformations Identified by MD Simulations and Markov State Model Analysis. Adv Sci. 2022, 9(3), e2102435.',
        url: '',
      },
      {
        title: 'Hu Xueping#, Pang Jinping#, Chen Changwei, Jiang Dejun, Shen Chao, Chai Xin, Yang Liu, Zhang Xujun, Xu Lei, Cui Sunliang, Hou Tingjun, Li Dan*. Discovery of novel non-steroidal selective glucocorticoid receptor modulators by structure- and IGN-based virtual screening, structural optimization, and biological evaluation. Eur J Med Chem. 2022, 237, 114382.',
        url: '',
      },
      {
        title: 'Hu Xueping#, Chai Xin#, Wang Xuwen#, Duan Mojie, Pang Jinping, Fu Weitao, Li Dan*, Hou Tingjun*, Advances in the computational development of androgen receptor antagonists, Drug Discov Today, 2020, 25, 1453-1461',
        url: '',
      },
      {
        title: 'Hu Xueping#, Yang Liu#, Chai Xin, Lei Yixuan, Alam Md Shah, Liu Lu, Shen Chao, Jiang Dejun, Wang Zhe, Liu Zhiyong, Xu Lei, Wan Kanglin, Zhang Tianyu, Yin Yuelan, Li Dan*, Cao Dongsheng*, Hou Tingjun*. Discovery of novel DprE1 inhibitors via computational bioactivity fingerprints and structure-based virtual screening. Acta Pharmacol Sin. 2022, 43(6), 1605-1615.',
        url: '',
      },
      {
        title: 'Yang Liu#, Hu Xueping#, Lu Yang#, Xu Ruolan, Xu Yaping, Ma Wanli, Alam Md Shah, Zhang Tianyu, Chai Xin, Lei Yixuan, Ye Qing, Dong Xiaowu, Kang Yu, Che Jinxin*, Hou Tingjun*, Li Dan*. Discovery of N-(1-(6-Oxo-1,6 -dihydropyrimidine)-pyrazole) Acetamide Derivatives as Novel Noncovalent DprE1 Inhibitors against Mycobacterium tuberculosis. J Med Chem. 2024, 67, 1914-1931',
        url: '',
      },
    ],
  },
  {
    name_cn: '王二成',
    name_en: 'Ercheng Wang',
    title_cn: '研究员',
    title_en: 'Researcher',
    email: 'wangec_hust@hust.edu.cn',
    location_cn: '之江实验室',
    location_en: 'Zhejiang Lab',
    phone: '',
    description_url: 'https://www.researchgate.net/profile/Wang_Ercheng',
    research_direction: '目前研究方向包括（1）增强采样方法学及其应用研究，如将增强采样方法和分子对接结合用于重要靶标的药物筛选；（2）利用基于全原子的分子动力学模拟方法研究蛋白质的共翻译折叠。',
    image: importImage('people_erchengwang.png'),
    education: [
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Weitao Fu#, Ercheng Wang#(co-first authors), Di Ke, Hao Yang, Lingfeng Chen, Jingjing Shao, Xueping Hu, Lei Xu, Na Liu*, Tingjun Hou*, Discovery of a Novel Fusarium Graminearum Mitogen-activated Protein Kinase (FgGpmk1) Inhibitor for the Treatment of Fusarium Head Blight, Journal of Medicinal Chemistry, 2021, 64, 13841-13852.',
        url: '',
      },
      {
        title: 'Ercheng Wang, Weitao Fu, Dejun Jiang, Huiyong Sun, Junmei Wang, Xujun Zhang, Gaoqi Weng, Hui Liu, Peng Tao, and Tingjun Hou*, VAD-MM/GBSA: A Variable Atomic Dielectric MM/GBSA Model for Improved Accuracy in Protein–Ligand Binding Free Energy Calculations, Journal of Chemical Information and Modeling, 2020, 60, 5353-5365.',
        url: '',
      },
      {
        title: 'Ercheng Wang, Hui Liu, Junmei Wang, Gaoqi Weng, Huiyong Sun, Zhe Wang, Yu Kang, Tingjun Hou*, Development and Evaluation of MM/GBSA Based on a Variable Dielectric GB Model for Predicting Protein-Ligand Binding Affinities, Journal of Chemical Information and Modeling, 2021, 61, 2844-2856.',
        url: '',
      },
      {
        title: 'Ercheng Wang, Gaoqi Weng, Huiyong Sun, Hongyan Du, Feng Zhu, Fu Chen, Zhe Wang, Tingjun Hou*, Assessing the performance of the MM/PBSA and MM/GBSA methods. 10. Impacts of Enhanced Sampling and Variable Dielectric Model on Protein-Protein Interactions, Physical Chemistry Chemical Physics, 2019, 21, 18958-18969.',
        url: '',
      },
      {
        title: 'Ercheng Wang, Huiyong Sun, Junmei Wang, Zhe Wang, Hui Liu, John Z.H. Zhang*, Tingjun Hou*, End-Point binding free energy calculation with MM/PBSA and MM/GBSA: strategies and applications in drug design, Chemical Reviews, 2019, 119, 9478-9508.',
        url: '',
      },
    ],
  },
  {
    name_cn: '王 哲',
    name_en: 'Zhe Wang',
    title_cn: '副研究员',
    title_en: 'Associate Researcher',
    email: 'wangzhehyd@hznu.edu.cn',
    location_cn: '杭州师范大学仓前校区',
    location_en: 'Cangqian Campus, Hangzhou Normal University',
    phone: '',
    description_url: '',
    research_direction: '基于大规模数据库的分子对接方法测评和虚拟筛选整合策略的开发和应用研究；基于增强采样的自由能计算方法的应用研究。',
    image: importImage('people_zhewang.png'),
    education: [
      {
        description_cn: '2008年9月至2012年6月：温州医科大学，药学院，学士（导师：梁广研究员）',
        description_en: '2008-2012: Wenzhou Medical University, School of Pharmacy, Bachelor (Supervisor: Prof. Guang Liang)',
      },
      {
        description_cn: '2012年9月至2015年6月：温州医科大学，药学院，硕士（导师：梁广研究员）',
        description_en: '2012-2015: Wenzhou Medical University, School of Pharmacy, Master (Supervisor: Prof. Guang Liang)',
      },
      {
        description_cn: '2015年10月至2016年2月：浙江大学，药学院，科研助理',
        description_en: '2015-2016: Zhejiang University, School of Pharmacy, Research Assistant',
      },
      {
        description_cn: '2016年2月至2019年6月：浙江大学，药学院，博士（导师：侯廷军教授）',
        description_en: '2016-2019: Zhejiang University, School of Pharmacy, PhD (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2019年7月至2022年6月：浙江大学，药学院，博士后（合作导师：侯廷军教授）',
        description_en: '2019-2022: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2022年7月至2023年8月：浙江大学智能创新药物研究院，助理研究员',
        description_en: '2022-2023: Institute of Intelligent Drug Discovery and Innovation, Zhejiang University, Assistant Researcher',
      },
      {
        description_cn: '2024年1月至今：杭州师范大学，药学院，副研究员',
        description_en: '2024-present: School of Pharmacy, Hangzhou Normal University, Associate Researcher',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Xinlei Zhuang#, Zhe Wang#(co-first authors),Jiansheng Fan, Xuefei Bai, Yingchun Xu, James J Chou, Tingjun Hou, Shuqing Chen, Liqiang Pan, Structure-guided and phage-assisted evolution of a therapeutic anti-EGFR antibody to reverse acquired resistance, Nature Communications, 2022, 3, 1-16.',
        url: '',
      },
      {
        title: 'Zhe Wang, Hong Pan, Huiyong Sun, Yu Kang, Huanxiang Liu, Dongsheng Cao*, Tingjun Hou*, fastDRH: a webserver to predict and analyze protein-ligand complexes based on molecular docking and MM/PB(GB)SA computation, Briefings in Bioinformatics, 2022, 23, bbac201.',
        url: '',
      },
      {
        title: 'Zhe Wang, Huiyong Sun, Chao Shen, Xueping Hu, Junbo Gao, Dan Li, Dongsheng Cao*, Tingjun Hou*, Combined Strategies in Structure-based Virtual Screening, Physical Chemistry Chemical Physics, 2020, 22, 3149-3159.',
        url: '',
      },
      {
        title: 'Zhe Wang, Xuwen Wang, Youyong Li, Tailong Lei, Ercheng Wang, Dan Li, Yu Kang, Feng Zhu, Tingjun Hou*, farPPI: a webserver for accurate prediction of protein-ligand binding structures for small-molecule PPI inhibitors by MM/PB(GB)SA methods, Bioinformatics, 2019, 35, 1777–1779.',
        url: '',
      },
      {
        title: 'Zhe Wang, Huiyong Sun, Xiaojun Yao, Dan Li, Lei Xu, Youyong Li, Sheng Tian and Tingjun Hou*, Comprehensive evaluation of ten docking programs on a diverse set of protein-ligand complexes: the prediction accuracy of sampling power and scoring power. Physical Chemistry Chemical Physics, 2016, 18, 12964-12975.',
        url: '',
      },
    ],
  },
  {
    name_cn: '陈海轶',
    name_en: 'Haiyi Chen',
    title_cn: '副教授',
    title_en: 'Associate Professor',
    email: '11619007@zju.edu.cn',
    location_cn: '杭州师范大学仓前校区',
    location_en: 'Cangqian Campus, Hangzhou Normal University',
    phone: '',
    description_url: '',
    research_direction: '元动力学模拟。基于增强采样模拟的药物设计及微观生物机制研究。',
    image: importImage('people_haiyichen.png'),
    education: [
      {
        description_cn: '2012年9月-2016年6月：浙江大学, 药学, 学士',
        description_en: '2012-2016: Zhejiang University, Pharmacy, Bachelor',
      },
      {
        description_cn: '2016年9月-2021年12月：浙江大学, 药物化学, 博士（导师：侯廷军）',
        description_en: '2016-2021: Zhejiang University, Medicinal Chemistry, PhD (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2022年1月-2024年7月：浙江大学, 药学院, 博士后（合作导师：李丹 夏宏光）',
        description_en: '2022-2024: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisors: Prof. Dan Li, Prof. Hongguang Xia)',
      },
      {
        description_cn: '2024年8月至今：杭州师范大学, 药学院, 副教授',
        description_en: '2024-present: Hangzhou Normal University, School of Pharmacy, Associate Professor',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Haiyi Chen, Yuxin Zhou, Xinyue Wang, Xin Chai, Zhe Wang, Ercheng Wang, Lei Xu, Tingjun Hou, Mojie Duan, Dan Li, Discovery of Novel Anti-resistance AR Antagonists Guided by Funnel Metadynamics Simulation, Advanced Science, 2024, 11, e2309261.',
        url: '',
      },
      {
        title: 'Haiyi Chen, Yu Shi, Man Huang, Ting Lu, Huimin Zhang, Chun Zhou, Tingjun Hou, Youjun Feng, Recognition and acquisition of FakB2-loaded exogenous fatty acid (eFA) by a streptococcal FakA kinase, Science Bulletin, 2024, online.',
        url: '',
      },
      {
        title: 'Haiyi Chen, Yu Kang, Mojie Duan*, Tingjun Hou*, Regulation Mechanism for the Binding between the SARS-CoV-2 Spike Protein and Host Angiotensin-Converting Enzyme II, The Journal of Physical Chemistry Letters, 2021, 12, 6252-6261.',
        url: '',
      },
      {
        title: 'Yongchang Xu#, Haiyi Chen#, Huimin Zhang#, Saif Ullah#, Tingjun Hou, Youjun Feng, The MCR-3 inside linker appears as a facilitator of co listin resistance, Cell Reports, 2021, 35, 109135.',
        url: '',
      },
    ],
  },
  {
    name_cn: '蒋德军',
    name_en: 'Dejun Jiang',
    title_cn: '副教授',
    title_en: 'Associate Professor',
    email: '1576680727@qq.com',
    location_cn: '中南大学药学院',
    location_en: 'School of Pharmacy, Central South University',
    phone: '',
    description_url: '',
    research_direction: '主要从事ADME/T和成药性理论预测相关研究；探讨最新人工智能算法（如深度学习）在QSAR建模及成药性理论预测中的应用。',
    image: importImage('people_dejunjiang.png'),
    education: [
      {
        description_cn: '2017年9月-2022年6月：浙江大学，博士',
        description_en: '2017-2022: Zhejiang University, PhD',
      },
      {
        description_cn: '2022年7月-2024年7月：浙江大学，博士后（合作导师：侯廷军）',
        description_en: '2022-2024: Zhejiang University, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2024年8月至今：中南大学，药学院，副教授',
        description_en: '2024-present: Central South University, School of Pharmacy, Associate Professor',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Dejun Jiang, Huiyong Sun, Jike Wang, Changyu Hsieh, Yuquan Li, Zhenxing Wu, Dongsheng Cao*, Jian Wu*, Tingjun Hou*, Out-of-the-box deep learning prediction of quantum-mechanical partial charges by graph representation and transfer learning, Briefings in Bioinformatics, 2022, 65, 10691-10706.',
        url: '',
      },
      {
        title: 'Dejun Jiang, Chang-Yu Hsieh, Zhenxing Wu, Yu Kang, Jike Wang, Ercheng Wang, Ben Liao, Chao Shen, Lei Xu, Jian Wu*, Dongsheng Cao*, Tingjun Hou*, InteractionGraphNet: a novel and efficient deep graph representation learning framework for accurate protein-ligand interaction predictions, Journal of Medicinal Chemistry, 2021, 64, 18209-18232.',
        url: '',
      },
      {
        title: 'Dejun Jiang, Zhenxing Wu, Chang-Yu Hsieh, Guangyong Chen, Ben Liao, Zhe Wang, Chao Shen, Dongsheng Cao*, Jian Wu*, Tingjun Hou*, Could graph neural networks learn better molecular representation for drug discovery? A comparison study of descriptor-based and graph-based models, Journal of Cheminformatics, 2021, 13, 12.',
        url: '',
      },
    ],
  },
  {
    name_cn: '黄建湘',
    name_en: 'Jianxiang Huang',
    title_cn: '助理研究员',
    title_en: 'Assistant Researcher',
    email: 'huangjianxiang@zju.edu.cn',
    location_cn: '上海交通大学医学院',
    location_en: 'School of Medicine, Shanghai Jiao Tong University',
    phone: '',
    description_url: '',
    research_direction: '深度学习增强的自由能采样。',
    image: importImage('people_jianxianghuang.png'),
    education: [
      {
        description_cn: '2009年9月-2013年6月：中国矿业大学(徐州)，化工学院，化工专业，学士',
        description_en: '2009-2013: China University of Mining and Technology (Xuzhou), School of Chemical Engineering, Bachelor',
      },
      {
        description_cn: '2013年9月-2016年6月：浙江大学，化工学院，化工专业，硕士（导师：邹建卫 教授）',
        description_en: '2013-2016: Zhejiang University, School of Chemical Engineering, Master (Supervisor: Prof. Jianwei Zou)',
      },
      {
        description_cn: '2016年9月-2020年6月：浙江大学，化工学院，化工专业，博士（导师：申有青 教授）',
        description_en: '2016-2020: Zhejiang University, School of Chemical Engineering, PhD (Supervisor: Prof. Youqing Shen)',
      },
      {
        description_cn: '2020年7月-2023年6月：浙江大学，定量生物中心，博士后（合作导师 周如鸿 教授）',
        description_en: '2020-2023: Zhejiang University, Center for Quantitative Biology, Postdoctoral Researcher (Supervisor: Prof. Ruhong Zhou)',
      },
      {
        description_cn: '2023年10月-2024年：浙江大学，药学院，博士后 （合作导师：侯廷军 教授）',
        description_en: '2023-2024: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2024年至今：上海交通大学，医学院，助理研究员',
        description_en: '2024-present: Shanghai Jiao Tong University, School of Medicine, Assistant Researcher',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Huang, J.; Buratto, D.; Zhou, R. Probing the electrostatic aggregation of nanoparticles with oppositely charged molecular ions. Aggregate. 2023, 00, e324.',
        url: '',
      },
    ],
  },
  {
    name_cn: '田帅珍',
    name_en: 'Shuaizhen Tian',
    title_cn: '讲师',
    title_en: 'Lecturer',
    email: 'tianshuaizhen1@163.com',
    location_cn: '济宁学院生命科学与工程学院',
    location_en: 'School of Life Science and Engineering, Jining University',
    phone: '',
    description_url: '',
    research_direction: '金属蛋白与配体体系的分子动力学模拟以及极化力场的开发。',
    image: importImage('people_shuaizhentian.png'),
    education: [
      {
        description_cn: '2010年9月至2014年7月：山东师范大学，物理与电子科学学院，应用物理，工学学士',
        description_en: '2010-2014: Shandong Normal University, School of Physics and Electronics, Bachelor of Engineering in Applied Physics',
      },
      {
        description_cn: '2014年9月至2020年7月：华东师范大学，物理与电子科学学院，计算生物，硕博',
        description_en: '2014-2020: East China Normal University, School of Physics and Electronics, Master-PhD Program in Computational Biology',
      },
      {
        description_cn: '2020年9月至2023年3月：浙江大学，药学院',
        description_en: '2020-2023: Zhejiang University, School of Pharmacy',
      },
      {
        description_cn: '2023年5月至今：济宁学院，生命科学与工程学院，讲师',
        description_en: '2023-present: School of Life Science and Engineering, Jining University, Lecturer',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Tian, SZ; Zeng JZ; Liu, X; Chen, JZ; Zhang, JZH; Zhu, T. Understanding the selectivity of inhibitors toward PI4KIIIα and PI4KIIIβ based molecular modeling. Phys. Chem. Chem. Phys. 2019, 21, 22103.',
        url: '',
      },
      {
        title: 'Tian, SZ; Ji, CG; Zhang, JZH. Molecular basis of SMAC-XIAP binding and the effect of electrostatic polarization. J. Biomol. Struct. Dyn. 2021, 39, 743.',
        url: '',
      },
      {
        title: 'Huang, DD; Tian, SZ; Qi, YF; Zhang, JZH. Binding Modes of Small-molecule Inhibitors to EED Pocket of PRC2. ChemPhysChem. 2020, 21, 263.',
        url: '',
      },
    ],
  },
  {
    name_cn: '张 骞',
    name_en: 'Qian Zhang',
    title_cn: '博士后',
    title_en: 'Postdoctoral Researcher',
    email: 'q.zhang@uq.edu.au',
    location_cn: '英国剑桥大学桑格研究所',
    location_en: 'Wellcome Sanger Institute, University of Cambridge, UK',
    phone: '',
    description_url: 'http://cnsgenomics.com/',
    research_direction: '计算生物学与分子模拟',
    image: importImage('people_qianzhang.png'),
    education: [
      {
        description_cn: '2008年9月至2012年6月：苏州大学，生命科学学院，学士',
        description_en: '2008-2012: Soochow University, School of Life Sciences, Bachelor',
      },
      {
        description_cn: '2012年9月至2015年6月：苏州大学，功能纳米与软物质研究院，硕士',
        description_en: '2012-2015: Soochow University, Institute of Functional Nano & Soft Materials, Master',
      },
      {
        description_cn: '2016年1月至2020年12月：昆士兰大学，分子生物科学研究所，博士',
        description_en: '2016-2020: University of Queensland, Institute for Molecular Bioscience, PhD',
      },
      {
        description_cn: '2021年1月至今：英国剑桥大学，桑格研究所，博士后',
        description_en: '2021-present: University of Cambridge, Wellcome Sanger Institute, Postdoctoral Researcher',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Qian Zhang*, Riccardo E Marioni, Matthew R Robinson, Jon Higham, Duncan Sproul, Naomi R Wray, Ian J Deary, Allan F McRae, Peter M Visscher, Genotype effects contribute to variation in longitudinal methylome patterns in older people, Genome Medicine, 2018, 10, 75.',
        url: '',
      },
      {
        title: 'Peter M Visscher*, Naomi R Wray, Qian Zhang, Pamela Sklar, Mark I. McCarthy, Matthew A. Brown, JianYang, 10 Years of GWAS Discovery: Biology, Function, and Translation, American Journal of Human Genetics, 2017, 6, 5-22.',
        url: '',
      },
      {
        title: 'Qian Zhang, Wei Zhang, Youyong Li, Junmei Wang, Liling Zhang, Tingjun Hou*, A rule-based algorithm for automatic bond type perception, Journal of Cheminformatics, 2012, 4, 26.',
        url: '',
      },
      {
        title: 'Qian Zhang, Junmei Wang, Ginés D Guerrero, José M Cecilia, José M García, Youyong Li, Horacio Pérez-Sánchez, Tingjun Hou*, Accelerated Conformational Entropy Calculations Using Graphic Processing Units, Journal of Chemical Information and Modeling, 2013, 53, 2057–2064.',
        url: '',
      },
    ],
  },
  {
    name_cn: '富炜涛',
    name_en: 'Weitao Fu',
    title_cn: '副研究员',
    title_en: 'Associate Researcher',
    email: 'fuweitao@ihm.ac.cn',
    location_cn: '合肥综合性国家科学中心大健康研究院',
    location_en: 'Health and Medicine Research Institute, Hefei Comprehensive National Science Center',
    phone: '',
    description_url: '',
    research_direction: '目前研究方向包括（1）计算机辅助基于受体结构的药物设计；（2）基于分子模拟技术的靶标-配体作用机制与药物发现；（3）靶向GPCR的创新药物设计；（4）靶向无菌性炎症的药物研发。',
    image: importImage('people_weitaofu.png'),
    education: [
      {
        description_cn: '2018年3月-2022年3月：浙江大学，药学院，博士',
        description_en: '2018-2022: Zhejiang University, School of Pharmacy, PhD',
      },
      {
        description_cn: '2022年4月-2024年3月：江苏威凯尔医药科技股份有限公司',
        description_en: '2022-2024: Jiangsu ViKer Pharmaceutical Technology Co., Ltd.',
      },
      {
        description_cn: '2024年4月至今：合肥综合性国家科学中心大健康研究院，副研究员',
        description_en: '2024-present: Health and Medicine Research Institute, Hefei Comprehensive National Science Center, Associate Researcher',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Weitao Fu#, Hao Yang#, Chenxian Hu#, Jianing Liao#, Zhou Gong, Minkui Zhang, Shuai Yang, Shangxiang Ye, Yixuan Lei, Rong Sheng, Zhiguo Zhang, Xiaojun Yao, Chun Tang*, Dan Li*, Tingjun Hou*, Small-molecule inhibition of androgen receptor dimerization as a strategy against prostate cancer, ACS Central Science, 2023, 9, 675-684.',
        url: '',
      },
      {
        title: 'Weitao Fu#, Ercheng Wang#, Di Ke, Hao Yang, Lingfeng Chen, Jingjing Shao, Xueping Hu, Lei Xu, Na Liu*, Tingjun Hou*, Discovery of a Novel Fusarium Graminearum Mitogen-activated Protein Kinase (FgGpmk1) Inhibitor for the Treatment of Fusarium Head Blight, Journal of Medicinal Chemistry, 2021, 64, 13841-13852.',
        url: '',
      },
      {
        title: 'Weitao Fu#, Minkui Zhang#, Jianing Liao#, Qing Tang, Yixuan Lei, Zhou Gong, Luhu Shan, Mojie Duan, Xin Chai, Jinping Pang, Chun Tang, Xuwen Wang, Xiaohong Xu, Dan Li*, Rong Sheng*, Tingjun Hou*, Discovery of a novel androgen receptor antagonist manifesting evidence to disrupt the dimerization of the ligand-binding domain via attenuating the hydrogen-bonding network, Journal of Medicinal Chemistry, 2021, 64, 17221-17238.',
        url: '',
      },
      {
        title: 'Weitao Fu#, Ningjie Wu#, Di Ke, Yun Chen, Tianming Xu*, Guangfei Tang*, Discovery of a species-specific novel antifungal compound against Fusarium graminearum through an integrated molecular modeling strategy, Pest Management Science, 2020, 76, 3990-3999.',
        url: '',
      },
    ],
  },
  {
    name_cn: '庞锦萍',
    name_en: 'Jinping Pang',
    title_cn: '博士研究生',
    title_en: 'PhD Student',
    email: '13255923553@163.com',
    location_cn: '浙江康恩贝制药股份有限公司',
    location_en: 'Zhejiang Conba Pharmaceutical Co., Ltd.',
    phone: '',
    description_url: '',
    research_direction: '主要从事雄激素受体（AR）小分子抑制剂的虚拟筛选和小分子生物学活性测试研究以发现活性较好的先导化合物。',
    image: importImage('people_jinpingpang.png'),
    education: [
      {
        description_cn: '2017年9月至2022年6月：浙江大学，博士研究生',
        description_en: '2017-2022: Zhejiang University, PhD Student',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Xueping Hu#, Jinping Pang#(co-first authors), Changwei Chen, Dejun Jiang, Chao Shen, Xin Chai, Liu Yang, Xujun Zhang, Lei Xu, Sunliang Cui, Tingjun Hou, Dan Li*, Discovery of novel non-steroidal selective glucocorticoid receptor modulators by structure-and IGN-based virtual screening, structural optimization, and biological evaluation, European Journal of Medicinal Chemistry, 2022, 237, 114382.',
        url: '',
      },
      {
        title: 'Jinping Pang, Xueping Hu, Yunxia Wang, Jianing Liao, Xin Chai, Xuwen Wang, Chao Shen, Jiajia Wang, Lulu Zhang, Xinyue Wang, Feng Zhu, Qinjie Weng, Lei Xu, Tingjun Hou, Dan Li*, Discovery of a novel nonsteroidal selective glucocorticoid receptor modulator by virtual screening and bioassays, Acta Pharmacologica Sinica, 2022, 43, 2429–2438.',
        url: '',
      },
      {
        title: 'Jinping Pang, Chao Shen, Wenfang Zhou, Yunxia Wang, Luhu Shan, Xin Chai, Ying Shao, Xueping Hu, Feng Zhu, Danyan Zhu, Li Xiao, Lei Xu, Xiaohong Xu, Dan Li*, Tingjun Hou*, Discovery of novel antagonists targeting the DNA binding domain of androgen receptor by integrated docking-based virtual screening and bioassays, Acta Pharmacologica Sinica, 2022, 43, 229-239.',
        url: '',
      },
      {
        title: 'Xueping Hu#, Jinping Pang#(co-first authors), Jintu Zhang, Chao Shen, Xin Chai, Ercheng Wang, Haiyi Chen, Xuwen Wang, Mojie Duan, Weitao Fu, Lei Xu, Yu Kang, Dan Li*, Hongguang Xia*, Tingjun Hou*, Discovery of novel GR ligands towards druggable GR antagonist conformations identified by MD Simulations and Markov state model analysis, Advanced Science, 2022, 9, 2102435.',
        url: '',
      },
    ],
  },
  {
    name_cn: '钟海洋',
    name_en: 'Haiyang Zhong',
    title_cn: '助理研究员',
    title_en: 'Assistant Professor',
    email: 'zhonghy16@lzu.edu.cn',
    location_cn: '徐州医科大学',
    location_en: 'Xuzhou Medical University',
    phone: '',
    description_url: '',
    research_direction: [
      {
        description_cn: '基于结构的BRD4的抑制剂发现与设计',
        description_en: 'Structure-based discovery and design of BRD4 inhibitors'
      },
      {
        description_cn: '水分子网络策略在抑制剂发现与优化中的应用',
        description_en: 'Application of water network strategy in inhibitor discovery and optimization'
      }
    ],
    image: importImage('people_haiyangzhong.png'),
    education: [
      {
        description_cn: '2010年9月至2014年6月：兰州大学，化学化工学院，学士',
        description_en: '2010-2014: Lanzhou University, School of Chemistry and Chemical Engineering, Bachelor'
      },
      {
        description_cn: '2014年9月至2020年6月：兰州大学，化学化工学院，博士（导师：姚小军教授）',
        description_en: '2014-2020: Lanzhou University, School of Chemistry and Chemical Engineering, PhD (Supervisor: Prof. Xiaojun Yao)'
      },
      {
        description_cn: '2020年7月至2023年11月：浙江大学，药学院，博士后（合作导师：侯廷军教授）',
        description_en: '2020-2023: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)'
      },
      {
        description_cn: '2024年4月至今：徐州医科大学，药学院，助理研究员',
        description_en: '2024-present: Xuzhou Medical University, School of Pharmacy, Assistant Professor'
      }
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Haiyang Zhong, Xinyue Wang, Shicheng Chen, Zhe Wang, Huating Wang, Lei Xu, Tingjun Hou, Xiaojun Yao*, Dan Li*, Peichen Pan*, Discovery of novel inhibitors of BRD4 treating prostate cancer: a comprehensive case study for considering water network in virtual screening and drug design. Journal of Medicinal Chemistry, 2024, 67(1):138-151.',
        url: ''
      },
      {
        title: 'Haiyang Zhong#, Zhengshuo Zhang#, Mengdan Chen, Yue Chen, Can Yang, Yunshegn Xue, Pei Xu*, Hongli Liu*, Structural basis for long residence time c-Src antagonist: insights from molecular dynamics simulations. International Journal of Molecular Sciences, 2024, 25(19):10477.',
        url: ''
      },
      {
        title: 'Huating Wang#, Xuwen Wang#, Haiyang Zhong#, Lvtao Cai, Weitao Fu, Xin Chai, Jianing Liao, Rong Sheng, Luhu Shan, Xiaohong Xu, Lei Xu, Peichen Pan*, Tingjun Hou*, Dan Li*, Discovery of 5-nitro-N-(3-(trifluoromethyl)phenyl)pyridin-2-amine as a novel pure androgen receptor antagonist against antiandrogen resistance. Journal of Medicinal Chemistry, 2024, 67(22):20514-20530.',
        url: ''
      },
      {
        title: 'Hongli Liu#, Haiyang Zhong#, Yixiao Zhang#, Huarui Xue, Zhengshuo Zhang, Kequan Fu, Xudong Cao, Xiaochun Xiong*, Dong Guo*, Structural basis of tolvaptan binding to the vasopressin V2 receptor. Acta Pharmacologica Sinica, 2024, 45(11):2441-2449.',
        url: ''
      },
      {
        title: 'Haiyang Zhong, Zhe Wang*, Xuwen Wang, Hui Liu, Dan Li, Huanxiang Liu, Xiaojun Yao*, Tingjun Hou*, Importance of crystalline water network in docking-based virtual screening: a case study of BRD4. Physical Chemistry Chemical Physics, 2019, 21(45):25276-25289.',
        url: ''
      }
    ]
  },
  {
    name_cn: '黄达锭',
    name_en: 'Dading Huang',
    title_cn: '讲师',
    title_en: 'Lecturer',
    email: 'hddaqnu@163.com',
    location_cn: '安庆师范大学生命科学学院',
    location_en: 'School of Life Sciences, Anqing Normal University',
    phone: '',
    description_url: '',
    research_direction: '基于靶标结构的计算机辅助药物设计。',
    research_direction_en: 'Structure-based computer-aided drug design.',
    image: importImage('people_dadinghuang.png'),
    education: [
      {
        description_cn: '2010年9月至2014年6月：四川大学，化学学院，学士',
        description_en: '2010-2014: Sichuan University, School of Chemistry, Bachelor',
      },
      {
        description_cn: '2014年9月至2019年6月：华东师范大学，精密光谱科学与技术国家重点实验室，硕博（导师：张增辉教授）',
        description_en: '2014-2019: East China Normal University, State Key Laboratory of Precision Spectroscopy, Master-PhD Program (Supervisor: Prof. Zenghui Zhang)',
      },
      {
        description_cn: '2021年8月至2023年7月：浙江大学，药学院，博士后（合作导师：侯廷军教授）',
        description_en: '2021-2023: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2023年8月至今：安庆师范大学，生命科学学院，讲师',
        description_en: '2023-present: Anqing Normal University, School of Life Sciences, Lecturer',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Dading Huang, Yifei Qi, Jianing Song, and John Z.H. Zhang, Calculation of hot spots for protein-protein interaction in p53/PMI-MDM2/MDMX complexes, J. Comput. Chem., 2019, 40, 1045-1056.',
        url: '',
      },
    ],
  },
  {
    name_cn: '翁高棋',
    name_en: 'Gaoqi Weng',
    title_cn: '博士后',
    title_en: 'Postdoctoral Fellow',
    email: 'weng@ohsu.edu',
    location_cn: '美国俄勒冈健康与科学大学Vollum研究所',
    location_en: 'Vollum Institute, Oregon Health & Science University, USA',
    phone: '',
    description_url: '',
    research_direction: '机械敏感性离子通道的结构与机制研究。',
    research_direction_en: 'Research on the structure and mechanism of mechanosensitive ion channels.',
    image: importImage('people_gaoqiweng.png'),
    education: [
      {
        description_cn: '2014年9月至2018年6月：浙江大学，药学院，学士',
        description_en: '2014-2018: Zhejiang University, School of Pharmacy, Bachelor',
      },
      {
        description_cn: '2018年9月至2023年6月：浙江大学，药学院，博士（导师：侯廷军教授）',
        description_en: '2018-2023: Zhejiang University, School of Pharmacy, PhD (Supervisor: Prof. Tingjun Hou)',
      },
      {
        description_cn: '2023年11月至今：美国霍华德·休斯医学研究所和俄勒冈健康与科学大学Vollum研究所，博士后（导师：Eric Gouaux）',
        description_en: '2023-present: Howard Hughes Medical Institute and Vollum Institute at Oregon Health & Science University, Postdoctoral Fellow (Supervisor: Eric Gouaux)',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Gaoqi Weng, Xuanyan Cai, Dongsheng Cao, Hongyan Du, Chao Shen, Yafeng Deng, Qiaojun He, Bo Yang, Dan Li*, Tingjun Hou*, PROTAC-DB 2.0: an updated database of PROTACs, Nucleic Acids Research, 2023, 51, D1367-D1372.',
        url: '',
      },
      {
        title: 'Gaoqi Weng, Chao Shen, Dongsheng Cao, Junbo Gao, Xiaowu Dong, Qiaojun He, Bo Yang, Dan Li*, Jian Wu*, Tingjun Hou*, PROTAC-DB: an online database of PROTACs, Nucleic Acids Research, 2021,49, D1381-D1387.',
        url: '',
      },
      {
        title: 'Gaoqi Weng, Dan Li, Yu Kang*, Tingjun Hou*, Integrative modeling of PROTAC-mediated ternary complexes, Journal of Medicinal Chemistry, 2021, 64, 16271-16281.',
        url: '',
      },
      {
        title: 'Gaoqi Weng, Ercheng Wang, Zhe Wang, Hui Liu, Feng Zhu, Dan Li, Tingjun Hou*, HawkDock: a web server to predict and analyze the protein-protein complex based on computational docking and MM/GBSA, Nucleic Acids Research, 2019, 47, W322-W330.',
        url: '',
      },
    ],
  },
  {
    name_cn: '余 洁',
    name_en: 'Jie Yu',
    title_cn: '研究员',
    title_en: 'Researcher',
    email: 'yujie0317@zju.edu.cn',
    location_cn: '华中科技大学同济医学院附属协和医院',
    location_en: 'Union Hospital, Tongji Medical College, Huazhong University of Science and Technology',
    phone: '',
    description_url: '',
    research_direction: '主要从事计算机辅助药物设计。',
    research_direction_en: 'Computer-aided drug design.',
    image: importImage('people_jieyu.png'),
    education: [
      {
        description_cn: '2017年9月至2020年6月：浙江大学，硕士研究生（共同导师：康玉副教授）',
        description_en: '2017-2020: Zhejiang University, Master Student (Co-supervisor: Associate Prof. Yu Kang)',
      },
      {
        description_cn: '2020年至2024年：北京大学，攻读博士学位（导师：张亮仁教授）',
        description_en: '2020-2024: Peking University, PhD Student (Supervisor: Prof. Liangren Zhang)',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Tianli Xie, Jie Yu, Weitao Fu, Zhe Wang, Lei Xu, Shan Chang, Ercheng Wang, Feng Zhu, Su Zeng, Yu Kang*, Tingjun Hou*, Insight into the selective binding mechanism of DNMT1 and DNMT3A inhibitors: a molecular simulation study, Physical Chemistry Chemical Physics, 2019, accepted.',
        url: '',
      },
      {
        title: 'Jie Yu, Tianli Xie, Zhe Wang, Xuwen Wang, Su Zeng, Yu Kang*, Tingjun Hou*, DNA Methyltransferases: Emerging Targets for the Discovery of Inhibitors as Potent Anticancer Drugs, Drug Discovery Today, 2019, accept.',
        url: '',
      },
    ],
  },
  {
    name_cn: '叶 青',
    name_en: 'Qing Ye',
    title_cn: '博士后',
    title_en: 'Postdoctoral Researcher',
    email: 'qye@zju.edu.cn',
    location_cn: '美国安德森癌症中心',
    location_en: 'MD Anderson Cancer Center, USA',
    phone: '',
    description_url: '',
    research_direction: '面向多模态生物医药数据的药物靶点发现与筛选方法研究，面向多组学数据融合与挖掘的计算方法开发。',
    research_direction_en: 'Development of computational methods for drug target discovery and screening based on multimodal biomedical data; Computational method development for integrative analysis and mining of multi-omics data.',
    image: importImage('people_qingye.png'),
    education: [
      {
        description_cn: '2019年9月至2024年6月：浙江大学，博士研究生（共同导师：贺诗波教授）',
        description_en: '2019.9-2024.6: Zhejiang University, PhD Student (Co-supervisor: Prof. Shibo He)',
      },
    ],
    awards: [
    ],
    papers: [
      {
        title: 'Qing Ye, Yundian Zeng, Linlong Jiang, Yu Kang, Peichen Pan, Jiming Chen, Yafeng Deng, Haitao Zhao, Shibo He*, Tingjun Hou*, Chang-Yu Hsieh*, A Knowledge-Guided Graph Learning Approach Bridging Phenotype- and Target-Based Drug Discovery, Advanced Science, 2025, 12, 2412402.',
        url: '',
      },
      {
        title: 'Qing Ye, Ruolan Xu, Dan Li, Yu Kang, Yafeng Deng, Feng Zhu, Jiming Chen*, Shibo He, Chang-Yu Hsieh*, Tingjun Hou*, Integrating multi-modal deep learning on knowledge graph for the discovery of synergistic drug combinations against infectious diseases, Cell Reports Physical Science, 2023, 8, 101520.',
        url: '',
      },
      {
        title: 'Qing Ye, Chang-Yu Hsieh, Ziyi Yang, Yu Kang, Jiming Chen, Dongsheng Cao*, Shibo He*, Tingjun Hou*, A unified drug-target interaction prediction framework based on knowledge graph and recommendation system, Nature Communications, 2021, 12, 6775.',
        url: '',
      },
      {
        title: 'Qing Ye, Xin Chai, Dejun Jiang, Liu Yang, Chao Shen, Xujun Zhang, Dan Li*, Dongsheng Cao*, Tingjun Hou*, Identification of Active Molecules against Mycobacterium Tuberculosis through Machine Learning, Briefings in Bioinformatics, 2021, 22, bbab068.',
        url: '',
      },
    ],
  },
  {
    name_cn: '吴振兴',
    name_en: 'Zhenxing Wu',
    title_cn: '教研助理教授',
    title_en: 'Assistant Professor',
    email: 'zhenxingwu@zju.edu.cn',
    location_cn: '深圳理工大学-合成生物学院',
    location_en: 'Shenzhen University of Advanced Technology - School of Synthetic Biology',
    phone: '',
    description_url: '',
    research_direction: [
      '基于AI的成药性预测及优化方法研究'
    ],
    research_direction_en: [
      'AI-based drug-likeness prediction and optimization methods research'
    ],
    image: importImage('people_zhenxingwu.png'),
    education: [
      {
        description_cn: '2014年9月至2018年7月：浙江大学，药学院，药学专业，理学学士',
        description_en: 'Sep 2014 - Jul 2018: Zhejiang University, School of Pharmacy, Bachelor of Science in Pharmacy',
      },
      {
        description_cn: '2018年9月至2023年7月：浙江大学，药学院，药物化学，博士研究生',
        description_en: 'Sep 2018 - Jul 2023: Zhejiang University, School of Pharmacy, PhD in Medicinal Chemistry',
      },
      {
        description_cn: '2023年9月至2025年7月：浙江大学，药学院，药学专业，博士后',
        description_en: 'Sep 2023 - Jul 2025: Zhejiang University, School of Pharmacy, Postdoctoral Researcher',
      },
      {
        description_cn: '2025年9月至今：深圳理工大学，合成生物学院，教研助理教授',
        description_en: 'Sep 2025 - present: Shenzhen University of Advanced Technology, School of Synthetic Biology, Assistant Professor',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Zhenxing Wu, Odin Zhang, et al. Leveraging language model for advanced multiproperty molecular optimization via prompt engineering. Nature Machine Intelligence, 2024: 1-11.',
        url: '',
      },
      {
        title: 'Zhenxing Wu, Jike Wang, et al. Chemistry-intuitive explanation of graph neural networks for molecular property prediction with substructure masking. Nature Communications, 2023, 14(1): 2585.',
        url: '',
      },
      {
        title: 'Zhenxing Wu, Dejun Jiang, et al. Mining toxicity information from large amounts of toxicity data. Journal of Medicinal Chemistry, 2021, 64, 6924-6936.',
        url: '',
      },
      {
        title: 'Xiong, G.#, Zhenxing Wu#, et al. ADMETlab 2.0: an integrated online platform for accurate and comprehensive predictions of ADMET properties. Nucleic Acids Research, 2021, 49(W1), W5-W14.',
        url: '',
      },
      {
        title: 'Zhenxing Wu, Dejun Jiang, et al. Knowledge-based BERT: a method to extract molecular features like computational chemists. Briefings in Bioinformatics, 2022, 23, bbac131.',
        url: '',
      },
    ],
  },
  {
    name_cn: '王 栋',
    name_en: 'Dong Wang',
    title_cn: '助理研究员',
    title_en: 'Assistant Researcher',
    email: 'duke.wang@zju.edu.cn',
    location_cn: '',
    location_en: '',
    phone: '',
    description_url: '',
    research_direction: [
      '计算机辅助药物设计'
    ],
    research_direction_en: [
      'Computer-aided drug design'
    ],
    image: importImage('people_dongwang.png'),
    education: [
      {
        description_cn: '2010年9月至2014年7月：江苏大学，药物制剂专业，理学学士',
        description_en: 'Sep 2010 - Jul 2014: Jiangsu University, Pharmaceutical Engineering, Bachelor of Science',
      },
      {
        description_cn: '2014年9月至2016年7月：华中农业大学，生物工程专业，硕士研究生',
        description_en: 'Sep 2014 - Jul 2016: Huazhong Agricultural University, Bioengineering, Master',
      },
      {
        description_cn: '2017年9月至2021年7月：华中农业大学，生物信息学专业，博士研究生',
        description_en: 'Sep 2017 - Jul 2021: Huazhong Agricultural University, Bioinformatics, PhD',
      },
      {
        description_cn: '2021年9月至2025年7月：浙江大学，药学专业，博士后',
        description_en: 'Sep 2021 - Jul 2025: Zhejiang University, Pharmacy, Postdoctoral Researcher',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Wang D., Jin J., Shi G., Bao J., Wang Z., Li S., Pan P., Li D., Kang Y.*, Hou T. J.*, ADMET Evaluation in Drug Discovery. 21. Application and Industrial Validation of Machine Learning Algorithms for Caco-2 Permeability Prediction. J Cheminform, 2025, 17(1), 3.',
        url: '',
      },
      {
        title: 'Wang D., Wu Z., Shen C., Bao L., Luo H., Wang Z., Yao H., Kong D. X.*, Luo C.*, Hou T. J.*, Learning with uncertainty to accelerate the discovery of histone lysine-specific demethylase 1A (KDM1A/LSD1) inhibitors. Brief. Bioinformatics, 2023, 24(1): bbac592.',
        url: '',
      },
    ],
  },
  {
    name_cn: '李诗萌',
    name_en: 'Shimeng Li',
    title_cn: '高级研究员',
    title_en: 'Senior Researcher',
    email: 'lishimeng1994@163.com',
    location_cn: '恒瑞医药',
    location_en: 'Hengrui Medicine',
    research_direction: ['基于人工智能的成药性预测'],
    image: importImage('people_shimengli.png'),
    education: [
      {
        description_cn: '2013年9月-2017年6月：辽宁大学，学士',
        description_en: 'Sep 2013 - Jun 2017: Liaoning University, Bachelor',
      },
      {
        description_cn: '2017年9月-2023年6月：辽宁大学，博士',
        description_en: 'Sep 2017 - Jun 2023: Liaoning University, PhD',
      },
      {
        description_cn: '2023年6月至今：浙江大学，药学院，博士后 （合作导师：侯廷军教授）',
        description_en: 'Jun 2023 - present: Zhejiang University, School of Pharmacy, Postdoctoral Researcher (Supervisor: Prof. Tingjun Hou)',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Li S, Wang L, Meng J, et al. De Novo design of potential inhibitors against SARS-CoV-2 Mpro[J]. Computers in Biology and Medicine, 2022, 147: 105728.',
        url: '',
      },
    ],
  },
  {
    name_cn: '杜红岩',
    name_en: 'Hongyan Du',
    title_cn: '博士后',
    title_en: 'Postdoctoral Researcher',
    email: 'hongyan_du@zju.edu.cn',
    location_cn: '洛克菲勒大学',
    location_en: 'Rockefeller University',
    phone: '',
    description_url: '',
    research_direction: [
      '计算机辅助药物设计'
    ],
    research_direction_en: [
      'Computer-aided drug design'
    ],
    image: importImage('people_hongyandu.png'),
    education: [
      {
        description_cn: '2016年9月至2020年7月：浙江大学，药学院，药学专业，理学学士',
        description_en: 'Sep 2016 - Jul 2020: Zhejiang University, School of Pharmacy, Bachelor of Science in Pharmacy',
      },
      {
        description_cn: '2020年9月至2025年7月：浙江大学，药学院，药学专业，博士研究生',
        description_en: 'Sep 2020 - Jul 2025: Zhejiang University, School of Pharmacy, PhD in Pharmacy',
      },
      {
        description_cn: '2025年9月至今：洛克菲勒大学，博士后',
        description_en: 'Sep 2025 - present: Rockefeller University, Postdoctoral Researcher',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Du, H., Zhang, X., Wu, Z., Zhang, O., Gu, S., Wang, M., Zhu, F., Li, D., Hou, T., & Pan, P. (2025). CovalentInDB 2.0: an updated comprehensive database for structure-based and ligand-based covalent inhibitor design and screening. Nucleic acids research, 53(D1), D1322–D1327.',
        url: '',
      },
      {
        title: 'Du, H.#, Gao, J.#, Weng, G., Ding, J., Chai, X., Pang, J., Kang, Y., Li, D., Cao, D., & Hou, T. (2021). CovalentInDB: a comprehensive database facilitating the discovery of covalent inhibitors. Nucleic Acids Research, 49(D1), D1122–D1129.',
        url: '',
      },
      {
        title: 'Du, H.#, Jiang, D.#, Zhang, O., Wu, Z., Gao, J., Zhang, X., Wang, X., Deng, Y., Kang, Y., Li, D., Pan, P., Hsieh, C. Y., & Hou, T. (2023). A flexible data-free framework for structure-based de novo drug design with reinforcement learning. Chemical Science, 14(43), 12166–12181.',
        url: '',
      },
      {
        title: 'Du, H.#, Jiang, D.#, Gao, J., Zhang, X., Jiang, L., Zeng, Y., Wu, Z., Shen, C., Xu, L., Cao, D., Hou, T., & Pan, P. (2022). Proteome-Wide Profiling of the Covalent-Druggable Cysteines with a Structure-Based Deep Graph Learning Network. Research, 2022, 9873564.',
        url: '',
      },
    ],
  },
  {
    name_cn: '廖佳宁',
    name_en: 'Jianing Liao',
    title_cn: '研究员',
    title_en: 'Researcher',
    email: '22019004@zju.edu.cn',
    location_cn: '浙江省人民医院',
    location_en: 'Zhejiang Provincial People\'s Hospital',
    research_direction: ['靶向雄激素受体的药物筛选和生物学测试'],
    image: importImage('people_jianingliao.png'),
    education: [],
    awards: [],
    papers: [],
  },
  {
    name_cn: '朱屹恒',
    name_en: 'Yiheng Zhu',
    title_cn: '研究员',
    title_en: 'Researcher',
    email: 'zhuyiheng@zgci.ac.cn',
    location_cn: '北京中关村学院导师/中关村人工智能研究院',
    location_en: 'Beijing Zhongguancun College/Zhongguancun Institute of Artificial Intelligence',
    research_direction: ['深度生成模型', '药物发现', '蛋白质设计'],
    image: importImage('people_yihengzhu.png'),
    education: [
      {
        description_cn: '2016年9月至2020年7月：云南大学，数学与统计学院，统计学专业，理学学士',
        description_en: 'Sep 2016 - Jul 2020: Yunnan University, School of Mathematics and Statistics, Bachelor of Science in Statistics',
      },
      {
        description_cn: '2020年9月至2025年7月：浙江大学，计算机科学与技术学院，计算机科学与技术专业，博士研究生',
        description_en: 'Sep 2020 - Jul 2025: Zhejiang University, College of Computer Science and Technology, PhD in Computer Science and Technology',
      },
      {
        description_cn: '2025年7月至今：北京中关村学院导师，中关村人工智能研究院研究员',
        description_en: 'Jul 2025 - present: Professor at Beijing Zhongguancun College, Researcher at Zhongguancun Institute of Artificial Intelligence',
      }
    ],
    awards: [],
    papers: [
      {
        title: 'Yiheng Zhu et al. Bridge-IF: Learning Inverse Protein Folding with Markov Bridges. NeurIPS 2024.',
        url: '',
      },
      {
        title: 'Yiheng Zhu et al. Sample-efficient Multi-objective Molecular Optimization with GFlowNets. NeurIPS 2023.',
        url: '',
      },
      {
        title: 'Yiheng Zhu et al. MolHF: A Hierarchical Normalizing Flow for Molecular Graph Generation. IJCAI 2023.',
        url: '',
      },
      {
        title: 'Yiheng Zhu et al. TGSA: protein-protein association-based twin graph neural networks for drug response prediction with similarity augmentation. Bioinformatics.',
        url: '',
      },
      {
        title: 'Yifei Liu, Yiheng Zhu et al. A Multi-objective Molecular Generation Method based on Pareto Algorithm and Monte Carlo Tree Search. Advanced Science.',
        url: '',
      }
    ],
  },
  {
    name_cn: '张昊天',
    name_en: 'Haotian Zhang',
    title_cn: '博士生',
    title_en: 'PhD Student',
    email: 'haotianzhang4science@gmail.com',
    location_cn: '香港中文大学',
    location_en: 'The Chinese University of Hong Kong',
    phone: '',
    description_url: 'https://haotianzhangai4science.github.io/',
    research_direction: [
      'AI-蛋白质设计、AI-小分子设计'
    ],
    research_direction_en: [
      'AI-protein design, AI-small molecule design'
    ],
    image: importImage('people_haotianzhang.png'),
    education: [
      {
        description_cn: '2018年9月至2022年7月：浙江大学，药学学士',
        description_en: 'Sep 2018 - Jul 2022: Zhejiang University, Bachelor in Pharmacy',
      },
      {
        description_cn: '2018年9月至2022年7月：浙江大学，物理学学士',
        description_en: 'Sep 2018 - Jul 2022: Zhejiang University, Bachelor in Physics',
      },
      {
        description_cn: '2022年9月至2022年7月：浙江大学，医学硕士（药学专业）',
        description_en: 'Sep 2022 - Jul 2024: Zhejiang University, Master in Medicine (Pharmacy)',
      },
      {
        description_cn: '2024年9月至2025年7月：华盛顿大学，计算机硕士（Ph.D. Transferred）',
        description_en: 'Sep 2024 - Jul 2025: University of Washington, Master in Computer Science (Ph.D. Transferred)',
      },
      {
        description_cn: '2025年9月至今：香港中文大学，计算机博士研究生',
        description_en: 'Sep 2025 - present: The Chinese University of Hong Kong, PhD in Computer Science',
      },
    ],
    awards: [],
    papers: [
      {
        title: 'Zhang, O., et al. ResGen is a pocket-aware 3D molecular generation model based on parallel multiscale modelling, Nature Machine Intelligence, 5, 1020–1030 (2023).',
        url: '',
      },
      {
        title: 'Zhang, O.*, Tianyue Wang*, et al. Learning on topological surface and geometric structure for 3D molecular generation, Nature Computational Science,3.10 (2023): 849-859.',
        url: '',
      },
      {
        title: 'Zhang, O.*, Jieyu Jin.*, ECloudGen: Access to Broader Chemical Space for Structure-based Molecule Generation. Nature Computational Science, (2025).',
        url: '',
      },
      {
        title: 'Zhao, H., Zhang, O., Pushing the Boundaries of Protein-peptide Docking with Rational and Accurate Diffusion Generative Model. Nature Machine Intelligence, (2025). (通訊作者)',
        url: '',
      },
      {
        title: 'Chen, S., Zhang, O.*, et al. Deep lead optimization enveloped in protein pocket and its application in designing potent and selective ligands targeting LTK protein. Nature Machine Intelligence, 7, 448–458 (2025).',
        url: '',
      },
    ],
  },
]

export const simple_alumni = [
  {
    name_cn: '张忆雪',
    name_en: 'Yixue Zhang',
    title_cn: '硕士研究生，2022.9-2025.6',
    title_en: 'Master Student, 2022.9-2025.6',
  },
  {
    name_cn: '聂豆',
    name_en: 'Dou Nie',
    title_cn: '硕士研究生，2021.9-2024.6',
    title_en: 'Master Student, 2021.9-2024.6',
  },
  {
    name_cn: '熊启松',
    name_en: 'Qisong Xiong',
    title_cn: '硕士研究生，2021.9-2024.6',
    title_en: 'Master Student, 2021.9-2024.6',
  },
  {
    name_cn: '徐婉婷',
    name_en: 'Wanting Xu',
    title_cn: '硕士研究生，2021.9-2024.6',
    title_en: 'Master Student, 2021.9-2024.6',
  },
  {
    name_cn: '刘天涛',
    name_en: 'Tiantao Liu',
    title_cn: '硕士研究生，2021.9-2024.3',
    title_en: 'Master Student, 2021.9-2024.3',
  },
  {
    name_cn: '徐若兰',
    name_en: 'Ruolan Xu',
    title_cn: '硕士研究生，2020.9-2023.6',
    title_en: 'Master Student, 2020.9-2023.6',
  },
  {
    name_cn: '鲍灵杰',
    name_en: 'Lingjie Bao',
    title_cn: '硕士研究生，2020.9-2023.6',
    title_en: 'Master Student, 2020.9-2023.6',
  },
  {
    name_cn: '李坤',
    name_en: 'Kun Li',
    title_cn: '硕士研究生，2020.9-2023.6，现在中南大学（在读）',
    title_en: 'Master Student, 2020.9-2023.6, currently at Central South University (studying)',
  },
  {
    name_cn: '陈景志',
    name_en: 'Jingzhi Chen',
    title_cn: '博士后，2020.9-2023.7',
    title_en: 'Postdoctoral Researcher, 2020.9-2023.7',
  },
  {
    name_cn: '王斯羽',
    name_en: 'Siyu Wang',
    title_cn: '硕士研究生，2020.9-2024.6',
    title_en: 'Master Student, 2020.9-2024.6',
  },
  {
    name_cn: '于佳卉',
    name_en: 'Jiahui Yu',
    title_cn: '硕士研究生，2019.9-2022.6',
    title_en: 'Master Student, 2019.9-2022.6',
  },
  {
    name_cn: '赵红',
    name_en: 'Hong Zhao',
    title_cn: '硕士研究生，2019.9-2022.6',
    title_en: 'Master Student, 2019.9-2022.6',
  },
  {
    name_cn: '杨柳',
    name_en: 'Liu Yang',
    title_cn: '硕士研究生，2019.9-2022.3',
    title_en: 'Master Student, 2019.9-2022.3',
  },
  {
    name_cn: '杨浩',
    name_en: 'Hao Yang',
    title_cn: '硕士研究生，2019.9-2022.3',
    title_en: 'Master Student, 2019.9-2022.3',
  },
  {
    name_cn: '高俊博',
    name_en: 'Junbo Gao',
    title_cn: '博士后，2018-2021',
    title_en: 'Postdoctoral Researcher, 2018-2021',
  },
  {
    name_cn: '雷艺璇',
    name_en: 'Yixuan Lei',
    title_cn: '硕士研究生，2018.9-2021.3',
    title_en: 'Master Student, 2018.9-2021.3',
  },
  {
    name_cn: '郭雪莹',
    name_en: 'Xueying Guo',
    title_cn: '硕士研究生，2017.9-2021.3',
    title_en: 'Master Student, 2017.9-2021.3',
  },
  {
    name_cn: '谢天立',
    name_en: 'Tianli Xie',
    title_cn: '硕士研究生，2017-2020',
    title_en: 'Master Student, 2017-2020',
  },
  {
    name_cn: '汤钦',
    name_en: 'Qin Tang',
    title_cn: '硕士研究生，2017-2020',
    title_en: 'Master Student, 2017-2020',
  },
  {
    name_cn: '汤心怡',
    name_en: 'Xinyi Tang',
    title_cn: '硕士研究生，2016-2019',
    title_en: 'Master Student, 2016-2019',
  },
  {
    name_cn: '金晔',
    name_en: 'Ye Jin',
    title_cn: '硕士研究生，2016-2019',
    title_en: 'Master Student, 2016-2019',
  },
  {
    name_cn: '王旭文',
    name_en: 'Xuwen Wang',
    title_cn: '博士研究生，2016-2020',
    title_en: 'PhD Student, 2016-2020',
  },
  {
    name_cn: '尚俊',
    name_en: 'Jun Shang',
    title_cn: '硕士研究生，2015-2017',
    title_en: 'Master Student, 2015-2017',
  },
  {
    name_cn: '封婷',
    name_en: 'Ting Feng',
    title_cn: '硕士研究生，2015-2018',
    title_en: 'Master Student, 2015-2018',
  },
  {
    name_cn: '王双全',
    name_en: 'Shuangquan Wang',
    title_cn: '硕士研究生，2014-2017',
    title_en: 'Master Student, 2014-2017',
  },
  {
    name_cn: '周文方',
    name_en: 'Wenfang Zhou',
    title_cn: '博士研究生，2013-2018',
    title_en: 'PhD Student, 2013-2018',
  },
  {
    name_cn: '石华丽',
    name_en: 'Huali Shi',
    title_cn: '硕士研究生，2012-2015',
    title_en: 'Master Student, 2012-2015',
  },
  {
    name_cn: '关妍',
    name_en: 'Yan Guan',
    title_cn: '硕士研究生，2012-2015',
    title_en: 'Master Student, 2012-2015',
  },
  {
    name_cn: '周顺晔',
    name_en: 'Shunye Zhou',
    title_cn: '硕士研究生，2011-2014',
    title_en: 'Master Student, 2011-2014',
  },
  {
    name_cn: '陈磊',
    name_en: 'Lei Chen',
    title_cn: '硕士研究生，2010-2013',
    title_en: 'Master Student, 2010-2013',
  },
  {
    name_cn: '李琳',
    name_en: 'Lin Li',
    title_cn: '硕士研究生，2010-2013',
    title_en: 'Master Student, 2010-2013',
  },
  {
    name_cn: '王偲超',
    name_en: 'Cichao Wang',
    title_cn: '硕士研究生，2010-2013',
    title_en: 'Master Student, 2010-2013',
  },
  {
    name_cn: '曹东跃',
    name_en: 'Dongyue Cao',
    title_cn: '硕士研究生，2009-2012',
    title_en: 'Master Student, 2009-2012',
  }
]

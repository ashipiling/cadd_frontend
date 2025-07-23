// Define categories for software (titles will be fetched from i18n)
export const categories = [
  { id: 'databases' },
  { id: 'molecularFeaturization' },
  { id: 'QSARModeling' },
  { id: 'ADMETPrediction' },
  { id: 'DeNovoDrugDesign' },
  { id: 'bindingFreeEnergyPrediction' },
  { id: 'proteinLigandDocking' },
  { id: 'proteinProteinDocking' },
  { id: 'proteinPeptideDocking' },
  { id: 'proteinStructurePrediction' },
  { id: 'molecularImageRecognition' },
  { id: 'reverseSynthesis' },
  { id: 'drugDesignTools' }
]

// Software data organized by categories
export const softwareData = {
  databases: [
    {
      name: 'PROTAC-DB',
      description_en: 'The first web-accessible PROTACs database',
      description_cn: '首个可网络访问的PROTAC数据库',
      link: 'http://cadd.zju.edu.cn/protacdb/',
      citation: 'Nucleic acids research, 2021, 49(D1), D1122-D1129; Nucleic acids research, 2024, 53(D1), D1322-D1327; Nucleic Acids Research, 2025, 53(D1), D1510-D1515'
    },
    {
      name: 'CovalentInDB',
      description_en: 'The largest web-accessible resource for covalent inhibitors and related targets',
      description_cn: '最大的可网络访问的共价抑制剂及相关靶点资源库',
      link: 'http://cadd.zju.edu.cn/cidb/',
      citation: 'Nucleic acids research, 49(D1), D1122-D1129'
    },
    {
      name: 'DDInter',
      description_en: 'A comprehensive, professional, and open-access database specific to drug-drug interactions',
      description_cn: '一个全面的、专业的、开放获取的药物-药物相互作用数据库',
      link: 'http://ddinter.scbdd.com/',
      citation: 'Nucleic acids research, 2022, 50(D1): D1200-D1207'
    },
    {
      name: 'VGSC',
      description_en: 'The largest professional online database of voltage-gated sodium channels',
      description_cn: '最大的电压门控钠离子通道专业在线数据库',
      link: 'http://cadd.zju.edu.cn/vgsc/',
      citation: 'J Cheminformatics, 2022, 14, 75'
    }
  ],
  molecularFeaturization: [
    {
      name: 'BioMedR',
      description_en: 'An R/CRAN package for integrated data analysis pipeline in biomedical study',
      description_cn: '用于生物医学研究中集成数据分析流程的R/CRAN包',
      link: 'https://cran.r-project.org/web/packages/BioMedR/',
      citation: 'Briefings in bioinformatics, 2021, 22(1): 474-484'
    },
    {
      name: 'Scopy',
      description_en: 'An integrated negative design Python library for desirable HTS/VS database design',
      description_cn: '用于理想HTS/VS数据库设计的集成负向设计Python库',
      link: 'https://github.com/kotori-y/Scopy/',
      citation: 'Briefings in Bioinformatics, 2021, 22(3): bbaa194'
    },
    {
      name: 'PySmash',
      description_en: 'Python package and individual executable program for representative substructure generation and application',
      description_cn: 'Python包和独立可执行程序，用于代表性子结构生成和应用',
      link: 'https://github.com/kotori-y/pySmash/',
      citation: 'Briefings in Bioinformatics, 2021, 22(5): bbab017'
    }
  ],
  QSARModeling: [
    {
      name: 'MGA',
      description_cn: '一种用于QSAR建模的多任务图注意力框架',
      description_en: 'A multitask graph attention framework',
      link: 'https://github.com/wzxxxx/MGA/',
      citation: 'Journal of Medicinal Chemistry, 2021, 64(10), 6924-6936'
    },
    {
      name: 'BAN',
      description_cn: '一种基于新型多步注意力机制和SMILES枚举的BiLSTM注意力网络框架',
      description_en: 'A BiLSTM attention network based on a novel multi-step attention mechanism and SMILES enumeration',
      link: 'https://github.com/zhang-xuan1314/SMILES-BiLSTM-attention-network/',
      citation: 'Briefings in Bioinformatics, 2021, 22(6), bbab327'
    },
    {
      name: 'MG-BERT',
      description_cn: '一种基于分子图的无监督原子表示学习方法',
      description_en: 'An atomic representation learning model based on molecular graphs',
      link: 'https://github.com/zhang-xuan1314/Molecular-graph-BERT/',
      citation: 'Briefings in Bioinformatics, 2021, 22(6), bbab152'
    },
    {
      name: 'MTL-BERT',
      description_cn: '一种基于大规模预训练、多任务学习及SMILES枚举增强多任务学习BERT框架',
      description_en: 'A multitask learning BERT framework based on large-scale pre-training, multitask learning, and SMILES enumeration',
      link: 'https://github.com/zhang-xuan1314/MTL-BERT',
      citation: 'Research, 2022, 5, 0004'
    },
    {
      name: 'MolMCL',
      description_cn: '一种基于提示引导多通道学习框架的表征学习方法',
      description_en: 'A prompt-guided multi-channel learning framework for molecular representation learning',
      link: 'https://github.com/yuewan2/MolMCL',
      citation: 'Nature Communications, 2025, 16, 413'
    },
    {
      name: 'SME',
      description_cn: '一种基于子结构掩盖的可解释性方法',
      description_en: 'A Substructure-Masking-Based Explainability Method',
      link: 'https://github.com/wzxxxx/Substructure-Mask-Explanation',
      citation: 'Nature Communications, 2023, 14, 2585'
    },
  ],
  ADMETPrediction: [
    {
      name: 'OptADMET',
      description_cn: '用于化合物ADMET性质优化的网络计算平台',
      description_en: 'A web-based tool for substructure modifications to improve ADMET properties of lead compounds',
      link: 'https://cadd.nscc-tj.cn/deploy/optadmet/',
      citation: 'Nature Protocols, 2024, 19(4), 1105-1121'
    },
    {
      name: 'ADMETlab 3.0',
      description_cn: '用于成药性和毒性预测的网络计算平台ADMETlab 3.0',
      description_en: 'An updated comprehensive online ADMET prediction platform enhanced with broader coverage, improved performance, API functionality and decision support',
      link: 'https://admetlab3.scbdd.com/',
      citation: 'Nucleic Acids Research, 2024, 52(W1), W422-W431'
    },
    {
      name: 'ADMETlab 2.0',
      description_cn: '用于成药性和毒性预测的网络计算平台ADMETlab 2.0',
      description_en: 'An enhanced version of the widely used ADMETlab for systematical evaluation of ADMET properties, as well as some physicochemical properties and medicinal chemistry friendliness',
      link: 'https://admetmesh.scbdd.com/',
      citation: 'Nucleic Acids Research, 2021, 49, W5-W14'
    },
    {
      name: 'ChemAGG',
      description_cn: '可用小分子聚集预测的网络计算平台',
      description_en: 'A free web server that could be used to easily filter out aggregators from potential lead molecules',
      link: 'https://admet.scbdd.com/ChemAGG/index/',
      citation: 'Journal of Chemical Information and Modeling, 2019, 59(9), 3714-3726'
    },
    {
      name: 'ChemFluo',
      description_cn: '可用蓝色和绿色荧光化合物预测的网络计算平台',
      description_en: 'A public web server which could be useful to flag blue and green fluorescent compounds in large dataset',
      link: 'https://admet.scbdd.com/chemfluo/index/',
      citation: 'Briefings in Bioinformatics, 2021, 22(4), bbaa282'
    },
    {
      name: 'GASA',
      description_cn: '基于小分子合成可及性评估（GASA）的网络计算工具',
      description_en: 'A free web server for Graph Attention-based assessment of Synthetic Accessibility (GASA)',
      link: 'http://cadd.zju.edu.cn/gasa/',
      citation: 'Journal of Chemical Information and Modeling, 2022, 62(12), 2973-2986'
    }
  ],
  DeNovoDrugDesign: [
    {
      name: 'MCMG',
      description_cn: '一种基于Transformer、知识蒸馏和强化学习的多约束分子生成方法',
      description_en: 'A multi-constrained molecular generation method based on conditional Transformer, knowledge distillation, and reinforcement learning',
      link: 'https://github.com/jkwang93/MCMG',
      citation: 'Nature Machine Intelligence, 2021, 3, 914-922'
    },
    {
      name: 'ChemistGA', 
      description_cn: '一种用于现实药物发现的化学可合成可及分子生成算法',
      description_en: 'A chemical synthesizable accessible molecular generation algorithm for real-world drug discovery',
      link: 'https://github.com/jkwang93/ChemistGA',
      citation: 'Journal of Medicinal Chemistry, 2022, 65, 12482-12496'
    },
    {
      name: 'RELATION',
      description_cn: '一种基于双向迁移学习的全新药物生成模型',
      description_en: 'A bidirectional transfer learning-based deep generative model for structure-based de novo drug design',
      link: 'https://github.com/micahwang/RELATION',
      citation: 'Journal of Medicinal Chemistry, 2022, 65, 9478-9492'
    },
    {
      name: 'ResGen',
      description_cn: '一种基于并行多尺度建模的结合口袋感知三维分子生成模型',
      description_en: 'A parallel multiscale based model for pocket-aware 3D molecular generation',
      link: 'https://github.com/OdinZhang/ResGen',
      citation: 'Nature Machine Intelligence, 2023, 5, 1020-1030'
    },
    {
      name: 'SurfGen', 
      description_cn: '一种基于拓扑表面与几何结构特征学习模型的三维分子生成方法',
      description_en: 'A 3D Molecular Generation Method Based on a Learning Model of Topological Surface and Geometric Structure',
      link: 'https://github.com/OdinZhang/SurfGen',
      citation: 'Nature Computational Science, 2023, 3, 849–859'
    },
    {
      name: 'FFLOM',
      description_cn: '一种基于流式自回归模型的先导化合物优化方法',
      description_en: 'A Flow-Based Autoregressive Model for Fragment-to-Lead Optimization',
      link: 'https://github.com/JenniferKim09/FFLOM',
      citation: 'Journal of Medicinal Chemistry, 2023, 66, 10808-10823'
    },
    {
      name: '3DSMILES-GPT',
      description_cn: '一种基于词元化语言模型的蛋白口袋感知3D分子生成方法',
      description_en: 'A token-only large language based 3D molecular pocket-based generation model',
      link: 'https://github.com/ashipiling/GPT_3DSMILES',
      citation: 'Chemical Science, 2024, 16, 637-648'
    },
    {
      name: 'ClickGen',
      description_cn: '一种基于模块化反应和强化学习的分子生成模型',
      description_en: 'A modular reactions and reinforcement learning based generative model',
      link: 'https://github.com/mywang1994/cligen_gen',
      citation: 'Nature Communications, 2024, 15, 10127'
    },
    {
      name: 'DiffBP',
      description_cn: '一种面向靶蛋白口袋的三维分子生成模型',
      description_en: 'A generative diffusion framework for 3D molecular design targeting protein binding sites',
      link: 'https://drive.google.com/drive/folders/1bSDoQBERjXXvwAFRscuZXcyiKAyjRHuI?usp=sharing',
      citation: 'Chemical Science, 2025, 16, 1417-1431'
    },
    {
      name: 'Delete',
      description_cn: '一种通过统一删除策略与结构感知网络进行蛋白口袋内先导化合物优化的模型',
      description_en: 'A protein pocket-embedded deep lead optimization model based on a structure-aware network and unified deletion strategies',
      link: 'https://github.com/OdinZhang/Delete',
      citation: 'Nature Machine Intelligence, 2025, 7, 448–458'
    }
  ],
  bindingFreeEnergyPrediction: [
    {
      name: 'CaFE',
      description_cn: '基于端点自由能方法进行蛋白-配体结合亲和力预测的VMD插件',
      description_en: 'A VMD plugin for binding affinity prediction using end-point free energy methods',
      link: 'https://github.com/HuiLiuCode/CaFE_Plugin/',
      citation: 'Bioinformatics, 2016, 32(14), 2216-2218'
    },
    {
      name: 'fastDRH', 
      description_cn: '基于分子对接和MM/PB(GB)SA方法预测和分析蛋白质-配体相互作用的网络计算平台',
      description_en: 'A web server to predict and analyze protein-ligand complexes based on molecular docking and MM/PB(GB)SA computation',
      link: 'http://cadd.zju.edu.cn/fastdrh/overview/',
      citation: 'Briefings in Bioinformatics, 2022, 23(5), bbac201'
    }
  ],
  proteinLigandDocking: [
    {
      name: 'KarmaDock',
      description_cn: '基于深度学习的超高通量分子对接框架',
      description_en: 'A deep learning paradigm for ultra-large library docking with fast speed and high accuracy',
      link: 'https://github.com/schrojunzhang/KarmaDock/',
      citation: 'Nature Computational Science, 2023, 3(9), 789-804'
    },
    {
      name: 'CarsiDock',
      description_cn: '基于大规模预训练的高精度蛋白质-配体对接和方法',
      description_en: 'A deep learning paradigm for accurate protein–ligand docking and screening based on large-scale pre-training',
      link: 'https://github.com/carbonsilicon-ai/CarsiDock/',
      citation: 'Chemical Science, 2024, 15(4), 1449-1471'
    },
    {
      name: 'MetalProGNet',
      description_cn: '一种基于三维分子图的金属蛋白-配体相互作用打分方法',
      description_en: 'A structure-based deep graph model for metalloprotein-ligand interaction predictions',
      link: 'https://github.com/zjujdj/MetalProGNet/',
      citation: 'Chemical Science, 2023, 14(8), 2054-2069'
    },
    {
      name: 'RTMScore',
      description_cn: '一种基于残基-原子距离似然势和混合密度网络的蛋白质-配体打分函数',
      description_en: 'A protein-ligand scoring function based on residue-atom distance likelihood potential and graph transformer',
      link: 'https://github.com/sc8668/RTMScore/',
      citation: 'Journal of Medicinal Chemistry, 2022, 65(15), 10691-10706'
    },
    {
      name: 'IGN',
      description_cn: '一种基于深度图表示学习的蛋白质-配体打分函数',
      description_en: 'A deep graph representation learning framework for protein−ligand interaction predictions',
      link: 'https://github.com/zjujdj/InteractionGraphNet/tree/master/',
      citation: 'Journal of Medicinal Chemistry, 2021, 64(24), 18209-18232'
    },
    {
      name: 'ML-PLIC',
      description_cn: '用于开发个性化打分函数的网络计算平台',
      description_en: 'A web server for the development of customized scoring functions',
      link: 'http://cadd.zju.edu.cn/plic/',
      citation: 'Briefings in Bioinformatics, 2023, 24(5), bbad295'
    }
  ],
  proteinProteinDocking: [
    {
      name: 'HawkDock',
      description_cn: '用于蛋白-蛋白对接和相互作用分析的网络计算平台',
      description_en: 'A web server for protein-protein docking and interaction analysis',
      link: 'http://cadd.zju.edu.cn/hawkdock/',
      citation: 'Nucleic Acids Research, 2019, 47(W1), W322-W330'
    }
  ],
  proteinPeptideDocking: [
    {
      name: 'RAPiDock',
      description_cn: '一种基于扩散生成模型的蛋白-多肽对接方法',
      description_en: 'A protein-peptide docking approach based on diffusion generative model',
      link: 'https://github.com/huifengzhao/RAPiDock',
      citation: 'Nature Machine Intelligence, 2025, in press'
    }
  ],
  proteinStructurePrediction: [
    {
      name: 'KarmaLoop',
      description_cn: '一种基于深度学习的蛋白loop区全原子结构预测方法',
      description_en: 'A DL-based method for full-atom loop modeling',
      link: 'https://github.com/karma211225/KarmaLoop',
      citation: 'Research, 2024, 7, 0408'
    }
  ],
  molecularImageRecognition: [
    {
      name: 'ABC-Net',
      description_cn: '基于分而治之策略的分子图像识别方法',
      description_en: 'A molecular image recognition method based on the divide-and-conquer principle',
      link: 'https://github.com/zhang-xuan1314/ABC-Net/',
      citation: 'Briefings in Bioinformatics, 2022, 23(2), bbac033'
    },
    {
      name: 'MICER', 
      description_cn: '一种基于编码器-解码器架构的分子图像识别方法',
      description_en: 'An encoder-decoder-based architecture for molecular image captioning',
      link: 'https://github.com/Jiacai-Yi/MICER/',
      citation: 'Bioinformatics, 2022, 38(19), 4562-4572'
    }
  ],
  reverseSynthesis: [
    {
      name: 'Parrot',
      description_cn: '一种基于预训练Transformer技术的通用反应条件预测算法',
      description_en: 'A generic reaction condition prediction algorithm based on pretrained Transformer technology',
      link: 'https://github.com/wangxr0526/Parrot',
      citation: 'Research, 2023, 6, 0231'
    },
    {
      name: 'Egret',
      description_cn: '一种基于预训练对比学习 BERT 架构的通用反应产率预测算法',
      description_en: 'A generic reaction yield prediction algorithm based on a pretrained contrastive learning BERT architecture',
      link: 'https://github.com/xiaodanyin/Egret',
      citation: 'Research, 2024, 7, 0292'
    },
    {
      name: 'HiCLR',
      description_cn: '一种融合领域知识的反应表示学习基础算法',
      description_en: 'A knowledge-enhanced foundational algorithm for reaction representation learning',
      link: 'https://github.com/wujialu/HiCLR',
      citation: 'JACS Au, 2025, in press'
    },
    {
      name: 'EditRetro',
      description_cn: '一种基于序列编辑策略的单步逆合成预测算法',
      description_en: 'A iterative-string-editing-based algorithm for single-step retrosynthesis prediction',
      link: 'https://github.com/yuqianghan/editretro',
      citation: 'Nature Communications, 2024, 15, 6404'
    },
    {
      name: 'SynCluster',
      description_cn: '一种用于合成规划的反应类型聚类与推荐框架',
      description_en: 'A Reaction Type Clustering and Recommendation Framework for Synthesis Planning',
      link: 'https://github.com/Tiantao2000/SynCluster',
      citation: 'JACS Au, 2023, 3, 3446-3461'
    }
  ],
  drugDesignTools: [
    {
      name: 'Token-Mol1.0',
      description_cn: '一种融合LLM token化技术与结构感知编码的3D药物设计算法',
      description_en: 'An algorithm for 3D drug design integrating LLM tokenization and structure-aware encoding',
      link: 'https://github.com/jkwang93/Token-Mol',
      citation: 'Nature Communications, 2025, 16, 4416'
    },
    {
      name: 'EasIFA',
      description_cn: '一种基于多模态深度学习技术的酶活性位点标注算法',
      description_en: 'An enzyme active site annotation algorithm based on multi-modal and deep learning techniques',
      link: 'http://cadd.zju.edu.cn/easifa/',
      code: 'https://github.com/wangxr0526/EasIFA',
      citation: 'Nature Communications, 2024, 15, 7348'
    },
    {
      name: 'KIP',
      description_cn: '一个可同时预测小分子对204种蛋白激酶抑制活性的在线服务器',
      description_en: 'A web server to predict the inhibitory activity of small molecules against 204 protein kinases simultaneously',
      link: 'http://cadd.zju.edu.cn/kip/',
      citation: 'Acta Pharmaceutica Sinica B, 2023, 13(1), 54-67'
    },
    {
      name: 'farPPI',
      description_cn: '一种基于MM/PB(GB)SA方法的蛋白-配体结合结构预测方法',
      description_en: 'A web server for accurate prediction of protein-ligand binding structures for small-molecule PPI inhibitors by MM/PB(GB)SA methods',
      link: 'http://cadd.zju.edu.cn/farppi/',
      citation: 'Bioinformatics, 2019, 35(10), 1777-1779'
    },
    {
      name: 'ChemTB',
      description_cn: '一种基于人工智能的结核杆菌活性分子识别方法',
      descriptio_en: 'A web server to identify active molecules against mycobacterium tuberculosis through artificial intelligence',
      link: 'http://cadd.zju.edu.cn/chemtb/',
      citation: 'Briefings in Bioinformatics, 2021, 22(5), bbab068'
    },
    {
      name: 'DeepChargPredictor',
      description_cn: '一种基于先进机器学习算法的量子力学原子电荷预测方法',
      description_en: 'A web server for predicting QM-based atomic charges via state-of-the-art machine-learning algorithms',
      link: 'http://cadd.zju.edu.cn/deepchargepredictor/',
      citation: 'Bioinformatics, 2021, 37(22), 4255-4257'
    },
    {
      name: 'SDEGen',
      description_cn: '一种基于热力学噪声演化学习模型的分子构象生成方法',
      description_en: 'A molecular conformation generation method based on a learning model of thermodynamic noise evolution',
      link: 'https://github.com/HaotianZhangAI4Science/SDEGen',
      citation: 'Chemical Science, 2023, 14, 1557-1568'
    }
  ]
}

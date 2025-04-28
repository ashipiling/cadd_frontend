// Define categories for software
export const categories = [
  { id: 'databases', title: '数据库' },
  { id: 'molecular', title: '分子表征' },
  { id: 'qsar', title: 'QSAR建模' },
  { id: 'admet', title: '成药性预测' },
  { id: 'docking', title: '蛋白-配体对接' },
  { id: 'binding', title: '结合自由能预测' },
  { id: 'design', title: '全新药物设计' },
  { id: 'ppi', title: '蛋白-蛋白对接' },
  { id: 'recognition', title: '分子图片识别' },
  { id: 'tools', title: '药物设计工具' }
]

// Software data organized by categories
export const softwareData = {
  databases: [
    {
      name: 'PROTAC-DB',
      description: 'The first web-accessible PROTACs database',
      link: 'http://cadd.zju.edu.cn/protacdb/',
      citation: 'Nucleic Acids Research, 2021, 49(D1), D1381-D1387; Nucleic Acids Research, 2023, 51(D1), D1367-D1372'
    },
    {
      name: 'CovalentInDB',
      description: 'The largest web-accessible resource for covalent inhibitors and related targets',
      link: 'http://cadd.zju.edu.cn/cidb/',
      citation: 'Nucleic acids research, 49(D1), D1122–D1129'
    },
    {
      name: 'DDInter',
      description: 'A comprehensive, professional, and open-access database specific to drug-drug interactions',
      link: 'http://ddinter.scbdd.com/',
      citation: 'Nucleic acids research, 2022, 50(D1): D1200-D1207'
    },
    {
      name: 'VGSC',
      description: 'The largest professional online database of voltage-gated sodium channels',
      link: 'http://cadd.zju.edu.cn/vgsc/',
      citation: 'J Cheminformatics, 2022, 14, 75'
    }
  ],
  molecular: [
    {
      name: 'BioMedR',
      description: 'An R/CRAN package for integrated data analysis pipeline in biomedical study',
      link: 'https://cran.r-project.org/web/packages/BioMedR/',
      citation: 'Briefings in bioinformatics, 2021, 22(1): 474-484'
    },
    {
      name: 'Scopy',
      description: 'An integrated negative design Python library for desirable HTS/VS database design',
      link: 'https://github.com/kotori-y/Scopy/',
      citation: 'Briefings in Bioinformatics, 2021, 22(3): bbaa194'
    },
    {
      name: 'PySmash',
      description: 'Python package and individual executable program for representative substructure generation and application',
      link: 'https://github.com/kotori-y/pySmash/',
      citation: 'Briefings in Bioinformatics, 2021, 22(5): bbab017'
    }
  ],
  qsar: [
    {
      name: 'MGA',
      description: 'Mining Toxicity Information from Large Amounts of Toxicity Data',
      link: 'https://github.com/wzxxxx/MGA/',
      citation: 'Journal of Medicinal Chemistry, 2021, 64(10), 6924-6936'
    },
    {
      name: 'BAN',
      description: 'Learning to SMILES: BAN-based strategies to improve latent representation learning from molecules',
      link: 'https://github.com/zhang-xuan1314/SMILES-BiLSTM-attention-network/',
      citation: 'Briefings in Bioinformatics, 2021, 22(6), bbab327'
    },
    {
      name: 'MG-BERT',
      description: 'Leveraging unsupervised atomic representation learning for molecular property prediction',
      link: 'https://github.com/zhang-xuan1314/Molecular-graph-BERT/',
      citation: 'Briefings in Bioinformatics, 2021, 22(6), bbab152'
    },
    {
      name: 'HRGCN+',
      description: 'Hyperbolic relational graph convolution networks plus: a simple but highly efficient QSAR-modeling method',
      link: 'https://quantum.tencent.com/hrgcn/',
      citation: 'Briefings in Bioinformatics, 2021, 22(5), bbab112'
    }
  ],
  admet: [
    {
      name: 'OptADMET',
      description: 'A web-based tool for substructure modifications to improve ADMET properties of lead compounds',
      link: 'https://cadd.nscc-tj.cn/deploy/optadmet/',
      citation: 'Nature Protocols, 2024, 19(4), 1105-1121'
    },
    {
      name: 'ADMETlab 3.0',
      description: 'An updated comprehensive online ADMET prediction platform enhanced with broader coverage, improved performance, API functionality and decision support',
      link: 'https://admetlab3.scbdd.com/',
      citation: 'Nucleic Acids Research, 2024, 52(W1), W422-W431'
    },
    {
      name: 'ADMETlab 2.0',
      description: 'An enhanced version of the widely used ADMETlab for systematical evaluation of ADMET properties, as well as some physicochemical properties and medicinal chemistry friendliness',
      link: 'https://admetmesh.scbdd.com/',
      citation: 'Nucleic Acids Research, 2021, 49, W5-W14'
    },
    {
      name: 'ChemAGG',
      description: 'A free web server that could be used to easily filter out aggregators from potential lead molecules',
      link: 'https://admet.scbdd.com/ChemAGG/index/',
      citation: 'Journal of Chemical Information and Modeling, 2019, 59(9), 3714-3726'
    },
    {
      name: 'ChemFluo',
      description: 'A public web server which could be useful to flag blue and green fluorescent compounds in large dataset',
      link: 'https://admet.scbdd.com/chemfluo/index/',
      citation: 'Briefings in Bioinformatics, 2021, 22(4), bbaa282'
    },
    {
      name: 'GASA',
      description: 'A free web server for Graph Attention-based assessment of Synthetic Accessibility (GASA)',
      link: 'http://cadd.zju.edu.cn/gasa/',
      citation: 'Journal of Chemical Information and Modeling, 2022, 62(12), 2973-2986'
    },
    {
      name: 'Drug-logS',
      description: 'A program freely distributed to the public for the estimation of aqueous solubility',
      link: 'http://modem.ucsd.edu/adme/',
      citation: 'Journal of chemical information and computer sciences, 2004, 44(1), 266-275'
    }
  ],
  docking: [
    {
      name: 'KarmaDock',
      description: 'A deep learning paradigm for ultra-large library docking with fast speed and high accuracy',
      link: 'https://github.com/schrojunzhang/KarmaDock/',
      citation: 'Nature Computational Science, 2023, 3(9), 789-804'
    },
    {
      name: 'CarsiDock',
      description: 'A deep learning paradigm for accurate protein–ligand docking and screening based on large-scale pre-training',
      link: 'https://github.com/carbonsilicon-ai/CarsiDock/',
      citation: 'Chemical Science, 2024, 15(4), 1449-1471'
    },
    {
      name: 'MetalProGNet',
      description: 'A structure-based deep graph model for metalloprotein-ligand interaction predictions',
      link: 'https://github.com/zjujdj/MetalProGNet/',
      citation: 'Chemical Science, 2023, 14(8), 2054-2069'
    },
    {
      name: 'RTMScore',
      description: 'A protein-ligand scoring function based on residue-atom distance likelihood potential and graph transformer',
      link: 'https://github.com/sc8668/RTMScore/',
      citation: 'Journal of Medicinal Chemistry, 2022, 65(15), 10691-10706'
    },
    {
      name: 'IGN',
      description: 'A deep graph representation learning framework for protein−ligand interaction predictions',
      link: 'https://github.com/zjujdj/InteractionGraphNet/tree/master/',
      citation: 'Journal of Medicinal Chemistry, 2021, 64(24), 18209-18232'
    },
    {
      name: 'ML-PLIC',
      description: 'A web server for the development of customized scoring functions',
      link: 'http://cadd.zju.edu.cn/plic/',
      citation: 'Briefings in Bioinformatics, 2023, 24(5), bbad295'
    }
  ],
  binding: [
    {
      name: 'CaFE',
      description: 'A VMD plugin for binding affinity prediction using end-point free energy methods',
      link: 'https://github.com/HuiLiuCode/CaFE_Plugin/',
      citation: 'Bioinformatics, 2016, 32(14), 2216-2218'
    },
    {
      name: 'fastDRH',
      description: 'A web server to predict and analyze protein-ligand complexes based on molecular docking and MM/PB(GB)SA computation',
      link: 'http://cadd.zju.edu.cn/fastdrh/overview/',
      citation: 'Briefings in Bioinformatics, 2022, 23(5), bbac201'
    }
  ],
  design: [
    {
      name: 'MCMG',
      description: 'A multi-constraints molecular generation approach based on conditional transformer and reinforcement learning',
      link: 'https://github.com/jkwang93/MCMG/',
      citation: 'Nature Machine Intelligence, 2021, 3(10), 914-922'
    },
    {
      name: 'ChemistGA',
      description: 'A Chemical Synthesizable Accessible Molecular Generation Algorithm for Real-World Drug Discovery',
      link: 'https://github.com/jkwang93/ChemistGA/',
      citation: 'Journal of Medicinal Chemistry, 2022, 65(18), 12482-12496'
    },
    {
      name: 'RELATION',
      description: 'A Deep Generative Model for Structure-based De Novo Drug Design',
      link: 'https://github.com/micahwang/RELATION/',
      citation: 'Journal of Medicinal Chemistry, 2022, 65(13), 9478-9492'
    }
  ],
  ppi: [
    {
      name: 'HawkDock',
      description: 'A web server for the structural prediction and analysis of protein-protein complex',
      link: 'http://cadd.zju.edu.cn/hawkdock/',
      citation: 'Nucleic Acids Research, 2019, 47(W1), W322-W330'
    }
  ],
  recognition: [
    {
      name: 'ABC-Net',
      description: 'A deep learning architecture for SMILES recognition from molecular images',
      link: 'https://github.com/zhang-xuan1314/ABC-Net/',
      citation: 'Briefings in Bioinformatics, 2022, 23(2), bbac033'
    },
    {
      name: 'MICER',
      description: 'A pre-trained encoder-decoder architecture for molecular image captioning',
      link: 'https://github.com/Jiacai-Yi/MICER/',
      citation: 'Bioinformatics, 2022, 38(19), 4562-4572'
    }
  ],
  tools: [
    {
      name: 'DrugFlow',
      description: 'An AI-Driven One-Stop Platform for Innovative Drug Discovery.',
      link: 'https://drugflow.com/',
      citation: 'Journal of Chemical Information and Modeling, 2024, 64(14), 5381–5391'
    },
    {
      name: 'KIP',
      description: 'A web server to predict the inhibitory activity of small molecules against 204 protein kinases simultaneously.',
      link: 'http://cadd.zju.edu.cn/kip/',
      citation: 'Acta Pharmaceutica Sinica B, 2023, 13(1), 54-67'
    },
    {
      name: 'farPPI',
      description: 'A web server for accurate prediction of protein-ligand binding structures for small-molecule PPI inhibitors by MM/PB(GB)SA methods',
      link: 'http://cadd.zju.edu.cn/farppi/',
      citation: 'Bioinformatics, 2019, 35(10), 1777-1779'
    },
    {
      name: 'ChemTB',
      description: 'A web server to identify active molecules against mycobacterium tuberculosis through artificial intelligence',
      link: 'http://cadd.zju.edu.cn/chemtb/',
      citation: 'Briefings in Bioinformatics, 2021, 22(5), bbab068'
    },
    {
      name: 'DeepChargPredictor',
      description: 'A web server for predicting QM-based atomic charges via state-of-the-art machine-learning algorithms',
      link: 'http://cadd.zju.edu.cn/deepchargepredictor/',
      citation: 'Bioinformatics, 2021, 37(22), 4255-4257'
    },
    {
      name: 'PROTAC-Model',
      description: 'Integrative modeling of PROTAC-mediated ternary complexes',
      link: 'https://github.com/gaoqiweng/PROTAC-Model/',
      citation: 'Journal of Medicinal Chemistry, 2021, 64(21), 16271-16281'
    }
  ]
}

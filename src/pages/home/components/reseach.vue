<template>
  <section class="py-16 bg-slate-950">
    <div class="container mx-auto px-4 md:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-100">{{ t('nav.research') }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(item, index) in researchItems" 
          :key="index" 
          class="bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300 overflow-hidden flex flex-col"
        >
          <img :src="importImage(item.image)" :alt="item.title_cn" class="w-full object-cover">
          <div class="p-6 flex flex-col flex-grow">
            <component :is="item.icon" class="w-12 h-12 text-primary mb-4" />
            <h3 class="text-xl font-semibold mb-2 text-gray-100" v-if="locale === 'zh-CN'">{{ item.title_cn }}</h3>
            <h3 class="text-xl font-semibold mb-2 text-gray-100" v-if="locale === 'en-US'">{{ item.title_en }}</h3>
            <p class="text-gray-400 text-sm flex-grow" v-if="locale === 'zh-CN'">{{ item.description_cn }}</p>
            <p class="text-gray-400 text-sm flex-grow" v-if="locale === 'en-US'">{{ item.description_en }}</p>
            <Button 
              @click="openDialog(item)"
              class="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200 flex items-center justify-center"
            >
              <span>{{ t('index.drugflow.features.viewDetails') }}</span>
              <ChevronRight class="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Dialog v-model:open="isOpen">
    <DialogContent class="bg-slate-800 border-slate-700 text-white max-w-5xl">
      <DialogHeader>
        <div class="flex items-center gap-4">
          <component :is="currentItem?.icon" class="w-12 h-12 text-primary" />
          <DialogTitle class="text-2xl font-bold text-white">{{ locale === 'zh-CN'? currentItem?.title_cn: currentItem?.title_en }}</DialogTitle>
        </div>
      </DialogHeader>
      
      <!-- Top section: Images left, text right -->
      <ScrollArea class="mt-6 h-[600px]">
        <div class="flex flex-col gap-8">
          <div v-for="(section, idx) in currentItem?.extended" :key="idx" class="relative">
            <div class="image-float-container" v-if="section?.image">
              <img 
                :src="importImage(section?.image)" 
                class="rounded-lg object-cover"
                :alt="section.description_cn"
              >
            </div>
            <div class="text-content">
              <p class="text-gray-300 text-base leading-relaxed" v-if="locale === 'zh-CN'">{{ section.description_cn }}</p>
              <p class="text-gray-300 text-base leading-relaxed" v-if="locale === 'en-US'">{{ section.description_en }}</p>
            </div>
            <div class="clear-both"></div>
          </div>
          
          <!-- References section -->
          <div v-if="currentItem?.references && currentItem.references.length > 0" class="mt-12 pt-8 border-t border-slate-700">
            <div class="mb-6">
              <h4 class="text-xl font-semibold text-white flex items-center gap-2">
                <div class="w-1 h-6 bg-primary rounded-full"></div>
                {{ t('software.reference') }}
              </h4>
            </div>
            
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div 
                v-for="(ref, idx) in currentItem.references" 
                :key="idx" 
                class="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:border-slate-500 transition-colors"
              >
                <div class="flex items-start gap-3">
                  <span class="inline-flex items-center justify-center w-6 h-6 bg-primary/20 text-primary text-xs font-semibold rounded-full flex-shrink-0 mt-0.5">
                    {{ idx + 1 }}
                  </span>
                  <p class="text-gray-300 text-sm leading-relaxed">
                    {{ ref }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Brain, Atom, Target, Microscope, ChevronRight, XCircle } from 'lucide-vue-next'
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

interface ExtendedSection {
  image: string
  description_cn: string
  description_en: string
}

interface ResearchItem {
  icon: any
  title_cn: string
  title_en: string
  description_en: string
  description_cn: string
  image: string
  extended?: ExtendedSection[]
  references?: string[]
  extendedDescription?: string
  additionalImages?: string[]
}

const isOpen = ref(false)
const currentItem = ref<ResearchItem | null>(null)

const openDialog = (item: ResearchItem) => {
  currentItem.value = item
  isOpen.value = true
}

const importImage = (imgPath: string) => {
  const imgUrl = new URL(`../../../assets/imgs/${imgPath}`, import.meta.url).href;
  return imgUrl;
};

const researchItems = [
  {
    icon: Brain,
    title_cn: '人工智能和物理双驱动的小分子药物设计方法',
    title_en: 'Development of drug design methods for small molecules based on AI and physics',
    description_cn: 'AI作为一种强大的数据挖掘和分析技术已渗透至新药研发的各个环节，在推动创新药物先导分子的筛选、设计和发现方面展现出巨大潜力。课题组聚焦小分子药物设计中的关键难点问题，以大数据、AI技术为依托，结合物理学原理，发展了一系列高精度及高效的活性分子虚拟筛选、全新结构设计、逆合成分析、成药性预测以及靶标挖掘方法。基于这些方法学研究成果，课题组牵头开发了国内首套基于AI的一站式新药发现商用软件平台DrugFlow，为新药研发提供了强有力的技术支撑。',
    description_en: 'As a powerful technology for data mining and analysis, AI has seamlessly integrated into drug research and development, significantly accelerating the screening, design, and identification of novel lead molecules. Our team focuses on pivotal hurdles in small molecule drug design. By combining big data, AI and physics principles, we have developed highly precise and efficient methods for virtual screening, de novo drug design, retrosynthesis, drug-likeness prediction, and target discovery. Building upon these methodological advancements, our group has developed DrugFlow, China\'s first AI-powered one-stop commercial software platform for drug discovery.',
    image: 'research_cover_1.jpg',
    extended: [
      {
        'image': 'research-new_d1-1.png', 
        'description_cn': 'AI作为一种强大的数据挖掘和分析技术已渗透至新药研发的各个环节，在推动创新药物先导分子的筛选、设计和发现方面展现出巨大潜力，但基于AI的数据驱动式创新药物设计和筛选方法目前仍存在若干亟待攻克的难题。课题组聚焦小分子药物设计中的关键难点问题，以大数据、AI 技术为依托，结合物理学原理，发展了一系列高精度及高效的活性分子虚拟筛选、全新结构设计、逆合成分析、成药性预测以及靶标挖掘方法。基于下述方法学研究成果，课题组牵头开发了国内首套基于AI的一站式新药发现商用软件平台DrugFlow，为新药研发提供了强有力的技术支撑。',
        'description_en': 'As a powerful technology for data mining and analysis, AI has seamlessly integrated into drug research and development, significantly accelerating the screening, design, and identification of novel lead molecules. Nevertheless, AI-driven, data- centric drug design and screening methods still face unresolved challenges. Our team focuses on pivotal hurdles in small molecule drug design. By combining big data, AI and physics principles, we have developed highly precise and efficient methods for virtual screening, de novo drug design, retrosynthesis, drug-likeness prediction, and target discovery. Building upon these methodological advancements, our group has developed DrugFlow, China’s first AI-powered one-stop commercial software platform for drug discovery.',
      },
      {
        'image': '',
        'description_cn': '在虚拟筛选方面，创造性地发展了多种基于深度学习的分子对接和打分算法（如KarmaDock、CarsiDock、RTMScore等），显著提升了对接的精度和速度，极大提高了虚拟筛选的效率和成功率 [1-4]；在全新结构设计方面，开发了一系列融合计算物理原则的分子生成模型（如MCMG、SurfGen、ResGen、Delete等），通过学习原子间的相互作用，精确捕捉活性分子与靶标结合的关键三维结构信息，实现了高活性分子的高效生成和优化 [5-8]；发展了结合传统分子片段组合、点击化学等模块化反应的分子生成算法ClickGen，显著提升了生成分子的合成可及性 [9]；提出了基于大语言模型的词元化药物设计方法Token-Mol，将二维和三维结构信息以及分子性质编码为离散的词元，并采用因果掩码进行模型训练，在多个下游任务的测试中均表现出色 [10]；在合成路线预测方面，发展了多种基于深度学习和生成模型的单步逆合成路线、反应条件及反应产率预测模型，在多个基准测试上展现出优异的预测性能，凸显了其在AI驱动的化学合成规划领域的广阔应用潜力 [11]。在靶标发掘方面，基于多模态学习框架，构建了多种可有效整合生物异构信息的高精度深度学习预测算法，为新药靶发现、药物组合筛选和药物选择性/脱靶效应评估等提供了强有力的新工具 [12,13]。',
        'description_en': 'In virtual screening, we have innovatively developed multiple deep learning-based molecular docking and scoring algorithms (e.g., KarmaDock, CarsiDock, RTMScore), significantly enhancing docking accuracy and speed while markedly improving virtual screening efficiency and success rates [1-4]. For de novo structure design, we have developed a series of molecular generative models that incorporate computational physics principles (e.g., MCMG, SurfGen, ResGen, Delete). By learning atomic interactions, these models precisely capture critical 3D structural information of active molecules bound to targets, enabling efficient generation and optimization of highly active compounds [5-8]. We have also developed ClickGen, a molecular generation algorithm that combines modular reactions such as traditional molecular fragment assembly and click chemistry, substantially improving synthetic accessibility [9]. Additionally, we have proposed Token-Mol, a tokenized drug design method based on large language models, which encodes 2D/3D structural information and molecular properties into discrete tokens and employs causal masking for model training, demonstrating outstanding performance across multiple downstream tasks [10]. In synthetic route prediction, we have developed various deep learning- and generative model-based approaches for predicting single-step retrosynthetic routes, reaction conditions, and reaction yields, which exhibit outstanding predictive performance on multiple benchmark tests, highlighting broad application potential in AI-driven chemical synthesis planning [11]. For target identification, based on a multimodal learning framework, we have developed high-precision deep learning prediction algorithms by effectively integrating heterogeneous biological information, providing powerful tools for drug target discovery, drug combination screening, and assessment of drug selectivity/off-target effects [12,13].',
      },
      {
        'image': 'research-new_d1-2.png', 
        'description_cn': '在成药性预测方面，针对小样本数据预测精度差的难题，课题组发展了多种基于迁移学习、多任务学习、自监督学习等新型AI技术的表征学习和性质预测新方法，显著提升了分子理化性质、成药性和毒性的预测精度，尤其是对于样本较少的任务提升幅度更为显著 [14-16]；针对分子图神经网络模型，课题组提出了基于子结构掩盖的可解释性方法SME，其通过分析分子中关键子结构集对模型预测的影响来确定模型的决策过程 [17]；此外，将SME与提示学习相结合，发展了一种多性质分子优化方法Prompt-MolOpt，成功实现了零样本学习和少样本学习在多性质优化中的应用 [18]；开发了关键成药性参数软件平台ADMETLab以及成药性优化软件平台OptADMET，可实现17种物化性质、13种药物化学性质、24种成药性参数、27种毒性性质及8种毒性团规则的系统性评价，是目前国际上成药性参数评价种类最多、速度最快、预测精度最优的免费在线计算平台之一 [19-20]。',
        'description_en': 'In the field of drug-likeness prediction, addressing the challenge of poor prediction accuracy with small-sample data, we have developed a variety of novel AI-driven approaches for representation learning and property prediction based on transfer learning, multi-task learning, and self-supervised learning. These methods significantly improve the prediction accuracy of molecular physicochemical properties, drug-likeness, and toxicity, with particularly notable enhancements for tasks with limited samples [14-16]. For molecular graph neural network models, we proposed an interpretability method called Substructure Masking-based Explainability (SME), which determines the model’s decision-making process by analyzing the influence of key substructure sets within molecules on model predictions [17]. Furthermore, by integrating SME with prompt learning, we developed a multi-property molecular optimization approach named Prompt-MolOpt, successfully achieving the application of zero-shot and few-shot learning in multi-property optimization [18]. Additionally, we developed the ADMETLab software platform for key drug-likeness parameters and the OptADMET software platform for drug-likeness optimization. These platforms enable systematic evaluation of 17 physicochemical properties, 13 medicinal chemistry properties, 24 drug-likeness parameters, 27 toxicity properties, and 8 toxicity group rules. They are currently among the free online computational platforms that offer the most comprehensive range of drug-likeness parameter evaluations, the fastest processing speeds, and the highest prediction accuracy [19,20].',
      }
    ],
    references: [
      'Benchmarking AI-powered docking methods from the perspective of virtual screening, Nature Machine Intelligence, 2025, 7, 509-520.',
      'Efficient and accurate large library ligand docking with KarmaDock, Nature Computational Science, 2023, 3, 789-804.',
      'Boosting Protein-Ligand Binding Pose Prediction and Virtual Screening Based on Residue-Atom Distance Likelihood Potential and Graph Transformer, Journal of Medicinal Chemistry, 2022, 65, 10691-10706.',
      'Advancing Ligand Docking through Deep Learning: Challenges and Prospects in Virtual Screening, Accounts of Chemical Research, 2024, 57, 1500-1509.',
      'Deep lead optimization enveloped in protein pocket and its application in designing potent and selective ligands targeting LTK protein, Nature Machine Intelligence, 2025, 7, 448-458.',
      'Learning on topological surface and geometric structure for 3D molecular generation, Nature Computational Science, 2023, 3, 849-859.',
      'ResGen is a pocket-aware 3D molecular generation model based on parallel multiscale modelling, Nature Machine Intelligence, 2023, 5, 1020-1030.',
      'Multi-constraint molecular generation based on conditional transformer, knowledge distillation and reinforcement learning, Nature Machine Intelligence, 2021, 3, 914-922.',
      'ClickGen: Directed Exploration of Synthesizable Chemical Space Leading to the Rapid Synthesis of Novel and Active Lead Compounds via Modular Reactions and Reinforcement Learning, Nature Communications, 2024, 15, 10127.',
      'Token-Mol 1.0: tokenized drug design with large language models, Nature Communications, 2025, 16, 4416.',
      'Retrosynthesis prediction with an iterative string editing model, Nature Communications, 2024, 15, 6404.',
      'A unified drug-target interaction prediction framework based on knowledge graph and recommendation system, Nature Communications, 2021, 12, 6775.',
      'A Knowledge-Guided Graph Learning Approach Bridging Phenotype- and Target-Based Drug Discovery, Advanced Science, 2025, 12, 2412402.',
      'Multi-channel learning for integrating structural hierarchies into context-dependent molecular representation, Nature Communications, 2025, 16, 413.',
      'Unified and Explainable Molecular Representation Learning for Imperfectly Annotated Data from the Hypergraph View, Nature Communications, 2025, accepted.',
      'Mining Toxicity Information from Large Amounts of Toxicity Data, Journal of Medicinal Chemistry, 2021, 64, 6924-6936.',
      'Substructure Mask Explanation (SME): an intuitive graph neural network explanation approach for mining structure-activity information from molecular property prediction models, Nature Communications, 2023, 14, 2585.',
      'Leveraging Language Model for Advanced Multi-Property Molecular Optimization via Prompt Engineering, Nature Machine Intelligence, 2024, 6, 1359-1369.',
      'ADMETlab 2.0: an integrated online platform for accurate and comprehensive predictions of ADMET properties, Nucleic Acids Research, 2021, 49(W1), W5-W14.',
      'OptADMET: an open substructure modification guiding workspace for multiple ADMET property optimization, Nature Protocols, 2024, 19, 1105-1121.'
    ]
  },
  {
    icon: Atom,
    title_cn: '人工智能和物理双驱动的生物大分子药物设计方法',
    title_en: 'Development of drug design methods for biological biomolecules based on AI and physics',
    description_cn: '近年来，AI在药物设计领域的应用范畴正迅速向生物大分子药物（涵盖多肽、抗体、治疗性蛋白质以及核酸药物等）的研发领域拓展。课题组长期聚焦于生物大分子药物设计的关键环节，包括靶点识别、结构预测、分子设计优化以及性质预测等，展开深入且系统的研究，发展了一系列由AI和物理双驱动创新方法，涵盖蛋白-多肽复合物结构预测、蛋白-蛋白对接、PROTAC三元复合物结构预测和linker设计、酶催化位点预测、MHC-多肽相互作用预测，以及抗体和新生抗原设计方法等。',
    description_en: 'In recent years, the application of AI in drug design has been rapidly expanding into the R&D of biomacromolecule drugs, including peptides, antibodies, therapeutic proteins, and nucleic acid drugs. Our group has conducted in-depth and systematic research on the key aspects of biomacromolecule drug design, such as target identification, structure prediction, molecular design and optimization, and property prediction. We have developed a series of innovative methods driven by both AI and physics for protein-peptide complex structure prediction, protein-protein docking, PROTAC ternary complex structure prediction and linker design, enzyme catalytic site prediction, MHC-peptide interaction prediction, and antibody and neoantigen design methodologies.',
    image: 'research_cover_2.jpg',
    extended: [
      {
        'image': '', 
        'description_cn': '近年来，AI在药物设计领域的应用范畴正迅速向生物大分子药物（涵盖多肽、抗体、治疗性蛋白质以及核酸药物等）的研发领域拓展。课题组长期聚焦于生物大分子药物设计的关键环节，包括靶点识别、结构预测、分子设计优化以及性质预测等，展开深入且系统的研究，发展了一系列由AI和物理双驱动创新方法，涵盖蛋白-多肽复合物结构预测、蛋白-蛋白对接、PROTAC三元复合物结构预测和linker设计、酶催化位点预测、MHC-多肽相互作用预测，以及抗体和新生抗原设计方法等 [1-15]。',
        'description_en': 'In recent years, the application of AI in drug design has been rapidly expanding into the R&D of biomacromolecule drugs, including peptides, antibodies, therapeutic proteins, and nucleic acid drugs. Our group has conducted in-depth and systematic research on the key aspects of biomacromolecule drug design, such as target identification, structure prediction, molecular design and optimization, and property prediction. We have developed a series of innovative methods driven by both AI and physics for protein-peptide complex structure prediction, protein-protein docking, PROTAC ternary complex structure prediction and linker design, enzyme catalytic site prediction, MHC-peptide interaction prediction, and antibody and neoantigen design methodologies [1-15].',
      },
      {
        'image': '', 
        'description_cn': '在生物药物设计通用场景方法开发方面，课题组系统评估了对接方法在蛋白-多肽/环肽复合物结构预测中的表现，并发展了基于扩散模型的蛋白-多肽复合物结构预测方法RAPiDock，其通过物理约束有效压缩采样空间，利用双尺度图捕获多维结构信息，在全原子层面实现快速且精准的对接，为多肽的高通量筛选和设计提供了强大的计算工具 [1-3]；系统评估了蛋白质loop区结构预测的表现，并发展了基于自回归模型框架的蛋白质loop结构预测方法，针对蛋白质柔性功能区结构预测的性能提升这一难点问题提出了创新思路 [4,5]；开发了蛋白-蛋白复合物结构预测及界面间关键残基分析的在线计算平台HawkDock，其在结构预测与界面间关键残基的预测中，均展现出优秀的预测精度 [6-8]；提出了基于多模态技术的酶催化位点注释模型EasIFA，其融合了基于蛋白质语言模型和3D结构编码器的潜在酶表示，运用多模态交叉注意力框架将蛋白水平信息与酶反应知识相结合，从而实现酶催化活性位点的准确及高效预测 [9]。',
        'description_en': 'Regarding method development for general scenarios in biological drug design, we systematically evaluated the performance of docking methods  in predicting the structures of protein-peptide/cyclic peptide complexes and developed the diffusion model-based protein-peptide complex structure prediction method, RAPiDock. By effectively compressing the sampling space through physical constraints and utilizing a dual-scale graph to capture multidimensional structural information, RAPiDock achieves rapid and accurate docking at the all-atom level, providing a powerful computational tool for high-throughput screening and design of peptides [1-3]. We also systematically assessed the performance of protein loop region structure prediction and developed a protein loop structure prediction method based on an autoregressive model framework, which offer innovative solutions to improve the predictions of flexible functional regions [4,5]. Additionally, we developed HawkDock, an online computational platform for protein-protein complex structure prediction and analysis of key residues at the interface. HawkDock demonstrates excellent prediction accuracy in both structure prediction and the identification of key residues at the interface [6-8]. Furthermore, we proposed EasIFA, a multimodal enzyme catalytic site annotation model that integrates latent enzyme representations derived from a protein language model and a 3D structure encoder. By employing a multimodal cross-attention framework to combine protein-level information with enzymatic reaction knowledge, EasIFA achieves accurate and efficient prediction of enzyme catalytic active sites [9].',
      },
      {
        'image': 'research-new_d2-1.png', 
        'description_cn': '在生物药物设计具体场景方法开发方面，针对PROTAC药物设计，开发了国际上首个基于非结合态蛋白结构进行PROTAC三元复合物预测的方法，提高了实际场景下的预测成功率 [10~12]；针对抗菌肽设计，提出了基于基础语言大模型的抗菌肽设计方法AMP-Designer，其通过巧妙融合大语言模型、提示学习、模型蒸馏和强化学习等技术，仅耗时11天就设计出18个广谱高效的抗菌肽 [13,14]；针对T细胞受体（TCR）与肽-MHC I（pMHC）复合物的特异性结合预测任务，开发了一套基于对比学习的高泛化性能T细胞表位免疫原性预测框架TRAP，能精准识别相似抗原表位间TCR交叉反应性预测中的潜在混淆因素，有效解决了传统模型在这一复杂场景下的性能瓶颈，为现实世界中大规模TCR-pMHC结合预测任务的理想工具 [16]。针对抗体设计，发展了用于抗体设计的深度学习框架AntiBMPNN，其通过融合抗体3D结构数据、优化的消息传递神经网络（MPNN）架构、基于频率的评分函数与AlphaFold 3，实现了高精度的抗体序列设计，其在多个体系的互补决定区（CDR1/2/3）的设计上优于AbMPNN、AntiFold和ProteinMPNN等现有方法 [17]；基于大规模序列与结构数据的多层次预训练，提出了抗体大语言模型S2ALM，其在抗原结合预测、B细胞分析及新冠抗体设计等任务中性能全面领先，为抗体药物研发提供了新范式 [18]。',
        'description_en': 'In the development of methodologies for specific scenarios in biomolecule drug design, we developed the world’s first method for predicting PROTAC ternary complexes based on the structures of non-bound proteins, significantly improving the prediction success rates in real-world scenarios [10-12]. For antimicrobial peptide design, we proposed AMP-Designer, an antimicrobial peptide design method based on foundational language models. By integrating large language models, prompt learning, model distillation, and reinforcement learning, AMP-Designer successfully designed 18 broad-spectrum and highly effective antimicrobial peptides in just 11 days [13,14]. For the task of TCR-pMHC specificity prediction, we developed TRAP (T-cell Receptor Antigen interaction Predictor), a contrastive learning-based framework with high generalization capability. TRAP can accurately identifies potential confounding factors in predicting TCR cross-reactivity among similar epitopes, effectively overcoming the performance bottlenecks of traditional models in this complex scenario and serving as an ideal tool for large-scale TCR-pMHC binding prediction tasks [16]. For antibody design, we developed AntiBMPNN, a deep learning framework for antibody design that integrates antibody 3D structural data, an optimized message passing neural network (MPNN) architecture, frequency-based scoring functions, and AlphaFold 3. It achieves high-precision antibody sequence design, outperforming existing methods such as AbMPNN, AntiFold, and ProteinMPNN in designing the complementarity-determining regions (CDR1/2/3) across multiple systems [17]. Additionally, based on multi-level pre-training of large-scale sequence and structural data, we proposed S2ALM, a large language model for antibodies. S2ALM demonstrates comprehensive superiority in tasks such as antigen-binding prediction, B-cell analysis, and COVID-19 antibody design, providing a new paradigm for antibody drug development [18].',
      }
    ],
    references: [
      'Protein-peptide Docking with Rational and Accurate Diffusion Generative Model, Nature Machine Intelligence, 2025, accepted.',
      'Comprehensive Evaluation of Fourteen Docking Programs on Protein-Peptide complex, Journal of Chemical Theory and Computation, 2020, 16, 3959-3969.',
      'Deep-learning-based prediction framework for protein-peptide interactions with structure generation pipeline, Cell Reports Physical Science, 2024, 5, 101980.',
      'Highly accurate and efficient deep learning paradigm for full-atom protein loop modeling with KarmaLoop, Research, 2024, 7, 0408.',
      'Comprehensive Assessment of Protein Loop Modeling Programs on Large-scale Datasets: Prediction Accuracy and Efficiency, Briefings in Bioinformatics, 2024, 25, bbad486.',
      'From Traditional Methods to Deep Learning Approaches: Advances in Protein-Protein Docking, Wiley Interdisciplinary Reviews-Computational Molecular Science, 2025, 15, e70016.',
      'HawkDock: a web server to predict and analyze the protein-protein complex based on computational docking and MM/GBSA, Nucleic Acids Research, 2019, 47, W322-W330.',
      'HawkDock version 2: an updated web server to predict and analyze the structures of protein-protein complexes, Nucleic Acids Research, 2025, in press.',
      'Multi-Modal Deep Learning Enables Ultrafast and Accurate Annotation of Enzymatic Active Sites, Nature Communications, 2024, 15, 7348.',
      'PROTAC-DB 3.0: an Updated Database of PROTACs with Extended Pharmacokinetic Parameters, Nucleic Acids Research, 2025, 53(1D), D1510-D1515.',
      'Development of PROTACs using computational approaches, Trends in Pharmacological Sciences, 2024, 12, 1162-1174.',
      'Integrative Modeling of PROTAC-Mediated Ternary Complexes. Journal of Medicinal Chemistry 2021, 64, 16271.',
      'Discovery of antimicrobial peptides with notable antibacterial potency by an LLM-based foundation model, Science Advances, 2025, 11, eads8932.',
      'AI-Guided Design of Antimicrobial Peptide Hydrogels for Precise Treatment of Drug-resistant Bacterial Infections, Advanced Materials, 2025, 37, 2500043.',
      'Integration of molecular coarse-grained model into geometric representation learning framework for protein-protein complex property prediction, Nature Communications, 2024, 15, 9629.',
      'TRAP: a contrastive learning-enhanced framework for robust TCR-pMHC binding prediction with improved generalizability, Chemical Science, 2025, 16, 9881-9894.',
      'AntiBMPNN: Structure-Guided Graph Neural Networks for Precision Antibody Engineering, Advanced Science, 2025, in press.',
      'S2ALM: Sequence-Structure Pre-trained Large Language Model for Comprehensive Antibody Representation Learning, Research, 2025, 071.',
      'AttABseq: an attention-based deep learning prediction method for antigen-antibody binding affinity changes based on protein sequences, Briefings in Bioinformatics, 2024, 25, bbae304.',
      'Synergy of GFlowNet and Protein Language Model Makes a Diverse Antibody Designer, Proceedings of the AAAI Conference on Artificial Intelligence, 2025, 39, 21.'
    ]
  },
  {
    icon: Target,
    title_cn: '重要靶点的药物分子设计',
    title_en: 'Drug Molecule Design for Important Targets',
    description_cn: '先导化合物的发现和优化是新药开发中不可或缺的关键环节。我们通过整合计算模拟以及体内/体外生物活性评价，针对多个重要药物靶点进行了先导化合物的筛选与优化，广泛涉足药物临床前开发的各个阶段，加快药物发现和开发的速度。',
    description_en: 'The discovery and optimization of lead compounds are essential and indispensable stages in the development of new drugs. We have conducted lead compound screening and optimization against multiple important drug targets (such as AR, GR, ALK, PI3K, MIF, and LTK) by integrating computational simulations and in vivo/in vitro bioactivity assays, and have extensively involved in various stages of drug preclinical development, accelerating the speed of drug discovery and development.',
    image: 'research_cover_3.jpg',
    extended: [
      {
        'image': 'research-new_d3-1.png', 
        'description_cn': '课题组基于前述自研AIDD/CADD创新工具，结合化学合成、体内/体外生物活性检测和成药性和安全性评价，针对多个重要药物靶点（AR、GR、ALK、PI3K、MIF、ALK和A2A等）进行了先导化合物的筛选与优化，成功发现了一系列结构新颖、活性高、成药性好的先导化合物和候选药物 [1~20]。例如：课题组运用多种CADD和AIDD技术针对雄激素受体蛋白AR上的传统靶点（雄激素结合口袋）和创新型靶点（激活因子结合位点、DNA结合域、自主发现的二聚界面口袋等）进行了系统研究，发现了一系列结构新颖且活性优异的新型AR拮抗剂，其中多类拮抗剂已经进入临床前研究阶段 [1-10]；此外，设计并合成了一类新型的抗耐药性ALK “桥联”小分子，该类抑制剂可同时靶向ATP活性位点和邻近的疏水别构口袋；该类抑制剂在分子层面以及细胞层面均表现出优异的生物活性，是目前已报导的体外活性最强的I1/2型ALK抑制剂（001-017：IC50=0.27 nM），较已上市药物克唑替尼和色瑞替尼体外活性更好，其中001-017对多种ALK耐药突变体仍表现出很强的抑制活性及高度的激酶选择性 [18]。/体外生物活性评价，针对多个重要药物靶点进行了先导化合物的筛选与优化。我们的优势在于广泛并深入涉足药物临床前开发的各个阶段，包括先导化合物的发现、化学合成优化、化学/生物活性检测、成药性和安全性评价等，能加快药物发现和开发的速度，并降低药物开发的成本。目前我们研究的药物靶点包括AR、GR、ALK、ROCK、PI3K、MIF、ALK、Tie-2和A2A等 [1~15]。例如：我们采用MIEC-SVM预测模型、分子对接、结合自由能计算等多种CADD方法设计并合成了一类新型的抗耐药性ALK “桥联”小分子，该类抑制剂可同时靶向ATP活性位点和邻近的疏水别构口袋；该类抑制剂在分子层面以及细胞层面均表现出优异的生物活性，是目前已报导的体外活性最强的I1/2型ALK抑制剂（001-017：IC50=0.27 nM），较已上市药物克唑替尼和色瑞替尼体外活性更好，其中001-017对多种ALK耐药突变体仍表现出很强的抑制活性及高度的激酶选择性，有望进入临床前研究 [12]。',
        'description_en': 'Based on the aforementioned self-developed AIDD/CADD (Artificial Intelligence-Driven Drug Discovery/Computer-Aided Drug Design) innovative tools, combined with chemical synthesis, in vivo/in vitro bioactivity assays, and evaluations of drug-likeness and safety, our research team conducted lead compound screening and optimization against multiple important drug targets (such as AR, GR, ALK, PI3K, MIF, and LTK). We successfully discovered a series of lead compounds and drug candidates with novel structures, high activity, and favorable drug-likeness [1-20]. For instance, utilizing a variety of CADD and AIDD techniques, we systematically investigated the conventional binding site (androgen-binding pocket) and innovative site (activator-binding pocket, DNA-binding domain, and a dimer interface pocket) on AR. This led to the discovery of a series of novel AR antagonists with exceptional activity, among which multiple classes have advanced to the preclinical research stage [1-10]. Additionally, we designed and synthesized a novel class of resistance-overcoming ALK “bridging” small molecules. These inhibitors simultaneously target the ATP active site and an adjacent hydrophobic allosteric pocket, and they demonstrate outstanding bioactivity at both molecular and cellular levels, representing the most potent Type I1/2 ALK inhibitors reported to date (compound 001-017: IC50 = 0.27 nM). They exhibited superior in vitro activity compared to the marketed drugs crizotinib and ceritinib, with 001-017 maintaining strong inhibitory activity and high kinase selectivity against various ALK-resistant mutants [18].',
      },
    ],
    references: [
      'Unraveling the Efficacy of AR Antagonists Bearing N-(4-(Benzyloxy)phenyl)piperidine-1-sulfonamide Scaffold in Prostate Cancer Therapy by Targeting LBP Mutations, Journal of Medicinal Chemistry, 2025, 68, 11962-11978.',
      'Discovery of N-(1,2,4-Thiadiazol-5-yl)benzo[b]oxepine-4-carboxamide Derivatives as Novel Antiresistance Androgen Receptor Antagonists, Journal of Medicinal Chemistry, 2025, 68, 3445-3459.',
      'Identification of Oral Bioavailable Coumarin Derivatives as Potential AR Antagonists Targeting Prostate Cancer, Journal of Medicinal Chemistry, 2024, 67, 19395-19416.',
      'Discovery of Thiadiazoleamide Derivatives as Potent, Selective, and Orally Available Antagonists Disrupting Androgen Receptor Homodimer, Journal of Medicinal Chemistry, 2024, 67, 17520-17541.',
      'Discovery of Novel Anti‐Resistance AR Antagonists Guided by Funnel Metadynamics Simulation, Advanced Science, 2024, 11, 2309261.',
      'Discovery of N-(1-(6-oxo-1,6-dihydropyrimidine)-pyrazole) Acetamide Derivatives as Novel Noncovalent DprE1 Inhibitors against Mycobacterium tuberculosis, Journal of Medicinal Chemistry, 2024, 67, 1914-1931.',
      'Discovery of Novel Inhibitors of BRD4 for Treating Prostate Cancer: A Comprehensive Case Study for Considering Water Networks in Virtual Screening and Drug Design, Journal of Medicinal Chemistry, 2024, 67, 138-151.',
      'Small-Molecule Inhibition of Androgen Receptor Dimerization as a Strategy against Prostate Cancer, ACS Central Science, 2023, 9, 675-684.',
      'Discovery of N-(4-(Benzyloxy)-phenyl)-sulfonamide Derivatives as novel antagonists of the human androgen receptor targeting the activation function 2, Journal of Medicinal Chemistry, 2022, 65, 2507-2521.',
      'Discovery of a novel androgen receptor antagonist manifesting evidence to disrupt the dimerization of the ligand-binding domain via attenuating the hydrogen-bonding network, Journal of Medicinal Chemistry, 2021, 64, 17221-17238.',
      'Discovery of Novel Nav1.7-Selective Inhibitors with the 1H-Indole-3-Propionamide Scaffold for Effective Pain Relief, Research, 2025, 8, 0599.',
      'High-throughput glycolytic inhibitor discovery targeting glioblastoma by graphite dots-assisted LDI mass spectrometry, Science Advances, 2022, 8, eabl4923.',
      'Discovery and Optimization of N-acyl-6-sulfonamide-tetrahydroquinoline Derivatives as Novel Non-steroidal Selective Glucocorticoid Receptor Modulators, Journal of Medicinal Chemistry, 2022, 65, 15710-15724.',
      'Discovery of novel GR ligands towards druggable GR antagonist conformations identified by MD Simulations and Markov state model analysis, Advanced Science, 2022, 9, 2102435.',
      'Discovery of a novel Fusarium Graminearum Mitogen-activated Protein Kinase (FgGpmk1) inhibitor for the treatment of fusarium head blight, Journal of Medicinal Chemistry, 2021, 64, 13841-13852.',
      'Structure‐based discovery of caspase‐1 inhibitor with therapeutic potential for febrile seizures and later enhanced epileptogenic susceptibility, British Journal of Pharmacology, 2020, 17, 3519-3534.',
      'Drug discovery targeting anaplastic lymphoma kinase (ALK), Journal of Medicinal Chemistry, 2019, 62, 10927-10954.',
      'Combating drug-resistant mutants of ALK with potent and selective Type-I1/2 inhibitors by stabilizing unique DFG-shifted loop conformation, ACS Central Science, 2017, 3, 1208-1220.',
      'Structure-based Drug Design and Identification of H2O-soluble and Low Toxic Hexacyclic Camptothecin Derivatives with Improved Efficacy in both Cancer and Lethal Inflammation Models In Vivo, Journal of Medicinal Chemistry, 2018, 61, 8613-8624.',
      'Discovery of novel inhibitors targeting macrophage migration inhibitory factor via structure-based virtual screening and bioassays, Journal of Medicinal Chemistry, 2014, 57, 3737-3745.'
    ]
  },
  {
    icon: Microscope,
    title_cn: '基于多尺度分子模拟的靶标-配体识别机制研究',
    title_en: 'Research on Target-Ligand Recognition Mechanisms Based on Multiscale Molecular Simulations',
    description_cn: '传统实验方法无法描述配体−靶标之间的动态识别过程。全原子模拟（包括常规动力学模拟和增强采样动力学模拟）可以辅助实验技术捕捉原子层次的动力学和热力学作用机制，揭示复杂的分子机制，如药物分子耐药性机制等。',
    description_en: 'Traditional experimental methods cannot describe the dynamic recognition process between ligands and targets. All-atom simulations (including conventional molecular dynamics simulations and enhanced sampling dynamics simulations) can assist experimental techniques in capturing atomic-level dynamic and thermodynamic mechanisms, revealing complex molecular mechanisms such as drug molecule resistance mechanisms.',
    image: 'research_cover_4.jpg',
    extended: [
      {
        'image': 'research-new_d4-1.png',
        'description_cn': "传统实验方法（X-ray和NMR）可有效地表征蛋白或蛋白-配体的静态或准静态结构，但难以描述靶标和配体之间的动态识别过程。在这种情况下，全原子模拟（包括常规动力学模拟和增强采样动力学模拟）可以辅助实验技术，捕捉原子层次的动力学和热力学作用机制。课题组通过改进了助推势的函数形式开发了高效的增强采样方法SaMD，有效提升了增强采样的模拟效率；运用机器学习技术对偏置增强采方法中广泛使用的集合变量技术进行优化，有效提升了增强采样的效率和精度；此外，课题组采用常规分子动力学模拟和增强采样动力学模拟技术针对靶标-配体识别过程、药物分子耐药性机制、ABC转运蛋白作用机制、小分子保留时间计算等方面展开了深入的理论研究 [1-15]。例如，课题组采用分子模拟技术对mGlu2激活过程中的关键事件进行了模拟，包括蛋白的构象变化、激动剂的结合、Gi蛋白的偶联以及GDP的释放，揭示了mGlu2从非活性状态转变为活性状态过程中的几个关键能垒，并确定了整个激活过程的决速步发生在从S2到S3的转变阶段 [8]；使用增强采样模拟和自由能计算对靶向溴结构域BD和末端外蛋白BET溴结构域（包括Brd2、Brd3或Brd4）以及E3连接酶VHL的PROTAC分子MZ1的动力学机制进行了表征和分析 [11]，研究发现在三元复合物形成过程中PROTAC首先更倾向于与E3连接酶结合，而且降解效率更高的PROTAC倾向于使靶蛋白暴露更多的赖氨酸，该发现有望为高效降解PROTAC的合理设计提供有力支持（图5）；利用分子对接/分子动力学模拟手段对MCR耐药酶的催化机制展开研究，首次勾勒了MCR-3.12的底物类脂A结合口袋，并发现位于跨膜区与催化结构域之间的59个氨基酸长度的铰链区决定了MCR-3粘菌素的耐药能力，为逆转粘菌素耐药的新靶点发掘提供全新的思路与方法 [15]。",
        'description_en': 'Traditional experimental methods, such as X-ray crystallography, nuclear magnetic resonance (NMR) and cryo-electron microscopy (cryo-EM), can effectively characterize the static or quasi-static structures of proteins or protein-ligand complexes but struggle to capture the dynamic recognition process between targets and ligands. In such cases, all-atom simulations, including conventional molecular dynamics (MD) and enhanced sampling dynamics, can complement experimental techniques by capturing the atomic-level dynamic and thermodynamic mechanisms. Our research team has developed an efficient enhanced sampling method, SaMD, by improving the functional form of the boosting potential, significantly enhancing the simulation efficiency of enhanced sampling. Additionally, we have optimized the widely used collective variable technique in biased enhanced sampling methods using machine learning technology, effectively improving both the efficiency and accuracy of enhanced sampling. Furthermore, our team has conducted in-depth theoretical studies on target-ligand recognition processes, drug molecule resistance mechanisms, the action mechanisms of ABC transporters, and the calculation of small molecule retention times using conventional MD simulations and enhanced sampling MD simulations [1-15]. For example, we used molecular simulation techniques to model key events in the mGlu2 activation process, including protein conformational changes, agonist binding, Gi protein coupling, and GDP release, and the simulations revealed several critical energy barriers during the transition of mGlu2 from an inactive to an active state and identifying the rate-determining step occurring during the transition from S2 to S3 [8]. We also used enhanced sampling simulations and free energy calculations to characterize and analyze the dynamic mechanisms of the PROTAC molecule MZ1 targeting bromodomain BD and extra-terminal domain protein BET bromodomains (including Brd2, Brd3, or Brd4) and the E3 ligase VHL. Our study found that during the formation of the ternary complex, PROTAC initially exhibits a greater tendency to bind to the E3 ligase. Moreover, PROTACs with higher degradation efficiency tend to expose more lysine residues on the target protein. These findings offer valuable insights for the rational design of highly effective PROTAC degraders (Figure 5). Additionally, we investigated the catalytic mechanism of MCR-resistant enzymes using molecular docking and MD simulations, delineating the substrate lipopolysaccharide A-binding pocket of MCR-3.12 for the first time. We discovered that a 59-amino acid hinge region located between the transmembrane domain and the catalytic domain determines the colistin resistance capability of MCR-3, providing novel ideas and strategies for discovering new targets to reverse colistin resistance [15].',
      },
      {
        'image': '',
        'description': "分子对接采用的打分函数计算效率高但准确性相对较低，而且其往往忽略了靶蛋白柔性的影响。为提高虚拟筛选的预测精度，课题组围绕MM/PB(GB)SA结合自由能预测方法中的若干核心理论问题进行了系统研究，深入探讨和评估了分子力场、溶剂化模型、原子电荷、构象熵、动力学采样时间等多种因素对MM/PB(GB)SA预测精度的影响，并针对不同体系提出了最优的预测策略 [16~20]；针对传统MM/PB(GB)SA方法无法有效表征蛋白-配体相互作用界面的非均一极性环境的这一固有缺陷，创造性地发展了基于可变介电的VD-MM/GBSA结合自由能预测方法，其根据残基的物化性质和化学环境对其介电常数进行优化，有效提升了蛋白-配体结合自由能的预测精度 [17~18]。",
        'description_en': 'The scoring functions employed in molecular docking offer high computational efficiency but relatively low accuracy, often neglecting the influence of target protein flexibility. To enhance the prediction accuracy of virtual screening, we conducted systematic studies on several key theoretical issues related to the MM/PB(GB)SA (Molecular Mechanics/Poisson-Boltzmann or Generalized Born Surface Area) binding free energy prediction methods. We thoroughly investigated and evaluated the impacts of various factors, including molecular force fields, solvation models, atomic charges, conformational entropy, and dynamics sampling time, on the prediction accuracy of MM/PB(GB)SA. Additionally, we proposed optimal prediction strategies for different systems [16-20]. Addressing the inherent limitation of traditional MM/PB(GB)SA methods in effectively characterizing the non-uniform polar environment at the protein-ligand interaction interface, we creatively developed the variable dielectric-based VD-MM/GBSA binding free energy prediction method. This approach optimizes the dielectric constants of residues based on their physicochemical properties and chemical environments, significantly improving the prediction accuracy of protein-ligand binding free energies [17-18].',
      },
    ],
    references: [
      'Descriptor-Free Collective Variables from Geometric Graph Neural Networks, Journal of Chemical Theory and Computation, 2024, 20, 10787-10797.',
      'Combining transition path sampling with data-driven collective variables through a reactivity-biased shooting algorithm, Journal of Chemical Theory and Computation, 2024, 10, 45234532.',
      'Accelerated Molecular Dynamics: An Efficient Enhanced Sampling Method for Biosystems, Journal of Physical Chemistry Letters, 2023, 14, 1103-1112.',
      'Comprehensive, Open-Source, and Automated Workflow for Multisite λ-Dynamics in Lead Optimization, Journal of Chemical Theory and Computation, 2024, 20, 1465-1478.',
      'Inherent fast inactivation particle of Nav channels as a new binding site for a neurotoxin, EMBO Journal, 2025, 44, 3180-3209.',
      'Shared interaction pathways of ligands targeting the ligand-binding pocket of nuclear receptors, Cell Reports Physical Science, 2025, 6, 102352.',
      'Exploring the activation mechanism of metabotropic glutamate receptor 2, Proceedings of the National Academy of Sciences, 2024, 121, e2401079121.',
      'Recognition and acquisition of FakB2-loaded exogenous fatty acid (eFA) by a streptococcal FakA kinase, Science bulletin, 2024, 69, 3355-3360.',
      'Uncovering the Kinetic Characteristics and Degradation Preference of PROTAC Systems with Advanced Theoretical Analyses, JACS Au, 2023, 3, 1775-1789.',
      'Can molecular dynamics simulations improve predictions of protein-ligand binding affinity with machine learning? Briefings in Bioinformatics, 2023, 24, bbad008.',
      'Discriminating functional and non-functional nuclear-receptor ligands with a conformational selection-inspired machine learning algorithm, Cell Reports Physical Science, 2023, 8, 101466.',
      'Deciphering the Shared and Specific Drug Resistance Mechanisms of Anaplastic Lymphoma Kinase via Binding Free Energy Computation, Research, 2023, 6, 0170.',
      'Regulation mechanism for the binding between the SARS-CoV-2 spike protein and host angiotensin-converting enzyme II, The Journal of Physical Chemistry Letters, 2021, 12, 6252-6261.',
      'The MCR-3 inside linker appears as a facilitator of colistin resistance, Cell Reports, 2021, 35, 109135.',
      'Structural diversity of ligand-binding androgen receptors revealed by microsecond long molecular dynamics simulations and enhanced sampling, Journal of Chemical Theory and Computation, 2016, 12, 4611-4619.',
      'End-Point binding free energy calculation with MM/PBSA and MM/GBSA: strategies and applications in drug design, Chemical Reviews, 2019, 119, 9478-9508.',
      'VAD-MM/GBSA: A Variable Atomic Dielectric MM/GBSA Model for Improved Accuracy in Protein-Ligand Binding Free Energy Calculations, Journal of Chemical Information and Modeling, 2021, 61, 2844-2856.',
      'Development and Evaluation of MM/GBSA Based on a Variable Dielectric GB Model for Predicting Protein-Ligand Binding Affinities, Journal of Chemical Information and Modeling, 2020, 60, 5353-5365.',
      'Assessing the performance of the Molecular Mechanics/Poisson Boltzmann Surface Area and Molecular Mechanics/ Generalized Born Surface Area methods. II. The accuracy of ranking poses generated from docking, Journal of Computational Chemistry, 2011, 32, 866-877.',
      'Assessing the performance of the MM/PBSA and MM/GBSA methods: I. The accuracy of binding free energy calculations based on molecular dynamics simulations, Journal of Chemical Information and Modeling, 2011, 51, 69-82.'
    ]
  }
]
</script>

<style scoped>
.text-primary {
  color: #4F46E5;
}

.bg-primary {
  background-color: #4F46E5;
}

.bg-primary-dark {
  background-color: #4338CA;
}

.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
}

/* Dialog content improvements */
:deep(.dialog-content) {
  max-height: 85vh;
  padding: 1.5rem;
}

/* Float layout for text wrapping around images */
.image-float-container img {
  float: right;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  width: 60%;
}

.text-content {
  text-align: justify;
  line-height: 1.6;
}

.clear-both {
  clear: both;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .image-float-container img {
    float: none;
    width: 100%;
    margin-left: 0;
    margin-bottom: 1rem;
    display: block;
  }
}
</style>
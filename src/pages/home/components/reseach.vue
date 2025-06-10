<template>
  <section class="py-16 bg-slate-950">
    <div class="container mx-auto px-4 md:px-8">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-100">研究方向</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(item, index) in researchItems" 
          :key="index" 
          class="bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300 overflow-hidden flex flex-col"
        >
          <img :src="importImage(item.image)" :alt="item.title" class="w-full h-64 object-cover">
          <div class="p-6 flex flex-col flex-grow">
            <component :is="item.icon" class="w-12 h-12 text-primary mb-4" />
            <h3 class="text-xl font-semibold mb-2 text-gray-100">{{ item.title }}</h3>
            <p class="text-gray-400 text-sm flex-grow">
              {{ item.description }}
            </p>
            <Button 
              @click="openDialog(item)"
              class="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-200 flex items-center justify-center"
            >
              <span>查看详情</span>
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
          <DialogTitle class="text-2xl font-bold text-white">{{ currentItem?.title }}</DialogTitle>
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
                :alt="section.description"
              >
            </div>
            <div class="text-content">
              <p class="text-gray-300 text-base leading-relaxed">
                {{ section.description }}
              </p>
            </div>
            <div class="clear-both"></div>
          </div>
        </div>
        
        <!-- Bottom section: References full width -->
        <div v-if="currentItem?.references && currentItem.references.length > 0" class="mt-8 border-t border-slate-700 pt-6">
          <h4 class="text-xl font-semibold mb-3 text-gray-100">参考文献</h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-gray-300 text-sm">
            <li v-for="(ref, idx) in currentItem.references" :key="idx" class="list-decimal ml-5">
              {{ ref }}
            </li>
          </ul>
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

interface ExtendedSection {
  image: string
  description: string
}

interface ResearchItem {
  icon: any
  title: string
  description: string
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
    title: '基于人工智能的药物设计方法研究',
    description: '围绕药物设计中的难点问题，应用大数据和AI技术发展高精度及高效的活性分子虚拟筛选方法、成药性预测方法、全新结构设计方法、逆合成预测方法以及靶标预测方法等，并开发整合的高精度药物设计和筛选软件平台。',
    image: 'research-new_d1-1.png',
    extended: [
      {
        'image': 'research-new_d1-1.png', 
        'description': 'AI作为一种强大的数据挖掘和分析技术已经涉及新药研发的各个阶段，有望推动创新药物先导分子的筛选、设计和发现，但基于AI的数据驱动式创新药物设计和筛选方法仍存在若干亟待解决的问题。我们课题组的核心研究方向是围绕药物设计中的难点问题，应用大数据和AI技术发展高精度及高效的活性分子虚拟筛选方法、成药性预测方法、全新结构设计方法、逆合成预测方法以及靶标预测方法等，并开发整合的高精度药物设计和筛选软件平台。例如，我们开发了基于知识图谱和推荐系统的药物-靶标相互作用预测方法KGE-NFM，其在多个基准数据集上比传统方法表现出更优的预测精度 [1]；发展了基于Transformer、知识蒸馏（knowledge distillation）和强化学习的多约束分子生成新方法MCMG，其可以高效遍历复杂的化学空间以寻找满足多种性质约束的新型化合物，为先导结构的发现提供了功能强大的计算工具（图1）[2~3]；发展了一种新型的基于图表示学习的蛋白-小分子相互作用的打分方法IGN，其性能显著优于同类机器学习打分方法和分子对接程序 [3]；系统研究了机器学习打分函数中的若干关键问题，开发了蛋白-小分子相互作用特征提取、个性化打分函数构建以及虚拟筛选在线计算平台ASFP [4~8]；创造性提出了计算生物靶标谱（CBFP）的概念，并将其作为新型分子表征实现骨架跃迁的新思路，成功发现具有全新骨架的强效PARP1抑制剂和DprE1抑制剂，证明其与传统化学表征相比具有更优的新骨架发现能力 [9~10]。'
      },
      {
        'image': 'research-new_d1-2.png', 
        'description': '开发出一系列ADMET和成药性理论预测方法和模型，包括水溶性（logS）、油/水分配系数（logP）、Caco-2渗透性、肠吸收、口服生物利用度、hERG心脏毒性、血脑屏障（BBB）、P-gp蛋白转运、孕烷X受体激活、呼吸毒性、泌尿系统毒性、急性毒性、频繁命中化合物、类药性等 [11~16]；针对小样本成药性数据预测精度差的难题，运用迁移学习、多任务学习、自监督学习等新型AI技术发展了快速精准的成药性预测方法（如多任务图注意力框架MGA和基于预训练的图网络模型MG-BERT和K-BERT），有效提升了多个成药性任务的预测精度，特别是对于样本较少的任务提升幅度更为显著 [17~19]；在长期方法学研究基础上，开发了关键成药性参数在线软件平台ADMETLab2.0，可实现17种物化性质、13种药物化学性质、24种成药性参数、27种毒性性质及8种毒性团规则的系统性评价，是目前国际上成药性参数评价最多、速度最快、预测精度最为优秀的免费在线计算平台之一 [20]。'
      }
    ],
    references: [
      'Ye Q, et al. (2021). "A unified drug-target interaction prediction framework based on knowledge graph and recommendation system." Nature Communications, 12, 6775.',
      'Wang J, et al. (2021). "Multi-constraint molecular generation based on conditional transformer, knowledge distillation and reinforcement learning." Nature Machine Intelligence, 3, 914-922.',
      'Wang M, et al. (2022). "Deep learning approaches for de novo drug design: an overview." Current Opinion in Structural Biology, 72, 135-144.',
      'Jiang D, et al. (2021). "InteractionGraphNet: a novel and efficient deep graph representation learning framework for accurate protein-ligand interaction predictions." Journal of Medicinal Chemistry, 64, 18209-18232.',
      'Shen C, et al. (2021). "Can machine learning consistently improve the scoring power of classical scoring functions? Insights into the role of machine learning in scoring functions." Briefings in Bioinformatics, 22, 497-514.',
      'Shen C, et al. (2021). "Beware of the generic machine learning-based scoring functions in structure-based virtual screening." Briefings in Bioinformatics, 22, bbaa070.',
      'Shen C, et al. (2020). "From machine learning to deep learning: advances in scoring functions for computational docking." WIRES Computational Molecular Science, 10, e1429.',
      'Zhang X, et al. (2021). "ASFP (Artificial Intelligence based Scoring Function Platform): a web server for the development of customized scoring functions." Journal of Cheminformatics, 13, 6.',
      'Xiong G, et al. (2021). "Computational bioactivity fingerprint similarities to navigate the discovery of novel scaffolds." Journal of Medicinal Chemistry, 64, 7544-7554.',
      'Hu X, et al. (2022). "Discovery of novel DprE1 inhibitors via computational bioactivity fingerprints and structure-based virtual screening." Acta Pharmacologica Sinica, in press.',
      'Tian S, et al. (2015). "The application of in silico drug-likeness predictions in pharmaceutical research." Advanced Drug Delivery Reviews, 86, 2-10.',
      'Lei T, et al. (2017). "ADMET evaluation in drug discovery. 18. Reliable prediction of chemical-induced urinary tract toxicity by boosting machine learning approaches." Molecular Pharmaceutics, 14, 3935-3953.',
      'Lei T, et al. (2017). "ADMET evaluation in drug discovery. 17. Development of quantitative and qualitative prediction models for chemical-induced respiratory toxicity." Molecular Pharmaceutics, 14, 2407-2421.',
      'Wu Z, et al. (2019). "ADMET Evaluation in Drug Discovery. 19. Reliable Prediction of Human Cytochrome P450 Inhibition Using Artificial Intelligence Approaches." Journal of Chemical Information and Modeling, 59, 4587-4601.',
      'Yang Z, et al. (2020). "The Application of Negative Design to Design More Desirable Virtual Screening Library." Journal of Medicinal Chemistry, 63, 4411-4429.',
      'Lei T, et al. (2017). "ADMET evaluation in drug discovery. 18. Reliable prediction of chemical-induced urinary tract toxicity by boosting machine learning approaches." Molecular Pharmaceutics, 14, 3935-3953.',
      'Wu Z, et al. (2021). "Mining Toxicity Information from Large Amounts of Toxicity Data." Journal of Medicinal Chemistry, 64, 6924-6936.',
      'Zhang X, et al. (2021). "MG-BERT: leveraging unsupervised atomic representation learning for molecular property prediction." Briefings in Bioinformatics, 22, bbab152.',
      'Wu Z, et al. (2022). "Knowledge-based BERT: a method to extract molecular features like computational chemists." Briefings in Bioinformatics, bbac131.',
      'Xiong G, et al. (2021). "ADMETlab 2.0: an integrated online platform for accurate and comprehensive predictions of ADMET properties." Nucleic Acids Research, 49(W1), W5-W14.'
    ]
  },
  {
    icon: Atom,
    title: '基于物理方法的药物设计方法研究',
    description: '基于分子对接的虚拟筛选成本低、效率高，已成为药物发现的关键技术。为提高虚拟筛选的预测精度，我们围绕靶标-配体相互作用预测展开了深入系统的方法学研究，开发了一系列针对药物设计和筛选的计算工具和软件，并应用于多个重要靶标的药物研究。',
    image: 'research-new_d2-1.png',
    extended: [
      {
        'image': '', 
        'description': '基于分子对接的虚拟筛选成本低、效率高，已成为药物发现的关键技术。分子对接采用的打分函数计算效率高但准确性相对较低，而且其往往忽略了靶蛋白柔性的影响。为提高虚拟筛选的预测精度，申请人围绕靶标-配体相互作用预测展开了深入系统的方法学研究，开发了一系列针对药物设计和筛选的计算工具和软件，并应用于多个重要靶标的药物研究。我们从2009年起对MM/PB(GB)SA方法中的若干核心理论问题进行了系统研究，深入探讨和评估了分子力场、溶剂化模型、原子电荷、构象熵、动力学采样时间等多种因素对MM/GBSA预测精度的影响，并针对不同体系提出了最优的预测策略 [1~11]；针对传统MM/GBSA方法无法有效表征蛋白-配体相互作用界面的非均一极性环境的这一固有缺陷，创造性地发展了基于可变介电的VD-MM/GBSA结合自由能预测方法，其根据残基的物化性质和化学环境对其介电常数进行优化，有效提升了蛋白-配体结合自由能的预测精度 [12~13]；在长期方法学研究的基础上，开发了CaFE、farPPI和HawkDock等一系列基于MM/PB(GB)SA方法的药物设计和筛选计算工具 [14~16]。'
      },
      {
        'image': 'research-new_d2-1.png', 
        'description': '为了克服传统MM/GBSA方法体系依赖性的问题，发展了基于结合自由能分解和机器学习的MIEC-SVM方法，并成功应用于多肽-蛋白相互作用研究以及多个靶点的小分子抑制剂筛选 [17-18]。采用不同计算策略深入探讨了靶点构象变化对虚拟筛选的影响，证明了合理处理靶点柔性对准确预测抑制剂结合机制以及提升虚拟筛选精度的重要性；在此基础上提出了基于靶点多构象的整合虚拟筛选方法，并将其成功应用于ALK、AR、ROCK1等多个靶标的药物设计和筛选，证明通过整合靶点不同构象的预测结果能有效考虑靶点的柔性，从而显著提高虚拟筛选的预测精度（右图）[19-20]。'
      }
    ],
    references: [
      'Wang E, et al. (2019). "End-Point binding free energy calculation with MM/PBSA and MM/GBSA: strategies and applications in drug design." Chemical Reviews, 119, 9478-9508.',
      'Wang E, et al. (2019). "Assessing the performance of the MM/PBSA and MM/GBSA methods. 10. Impacts of Enhanced Sampling and Variable Dielectric Model on Protein-Protein Interactions." Physical Chemistry Chemical Physics, 21, 18958-18969.',
      'Weng G, et al. (2019). "Assessing the performance of the MM/PBSA and MM/GBSA methods. 9. Prediction reliability of binding affinities and binding poses for protein-peptide complexes." Physical Chemistry Chemical Physics, 21, 10135-10145.',
      'Chen F, et al. (2018). "Assessing the performance of MM/PBSA and MM/GBSA methods. 8. Predicting binding free energies and poses of protein-RNA complexes." RNA, 24, 1183-1194.',
      'Sun H, et al. (2018). "Assessing the performance of MM/PBSA and MM/GBSA methods. 7. Entropy effects on the performance of end-point binding free energy calculation approaches." Physical Chemistry Chemical Physics, 20, 14450-14460.',
      'Chen F, et al. (2016). "Assessing the performance of the MM/PBSA and MM/GBSA methods. 6. Capability to predict protein-protein binding free energies and re-rank binding poses generated by protein-protein docking." Physical Chemistry Chemical Physics, 18, 22129-22139.',
      'Sun H, et al. (2014). "Assessing the Performance of MM/PBSA and MM/GBSA Methods. 5. Improved Docking Performance by Using High Solute Dielectric Constant MM/GBSA and MM/PBSA Rescoring." Physical Chemistry Chemical Physics, 16, 22035-22045.',
      'Sun H, et al. (2014). "Assessing the Performance of MM/PBSA and MM/GBSA Methods. 4. Accuracies of MM/PBSA and MM/GBSA Methodologies Evaluated by Various Simulation Protocols using PDBbind Data Set." Physical Chemistry Chemical Physics, 16, 16719-16729.',
      'Xu L, et al. (2013). "Assessing the Performance of MM/PBSA and MM/GBSA Methods. 3. The Impact of Force Fields and Ligand Charge Models." Journal of Physical Chemistry B, 117, 8408-8421.',
      'Hou T, et al. (2011). "Assessing the performance of the Molecular Mechanics/Poisson Boltzmann Surface Area and Molecular Mechanics/ Generalized Born Surface Area methods. II. The accuracy of ranking poses generated from docking." Journal of Computational Chemistry, 32, 866-877.',
      'Hou T, et al. (2011). "Assessing the performance of the MM/PBSA and MM/GBSA methods: I. The accuracy of binding free energy calculations based on molecular dynamics simulations." Journal of Chemical Information and Modeling, 51, 69-82.',
      'Wang E, et al. (2021). "VAD-MM/GBSA: A Variable Atomic Dielectric MM/GBSA Model for Improved Accuracy in Protein–Ligand Binding Free Energy Calculations." Journal of Chemical Information and Modeling, 61, 2844-2856.',
      'Wang E, et al. (2020). "Development and Evaluation of MM/GBSA Based on a Variable Dielectric GB Model for Predicting Protein-Ligand Binding Affinities." Journal of Chemical Information and Modeling, 60, 5353-5365.',
      'Weng G, et al. (2019). "HawkDock: a web server to predict and analyze the protein-protein complex based on computational docking and MM/GBSA." Nucleic Acids Research, 47, W322-W330.',
      'Liu H, Hou T. (2016). "CaFE: a tool for binding affinity prediction using end-point free energy methods." Bioinformatics, 32, 2216-2218.',
      'Wang Z, et al. (2019). "farPPI: a webserver for accurate prediction of protein-ligand binding structures for small-molecule PPI inhibitors by MM/PB(GB)SA methods." Bioinformatics, 35, 1777-1779.',
      'Hou T, et al. (2012). "Characterization of domain-peptide interaction interface: prediction of SH3 domain-mediated protein-protein interaction network in yeast by generic structure-based models." Journal of Proteome Research, 11, 2982-2995.',
      'Xu Z, Hou T, et al. (2012). "Proteome-wide detection of Abl1 SH3 binding peptides by integrating computational prediction and peptide microarray." Molecular & Cellular Proteomics, 11, O111.010389.',
      'Tian S, et al. (2013). "Development and evaluation of an integrated virtual screening strategy by combining molecular docking and pharmacophore searching based on multiple protein structures." Journal of Chemical Information and Modeling, 53, 2743-2756.',
      'Kong X, et al. (2018). "Importance of protein flexibility in molecular recognition: a case study on Type-I1/2 inhibitors of ALK." Physical Chemistry Chemical Physics, 20, 4851-4863.'
    ]
  },
  {
    icon: Target,
    title: '重要靶点的药物分子设计',
    description: '先导化合物的发现和优化是新药开发中不可或缺的关键环节。我们通过整合计算模拟以及体内/体外生物活性评价，针对多个重要药物靶点进行了先导化合物的筛选与优化，广泛涉足药物临床前开发的各个阶段，加快药物发现和开发的速度。',
    image: 'research-new_d3-1.png',
    extended: [
      {
        'image': 'research-new_d3-1.png', 
        'description': '先导化合物的发现和优化是新药开发中不可或缺的关键环节。计算机虚拟筛选（VS）技术能帮助我们有效发现结构新颖的活性分子，在药物开发的早期阶段发挥显著作用。我们课题组通过整合计算模拟以及体内/体外生物活性评价，针对多个重要药物靶点进行了先导化合物的筛选与优化。我们的优势在于广泛并深入涉足药物临床前开发的各个阶段，包括先导化合物的发现、化学合成优化、化学/生物活性检测、成药性和安全性评价等，能加快药物发现和开发的速度，并降低药物开发的成本。目前我们研究的药物靶点包括AR、GR、ALK、ROCK、PI3K、MIF、ALK、Tie-2和A2A等 [1~15]。例如：我们采用MIEC-SVM预测模型、分子对接、结合自由能计算等多种CADD方法设计并合成了一类新型的抗耐药性ALK “桥联”小分子，该类抑制剂可同时靶向ATP活性位点和邻近的疏水别构口袋；该类抑制剂在分子层面以及细胞层面均表现出优异的生物活性，是目前已报导的体外活性最强的I1/2型ALK抑制剂（001-017：IC50=0.27 nM），较已上市药物克唑替尼和色瑞替尼体外活性更好，其中001-017对多种ALK耐药突变体仍表现出很强的抑制活性及高度的激酶选择性，有望进入临床前研究 [12]。'
      },
      
    ],
    references: [
      'Shi R, et al. (2022). "High-throughput glycolytic inhibitor discovery targeting glioblastoma by graphite dots-assisted LDI mass spectrometry." Science Advances, 8, eabl4923.',
      'Chai X, et al. (2022). "Discovery of N-(4-(Benzyloxy)-phenyl)-sulfonamide Derivatives as novel antagonists of the human androgen receptor targeting the activation function 2." Journal of Medicinal Chemistry, 65, 2507-2521.',
      'Pang J, et al. (2022). "Discovery of novel antagonists targeting the DNA binding domain of androgen receptor by integrated docking-based virtual screening and bioassays." Acta Pharmacologica Sinica, 43, 229-239.',
      'Fu W, et al. (2021). "Discovery of a novel androgen receptor antagonist manifesting evidence to disrupt the dimerization of the ligand-binding domain via attenuating the hydrogen-bonding network." Journal of Medicinal Chemistry, 64, 17221-17238.',
      'Tang Q, et al. (2020). "Novel androgen receptor antagonist identified by structure-based virtual screening, structural optimization, and biological evaluation." European Journal of Medicinal Chemistry, 192, 112156.',
      'Zhou W, et al. (2019). "Discovery of Novel Androgen Receptor Ligands by Structure-based Virtual Screening and Bioassays." Genomics, Proteomics & Bioinformatics, 16, 416-427.',
      'Hu X, et al. (2022). "Discovery of novel GR ligands towards druggable GR antagonist conformations identified by MD Simulations and Markov state model analysis." Advanced Science, 9, 2102435.',
      'Fu W, et al. (2021). "Discovery of a novel Fusarium Graminearum Mitogen-activated Protein Kinase (FgGpmk1) inhibitor for the treatment of fusarium head blight." Journal of Medicinal Chemistry, 64, 13841-13852.',
      'Wang Y, et al. (2021). "Discovery of novel HBV capsid assembly modulators by structure-based virtual screening and bioassays." Bioorganic & Medicinal Chemistry, 36, 116096.',
      'Tang Y, et al. (2020). "Structure‐based discovery of caspase‐1 inhibitor with therapeutic potential for febrile seizures and later enhanced epileptogenic susceptibility." British Journal of Pharmacology, 17, 3519-3534.',
      'Kong X, et al. (2019). "Drug discovery targeting anaplastic lymphoma kinase (ALK)." Journal of Medicinal Chemistry, 62, 10927-10954.',
      'Pan P, et al. (2017). "Combating drug-resistant mutants of ALK with potent and selective Type-I1/2 inhibitors by stabilizing unique DFG-shifted loop conformation." ACS Central Science, 3, 1208-1220.',
      'Pan P, et al. (2018). "Structure-based Drug Design and Identification of H2O-soluble and Low Toxic Hexacyclic Camptothecin Derivatives with Improved Efficacy in both Cancer and Lethal Inflammation Models In Vivo." Journal of Medicinal Chemistry, 61, 8613-8624.',
      'Xu L, et al. (2014). "Discovery of novel inhibitors targeting macrophage migration inhibitory factor via structure-based virtual screening and bioassays." Journal of Medicinal Chemistry, 57, 3737-3745.',
      'Zhu J, et al. (2021). "Targeting phosphatidylinositol 3‐kinase gamma (PI3Kγ): Discovery and development of its selective inhibitors." Medicinal Research Reviews, 43, 1599-1621.'
    ]
  },
  {
    icon: Microscope,
    title: '基于多尺度分子模拟的靶标-配体识别作用机制研究',
    description: '传统实验方法无法描述配体−靶标之间的动态识别过程。全原子模拟（包括常规动力学模拟和增强采样动力学模拟）可以辅助实验技术捕捉原子层次的动力学和热力学作用机制，揭示复杂的分子机制，如药物分子耐药性机制等。',
    image: 'research-new_d4-1.png',
    extended: [
      {
        'image': 'research-new_d4-1.png',
        'description': "传统实验方法（X-ray和NMR）可以有效地表征蛋白或蛋白-配体的静态或准静态结构，但是无法描述配体−靶标之间的动态识别过程。在这种情况下，全原子模拟（包括常规动力学模拟和增强采样动力学模拟）可以辅助实验技术捕捉原子层次的动力学和热力学作用机制。我们采用常规动力学模拟和增强采样动力学模拟技术（如元动力学、伞形采样、适配性偏向力等方法）揭示了许多复杂的分子机制，开展了药物分子耐药性机制、ABC转运蛋白作用机制、小分子保留时间计算等方面的理论分析 [1-15]。例如，通过元动力学模拟对小分子抑制剂结合与解离过程中势能面的表征，我们发现ROS1激酶中G2032R突变可以从两方面影响crizotinib的结合，其中ROS1中僵硬的P-loop区既可以直接降低crizotinib的结合，同时又可以显著缩减crizotinib在G2032R突变型ROS1中的保留时间，从而产生强烈耐药性 [11]（右图）。"
      },
      {
        'image': 'research-new_d4-2.png',
        'description': "此外，我们使用长时间常规动力学模拟以及元动力学方法揭示了AR受体蛋白中不同拮抗剂和激动剂对AR蛋白激活过程的影响 [7]。有趣的是，从势能面的表征中我们发现拮抗态AR受体蛋白的许多中间体结构均有可能成为潜在的药物靶标（图6）。"
      },
    ],
    references: [
      'Haiyi Chen, Rui Zhou, Jinping Pang, Yue Guo, Jiawen Chen, Yu Kang*, Mojie Duan*, Tingjun Hou*, Molecular view on the dissociation pathways and transactivation regulation mechanism of nonsteroidal GR ligands, Journal of Chemical Information and Modeling, 2022, in press.',
      'Haiyi Chen, Yu Kang, Mojie Duan*, Tingjun Hou*, Regulation mechanism for the binding between the SARS-CoV-2 spike protein and host angiotensin-converting enzyme II, The Journal of Physical Chemistry Letters, 2021, 12, 6252-6261.',
      'Yongchang Xu, Haiyi Chen, Huimin Zhang, Saif Ullah, Tingjun Hou*, Youjun Feng*, The MCR-3 inside linker appears as a facilitator of colistin resistance, Cell Reports, 2021, 35, 109135.',
      'Ye Jin, Mojie Duan, Xuwen Wang, Xiaotian Kong, Wenfang Zhou, Huiyong Sun, Hui Liu, Dan Li, Huidong Yu, Youyong Li*, Tingjun Hou*, Communication between the ligand-binding pocket (LBP) and the activation function-2 (AF2) domain of androgen receptor revealed by molecular dynamics simulations, Journal of Chemical Information and Modeling, 2019, 59, 842-857.',
      'Na Liu, Wenfang Zhou, Yue Guo, Junmei Wang, Weitao Fu, Huiyong Sun, Dan Li, Mojie Duan*, Tingjun Hou*, Molecular Dynamics Simulations Revealed the Regulation of Ligands to the Interactions between Androgen Receptor and Its Coactivator, Journal of Chemical Information and Modeling, 2018, 58, 1652-1661.',
      'Huiyong Sun, Youyong Li, Mingyun Shen, Dan Li, Yu Kang. Tingjun Hou*, Characterizing drug-target residence time with metadynamics: how to achieve dissociation rate efficiently without losing accuracy against much time-consuming approaches, Journal of Chemical Information and Modeling, 2017, 57, 1895-1906.',
      'Mojie Duan, Na Liu, Wenfang Zhou, Dan Li, Minghui Yang*, Tingjun Hou*, Structural diversity of ligand-binding androgen receptors revealed by microsecond long molecular dynamics simulations and enhanced sampling, Journal of Chemical Theory and Computation, 2016, 12, 4611-4619.',
      'Huiyong Sun, Pengcheng Chen, Dan Li, Youyong Li, Tingjun Hou*, Directly-binding rather than induced-fit dominated binding affinity difference in (S) and (R)-crizotinib bound MTH1, Journal of Chemical Theory and Computation, 2016, 12, 851-860.',
      'Hui Liu, Dan Li, Youyong Li, Tingjun Hou*, Atomistic molecular dynamics simulations of ATP-binding cassette transporters, WIREs Computational Molecular Science, 2016, 6, 255-265.',
      'Nan Li, Richard I. Ainsworth, Bo Ding, Tingjun Hou*, and Wei Wang*, Using Hierarchical Virtual Screening to Combat Drug Resistance of the HIV-1 Protease, Journal of Chemical Information and Modeling, 2015, 55, 1400-1412.',
      'Huiyong Sun, Youyong Li, Sheng Tian, Junmei Wang, Tingjun Hou*, P-loop Conformation Governed Crizotinib Resistance in G2032R-mutated ROS1 Tyrosine Kinase: Clues from Free Energy Landscape, PLoS Computational Biology, 2014, 10, e1003729.',
      'Yan Guan, Huiyong Sun, Youyong Li, Peichen Pan, Dan Li, Tingjun Hou*, The competitive binding between inhibitors and substrates of HCV NS3/4A protease: a general mechanism of drug resistance, Antiviral Research, 2014, 103, 60-70.',
      'Huiyong Sun, Youyong Li*, Dan Li, Tingjun Hou*, Insight into Crizotinib Resistance Mechanisms Caused by Three Mutations in ALK Tyrosine Kinase using Free Energy Calculation Approaches, Journal of Chemical Information and Modeling, 2013, 53, 2376-2389.',
      'Peichen Pan, Youyong Li, Huidong Yu, Tingjun Hou*, Molecular principle of topotecan resistance by topoisomerase I mutations through molecular modeling approaches, Journal of Chemical Information and Modeling, 2013, 53, 997-1006.',
      'Jing Zhang#, Tingjun Hou# (Co-first author), Wei Wang, Jun S. Liu, Detecting and understanding combinatorial mutation patterns responsible for HIV drug resistance, Proceedings of the National Academy of Sciences, 2010, 107, 1321-1326.'
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
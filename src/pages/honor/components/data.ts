export function importImage(imgPath: string) {
  if (!imgPath) {
    console.error('Image path is undefined');
    return '';
  }
  const imgUrl = new URL(`../../../assets/imgs/${imgPath}`, import.meta.url).href;
  return imgUrl;
}

// 定义数据类型
export interface GroupPhoto {
  id: number
  src: string
  alt: string
  year: string
}

export interface CollectiveHonor {
  id: number
  title: string
  title_en: string
  year: string
  level: string
  honor: string
  participants: string[]
  instructors: string[]
  image: string | null
}

export interface TeacherHonor {
  id: number
  title: string
  level: string
  year: string
  participants: string[]
  hasCertificate: boolean
  image: string | null
}

// 课题组合照数据
export const groupPhotos: GroupPhoto[] = [
  {
    id: 1,
    src: importImage('group-photo-1.jpg'),
    alt: '课题组合照 2022',
    year: '2022'
  },
  {
    id: 2,
    src: importImage('group-photo-2.jpg'),
    alt: '课题组合照 2023',
    year: '2023'
  }
]

// 教师荣誉
export const teacherHonors: TeacherHonor[] = [
  {
    id: -4,
    title: '2018年科技部中青年科技创新领军人才',
    level: '国家级',
    year: '2018',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: importImage('teacher-honor-04.png')
  },
  {
    id: -1,
    title: '2014年度高校科学进步奖二等奖',
    level: '国家级',
    year: '2014',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: importImage('teacher-honor-0.png')
  },
  {
    id: 0,
    title: '2009年度高校自然科学奖二等奖',
    level: '国家级',
    year: '2009',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: importImage('teacher-honor-01.png')
  },
  {
    id: -2,
    title: '2015年浙江省药学会医药科技一等奖',
    level: '省级',
    year: '2015',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: importImage('teacher-honor-02.png')
  },
  {
    id: -3,
    title: '2017年青年计算化学家奖',
    level: '国家级',
    year: '2017',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: importImage('teacher-honor-03.png')
  },
  {
    id: 1,
    title: '浙江大学药学院2024年度五号导学团队',
    level: '校级',
    year: '2025',
    participants: ['侯廷军', '谢昌谕', '康玉', '潘培辰', '李丹'],
    hasCertificate: true,
    image: importImage('teacher-honor-1.jpg')
  },
  {
    id: 2,
    title: '2024年全国药学专业学位研究生精品课程',
    level: '国家级',
    year: '2024',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: importImage('teacher-honor-2.jpg')
  },
  {
    id: 3,
    title: '2023年江芷杯优秀指导教师',
    level: '江芷杯',
    year: '2023',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: null
  },
  {
    id: 4,
    title: '2023年江芷杯优秀指导教师',
    level: '江芷杯',
    year: '2023',
    participants: ['康玉'],
    hasCertificate: true,
    image: importImage('teacher-honor-4.jpg')
  },
  {
    id: 5,
    title: '2022年江芷杯优秀指导教师',
    level: '江芷杯',
    year: '2022',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: importImage('teacher-honor-5.jpg')
  },
  {
    id: 6,
    title: '2020年度浙江大学药学院先进工作者',
    level: '校级',
    year: '2020',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: null
  },
  {
    id: 7,
    title: '2021年江芷杯优秀指导教师',
    level: '江芷杯',
    year: '2021',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: null
  },
  {
    id: 8,
    title: '2016年度浙江大学校级先进工作者',
    level: '校级',
    year: '2016',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: importImage('teacher-honor-8.jpg')
  },
  {
    id: 9,
    title: '2015年浙江省药学会医药科技一等奖（个人奖）',
    level: '省级',
    year: '2015',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: importImage('teacher-honor-10.png')
  },
  {
    id: 11,
    title: '2012年江苏省“青蓝工程”培养对象',
    level: '省级',
    year: '2012',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: null
  },
  {
    id: 12,
    title: '2012年第四届青年科学之星',
    level: '校级',
    year: '2012',
    participants: ['侯廷军'],
    hasCertificate: true,
    image: importImage('teacher-honor-11.png')
  },

]

// 集体荣誉数据
export const collectiveHonors: CollectiveHonor[] = [
  {
    id: 0,
    title: '浙江省国际大学生创新大赛（2025）金奖',
    title_en: 'Gold Award in Zhejiang International College Students Innovation Competition (2025)',
    level: '创新大赛',
    year: '2025',
    month: '7',
    honor: '金奖',
    participants: [''],
    instructors: [''],
    image: null
  },
  {
    id: 1,
    title: '中国国际大学生创新大赛（2024）金奖',
    title_en: 'Gold Award in China International College Students Innovation Competition (2024)',
    level: '创新大赛',
    honor: '金奖',
    year: '2024',
    participants: ['王高昂', '刘毅飞', '渠旺林', '杜红岩', '张徐俊', '叶青', '王晓瑞'],
    instructors: ['侯廷军', '潘培辰', '康玉', '李丹', '陈海轶'],
    image: null
  },
  {
    id: 2,
    title: '第十四届"挑战杯"秦创原中国大学生创业计划竞赛金奖',
    title_en: 'Gold Award in the 14th "Challenge Cup" Qinchuangyuan China College Students Business Plan Competition',
    level: '挑战杯',
    honor: '金奖',
    year: '2024',
    participants: ['刘毅飞', '王高昂', '张徐俊', '叶青', '王晓瑞', '渠旺林', '王艺霖', '余云涛'],
    instructors: ['侯廷军', '康玉', '潘培辰', '吴纬东', '陈海轶'],
    image: importImage('honor-2.jpg')
  },
  {
    id: 3,
    title: '浙江省国际大学生创新大赛（2024）金奖',
    title_en: 'Gold Award in Zhejiang International College Students Innovation Competition (2024)',
    level: '创新大赛',
    honor: '金奖',
    year: '2024',
    participants: ['王高昂', '刘毅飞', '渠旺林', '杜红岩', '张徐俊', '叶青', '王晓瑞'],
    instructors: ['侯廷军', '潘培辰', '康玉', '李丹', '陈海轶'],
    image: importImage('honor-3.jpg')
  },
  {
    id: 4,
    title: '浙江省第十四届"挑战杯"大学生创业计划竞赛金奖',
    title_en: 'Gold Award in the 14th "Challenge Cup" College Students Business Plan Competition of Zhejiang Province',
    level: '挑战杯',
    honor: '金奖',
    year: '2024',
    participants: ['刘毅飞', '王高昂', '张徐俊', '叶青', '王晓瑞', '渠旺林', '王艺霖', '余云涛'],
    instructors: ['侯廷军', '康玉', '潘培辰', '杨慧蓉', '陈海轶'],
    image: importImage('honor-4.jpg')
  },
  {
    id: 5,
    title: '浙江大学第十六届"蒲公英"大学生创业大赛特等奖',
    title_en: 'Special Prize in the 16th "Dandelion" College Students Entrepreneurship Competition of Zhejiang University',
    level: '蒲公英',
    honor: '特等奖',
    year: '2024',
    participants: ['王高昂', '刘毅飞', '渠旺林', '杜红岩', '张徐俊', '叶青', '王晓瑞'],
    instructors: ['侯廷军', '潘培辰', '康玉', '李丹', '陈海轶'],
    image: importImage('honor-5.jpg')
  },
  {
    id: 6,
    title: '第六届研究生人工智能创新大赛一等奖',
    title_en: 'First Prize in the 6th Graduate Student Artificial Intelligence Innovation Competition',
    level: '人工智能创新大赛',
    honor: '一等奖',
    year: '2024',
    participants: ['张昊天', '黄元盛', '余云涛', '杜刚'],
    instructors: ['谢昌谕'],
    image: importImage('honor-6.jpg')
  },
  {
    id: 7,
    title: '第六届研究生人工智能创新大赛二等奖',
    title_en: 'Second Prize in the 6th Graduate Student Artificial Intelligence Innovation Competition',
    level: '人工智能创新大赛',
    honor: '二等奖',
    year: '2024',
    participants: ['王高昂', '刘毅飞'],
    instructors: ['侯廷军', '潘培辰'],
    image: importImage('honor-7.jpg')
  },
  {
    id: 8,
    title: '江芷杯现代生物与制药技术创新创业大奖赛一等奖',
    title_en: 'First Prize in Jiangzhi Cup Modern Biology and Pharmaceutical Technology Innovation and Entrepreneurship Competition',
    level: '江芷杯',
    honor: '一等奖',
    year: '2024',
    participants: ['王高昂', '刘毅飞'],
    instructors: ['侯廷军', '潘培辰', '康玉', '李丹'],
    image: null
  },
  {
    id: 10,
    title: '江芷杯现代生物与制药技术创新创业大奖赛二等奖',
    title_en: 'Second Prize in Jiangzhi Cup Modern Biology and Pharmaceutical Technology Innovation and Entrepreneurship Competition',
    level: '江芷杯',
    honor: '二等奖',
    year: '2023',
    participants: ['张昊天', '杜刚'],
    instructors: ['侯廷军', '谢昌谕', '潘培辰', '康玉'],
    image: null
  },
  {
    id: 11,
    title: '第四届"都正杯"•生物医药人工智能创新应用大赛特等奖',
    title_en: 'Special Prize in the 4th "Duzheng Cup" Biomedicine AI Innovation Application Competition',
    level: '都正杯',
    honor: '特等奖',
    year: '2023',
    participants: ['张昊天', '杜刚'],
    instructors: ['侯廷军', '康玉', '谢昌谕'],
    image: null
  },
  {
    id: 9,
    title: '江芷杯现代生物与制药技术创新创业大奖赛一等奖',
    title_en: 'First Prize in Jiangzhi Cup Modern Biology and Pharmaceutical Technology Innovation and Entrepreneurship Competition',
    level: '江芷杯',
    honor: '一等奖',
    year: '2022',
    participants: ['张昊天'],
    instructors: ['侯廷军', '潘培辰', '康玉', '李丹'],
    image: null
  },
] 
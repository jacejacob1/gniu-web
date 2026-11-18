// Every word and image on the site lives in this file.
// Edit here; the pages pick the changes up automatically.

export const site = {
  name: 'Good News International University',
  short: 'GNIU',
  iso: 'ISO 9001:2015',
  logo: '/images/logo.png',
  logoLarge: '/images/logo-large.png',
  phones: ['+91 98405 21972', '+91 97899 65897'],
  emails: ['admin@gniu.org', 'revjacobsimon@gmail.com'],
  // The Wix site linked these icons to Wix's own accounts.
  // Add the university's real profile URLs and the icons appear in the footer.
  social: { instagram: '', youtube: '', facebook: '' },
};

export const gown = {
  saffron: '#F4BE1A',
  oxblood: '#7A1626',
  violet: '#4C2A85',
  rose: '#D4317A',
  cobalt: '#1F4FBF',
};

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'About us',
    href: '/about/',
    children: [
      { label: 'About the university', href: '/about/' },
      { label: 'The founder', href: '/founder/' },
      { label: 'Statement of faith', href: '/statement-of-faith/' },
    ],
  },
  {
    label: 'Academics',
    href: '/programs/',
    children: [
      { label: 'Degrees & programs', href: '/programs/' },
      { label: 'Admission procedure', href: '/admissions/' },
    ],
  },
  { label: 'Downloads', href: '/downloads/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact us', href: '/contact/' },
];

export const offices = [
  {
    name: 'India office',
    lines: ['A-10, Block, Eden Gardens,', 'Alapakkam Main Road, Tiruvanchery,', 'Mappedu, Chennai - 126.'],
  },
  {
    name: 'International office',
    lines: ['P.O. Box 31391, Jamaica, Queens,', 'New York – 11431, U.S.A.'],
  },
  {
    name: 'South Asia office',
    lines: ['Level 35 & 37, West Tower,', 'World Trade Centre,', 'Colombo 01, Sri Lanka.'],
  },
];

export const home = {
  verse: '“..teaching every man in all wisdom; that we may present every man perfect in Christ Jesus”',
  verseRef: 'Colossians 1:28',
  intro:
    "The need to look at man and society from the perspective of a powerful God who created the universe is paramount at this juncture. Biblical Study and knowledge that facilitates such a response to God's word is to be provided not only to Christian pastors but also to leaders. It’s important that theological education should be available to all of those who seek it. The university is provided with well anointed teachers both Nationally & Internationally with practically needed subjects of this 21st Century.",
  doors: [
    {
      title: 'About the Founder',
      text: 'Know about Our Founder, Rev. Dr. G. Jacob Simon and his journey',
      cta: 'Read about',
      href: '/founder/',
      image: '/images/home-founder.jpg',
      color: gown.saffron,
      dark: false,
    },
    {
      title: 'About the University',
      text: 'More than 2000 students from different parts of the world have studied with us so far.',
      cta: 'Read more',
      href: '/about/',
      image: '/images/prev-1.jpg',
      color: gown.oxblood,
      dark: true,
    },
    {
      title: 'Courses Offered',
      text: 'Get the list of courses we offer at GNIU and apply today!',
      cta: 'See courses',
      href: '/programs/',
      image: '/images/conv24-1.jpg',
      color: gown.violet,
      dark: true,
    },
  ],
};

export const about = {
  paragraphs: [
    "The need to look at man and society from the perspective of a powerful God who created the universe is paramount at this juncture. Biblical Study and knowledge that facilitates such a response to God's word is to be provided not only to Christian pastors but also to leaders. It’s important that Theological education should be available to all of those who seek it.",
    'The University is provided with well anointed teachers both Nationally & Internationally with practically needed subjects of this 21st Century. At the University we provide with more than 8000 books for the usage of the students.',
    'The University provides with excellent study facilities for the Christian worker in the mission field. By the grace of God, we had more than 2000 students who have studied so far from different parts of the world. 20 people were honoured in London, UK, a few in the USA, Canada, Nigeria, Ghana, Philippines, Malaysia, Singapore, Dubai, Abu Dhabi and many in Sri Lanka.',
    'We have started extension centers at Bhutan, New Delhi, Uttarakhand, Mumbai, Telangana, Allahabad, and in Jaipur. Along with Theological studies we also honour men and women of learning with Doctoral degrees in their respective areas of their ministry.',
    'We also provide distance education in theology online for candidates who want to study from their home. Students from various countries study their theology in our University. We also ordain our students who, after finishing their courses and want to go into ministry.',
  ],
  mission: 'Our Vision and Mission is to fulfil the Great Commission of God in this end time.',
  centres: ['Bhutan', 'New Delhi', 'Uttarakhand', 'Mumbai', 'Telangana', 'Allahabad', 'Jaipur'],
  credentials: [
    { src: '/images/cred-3.jpg', alt: 'ISO 9001:2015 certificate of registration issued to Good News International University' },
    { src: '/images/cred-7.jpg', alt: 'ISO 9001:2015 certificate of registration for educational and charity services' },
    { src: '/images/cred-1.jpg', alt: 'Letter from the United Nations NGO Branch to Good News International University' },
    { src: '/images/cred-2.jpg', alt: 'Dayspring Theological University affiliation certificate' },
    { src: '/images/cred-6.jpg', alt: 'Synod of Pentecostal Churches affiliation certificate' },
    { src: '/images/cred-4.jpg', alt: 'National Human Rights Commission, India human rights pledge certificate' },
    { src: '/images/cred-5.jpg', alt: 'Dr. Ambedkar Fellowship National Award 2013 certificate' },
  ],
};

export const founder = {
  portrait: '/images/founder.jpg',
  lead:
    'Prof. Rev. Dr. Jacob Simon is the Founder and President of the Good News International University. Spiritually endowed with the gifts of the Holy Spirit, Dr. Jacob Simon has been training and equipping Pastors, Leaders and believers to build the Kingdom of God in these last days.',
  sections: [
    {
      title: 'Education & Career',
      paragraphs: [
        'Dr. Jacob was born in a Christian family and was raised in the teachings of Lord Jesus Christ. Even from his young age he was passionate to serve Lord Jesus Christ and had a greater love for the Lord Almighty. After he completed his schooling, he went to complete his graduation in Madras Christian College, Chennai. After his graduation, he got employed in Chennai Port Trust and worked for 10 years.',
      ],
    },
    {
      title: 'The Ministry',
      paragraphs: [
        'Even when he was employed in a secular field, Dr. Jacob worked tirelessly to spread the Gospel to the unreached all over the Nation. God had a definite purpose in his life. God called him for a full time ministry. He served as an evangelist for 5 years and countless people were blessed through his teachings and Social work to the community. He is also a guitarist and Keyboard player for many years.',
        'Dr. Jacob Simon has dedicated his entire life for the ministry of God. As a visionary, he revolutionized the teaching ministry in several ways. By the grace of God, he established the Good News Bible College in 2012. With an initial strength of 8 students, GNIU became operational in Chennai, Tamilnadu. God blessed his endeavors for his deep adherence to his teaching calling. Year after year, GNIU grew every year. So far, almost 2000 students have studied at GNIU. GNIU is head-quartered in Chennai and has extension centres in many parts of the Nation.',
      ],
    },
  ],
  positions: [
    ['Founder / Chancellor', 'Good News International University, India'],
    ['Global Peace Ambassador, Secretary General, South Asia', 'United Nations Peace Ambassador Foundation, Canada'],
    ['International President', 'Global Churches Alliance, UK, USA, Sri Lanka'],
    ['National Director', 'Kingdom Global Ministerial Alliance, USA'],
    ['National Director for India', 'Africa for God Charity Organization, Africa'],
    ['Peace Ambassador for Israel', 'International Human Rights Peace Commission, Israel'],
    ['National Vice Chairman', 'People Forum of India, Gov. of India'],
    ['Director, International Affairs', 'Synod of Pentecostal Churches, India'],
    ['Global Missions Director', 'Anglican Churches in South India'],
  ],
  family:
    'Dr. Jacob Simon is married to Sis. Elizabeth and the couple is blessed with 2 sons, Jabin and Jacin. Both are well-trained musicians and well-equipped in ministry. Mrs. Elizabeth Jacob Simon serves as the Academic Dean for the Good News International University. She is also the Secretary of the South Chennai women’s wing of Synod of the Pentecostal Churches and the Chairman of Good News for Nations ministries.',
  awards: [
    { src: '/images/award-1.jpg', alt: 'Dr. Jacob Simon receiving a framed certificate on stage' },
    { src: '/images/award-2.jpg', alt: 'Dr. Jacob Simon being presented with an award' },
    { src: '/images/award-3.jpg', alt: 'Award presentation with a framed citation' },
    { src: '/images/award-5.jpg', alt: 'Receiving the Ambedkar National Award for Social Work in Delhi' },
    { src: '/images/award-4.jpg', alt: 'Graduation ceremony line-up on stage' },
    { src: '/images/award-6.jpg', alt: 'Award presentation at a conference hall' },
  ],
};

export const faith = [
  'the Bible to be the inspired, infallible, authoritative, and inerrant Word of God.',
  'there is one God, eternally existing in three persons: the Father, Son, and Holy Spirit.',
  'in the deity of Jesus Christ, His virgin birth, His sinless life, His miracles, His vicarious and atoning death, His bodily resurrection, His ascension to the right hand of the Father and His personal return in power and glory.',
  'that for the salvation of lost and sinful man regeneration by the Holy Spirit is absolutely essential.',
  'in the present ministry of the Holy Spirit by whose indwelling the Christian is enabled to live a godly life.',
  'in the resurrection of both the saved and the lost; those who are saved unto the resurrection of life, and those who are not unto the resurrection of damnation.',
  'in the spiritual unity of all believers in our Lord Jesus Christ.',
];

export const programs = {
  intro:
    'GNIU offers a variety of Theology courses and Certification programs. We also offer Doctorates for people well-recognized in their field.',
  list: [
    { name: 'Bachelor of Theology', abbr: 'B.Th', apply: 'https://forms.gle/NMCEBg9cionrVddH7', color: gown.saffron, dark: false },
    { name: 'Master of Arts - Christian Psychology', abbr: 'M.A', apply: 'https://forms.gle/Rc6SuZCMcxF9J9Wv6', color: gown.rose, dark: true },
    { name: 'Master of Divinity', abbr: 'M.Div', apply: 'https://forms.gle/JhszGSxXzc7mVh4G9', color: gown.cobalt, dark: true },
    { name: 'Master in Theology', abbr: 'M.Th', apply: 'https://forms.gle/TqfBiEUs5CUyNeecA', color: gown.violet, dark: true },
    { name: 'Doctor of Philosophy', abbr: 'Ph.D', apply: 'https://forms.gle/vHfZ17pvdzj1Z1vx5', color: gown.oxblood, dark: true },
  ],
};

export const admissions = [
  'Contact us to request an admissions application.',
  'Fill out the application form and pay the non-refundable application fee.',
  'Send the relevant documents along with your application to our Administrative Office.',
  'We will process your application together with the submitted documents to determine your admission and accreditation.',
  'A suggested program will be proposed to the student, including its schedule of required classes.',
  'The student will pay the registration costs and any applicable revalidation fees.',
  'The student will be introduced to his/her instructor in their location.',
  'The student will receive a list of required courses to complete during the first semester.',
  'By completing your program requirements and when all financial obligations are met, your title will be awarded on graduation.',
];

export const downloads = {
  intro: 'You can download our brochure and the application form online.',
  items: [
    {
      title: 'University Brochure',
      text: 'Check out our University Brochure to know more about us!',
      // Put the PDF in /public/files and set e.g. file: '/files/gniu-brochure.pdf'
      file: '',
      color: gown.saffron,
      dark: false,
    },
    {
      title: 'Application Form',
      text: 'Download our Application form and fill it and send it to us. Join us today!',
      file: '',
      color: gown.rose,
      dark: true,
    },
    {
      title: 'My Certificates',
      text: 'Download Your Certificates in PDF',
      file: '/certificates/',
      internal: true,
      color: gown.violet,
      dark: true,
    },
  ],
};

export const certificates = {
  note: 'All Certificates are password-protected, so enter the correct password obtained from your admin to access the certificates.',
};

export const gallery = [
  {
    title: 'Convocation 2025',
    images: [
      { src: '/images/conv25-2.jpg', alt: 'Chancellor addressing the Convocation 2025 from the lectern, faculty seated on stage' },
      { src: '/images/conv25-1.jpg', alt: 'Convocation 2025 group photograph of graduates in coloured gowns' },
    ],
  },
  {
    title: 'Convocation 2024',
    images: [
      { src: '/images/conv24-1.jpg', alt: 'Graduates standing in the hall at Convocation 2024' },
      { src: '/images/conv24-2.jpg', alt: 'Faculty and guests seated on stage at Convocation 2024' },
      { src: '/images/conv24-3.jpg', alt: 'A graduate receiving his certificate at Convocation 2024' },
    ],
  },
  {
    title: 'Honoring the Leaders',
    images: [
      { src: '/images/leaders-1.jpg', alt: 'A leader honoured on stage with a framed citation' },
      { src: '/images/leaders-2.jpg', alt: 'Presentation of a citation and shawl to a leader' },
      { src: '/images/leaders-3.jpg', alt: 'A certificate presented to a guest' },
    ],
  },
  {
    title: 'Our Previous Convocations',
    images: [
      { src: '/images/prev-1.jpg', alt: 'Convocation 2022-23 group photograph' },
      { src: '/images/prev-2.jpg', alt: 'Group photograph of graduates at an earlier convocation' },
      { src: '/images/prev-3.jpg', alt: 'Graduates holding their certificates at an early convocation' },
    ],
  },
];

export const partners = {
  accredited: [
    { src: '/images/p-un.png', name: 'United Nations' },
    { src: '/images/p-dayspring.png', name: 'Dayspring Theological University' },
    { src: '/images/p-ezra.png', name: 'Ezra University, Vellore' },
    { src: '/images/p-nci.png', name: 'National Churches of India' },
    { src: '/images/p-ihrpc.png', name: 'International Human Rights Peace Commission' },
    { src: '/images/p-gca.png', name: 'Global Churches Alliance' },
  ],
  affiliated: [
    { src: '/images/p-unpaf.png', name: 'United Nations Peace Ambassador Foundation' },
    { src: '/images/p-thumb.png', name: 'Word in Action Theological Seminary' },
    { src: '/images/p-nata.png', name: 'Nations Association for Theological Accreditation' },
    { src: '/images/p-kgma.png', name: 'Kingdom Global Ministerial Alliance' },
    { src: '/images/p-afgc.png', name: 'Africa for God Charity Organization' },
  ],
};

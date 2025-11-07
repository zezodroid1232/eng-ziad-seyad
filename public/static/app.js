const { useState, useEffect, useRef } = React;

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Power Programar
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors capitalize"
              >
                {item === 'home' ? 'الرئيسية' : item === 'about' ? 'عني' : item === 'services' ? 'الخدمات' : item === 'skills' ? 'المهارات' : item === 'projects' ? 'المشاريع' : 'تواصل معي'}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'services', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md capitalize"
              >
                {item === 'home' ? 'الرئيسية' : item === 'about' ? 'عني' : item === 'services' ? 'الخدمات' : item === 'skills' ? 'المهارات' : item === 'projects' ? 'المشاريع' : 'تواصل معي'}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section
const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const titles = ['مهندس ذكاء اصطناعي', 'مطور برمجيات محترف', 'خبير في جميع المجالات البرمجية'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const currentTitle = titles[currentTitleIndex];
    
    const interval = setInterval(() => {
      if (currentIndex <= currentTitle.length) {
        setDisplayText(currentTitle.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentTitleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="mb-8">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ziad&backgroundColor=b6e3f4" 
            alt="Ziad Sayed Abdelnabi" 
            className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          زياد سيد عبدالنبي
        </h1>
        
        <div className="h-20 mb-6">
          <p className="text-2xl md:text-3xl text-blue-300 font-semibold">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          شركة Power Programar - برمجة احترافية في جميع المجالات
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            <i className="fas fa-envelope mr-2"></i>
            تواصل معي
          </button>
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all"
          >
            <i className="fas fa-project-diagram mr-2"></i>
            شاهد المشاريع
          </button>
        </div>

        <div className="mt-12 flex justify-center space-x-6 space-x-reverse">
          <a href="https://github.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-white transition-colors">
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
          <a href={`https://wa.me/201095533451`} target="_blank" className="text-gray-300 hover:text-white transition-colors">
            <i className="fab fa-whatsapp text-3xl"></i>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          <i className="fas fa-user-circle text-blue-500 mr-3"></i>
          من أنا؟
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              أنا <span className="text-blue-400 font-semibold">زياد سيد عبدالنبي</span>، مهندس ذكاء اصطناعي ومطور برمجيات محترف مع خبرة واسعة في جميع مجالات البرمجة. أعمل من خلال شركتي <span className="text-purple-400 font-semibold">Power Programar</span> لتقديم حلول برمجية احترافية ومبتكرة.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              أمتلك خبرة عميقة في تطوير تطبيقات الذكاء الاصطناعي، تعلم الآلة، تطوير الويب، تطبيقات الموبايل، وأنظمة البرمجيات المعقدة. أسعى دائماً لتقديم أفضل الحلول التقنية التي تلبي احتياجات العملاء وتفوق توقعاتهم.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <i className="fas fa-brain text-blue-500 text-3xl mb-2"></i>
                <h3 className="text-white font-semibold">ذكاء اصطناعي</h3>
                <p className="text-gray-400 text-sm">خبير في AI & ML</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <i className="fas fa-code text-purple-500 text-3xl mb-2"></i>
                <h3 className="text-white font-semibold">تطوير كامل</h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <i className="fas fa-mobile-alt text-green-500 text-3xl mb-2"></i>
                <h3 className="text-white font-semibold">تطبيقات موبايل</h3>
                <p className="text-gray-400 text-sm">iOS & Android</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <i className="fas fa-database text-red-500 text-3xl mb-2"></i>
                <h3 className="text-white font-semibold">قواعد البيانات</h3>
                <p className="text-gray-400 text-sm">Database Expert</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">معلومات الاتصال</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-building text-blue-400 text-xl w-8"></i>
                <div>
                  <p className="text-gray-400 text-sm">الشركة</p>
                  <p className="text-white font-semibold">Power Programar</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-envelope text-purple-400 text-xl w-8"></i>
                <div>
                  <p className="text-gray-400 text-sm">البريد الإلكتروني</p>
                  <p className="text-white font-semibold">zezodroid91@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-phone text-green-400 text-xl w-8"></i>
                <div>
                  <p className="text-gray-400 text-sm">رقم الهاتف</p>
                  <p className="text-white font-semibold" dir="ltr">+20 109 553 3451</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <i className="fas fa-map-marker-alt text-red-400 text-xl w-8"></i>
                <div>
                  <p className="text-gray-400 text-sm">الموقع</p>
                  <p className="text-white font-semibold">مصر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: 'fa-brain',
      title: 'الذكاء الاصطناعي',
      description: 'تطوير حلول AI متقدمة باستخدام التعلم الآلي والتعلم العميق',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'fa-robot',
      title: 'التعلم الآلي',
      description: 'بناء نماذج ML للتنبؤ والتصنيف والتحليل الذكي للبيانات',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'fa-globe',
      title: 'تطوير الويب',
      description: 'تطبيقات ويب احترافية باستخدام أحدث التقنيات والأطر',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'fa-mobile-alt',
      title: 'تطبيقات الموبايل',
      description: 'تطوير تطبيقات iOS و Android باستخدام React Native و Flutter',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'fa-database',
      title: 'إدارة قواعد البيانات',
      description: 'تصميم وإدارة قواعد بيانات قوية وآمنة',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: 'fa-cloud',
      title: 'الحوسبة السحابية',
      description: 'نشر وإدارة التطبيقات على AWS و Azure و Google Cloud',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: 'fa-shield-alt',
      title: 'الأمن السيبراني',
      description: 'حماية التطبيقات والبيانات من التهديدات الأمنية',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'fa-chart-line',
      title: 'تحليل البيانات',
      description: 'استخراج رؤى قيمة من البيانات باستخدام أدوات تحليل متقدمة',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          <i className="fas fa-briefcase text-purple-500 mr-3"></i>
          الخدمات
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          نقدم مجموعة شاملة من الخدمات البرمجية الاحترافية
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                <i className={`fas ${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    {
      category: 'الذكاء الاصطناعي و التعلم الآلي',
      skills: [
        { name: 'TensorFlow', level: 95 },
        { name: 'PyTorch', level: 90 },
        { name: 'Scikit-learn', level: 92 },
        { name: 'OpenCV', level: 88 }
      ]
    },
    {
      category: 'تطوير الويب',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'Python/Django', level: 88 },
        { name: 'Next.js', level: 85 }
      ]
    },
    {
      category: 'تطوير الموبايل',
      skills: [
        { name: 'React Native', level: 90 },
        { name: 'Flutter', level: 85 },
        { name: 'Swift/iOS', level: 80 },
        { name: 'Kotlin/Android', level: 82 }
      ]
    },
    {
      category: 'قواعد البيانات',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'Redis', level: 85 },
        { name: 'MySQL', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          <i className="fas fa-code text-green-500 mr-3"></i>
          المهارات التقنية
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          خبرة واسعة في مجموعة متنوعة من التقنيات والأدوات
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-semibold">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: 'نظام ذكاء اصطناعي للتعرف على الوجوه',
      description: 'نظام متقدم للتعرف على الوجوه باستخدام Deep Learning مع دقة عالية',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'منصة تجارة إلكترونية متكاملة',
      description: 'منصة متكاملة للتجارة الإلكترونية مع نظام دفع آمن وإدارة متقدمة',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'تطبيق موبايل للصحة الذكية',
      description: 'تطبيق متكامل لتتبع الصحة واللياقة مع AI لتقديم نصائح شخصية',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'AI', 'Healthcare'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'نظام إدارة محتوى CMS',
      description: 'نظام قوي لإدارة المحتوى مع لوحة تحكم متقدمة وسهلة الاستخدام',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tags: ['Next.js', 'PostgreSQL', 'GraphQL', 'TypeScript'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'روبوت محادثة ذكي',
      description: 'Chatbot متقدم يستخدم NLP للرد على استفسارات العملاء بذكاء',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop',
      tags: ['Python', 'NLP', 'BERT', 'FastAPI'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'نظام تحليل البيانات الضخمة',
      description: 'منصة لتحليل ومعالجة البيانات الضخمة في الوقت الفعلي',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Spark', 'Kafka', 'Python', 'Big Data'],
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          <i className="fas fa-project-diagram text-yellow-500 mr-3"></i>
          المشاريع
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          نماذج من أعمالنا الاحترافية والمشاريع المنجزة
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-70 transition-opacity`}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setStatus('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          <i className="fas fa-envelope text-red-500 mr-3"></i>
          تواصل معي
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          هل لديك مشروع؟ دعنا نتحدث ونجعله حقيقة
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">معلومات الاتصال</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-building text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">الشركة</h4>
                  <p className="text-gray-400">Power Programar</p>
                  <p className="text-gray-500 text-sm">شركة برمجة احترافية في جميع المجالات</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">البريد الإلكتروني</h4>
                  <a href="mailto:zezodroid91@gmail.com" className="text-blue-400 hover:text-blue-300">
                    zezodroid91@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">رقم الهاتف</h4>
                  <a href="tel:+201095533451" className="text-blue-400 hover:text-blue-300" dir="ltr">
                    +20 109 553 3451
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">واتساب</h4>
                  <a href="https://wa.me/201095533451" target="_blank" className="text-blue-400 hover:text-blue-300">
                    اضغط للمراسلة عبر واتساب
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">تابعنا على السوشيال ميديا</h4>
              <div className="flex space-x-4 space-x-reverse">
                <a href="https://github.com" target="_blank" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="fab fa-github text-white text-xl"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="fab fa-linkedin text-white text-xl"></i>
                </a>
                <a href="https://twitter.com" target="_blank" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="fab fa-twitter text-white text-xl"></i>
                </a>
                <a href="https://facebook.com" target="_blank" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <i className="fab fa-facebook text-white text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">أرسل رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">الاسم</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="أدخل اسمك"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="أدخل رقم هاتفك (اختياري)"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                إرسال الرسالة
              </button>
              {status && (
                <div className="mt-4 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300 text-center">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
            Power Programar
          </h3>
          <p className="mb-4">شركة برمجة احترافية في جميع المجالات</p>
          <p className="text-sm">
            © 2024 Power Programar. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm mt-2">
            صنع بـ <i className="fas fa-heart text-red-500"></i> بواسطة زياد سيد عبدالنبي
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="font-sans" dir="rtl">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Menu, X, Code, Briefcase, GraduationCap, Award, Languages, ExternalLink, Folder, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = {
    phone: '+54 351 616 2693',
    email: 'juancruzfernandezberger@gmail.com',
    location: 'Córdoba, Argentina',
    address: 'Vuelta De Obligado 130, Yocsina, Malagueño'
  };

  const education = [
    {
      institution: 'Instituto Universitario Aeronáutico (IUA)',
      degree: 'Ingeniería en Informática',
      period: '2025 - Presente',
      status: 'Cursando'
    },
    {
      institution: 'Instituto Secundario Remedios De Escalada De San Martin',
      degree: 'Bachiller en Informática',
      period: '2025',
      status: 'Completado'
    }
  ];

  const certifications = [
    {
      title: 'Diseñador Junior E-commerce Full-Stack',
      issuer: 'Consejo Profesional de Ciencias Informáticas',
      year: '2025'
    },
    {
      title: 'Expositor - Encuentro de Innovadores Tecnológicos (Robótica)',
      issuer: 'Municipalidad de Villa Carlos Paz',
      year: '2025'
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'APIs REST', 'Firebase'] },
    { category: 'E-commerce', items: ['Full-Stack Development', 'Payment Integration', 'Product Management'] },
    { category: 'Herramientas', items: ['Git', 'VS Code', 'Figma', 'Postman'] }
  ];

  const languages = [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Medio-Avanzado' },
    { language: 'Portugués', level: 'Medio-Avanzado' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Newttopia E-Commerce',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, gestión de productos, sistema de usuarios y pasarela de pagos integrada.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      demoUrl: 'https://newttopiacompany-ecommerce.vercel.app/',
      githubUrl: 'https://github.com/juancruzfernandezberger-code/newttopiacompany-ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Mi Casa - Alquiler de Propiedades',
      description: 'Sistema de gestión y búsqueda de propiedades en alquiler con filtros avanzados, galería de imágenes y formulario de contacto.',
      technologies: ['React', 'Tailwind CSS', 'Leaflet', 'EmailJS'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      demoUrl: 'https://mi-casa-alquiler.vercel.app/',
      githubUrl: 'https://github.com/juancruzfernandezberger-code/miCasaAlquiler',
      featured: true
    }
  ];

  const references = [
    { name: 'Lic. Pablo Ariel Fernández', position: 'Gerente RR.HH y Relaciones Laborales Grupo Garbiglia', phone: '(351) 8085584' },
    { name: 'Lic. Monica Berger', position: 'Empleada Administrativa / licenciada en RR.HH', phone: '(351) 6878243' },
    { name: 'Cr. Kurt Berger', position: 'Titular Estudio Contable', phone: '(351) 3064683' },
    { name: 'Dra. Sofía Navarro', position: 'Tribunales de Córdoba', phone: '(351) 7015807' }
  ];

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'educacion', label: 'Educación' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 shrink-0">
              <Code className="w-6 h-6 md:w-7 md:h-7 text-gray-900" strokeWidth={2.5} />
              <span className="text-lg md:text-xl font-bold text-gray-900 truncate">Juan Cruz Fernández</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeSection === item.id 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3 space-y-6 text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Juan Cruz Fernández
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                Freelance Web Developer | Full-Stack E-commerce
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Estudiante de Ingeniería en Informática con certificación en desarrollo Full-Stack. 
                Especializado en crear soluciones digitales modernas, funcionales y escalables.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contactar</span>
                </a>
                <a
                  href="/Fernandez Juan cruz.pdf"
                  download="CV-Juan-Cruz-Fernandez.pdf"
                  className="w-full sm:w-auto px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar CV</span>
                </a>
              </div>
              <div className="flex justify-center md:justify-start space-x-4 pt-4">
                <a href="https://www.linkedin.com/in/juan-cruz-fernande/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
                  <Linkedin className="w-6 h-6 text-gray-800" />
                </a>
                <a href="https://github.com/juancruzfernandezberger-code" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
                  <Github className="w-6 h-6 text-gray-800" />
                </a>
              </div>
            </div>
            <div className="md:col-span-2 order-1 md:order-2">
              <div className="w-full max-w-sm mx-auto aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-700">
                <div className="text-center text-white p-6 md:p-8">
                  <Code className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 opacity-90" strokeWidth={1.5} />
                  <p className="text-lg md:text-xl font-light">Construyendo soluciones digitales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Sobre Mí</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-gray-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profesionalismo</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Persona organizada y responsable con buenas relaciones interpersonales y compromiso con la excelencia en cada proyecto.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 md:w-12 md:h-12 text-gray-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proactividad</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Siempre con deseos de seguir profundizando en el campo tecnológico y mantenerme actualizado con las últimas tendencias.
              </p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
              <Languages className="w-10 h-10 md:w-12 md:h-12 text-gray-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multiculturalidad</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Nivel medio-avanzado en inglés y portugués para trabajar en entornos internacionales y documentación técnica.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12 p-6 md:p-8 bg-gray-900 rounded-2xl text-white border border-gray-800">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Mi Propuesta de Valor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Versatilidad técnica con conocimientos en desarrollo Full-Stack y e-commerce",
                "Capacidad para trabajar en entornos multiculturales con documentación avanzada",
                "Liderazgo en trabajo en equipo con madurez y responsabilidad",
                "Amplia disponibilidad horaria para cumplir con plazos y calidad requerida"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <span className="text-gray-400 text-xl leading-none mt-1">•</span>
                  <span className="text-gray-300 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyectos</h2>
            <p className="text-base md:text-lg text-gray-600">Explora algunos de mis trabajos recientes y proyectos destacados</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden aspect-video bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full">
                      Destacado
                    </div>
                  )}
                  {/* Desktop Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 flex items-center space-x-2"><Eye className="w-4 h-4" /><span>Demo</span></a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 flex items-center space-x-2"><Github className="w-4 h-4" /><span>Código</span></a>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md border border-gray-200">{tech}</span>
                    ))}
                  </div>
                  {/* Mobile Buttons */}
                  <div className="grid grid-cols-2 gap-3 md:hidden mt-auto">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-900 text-gray-900 text-center rounded-lg text-sm font-medium">Demo</a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-900 text-white text-center rounded-lg text-sm font-medium">Código</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="educacion" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Educación y Certificaciones</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-5 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg shrink-0">
                    <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-gray-900" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 truncate">{edu.degree}</h3>
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] uppercase tracking-wider font-bold rounded-full border border-gray-200">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium text-sm md:text-base">{edu.institution}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Certificaciones</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border-l-4 border-gray-900 shadow-sm flex items-start space-x-3">
                <Award className="w-6 h-6 text-gray-900 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">{cert.title}</h4>
                  <p className="text-gray-600 text-xs md:text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-xs">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Habilidades Técnicas</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {skills.map((skillSet, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900">
                  {skillSet.category}
                </h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-3 shrink-0"></span>
                      <span className="text-sm md:text-base">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Idiomas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-xl text-white text-center border border-gray-800">
                <Languages className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3" />
                <h4 className="text-lg md:text-xl font-bold mb-1">{lang.language}</h4>
                <p className="text-gray-400 text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Contacto</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 mt-1 shrink-0 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-400 mb-1">Teléfono</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-gray-300 transition-colors">{contactInfo.phone}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1 shrink-0 text-gray-400" />
                  <div className="min-w-0">
                    <p className="font-medium text-gray-400 mb-1">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-gray-300 transition-colors break-all">{contactInfo.email}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1 shrink-0 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-400 mb-1">Ubicación</p>
                    <p className="text-white">{contactInfo.location}</p>
                    <p className="text-gray-500 text-sm mt-1">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 md:p-8 rounded-xl border border-gray-700">
              <h3 className="text-xl md:text-2xl font-bold mb-6">Referencias Profesionales</h3>
              <div className="space-y-4">
                {references.map((ref, index) => (
                  <div key={index} className="pb-4 border-b border-gray-700 last:border-0 last:pb-0">
                    <p className="font-bold text-white text-sm md:text-base">{ref.name}</p>
                    <p className="text-gray-400 text-xs md:text-sm">{ref.position}</p>
                    <p className="text-gray-500 text-xs md:text-sm">Tel: {ref.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Desarrollado por Juan Cruz Fernández. <br className="sm:hidden" />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
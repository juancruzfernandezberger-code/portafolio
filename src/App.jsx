import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Menu, X, Code, Briefcase, GraduationCap, Award, Languages, ExternalLink, Folder, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      demoUrl: 'https://ejemplo-ecommerce.com',
      githubUrl: 'https://github.com/usuario/ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'Sistema de Gestión',
      description: 'Aplicación web para gestión de inventario y ventas con reportes en tiempo real y análisis de datos.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      demoUrl: 'https://ejemplo-gestion.com',
      githubUrl: 'https://github.com/usuario/gestion',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Interactivo',
      description: 'Sitio web personal con animaciones fluidas, modo oscuro y diseño responsivo optimizado para SEO.',
      technologies: ['React', 'Framer Motion', 'Vite', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      demoUrl: 'https://ejemplo-portfolio.com',
      githubUrl: 'https://github.com/usuario/portfolio',
      featured: false
    },
    {
      id: 4,
      title: 'Landing Page Corporativa',
      description: 'Página de destino moderna para empresa tecnológica con formularios de contacto y secciones informativas.',
      technologies: ['React', 'EmailJS', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop',
      demoUrl: 'https://ejemplo-landing.com',
      githubUrl: 'https://github.com/usuario/landing',
      featured: false
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
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 backdrop-blur-sm shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="w-7 h-7 text-gray-900" strokeWidth={2.5} />
              <span className="text-xl font-bold text-gray-900">Juan Cruz Fernández</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
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
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
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
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-6">
              <div className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium border border-gray-200">
                Disponible para proyectos de desarrollo web 
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Juan Cruz Fernández
              </h1>
              <p className="text-2xl text-gray-600 font-light">
                Freelance Web Developer | Full-Stack E-commerce 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                <span>Estudiante de Ingeniería en Informática</span> con certificación en desarrollo Full-Stack. 
                Especializado en crear soluciones digitales modernas, funcionales y escalables.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contactar</span>
                </a>
                <a
                  href="/Fernandez Juan cruz.pdf"
                  download="CV-Juan-Cruz-Fernandez.pdf"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-900 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar CV</span>
                </a>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.linkedin.com/in/juan-cruz-fernande/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
                  <Linkedin className="w-6 h-6 text-gray-800" />
                </a>
                <a href="https://github.com/juancruzfernandezberger-code" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors border border-gray-200">
                  <Github className="w-6 h-6 text-gray-800" />
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="w-full aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-700">
                <div className="text-center text-white p-8">
                  <Code className="w-32 h-32 mx-auto mb-6 opacity-90" strokeWidth={1.5} />
                  <p className="text-xl font-light">Construyendo soluciones digitales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Sobre Mí</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Briefcase className="w-12 h-12 text-gray-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Profesionalismo</h3>
              <p className="text-gray-600 leading-relaxed">
                Persona organizada y responsable con buenas relaciones interpersonales y compromiso con la excelencia en cada proyecto.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-gray-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proactividad</h3>
              <p className="text-gray-600 leading-relaxed">
                Siempre con deseos de seguir profundizando en el campo tecnológico y mantenerme actualizado con las últimas tendencias.
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <Languages className="w-12 h-12 text-gray-900 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multiculturalidad</h3>
              <p className="text-gray-600 leading-relaxed">
                Nivel medio-avanzado en inglés y portugués para trabajar en entornos internacionales y documentación técnica.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gray-900 rounded-2xl text-white border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Mi Propuesta de Valor</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 text-xl mt-1">•</span>
                <span className="text-gray-300">Versatilidad técnica con conocimientos en desarrollo Full-Stack y e-commerce</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 text-xl mt-1">•</span>
                <span className="text-gray-300">Capacidad para trabajar en entornos multiculturales con documentación avanzada</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 text-xl mt-1">•</span>
                <span className="text-gray-300">Liderazgo en trabajo en equipo con madurez y responsabilidad</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-gray-400 text-xl mt-1">•</span>
                <span className="text-gray-300">Amplia disponibilidad horaria para cumplir con plazos y calidad requerida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proyectos</h2>
            <p className="text-lg text-gray-600">Explora algunos de mis trabajos recientes y proyectos destacados</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden h-64 bg-gray-100">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Ver Demo</span>
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>Código</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Educación y Certificaciones</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-lg border border-gray-200">
                    <GraduationCap className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Certificaciones</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-l-4 border-gray-900 shadow-sm">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                    <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs">{cert.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Habilidades Técnicas</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skills.map((skillSet, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900">
                  {skillSet.category}
                </h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-3"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">Idiomas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-xl text-white text-center border border-gray-800">
                <Languages className="w-10 h-10 mx-auto mb-3" strokeWidth={1.5} />
                <h4 className="text-xl font-bold mb-2">{lang.language}</h4>
                <p className="text-gray-400">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Contacto</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-gray-300 mb-1">Teléfono</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-gray-300 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-gray-300 mb-1">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-gray-300 transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium text-gray-300 mb-1">Ubicación</p>
                  <p className="text-white">{contactInfo.location}</p>
                  <p className="text-gray-400 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Referencias Profesionales</h3>
              <div className="space-y-4">
                {references.map((ref, index) => (
                  <div key={index} className="pb-4 border-b border-gray-700 last:border-0">
                    <p className="font-bold text-white">{ref.name}</p>
                    <p className="text-gray-400 text-sm">{ref.position}</p>
                    <p className="text-gray-400 text-sm">Tel: {ref.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2026 Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Desarrollado por Juan Cruz Fernández.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
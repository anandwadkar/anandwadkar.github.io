import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';
import StarBorder from './components/StarBorder';
import MagicBento from './components/MagicBento';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-indigo-50/50 blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-gray-900">AW.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-20 px-6 max-w-7xl mx-auto space-y-32">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-16 pt-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Anand Vidhyasagar <br/>
                <span className="text-indigo-600">Wadkar</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-500">
                AI Engineer | Generative AI | Data Scientist
              </p>
            </div>
            
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Aspiring AI and Generative AI Engineer building intelligent systems and automated workflows using Large Language Models, Machine Learning, and modern Full Stack technologies. Passionate about solving complex problems through data-driven decisions.
            </p>

            <div className="flex flex-wrap gap-4">
              <StarBorder as="a" href="#projects" className="!px-6 !py-3">
                View Projects
              </StarBorder>
              <StarBorder as="a" href="#contact" className="!px-6 !py-3">
                Contact Me
              </StarBorder>
              <StarBorder as="a" href="#" className="!px-6 !py-3 flex items-center gap-2">
                <Download size={18} /> Resume
              </StarBorder>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-72 w-72 md:h-[400px] md:w-[400px] rounded-full p-2 bg-white shadow-2xl border border-gray-100 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500"
              >
                <img 
                  src="/anand.png" 
                  alt="Anand Vidhyasagar Wadkar" 
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-12 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MagicBento className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white bg-indigo-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-100 bg-gray-50 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-gray-900">BCA</div>
                      <time className="font-medium text-indigo-600 text-sm">Present</time>
                    </div>
                    <div className="text-gray-600 text-sm">Pursuing Bachelor of Computer Applications with focus on Data Science and AI.</div>
                  </div>
                </div>
              </div>
            </MagicBento>
            
            <MagicBento>
              <h3 className="text-5xl font-extrabold text-indigo-600 mb-2">15+</h3>
              <p className="font-medium text-gray-700">Projects Completed</p>
              <p className="text-sm text-gray-500 mt-2">Spanning full-stack and GenAI</p>
            </MagicBento>

            <MagicBento>
              <h3 className="text-5xl font-extrabold text-indigo-600 mb-2">3+</h3>
              <p className="font-medium text-gray-700">Certifications</p>
              <p className="text-sm text-gray-500 mt-2">Data Analytics & Machine Learning</p>
            </MagicBento>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-12 scroll-mt-24">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold text-gray-900">Technical Expertise</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Python", "Machine Learning", "Deep Learning", "Generative AI", 
              "LLMs", "RAG", "LangChain", "FastAPI", 
              "React", "SQL", "Power BI", "Git/GitHub"
            ].map((skill, i) => (
              <MagicBento key={i} className="!p-4 text-center flex items-center justify-center min-h-[100px] hover:!bg-indigo-50/50" particleCount={4} enableStars={false}>
                <span className="font-semibold text-gray-800">{skill}</span>
              </MagicBento>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-12 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold text-gray-900">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'AI EDA Application', desc: 'Automated exploratory data analysis platform using LLMs to generate insights from tabular data.', tags: ['Python', 'Streamlit', 'LangChain', 'Pandas'] },
              { title: 'Salary Prediction', desc: 'Machine learning model predicting tech salaries based on experience, location, and role.', tags: ['Scikit-Learn', 'Python', 'Flask'] },
              { title: 'GenAI Chatbot', desc: 'Context-aware conversational agent utilizing Retrieval-Augmented Generation (RAG) on custom documents.', tags: ['LangChain', 'OpenAI API', 'React', 'Pinecone'] },
              { title: 'Data Analytics Dashboard', desc: 'Interactive business intelligence dashboard visualizing key performance metrics.', tags: ['Power BI', 'SQL', 'Data Visualization'] }
            ].map((project, idx) => (
              <MagicBento key={idx} className="flex flex-col h-full" enableStars={true} particleCount={8}>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <p className="text-gray-600">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <StarBorder as="button" className="!px-4 !py-2 !text-xs gap-2">
                    <Code size={14} /> Code
                  </StarBorder>
                  <StarBorder as="button" className="!px-4 !py-2 !text-xs gap-2">
                    <ExternalLink size={14} /> Demo
                  </StarBorder>
                </div>
              </MagicBento>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-12 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
            <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <MagicBento className="space-y-8" enableStars={false}>
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-600 hover:text-indigo-600 transition-colors">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:wadkaranand19@gmail.com" className="font-medium text-lg">wadkaranand19@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-600 hover:text-indigo-600 transition-colors">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+919370970680" className="font-medium text-lg">+91 93709 70680</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-lg">Hyderabad, India</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pt-6 border-t border-gray-100">
                 <StarBorder as="a" href="#" className="!px-4 !py-4 rounded-full">
                    <Users size={20} />
                 </StarBorder>
                 <StarBorder as="a" href="#" className="!px-4 !py-4 rounded-full">
                    <Code size={20} />
                 </StarBorder>
              </div>
            </MagicBento>

            <MagicBento className="space-y-6" enableStars={false}>
              <h3 className="text-2xl font-bold">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <StarBorder as="button" type="submit" className="w-full !mt-6">
                  Send Message
                </StarBorder>
              </form>
            </MagicBento>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-12 text-center text-gray-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-medium">© {new Date().getFullYear()} Anand Vidhyasagar Wadkar. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-indigo-600 transition-colors"><Users size={20} /></a>
            <a href="#" className="hover:text-indigo-600 transition-colors"><Code size={20} /></a>
          </div>
          <p className="text-sm font-medium">Built with React + GSAP/Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

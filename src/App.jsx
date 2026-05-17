import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Calendar,
  CheckCircle2,
  Code,
  Code2,
  Database,
  Download,
  ExternalLink,
  Home,
  Layout,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Rocket,
  Send,
  Server,
  Tag,
  User,
  Users,
  Zap,
  Menu
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { FallbackComponent } from "./CustomComponents";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const text = `Hi Yash!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0A%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917021917793?text=${text}`, '_blank');
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsNavOpen(false);
  };

  return (
    <div>
      <div className="bg-zinc-950 text-neutral-50 w-full min-h-screen overflow-x-hidden">
        {/* Navigation */}
        <div className="sticky z-50 backdrop-blur bg-zinc-950/95 border-white/10 border-b w-full">
          <div className="max-w-[1140px] flex mx-auto px-4 md:px-8 py-4 justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-[#155dfc] flex justify-center items-center">
                <Code2 className="size-4 text-[#1c398e]" />
              </div>
              <span className="font-bold text-base leading-6 tracking-tight">
                yash.dev
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex justify-center items-center gap-1">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="font-medium text-neutral-50 text-sm leading-5 border-[#155dfc] border-b-2 px-3 py-2 flex items-center gap-2 transition-colors cursor-pointer">
                <Home className="size-4" /> Home
              </a>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="font-medium text-[#9f9fa9] hover:text-neutral-50 text-sm leading-5 border-transparent border-b-2 px-3 py-2 flex items-center gap-2 transition-colors cursor-pointer">
                <Code className="size-4" /> Skills
              </a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="font-medium text-[#9f9fa9] hover:text-neutral-50 text-sm leading-5 border-transparent border-b-2 px-3 py-2 flex items-center gap-2 transition-colors cursor-pointer">
                <Briefcase className="size-4" /> Projects
              </a>
              <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="font-medium text-[#9f9fa9] hover:text-neutral-50 text-sm leading-5 border-transparent border-b-2 px-3 py-2 flex items-center gap-2 transition-colors cursor-pointer">
                <Award className="size-4" /> Experience
              </a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="font-medium text-[#9f9fa9] hover:text-neutral-50 text-sm leading-5 border-transparent border-b-2 px-3 py-2 flex items-center gap-2 transition-colors cursor-pointer">
                <Mail className="size-4" /> Contact
              </a>
            </nav>

            {/* Mobile Nav Toggle */}
            <div className="flex md:hidden items-center gap-4">
              <Button onClick={() => setIsNavOpen(!isNavOpen)} variant="ghost" size="icon" className="text-neutral-50">
                <Menu className="size-6" />
              </Button>
            </div>

            <Button onClick={() => window.open('https://drive.google.com/uc?export=download&id=1SdkzoKgGHYFXOsjcbDe1_lGMRJXaC8vY', '_blank')} className="hidden md:flex bg-[#155dfc] hover:bg-[#155dfc]/90 text-[#1c398e] gap-2 transition-all hover:scale-105">
              <Download className="size-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu */}
          {isNavOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="md:hidden flex flex-col bg-zinc-900 border-t border-white/10 px-4 py-4 gap-4"
            >
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-2 text-neutral-50 cursor-pointer"><Home className="size-4" /> Home</a>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="flex items-center gap-2 text-[#9f9fa9] cursor-pointer"><Code className="size-4" /> Skills</a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="flex items-center gap-2 text-[#9f9fa9] cursor-pointer"><Briefcase className="size-4" /> Projects</a>
              <a href="#experience" onClick={(e) => scrollToSection(e, 'experience')} className="flex items-center gap-2 text-[#9f9fa9] cursor-pointer"><Award className="size-4" /> Experience</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="flex items-center gap-2 text-[#9f9fa9] cursor-pointer"><Mail className="size-4" /> Contact</a>
              <Button onClick={() => window.open('https://drive.google.com/uc?export=download&id=1SdkzoKgGHYFXOsjcbDe1_lGMRJXaC8vY', '_blank')} className="w-full bg-[#155dfc] text-[#1c398e] gap-2 mt-2">
                <Download className="size-4" />
                Resume
              </Button>
            </motion.div>
          )}
        </div>

        {/* Home Section */}
        <section id="home" className="relative overflow-hidden min-h-[90vh] flex items-center">
          <div
            className="opacity-30 absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, oklch(0.546 0.245 262.881 / 0.4), transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.627 0.265 303.9 / 0.25), transparent 40%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative w-full max-w-[1140px] grid grid-cols-1 lg:grid-cols-2 mx-auto px-6 py-12 lg:p-12 items-center gap-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="bg-zinc-800 text-neutral-50 border-white/10 border px-3 py-1 gap-2 w-fit">
                  <span
                    className="size-2 animate-pulse rounded-full"
                    style={{ background: "oklch(0.696 0.17 162.48)" }}
                  />
                  Available for opportunities
                </Badge>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                <span className="font-mono text-[#155dfc] text-sm leading-5">
                  $ whoami
                </span>
                <h1 className="font-bold text-4xl lg:text-5xl leading-tight tracking-tight">
                  Yash Chaudhary
                </h1>
                <div className="text-[#9f9fa9] text-lg lg:text-xl leading-7 flex items-center gap-2">
                  <span>Full-Stack Developer</span>
                  <span className="inline-block animate-pulse bg-[#155dfc] w-0.5 h-5" />
                </div>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <p className="text-[#9f9fa9] text-base leading-6 max-w-lg">
                  Building end-to-end fintech web applications with
                  <span className="font-medium text-neutral-50 mx-1">React</span>,
                  <span className="font-medium text-neutral-50 mx-1">Next.js</span>,
                  <span className="font-medium text-neutral-50 mx-1">Angular</span>,
                  <span className="font-medium text-neutral-50 mx-1">NestJS</span>,
                  <span className="font-medium text-neutral-50 mx-1">.NET Core</span>.
                  Sole engineer on 3 live production products serving 500+
                  enterprise clients.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <Button className="bg-[#155dfc] hover:bg-[#155dfc]/90 text-[#1c398e] gap-2 transition-all hover:scale-105">
                  <Briefcase className="size-4" />
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-white/10 gap-2 hover:bg-white/5 transition-all hover:scale-105"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="size-4" />
                  Get in Touch
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex pt-2 items-center gap-6">
                <a href="https://github.com/yash10ch" target="_blank" rel="noreferrer" className="text-[#9f9fa9] hover:text-white transition-colors text-sm leading-5 flex items-center gap-2">
                  <FallbackComponent className="size-4" /> Github
                </a>
                <a href="https://linkedin.com/in/yash-chaudhary-7a92071b4" target="_blank" rel="noreferrer" className="text-[#9f9fa9] hover:text-white transition-colors text-sm leading-5 flex items-center gap-2">
                  <FallbackComponent className="size-4" /> LinkedIn
                </a>
                <a href="https://leetcode.com/u/yash10ch" target="_blank" rel="noreferrer" className="text-[#9f9fa9] hover:text-white transition-colors text-sm leading-5 flex items-center gap-2">
                  <Code2 className="size-4" /> LeetCode
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-auto"
            >
              <Card className="shadow-2xl bg-zinc-900 border-white/10 p-0 overflow-hidden hover:shadow-[#155dfc]/20 hover:shadow-2xl transition-all duration-500">
                <div className="bg-zinc-800/40 border-white/10 border-b flex px-4 py-3 items-center gap-2">
                  <span className="size-3 rounded-full" style={{ background: "oklch(0.704 0.191 22.216)" }} />
                  <span className="size-3 rounded-full" style={{ background: "oklch(0.769 0.188 70.08)" }} />
                  <span className="size-3 rounded-full" style={{ background: "oklch(0.696 0.17 162.48)" }} />
                  <span className="font-mono text-[#9f9fa9] text-xs leading-4 ml-3">developer.ts</span>
                </div>
                <div className="font-mono text-xs md:text-sm leading-5 p-4 md:p-6 overflow-x-auto">
                  <div>
                    <span style={{ color: "oklch(0.627 0.265 303.9)" }}>const</span>{" "}
                    <span style={{ color: "oklch(0.769 0.188 70.08)" }}>developer</span>
                    <span className="text-[#9f9fa9]"> = {`{`}</span>
                  </div>
                  <div className="pl-4">
                    <span style={{ color: "oklch(0.696 0.17 162.48)" }}>name</span>
                    <span className="text-[#9f9fa9]">: </span>
                    <span style={{ color: "oklch(0.645 0.246 16.439)" }}>'Yash Chaudhary'</span>,
                  </div>
                  <div className="pl-4">
                    <span style={{ color: "oklch(0.696 0.17 162.48)" }}>role</span>
                    <span className="text-[#9f9fa9]">: </span>
                    <span style={{ color: "oklch(0.645 0.246 16.439)" }}>'Full-Stack Developer'</span>,
                  </div>
                  <div className="pl-4">
                    <span style={{ color: "oklch(0.696 0.17 162.48)" }}>location</span>
                    <span className="text-[#9f9fa9]">: </span>
                    <span style={{ color: "oklch(0.645 0.246 16.439)" }}>'Mumbai, India'</span>,
                  </div>
                  <div className="pl-4">
                    <span style={{ color: "oklch(0.696 0.17 162.48)" }}>experience</span>
                    <span className="text-[#9f9fa9]">: </span>
                    <span style={{ color: "oklch(0.769 0.188 70.08)" }}>'2+ years'</span>,
                  </div>
                  <div className="pl-4">
                    <span style={{ color: "oklch(0.696 0.17 162.48)" }}>stack</span>
                    <span className="text-[#9f9fa9]">: [</span>
                  </div>
                  <div className="pl-8" style={{ color: "oklch(0.645 0.246 16.439)" }}>
                    'React', 'Next.js 14', 'Angular 17',
                  </div>
                  <div className="pl-8" style={{ color: "oklch(0.645 0.246 16.439)" }}>
                    'NestJS', '.NET Core', 'PostgreSQL'
                  </div>
                  <div className="text-[#9f9fa9] pl-4">],</div>
                  <div className="pl-4">
                    <span style={{ color: "oklch(0.696 0.17 162.48)" }}>passionate</span>
                    <span className="text-[#9f9fa9]">: </span>
                    <span style={{ color: "oklch(0.627 0.265 303.9)" }}>true</span>
                  </div>
                  <div className="text-[#9f9fa9]">{`}`}</div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section id="stats" className="w-full max-w-[1140px] mx-auto px-6 lg:px-12 py-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { label: "Experience", value: "2+", unit: "yr", icon: Calendar },
              { label: "Live Products", value: "3", unit: "apps", icon: Rocket },
              { label: "Enterprise Clients", value: "500", unit: "+", icon: Users },
              { label: "Perf Boost", value: "15", unit: "%", icon: Zap },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="bg-zinc-900 border-white/10 p-4 md:p-6 hover:bg-zinc-800 transition-colors duration-300">
                  <div className="text-[#9f9fa9] flex items-center gap-2 mb-2">
                    <stat.icon className="size-4" />
                    <span className="uppercase text-[10px] md:text-xs tracking-wider">{stat.label}</span>
                  </div>
                  <div className="font-bold text-neutral-50 text-2xl md:text-3xl">
                    {stat.value}<span className="text-[#155dfc]">{stat.unit}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="max-w-[1140px] mx-auto px-6 py-16 lg:p-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <span className="font-mono text-[#155dfc] text-sm">// 02. skills</span>
              <h2 className="font-bold text-3xl md:text-4xl tracking-tight">Tools & Technologies</h2>
              <p className="text-[#9f9fa9]">A curated toolkit honed across fintech production environments.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Frontend", subtitle: "// UI / UX layer", icon: Layout, color: "#155dfc", tags: ["React", "Next.js 14", "Angular 17", "TypeScript", "Tailwind CSS", "Redux", "RxJS"] },
                { title: "Backend", subtitle: "// API / Business logic", icon: Server, color: "oklch(0.696 0.17 162.48)", bg: "oklch(0.696 0.17 162.48 / 0.15)", tags: ["NestJS", ".NET Core", "Node.js", "Express", "REST APIs", "GraphQL", "JWT Auth"] },
                { title: "Database & DevOps", subtitle: "// Data & deployment", icon: Database, color: "oklch(0.627 0.265 303.9)", bg: "oklch(0.627 0.265 303.9 / 0.15)", tags: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "CI/CD", "Git"] },
              ].map((skillBlock, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -5 }}>
                  <Card className="bg-zinc-900 border-white/10 h-full p-6 hover:shadow-xl transition-all duration-300">
                    <CardHeader className="p-0 gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg flex justify-center items-center" style={{ background: skillBlock.bg || `${skillBlock.color}20` }}>
                          <skillBlock.icon className="size-5" style={{ color: skillBlock.color }} />
                        </div>
                        <h3 className="font-semibold text-lg">{skillBlock.title}</h3>
                      </div>
                      <p className="font-mono text-[#9f9fa9] text-xs">{skillBlock.subtitle}</p>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-wrap gap-2">
                      {skillBlock.tags.map((tag) => (
                        <Badge key={tag} className="bg-zinc-800 text-neutral-50 border-white/10 hover:bg-zinc-700 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-[1140px] mx-auto px-6 py-16 lg:p-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[#155dfc] text-sm">// 03. projects</span>
                <h2 className="font-bold text-3xl md:text-4xl tracking-tight">Featured Work</h2>
                <p className="text-[#9f9fa9]">Production fintech platforms shipped end-to-end.</p>
              </div>
              <Button variant="outline" className="border-white/10 gap-2 hover:bg-white/5 transition-all">
                View All <ExternalLink className="size-4" />
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "FinTrade Platform", sub: "enterprise · trading", desc: "Real-time trading dashboard handling 500+ enterprise clients with sub-100ms latency.", tags: ["Next.js", "NestJS", "PostgreSQL"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badgeColor: "bg-[#155dfc] text-[#1c398e]" },
                { title: "PayFlow Suite", sub: "payments · b2b", desc: "Cross-border payment platform with KYC automation and 15% performance boost.", tags: ["Angular 17", ".NET Core", "Redis"], img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badgeColor: "bg-[oklch(0.696_0.17_162.48)] text-[oklch(0.141_0.005_285.823)]" },
                { title: "RiskLens Analytics", sub: "analytics · risk", desc: "Risk analytics dashboard with predictive modeling and real-time reporting.", tags: ["React", "NestJS", "MongoDB"], img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", badgeColor: "bg-[oklch(0.627_0.265_303.9)] text-red-950" },
              ].map((proj, idx) => (
                <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -5 }}>
                  <Card className="bg-zinc-900 border-white/10 p-0 overflow-hidden group h-full flex flex-col">
                    <div className="relative h-48 md:h-40 overflow-hidden">
                      <img src={proj.img} alt={proj.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />
                      <Badge className={`${proj.badgeColor} border-none absolute left-3 top-3 font-semibold`}>Live</Badge>
                    </div>
                    <div className="flex p-6 flex-col gap-4 flex-1">
                      <div>
                        <h3 className="font-semibold text-xl leading-7 group-hover:text-[#155dfc] transition-colors">{proj.title}</h3>
                        <p className="font-mono text-[#9f9fa9] text-xs mt-1">{proj.sub}</p>
                      </div>
                      <p className="text-[#9f9fa9] text-sm leading-relaxed flex-1">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {proj.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs border-white/10">{tag}</Badge>
                        ))}
                      </div>
                      <div className="border-t border-white/10 flex pt-4 mt-2 items-center gap-4">
                        <a href="#" className="text-[#9f9fa9] hover:text-white text-sm flex items-center gap-1 transition-colors"><Code2 className="size-4" /> Code</a>
                        <a href="#" className="text-[#9f9fa9] hover:text-white text-sm flex items-center gap-1 transition-colors"><ExternalLink className="size-4" /> Live</a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-[1140px] mx-auto px-6 py-16 lg:p-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp} className="flex flex-col gap-2">
              <span className="font-mono text-[#155dfc] text-sm">// 04. experience</span>
              <h2 className="font-bold text-3xl md:text-4xl tracking-tight">Career Timeline</h2>
              <p className="text-[#9f9fa9]">Where I've shipped, scaled, and learned.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  role: "Full-Stack Developer", company: "Fintech Solutions Pvt Ltd", type: "Current", date: "Jun 2023 — Present", loc: "Mumbai, India", color: "oklch(0.546 0.245 262.881)", badge: "bg-[#155dfc]/15 text-[#155dfc]", bullets: [
                    "Sole engineer on 3 live production fintech products serving 500+ enterprise clients.",
                    "Boosted dashboard performance by 15% via React rendering & SQL query optimization.",
                    "Architected NestJS micro-services with JWT auth and Redis caching layer.",
                    "Led migration from Angular 14 to Angular 17 with zero downtime."
                  ]
                },
                {
                  role: "Software Engineer Intern", company: "TechBridge Innovations", type: "Past", date: "Jan 2023 — May 2023", loc: "Remote", color: "oklch(0.627 0.265 303.9)", badge: "bg-zinc-800 text-neutral-50", bullets: [
                    "Built reusable React component library used across 4 internal products.",
                    "Implemented REST endpoints with Node.js & Express for client portal.",
                    "Wrote 100+ unit tests improving code coverage from 40% to 85%.",
                    "Collaborated in agile sprints with cross-functional design team."
                  ]
                }
              ].map((exp, idx) => (
                <motion.div key={idx} variants={fadeInUp}>
                  <Card className="bg-zinc-900 border-white/10 border-l-4 p-6 hover:bg-zinc-800/50 transition-colors duration-300" style={{ borderLeftColor: exp.color }}>
                    <CardHeader className="p-0 gap-3 mb-4">
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div className="flex flex-col gap-1">
                          <h3 className="font-semibold text-xl">{exp.role}</h3>
                          <span className="text-sm font-medium" style={{ color: exp.color === "oklch(0.546 0.245 262.881)" ? "#155dfc" : exp.color }}>{exp.company}</span>
                        </div>
                        <Badge className={`${exp.badge} border-none`}>{exp.type}</Badge>
                      </div>
                      <div className="text-[#9f9fa9] text-xs flex flex-wrap items-center gap-4">
                        <span className="flex items-center gap-1"><Calendar className="size-3" /> {exp.date}</span>
                        <span className="flex items-center gap-1"><MapPin className="size-3" /> {exp.loc}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-3">
                      {exp.bullets.map((b, i) => (
                        <div key={i} className="text-sm flex items-start gap-3">
                          <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: "oklch(0.696 0.17 162.48)" }} />
                          <span className="text-[#9f9fa9] leading-relaxed">{b}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-[1140px] mx-auto px-6 py-16 lg:p-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="relative bg-zinc-900 border-white/10 p-6 lg:p-12 overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.546 0.245 262.881 / 0.3), transparent 50%)",
                }}
              />
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[#155dfc] text-sm">// 05. let's connect</span>
                    <h2 className="font-bold text-3xl md:text-4xl tracking-tight">Have a project in mind?</h2>
                    <p className="text-[#9f9fa9] text-lg max-w-md">
                      Open to full-stack opportunities in fintech and beyond. Let's build something impactful together.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a href="mailto:yashchaudhary.ch10@gmail.com" className="rounded-xl bg-zinc-800/40 text-sm border-white/10 border flex px-4 py-3 items-center gap-3 hover:bg-zinc-800 transition-colors">
                      <Mail className="size-4 text-[#155dfc]" />
                      <span>yashchaudhary.ch10@gmail.com</span>
                    </a>
                    <a href="tel:+917021917793" className="rounded-xl bg-zinc-800/40 text-sm border-white/10 border flex px-4 py-3 items-center gap-3 hover:bg-zinc-800 transition-colors">
                      <Phone className="size-4 text-[#155dfc]" />
                      <span>+91 70219 17793</span>
                    </a>
                    <a href="https://github.com/yash10ch" target="_blank" rel="noreferrer" className="rounded-xl bg-zinc-800/40 text-sm border-white/10 border flex px-4 py-3 items-center gap-3 hover:bg-zinc-800 transition-colors">
                      <Code2 className="size-4 text-[#155dfc]" />
                      <span>github.com/yash10ch</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="size-2 animate-pulse rounded-full" style={{ background: "oklch(0.696 0.17 162.48)" }} />
                    <span className="font-mono text-[#9f9fa9] text-xs">Usually replies within 24 hours</span>
                  </div>
                </div>

                <form onSubmit={handleWhatsApp}>
                  <Card className="bg-zinc-800/30 border-white/10 p-6 md:p-8 backdrop-blur-sm">
                    <CardHeader className="p-0 gap-2 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[#155dfc] text-xs">$</span>
                        <span className="font-mono text-[#9f9fa9] text-xs">send_message.sh</span>
                      </div>
                      <h3 className="font-semibold text-xl">Send a message via WhatsApp</h3>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                          <Label className="font-mono text-[#9f9fa9] text-xs flex items-center gap-1"><User className="size-3" /> Name</Label>
                          <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jane Doe" className="bg-zinc-800/50 border-white/10 focus-visible:ring-[#155dfc]" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label className="font-mono text-[#9f9fa9] text-xs flex items-center gap-1"><Mail className="size-3" /> Email</Label>
                          <Input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jane@company.com" className="bg-zinc-800/50 border-white/10 focus-visible:ring-[#155dfc]" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label className="font-mono text-[#9f9fa9] text-xs flex items-center gap-1"><Tag className="size-3" /> Subject <span className="opacity-60">(optional)</span></Label>
                        <Input value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="Project collaboration" className="bg-zinc-800/50 border-white/10 focus-visible:ring-[#155dfc]" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label className="font-mono text-[#9f9fa9] text-xs flex items-center gap-1"><MessageSquare className="size-3" /> Message</Label>
                        <Textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell me about your project, timeline, and goals..." rows={4} className="resize-none bg-zinc-800/50 border-white/10 focus-visible:ring-[#155dfc]" />
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-between items-center mt-2">
                        <span className="font-mono text-[#9f9fa9] text-xs flex items-center gap-1">
                          <Lock className="size-3" /> WhatsApp encrypted
                        </span>
                        <Button type="submit" className="w-full sm:w-auto bg-[#155dfc] hover:bg-[#155dfc]/90 text-[#1c398e] gap-2 transition-transform hover:scale-105">
                          <Send className="size-4" /> Send Message
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </form>

              </div>
            </Card>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 mt-auto">
          <div className="max-w-[1140px] text-[#9f9fa9] text-sm flex flex-col md:flex-row mx-auto px-6 lg:px-12 py-8 justify-between items-center gap-4">
            <span className="font-mono text-center md:text-left">© {new Date().getFullYear()} Yash Chaudhary · Built with React + Framer</span>
            <div className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full" style={{ background: "oklch(0.696 0.17 162.48)" }} />
              <span className="font-mono text-xs">All systems operational</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

"use client"

import { motion } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Database,
  Server,
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  User,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skills = {
  "Programming Languages": ["Python", "JavaScript", "Java", "C/C++"],
  "Frameworks & Technologies": ["FastAPI", "Fastify", "ASP.NET MVC", "React JS", "Redis", "Linux", "Docker"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  "Core Concepts": ["Data Structures", "Algorithms", "OOP", "Design Patterns"],
}

const projects = [
  {
    title: "Online Doctor Appointment Booking System",
    description:
      "ASP.NET MVC 5 and Entity Framework web app enabling patients and doctors to schedule appointments interactively",
    tech: ["ASP.NET MVC 5", "Entity Framework", "C#"],
    category: "Web Application",
  },
  {
    title: "Weather Forecast and Blogs Website",
    description:
      "ASP.NET MVC 5 app integrating OpenWeatherMap API to deliver real-time weather data with dynamic UI updates",
    tech: ["ASP.NET MVC 5", "OpenWeatherMap API", "JavaScript"],
    category: "Web Application",
  },
  {
    title: "Bus Management System",
    description: "Desktop application built with Java and MSSQL using NetBeans 8.0 for efficient bus fleet management",
    tech: ["Java", "MSSQL", "NetBeans"],
    category: "Desktop Application",
  },
  {
    title: "Clothe the Needy",
    description: "React JS web platform connecting donors with recipients for efficient clothing distribution",
    tech: ["React JS", "JavaScript", "Web Platform"],
    category: "Social Impact",
  },
  {
    title: "Video Caption Generation In Bangla",
    description: "Thesis project focusing on attention model-based video caption generation for Bangla language",
    tech: ["Deep Learning", "Machine Learning", "Python"],
    category: "Research & Thesis",
  },
]

const certifications = [
  {
    title: "Python Data Structures",
    issuer: "University of Michigan (Online)",
    date: "June 2020",
  },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Tunazzin Rahman Topu
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white/80 hover:text-white transition-colors ${
                    activeSection === item.toLowerCase() ? "text-purple-400" : ""
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              MD Tunazzin Rahman Topu
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-6">Computer Science & Engineering Graduate</p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Passionate software developer with expertise in full-stack development, machine learning, and
              problem-solving. Ready to contribute to innovative projects and grow with dynamic organizations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:tunazzin913@gmail.com"
              className="text-white/60 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="tel:+8801517813966"
              className="text-white/60 hover:text-purple-400 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="#"
              className="text-white/60 hover:text-purple-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="#"
              className="text-white/60 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <User className="w-6 h-6 text-purple-400 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Personal Info</h3>
                    </div>
                    <div className="space-y-3 text-white/80">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                        <span>Rampura, Dhaka, Bangladesh</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-purple-400" />
                        <span>+8801517813966</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-purple-400" />
                        <span>tunazzin913@gmail.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-6 h-6 text-purple-400 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Objective</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      To achieve a dynamic and challenging job where I can use my technical skills, creativity, and
                      above all my learning experience in order to develop my career and contribute to the welfare of
                      the organization.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">Programming Experience</h3>
                  </div>
                  <p className="text-white/80 mb-4">Solved more than 150+ problems across various online judges:</p>
                  <div className="flex flex-wrap gap-2">
                    {["LeetCode", "SPOJ", "HackerRank", "VJudge"].map((platform) => (
                      <Badge key={platform} variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Skills & Technologies
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div key={category} variants={fadeInUp}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        {index === 0 && <Code className="w-5 h-5 mr-2 text-purple-400" />}
                        {index === 1 && <Server className="w-5 h-5 mr-2 text-purple-400" />}
                        {index === 2 && <Database className="w-5 h-5 mr-2 text-purple-400" />}
                        {index === 3 && <Brain className="w-5 h-5 mr-2 text-purple-400" />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Badge
                              variant="outline"
                              className="border-purple-400/30 text-purple-300 hover:bg-purple-400/10"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Projects & Thesis
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                          {project.category}
                        </Badge>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 15 }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="w-4 h-4 text-purple-400" />
                        </motion.div>
                      </div>
                      <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-white/70">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-pink-400/30 text-pink-300 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Education & Certifications
            </motion.h2>

            <div className="space-y-6">
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            Bachelor of Science in Computer Science and Engineering
                          </h3>
                          <p className="text-purple-300">Ahsanullah University of Science and Technology</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white/80">2017 – 2022</p>
                        <p className="text-purple-300 font-semibold">CGPA: 3.126/4.00</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">Relevant Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Algorithms",
                          "Data Structures",
                          "Operating Systems Design",
                          "Database Management Systems",
                          "Software Engineering",
                          "Theory of Computation",
                          "Deep Learning",
                          "Machine Learning",
                        ].map((course) => (
                          <Badge key={course} variant="outline" className="border-purple-400/30 text-purple-300">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 text-purple-400 mr-3" />
                      <h3 className="text-xl font-semibold text-white">Certifications</h3>
                    </div>
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <h4 className="text-white font-medium">{cert.title}</h4>
                          <p className="text-purple-300">{cert.issuer}</p>
                        </div>
                        <p className="text-white/80">{cert.date}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Get In Touch
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center text-white/80 hover:text-purple-400 transition-colors"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      <span>tunazzin913@gmail.com</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center text-white/80 hover:text-purple-400 transition-colors"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      <span>+8801517813966</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center text-white/80 hover:text-purple-400 transition-colors"
                    >
                      <MapPin className="w-5 h-5 mr-3" />
                      <span>Rampura, Dhaka, Bangladesh</span>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">References</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-white font-medium">Mr. Faisal Muhammad Shah</h4>
                      <p className="text-purple-300">Associate Professor, AUST</p>
                      <p className="text-white/70">faisal.cse@aust.edu</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Mr. Shoeb Mohammad Shahriar</h4>
                      <p className="text-purple-300">Assistant Professor, AUST</p>
                      <p className="text-white/70">shoeb.cse@aust.edu</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <p className="text-white/60 mb-6">
                Ready to collaborate on exciting projects and contribute to innovative solutions.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full">
                <Mail className="w-4 h-4 mr-2" />
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/40 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-white/60">© 2024 MD Tunazzin Rahman Topu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

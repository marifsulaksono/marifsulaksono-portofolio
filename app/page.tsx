import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Database, Server, Code, Cloud, Briefcase } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#">
            <h1 className="text-2xl font-bold text-primary font-[var(--font-playfair)]">Hello Word!</h1>
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img
              src="/profile.jpeg"
              alt="Professional headshot"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
            <h2 className="text-5xl font-bold text-primary mb-4 font-[var(--font-playfair)]">Muhammad Arif Sulaksono</h2>
            <p className="text-xl text-muted-foreground mb-2">Software Engineer | Problem Solver | Mentor</p>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Passionate about building scalable, efficient backend systems that power modern applications. Experienced
              in designing robust APIs, optimizing databases, and implementing cloud solutions.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="mailto:marifsulaksono@gmail.com/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/marifsulaksono/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Linkedin className="w-4 h-4 mr-2" />
                View LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-card-foreground font-[var(--font-playfair)]">
            About Me
          </h3>
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Hi, I’m Arif — a backend engineer with a strong foundation in software engineering and a growing passion for building scalable, reliable systems.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              I specialise in backend development, with hands-on experience in Go, Node.js, and Java, and I enjoy solving complex problems by applying principles of clean architecture, databases, caching, and message-driven systems. Over the past few years, I’ve worked on projects ranging from API development to deployment pipelines, always focusing on writing maintainable code and delivering solutions that create impact.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              In addition to my engineering work, I’m also passionate about mentorship and knowledge sharing. I’ve served as a mentor at an edutech startup and led private 1-on-1 classes to help aspiring developers transition into backend development. Mentoring has been a valuable way for me to both contribute to others’ growth and deepen my own understanding — as teaching often challenges me to refine my knowledge and explain concepts clearly.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Looking ahead, my goal is to continue growing as a professional software engineer by contributing to impactful products, while staying curious, collaborative, and open to challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary font-[var(--font-playfair)]">
            Work Experience
          </h3>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center text-xl">
                      <Briefcase className="w-5 h-5 mr-2 text-accent" />
                      Backend Developer Staff
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary mt-1">
                      <a href="https://www.linkedin.com/company/pt-ada-ide-langsung-jalan/" target="_blank" rel="noopener noreferrer">PT Ada Ide Langsung Jalan</a>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    May 2025 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground">
                  <li>• Built scalable backend services for a modular ERP system using Go (Hexagonal Architecture), with Redis for caching and RabbitMQ for asynchronous, event-driven processing (e.g., audit trails, notifications).</li>
                  <li>• Collaborated in Agile teams to deliver business-aligned features, maintaining high code quality using SonarQube.</li>
                  <li>• Followed strict development standards requiring unit tests for every implemented feature, leading to >90% test coverage across modules.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Go</Badge>
                  <Badge variant="secondary">Fiber</Badge>
                  <Badge variant="secondary">YugabyteDB</Badge>
                  <Badge variant="secondary">Firestore</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">RabbitMQ</Badge>
                  <Badge variant="secondary">OpenTelemetry</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center text-xl">
                      <Briefcase className="w-5 h-5 mr-2 text-accent" />
                      Backend Development Mentor
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary mt-1"><a href="https://dibimbing.id" target="_blank">dibimbing.id</a></CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Des 2024 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground">
                  <li>• Mentored up to 18 students and deliver engaging and comprehensive lessons on Fundamental of Go, Data Structure, Object-Oriented Programming (OOP), Concurrency, Deployment, Caching and Unit Testing concepts in Golang.</li>
                  <li>• Provide hands-on guidance during coding exercises, debugging, and project implementations.</li>
                  <li>• Share insights and real-world applications to align with industry best practices.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Go</Badge>
                  <Badge variant="secondary">Object-Oriented Programming</Badge>
                  <Badge variant="secondary">Data Structures</Badge>
                  <Badge variant="secondary">Concurrency</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center text-xl">
                      <Briefcase className="w-5 h-5 mr-2 text-accent" />
                      Web Programmer
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary mt-1">
                      <a href="https://venturo.id/" target="_blank" rel="noopener noreferrer">Venturo Pro</a>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    Apr 2024 - May 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground">
                  <li>• Designed and developed backend services using Go, NestJS, and Express.js, focusing on authentication/authorization, reporting, API integrations, caching (Redis), messaging (RabbitMQ), and asynchronous processing.</li>
                  <li>• Implemented security and monitoring solutions including RSA encryption/signatures, JWT, Google Authenticator (2FA), rate limiting, and logging/monitoring with Sentry.io, Logrus, and MongoDB.</li>
                  <li>• Conducted research and development to build reusable boilerplates for Go and NestJS microservices, improving code quality, standardisation, and development efficiency.</li>
                  <li>• Contributed to large-scale projects, delivering backend services, third-party API integrations, and integration testing for reliability.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">RabbitMQ</Badge>
                  <Badge variant="secondary">WebSocket</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary font-[var(--font-playfair)]">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2 text-accent" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Go</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Java</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="w-5 h-5 mr-2 text-accent" />
                  Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Go Echo</Badge>
                  <Badge variant="secondary">Go Fiber</Badge>
                  <Badge variant="secondary">Go Gin</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">Nest.js</Badge>
                  <Badge variant="secondary">Spring Boot</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2 text-accent" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">YugabyteDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cloud className="w-5 h-5 mr-2 text-accent" />
                  Cloud & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">VPS</Badge>
                  <Badge variant="secondary">Nginx</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-card-foreground font-[var(--font-playfair)]">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-card-foreground">Go Boilerplate</CardTitle>
                <CardDescription>
                  A boilerplate that provides a basic structure with a clean architecture implementation for building scalable and maintainable Go applications using Echo Framework.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Go</Badge>
                  <Badge variant="outline">JWT</Badge>
                  <Badge variant="outline">GORM</Badge>
                  <Badge variant="outline">Redis</Badge>
                  <Badge variant="outline">Logrus</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-1" />
                    <a href="https://github.com/marifsulaksono/go-boilerplate" target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-card-foreground">Marketplace API</CardTitle>
                <CardDescription>A simple marketplace RESTful API backend development side using golang. This project is part of my learning journey.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Go</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">GORM</Badge>
                  <Badge variant="outline">JWT</Badge>
                  <Badge variant="outline">Redis</Badge>
                  <Badge variant="outline">SMTP</Badge>
                  <Badge variant="outline">Google OAuth</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-1" />
                    <a href="https://github.com/marifsulaksono/go-store" target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-primary font-[var(--font-playfair)]">Let's Work Together</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, challenging projects, mentor, or just connecting with fellow developers. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:marifsulaksono@gmail.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="w-5 h-5 mr-2" />
                marifsulaksono@gmail.com
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/marifsulaksono/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </a>
            <a href="https://github.com/marifsulaksono" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Muhammad Arif Sulaksono by <span className="italic">V0 app</span>. <br />
            Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

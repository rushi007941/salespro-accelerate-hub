import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target, 
  BookOpen, 
  MessageCircle, 
  BarChart3, 
  FileText, 
  PlayCircle, 
  Trophy,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import mobileTraining from "@/assets/mobile-training.jpg";

const SalesProLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">digiqt</div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
              <a href="#faqs" className="text-foreground hover:text-primary transition-colors">FAQs</a>
            </nav>
            <Button variant="primary" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-white/20 text-white border-white/30">
                  Sales Acceleration Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Supercharge Your Sales Team's Performance
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Eliminate low closures, poor engagement, and training gaps — empower your sales agents with SalesPro, the all-in-one sales acceleration platform.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Book a Free Demo
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Watch Preview
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Sales team success illustration" 
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              The Challenges Sales Leaders Face
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform these pain points into competitive advantages with SalesPro
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Low Lead Closure Rates", desc: "Despite large pipelines" },
              { icon: Users, title: "Poor Customer Engagement", desc: "Weak follow-ups & interactions" },
              { icon: BookOpen, title: "Product Knowledge Gaps", desc: "Struggling with objections" },
              { icon: Target, title: "Manual Training Delays", desc: "Slow new agent onboarding" },
              { icon: BarChart3, title: "Performance Tracking", desc: "Difficulty monitoring agents" },
              { icon: FileText, title: "Marketing Support", desc: "Lack of ready-to-use tools" }
            ].map((challenge, index) => (
              <div key={index} className="group p-6 rounded-xl bg-gradient-to-br from-destructive/5 to-destructive/10 border border-destructive/20 hover:border-destructive/30 transition-all duration-300 hover:transform hover:scale-105">
                <challenge.icon className="h-12 w-12 text-destructive mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
              Features That Solve These Problems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools designed specifically for sales excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Lead & Follow-Up Tracking", desc: "Never miss an opportunity with automated tracking and reminders" },
              { icon: Trophy, title: "Gamified Training", desc: "Engaging videos and quizzes that motivate continuous learning" },
              { icon: MessageCircle, title: "Instant Q&A Support", desc: "Real-time assistance when agents need it most" },
              { icon: BarChart3, title: "Performance Dashboards", desc: "Complete visibility into team metrics and individual performance" },
              { icon: FileText, title: "Centralized Product Access", desc: "All product information and resources in one place" },
              { icon: PlayCircle, title: "Role-Play Practice", desc: "Simulate real scenarios and master objection handling" }
            ].map((feature, index) => (
              <div key={index} className="group relative p-6 rounded-xl bg-white border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-brand">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Benefits for Sales & Distribution Heads
            </h2>
            <p className="text-xl text-muted-foreground">
              Measurable improvements you can expect
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { icon: CheckCircle, title: "Faster Closure Cycles", desc: "Reduce sales cycle time by up to 40%" },
                { icon: TrendingUp, title: "Higher Agent Productivity", desc: "Increase individual performance by 30%" },
                { icon: Star, title: "Improved Customer Experience", desc: "Better engagement leads to higher satisfaction" },
                { icon: Target, title: "Reduced Training Costs", desc: "Automated onboarding cuts training time by 60%" },
                { icon: BarChart3, title: "Better Performance Visibility", desc: "Real-time insights into team effectiveness" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <benefit.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img 
                src={dashboardPreview} 
                alt="SalesPro dashboard showing performance metrics" 
                className="w-full h-auto rounded-2xl shadow-brand"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
              How SalesPro Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to transform your sales team
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Onboard Your Team", desc: "Quick setup, easy to adopt" },
                { step: "02", title: "Train & Engage", desc: "Videos, quizzes, and instant Q&A" },
                { step: "03", title: "Track & Improve", desc: "Dashboards highlight performance" },
                { step: "04", title: "Sell Smarter", desc: "Ready content + objection handling" }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  {/* Step number with circle */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300 shadow-brand">
                    {step.step}
                    {/* Connector dot for timeline */}
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full -z-10"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview & Screenshots */}
      <section className="py-20 section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Product Preview & Screenshots
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's a quick look at SalesPro in action: Simple, intuitive, and built to empower your sales team every day.
            </p>
          </div>
        </div>
        
        {/* Full Width Carousel */}
        <div className="w-full overflow-hidden">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              <CarouselItem className="pl-4 basis-full md:basis-4/5">
                <img 
                  src={dashboardPreview} 
                  alt="SalesPro dashboard interface showing performance metrics and analytics" 
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="pl-4 basis-full md:basis-4/5">
                <img 
                  src={mobileTraining} 
                  alt="Mobile training interface with interactive modules and progress tracking" 
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="pl-4 basis-full md:basis-4/5">
                <img 
                  src={heroImage} 
                  alt="Sales team collaboration and training environment" 
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2 h-8 w-8" />
            <CarouselNext className="right-2 h-8 w-8" />
          </Carousel>
        </div>
      </section>

      {/* Why Choose SalesPro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
              Why Choose SalesPro?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Built for Sales Leaders",
                desc: "Not just another CRM - purpose-built for sales acceleration and team empowerment",
                icon: Users
              },
              {
                title: "Measurable Outcomes", 
                desc: "Focused on agent empowerment with clear, trackable results that impact your bottom line",
                icon: BarChart3
              },
              {
                title: "Proven Excellence",
                desc: "Backed by a team with engineering excellence and a track record of delivering results",
                icon: Trophy
              }
            ].map((reason, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl bg-gradient-to-b from-white to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-strong">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{reason.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about SalesPro
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Can SalesPro integrate with my existing CRM?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, SalesPro can be customized and integrated with your existing CRM system. Our team will work with you to ensure seamless data flow and minimal disruption to your current processes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  How long does onboarding take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Typically just a few days depending on your team size. Our streamlined onboarding process includes setup, initial training, and support to get your team productive quickly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  Who benefits most from SalesPro?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  SalesPro is ideal for sales leaders managing distributed teams across multiple products and geographies. It's particularly effective for organizations looking to improve closure rates, enhance training efficiency, and gain better visibility into sales performance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Sales Outcomes?
            </h2>
            <p className="text-xl text-white/90">
              Join leading sales organizations who have already accelerated their performance with SalesPro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Demo Call Today
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <ArrowRight className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="text-2xl font-bold">digiqt</div>
              <p className="text-primary-foreground/80">
                Empowering firms through AI-driven digital transformation
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Product</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#features" className="hover:text-primary-foreground transition-colors">Features</a></li>
                <li><a href="#benefits" className="hover:text-primary-foreground transition-colors">Benefits</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>sales@digiqt.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-light/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 DigiQT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalesProLanding;
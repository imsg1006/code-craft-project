import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Image, BarChart3, Shield, Zap, Globe, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "AI-Powered Web Search",
      description: "Get intelligent summaries from across the web with our advanced search capabilities.",
      color: "text-primary"
    },
    {
      icon: Image,
      title: "Image Generation",
      description: "Transform your ideas into stunning visuals using state-of-the-art AI models.",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Smart Dashboard",
      description: "Organize and manage all your searches and generated content in one place.",
      color: "text-ai-cyan"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security and privacy controls.",
      color: "text-ai-purple"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-card sticky top-0 z-50 border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">AI Explorer</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost" className="btn-ai-secondary">
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="btn-ai-primary">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Zap className="h-3 w-3 mr-1" />
                  Powered by Advanced AI
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Discover the Future of{" "}
                  <span className="gradient-text">AI Content</span> Exploration
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Harness the power of artificial intelligence to search the web, generate stunning images, 
                  and organize your digital discoveries like never before.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="btn-ai-primary text-lg h-14 px-8">
                    Start Exploring
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="btn-ai-secondary text-lg h-14 px-8">
                    <Globe className="mr-2 h-5 w-5" />
                    View Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Live AI Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Secure & Private</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl glass-card p-2">
                <img
                  src={heroImage}
                  alt="AI Content Explorer Interface"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full animate-float opacity-60" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-accent rounded-full animate-float opacity-40" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Everything you need to explore
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive AI toolkit provides everything you need to discover, create, and organize digital content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover:glow-purple transition-all duration-300 group">
                <CardHeader>
                  <feature.icon className={`h-12 w-12 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <Card className="glass-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <CardContent className="relative p-12 text-center">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Ready to explore the future?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who are already using AI Explorer to discover, create, and organize their digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="btn-ai-primary text-lg h-14 px-8">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="btn-ai-secondary text-lg h-14 px-8">
                    Sign In
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">AI Explorer</span>
            </div>
            
            <p className="text-muted-foreground">
              © 2024 AI Explorer. Powered by advanced AI technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

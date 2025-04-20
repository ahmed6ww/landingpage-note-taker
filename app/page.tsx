import Image from "next/image";
import { Mic, Check, ListChecks, Brain, Calendar, Clock } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-40 bg-background/95">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Mic className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Voice Planner</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#waitlist" className="text-muted-foreground hover:text-foreground transition-colors">Join Waitlist</a>
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#waitlist">Get Early Access</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(220,220,220,0.15),transparent)]" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-muted text-muted-foreground mb-4">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Coming Soon - Join Our Waitlist
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Transform Your Spoken Words Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500">Organized Plans</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Capture ideas and tasks using your voice and automatically transform them into structured, organized plans with the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full" asChild>
                <a href="#waitlist">Join Waitlist</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>
          
          {/* Hero Image - Using a gradient for a clean minimalist look */}
          <div className="mt-16 relative mx-auto max-w-5xl">
            <div className="relative rounded-xl overflow-hidden border shadow-2xl">
              <div className="w-full h-[500px] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
                <div className="w-full h-full max-w-4xl bg-white rounded-lg shadow-lg p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex gap-6 h-full">
                    {/* Sidebar */}
                    <div className="w-64 border-r pr-4">
                      <div className="flex items-center gap-2 mb-6">
                        <Mic className="h-5 w-5 text-primary" />
                        <span className="font-medium">Voice Planner</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-8 bg-slate-100 rounded w-full"></div>
                        <div className="h-8 bg-primary/10 rounded w-full"></div>
                        <div className="h-8 bg-slate-100 rounded w-full"></div>
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <div className="flex-1">
                      <div className="h-10 bg-slate-100 rounded w-1/3 mb-6"></div>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="h-12 bg-slate-50 border rounded p-3 flex items-center">
                          <div className="w-5 h-5 rounded-full bg-primary/20 mr-3"></div>
                          <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                        </div>
                        <div className="h-12 bg-slate-50 border rounded p-3 flex items-center">
                          <div className="w-5 h-5 rounded-full bg-primary/20 mr-3"></div>
                          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                        </div>
                        <div className="h-12 bg-slate-50 border rounded p-3 flex items-center">
                          <div className="w-5 h-5 rounded-full bg-primary/20 mr-3"></div>
                          <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Turn Voice Into Action</h2>
            <p className="text-xl text-muted-foreground">
              Voice Planner is designed to make capturing and organizing your thoughts effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Voice Capture</CardTitle>
                <CardDescription>
                  Quickly record your thoughts, ideas, and tasks using natural speech
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Save time by speaking instead of typing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Perfect for on-the-go ideas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Compatible with any device</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Organization</CardTitle>
                <CardDescription>
                  Automatically structure and categorize your voice recordings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Convert messy thoughts to structured lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Smart categorization of tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Auto-generated titles and summaries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <ListChecks className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Unified Dashboard</CardTitle>
                <CardDescription>
                  Manage all your plans in one centralized location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>View all your plans in one place</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Track progress and mark tasks as complete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Easy search and filtering</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How Voice Planner Works</h2>
            <p className="text-xl text-muted-foreground">
              A simple three-step process to transform your spoken words into organized plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line (visible only on desktop) */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-muted hidden md:block"></div>
            
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 z-10">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Speak</h3>
              <p className="text-muted-foreground">
                Record your ideas, tasks, or thoughts using the voice input feature. Just tap and start talking.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 z-10">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium mb-2">AI Processes</h3>
              <p className="text-muted-foreground">
                Our AI automatically transforms your voice recording into structured, organized text with categories and priorities.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 z-10">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Manage</h3>
              <p className="text-muted-foreground">
                Review, edit, and manage your plans in the dashboard. Track progress and mark tasks as complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-xl text-muted-foreground">
              We're constantly improving Voice Planner with new features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Calendar Integration</h3>
                <p className="text-muted-foreground">
                  Automatically schedule tasks and plans in your favorite calendar app with due dates and reminders.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Smart Reminders</h3>
                <p className="text-muted-foreground">
                  Get proactive notifications and reminders based on task priority and deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-primary p-10 text-white flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Waitlist</h2>
                <p className="text-primary-foreground/90 mb-6">
                  Be among the first to experience Voice Planner when we launch. Sign up for early access and exclusive updates.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-white" />
                    <span>Priority access when we launch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-white" />
                    <span>Exclusive early-bird discount</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-white" />
                    <span>Product updates and insights</span>
                  </li>
                </ul>
              </div>
              <div className="p-10 flex items-center">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Mic className="h-5 w-5 text-primary" />
              <span className="font-bold">Voice Planner</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Voice Planner. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

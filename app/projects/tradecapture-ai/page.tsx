import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { projectsById } from "@/data/projects"

export default function TradeCapturePage() {
  return (
    <main>
      <Navbar />

      <article className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/projects">
                <ArrowLeft size={16} className="mr-2" /> Back to Projects
              </Link>
            </Button>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-6 text-primary">TradeCapture AI</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">React Native</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Expo</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">OpenAI</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Supabase</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">TypeScript</span>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-foreground/80">
                A mobile application with multi-agent AI architecture for lead capture at tradeshows, built by a team of
                2 developers and 1 product manager in just 1.5 months.
              </p>
            </div>
          </header>

          {/* Project Overview */}
          <section className="mb-16">
            <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden mb-8">
              <Image
                src={projectsById.TradeCaptureAI.image}
                alt="TradeCapture AI App"
                className="w-full h-full object-cover"
                width={800}
                height={400}
              />
            </div>
            <div className="prose prose-invert max-w-none">
              <p>
                TradeCapture AI is a mobile application designed to revolutionize how sales teams capture and qualify
                leads at tradeshows. The app uses a sophisticated multi-agent AI architecture to handle business card
                scanning, conversation analysis, lead qualification, and CRM integration—all while functioning reliably
                in environments with poor connectivity.
              </p>
              <p>
                What makes this project particularly interesting from a technical perspective is that we delivered a
                complex, AI-powered application with a small team of just two developers and one product manager in only
                six weeks.
              </p>
            </div>
          </section>

          {/* Technical Architecture */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Architecture</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                The core of TradeCapture AI is a multi-agent system where specialized AI components work together to
                provide a seamless experience. Each agent handles a specific aspect of the lead capture process:
              </p>

              <h3>Multi-Agent AI System</h3>
              <ul>
                <li>
                  <strong>Recognition Agent:</strong> Handles OCR processing of business cards and badges with custom
                  post-processing to improve accuracy in poor lighting conditions.
                </li>
                <li>
                  <strong>Conversation Agent:</strong> Processes audio transcriptions in real-time, extracts key
                  information, and generates follow-up questions based on industry-specific knowledge bases.
                </li>
                <li>
                  <strong>Qualification Agent:</strong> Analyzes conversation data to score leads based on customizable
                  criteria and buying signals, with a feedback loop for continuous improvement.
                </li>
                <li>
                  <strong>Integration Agent:</strong> Handles data formatting and synchronization with various CRM
                  systems through a unified API adapter pattern.
                </li>
              </ul>

              <p>
                These agents are coordinated by an orchestration layer that manages their interactions and maintains a
                shared context. Here's a simplified version of the agent orchestrator:
              </p>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg mb-8">
              <div className="bg-zinc-900 p-4 rounded-md overflow-x-auto text-sm">
                <pre className="text-foreground/90">
                  <code>{`// Agent Orchestrator (simplified)
export class AgentOrchestrator {
  private agents: Map<AgentType, BaseAgent> = new Map();
  private context: SharedContext;
  
  constructor(config: OrchestratorConfig) {
    this.context = new SharedContext();
    
    // Initialize agents with shared context
    this.agents.set(AgentType.RECOGNITION, 
      new RecognitionAgent(config.recognition, this.context));
    this.agents.set(AgentType.CONVERSATION, 
      new ConversationAgent(config.conversation, this.context));
    this.agents.set(AgentType.QUALIFICATION, 
      new QualificationAgent(config.qualification, this.context));
    this.agents.set(AgentType.INTEGRATION, 
      new IntegrationAgent(config.integration, this.context));
  }
  
  async processInput(input: AgentInput): Promise<AgentResult> {
    const { type, data } = input;
    const agent = this.agents.get(type);
    
    if (!agent) {
      throw new Error(\`Agent \${type} not found\`);
    }
    
    // Process input with appropriate agent
    const result = await agent.process(data);
    
    // Determine next steps based on result
    const nextSteps = this.determineNextSteps(result);
    
    // Execute follow-up actions if needed
    if (nextSteps.length > 0) {
      await this.executeNextSteps(nextSteps);
    }
    
    return result;
  }
}`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Technical Challenges */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Challenges</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Offline Functionality</h3>
              <p>
                One of the biggest challenges was ensuring the app would function reliably in tradeshow environments
                with poor or intermittent connectivity. We implemented a sophisticated offline-first architecture using
                WatermelonDB for local storage with custom sync conflict resolution algorithms.
              </p>
              <p>
                Our solution included a queue-based synchronization system that prioritizes critical data and uses
                exponential backoff for retry attempts, reducing battery consumption by 40%. We also developed a custom
                merge strategy for handling conflicting updates when multiple devices sync with the server after being
                offline.
              </p>

              <h3>Real-time Audio Processing</h3>
              <p>
                Processing conversation audio in noisy tradeshow environments presented significant technical hurdles.
                We implemented a custom audio processing pipeline with noise cancellation and speaker separation using
                WebRTC and TensorFlow.js.
              </p>
              <p>
                The system processes audio in 3-second chunks while maintaining context across segments, reducing
                latency by 65%. We also developed a hybrid processing approach that uses on-device models for initial
                filtering and cloud processing for deeper analysis, balancing accuracy and battery life.
              </p>
            </div>
          </section>

          {/* Customization Engine */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Customization Engine</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                A key technical achievement was developing a flexible customization system that allows clients to
                configure the app for different events and selling patterns without code changes. This includes:
              </p>

              <h3>Event-Specific Configurations</h3>
              <p>
                We built a JSON-based configuration system with a web admin interface that allows clients to define
                custom fields for different event types, set up event-specific qualification criteria, configure
                branding and UI elements, and create custom follow-up templates.
              </p>

              <h3>AI Prompt Templates</h3>
              <p>
                We developed a sophisticated prompt engineering system that allows for industry-specific conversation
                templates, product-specific question generators, customizable objection handling prompts, and dynamic
                context injection based on conversation flow.
              </p>

              <h3>Integration Framework</h3>
              <p>
                We built a pluggable integration system with adapters for multiple CRM platforms (Salesforce, HubSpot,
                etc.), marketing automation tools, custom webhook endpoints, and data transformation pipelines.
              </p>
            </div>
          </section>

          {/* Development Process */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Development Process</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                With a tight timeline of just 1.5 months and a small team (2 developers and 1 product manager), we
                adopted a highly efficient development process:
              </p>

              <h3>Rapid Development Approach</h3>
              <ul>
                <li>
                  <strong>Week 1-2:</strong> Core architecture setup, including the agent framework, database schema,
                  and basic UI components.
                </li>
                <li>
                  <strong>Week 3-4:</strong> Implementation of the recognition and conversation agents, offline
                  functionality, and basic customization engine.
                </li>
                <li>
                  <strong>Week 5-6:</strong> Integration framework, qualification agent, advanced customization
                  features, and performance optimization.
                </li>
              </ul>

              <h3>Technical Practices</h3>
              <p>We employed several technical practices to maintain quality while moving quickly:</p>
              <ul>
                <li>
                  <strong>Modular Architecture:</strong> Used a feature-based folder structure with clear boundaries
                  between modules, enabling parallel development.
                </li>
                <li>
                  <strong>Automated Testing:</strong> Implemented Jest for unit tests and Detox for E2E testing, with a
                  focus on critical paths and edge cases.
                </li>
                <li>
                  <strong>CI/CD Pipeline:</strong> Set up GitHub Actions for continuous integration with automated
                  builds and deployments to TestFlight and internal testing channels.
                </li>
                <li>
                  <strong>Feature Flags:</strong> Implemented a feature flag system to safely deploy features
                  incrementally and conduct A/B testing in production.
                </li>
              </ul>
            </div>
          </section>

          {/* Technical Innovations */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Innovations</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Adaptive AI Context Management</h3>
              <p>
                We developed a novel approach to managing context in AI conversations that dynamically adjusts based on
                the conversation flow. This includes a sliding context window with importance-based retention, entity
                extraction and relationship mapping, topic detection for context switching, and memory compression for
                token optimization. This approach reduced token usage by 47% while maintaining context quality.
              </p>

              <h3>Hybrid OCR Processing</h3>
              <p>
                We created a multi-stage OCR system that combines multiple approaches for maximum accuracy, including
                on-device ML for initial text detection, cloud-based OCR for detailed extraction, AI-powered
                post-processing for error correction, and structured data extraction with custom regex patterns. This
                system achieved 99.2% accuracy in field extraction, even in challenging lighting conditions.
              </p>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Frontend</h3>
              <ul>
                <li>
                  <strong>React Native 0.71</strong> - Core framework with the new architecture
                </li>
                <li>
                  <strong>Expo SDK 48</strong> - Development tools and native module access
                </li>
                <li>
                  <strong>TypeScript 5.0</strong> - Type safety and developer experience
                </li>
                <li>
                  <strong>React Navigation 6</strong> - Navigation and routing
                </li>
                <li>
                  <strong>Reanimated 3.0</strong> - High-performance animations
                </li>
              </ul>

              <h3>Backend & Data</h3>
              <ul>
                <li>
                  <strong>Supabase</strong> - PostgreSQL database, authentication, and storage
                </li>
                <li>
                  <strong>WatermelonDB</strong> - Offline-first reactive database
                </li>
                <li>
                  <strong>Firebase</strong> - Cloud messaging and analytics
                </li>
                <li>
                  <strong>Edge Functions</strong> - Serverless API endpoints
                </li>
              </ul>

              <h3>AI & ML</h3>
              <ul>
                <li>
                  <strong>OpenAI GPT-4</strong> - Conversation analysis and generation
                </li>
                <li>
                  <strong>LangChain.js</strong> - AI orchestration and prompt management
                </li>
                <li>
                  <strong>TensorFlow.js</strong> - On-device ML for image processing
                </li>
                <li>
                  <strong>Google Cloud Vision API</strong> - OCR and image analysis
                </li>
                <li>
                  <strong>WebRTC</strong> - Audio processing and noise cancellation
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                The TradeCapture AI project demonstrates how a small, focused team can deliver a sophisticated
                AI-powered application in a short timeframe. By leveraging modern technologies and implementing
                innovative solutions to complex problems, we created a product that significantly improves the lead
                capture process at tradeshows.
              </p>
              <p>
                The multi-agent architecture, offline-first design, and customization engine provide a solid foundation
                for future enhancements, while the modular codebase ensures maintainability and scalability.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Interested in advanced AI solutions for your business?</h2>
            <Button asChild size="lg" className="text-lg">
              <Link href="/#contact">Let's Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}


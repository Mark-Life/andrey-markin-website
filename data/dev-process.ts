import { ProcessStep } from "@/components/minimal-process-stepper";

export const developmentSteps: ProcessStep[] = [
    {
        number: 1,
        title: "Idea & Planning",
        description:
        "You share your idea, and we provide you with tech stack, deployment strategy, and project timeline. We'll work together to define the scope, features, and technical requirements to ensure we're aligned on the vision and goals for your project.",
    },
    {
      number: 2,
      title: "Proof of Concept | 3-5 days",
      description:
        "Within just a few days, we create a working proof of concept to test the core ideas and functionalities. This rapid prototype helps validate technical feasibility and gives you something tangible to evaluate before committing to full development.",
    },
    {
      number: 3,
      title: "First Iteration of MVP | 2 weeks",
      description:
        "We quickly develop the first version of the MVP, allowing the business to validate their idea in a real-world environment. This focused approach delivers core functionality that can be tested with real users to gather valuable feedback early in the process.",
    },
    {
      number: 4,
      title: "Validation and Improvements",
      description:
        "After validation, we make improvements, add robust features, conduct testing, and provide deployment support. Based on user feedback and performance data, we refine the product, enhance the user experience, and ensure everything is production-ready.",
    },
  ]
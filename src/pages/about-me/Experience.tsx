import GlassCard from "@/components/glass-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Experience = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-y-5">
      <GlassCard>
        <CardHeader>
          <CardTitle className="text-neutral-50">Microsoft</CardTitle>
          <CardDescription className="text-neutral-300">
            <p>2022 - 2025</p>
            <p>Full-Stack Software Engineer</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-1.5 text-sm text-neutral-50">
          <p>
            Created Billing and Usage tools that dramatically clarified Copilot
            Agent cost information for customers.
          </p>
          <p>
            Developed E2E frameworks, enabling my entire team to write end-user
            diagnostics for solving common end-user scenarios. Surfaced these
            diagnostics on the Microsoft Admin Center for broad usage across
            tenants. Expanded this project via the Windows 11 Get Help App to
            bring these solutions outside of Azure and onto user machines.
          </p>
          <p>
            Architected a unified lookup tool that consolidated multiple
            existing solutions into a single interface. This tool, built as a
            complex state machine orchestrating numerous API calls and managing
            intertwined dependencies, dramatically reduced resolution time for
            customer success agents.
          </p>
          <p>
            Completed several
            <a
              href="https://www.microsoft.com/en-us/trust-center/security/secure-future-initiative"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-blue-400 underline hover:text-blue-300"
            >
              Secure Future Initiative
            </a>
            work items, including manually developing an encryption key rotation
            mechanism as described
            <a
              href="https://learn.microsoft.com/en-us/azure/key-vault/secrets/tutorial-rotation-dual"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-blue-400 underline hover:text-blue-300"
            >
              here
            </a>
            .
          </p>
          <p>
            Won the 2023 Amplify Protect Capture The Flag (CTF) competition.
          </p>
        </CardContent>
      </GlassCard>
      <Card className="w-full max-w-xl border border-white/30 bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150">
        <CardHeader>
          <CardTitle className="text-neutral-50">OMP</CardTitle>
          <CardDescription className="text-neutral-300">
            <p>2021 - 2022</p>
            <p>Infrastructure Software Engineer</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-1.5 text-sm text-neutral-50">
          <p>
            Created a C++ JSON serializer to support an internal REST API. This
            let us send/receive rich types such as
            <span className="p-1 font-mono">std::variant</span>in a performant,
            type-safe manner.
          </p>
          <p>
            Documented an existing API with Doxygen, enabling the team to
            understand and maintain the codebase more effectively. Completion of
            this task saw an increase in adoption of the API by other teams,
            leading to more modern usage patterns.
          </p>
        </CardContent>
      </Card>
      <Card className="w-full max-w-xl border border-white/30 bg-white/10 shadow-2xl backdrop-blur-xl backdrop-saturate-150">
        <CardHeader>
          <CardTitle className="text-neutral-50">
            University of Florida - Machine Learning and Sensing Lab
          </CardTitle>
          <CardDescription className="text-neutral-300">
            <p>2020 - 2021</p>
            <p>Research Assistant</p>
            <a
              href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12096/1209603/Bag-level-classification-network-for-infrared-target-detection/10.1117/12.2618325.short"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Multi-Sensor Data Fusion for Buried Object Detection
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-1.5 text-sm text-neutral-50">
          <p></p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Experience;

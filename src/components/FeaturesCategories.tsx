"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

const features = [
  {
    title: "Strategic Talent Acquisition",
    image:
      "https://cdn.cosmos.so/ae8a47a7-defe-4bf9-a14b-bcafd7211523?format=jpeg",
  },
  {
    title: "Team Building Expertise",
    image:
      "https://cdn.cosmos.so/d943a5b2-70c4-410f-adbf-abeb3f54240b?format=jpeg",
  },
  {
    title: "Industry-Specific Recruitment",
    image:
      "https://cdn.cosmos.so/5ccb3b58-3a0e-484d-ab24-d469063c78b7?format=jpeg",
  },
  {
    title: "Personalized Partnership Approach",
    image:
      "https://cdn.cosmos.so/b0471660-8ad6-493c-a717-4800e4f13b64?format=jpeg",
  },
  {
    title: "Results-Driven Solutions",
    image:
      "https://cdn.cosmos.so/5e4b3a7d-529a-4ce2-847a-f052e2531f30?format=jpeg",
  },
  {
    title: "Exceptional Candidate Journey",
    image:
      "https://cdn.cosmos.so/12b77de9-746a-414b-b36b-82826c31adcf?format=jpeg",
  },
  {
    title: "Strategic Talent Acquisition",
    image:
      "https://cdn.cosmos.so/b0471660-8ad6-493c-a717-4800e4f13b64?format=jpeg",
  },
  {
    title: "Team Building Expertise",
    image:
      "https://cdn.cosmos.so/51e21973-3966-4bf2-9baa-5ca5935236c7?format=jpeg",
  },
  {
    title: "Industry-Specific Recruitment",
    image:
      "https://cdn.cosmos.so/ae8a47a7-defe-4bf9-a14b-bcafd7211523?format=jpeg",
  },
  {
    title: "Personalized Partnership",
    image:
      "https://cdn.cosmos.so/5ccb3b58-3a0e-484d-ab24-d469063c78b7?format=jpeg",
  },
  {
    title: "Commitment to Results",
    image:
      "https://cdn.cosmos.so/db6485ef-5966-4a3f-8602-74522ac8586a?format=jpeg",
  },
  {
    title: "Exceptional Candidate Experience",
    image:
      "https://cdn.cosmos.so/01ddbb8d-b5e9-4425-8953-8f734a44dcb3?format=jpeg",
  },
];

const FeatureCategories = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const items = container.getElementsByClassName("feature-item");
      const containerMiddle = window.innerHeight * 0.6;

      let closestItem = null;
      let closestDistance = Infinity;

      Array.from(items).forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - containerMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestItem = index;
        }
      });

      if (closestItem !== null) {
        setActiveFeature(closestItem);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section className="py-32">
      <div className="container  max-w-7xl mx-auto px-4">
        <h1 className="mb-10 text-4xl font-serif medium md:text-5xl max-w-4xl text-foreground lg:mb-4 lg:text-6xl">
          Propel Your Business Forward
        </h1>
        <p className="mb-12 text-lg text-muted-foreground">
          In today's competitive landscape, finding the right talent is your
          biggest advantage. Talent Alchemist isn't just about filling roles;
          we're about building teams that propel your business forward.
        </p>
        <div className="relative gap-6 pb-72 md:grid md:grid-cols-5 md:pb-0">
          <div className="col-span-3 pb-4" ref={containerRef}>
            <Separator />
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <div
                  className="feature-item py-3"
                  onMouseEnter={() => !isMobile && setActiveFeature(index)}
                >
                  <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
                    <span
                      className={cn(
                        "invisible size-2.5 shrink-0 rounded-full bg-primary md:size-3",
                        activeFeature === index && "visible"
                      )}
                    ></span>
                    <h2
                      className={cn(
                        "text-[clamp(1.65rem,3vw,2.15rem)] font-serif font-medium text-muted-foreground",
                        activeFeature === index && "text-primary"
                      )}
                    >
                      {feature.title}
                    </h2>
                  </div>
                </div>
                <Separator />
              </React.Fragment>
            ))}
          </div>
          <div className="sticky bottom-3 left-3 col-span-2 h-72 w-fit border md:top-20 md:h-fit">
            <img
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              className="h-72 md:h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureCategories };

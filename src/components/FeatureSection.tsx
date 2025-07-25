"use client";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Eye,
  ScanFace,
  SquaresUnite,
  Users,
  View,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type imageType = {
  src: string;
  alt?: string;
};

type variantType = "1" | "2" | "3" | "4";

interface list {
  icon: LucideIcon;
  title: string;
  tabName: string;
  summary: string;
  imageComponent: variantType;
  images: Array<imageType>;
  link?: {
    name: string;
    href: string;
  };
}
const TAB_LIST: Array<list> = [
  {
    icon: ScanFace,
    title: "Spotlight on Talent",
    tabName: "Transform Candidates",
    summary:
      "Talent Alchemist turns ordinary candidates into gold—putting the spotlight on the best fit for your team, effortlessly.",
    imageComponent: "1",
    images: [
      {
        src: "https://cdn.cosmos.so/deb9d915-4ad5-4611-a63b-085d97aeff2a?format=jpeg",
        alt: "Spotlight on Talent",
      },
    ],
  },
];

interface ImagesProps {
  images: Array<imageType>;
  variant?: variantType;
}

const Images = ({ images, variant = "1" }: ImagesProps) => {
  const positions = [
    {
      top: "12%",
      right: "36%",
      rotate: "2.6deg",
    },
    {
      top: "12%",
      right: "70%",
      rotate: "-2.4deg",
    },
    {
      bottom: "16%",
      right: "35%",
      rotate: "1.6deg",
    },
    {
      bottom: "15%",
      right: "2%",
      rotate: "-1.5deg",
    },
  ];

  switch (variant) {
    case "1":
      return (
        <div className="ml-auto aspect-[0.930372149] h-full max-h-[38.75rem] overflow-hidden rounded-tl-[0.5rem] rounded-bl-[0.5rem]">
          <img
            className="block size-full object-cover object-center"
            src={images[0].src}
            alt={images[0].alt}
          />
        </div>
      );
    case "2":
      return (
        <div className="size-full pr-4">
          <div className="relative ml-auto aspect-[0.930372149] h-full max-h-[38.75rem] overflow-hidden rounded-[0.625rem]">
            {images.map((img, i) => (
              <div
                style={{ ...positions[i] }}
                className="absolute aspect-[0.845360825] w-[30%] overflow-hidden rounded-[0.5rem] shadow-md"
                key={`img-${variant}-${i}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="block size-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      );
    case "3":
      return (
        <div className="relative ml-auto aspect-[0.930372149] h-full max-h-[38.75rem] overflow-hidden rounded-[0.625rem]">
          <div className="absolute top-1/2 left-[5%] aspect-[1.586206897] w-[120%] -translate-y-1/2 overflow-hidden rounded-2xl shadow-xl xl:right-[-22%]">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="block size-full object-cover object-center"
            />
          </div>
        </div>
      );

    default:
      return (
        <div className="ml-auto aspect-[0.930372149] h-full max-h-[38.75rem] overflow-hidden pl-4 xl:pl-0">
          <div className="grid size-full grid-cols-2 grid-rows-2 gap-[3%]">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 overflow-hidden rounded-[0.625rem]">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="block size-full object-cover object-center"
              />
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3 overflow-hidden rounded-[0.625rem]">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="block size-full object-cover object-center"
              />
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-3 overflow-hidden rounded-tl-[0.625rem] rounded-bl-[0.625rem]">
              <img
                src={images[2].src}
                alt={images[2].alt}
                className="block size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      );
  }
};

const FeatureSection = () => {
  return (
    <section className="py-32 w-full max-w-7xl mx-auto">
      <div className="w-full ">
        <div className="rounded-xl bg-muted py-11">
          {/* Only one tab, so no TabsList or multiple TabsContent */}
          <div className="flex-col-reverse gap-10 ">
            <div className="grid w-full grid-cols-1 items-center gap-8 xl:grid-cols-[37.5rem_1fr]">
              <div className="flex flex-col gap-4 px-8 xl:pl-18">
                <div className="flex size-8 rounded-lg bg-primary text-primary-foreground">
                  <SquaresUnite className="m-auto size-4" />
                </div>
                <h2 className="font-serif text-5xl xl:text-7xl">
                  Spotlight on Talent
                </h2>
                <p className="mt-4 text-xl text-foreground-muted">
                  Talent Alchemist turns ordinary candidates into gold putting
                  the spotlight on the best fit for your team, effortlessly.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Button
                    variant="default"
                    className="h-12 w-fit px-6 flex items-center w-36 text-sm font-medium rounded-full cursor-pointer"
                  >
                    Get Started
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 shadow-none cursor-pointer w-fit w-36 px-6 text-sm font-medium rounded-full"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="h-full w-full justify-self-end pl-4 md:pl-0">
                <Images variant="1" images={TAB_LIST[0].images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeatureSection };

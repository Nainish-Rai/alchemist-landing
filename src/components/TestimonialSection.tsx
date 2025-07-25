import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO & Founder, Tech Startup",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    content: "Found top talent fast. The process was seamless and efficient!",
  },
  {
    name: "Jane Doe",
    role: "CTO, SaaS Company",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    content: "Impressed by the quality of candidates. Highly recommend!",
  },
  {
    name: "John Smith",
    role: "COO, Fintech",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    content: "Hiring was quick and easy. Great support throughout.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead, AI Startup",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
    content: "Matched with skilled professionals in days. Excellent service!",
  },
  {
    name: "Richard Doe",
    role: "Designer, Product Studio",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
    content: "Streamlined hiring. Saved us time and effort.",
  },
  {
    name: "Gordon Doe",
    role: "Developer, E-commerce",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-6.webp",
    content: "Fast onboarding and great talent pool. Will use again!",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-32">
      <div className="container bg-muted w-full max-w-screen lg:max-w-7xl rounded-lg p-6 md:p-12">
        <Carousel className="w-full">
          <div className="mb-8 flex justify-between px-1 lg:mb-12">
            <h2 className="text-2xl font-serif  font-medium text-foreground lg:text-6xl">
              Why Clients Love Us
            </h2>
            <div className="flex items-center space-x-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
          <CarouselContent>
            {testimonials.map((testimonial, idx) => (
              <CarouselItem
                key={idx}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <div className="flex h-full bg-white flex-col justify-between rounded-lg border p-6">
                    <q className="leading-7 text-foreground/70">
                      {testimonial.content}
                    </q>
                    <div className="mt-6 flex gap-4 leading-5">
                      <Avatar className="size-9 rounded-full ring-1 ring-input">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { TestimonialSection };

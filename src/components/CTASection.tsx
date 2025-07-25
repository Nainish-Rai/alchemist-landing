import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-32">
      <div className="container max-w-7xl mx-auto">
        <div className="flex w-full flex-col overflow-hidden rounded-lg bg-muted md:rounded-xl lg:flex-row lg:items-center">
          <div className="w-full shrink-0 self-stretch lg:w-1/2">
            <img
              src="https://cdn.cosmos.so/bdc42f12-ffec-4978-8940-57e9ebcc7859?format=jpeg"
              alt="placeholder hero"
              className="aspect-3/2 w-full rounded-t-md object-cover md:rounded-t-none md:rounded-l-md"
            />
          </div>
          <div className="w-full shrink-0 px-4 py-6 md:p-8 lg:w-1/2 lg:px-16">
            <h3 className="mb-3 font-serif text-2xl text-foreground md:mb-4 md:text-6xl lg:mb-6">
              Find Top Talent Fast
            </h3>
            <p className="mb-8 text-muted-foreground lg:text-lg">
              Connect with pre-vetted professionals ready to join your team.
            </p>
            <Button className="rounded-full h-12 w-28 cursor-pointer">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };

const AboutSection = () => {
  return (
    <section className="max-w-7xl py-32">
      <div className="container">
        <div className="grid gap-14 pb-32 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium">ABOUT US</p>
            <h1 className="mt-4 text-3xl leading-[120%] font-serif text-foreground font-medium md:text-6xl">
              Simplifying Complex Workflows
            </h1>
          </div>
          <p className="md:text-lg lg:mt-10">
            We connect top talent with innovative companies. Our streamlined
            hiring process ensures you find the right fit, fast.
          </p>
        </div>
        <img
          src="https://cdn.cosmos.so/b0b1de9c-66f9-47b6-8e03-6a50131bb5c5?format=jpeg"
          alt="placeholder"
          className="ml-auto aspect-video max-h-[550px] rounded-xl object-cover"
        />
        <p className="mt-6 text-center font-serif text-xl lg:text-right">
          Your partner for smarter, faster hiring
        </p>

        <div className="grid mt-36 gap-14 lg:grid-cols-4 xl:grid-cols-5">
          <div className="md:col-span-2 xl:col-span-3">
            <h2 className="mb-10 text-6xl font-serif text-foreground  font-medium">
              Why We Began
            </h2>
            <p className="text-lg">
              Hiring shouldn’t be hard. We started to make talent acquisition
              simple and effective for growing teams.
              <br />
              <br />
              Our mission: connect great people with great companies, quickly
              and efficiently.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 text-center">
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-background p-6">
                <span className="text-2xl font-serif md:text-4xl">2024</span>
                <span className="text-sm font-serif text-muted-foreground md:text-lg">
                  Launched
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-background p-6">
                <span className="text-2xl font-serif md:text-4xl">$2.2M</span>
                <span className="text-sm font-serif text-muted-foreground md:text-lg">
                  Pre-Seed Round
                </span>
              </div>
            </div>
          </div>
          <img
            src="https://cdn.cosmos.so/db6485ef-5966-4a3f-8602-74522ac8586a?format=jpeg"
            alt="placeholder"
            className="rounded-xl md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export { AboutSection };

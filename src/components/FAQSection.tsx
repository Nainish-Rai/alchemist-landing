import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How does your agency find top talent?",
    answer:
      "We leverage our network and advanced screening to connect you with the best candidates quickly.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We hire for tech, marketing, sales, and more. Our team adapts to your needs.",
  },
  {
    question: "How fast can you fill a position?",
    answer:
      "Most roles are filled within days, thanks to our streamlined process.",
  },
  {
    question: "Is there a guarantee on hires?",
    answer: "Yes, we offer a replacement guarantee for every placement.",
  },
  {
    question: "How do I get started?",
    answer: "Contact us and our team will guide you through the next steps.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-32">
      <div className=" max-w-7xl w-full">
        <div className="mx-auto grid w-full gap-36 md:grid-cols-2 justify-between">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-serif text-foreground font-medium">
              Need Talent?
              <br />
              <span className="text-muted-foreground/70">
                We connect you with the best.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Still have questions? Contact our
              <a href="#" className="mx-1 whitespace-nowrap underline">
                hiring experts
              </a>
              today.
            </p>
          </div>
          <Accordion type="multiple">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { FaqSection };

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

const faqQuestions = [
  {
    question: "What is SellSource?",
    answer:
      "SellSource is an all-in-one software marketplace that connects software developers with aspiring business owners. It offers a platform for developers to showcase and sell their software creations while providing businesses with access to cutting-edge software solutions.",
  },
  {
    question: "How can I join SellSource as a developer or buyer?",
    answer:
      "Joining SellSource is simple! Click on the 'Join Us' button on the homepage and fill out the registration form. Developers can choose to join as individuals or companies, while buyers can sign up as individuals or businesses.",
  },
  {
    question: "How does SellSource ensure the quality of listed software?",
    answer:
      "We have a rigorous vetting process for software listings. Our team reviews each submission to ensure it meets our quality standards and provides a positive user experience. You can trust that every software on SellSource is reliable and high-performing.",
  },
  {
    question: "Can developers set their own pricing for software?",
    answer:
      "Yes, developers have the freedom to set their own pricing for their software creations. SellSource allows developers to determine the best value for their work, making it a fair and flexible marketplace.",
  },
  {
    question: "Is there a trial period for software before purchase?",
    answer:
      "Some developers may choose to offer trial versions of their software for buyers to explore before making a purchase. However, trial availability varies depending on the developers and their products.",
  },
];

function Faq() {
  return (
    <div className="px-20 py-16" id="faq">
      <h2 className="mb-12 text-4xl font-bold text-gray-8">
        Frequently asked question (FAQ)
      </h2>

      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col gap-4"
      >
        {faqQuestions.map((question, i) => (
          <AccordionItem value={`item-${i}`} key={i}>
            <AccordionTrigger>{question.question}</AccordionTrigger>
            <AccordionContent>{question.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Faq;

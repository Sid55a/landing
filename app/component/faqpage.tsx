import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

import { ScrollArea } from "@/app/components/ui/scroll-area";

const fnqData = [
  {
    title: "What benefits does Get Jweles offer to its partner brands?",
    description:
      "Get Jweles likely offers its partner brands benefits such as increased exposure through access to its user base, marketing support for promotional activities, data insights to refine strategies, collaboration opportunities within its network, new sales channels, technology integration for enhancing products or services, and a boost in reputation and credibility.",
  },
  {
    title: "What kind of exposure does Get Jweles offer to partner brands?",
    description:
      "Get Jweles provides access to its user base and customer network, offering increased visibility and potential new customers for partner brands.",
  },

  {
    title: "What data insights can partner brands expect from Get Jweles?",
    description:
      "Get Jweles provides data and analytics about customer preferences and behaviors to help partner brands refine their offerings and marketing strategies.",
  },

  {
    title:
      "How does Get Jweles help partner brands expand their sales channels?",
    description:
      "Get Jweles offers access to new sales channels through its platform or retail space, increasing sales and market share for partner brands.",
  },

  {
    title:
      "What types of payment options does Get Jweles support for partner brands?",
    description:
      "Get Jweles supports a range of payment options, ensuring that partner brands can offer flexible and convenient payment methods to their customers.",
  },
];

const FAQsPage = () => {
  const FAQData = fnqData;
  return (
    <div className="w-full">
      <main className="h-full flex-1 flex-col  p-4  bg-white rounded-2xl relative">
        <h2 className="text-3xl w-full flex font-bold justify-center items-center">
          Frequently Asked Questions
        </h2>
        <div className="w-full h-auto my-10 ">
          {/* <div className="bg-red-500 w-full h-full"></div>/ */}

          <div className="w-full  flex flex-col justify-center items-center gap-2">
            {FAQData.length > 0 &&
              FAQData.map((fnq, i) => (
                <Accordion
                  key={i}
                  type="single"
                  collapsible
                  className=" rounded-xl px-4 w-full max-w-[47rem] "
                >
                  <AccordionItem value={`item-${i}`} className="border-none">
                    <AccordionTrigger className="px-4 bg-gray-200 rounded-xl ">
                      {fnq?.title}
                    </AccordionTrigger>
                    <AccordionContent className="bg-gray-100 w-full px-4 rounded-lg py-2 text-justify">
                      {fnq.description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQsPage;

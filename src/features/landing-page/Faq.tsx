import { CaretDown } from "@phosphor-icons/react";

function Faq() {
  return (
    <div className="px-20 py-16">
      <h2 className="mb-12 text-4xl font-bold text-gray-8">
        Frequently asked question (FAQ)
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between rounded-xl border border-gray-4 p-6 text-xl text-gray-8">
          <p>what is the policy of refund?</p>
          <CaretDown size={32} />
        </div>
        <div className="flex items-center justify-between rounded-xl border border-gray-4 p-6 text-xl text-gray-8">
          <p>what is the policy of refund?</p>
          <CaretDown size={32} />
        </div>
        <div className="flex items-center justify-between rounded-xl border border-gray-4 p-6 text-xl text-gray-8">
          <p>what is the policy of refund?</p>
          <CaretDown size={32} />
        </div>
      </div>
    </div>
  );
}

export default Faq;

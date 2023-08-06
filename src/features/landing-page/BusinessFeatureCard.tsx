interface BusinessFeatureProps {
  feature: string;
  icon: React.ReactElement;
  title: string;
  text: string;
}

function BusinessFeatureCard({
  feature,
  icon,
  title,
  text,
}: BusinessFeatureProps) {
  return (
    <div className="rounded-xl border border-gray-2 bg-white p-4 max-lg:p-2 max-[650px]:w-full">
      <div className="mb-8 flex items-center gap-4 max-lg:mb-6 max-lg:gap-2">
        <div className="rounded-xl bg-primary-1 p-2 text-4xl text-primary-9 max-lg:text-2xl">
          {icon}
        </div>
        <p className="text-lg text-gray-6 max-lg:text-base">{title}</p>
      </div>
      <p className="mb-4 text-5xl font-bold text-tertiary-7 max-lg:text-3xl">
        {feature}
      </p>
      <p className="text-lg text-gray-6 max-lg:text-base">{text}</p>
    </div>
  );
}

export default BusinessFeatureCard;

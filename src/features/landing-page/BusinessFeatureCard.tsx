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
    <div className="rounded-xl border border-gray-4 bg-white p-4">
      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-xl bg-primary-1 p-2 text-4xl text-primary-9">
          {icon}
        </div>
        <p className="text-lg text-gray-6">{title}</p>
      </div>
      <p className="mb-4 text-5xl font-bold text-tertiary-7">{feature}</p>
      <p className="text-lg text-gray-6">{text}</p>
    </div>
  );
}

export default BusinessFeatureCard;

interface DeveloperFeatureProps {
  icon: React.ReactElement;
  title: string;
  text: string;
}

function DeveloperFeatureCard({ icon, title, text }: DeveloperFeatureProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-accent-10 p-4">
      <p className="text-2xl font-medium text-accent-1 max-sm:text-xl">
        {title}
      </p>
      <div className="mt-auto space-y-2">
        <div className="inline-block rounded-xl bg-accent-1 p-2 text-3xl text-accent-10 max-sm:text-2xl">
          {icon}
        </div>
        <p className="text-accent-3 max-sm:text-sm">{text}</p>
      </div>
    </div>
  );
}

export default DeveloperFeatureCard;

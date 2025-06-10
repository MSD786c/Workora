interface IndustryCardProps {
  title: string;
  description: string;
}

const IndustryCard = ({ title, description }: IndustryCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 border border-gray-100 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-[#d4af62] mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default IndustryCard;

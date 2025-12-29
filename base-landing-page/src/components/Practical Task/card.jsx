const Card = ({ title, description, accentColor }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white shadow-lg p-6 hover:shadow-xl transition">
      {/* Accent bar */}
      <div className={`h-1 w-12 mb-4 rounded-full ${accentColor}`} />

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;

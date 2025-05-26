

const SimpleAppointmentCard = ({
  title,
  image,
  duration,
  doctor,
  className,
}) => {
  return (
    <div className={`w-full p-4 rounded-2xl ${className}`}>
      <div className="flex items-center justify-between mb-3 ">
        <p className="text-sm font-semibold">{title}</p>
        <span className="block">{image}</span>
      </div>
      <div className="text-sm">
        <p>{duration}</p>
        <p>{doctor}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;

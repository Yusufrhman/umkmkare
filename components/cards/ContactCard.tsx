import React from "react";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttontext: string;
  onclick: () => void;
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  buttontext,
  onclick,
  className,
}) => {
  return (
    <div className={`bg-custom-off-white p-6 flex flex-col gap-1 items-start rounded-lg w-full ${className || ""}`}>
      {icon}
      <p className="font-bold">{title}</p>
      <p>{description}</p>
      <button className="text-custom-light-olive-green text-left" onClick={onclick}>
        {buttontext}
      </button>
    </div>
  );
};

export default ContactCard;

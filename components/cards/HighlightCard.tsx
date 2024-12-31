import { ReactNode } from "react";

interface HighlightCardRootProps {
  children: ReactNode;
  className?: string;
}

interface HighlightCardIconProps {
  children: ReactNode; // Ikon akan menjadi child
  className?: string;
}

interface HighlightCardTitleProps {
  children: ReactNode;
  className?: string;
}

interface HighlightCardDescriptionProps {
  children: ReactNode;
  className?: string;
}

// Compound Components
const Root: React.FC<HighlightCardRootProps> = ({ children, className }) => {
  return (
    <div
      className={`bg-custom-off-white rounded-lg p-4 aspect-[3/2] flex flex-col items-start gap-2 justify-start ${className}`}
    >
      {children}
    </div>
  );
};

const Icon: React.FC<HighlightCardIconProps> = ({ children, className }) => {
  return (
    <div className={`text-custom-olive-green ${className || ""}`}>
      {children}
    </div>
  );
};

const Title: React.FC<HighlightCardTitleProps> = ({ children, className }) => {
  return (
    <h2 className={`text-2xl font-normal ${className || ""}`}>{children}</h2>
  );
};

const Description: React.FC<HighlightCardDescriptionProps> = ({
  children,
  className,
}) => {
  return <p className={`text-gray-700 line-clamp-4 ${className || ""}`}>{children}</p>;
};

// HighlightCard Namespace
export const HighlightCard = {
  Root,
  Icon,
  Title,
  Description,
};

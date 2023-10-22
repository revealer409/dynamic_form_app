import React, { ReactNode } from "react";
import  './Card.css'
interface CardProps {
  header?: boolean;
  footer?: boolean;
  children: ReactNode;
  width?: string;
  height?: string;
  title?: string;
  footerContent?: ReactNode;
  classList?:string,
  bodyClass?:string
}
const Card: React.FC<CardProps> = ({
  children,
  width = "250PX",
  header,
  footer,
  title,
  footerContent,
  classList,
  bodyClass
  
}): React.JSX.Element => {
  return (
    <div className={`card ${classList}`} style={{ width: width }}>
      {header && (
        <div className="card-header">
          <p className="card-text bg-light">{title}</p>
        </div>
      )}

      <div className={`card-body ${bodyClass}`}>{children}</div>

      {footer && <div className="card-footer text-muted">{footerContent}</div>}
    </div>
  );
};
export default Card;

import React, { ReactChildren, ReactChild } from "react";
import "./styles.css";

interface AccordionItemProps {
  label: string;
  isCollapsed: boolean;
  handleClick(arg: any): void;
  children: string;
}

interface AccordionProps {
  defaultIndex: number;
  onItemClick(arg: any): void;
  children: (React.ReactNode & { type: string })[];
}

interface ItemProps {
  index: number;
  label: string;
  children: string;
}

export const AccordionItem = ({
  label,
  isCollapsed,
  handleClick,
  children
}: AccordionItemProps) => {
  return (
    <>
      <button className="accordion-button" onClick={handleClick}>
        {label}
      </button>
      <div
        className={`accordion-item ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  );
};

const Accordion = ({ defaultIndex, onItemClick, children }: AccordionProps) => {
  const [bindIndex, setBindIndex] = React.useState(defaultIndex);

  const changeItem = (itemIndex: number) => {
    if (typeof onItemClick === "function") onItemClick(itemIndex);
    if (itemIndex !== bindIndex) setBindIndex(itemIndex);
  };
  const items = children.filter((item) => item.type.name === "AccordionItem");

  return (
    <>
      {items.map(({ props }) => (
        <AccordionItem
          isCollapsed={bindIndex !== props.index}
          label={props.label}
          handleClick={() => changeItem(props.index)}
          children={props.children}
        />
      ))}
    </>
  );
};

export default Accordion;

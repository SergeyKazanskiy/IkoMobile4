import * as React from "react";
import { IBookProps, ISectionProps, ICabinetProps } from "./types";

const Cabinet = ({ sections }: ICabinetProps) => {
  return (
    <div>
      {sections.map((section) => (
        <div key={section.id}>
          <p>{section.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Cabinet;

/*
const sections = [{name:"FirstSection", books:["1.1.1", "1.1.2", "1.1.3", "1.2.1", "1.2.2"]},
				{name:"SecondSection", books:["2.1.1", "2.1.2", "2.1.3", "2.2.1"]}]
const k = 4;
let x = true;
 
const listItems = sections.map(section => 
	{
    document.write("<h2>" + section.name  + "</h2>")
    
    section.books.map((book, j) =>
    	{
        if (!(j % k)) {
          if (x) {
              document.write("<h3>ddd")
              x = false;
          }else{
              document.write("</h3>")
              document.write("<h3>ddd")
              x = true;
           }
        };
    	let test = { name: book };
    	document.write("<h5>___" + test.name  + "</h5>")
      }
    );
    document.write("</h3>")
    }
);
*/

import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import * as React from "react";

interface IMuiAcoordionProps {}

const MuiAcoordion: React.FunctionComponent<IMuiAcoordionProps> = (props) => {
  const [expanded, setExpanded] = React.useState<boolean | string>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            repudiandae ullam amet nobis quisquam eius sit deleniti molestias
            neque beatae quidem ab dignissimos rerum consequuntur, rem veritatis
            ipsum officia dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            repudiandae ullam amet nobis quisquam eius sit deleniti molestias
            neque beatae quidem ab dignissimos rerum consequuntur, rem veritatis
            ipsum officia dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            repudiandae ullam amet nobis quisquam eius sit deleniti molestias
            neque beatae quidem ab dignissimos rerum consequuntur, rem veritatis
            ipsum officia dolor.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MuiAcoordion;

import { Typography } from "@mui/material";
import * as React from "react";

interface IMuiTypographyProps {}

const MuiTypography: React.FunctionComponent<IMuiTypographyProps> = (props) => {
  return (
    <>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2" component="div" gutterBottom>
        h2 heading
      </Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4">h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore mollitia
        fugiat excepturi itaque non, dolores accusantium est exercitationem iste
        facere officia ipsum eligendi quidem ullam earum facilis ea quaerat eos.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        aliquam doloribus omnis inventore sequi illo molestiae nesciunt, velit
        soluta eaque aspernatur deserunt iusto laudantium explicabo? Libero odit
        hic eos optio.
      </Typography>
    </>
  );
};

export default MuiTypography;

import { FormControlLabel, Switch } from "@mui/material";
import * as React from "react";

interface IMuiSwitchProps {}

const MuiSwitch: React.FunctionComponent<IMuiSwitchProps> = (props) => {
  const [value, setValue] = React.useState<boolean>(false);
  const handleChange = (event: React.SyntheticEvent) => {
    setValue((event.target as any).checked);
  };
  console.log(value);

  return (
    <>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={value} onChange={handleChange} />}
      />
    </>
  );
};

export default MuiSwitch;

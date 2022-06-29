import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

interface IMuiRadioButtonProps {}

const MuiRadioButton: React.FunctionComponent<IMuiRadioButtonProps> = (
  props
) => {
  const [value, setValue] = React.useState<string>("");
  const handleChange = (event: React.SyntheticEvent) => {
    setValue((event.target as HTMLInputElement).value);
  };
  console.log(value);

  return (
    <>
      <Box>
        <FormControl>
          <FormLabel>Years of Experience</FormLabel>
          <RadioGroup
            name="job-experience-group"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default MuiRadioButton;

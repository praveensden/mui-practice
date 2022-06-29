import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

interface IMuiCheckboxButtonProps {}

const MuiCheckboxButton: React.FunctionComponent<IMuiCheckboxButtonProps> = (
  props
) => {
  const [tnc, setTnc] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string[]>([]);
  const handleTncChange = (event: React.SyntheticEvent) => {
    setTnc((event.target as HTMLInputElement).checked);
  };
  console.log({ tnc });
  const handleSkillChange = (event: React.SyntheticEvent) => {
    const index = value.indexOf((event.target as HTMLInputElement).value);
    setValue(
      index === -1
        ? [...value, (event.target as HTMLInputElement).value]
        : value.filter(
            (item) => item !== (event.target as HTMLInputElement).value
          )
    );
  };
  console.log(value);

  return (
    <>
      <Stack direction="column">
        <FormControl>
          <FormControlLabel
            onChange={handleTncChange}
            label="Accept Terms & Conditions"
            checked={tnc}
            control={<Checkbox />}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              value="HTML"
              control={
                <Checkbox
                  checked={value.includes("HTML")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="CSS"
              control={
                <Checkbox
                  checked={value.includes("CSS")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JS"
              value="JS"
              control={
                <Checkbox
                  checked={value.includes("JS")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Stack>
    </>
  );
};

export default MuiCheckboxButton;

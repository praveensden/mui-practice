import { Autocomplete, Stack, TextField } from "@mui/material";
import * as React from "react";

interface IMuiAutocompleteProps {}
type Tskill = {
  id: number;
  label: string;
};
const MuiAutocomplete: React.FunctionComponent<IMuiAutocompleteProps> = () => {
  const [value, setValue] = React.useState<string | null>(null);
  const [skill, setSkill] = React.useState<Tskill | any>(null);
  const skills = ["HTML", "CSS", "JS", "REACT", "ANGULAR", "DIE"];
  const skillsOption = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));
  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string | null
  ) => {
    setValue(newValue);
  };
  //   console.log({ value });
  console.log(skill);

  return (
    <>
      <Stack width="250px" spacing={2}>
        <Autocomplete
          freeSolo
          onChange={handleChange}
          options={skills}
          value={value}
          renderInput={(params) => <TextField {...params} label="Skills" />}
        />

        <Autocomplete
          value={skill}
          options={skillsOption}
          onChange={(e: React.SyntheticEvent, newValue: Tskill | null) =>
            setSkill(newValue)
          }
          renderInput={(params) => <TextField {...params} label="Skills" />}
        />
      </Stack>
    </>
  );
};

export default MuiAutocomplete;

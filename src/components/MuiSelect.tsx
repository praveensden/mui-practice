import { MenuItem, Select, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

interface IMuiSelectProps {}

const MuiSelect: React.FunctionComponent<IMuiSelectProps> = (props) => {
  const [value, setValue] = React.useState<string>("");
  const [countires, setCountries] = React.useState<string[]>([]);
  const [files, setFiles] = React.useState<string>("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  //   console.log(value);
  //   const handleFileChange = (event: React.SyntheticEvent) => {
  //     setFiles((event.target as any).files[0].name);
  //   };
  //   console.log(files);
  const handleSelectCountries = (event: React.SyntheticEvent) => {
    const data = (event.target as HTMLInputElement).value;
    setCountries(typeof data === "string" ? data.split(",") : data);
  };
  console.log(countires);

  return (
    <>
      <Box width="500px">
        {/* <TextField type="file" onChange={handleFileChange} /> */}
        <Stack direction="row">
          <TextField
            onChange={handleSelectChange}
            value={value}
            select
            label="Select Country"
            fullWidth
            sx={{ margin: "10px" }}
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="UK">United Kingdom</MenuItem>
            <MenuItem value="US">United States of America</MenuItem>
          </TextField>
          <TextField
            sx={{ margin: "10px" }}
            onChange={handleSelectCountries}
            value={countires}
            select
            label="Select Countries"
            fullWidth
            SelectProps={{
              multiple: true,
            }}
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="UK">United Kingdom</MenuItem>
            <MenuItem value="US">United States of America</MenuItem>
          </TextField>
        </Stack>
      </Box>
    </>
  );
};

export default MuiSelect;

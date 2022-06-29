import { InputAdornment, Stack, TextField } from "@mui/material";
import * as React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
interface IMuiTextFieldProps {}

const MuiTextField: React.FunctionComponent<IMuiTextFieldProps> = (props) => {
  const [showHidePassword, setShowHidePassword] =
    React.useState<boolean>(false);
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            label="Small Secondary"
            variant="outlined"
            size="small"
            color="secondary"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            label="Password"
            required
            variant="outlined"
            size="small"
            helperText="Dont share your password "
            color="secondary"
            type="password"
          />
          <TextField
            disabled
            label="Disabled"
            variant="outlined"
            size="small"
          />
          <TextField
            InputProps={{ readOnly: true }}
            label="ReadOnly"
            variant="outlined"
            size="small"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
          <TextField
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  style={{ cursor: "pointer" }}
                  position="end"
                  onClick={() => setShowHidePassword((s) => !s)}
                >
                  {showHidePassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default MuiTextField;

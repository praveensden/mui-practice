import { Button, Snackbar, Stack } from "@mui/material";
import * as React from "react";

interface IMuiSnackbarProps {}

const MuiSnackbar: React.FunctionComponent<IMuiSnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = (event: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickAway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Stack width="90px" spacing={4}>
        <Button variant="contained" color="error" disableElevation>
          Submit
        </Button>
        <Snackbar
          open={open}
          //   onClose={(e) => handleClose(event, reason)}
          message="data submitted successfully!"
          autoHideDuration={2000}
        />
      </Stack>
    </>
  );
};

export default MuiSnackbar;

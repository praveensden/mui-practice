import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import * as React from "react";

interface IMuiAlertProps {}

const MuiAlert: React.FunctionComponent<IMuiAlertProps> = (props) => {
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Alert severity="error">This is an error message</Alert>
          <Alert severity="warning">This is an warning message</Alert>
          <Alert severity="info">This is an info message</Alert>
          <Alert severity="success">This is an success message</Alert>
        </Stack>
        <Stack spacing={2}>
          <Alert variant="outlined" severity="error">
            This is an error message
          </Alert>
          <Alert variant="outlined" severity="warning">
            This is an warning message
          </Alert>
          <Alert variant="outlined" severity="info">
            This is an info message
          </Alert>
          <Alert variant="outlined" severity="success">
            This is an success message
          </Alert>
        </Stack>
        <Stack spacing={2}>
          <Alert
            variant="filled"
            severity="error"
            onClose={() => alert("closed")}
          >
            <AlertTitle sx={{ textAlign: "left" }}>Error</AlertTitle>
            This is an error message
          </Alert>
          <Alert variant="filled" severity="warning">
            <AlertTitle sx={{ textAlign: "left" }}>Warning</AlertTitle>
            This is an warning message
          </Alert>
          <Alert variant="filled" severity="info">
            <AlertTitle sx={{ textAlign: "left" }}>Info</AlertTitle>
            This is an info message
          </Alert>
          <Alert
            variant="filled"
            severity="success"
            action={<Button color="inherit">Undo</Button>}
          >
            <AlertTitle sx={{ textAlign: "left" }}>Success</AlertTitle>
            This is an success message
          </Alert>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiAlert;

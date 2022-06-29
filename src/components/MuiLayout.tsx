import { Box, Grid, Stack } from "@mui/material";
import * as React from "react";

interface IMuiLayoutProps {}

const MuiLayout: React.FunctionComponent<IMuiLayoutProps> = (props) => {
  return (
    <>
      <Stack sx={{ border: "1px solid #000" }} p={2}>
        <Box
          sx={{
            background: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            height: "100px",
            width: "100px",
            transition: "all 0.5s ease",
            "&:hover": {
              transform: "translateX(420px)",
              opacity: "0",
              background: "blue",
            },
          }}
        >
          Wello Horld
        </Box>
      </Stack>
      <Grid container my={4}>
        <Grid item xs rowSpacing={2} columnSpacing={4}>
          <Box bgcolor="orangered" m={2} p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid xs item>
          <Box bgcolor="orangered" m={2} p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid xs item>
          <Box bgcolor="orangered" m={2} p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid xs item>
          <Box bgcolor="orangered" m={2} p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiLayout;

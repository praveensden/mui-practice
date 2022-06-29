import { Avatar, Chip, Stack } from "@mui/material";
import * as React from "react";
import FaceIcon from "@mui/icons-material/Face";

interface IMuiChipProps {}

const MuiChip: React.FunctionComponent<IMuiChipProps> = (props) => {
  const [chips, setChips] = React.useState(["chip1", "chip2", "chip3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Chip label="chip" color="secondary" size="small" icon={<FaceIcon />} />
        <Chip
          label="chip"
          color="secondary"
          size="small"
          variant="outlined"
          avatar={<Avatar>P</Avatar>}
        />
        <Chip
          color="success"
          variant="outlined"
          label="click"
          size="small"
          onClick={() => alert("hello")}
        />
        <Chip
          color="success"
          variant="outlined"
          label="click"
          size="small"
          onClick={() => alert("hello")}
        />
        <Chip
          color="error"
          label="Delete"
          size="small"
          onClick={() => alert("hello")}
          onDelete={() => alert("delete handler called")}
        />
        {chips.map((chip) => {
          return <Chip label={`${chip}`} onDelete={() => handleDelete(chip)} />;
        })}
      </Stack>
    </>
  );
};

export default MuiChip;

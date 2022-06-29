import { FavoriteBorder } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Rating, Stack } from "@mui/material";
import * as React from "react";

interface IMuiRatingProps {}

const MuiRating: React.FunctionComponent<IMuiRatingProps> = (props) => {
  const [value, setValue] = React.useState<number | null>(null);
  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  console.log(value);

  return (
    <>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          icon={<FavoriteIcon color="error" />}
          emptyIcon={<FavoriteBorder />}
        />
      </Stack>
    </>
  );
};

export default MuiRating;

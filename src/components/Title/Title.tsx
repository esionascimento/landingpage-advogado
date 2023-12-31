import { Typography } from "@mui/material";

type Props = {
  children: string;
};

export const Title = ({ children }: Props) => {
  return (
    <Typography variant="h4" textAlign={"center"} marginTop={3} marginBottom={2}>
      {children}
    </Typography>
  );
};

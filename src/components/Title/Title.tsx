import { Typography, TypographyProps } from "@mui/material";

type Props = {
  children: string;
} & TypographyProps;

export const Title = ({ children, ...props }: Props) => {
  return (
    <Typography
      variant="h4"
      textAlign={"center"}
      marginTop={3}
      marginBottom={2}
      {...props}
    >
      {children}
    </Typography>
  );
};

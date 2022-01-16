import { Button } from '@mui/material'
import { styled } from "@mui/material/styles";

export default styled(Button)({
  boxShadow: "none",
  width: '100%',
  height: '100%',
  textTransform: "none",
  fontSize: 16,
  lineHeight: 1.5,
  color: 'black',
  padding: '10px 0',
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&:active": {
    boxShadow: "none",
  }
});
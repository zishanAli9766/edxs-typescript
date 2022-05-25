
import {useStyles} from './HeaderStyle'
import { Grid, Typography } from "@mui/material";

function Header(props: any) {

  const classes = useStyles()

  
  return (
    <Grid className={classes.header}>
      <Grid>
        {props.history &&
          props.history?.map((item: any) => (
            <Typography  className={classes.TypoTxt}>{item}</Typography>
          ))}
      </Grid>
      <br />
      <Grid>
        <Typography className={classes.TypoTxt}>{props.expression}</Typography>
      </Grid>
      <Typography  className={classes.headerResult}>
        {props.result}
      </Typography>
    </Grid>
  );
}

export default Header;

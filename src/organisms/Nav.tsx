import { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { AuthContext } from "../Auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function ButtonAppBar() {
  const { currentUser } = useContext(AuthContext);
  const classes = useStyles();
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={async () => {
              await history.push("/top");
            }}
          >
            Top
          </Typography>
          {currentUser ? (
            <Typography
              variant="h6"
              className={classes.title}
              onClick={async () => {
                await history.push("/Private");
              }}
            >
              Private
            </Typography>
          ) : (
            <></>
          )}

          {currentUser ? (
            <Button
              color="inherit"
              onClick={async () => {
                await logout();
                history.push("/login");
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={async () => {
                history.push("/login");
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

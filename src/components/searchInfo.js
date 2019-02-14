import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Repostries from "./repo.js";
import CardActions from "@material-ui/core/CardActions";

const styles = theme => ({
  card: {
    height: "100%",
    width: theme.spacing.unit * 32,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 12,
    marginRight: theme.spacing.unit * 7,
    boxShadow: "5px 5px 15px 15px #ded5d5",
    position: "static",
    // display: 'flex',
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
 
  },
  Button: {
    backgroundColor: "#d5d5d5",
    fontWeight: "bold",
    border: "1px solid transperent",
    width: theme.spacing.unit * 14,
    marginLeft: theme.spacing.unit * 2
  },
  button1: {
    backgroundColor: "blue",
    width: theme.spacing.unit * 12,
    height: theme.spacing.unit * 7
  },
  button2: {
    backgroundColor: "secondry",
    width: theme.spacing.unit * 12,
    height: theme.spacing.unit * 7
  },
  button3: {
    backgroundColor: "grey",
    width: theme.spacing.unit * 12
  },
  button4: {
    backgroundColor: "black",
    width: theme.spacing.unit * 12
  },
  text: {
    fontSize: theme.spacing.unit * 3
  },
  textName: {
    fontSize: theme.spacing.unit * 3
  },
  image: {
    height: theme.spacing.unit * 30,
    width: theme.spacing.unit * 25
  },
  progress: {
    marginLeft: theme.spacing.unit * 60,
    fontSize: theme.spacing.unit * 3
  }
});

class SearchInfo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes, userDetails } = this.props;
    if (userDetails == "") {
      return <p className={classes.progress}>Please Enter Search String</p>;
    }
    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent>
            <img src={userDetails.avatar_url} className={classes.image} />
            <CardActions>
              <a href={userDetails.html_url}>
                <Button size="small" className={classes.Button}>
                  View profile
                </Button>
              </a>
            </CardActions>
            <Typography className={classes.textName}>
              {userDetails.login}
            </Typography>
            <Typography className={classes.text}>{userDetails.name}</Typography>
            <hr />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z" />
            </svg>
            <span className="fa fa-building-o">{userDetails.company}</span>
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm4 8h-3v3h-2v-3H8V8h3V5h2v3h3v2z" />
            </svg>
            <span className="fa fa-map-marker">
              {userDetails.location}
              <br />
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <a className="fa fa-envelope" href="{userDetails.email}">
              {userDetails.email}
            </a>
            <hr />
              <Button
                variant="contained"
                color="secondary"
                className={classes.button1}
              >
                {userDetails.public_repos} Public Repo
              </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button2}
            >
              {userDetails.public_gists} Public Gists
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button3}
            >
              {userDetails.followers} Followers
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button4}
            >
              {userDetails.following} Following
            </Button>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

SearchInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchInfo);

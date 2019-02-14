import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
  card: {
    marginRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    boxShadow: "5px 5px 5px 5px #ded5d5",
    backgroundColor: "#e0d8d8",
    '&:hover': {
      backgroundColor: "white",
    },
    width: theme.spacing.unit * 75,
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  title: {
    marginLeft: theme.spacing.unit * 7,
    marginTop: theme.spacing.unit * 3,
    fontSize: theme.spacing.unit * 2
  },
  url: {
    fontSize: "11px",
    listStyle: "none",
    color: "#545252",
    fontWeight: "bold",
    marginBottom: theme.spacing.unit * 3
  },
  button: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 3
  },
  date: {
    color: "grey",
    fontStyle: "italic",
    float: "right",
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 1
  },
  language: {
    color: "red",
    fontWeight: "bold"
  },
  heading: {
    color: "#4078c0",
    fontWeight: "bold"
  }
});

class Repostries extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes, userRepoInfo } = this.props;
    // console.log(userRepoInfo);
    return (
      <div>
          {userRepoInfo.map((value,key) => (
            <Card className={classes.card}>
              <CardContent>
                <a href={value.html_url}>
                  <Typography className={classes.heading}>
                    {value.name}
                  </Typography>

                  <Typography className={classes.url}>
                    {value.full_name}
                  </Typography>
                </a>
                <Typography className={classes.language}>
                  {value.language}
                </Typography>
                <span className={classes.date}>
                  Updated on {value.updated_at}
                </span>
              </CardContent>
            </Card>
          ))}
      </div>
    );
  }
}

Repostries.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Repostries);

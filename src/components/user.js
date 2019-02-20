import axios from "axios";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchInfo from "./searchInfo.js";
import Repostries from "./repo.js";

const styles = theme => ({
  divRoot: {
    display: "flex"
  },
  root: {
    width: "100%",
    backgroundColor: "#24292e"
  },

  progress: {
    margin: theme.spacing.unit * 2
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 30,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: 250,
      "&:focus": {
        width: 250
      }
    }
  },
  linkedin: {
    marginLeft: theme.spacing.unit * 15,
    color: "White",
    textDecoration: "none",
    transition: theme.transitions.create("display"),
    [theme.breakpoints.up("sm")]: {
      display: 'block',
      "&:focus": {
        display: 'none'
      }
    }
  }
});

const CLIENT_ID = "4ddf9cf2655d5a56cc61";
const CLIENT_SECRET = "695a1d2b6e44672200c8f31a01530f10d9e6206c";
const USER_URL =
  "https://api.github.com/users/{userName}?client_id=" +
  CLIENT_ID +
  "&client_secret=" +
  CLIENT_SECRET;
const REPO_URL =
  "https://api.github.com/users/{userName}/repos?client_id=" +
  CLIENT_ID +
  "&client_secret=" +
  CLIENT_SECRET;

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_search: "",
      userDetails: [],
      userRepoInfo: [],
      displayModal: false,
      userSuggetionsInfo: [],
      display: "none"
    };
  }

  getUserInputData = async () => {
    try {
      let txtValue = this.search.value;
      let userUrl = USER_URL.replace("{userName}", txtValue);
      let repoUrl = REPO_URL.replace("{userName}", txtValue);
      let response = await axios.get(userUrl);
      let repoUrlResponse = await axios.get(repoUrl);
      console.log("user profile", response.data);
      console.log("user repo", repoUrlResponse.data);
      if (response != "") {
        const githubUserInfo = response.data;
        const githubUserRepo = repoUrlResponse.data;
        this.setState({
          userDetails: githubUserInfo,
          userRepoInfo: githubUserRepo,
          user_search: ""
        });
      } else {
        alert("please check your internet connection!");
      }
    } catch (error) {
      alert("This user does not exist on github");
    }
  };

  getInput = async () => {
    this.setState({ user_search: this.search.value });
    if (this.search.value != "") {
      let txt = this.search.value;
      let suggestion_url = SUGGESTIONS_URL.replace("{userName}", txt);
      let suggestionUrlResponse = await axios.get(suggestion_url);
      let filterResponse = suggestionUrlResponse.data.items
        .slice(0, 5)
        .filter(value => {
          return value;
        });
      this.setState({
        userSuggetionsInfo: filterResponse
      });
    }
    if (this.search.value != "") {
      console.log(this.search.value);
      this.setState({
        display: "block"
      });
    }
  };

  handleKeyPress = event => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      this.inputHandler();
    }
  };

  inputHandler = () => {
    this.setState({ user_search: this.search.value });
    if (this.search.value == "") {
      alert("please enter a username!!!");
    } else {
      this.getUserInputData();
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Github Search Engine...
            </Typography>
            <div />
            <div />
            <input
              placeholder="Enter a Github Uername"
              ref={input => (this.search = input)}
              className={classes.inputRoot}
              className={classes.inputInput}
              onKeyPress={this.handleKeyPress}
            />
            <Button variant="contained" onClick={this.inputHandler}>
              search
            </Button>
            <a href="https://linkedin.com/in/kanika-shrivastav-a090ba158/" target="_blank">
              <Typography
                variant="h6"
                color="inherit"
                className={classes.linkedin}
              >
                LinkedIn
              </Typography>
            </a>
            <a href="https://pankajladhar.github.io/GHSE/" target="_blank">
              <Typography
                variant="h6"
                color="inherit"
                className={classes.linkedin}
              >
                GitHub
              </Typography>
            </a>
          </Toolbar>
        </AppBar>
        <div className={classes.divRoot}>
          <SearchInfo userDetails={this.state.userDetails} />
          <Repostries userRepoInfo={this.state.userRepoInfo} />
        </div>
      </div>
    );
  }
}

User.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(User);

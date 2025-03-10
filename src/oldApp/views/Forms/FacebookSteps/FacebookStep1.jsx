import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import { withRouter } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import extendedFormsStyle from "assets/jss/material-dashboard-pro-react/views/extendedFormsStyle.jsx";
import { withLoader } from "components/ConnectedLoadingComponent/ConnectedLoadingComponent";
import Button from "components/CustomButtons/Button";
import { FacebookAuthsQuery } from "queries/auth/facebook.gql";

class FacebookStep1 extends React.Component {
  onChange = async e => {
    const { selectAuthStore } = this.props;
    selectAuthStore(e.target.value);
  };

  render() {
    const { data, classes, authStore, history, match } = this.props;

    const menuItems = _.map(
      _.get(data, "facebookAuths.edges", []),
      ({ node }) => (
        <MenuItem key={node.id} value={node.id}>
          {`Facebook Auth for ${node.userAuth.user.email} (created by ${node.userAuth.user.email} for ${node.org.name})`}
        </MenuItem>
      )
    );

    return (
      <Grid container spacing={24} justify="space-between" alignItems="center">
        <Grid item xs={9}>
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel
              htmlFor="facebookAuthToken"
              className={classes.selectLabel}
            >
              Select Your Facebook Auth Credentials
            </InputLabel>
            <Select
              value={authStore || ""}
              inputProps={{
                name: "facebookAuthToken",
                id: "facebookAuthToken"
              }}
              onChange={this.onChange}
            >
              {menuItems}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth className={classes.selectFormControl}>
            <Button
              color="google"
              disabled={_.isNull(authStore)}
              onClick={() => history.push(`${match.params.type}/step2`)}
            >
              Next
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

FacebookStep1.propTypes = {
  data: PropTypes.object,
  classes: PropTypes.object,
  history: PropTypes.object,
  authStore: PropTypes.string,
  selectAuthStore: PropTypes.func,
  match: PropTypes.object
};

export default withStyles(extendedFormsStyle)(
  compose(graphql(FacebookAuthsQuery))(withLoader(withRouter(FacebookStep1)))
);

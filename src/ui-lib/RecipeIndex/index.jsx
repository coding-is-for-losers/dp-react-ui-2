import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Card,
  CardHeader,
  CardActions,
  CardContent
} from "@material-ui/core";
import CTAButton from "../CTAButton";
import Theme from "../theme";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 300,
    padding: theme.spacing(0),
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0),
      padding: theme.spacing(0)
    }
  },
  actions: {
    justifyContent: "space-evenly",
    padding: theme.spacing(2)
  },
  header: {
    padding: theme.spacing(2, 2, 0)
  },
  content: {
    padding: theme.spacing(2)
  },
  button: {
    textAlign: "center",
    width: 150,
    height: 50
  }
}));

const RecipeIndex = props => {
  console.log("in recipe ", props);
  const { name, pricePerMonth, authenticated, id, descriptionLong } = props;
  const classes = useStyles(Theme);
  return (
    <Card className={classes.card}>
      <CardHeader
        title={name}
        subheader={`$${pricePerMonth}`}
        className={classes.header}
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {descriptionLong}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <CTAButton
          name={"Learn More"}
          link={`/recipes/detail/${id}`}
          color={"grey"}
          mini
        />
        <CTAButton
          name={"Get Started"}
          link={`/sites/setup`}
          color={"primary"}
          mini
        />
      </CardActions>
    </Card>
  );
};

RecipeIndex.propTypes = {
  name: PropTypes.string.isRequired,
  descriptionLong: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pricePerMonth: PropTypes.number.isRequired,
  authenticated: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      auth: PropTypes.bool.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};

export default RecipeIndex;

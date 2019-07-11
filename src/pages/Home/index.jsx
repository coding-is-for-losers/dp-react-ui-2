import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import { Hero, Stepper, RecipeDetail, CTA } from "ui-lib";
import Page from "layouts/Page";
import { hero, stepper, recipeDetail, cta } from "./copy";

const useStyles = makeStyles(() => ({
  stepperContainer: {
    maxWidth: 300,
    margin: "0 auto"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Hero {...hero} />
      <div className={classes.stepperContainer}>
        <Stepper {...stepper} />
      </div>
      <RecipeDetail {...recipeDetail} />
      <RecipeDetail {...recipeDetail} />
      <CTA {...cta} />
    </Fragment>
  );
};

Home.propTypes = {};

export default Page(Home);

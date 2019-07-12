import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import { Hero, RecipeIndex, mainTheme } from "ui-lib";
import { graphql } from "react-apollo";
import { RecipesQuery } from "queries/recipes.gql";
import Page from "layouts/Page";
import { hero, recipeIndex } from "./copy";

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px 20px",
    padding: theme.spacing(4, 10),
    justifyItems: "center",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2)
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 0),
      gridTemplateColumns: "repeat(2, 1fr)"
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)"
    }
  }
}));

const RecipeIndexes = () => {
  const classes = useStyles(mainTheme);
  return (
    <Fragment>
      <Hero {...hero} />
      <div className={classes.cardContainer}>
        <RecipeIndex {...recipeIndex} />
        <RecipeIndex {...recipeIndex} />
        <RecipeIndex {...recipeIndex} />
        <RecipeIndex {...recipeIndex} />
      </div>
    </Fragment>
  );
};

RecipeIndexes.propTypes = {};

const options = {
  authenticated: true
};

export default Page(graphql(RecipesQuery)(RecipeIndexes), options);

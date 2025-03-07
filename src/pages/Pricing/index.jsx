import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import { PricingCard, mainTheme } from "ui-lib";

import Page from "layouts/Page";
import { pricing } from "./copy";
const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "center",
    margin: theme.spacing(4, 0)
  }
}));

const PricingPage = () => {
  const classes = useStyles(mainTheme);
  return (
    <Fragment>
      <div className={classes.cardContainer}>
        <PricingCard {...pricing.a} />
        <PricingCard {...pricing.b} />
        <PricingCard {...pricing.c} />
      </div>
    </Fragment>
  );
};

PricingPage.propTypes = {};

export default Page(PricingPage);

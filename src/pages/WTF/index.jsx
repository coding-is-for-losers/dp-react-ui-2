import React, { Fragment } from "react";
import { Hero, Stepper, CTA } from "ui-lib";

import Page from "layouts/Page";
import { hero, stepper, cta } from "./copy";
const Home = () => {
  return (
    <Fragment>
      <Hero {...hero} />
      <Stepper {...stepper} />
      <CTA {...cta} />
    </Fragment>
  );
};

Home.propTypes = {};

export default Page(Home);

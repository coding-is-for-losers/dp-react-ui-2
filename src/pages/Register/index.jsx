import React, { useState, useEffect } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { useMutation } from "react-apollo-hooks";
import { LinearProgress } from "@material-ui/core";
import { Wizard, Modal } from "ui-lib";
import Page from "layouts/Page";
import RegisterForm from "components/RegisterForm";
import { RegisterUserMutation } from "queries/users.gql";

function Register({ history }) {
  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [agreeTOS, setAgreeTOS] = useState(false);
  const changeHandler = {
    email: setEmail,
    password: setPassword,
    firstName: setFirstName,
    lastName: setLastName,
    orgName: setOrgName,
    agreeTOS: setAgreeTOS
  };
  const handleChange = field => e => changeHandler[field](e.target.value);

  const [registerUser, { mutationLoading, data, error }] = useMutation(
    RegisterUserMutation,
    {
      variables: { email, firstName, lastName, orgName, password }
    }
  );

  useEffect(() => {
    if (mutationLoading) {
      setLoading(true);
    }
    if (error) {
      setAlert({
        type: "createError",
        message: `There was an error creating your user: ${error}`
      });
    }
    if (!_.isEmpty(data)) {
      const { ok, token } = data;
      if (!ok) {
        setAlert({
          type: "createError",
          message: `There was an error creating your user: ${error}`
        });
      } else {
        localStorage.setItem("token", token);
        setLoading(false);
        setAlert({
          alert: {
            type: "createSuccess",
            message: "Successfully created your user. Welcome!"
          }
        });
      }
    }
  });

  const onComplete = async () => {
    setLoading(true);
    await registerUser();
    history.push("/recipes");
  };

  if (!_.isEmpty(alert)) {
    // we weren't handling alerts before so this will do for now.
    return <Modal message={alert.message} handleClose={() => setAlert({})} />;
  }

  if (loading) {
    // todo: make prettier
    return <LinearProgress />;
  }

  return (
    <Wizard
      completeName="Get Started"
      onComplete={onComplete}
      steps={[
        {
          name: "Register",
          component: (
            <RegisterForm
              handleChange={handleChange}
              email={email}
              password={password}
              firstName={firstName}
              lastName={lastName}
              orgName={orgName}
              agreeTOS={agreeTOS}
            />
          )
        }
      ]}
    />
  );
}

Register.propTypes = {
  history: PropTypes.object
};

export default Page(Register);

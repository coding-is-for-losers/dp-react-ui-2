import React, { Component, Fragment } from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import PropTypes from "prop-types";
import { withApollo } from "react-apollo";
import { Wizard } from "ui-lib";
import Page from "layouts/Page";
import RegisterForm from "components/RegisterForm";
import { OrgQuery, UserQuery, RegisterUserMutation } from "queries/users.gql";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      organization: "",
      agreeTOS: false
    };
  }

  onSubmit = async () => {
    const { email, firstName, lastName, orgName, password } = this.state;
    const { client, history } = this.props;
    this.setState({ loading: true });
    try {
      const {
        error,
        data: {
          registerUser: { ok, token }
        }
      } = await client.mutate({
        mutation: RegisterUserMutation,
        variables: {
          email: email,
          firstName: firstName,
          lastName: lastName,
          orgName: orgName,
          password: password
        }
      });
      if (!ok || error) {
        console.log("the error is ", error);
        this.setState({
          loading: false,
          alert: {
            type: "createError",
            message: `There was an error creating your user: ${error}`
          }
        });
      } else {
        localStorage.setItem("token", token);
        this.setState(
          {
            loading: false,
            alert: {
              type: "createSuccess",
              message: "Successfully created your user. Welcome!"
            }
          },
          () => {
            history.push("/recipes");
          }
        );
      }
    } catch (error) {
      this.setState({
        loading: false,
        alert: {
          type: "createError",
          message: `There was an error creating registering your user: ${error}`
        }
      });
    }
  };

  handleChange = e => {
    e.preventDefault();
    const {
      target: { name, value }
    } = e;

    this.setState({
      [name]: name === "agreeTOS" ? value === "yes" : value
    });
  };

  render() {
    const {
      state: { email, password, firstName, lastName, organization, agreeTOS }
    } = this;
    console.log(this.props);
    return (
      <Fragment>
        <Wizard
          completeName="Get Started"
          onComplete={this.onSubmit}
          steps={[
            {
              name: "Register",
              component: (
                <RegisterForm
                  handleChange={this.handleChange}
                  email={email}
                  password={password}
                  firstName={firstName}
                  lastName={lastName}
                  organization={organization}
                  agreeTOS={agreeTOS}
                />
              )
            }
          ]}
        />
      </Fragment>
    );
  }
}

Register.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  client: PropTypes.object.isRequired
};

export default Page(withApollo(Register));

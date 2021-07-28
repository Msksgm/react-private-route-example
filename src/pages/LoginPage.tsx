import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { Fragment, FC, useContext, useEffect } from "react";
import { AuthContext } from "../lib/Auth";
import { useHistory } from "react-router-dom";

import {
  Button,
  Container,
  FormControl,
  Grid,
  LinearProgress,
} from "@material-ui/core";

const LoginPage: FC = (props: any) => {
  const { currentUser, login } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    currentUser && props.history.push("/top");
  }, [currentUser, props.history]);

  if (!currentUser) {
    return (
      <Fragment>
        <Container>
          <Grid container>
            <Grid item md={4}></Grid>
            <Grid item md={4}>
              <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={async (value) => {
                  try {
                    await login(value.username, value.password);
                    props.history.push("/top");
                  } catch (error) {
                    alert(error.message);
                  }
                }}
                render={({ submitForm, isSubmitting, isValid }) => (
                  <Form>
                    {isSubmitting && <LinearProgress />}
                    <FormControl margin="normal" fullWidth>
                      <Field
                        style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                        name="username"
                        label="username"
                        fullWidth
                        variant="outlined"
                        component={TextField}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <Field
                        style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        type="password"
                        component={TextField}
                      />
                    </FormControl>
                    <FormControl fullWidth>
                      <Button
                        fullWidth
                        onClick={submitForm}
                        style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
                        type="submit"
                        disabled={!isValid || isSubmitting}
                      >
                        Log in
                      </Button>
                    </FormControl>
                    <FormControl fullWidth>
                      <Button
                        color="inherit"
                        onClick={() => {
                          history.push("/top");
                        }}
                      >
                        Top(not login)
                      </Button>
                    </FormControl>
                  </Form>
                )}
              />
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
  return <></>;
};

export default LoginPage;

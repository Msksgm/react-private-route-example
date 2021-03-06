import { FC, useContext } from "react";
import Container from "@material-ui/core/Container";
import { AuthContext } from "../lib/Auth";

const TopPage: FC = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Container maxWidth="sm">
      <>
        {currentUser ? (
          <h1>you are {currentUser.userName}</h1>
        ) : (
          <h1>you are not Login</h1>
        )}
      </>
    </Container>
  );
};

export default TopPage;

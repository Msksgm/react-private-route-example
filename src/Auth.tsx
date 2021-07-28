import { createContext, useState, useEffect } from "react";

type CurrentUser = {
  userName: string | null | undefined;
};

type AuthMethods = {
  login(username: string, password: string): void;
  logout(): void;
};

type LoginStatus = {
  loading: boolean;
};

type Context = { currentUser: CurrentUser | null | undefined } & AuthMethods &
  LoginStatus;

const AuthContext = createContext<Context>({
  currentUser: undefined,
  login(username: string, password: string): void {
    throw Error("Not Implemented!");
  },
  logout(): void {
    throw Error("Not Implemented!");
  },
  loading: false,
});

const AuthProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(true);

  const login = async (username: string, password: string) => {
    // const { data } = await axios.post(
    //   `${process.env.REACT_APP_API_URL}/login`,
    //   {
    //     username: username,
    //     password: password,
    //   }
    // );
    if (username === "hoge@xxxx.com" && password === "hoge") {
      setCurrentUser({ userName: username });
      localStorage.setItem("token", username);
      setLoading(false);
    } else {
      throw Error("password または usernameが違います");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setCurrentUser(undefined);
  };

  const isSignedIn = async () => {
    if (localStorage.getItem("token")) {
      try {
        // const { data } = await axios.get(
        //   `${process.env.REACT_APP_API_URL}/user/me`
        // );
        setCurrentUser({ userName: localStorage.getItem("token") });
      } catch (err) {
        await setCurrentUser(undefined);
        localStorage.removeItem("token");
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    isSignedIn();
  }, [setCurrentUser]);

  return (
    <>
      <AuthContext.Provider
        value={{
          currentUser: currentUser,
          login: login,
          logout: logout,
          loading: loading,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthProvider };

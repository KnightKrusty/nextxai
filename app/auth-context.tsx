"use client";
import * as React from "react";

enum AuthStatus {
  unauthenticated = "unauthenticated",
  authenticated = "authenticated",
  autherror = "autherror",
}

type User = {
  email: string;
  username: string;
  token: string;
};

type Action =
  | { type: AuthStatus.authenticated; payload: User }
  | { type: AuthStatus.unauthenticated }
  | { type: AuthStatus.autherror };

type Dispatch = (action: Action) => void;
type State = {
  status: AuthStatus;
  user_details?: User;
};

const AuthStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function authReducer(state: State, action: Action) {
  switch (action.type) {
    case AuthStatus.unauthenticated: {
      return { status: AuthStatus.unauthenticated };
    }
    case AuthStatus.authenticated: {
      document.cookie = `token=${action.payload.token}`;
      return { status: AuthStatus.authenticated, user_details: action.payload };
    }
    case AuthStatus.autherror: {
      return { status: AuthStatus.autherror };
    }
    default: {
      return { status: AuthStatus.unauthenticated };
    }
  }
}

function AuthProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = React.useReducer(authReducer, {
    status: AuthStatus.unauthenticated,
  });
  const value = { state, dispatch };

  React.useEffect(() => {
    const userdetails = localStorage.getItem("userdetails");

    if (userdetails) {
      const userdetail: User = JSON.parse(userdetails);
      const type = { type: AuthStatus.authenticated, payload: userdetail };
      dispatch(type);
    }
  }, []);

  return <AuthStateContext.Provider value={value}>{children}</AuthStateContext.Provider>;
}

function useAuth() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth, AuthStatus };

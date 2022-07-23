import React from "react";
import { AuthenticatedUserProvider } from "./src/components/AuthContext";
import RootNavigator from "./Navigation";

const App = () => {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
};

export default App;

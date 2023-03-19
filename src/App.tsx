import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import { CSSProperties } from "react";
const App = () => {
  return (
    <div style={styles.root}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default App;
const styles: Record<"root" | "main", CSSProperties> = {
  root: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
  },
  main: {
    display: "flex",
    justifyContent: "center",

    padding: "80px 0",
  },
};

import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { Layout } from "./components/layout/Layout";
import { PostList } from "./components/post/PostList";
import { NotificationContainer } from "./components/notifications/notification.container.tsx";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <NotificationContainer />
        <PostList />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

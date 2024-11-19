import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layoutBackground}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Posts App</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {children}
      </Container>
    </div>
  );
};

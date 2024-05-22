import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Grid container alignItems="stretch" sx={{ minHeight: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ backgroundColor: "primary.main", py: 10, px: 5 }}
      >
        <Image src={"/logo.png"} alt="Growing Good" width={75} height={75} />
        <Typography variant="h4" component="h1" sx={{ mb: 2, mt: 4 }}>
          Front-End Developer Assessment
        </Typography>
        <Typography variant="body1" paragraph>
          This Assessment will evaluate your ability to create a dynamic and
          interactive application using React & NextJS. You will build a simple
          User List application that allows you to add, update, and delete
          users.
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
          Guidelines
        </Typography>

        <Typography variant="body1" paragraph>
          You are allowed to look at documentation, but ideally, you should try
          to solve the problems without external help to demonstrate your
          current knowledge and skills.
        </Typography>

        <Typography variant="body1" paragraph>
          If anything is not clear during the assessment or you have any
          questions, please feel free to ask.
        </Typography>

        <Typography variant="body1" paragraph>
          You will be starting from the <code>src/app/user-list/page</code>{" "}
          file. The assessment is broken down into multiple exercises. Each
          exercise will have a set of instructions to enhance your User List
          application.
        </Typography>

        <Typography variant="body1" paragraph>
          MUI is provided as a UI library to help you build the application. You
          do not have to use it.
        </Typography>

        <Typography variant="body1" paragraph sx={{ mb: 6 }}>
          When you are ready click the button below to start the assessment.
        </Typography>
        <Link href="/user-list">
          <Button variant="outlined" color="secondary">
            Lets Start!
          </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}></Grid>
    </Grid>
  );
}

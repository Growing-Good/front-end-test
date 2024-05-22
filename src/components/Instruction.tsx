"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Instruction = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const localStorageStep = localStorage.getItem("step");
    if (localStorageStep) {
      setStep(parseInt(localStorageStep));
    }
  }, []);

  const handleClick = (value: number) => {
    setStep((prev) => prev + value);
    localStorage.setItem("step", (step + value).toString());
  };

  const activeInstructions = instructions[step - 1];

  if (!activeInstructions) {
    return (
      <Image src={"/logo.png"} alt="Growing Good" width={75} height={75} />
    );
  }

  return (
    <Box>
      <Image src={"/logo.png"} alt="Growing Good" width={75} height={75} />
      <Typography variant="h5" sx={{ mt: 4 }}>
        Exercise {step}
      </Typography>
      <Stack spacing={1} sx={{ mt: 3 }}>
        <Typography variant="h4">{activeInstructions.title}</Typography>
        <Typography variant="h6">
          Objective: {activeInstructions.objective}
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {activeInstructions.result}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1} sx={{ pt: 4 }}>
        <Button
          color="secondary"
          variant="outlined"
          disabled={step === 1}
          startIcon={<NavigateBefore />}
          onClick={() => handleClick(-1)}
        >
          Back
        </Button>

        <Button
          color="secondary"
          variant="outlined"
          endIcon={<NavigateNext />}
          disabled={step === instructions.length}
          onClick={() => handleClick(1)}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

const instructions = [
  {
    title: "User List Component",
    objective:
      "Create a React component that displays a list of users and their ages in alphabetical order.",
    result: `
     - Locate the users.ts file in the src/data/ directory.
     - Create a new component where you will display the list of users.
     - Display the list of users in alphabetical order.
    `,
  },
  {
    title: "Add New Users",
    objective:
      "Enhance the existing user list to include the functionality for adding new users and their age.",
    result: `
      - Validate the input to ensure both name and age are provided.
      - Ensure the list remains sorted alphabetically after adding a new user.
      - Clear the input fields after a new user is added.
    `,
  },
  {
    title: "Delete User",
    objective:
      "Extend the functionality of the user list component to allow users to delete a user from the list.",
    result: `
      - Add a delete button or icon next to each user in the list.
      - Implement a function to handle the deletion of a user when the delete button is clicked.
    `,
  },
  {
    title: "Mark User as Active",
    objective:
      "Enhance the user list component to include a toggle button for marking users as active.",
    result: `
      - Add a toggle button or checkbox next to each user in the list.
      - Implement a function to handle the toggling of a user's active status when the toggle button is clicked.
    `,
  },
  {
    title: "Completion",
    objective:
      "Congratulations on completing all the exercises! Thank you for your participation and hard work.",
    result: `
      - Please create a new branch using your own name as the branch name. For example, if your name is John Doe, you can name the branch "john-doe".
      - Commit all your changes to the new branch you've created.
      - Push the branch to the remote repository.

      Thank you again for your participation! If you have any questions or need further assistance, feel free to reach out.
    `,
  },
];

import { Grid } from "@mui/material";
import { Instruction } from "@/components/Instruction";

export default function InstructionsLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <Grid container alignItems="stretch" sx={{ minHeight: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{ backgroundColor: "primary.main", py: 10, px: 5 }}
      >
        <Instruction />
      </Grid>
      <Grid item xs={12} sm={8} sx={{ py: 10, px: 5 }}>
        {props.children}
      </Grid>
    </Grid>
  );
}

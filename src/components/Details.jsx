import React from "react";
import { useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function Details() {
  const location = useLocation();
  const recipe = location.state?.recipe;
  console.log(recipe, `recipe`);

  return (
    <div>
      <Grid2 container spacing={3}>
        <Grid2 style={{ margin: "10px" }} xs={12}>
          <img src={recipe.strMealThumb}></img>
        </Grid2>

        <Grid2 style={{ margin: "10px" }} xs={12}>
          <p>{recipe.strInstructions}</p>
        </Grid2>
        <Grid2 style={{ margin: "10px" }} xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <strong>Ingredient</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Amount</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(recipe)
                  .filter((item) => item[0].includes("Ingredient") && item[1])
                  .map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {recipe[`strIngredient${i + 1}`]}
                      </TableCell>
                      <TableCell align="right">
                        {recipe[`strMeasure${i + 1}`]}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Details;

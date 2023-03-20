import React from "react";
import { useSelector } from "react-redux";
import { selectBookmarks } from "../store/reducers/bookmarks";
import Grid2 from "@mui/material/Unstable_Grid2";
import RecipeCard from "./RecipeCard";

export default function Bookmarks() {
  const bookMarkedMeals = useSelector(selectBookmarks);

  return (
    <div>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <div style={{ display: "flex" }}>
            {bookMarkedMeals.map((meal) => (
              <div key={meal.idMeal} style={{ margin: "10px" }}>
                <RecipeCard details={meal} showBookMarkButton={false} />
              </div>
            ))}
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
}

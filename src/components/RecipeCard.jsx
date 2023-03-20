import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add, remove } from "../store/reducers/bookmarks";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function RecipeCard({ details, showBookMark }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Card sx={{ width: 320, height: 320 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={details.strMealThumb}
          title={details.strMeal}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {details.strMeal.length > 32
              ? `${details.strMeal.slice(0, 32)}...`
              : details.strMeal}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details.strCategory}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Link to="/details" state={{ recipe: details }}>
            <Button size="small">Details</Button>
          </Link>
          {showBookMark ? (
            <>
              <Button onClick={() => dispatch(add(details))} size="small">
                Bookmark
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => dispatch(remove(details))} size="small">
                Remove
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </div>
  );
}

export default RecipeCard;

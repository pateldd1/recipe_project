import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Search() {
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState(null);
  const [input, setInput] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getData = async () => {
      if (search) {
        try {
          const res = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
          );
          setResponse(res.data);
          console.log(res.data.meals);
        } catch (e) {
          console.log(e);
        }
      }
    };
    getData();
  }, [search]);

  const keyPress = (e) => {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
      e.preventDefault();
      setSearch(e.target.value);
    }
  };

  return (
    <div>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <div
            style={{
              display: "flex",
              scroll: "none",
              margin: "10px",
              justifyContent: "center",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-button" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{ p: "10px" }}
                aria-label="basic-button"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem>
                  <Link to={"/bookmarks"}>Bookmarks</Link>
                </MenuItem>
              </Menu>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Recipes"
                inputProps={{ "aria-label": "Search Recipes" }}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => keyPress(e)}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                onClick={() => setSearch(input)}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
        </Grid2>
        <Grid2 xs={12}>
          <div style={{ display: "flex", overflow: "auto" }}>
            {response?.meals?.map((meal) => (
              <div key={meal.idMeal} style={{ margin: "10px" }}>
                <RecipeCard details={meal} showBookMark={true} />
              </div>
            ))}
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Search;

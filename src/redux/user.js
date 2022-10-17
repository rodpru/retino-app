import { createSlice } from "@reduxjs/toolkit";
import { Redirect, Router } from "react-router-dom"; //future add user to localstorage

const initialState = {
  user: JSON.parse(localStorage.getItem("item")) || [],
  isLoggedIn: JSON.parse(localStorage.getItem("login")) || false,
};

const redirect = (redirectUrl) => {
  window.location = redirectUrl;
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.removeItem("user");
      let data = action.payload;
      state.user = data;
      localStorage.setItem("item", JSON.stringify(data));
      redirect("/login");
    },
    logInUser: (state, action) => {
      let { email, password } = action.payload;

      if (state.user.email === email && state.user.password === password) {
        state.isLoggedIn = true;
        localStorage.setItem("login", JSON.stringify(state.isLoggedIn));
        redirect("/dashboard");
      } else {
        alert(
          "Algo não funcionou, por favor tente de novo, se ainda não tem conta por favor primeiro registe-se"
        );
      }
    },

    logOutUser: (state) => {
      localStorage.removeItem("item");
      localStorage.removeItem("login");
      redirect("/");
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logOutUser, logInUser } = userSlice.actions;

export default userSlice.reducer;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemsService from "../../services/items";
import UserService from "../../services/user";
import * as itemsActions from "../../store/items";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const items = useSelector(state => state.items);
  const username = useSelector(state => state.user.username);

  const dispatch = useDispatch();

  if (isAuthenticated){
    if(!items.length){
      const itemsService = new ItemsService();
      itemsService.getItems().then(response =>{
          dispatch(itemsActions.itemsRetrieved(response.data));
      });
    }

    if(!username) {
      const userService = new UserService();
      userService.getUserDetails().then(response =>{
        console.log(response);
      })
    }

    return <Outlet/>;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
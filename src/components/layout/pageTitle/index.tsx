import React from "react";
import "./index.css";
const PageTitle = (props: any) => (
  <div className="pageTitle">
    <img
      className="logo"
      src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
      alt="Logo"
    ></img>
    <h6>{props.title}</h6>
  </div>
);
export default PageTitle;

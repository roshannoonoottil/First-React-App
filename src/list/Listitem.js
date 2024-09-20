import React from "react";
import Label from "./Label";
import "./LIstitem.css";

function ListItem(props) {
  const {
    title,
    desc,
    isActive,
    onDelete
  } = props;
  return (
    <span className="list-item">
      <div className="list-title">
        <h4>{title}</h4>
        <label onClick={onDelete}>Delete</label>
      </div>
      <div className="list-discr">{desc}</div>
      <div className="list-label">
        <br />
        <Label
          onAction={() => {
            console.log("parent clicked");
          }}
          isActive={isActive}
        />
      </div>
    </span>
  );
}

export default ListItem;

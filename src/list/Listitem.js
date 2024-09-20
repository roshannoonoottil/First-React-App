import React from "react";
import Label from "./Label";
import "./LIstitem.css";

function ListItem(props) {
  const {
    title,
    desc,
    isActive,
    onDelete,
    onLabelClick
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
        <Label isActive={isActive} onAction={onLabelClick}
        />
      </div>
    </span>
  );
}

export default ListItem;

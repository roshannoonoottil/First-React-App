import React from "react";

class Tools extends React.Component {
  render() {
    const { children, onAction, LabelValue } = this.props;

    const onlyChild = React.Children.only(children);
    const count = React.Children.count(onlyChild.props.children);

    return (
      <div>
        <div className="list-header">
          <select value={LabelValue} onChange={onAction} name="status">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="not-active">Not Active</option>
          </select>
        </div>
        {children}
        <div className="list-footer">Total {count} Items.</div>
      </div>
    );
  }
}

export default Tools;

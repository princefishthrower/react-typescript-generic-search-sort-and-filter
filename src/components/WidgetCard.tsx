import * as React from "react";
import Moment from "react-moment";
import IWidget from "../interfaces/IWidget";

export function WidgetCard(props: IWidget) {
  const {
    title,
    description,
    rating,
    updated,
    created,
    id,
    isSpecialCard,
  } = props;
  return (
    <div className="col-12 p-3">
      <div className={isSpecialCard ? "card specialCard" : "card"}>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{description}</p>
          <p className="card-text font-italic">Rating: {rating}/10</p>
        </div>
        <div className="card-footer text-muted text-right">
          <span className="float-left">#{id}</span> created:{" "}
          <Moment fromNow date={created} />, updated:{" "}
          <Moment fromNow date={updated} />
        </div>
      </div>
    </div>
  );
}

import React from "react";

import classes from "./timeline.module.scss";
import TimelineType from "../../interfaces/Timeline";

type Props = {
  timeline: TimelineType[];
};

function Timeline(props: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.top}>
          <div className={classes.title}>Timeline</div>
        </div>
        <div className={classes.bottom}>
          {props.timeline.map((item: TimelineType, index: number) => {
            return (
              <div className={classes.item} key={index}>
                <div className={classes.description}>
                  <div className={classes.text}>{item.eventName}</div>
                </div>
                <div className={classes.date}>
                  <div
                    className={classes.text}
                  >{`${item.startDate} - ${item.endDate}`}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;

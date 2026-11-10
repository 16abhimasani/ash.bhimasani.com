import React from "react";
import PostBox from "../post-box/post-box";
import { WorkItem } from "./catalog";

const WorkRows: React.FC<{ items: WorkItem[] }> = ({ items }) => (
  <div className="index">
    {items.map((item) => (
      <PostBox
        key={`${item.title}-${item.href}`}
        title={item.title}
        caption={item.caption}
        link={item.href}
        icon={item.icon}
        date={item.date}
        newTab={item.external}
        todo={item.todo}
      />
    ))}
  </div>
);

export default WorkRows;

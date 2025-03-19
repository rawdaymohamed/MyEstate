import { listData } from "@/app/lib/dummyData";
import React from "react";
import Card from "../Card/CardHorizontal";

const List = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      {listData.map((listItem) => (
        <Card key={listItem.id} item={listItem} />
      ))}
    </div>
  );
};

export default List;

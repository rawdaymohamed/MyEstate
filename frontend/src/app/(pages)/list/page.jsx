import Card from "@/app/components/Card/Card";
import Filter from "@/app/components/Filter/Filter";
import { listData } from "@/app/lib/dummyData";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 p-6">
      {/* List Container */}
      <div className="lg:flex-[3] bg-white shadow-md p-6 rounded-xl w-full overflow-y-scroll">
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {listData.map((listItem) => (
            <Card key={listItem.id} item={listItem} />
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="lg:flex-[2] h-[400px] bg-gray-200 shadow-md rounded-xl flex items-center justify-center">
        <span className="text-gray-500">Map Placeholder</span>
      </div>
    </div>
  );
};

export default Page;

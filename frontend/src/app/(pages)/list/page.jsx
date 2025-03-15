"use client";
import React, { useMemo, useRef, useState } from "react";
import Card from "@/app/components/Card/Card";
import Filter from "@/app/components/Filter/Filter";
// import Map from "@/app/components/Map/Map";
import { listData } from "@/app/lib/dummyData";
import { locations } from "@/app/lib/location";
import dynamic from "next/dynamic";
const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const mapRef = useRef();
  const handleLocationClick = (location) => {
    setSelectedLocationId(location.id);
    if (mapRef.current) {
      mapRef.current.flyTo(location.coordinates, 15); // Fly to the selected location
    }
  };

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/components/Map/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="pt-[12vh] w-[98%] lg:w-[80%] xl:w-[70%] mx-auto flex flex-col xl:flex-row gap-6 p-6">
      {/* List Container */}
      <div className="lg:flex-[3] bg-white shadow-md p-6 rounded-xl w-full overflow-y-scroll h-[88vh]">
        <Filter />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {listData.map((listItem) => (
            <Card key={listItem.id} item={listItem} />
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="lg:flex-[2] h-full  rounded-xl flex items-center justify-center">
        <Map
          locations={filteredLocations} // Pass filtered locations to the map
          mapRef={mapRef}
          selectedLocationId={selectedLocationId}
        />
      </div>
    </div>
  );
};

export default Page;

import Image from "next/image";
import React from "react";

const agents = [
  {
    id: 1,
    name: "John Doe",
    title: "Real Estate Agent",
    phone: "+1 234 567 890",
    email: "john@example.com",
    image: "/noavatar.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Senior Real Estate Agent",
    phone: "+1 234 567 891",
    email: "jane@example.com",
    image: "/avatar.jpg",
  },
];

const Page = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Our Agents
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center"
            >
              <div className="flex justify-center pt-6">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover w-40 h-40"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                  {agent.name}
                </h2>
                <p className="text-gray-600 mb-4">{agent.title}</p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> {agent.phone}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${agent.email}`}
                    className="text-yellow-500"
                  >
                    {agent.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
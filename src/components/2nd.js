import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase, ShieldCheck, List, Map } from "lucide-react";
import { motion } from "framer-motion";

export default function LockLeaveMarketing() {
  const [viewMode, setViewMode] = useState("list");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numLuggage, setNumLuggage] = useState(1);
  const [estimatedHours, setEstimatedHours] = useState(1);
  
  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center">
      {/* Hero Section */}
      <motion.div
        className="bg-blue-600 text-white py-20 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Lock & Leave</h1>
        <p className="text-lg mt-4">Your Trusted Luggage Storage Solution</p>
        <p className="text-md mt-2">Explore cities freely while we keep your luggage safe! 🚀</p>
      </motion.div>
      
      {/* Search Filters */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <label className="block text-gray-700">Location</label>
        <input 
          type="text" 
          placeholder="Enter Location" 
          className="px-4 py-2 border rounded" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
        />
        <label className="block text-gray-700">Date</label>
        <input 
          type="date" 
          className="px-4 py-2 border rounded" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
        />
        <label className="block text-gray-700">Time</label>
        <input 
          type="time" 
          className="px-4 py-2 border rounded" 
          value={time} 
          onChange={(e) => setTime(e.target.value)}
        />
        <label className="block text-gray-700">Number of Luggage</label>
        <input 
          type="number" 
          min="1" 
          className="px-4 py-2 border rounded w-20" 
          value={numLuggage} 
          onChange={(e) => setNumLuggage(e.target.value)}
        />
        <label className="block text-gray-700">Estimated Hours</label>
        <input 
          type="number" 
          min="1" 
          className="px-4 py-2 border rounded w-32" 
          placeholder="Estimated Hours" 
          value={estimatedHours} 
          onChange={(e) => setEstimatedHours(e.target.value)}
        />
        <Button className="bg-blue-600 text-white px-6 py-2 rounded">Search</Button>
      </div>
      
      {/* Toggle View Mode */}
      <div className="mt-6 flex justify-center gap-4">
        <Button onClick={() => setViewMode("list")} className="bg-gray-200 text-black px-4 py-2 rounded">
          <List size={20} className="inline-block mr-2" /> List View
        </Button>
        <Button onClick={() => setViewMode("map")} className="bg-gray-200 text-black px-4 py-2 rounded">
          <Map size={20} className="inline-block mr-2" /> Map View
        </Button>
      </div>

      {/* Display Storage Options */}
      <div className="mt-6">
        {viewMode === "list" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">Storage Spot {item}</h3>
                  <p className="text-gray-600">Location: {location || "City Center"}</p>
                  <p className="text-gray-600">Date: {date || "Select a Date"}</p>
                  <p className="text-gray-600">Time: {time || "Select Time"}</p>
                  <p className="text-gray-600">Number of Luggage: {numLuggage}</p>
                  <p className="text-gray-600">Estimated Stay: {estimatedHours} hours</p>
                  <p className="text-gray-600">Price: ${(numLuggage * 5).toFixed(2)}</p>
                  <Button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Book Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-6 bg-gray-300 h-80 flex items-center justify-center rounded-xl">
            <p className="text-gray-700">Map View Coming Soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}

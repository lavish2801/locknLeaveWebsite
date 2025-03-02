import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function LockLeaveMarketing() {
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
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-orange-500 text-white px-6 py-2 rounded">Learn More</Button>
          <Button className="bg-white text-blue-600 px-6 py-2 rounded border">Join Us</Button>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <MapPin size={40} className="text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold">Find Nearby Storage</h3>
            <p className="text-gray-600 mt-2 text-sm">Locate secure luggage spaces with ease.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <Briefcase size={40} className="text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold">Become a Host</h3>
            <p className="text-gray-600 mt-2 text-sm">Earn extra income by offering storage space.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <ShieldCheck size={40} className="text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold">Safe & Secure</h3>
            <p className="text-gray-600 mt-2 text-sm">Trusted hosts with verified security.</p>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600">“Lock & Leave saved my trip! I explored the city without dragging my bags.”</p>
              <p className="mt-4 font-semibold">- Sarah, Traveler</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600">“Hosting luggage with Lock & Leave is easy and profitable. Highly recommended!”</p>
              <p className="mt-4 font-semibold">- Raj, Storage Host</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-orange-500 text-white py-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold">Join Lock & Leave Today!</h2>
        <p className="mt-4">Whether you’re a traveler or a host, get started with us now.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="bg-white text-orange-500 px-6 py-2 rounded">Sign Up as a Traveler</Button>
          <Button className="bg-white text-orange-500 px-6 py-2 rounded">Become a Host</Button>
        </div>
      </div>
    </div>
  );
}

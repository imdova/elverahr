"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import Rating from "./Rating";
import { Client } from "@/types";

type ClientProps = {
  clients: Client[];
};

export default function ClientSlider({ clients }: ClientProps) {
  const [current, setCurrent] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % (clients.length - (visibleCards - 1)));
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + (clients.length - (visibleCards - 1))) %
        (clients.length - (visibleCards - 1))
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Navigation Buttons */}
      <div className="flex  justify-between items-center">
        <div className="w-10">
          <button
            onClick={prevSlide}
            className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition">
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Client Cards - Show 3 at a time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {clients.slice(current, current + visibleCards).map((client) => (
            <div
              key={client.id}
              className="relative  box-content flex flex-col items-start !pt-16 justify-between gap-6">
              <Quote className="absolute top-4 left-4 text-primary" size={25} />
              <h3 className="text-lg font-bold">{client.name}</h3>
              <p className="text-secondary-light mb-3">{client.testimonial}</p>
              <div className="flex items-center gap-3">
                <div className="w-12">
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={100}
                    height={100}
                    className="rounded-full  w-12 h-12"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <Rating size={10} rating={client.rating} />
                  <h3 className="text-sm font-semibold mt-1">{client.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-10">
          <button
            onClick={nextSlide}
            className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-primary hover:text-white transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

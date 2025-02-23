"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsType } from "@/types";
type ProjectProps = {
  projects: projectsType[];
};
export default function ProjectsSlide({ projects }: ProjectProps) {
  const [current, setCurrent] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const visibleCards = 4;

  // Filtered Projects
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const nextSlide = () => {
    setCurrent(
      (prev) => (prev + 1) % (filteredProjects.length - (visibleCards - 1))
    );
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + (filteredProjects.length - (visibleCards - 1))) %
        (filteredProjects.length - (visibleCards - 1))
    );
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl p-4 mb-4">
      <div className="flex flex-col items-center md:flex-row md:items-center justify-between">
        {/* Filter Buttons */}
        <div className="flex gap-3 justify-center flex-wrap mb-6">
          {[
            "all",
            "New Project",
            "Digital Marketing",
            "Branding Identity",
            "Website",
          ].map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrent(0); // Reset slider when category changes
              }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-end mb-8">
          <button
            onClick={prevSlide}
            className="flex justify-center items-center w-10 h-10 text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition">
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="flex justify-center items-center w-10 h-10 text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      {/* Slider */}
      <div className="flex items-center justify-center w-full min-h-[300px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full px-4">
          {filteredProjects.length > 0 ? (
            filteredProjects
              .slice(current, current + visibleCards)
              .map((project, index) => (
                <Link
                  href={"#"}
                  key={index}
                  className="relative flex flex-col items-start justify-start rounded-2xl w-full">
                  <div className="w-full  ">
                    <Image
                      src={project.image}
                      className="object-cover mb-3 h-[200px]"
                      alt="Project image"
                      width={500}
                      height={500}
                    />
                  </div>
                  <h2 className="text-lg font-semibold text-secondary">
                    {project.title}
                  </h2>
                </Link>
              ))
          ) : (
            <p className="text-gray-500 text-center col-span-4">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

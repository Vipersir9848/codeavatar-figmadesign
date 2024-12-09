import React from "react";

const Text = ({
  children,
  size = "base", // Default size is base
  weight = "normal", // Default weight is normal
  color = "black", // Default color is black
  className = "", // Allow additional custom classes
  align = "left", // Default alignment is left
  uppercase = false, // Option for uppercase text
  lowercase = false, // Option for lowercase text
  capitalize = false, // Option for capitalize text
}) => {
  // Tailwind size classes mapping
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "2.5xl":"text-[32px]",
    "3xl": "text-3xl",

  };

  // Tailwind font weight classes mapping
  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    450:"font-[450]",
    550:"font-[550]",
    semibold:"font-semibold",
    bold: "font-bold",
  };

  // Tailwind color classes mapping (you can customize this more)
  const colorClasses = {
    black: "text-black",
    white: "text-white",
    gray:"text-[#646464]",
    blue:"text-[#0090FF]",
    lightGray:"text-[#636567]"
  
  };

  // Tailwind alignment classes mapping
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Text transformation classes (uppercase, lowercase, capitalize)
  const textTransformClass = uppercase
    ? "uppercase"
    : lowercase
    ? "lowercase"
    : capitalize
    ? "capitalize"
    : "";

  // Combine all classes
  const classes = `${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${alignClasses[align]} ${textTransformClass} ${className}`;

  return <p className={classes}>{children}</p>;
};

export default Text;

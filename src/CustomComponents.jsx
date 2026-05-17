import React from "react";

export function FallbackComponent({ className, ...props }) {
  return <span className={className} {...props} />;
}

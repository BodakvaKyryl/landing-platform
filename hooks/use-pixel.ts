"use client";

export const usePixel = () => {
  const trackLead = () => {
    console.log("[Facebook Pixel] Event Fired: Lead");
    alert("Facebook Pixel 'Lead' event sent!");
  };

  return { trackLead };
};

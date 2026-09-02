export const BUSINESS = {
  name: "My Home Style Sofa Repair",
  phone: "9313669868",
  phoneDisplay: "+91 93136 69868",
  tel: "tel:+919313669868",
  email: "myhomestylesofarepair@gmail.com",
  address: "Shop No. 60/4, Green Park, New Delhi – 110016",
  areas: ["Delhi", "Noida", "Faridabad"],
} as const;

export const whatsappLink = (message?: string) =>
  `https://wa.me/919313669868${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const SERVICES = [
  {
    id: "sofa-repair",
    title: "Sofa Repair",
    description: "Repair damaged, torn, faded and worn sofas with premium fabrics and expert re-upholstery.",
  },
  {
    id: "custom-sofa",
    title: "Custom Sofa",
    description: "Customized sofas built to your design, size, fabric and style — made for your space.",
  },
  {
    id: "bed",
    title: "Bed",
    description: "Premium bed repair and customization, from tufted headboards to complete restoration.",
  },
  {
    id: "curtains",
    title: "Curtains",
    description: "Custom elegant curtain solutions tailored, stitched and installed to perfection.",
  },
  {
    id: "recliner",
    title: "Recliner",
    description: "Recliner repair, mechanism restoration and fine leather or fabric upholstery.",
  },
] as const;

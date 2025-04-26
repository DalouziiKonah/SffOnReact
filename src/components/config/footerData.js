// src/data/footerData.js
const establishmentYear = 2000; // Change this to your school's founding year
const currentYear = new Date().getFullYear();
const copyrightYear =
  currentYear > establishmentYear
    ? `${establishmentYear}-${currentYear}`
    : `${currentYear}`;

export const footerData = {
  contactInfo: {
    schoolName: "SFS Higher Secondary School",
    address: "Daili Village Kangpokpi, Senapati Manipur, 795129",
    phone: "+91 23455780",
    email: "sfsDaili.edu.in",
  },
  quickLinks: [
    { title: "About Us", url: "#about-us" },
    { title: "Admissions", url: "#Curriculum" },
    { title: "Contact", url: "/contact" },
    { title: "Student Results", url: "/results" },
  ],
  socialLinks: [
    { platform: "Facebook", url: "#", icon: "facebook" },
    { platform: "Twitter", url: "#", icon: "twitter" },
    { platform: "Instagram", url: "#", icon: "instagram" },
    { platform: "LinkedIn", url: "#", icon: "linkedin" },
  ],
  copyright: `© ${copyrightYear} SFS Higher Secondary School. All rights reserved.`,
};

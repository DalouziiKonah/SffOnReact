//nav links and off-canvas menu items
//This configuration is for the Header components in the SFS HR Sec School Daili website.
export const headerConfig = {
  brand: {
    imgURL: "/src/assets/logo.svg",
    name: "SFS HR.Secondary School Daili Kangpokpi",
  },
  navItems: {
    main: [
      { id: "Curriculum", label: "Curriculum", href: "#Curriculum" },
      { id: "about", label: "About", href: "#about-us" },
      { id: "staff", label: "Staff", href: "#staff" },
      { id: "Fees", label: "Fee", href: "#fees" },
      { id: "services", label: "Services", href: "#services" },
      {
        id: "facilities",
        label: "Facilities",
        href: "#facilities",
      },
      { id: "login", label: "Login", href: "#login" },
    ],
    offcanvas: [
      { id: "home", label: "Home", href: "index.html" },
      { id: "alumni", label: "Alumni", href: "#" },
      { id: "gallery", label: "Gallery", href: "#gallery" },
      { id: "students", label: "Students Portal", href: "studentsPortal.html" },
      { id: "teachers", label: "Teacher Portal", href: "teachersPortal.html" },
      { id: "parents", label: "Parent Login", href: "guardian.html" },
      { id: "forum", label: "School Forum", href: "schoolForum.html" },
    ],
  },
  buttons: {
    more: "More",
    menu: "Menu",
  },
};

//nav links and off-canvas menu items
//This configuration is for the Header components in the SFS HR Sec School Daili website.
export const headerConfig = {
  brand: {
    imgURL: "/src/assets/logo.svg",
    name: "SFS HR.Sec School Daili Kangpokpi",
  },
  navItems: {
    main: [
      { id: "Curriculum", label: "Curriculum", href: "#Curriculum" },
      { id: "about", label: "About", href: "#about-us" },
      { id: "management", label: "Management", href: "#management" },
      { id: "courses", label: "Courses", href: "#courses" },
      { id: "login", label: "Login", href: "#login" },
      {
        id: "admissions",
        label: "Admissions",
        href: "2ndpage.html#admissions",
      },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    offcanvas: [
      { id: "home", label: "Home", href: "index.html" },
      { id: "alumni", label: "Alumni", href: "#" },
      { id: "blog", label: "SchoolBlog", href: "#" },
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

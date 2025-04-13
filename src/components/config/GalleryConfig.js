const GalleryConfig = {
  title: "Our Gallery",
  description: "A collection of beautiful moments",
  items: [
    {
      id: 1,
      imageUrl:
        "https://th.bing.com/th/id/OIP.PpFIZAlCsHgBgvSIJ55uegHaEJ?rs=1&pid=ImgDetMain",
      title: "Children's day",
      description: "Children's day special",
      category: "School",
      featured: true,
    },
    {
      id: 2,
      imageUrl:
        "https://th.bing.com/th/id/R.40970de866e3896367f89bb3623c1152?rik=JSI120VbUGzYcw&riu=http%3a%2f%2fwww.cmis.ac.th%2fsites%2fdefault%2ffiles%2f2021-03%2fevents.jpg&ehk=xBJeqyXuF%2bI%2b2JFY5AAY1bkJnDa5QlUxn4ipvgdML%2fw%3d&risl=&pid=ImgRaw&r=0",
      title: "Cultural day",
      description: "Cultural day",
      category: "Events",
    },
    {
      id: 3,
      imageUrl:
        "https://media.istockphoto.com/id/1269599466/photo/happy-teachers-day-written-on-slate-board-with-white-chalk-pieces-isolated-on-black.jpg?s=612x612&w=0&k=20&c=2-w40V0b5x0mTDpABw7j6HFRqsJxX3tE5p_z-KqBtK8=",
      title: "Teacher's day",
      description: "Teacher's day special",
      category: "Teacher's day",
    },
    // Add more items as needed
  ],
  layout: {
    type: "grid", // "grid" or "masonry"
    columns: {
      desktop: 3,
      tablet: 2,
      mobile: 1,
    },
    spacing: 16, // in pixels
    featuredFirst: true,
  },
};

export default GalleryConfig;

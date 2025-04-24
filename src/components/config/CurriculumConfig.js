const curriculumData = {
  schoolName: "SFS Higher Secondary School Daili",

  // Kindergarten Section
  kindergarten: {
    levels: [
      {
        name: "Pre-Kindergarten",
        ageGroup: "3-4 years",
        description:
          "Play-based learning focusing on social skills and early literacy",
        focusAreas: [
          "Language Development",
          "Basic Numeracy",
          "Art & Creativity",
          "Social Skills",
          "Physical Activities",
        ],
      },
      {
        name: "Kindergarten",
        ageGroup: "4-5 years",
        description:
          "Structured play and introduction to formal learning concepts",
        focusAreas: [
          "Phonics & Pre-Reading",
          "Number Concepts",
          "Science Exploration",
          "Music & Movement",
          "Fine Motor Skills",
        ],
      },
    ],
  },

  // Primary School Section
  primarySchool: {
    grades: [
      {
        level: 1,
        subjects: [
          "English",
          "Mathematics",
          "Environmental Science",
          "Regional Language",
          "Art & Craft",
          "Computer Basics",
        ],
        specialPrograms: "Reading Buddy Program, Basic Robotics",
      },
      {
        level: 2,
        subjects: [
          "English",
          "Mathematics",
          "EVS",
          "Second Language",
          "Music",
          "Computer Literacy",
        ],
        specialPrograms: "Math Olympiad Prep, Storytelling",
      },
      // Grades 3-5 would follow similar structure
    ],
  },

  // Middle School Section
  middleSchool: {
    grades: [
      {
        level: 6,
        coreSubjects: [
          "English",
          "Mathematics",
          "Science (Physics, Chemistry, Biology)",
          "Social Studies",
          "Second Language",
        ],
        electives: ["Computer Applications", "Art", "Music", "Drama"],
      },
      // Grades 7-8 would follow similar structure
    ],
  },

  // High School & Higher Secondary
  academicYears: [
    {
      year: "High School (9th-10th)",
      key: "highSchool",
      streams: [
        {
          name: "General Stream",
          duration: "2 Years",
          description:
            "Comprehensive CBSE curriculum covering all core subjects",
          coreSubjects: [
            "English",
            "Mathematics",
            "Science",
            "Social Science",
            "Second Language",
          ],
        },
      ],
    },
    {
      year: "Higher Secondary (11th-12th)",
      key: "higherSecondary",
      streams: [
        {
          name: "Science Stream",
          duration: "2 Years",
          description: "Focus on Physics, Chemistry, and Mathematics/Biology",
          coreSubjects: [
            "Physics",
            "Chemistry",
            "Mathematics/Biology",
            "English",
            "Computer Science",
          ],
        },
        {
          name: "Commerce Stream",
          duration: "2 Years",
          description: "Focus on Business Studies, Accountancy, and Economics",
          coreSubjects: [
            "Business Studies",
            "Accountancy",
            "Economics",
            "English",
            "Mathematics/Computer Science",
          ],
        },
        {
          name: "Humanities Stream",
          duration: "2 Years",
          description: "Focus on History, Political Science, and Sociology",
          coreSubjects: [
            "History",
            "Political Science",
            "Sociology",
            "English",
            "Mathematics/Computer Science",
          ],
        },
        // Commerce and Humanities streams would follow
      ],
    },
  ],

  // Comprehensive Fee Structure
  feeStructure: {
    kindergarten: [
      {
        level: "Pre-Kindergarten",
        admission: "₹15,000",
        tuition: "₹4,500",
        activity: "₹2,000",
        total: "₹70,000",
      },
      {
        level: "Kindergarten",
        admission: "₹15,000",
        tuition: "₹5,000",
        activity: "₹2,500",
        total: "₹77,000",
      },
    ],
    primary: [
      {
        grade: 1,
        admission: "₹20,000",
        tuition: "₹5,500",
        booksUniform: "₹8,000",
        total: "₹86,000",
      },
      // Grades 2-5 would follow
    ],
    middle: [
      {
        grade: 6,
        admission: "₹25,000",
        tuition: "₹6,500",
        labFee: "₹3,000",
        total: "₹1,03,000",
      },
      // Grades 7-8 would follow
    ],
    highSchool: [
      {
        name: "High School (9th-10th)",
        key: "highSchool",
        fees: [
          {
            stream: "General Stream",
            admission: "₹30,000",
            tuition: "₹7,500",
            exam: "₹5,000",
            total: "₹1,20,000",
          },
        ],
      },
      {
        name: "Higher Secondary (11th-12th)",
        key: "higherSecondary",
        fees: [
          {
            stream: "Science Stream",
            admission: "₹35,000",
            tuition: "₹8,500",
            exam: "₹6,000",
            total: "₹1,37,000",
          },
          // Commerce and Humanities would follow
        ],
      },
    ],
  },
};

export default curriculumData;

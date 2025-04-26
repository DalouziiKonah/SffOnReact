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
      ],
    },
  ],

  // Updated Fee Structure with Dynamic Totals (Using Getters)
  feeStructure: {
    kindergarten: [
      {
        level: "Pre-Kindergarten",
        admission: 15000,
        tuition: 4500,
        activity: 2000,
        get total() {
          return this.admission + this.tuition + this.activity;
        },
      },
      {
        level: "Kindergarten",
        admission: 15000,
        tuition: 5000,
        activity: 2500,
        get total() {
          return this.admission + this.tuition + this.activity;
        },
      },
    ],
    primary: [
      {
        grade: 1,
        admission: 20000,
        tuition: 5500,
        booksUniform: 8000,
        get total() {
          return this.admission + this.tuition + this.booksUniform;
        },
      },
    ],
    middle: [
      {
        grade: 6,
        admission: 25000,
        tuition: 6500,
        labFee: 3000,
        get total() {
          return this.admission + this.tuition + this.labFee;
        },
      },
    ],
    highSchool: [
      {
        name: "High School (9th-10th)",
        key: "highSchool",
        fees: [
          {
            stream: "General Stream",
            admission: 30000,
            tuition: 7500,
            exam: 5000,
            get total() {
              return this.admission + this.tuition + this.exam;
            },
          },
        ],
      },
      {
        name: "Higher Secondary (11th-12th)",
        key: "higherSecondary",
        fees: [
          {
            stream: "Science Stream",
            admission: 35000,
            tuition: 8500,
            exam: 6000,
            get total() {
              return this.admission + this.tuition + this.exam;
            },
          },
          {
            stream: "Commerce Stream",
            admission: 35000,
            tuition: 8000,
            exam: 5500,
            get total() {
              return this.admission + this.tuition + this.exam;
            },
          },
          {
            stream: "Humanities Stream",
            admission: 35000,
            tuition: 7500,
            exam: 5000,
            get total() {
              return this.admission + this.tuition + this.exam;
            },
          },
        ],
      },
    ],
  },
};

export default curriculumData;

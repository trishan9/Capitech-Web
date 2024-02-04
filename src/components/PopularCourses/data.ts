export interface CourseCardInterface {
  cardImage: string;
  label: string;
  title: string;
  description: string;
  url: string;
  date: string;
  content_type: string;
  livedate: string;
}

export const coursesData = [
  {
    id: 1,
    cardImage: "/assets/r3.png",
    label: "Trading",
    title: "Product Management Basic - Course",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    duration: "11 Hour 15 Minutes",
    lesson: "Lesson 01",
    date: "1-28 July 2022",
  },
  {
    id: 2,
    cardImage: "/assets/r2.png",
    label: "Investing",
    title: "BM Data Science Professional Certificate",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    duration: "11 Hour 15 Minutes",
    lesson: "Lesson 01",
    date: "1-28 July 2022",
  },
  {
    id: 3,
    cardImage: "/assets/r1.png",
    label: "Live",
    title: "The Science of Well-Being - Article",
    description:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    duration: "11 Hour 15 Minutes",
    lesson: "Lesson 01",
    date: "1-28 July 2022",
  },
];

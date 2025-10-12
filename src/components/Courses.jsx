import React from "react";

const Courses = () => {
  const programs = [
    {
      name: "BS in Accountancy",
      description:
        "A program focused on financial, managerial, and public accounting, along with auditing, business laws, and taxation — preparing students for real-world financial and business practices.",
    },
    {
      name: "BS in Business Administration",
      description:
        "Covers business management, finance, and marketing strategies, helping students gain the skills to lead and innovate in the corporate world.",
      majors: [
        "Financial Management – focuses on effective handling of business finances.",
        "Marketing Management – focuses on marketing strategies and consumer behavior.",
      ],
    },
    {
      name: "BS in Psychology",
      description:
        "A four-year program that explores human behavior through scientific study, helping students understand how people think, feel, and act in various situations.",
    },
    {
      name: "BS in Computer Science",
      description:
        "Centers on programming, algorithms, and software development, preparing students to create and analyze computer systems and applications.",
    },
    {
      name: "BS in Information Technology",
      description:
        "Focuses on managing and developing technology-based systems to solve real-world business and communication problems.",
    },
    {
      name: "BS in Computer Engineering",
      description:
        "Combines computer science and electrical engineering to design and build computer hardware and software systems.",
    },
    {
      name: "BS in Electronics and Communications Engineering",
      description:
        "Trains students in electronics, telecommunications, and digital systems, preparing them for careers in communication technology.",
    },
    {
      name: "BS in Industrial Engineering",
      description:
        "Develops skills in optimizing systems and processes to improve efficiency in industries and organizations.",
    },
    {
      name: "BS in Nursing",
      description:
        "Prepares students to provide quality healthcare, emphasizing patient care, medical knowledge, and practical experience.",
    },
    {
      name: "Bachelor of Elementary Education",
      description:
        "Equips future teachers with the knowledge and skills needed to teach and inspire young learners in elementary levels.",
    },
    {
      name: "Bachelor of Secondary Education",
      description:
        "Prepares students to become high school teachers specializing in specific subjects.",
      majors: [
        "Filipino – focuses on teaching the Filipino language and literature.",
        "Mathematics – focuses on developing students' logical and numerical skills.",
        "Social Science – focuses on understanding society, culture, and history.",
        "English – focuses on language proficiency and communication.",
      ],
    },
  ];

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Programs Offered</h1>

      <div style={styles.container}>
        {programs.map((program, index) => (
          <details key={index} style={styles.dropdown}>
            <summary style={styles.summary}>{program.name}</summary>
            <p style={styles.description}>{program.description}</p>

            {program.majors && (
              <ul style={styles.list}>
                {program.majors.map((major, i) => (
                  <li key={i}>{major}</li>
                ))}
              </ul>
            )}
          </details>
        ))}
      </div>
    </main>
  );
};

const styles = {
  main: {
    fontFamily: "Times New Roman, serif",
    padding: "30px",
    backgroundColor: "#f6fff6",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    color: "#2e7d32",
    fontSize: "2rem",
    marginBottom: "25px",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  dropdown: {
    backgroundColor: "#ffffff",
    border: "1px solid #a5d6a7",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  summary: {
    cursor: "pointer",
    fontSize: "1.2rem",
    color: "#1b5e20",
    fontWeight: "bold",
  },
  description: {
    marginTop: "10px",
    color: "#333",
    textAlign: "justify",
    lineHeight: "1.6",
  },
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
    color: "#444",
  },
};

export default Courses;


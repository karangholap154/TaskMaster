// localStorage.clear();

const employees = [
  {
    id: 1,
    email: "employee1@ex.com",
    password: "123",
    firstname: "Aarav",
    tasks: [
      {
        taskTitle: "Document Project Requirements",
        taskDescription: "Complete the detailed documentation for all project requirements and deliverables.",
        taskDate: "2025-01-10",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Resolve Application Bugs",
        taskDescription: "Identify and fix all critical bugs in the main application module.",
        taskDate: "2025-01-15",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Prepare Meeting Agenda",
        taskDescription: "Create and finalize the agenda for the next team meeting with all key points.",
        taskDate: "2025-01-20",
        category: "Planning",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Update Client Feedback Log",
        taskDescription: "Review and document all client feedback received during the last quarter.",
        taskDate: "2025-01-25",
        category: "Feedback",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 2,
    email: "employee2@ex.com",
    password: "123",
    firstname: "Vivaan",
    tasks: [
      {
        taskTitle: "Analyze Feedback Trends",
        taskDescription: "Examine and identify trends in user feedback from the last quarter.",
        taskDate: "2025-01-12",
        category: "Analysis",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update System Software",
        taskDescription: "Ensure all system dependencies are up-to-date and compatible with the software.",
        taskDate: "2025-01-18",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Generate Performance Reports",
        taskDescription: "Compile and format data to create a detailed performance report for the team.",
        taskDate: "2025-01-25",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Optimize Internal Processes",
        taskDescription: "Identify areas for improvement and suggest process optimizations to increase efficiency.",
        taskDate: "2025-01-28",
        category: "Optimization",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Prepare Presentation Materials",
        taskDescription: "Design slides and gather data for the upcoming client presentation.",
        taskDate: "2025-02-01",
        category: "Planning",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 3,
    email: "employee3@ex.com",
    password: "123",
    firstname: "Payal",
    tasks: [
      {
        taskTitle: "Create Prototype Design",
        taskDescription: "Develop a high-fidelity prototype for the upcoming project feature release.",
        taskDate: "2025-01-11",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Conduct Market Analysis",
        taskDescription: "Gather and analyze data to understand current market trends and user needs.",
        taskDate: "2025-01-19",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Organize Team Event",
        taskDescription: "Plan and execute a team-building event to enhance collaboration and morale.",
        taskDate: "2025-01-23",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Update Design Guidelines",
        taskDescription: "Revise the design guidelines document to reflect the latest branding changes.",
        taskDate: "2025-01-29",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 4,
    email: "employee4@ex.com",
    password: "123",
    firstname: "Ananya",
    tasks: [
      {
        taskTitle: "Define Project Goals",
        taskDescription: "Outline and document the goals for the new project initiative.",
        taskDate: "2025-01-14",
        category: "Planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Document Code Functions",
        taskDescription: "Write detailed documentation for key functions in the project codebase.",
        taskDate: "2025-01-17",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Create Financial Reports",
        taskDescription: "Prepare a financial report detailing expenditures and forecasts for the next quarter.",
        taskDate: "2025-01-24",
        category: "Finance",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Plan Recruitment Drive",
        taskDescription: "Coordinate with HR to plan a recruitment drive targeting top-tier talent.",
        taskDate: "2025-01-27",
        category: "HR",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Review Legal Compliance",
        taskDescription: "Ensure that all project activities adhere to relevant legal and compliance standards.",
        taskDate: "2025-02-02",
        category: "Compliance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 5,
    email: "employee5@ex.com",
    password: "123",
    firstname: "Aarohi",
    tasks: [
      {
        taskTitle: "Monitor Server Status",
        taskDescription: "Ensure server uptime and performance are maintained during peak hours.",
        taskDate: "2025-01-13",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Audit Security Policies",
        taskDescription: "Review and update security policies to protect sensitive data and systems.",
        taskDate: "2025-01-16",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Coordinate Training Program",
        taskDescription: "Organize and oversee a training program to enhance employee technical skills.",
        taskDate: "2025-01-22",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskTitle: "Draft IT Infrastructure Plan",
        taskDescription: "Develop a plan for upgrading the company’s IT infrastructure to meet future needs.",
        taskDate: "2025-01-28",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCounts: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  }
];



const admin = [{
      "id": 1,
      "email": "admin@ex.com",
      "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return { employees, admin };
}
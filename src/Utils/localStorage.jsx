const employeeData = {
    "employees": [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Prepare Financial Report",
            "description": "Compile the quarterly financial data into a report.",
            "date": "2024-11-17",
            "category": "Finance",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Team Meeting",
            "description": "Attend the weekly team meeting and provide updates.",
            "date": "2024-11-18",
            "category": "Meetings",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Code Review",
            "description": "Review the codebase for the latest feature implementation.",
            "date": "2024-11-19",
            "category": "Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Customer Feedback Analysis",
            "description": "Analyze customer feedback from the recent survey.",
            "date": "2024-11-17",
            "category": "Customer Service",
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Presentation Preparation",
            "description": "Prepare slides for the product roadmap presentation.",
            "date": "2024-11-18",
            "category": "Management",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Budget Review",
            "description": "Review the departmental budget for next quarter.",
            "date": "2024-11-20",
            "category": "Finance",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Bug Fixing",
            "description": "Fix critical bugs reported in the system.",
            "date": "2024-11-17",
            "category": "Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Update Documentation",
            "description": "Update the technical documentation with recent changes.",
            "date": "2024-11-19",
            "category": "Documentation",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Onboard New Team Member",
            "description": "Help onboard the new junior developer.",
            "date": "2024-11-20",
            "category": "HR",
            "active": false,
            "newTask": true,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Market Analysis",
            "description": "Analyze current market trends for our product.",
            "date": "2024-11-17",
            "category": "Marketing",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Prepare Press Release",
            "description": "Draft a press release for the new product launch.",
            "date": "2024-11-18",
            "category": "Public Relations",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Social Media Campaign",
            "description": "Design a social media campaign strategy.",
            "date": "2024-11-19",
            "category": "Marketing",
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Server Maintenance",
            "description": "Perform maintenance on the production server.",
            "date": "2024-11-17",
            "category": "IT",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Network Configuration",
            "description": "Configure the office network for better performance.",
            "date": "2024-11-18",
            "category": "IT",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "System Upgrade",
            "description": "Upgrade the outdated systems to the latest version.",
            "date": "2024-11-19",
            "category": "IT",
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      }
    ]
  };
  
  const adminData = {
    "admin": {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  };
  


  export const setStorage = () => {
    try {
      if (employeeData && adminData) {
        localStorage.setItem("emp", JSON.stringify(employeeData));
        localStorage.setItem("admin", JSON.stringify(adminData));
        console.log("Data successfully saved to localStorage");
      } else {
        console.log("Invalid data provided to setStorage");
      }
    } catch (error) {
      console.error("Error setting localStorage data:", error);
    }
  };
  
  export const getLocalStorage = () => {
    try {
      const emp = JSON.parse(localStorage.getItem("emp"));
      const admin = JSON.parse(localStorage.getItem("admin"));
  
      if (emp && admin) {
        console.log("Data retrieved from localStorage:", { emp, admin });
      } else {
        console.warn("No data found in localStorage for 'emp' or 'admin'");
      }
  
      return { emp, admin };
    } catch (error) {
      console.error("Error reading localStorage data:", error);
      return { emp: null, admin: null };
    }
  };
  
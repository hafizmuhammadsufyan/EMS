const employee = [
  {
    id: 1,
    name: "Ali",
    email: "employee1@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Monthly Report",
        description: "Compile sales and performance data for this month.",
        date: "2025-02-05",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Follow-up",
        description: "Email client regarding contract renewal.",
        date: "2025-01-28",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Database Backup",
        description: "Backup server database before system update.",
        date: "2025-01-20",
        category: "IT"
      }
    ]
  },

  {
    id: 2,
    name: "Sahil",
    email: "employee2@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Landing Page",
        description: "Create UI for the new product landing page.",
        date: "2025-02-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve responsiveness issue in navbar.",
        date: "2025-01-30",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Optimize Images",
        description: "Compress images for better page speed.",
        date: "2025-02-01",
        category: "Performance"
      }
    ]
  },

  {
    id: 3,
    name: "Subhan",
    email: "employee3@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Inventory Check",
        description: "Verify stock levels in warehouse.",
        date: "2025-02-04",
        category: "Operations"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Supplier Call",
        description: "Discuss delivery schedule with supplier.",
        date: "2025-01-26",
        category: "Procurement"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Shipment Coordination",
        description: "Coordinate late shipment arrival.",
        date: "2025-01-22",
        category: "Logistics"
      }
    ]
  },

  {
    id: 4,
    name: "Hammad",
    email: "employee4@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Marketing Campaign",
        description: "Launch email marketing campaign.",
        date: "2025-02-07",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Social Media Audit",
        description: "Analyze engagement metrics.",
        date: "2025-01-29",
        category: "Analytics"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: false,
        title: "Ad Budget Planning",
        description: "Prepare budget for next quarter ads.",
        date: "2025-02-02",
        category: "Finance"
      }
    ]
  },

  {
    id: 5,
    name: "Raheel",
    email: "employee5@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Employee Onboarding",
        description: "Assist new hires with onboarding process.",
        date: "2025-02-03",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Policy Update Review",
        description: "Review updated company policies.",
        date: "2025-01-27",
        category: "Compliance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Attendance Audit",
        description: "Audit attendance records for errors.",
        date: "2025-01-23",
        category: "HR"
      }
    ]
  }
];


const admin = [
  {
    id: 100,
    name: "Sufyan",
    email: "admin@company.com",
    password: "123"
  }
];


export const setLocalStorage = ()=>{
    localStorage.setItem("employees", JSON.stringify(employee))
    localStorage.setItem("admin", JSON.stringify(admin))

}

export const getLocalStorage = ()=>{

    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return {employees, admin}
    

    
}
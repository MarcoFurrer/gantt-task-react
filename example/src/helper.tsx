import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "Strategic Planning",
      id: "strategicPlanning",
      progress: 25,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 7),
      name: "Stakeholder Interviews",
      id: "stakeholderInterviews",
      project: "strategicPlanning",
      progress: 20,
      type: "task",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
      name: "Define Objectives & KPIs",
      id: "defineObjectives",
      project: "strategicPlanning",
      progress: 10,
      type: "task",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "Prestudies",
      id: "prestudies",
      progress: 25,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      name: "Technical Feasibility",
      id: "technicalFeasibility",
      project: "prestudies",
      progress: 40,
      type: "task",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 7),
      name: "Cost-Benefit Analysis",
      id: "costBenefitAnalysis",
      progress: 20,
      type: "project",
      project: "prestudies",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
      name: "Resource Assessment",
      id: "resourceAssessment",
      project: "costBenefitAnalysis",
      progress: 10,
      type: "project",
      hideChildren: true,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9),
      name: "Further Resource Assessment",
      id: "furtherResourceAssessment",
      project: "costBenefitAnalysis",
      progress: 10,
      type: "task",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      name: "Market Research",
      id: "marketResearch",
      project: "strategicPlanning",
      progress: 40,
      type: "task",
    }
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}

import DashboardPage from "../pages/DashboardPage";
import StudentsPage from "../pages/StudentsPage";
import CoursesPage from "../pages/CoursesPage";
import MentorsPage from "../pages/MentorsPage";
import CurrentBatches from "../pages/CurrentBatches";
import CompleteBatches from "../pages/CompleteBatches";

export const sharedPageRoutes = [
    { path: 'dashboard', Component: DashboardPage },
    { path: 'students', Component: StudentsPage },
    { path: 'courses', Component: CoursesPage },
    { path: 'current-batches', Component: CurrentBatches },
    { path: 'complete-batches', Component: CompleteBatches },
    { path: 'mentors', Component: MentorsPage },
]
import DashboardPage from "../pages/DashboardPage";
import StudentsPage from "../pages/StudentsPage";
import CoursesPage from "../pages/CoursesPage";
import BatchesPage from "../pages/BatchesPage";
import MentorsPage from "../pages/MentorsPage";

export const sharedPageRoutes = [
    { path: 'dashboard', Component: DashboardPage },
    { path: 'students', Component: StudentsPage },
    { path: 'courses', Component: CoursesPage },
    { path: 'batches', Component: BatchesPage },
    { path: 'mentors', Component: MentorsPage },
]
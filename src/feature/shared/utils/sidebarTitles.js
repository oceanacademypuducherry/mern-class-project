import { ImUserTie } from "react-icons/im";
import { IoBookmarks } from "react-icons/io5";
import { MdAccountTree } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";

export const sidebarTitles = [
    { name: 'dashboard', path: '/dashboard', icon: RiDashboardFill },
    { name: 'students', path: '/students', icon: PiStudentBold },
    { name: 'courses', path: '/courses', icon: IoBookmarks },
    { name: 'batches', path: '/batches', icon: MdAccountTree },
    { name: 'mentors', path: '/mentors', icon: ImUserTie },
]
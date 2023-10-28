import {
	HiOutlineViewGrid,

	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'subjects',
		label: 'Subjects',
		path: '/subjects',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'exams',
		label: 'Exams',
		path: '/exams',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'students',
		label: 'Students',
		path: '/students',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'questionbank',
		label: 'Question Bank',
		path: '/questionbank',
		icon: <HiOutlineAnnotation />
	},

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

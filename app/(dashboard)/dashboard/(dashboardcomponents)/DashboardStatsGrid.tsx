import React from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { BsPersonBoundingBox } from 'react-icons/bs'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<BsPersonBoundingBox className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Subjects</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">10</strong>
					</div>
				</div>
			</BoxWrapper>

			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<AiOutlineUnorderedList className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Exams Listed</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">1</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<BsPersonBoundingBox className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Students</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">50</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<BsPersonBoundingBox className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Questions</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">100</strong>
					</div>
				</div>
			</BoxWrapper>

		</div>
	)
}

function BoxWrapper({ children }: { children: React.ReactNode }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

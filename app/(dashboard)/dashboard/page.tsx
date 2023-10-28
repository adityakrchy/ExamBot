import React from 'react'
import DashboardStatsGrid from './(dashboardcomponents)/DashboardStatsGrid'
import RecentSubjects from './(dashboardcomponents)/RecentSubjects'
import { Separator } from '@/components/ui/separator'
import RecentExams from './(dashboardcomponents)/RecentExams'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'




const page = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session)
  if(!session) redirect('/sign-in')
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex flex-col gap-4 w-full">
        <RecentSubjects />
        <Separator />
        <RecentExams />
      </div>
    </div>
  )
}

export default page
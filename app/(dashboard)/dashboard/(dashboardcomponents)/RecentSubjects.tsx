import Link from 'next/link'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'


const recentOrderData = [
    {
        id: '1',
        subject: 'Mathematics',
    },
    
    {
        id: '2',
        subject: 'English',
    },
    
    {
        id: '3',
        subject: 'Computer Science',
    },
    
    {
        id: '4',
        subject: 'Cryptography',
    },
    
    {
        id: '5',
        subject: 'IOT',
    },
    
    {
        id: '6',
        subject: 'Operating System',
    },
    
]

export default function RecentSubjects() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Recent Subjects</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
               
                <Table>
                    <TableCaption>A list of recently added subjects</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">#</TableHead>
                            <TableHead className='w-full'>Subjects</TableHead>
                            <TableHead>Edit</TableHead>
                            <TableHead>Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentOrderData.map((order) => {
                            return (
                                <TableRow>
                                    <TableCell key={order.id} className="font-medium">{order.id}</TableCell>
                                    <TableCell>{order.subject}</TableCell>
                                    <TableCell><Button variant={'secondary'}>Edit</Button></TableCell>
                                    <TableCell ><Button variant={'destructive'}>Delete</Button></TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

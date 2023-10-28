"use client"
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const getAllSubjects = async () => {
  const response = await fetch("http://localhost:3000/api/subjects");
  const data = await response.json();
  return data;
};

type Subject = {
  id: string;
  name: string;
};

const AllSubjects = () => {
  const [as, setAs] = useState<Subject[]>([]);
  let serialNumber = 1;
    useEffect(() => {
      getAllSubjects().then((data) => setAs(data));
    }, []);
  return (
    <>
      <Table>
        <TableCaption>A list of Subjects.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead className="w-full">Subjects</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {as.map((subject: any) => {
            return (
              <TableRow>
                <TableCell key={subject._id} className="font-medium">
                  {serialNumber++}
                </TableCell>
                <TableCell>{subject.name}</TableCell>
                <TableCell>
                  <Button variant={"secondary"}>Edit</Button>
                </TableCell>
                <TableCell>
                  <Button variant={"destructive"}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
          {/* {allSubjects.map()} */}
        </TableBody>
      </Table>
    </>
  );
};

export default AllSubjects;

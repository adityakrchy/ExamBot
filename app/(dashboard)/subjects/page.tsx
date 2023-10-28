"use client";
import React, { useState, useEffect, Suspense } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";
import Loading from "./Loading";

const getAllSubjects = async () => {
  const response = await fetch("http://localhost:3000/api/subjects");
  const data = await response.json();
  return data;
};
type Subject = {
  id: string;
  name: string;
};

const page = () => {
  const [as, setAs] = useState<Subject[]>([]);
  const [subject, setSubject] = React.useState("");
  let serialNumber = 1;
  useEffect(() => {
    getAllSubjects().then((data) => setAs(data));
  });

  const handleSubjects = async () => {
    try {
      const res = await axios
        .post("http://localhost:3000/api/subjects", {
          subject: subject,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const editTextProps = {
    text: "Edit",
  };
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Subjects</h1>
      {/* <DialogButton /> */}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Subject</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Subject</DialogTitle>
            <DialogDescription>
              Add new subjects here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Subject
              </Label>
              <Input
                id="name"
                placeholder="Enter Subject Name"
                className="col-span-3"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={handleSubjects} type="submit">
                Save
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="bg-white mt-2">
        {/* <AllSubjects /> */}
        <Suspense fallback={<Loading />}>
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
                      {/* <Button  variant={"secondary"}>Edit</Button> */}
                      <EditDialog text="Hello" subject={subject} />
                    </TableCell>
                    <TableCell>
                      <DeleteDialog subject={subject} />
                    </TableCell>
                  </TableRow>
                );
              })}
              {/* {allSubjects.map()} */}
            </TableBody>
          </Table>
        </Suspense>
      </div>
    </>
  );
};

export default page;

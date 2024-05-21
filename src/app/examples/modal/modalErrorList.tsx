"use client";
import { useState,useEffect } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
  Dialog,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { DataTable } from "../tables/table/data-table";
import { columnsErrorList, ErrorList } from "../tables/table/colums";
import { getTable, getTableError } from "@/hooks/dataTable";


interface ModalErrorProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  ButtonContent: string;
}

export function ModalErrorList({
  isOpen,
  setIsOpen,
  ButtonContent,
}: ModalErrorProps) {
  const [data, setData]= useState<ErrorList[]>([]);
  useEffect(()=>{
    const fetchErrorData = async () => {
      try {
        const result:ErrorList[] = await getTableError();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchErrorData();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">{ButtonContent} </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <div className="flex items-center justify-center pt-10">
          <DataTable columns={columnsErrorList} data={data} />
        </div>
        <DialogFooter className="flex items-center justify-center">
          <DialogClose asChild>
            <Button size="sm" className="h-8 w-[40%]">
              Cancel
            </Button>
          </DialogClose>
          <Button size="sm" className="h-8 w-[40%]">
            Try Again
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
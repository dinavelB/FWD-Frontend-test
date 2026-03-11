"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/shared/ui/dialog"

import { AddEmployeeForm } from "./AddEmployeeForm";

type AddEmployeeDialogProps= {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddEmployeeDialog({ open, setOpen }: AddEmployeeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-125">

        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
        </DialogHeader>

        <AddEmployeeForm setOpen={setOpen} />

      </DialogContent>
    </Dialog>
  )
}
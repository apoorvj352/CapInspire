import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ComponentType, useEffect, useRef, useState } from "react";

export type ListDialogProps = {
  label: string;
  title: string;
  dialogDescriptionComponent: ComponentType<string>;
  dialogDescriptionComponentProps?: string;
  dialogTriggerComponent?: ComponentType<boolean>;
  dialogTriggerComponentProps?: boolean;
};
export type TriggerButtonProps = {
  label: string;
};
export const CloseButton = () => {
  return (
    <AlertDialogCancel asChild className="border-none">
      <button className="p-2">
        <svg
          className="w-5 h-5 text-black dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </AlertDialogCancel>
  );
};
export const DialogTriggerButton: React.FC<TriggerButtonProps> = ({
  label,
}) => {
  return (
    <Button variant={"outline"} className="rounded-xl">
      {label}
    </Button>
  );
};
export const ListDialog: React.FC<ListDialogProps> = (
  props: ListDialogProps,
) => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <AlertDialog open={open} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger>
        {props.dialogTriggerComponent ? (
          <props.dialogTriggerComponent
            selected={props?.dialogTriggerComponentProps}
          />
        ) : (
          <DialogTriggerButton label={props.label} />
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[40%] md:w-full" ref={dialogRef}>
        <AlertDialogHeader className="flex justify-between items-center min-w-[40%]">
          <AlertDialogTitle className="relative w-full flex justify-between items-center text-3xl font-sans">
            {props.title}
            <CloseButton />
          </AlertDialogTitle>
          <AlertDialogDescription className="w-full">
            {props.dialogDescriptionComponentProps ? (
              <props.dialogDescriptionComponent
                text={props.dialogDescriptionComponentProps}
              />
            ) : (
              <props.dialogDescriptionComponent />
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

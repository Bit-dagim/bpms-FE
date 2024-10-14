import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Modal = ({ open, onClose, title, children, confirmText, onConfirm }) => {
  return (
    <Dialog open={open} size="sm" handler={onClose}>
      <DialogHeader>{title}</DialogHeader>
      <DialogBody>{children}</DialogBody>
      <DialogFooter>
        <Button variant="text" color="black" onClick={onClose} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="purple" onClick={onConfirm}>
          <span>{confirmText}</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default Modal;

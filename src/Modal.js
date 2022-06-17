import "./modal.css";
import React, { useEffect } from "react";
export default function Modal({ modalContents, CloseModal }) {
  useEffect(() => {
    setTimeout(() => {
      CloseModal();
    }, 3000);
  });
  return (
    <div className="modal">
      <p> {modalContents}</p>
    </div>
  );
}

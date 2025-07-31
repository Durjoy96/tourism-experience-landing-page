"use client";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function VideoModal({ open, setOpen }) {
  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <iframe
          className="w-full h-[320px] md:h-[427px] mt-8 rounded-lg"
          src="https://www.youtube.com/embed/linlz7-Pnvw"
          title="Switzerland in 8K ULTRA HD HDR - Heaven of Earth (60 FPS)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
}

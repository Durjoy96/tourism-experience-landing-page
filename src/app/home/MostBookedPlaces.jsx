import PrimaryBtn from "@/components/primary-btn";
import Image from "next/image";
import React from "react";
import sanctuaryImg from "@/assets/images/sanctuary.jpg";
import lostVoyageImg from "@/assets/images/lost-voyage.jpg";
import mountainsInSwitzerlandImg from "@/assets/images/mountains-in-switzerland.jpg";
import lakeElizabethImg from "@/assets/images/lake-elizabeth.jpg";
import southAfricaImg from "@/assets/images/south-africa.jpg";

export default function MostBookedPlaces() {
  return (
    <div className="max-w-7xl mx-auto px-5 columns-3">
      <div>
        <h2
          className="font-lora uppercase text-5xl font-semibold text-base-content max-w-md"
          style={{ wordSpacing: "-5px" }}
        >
          Most Booked this season
        </h2>
        <div className="mt-6">
          <PrimaryBtn text="browse all experience" />
        </div>
      </div>
      <div className="mt-32">
        <Image src={sanctuaryImg} />
      </div>
      <div>
        <Image src={lostVoyageImg} />
      </div>
      <div>
        <Image src={mountainsInSwitzerlandImg} />
      </div>
      <div>
        <Image src={lakeElizabethImg} />
      </div>
      <div>
        <Image src={southAfricaImg} />
      </div>
    </div>
  );
}

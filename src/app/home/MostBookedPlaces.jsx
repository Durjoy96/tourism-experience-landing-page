import PrimaryBtn from "@/components/primary-btn";
import React from "react";
import sanctuaryImg from "@/assets/images/sanctuary.jpg";
import KalalauImg from "@/assets/images/kalalau.png";
import mountainsInSwitzerlandImg from "@/assets/images/mountains-in-switzerland.jpg";
import lakeElizabethImg from "@/assets/images/lake-elizabeth.jpg";
import southAfricaImg from "@/assets/images/south-africa.jpg";
import MostBookedPlaceCard from "@/components/most-booked-place-card";

export default function MostBookedPlaces() {
  return (
    <div className="max-w-7xl mx-auto px-5 columns-1 md:columns-2 lg:columns-3">
      <div>
        <h2
          className="font-lora uppercase text-xl md:text-3xl lg:text-5xl font-semibold text-base-content max-w-md"
          style={{ wordSpacing: "-5px" }}
        >
          Most Booked this season
        </h2>
        <div className="mt-4 md:mt-6">
          <PrimaryBtn text="browse all experience" />
        </div>
      </div>
      <div className="mt-8 lg:mt-29">
        <MostBookedPlaceCard
          src={sanctuaryImg}
          size="original"
          placeName="Sanctuary Beneath The Falls"
          rating={4.9}
          reviews={321}
          price={45}
        />
      </div>
      <div className="mt-5 md:mt-4 lg:pt-30">
        <MostBookedPlaceCard
          src={KalalauImg}
          size="short"
          placeName="Kalalau Trail"
          rating={4.6}
          reviews={204}
          price={40}
        />
      </div>
      <div className="pt-5 md:pt-4 lg:pt-4">
        <MostBookedPlaceCard
          src={mountainsInSwitzerlandImg}
          size="short"
          placeName="Mountains In Switzerland"
          rating={4.8}
          reviews={402}
          price={105}
        />
      </div>
      <div className="pt-5 md:pt-4 lg:pt-0">
        <MostBookedPlaceCard
          src={lakeElizabethImg}
          size="short"
          placeName="Lake Elizabeth"
          rating={4.5}
          reviews={207}
          price={70}
        />
      </div>
      <div className="mt-5 md:mt-4 lg:mt-4">
        <MostBookedPlaceCard
          src={southAfricaImg}
          size="short"
          placeName="Mountains in South Africa"
          rating={4.7}
          reviews={195}
          price={80}
        />
      </div>
    </div>
  );
}

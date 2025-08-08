import Image from "next/image";
import React from "react";
import happyMemories from "@/assets/images/happy-memories.png";
import CustomersFeedback from "@/components/customers-feedback";
import WomenCustomer from "@/assets/images/women-customer.jpg";
import MenCustomer from "@/assets/images/men-customer.jpg";
import PrimaryBtn from "@/components/primary-btn";

export default function Stories() {
  return (
    <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
      <div>
        <h2
          className="font-lora uppercase text-2xl md:text-3xl text-base-content font-semibold max-w-xs"
          style={{ wordSpacing: "-5px" }}
        >
          we make journeys unforgettable
        </h2>
        <div className="grid gap-6 md:gap-8 mt-8 md:mt-16">
          <CustomersFeedback
            img={WomenCustomer}
            name="amara t."
            description="Felt like i was hanging out with old friends - expect in a castle in Tuscany."
          />
          <CustomersFeedback
            img={MenCustomer}
            name="Jesse M."
            description="We don't just tour tokyo, we lived it for a day."
          />
        </div>
        <div className="mt-8 md:mt-12">
          <PrimaryBtn text="more stories" />
        </div>
      </div>
      <div className="flex justify-end md:justify-center lg:justify-end">
        <div className="max-w-[300px] md:max-w-md h-[350px] md:h-[448px] relative">
          <Image
            src={happyMemories}
            className="w-full h-full object-cover object-center"
            alt="Happy Memories"
          />
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-primary-content absolute -bottom-[80px] -left-[20px] px-4 md:px-6 py-6 md:py-8 flex flex-col justify-between">
            <span className="text-white font-semibold text-2xl md:text-5xl">
              500k
            </span>
            <span className="text-white font-normal text-xs md:text-sm uppercase">
              more than 500,000 memories made
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

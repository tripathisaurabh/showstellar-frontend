"use client";
import Image from "next/image";
import Container from "../../Container";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

function MainNavHeader() {
  const isMobile = useIsMobile();

  return (
    <Container className="h-20 flex flex-row justify-between items-center">
      <Image
        src="/assets/showstellar_image.webp"
        alt="Show Stellar Logo"
        width={120}
        height={40}
      />
      {isMobile ? (
        <Image
          src="/assets/search_icon_new.png"
          alt="search_icon"
          width={30}
          height={30}
        />
      ) : (
        <Input
          id="input-field-username"
          type="text"
          placeholder="Search"
          className="md:w-60 lg:w-80 bg-[#001739] text-white placeholder-white rounded-l-2xl rounded-r-2xl"
        />
      )}
      <div className="flex flex-row md:gap-4 lg:gap-6 gap-2 items-center">
        <p className="md:text-[18px] lg:text-[20px] text-[16px] font-semibold">
          For Customers
        </p>
        <p className="md:text-[18px] lg:text-[20px] text-[16px] font-semibold">
          For Artsits
        </p>
        <div className="w-11 h-11 flex items-center justify-center object-center">
          <Image
            src="/assets/notification_bell.png"
            alt="notification_bell"
            width={46}
            height={46}
          />
        </div>

        <div className="w-14 h-12.5 rounded-full flex items-center justify-center object-center">
          <Image
            src="/assets/avatar_image.png"
            alt="avatar_image"
            width={56}
            height={50}
          />
        </div>
      </div>
    </Container>
  );
}

export default MainNavHeader;

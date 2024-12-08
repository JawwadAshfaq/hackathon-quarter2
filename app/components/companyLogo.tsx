import React from "react";
import Image from "next/image"; // Import Image component from Next.js

const CompanyLogo = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-6 pt-14 px-20">
      <div className="flex justify-center items-center">
        <Image src="/Logo (3).png" alt="Zaphier Logo" width={100} height={87} />
      </div>
      <div className="flex justify-center items-center gap-15">
        <Image
          src="/Logo (4).png"
          alt="Pipe Drive Logo"
          width={107}
          height={109}
        />
      </div>
      <div className="flex justify-center items-center gap-15">
        <Image
          src="/Logo (5).png"
          alt="Cib Bank Logo"
          width={150}
          height={139}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (6).png"
          alt="Company 4 Logo"
          width={63}
          height={65}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (7).png"
          alt="Burnt Toast Logo"
          width={98}
          height={101}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/Logo (8).png"
          alt="Panda Doc Logo"
          width={113}
          height={115}
        />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/Logo (9).png" alt="Moz Logo" width={84} height={87} />
      </div>
    </div>
  );
};

export default CompanyLogo;

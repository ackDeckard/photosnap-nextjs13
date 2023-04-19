import React from "react";
import LinkArrow from "./LinkArrow";

function InviteBanner() {
  return (
    <section className="grid h-[288px] w-full bg-mobile bg-cover bg-center bg-no-repeat py-16 pl-8 tracking-[3.33px] text-white md:h-[280px] md:grid-cols-[1fr_170px_max-content] md:place-items-center md:bg-tablet md:px-8 lg:bg-desktop lg:px-[170px] xl:grid-cols-[max-content_1fr_max-content]">
      <h4 className="mb-6 max-w-[400px] text-[32px] font-bold uppercase md:text-[40px]">
        We&apos;re in beta. Get your invite today!
      </h4>

      <div className="md:col-start-3">
        <LinkArrow
          linkText="get an invite"
          //justify={"justify-between"}
          whitecolor={true}
        />
      </div>
    </section>
  );
}

export default InviteBanner;

import React from "react";
import { MarketingIcon, MagicIcon, ScheduleIcon } from "../../assets/image";
import Whyrmaxcard from "./Whyrmaxcard.jsx"

const Whyrmax = () => {
  return (
    <section>
      <div className=" container max-w-[88rem] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-[50px] font-bold text-center mt-10">Why Rmax?</h1>
        <p className="text-[18px] text-center mt-4 text-[#6A6A6A]">
          Rmax is designed to simplify and transform the way service businesses
          operate. From onboarding, scheduling and billing to client management,
          payments and growth, Rmax integrates everything in one easy-to-use
          platform connecting all the stake holders
        </p>
      </div>

      <div className="grid max-w-6xl mx-auto grid-cols-3 gap-4  place-items-start mt-20 ">
        <Whyrmaxcard
          Svg={ScheduleIcon}
          tittle="Scheduling"
          desc="Manage appointments, classes, and events, workshops with..."
        />
        <Whyrmaxcard
          tittle="Client Management & CRM"
          desc="Keep track of customer data, preferences, and interactions to.."
        />
        <Whyrmaxcard
          Svg={MagicIcon}
          tittle="AI Powered Insights"
          desc="Know exactly what is happening in business and get actionable..."
        />
        <Whyrmaxcard
          Img={
            "https://s3-alpha-sig.figma.com/img/6fa6/e295/4d0e99797aa4929a2f6f84115cd97695?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hTqduAo3aczm93MFXqJXDhdiQJDF1V25HznBP7eOjkYZKItbz5JIlMaAafO36imUkx5NiG9A0MieppP4tYrEJa0iydJnDfaNih0PIJW5jFGZgz5OcadRnNPN2O3lHHGuiMBkHRNwZlEaZHbwBuuIY94G5jkNgtrLUum~Z-ef690sq~g-pX4gLnR6~APpGOENvVCNQPaWdunxBPlEiU0vS6BZpZbwwTdQqdLezUXxlUEIZ7g4jDtIlAHXZiUrjccRhkOmSiyhGiTcTsUlsNMNPxaDkHfe2PsTwYIhWEE70GKJqFFBy8NuG~9-AL1uZDOeQYGTzFoMOAF6HbgQSKH~Fg__"
          }
          tittle="Biling & Payments"
          desc="Streamline invoicing and payments with automated workflows, reducing... "
        />
        <Whyrmaxcard
          Svg={MarketingIcon}
          tittle="Marketing & Engagement Tools"
          desc="Boost client retention and grow your business with integrated..."
        />
        <Whyrmaxcard
          tittle="Custom Branded website"
          desc="Quest`s Custom Branded Website Builder allows you to create a fully personalized..."
          Img={""}
        />
     

        <Whyrmaxcard
          tittle="Multi Loation Management"
          desc="Manage multiple locations with ease, assigning roles and permissions..."
          />
 
      </div>
    </section>
  );
};

export default Whyrmax;


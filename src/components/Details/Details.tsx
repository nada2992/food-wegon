import { DETAILS } from "@/constants";
import DetailItem from "./DetailItem";

const Details = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {DETAILS.map((item) => (
            <DetailItem
              icon={item.icon}
              title={item.title}
              highlightText={item.highlightText}
              description={item.description}
              place={item.place}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;

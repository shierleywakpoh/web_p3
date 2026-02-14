import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Category } from "@/app/types";
import { getImagaeUrl } from "@/app/lib/api";

type TCategoriesProps = {
  categories: Category[];
};

const CategoriesSection = ({ categories }: TCategoriesProps) => {
  return (
    <section id="category-section" className="container mx-auto pb-10 mt-30 ">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse by Categories</h2>
        <Link href="#" className="flex gap-2  text-primary font-medium">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center size={50}" />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-8 ">
        {categories.map((category) => (
          <div
            className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center"
            key={category._id}
          >
            <div className="self-center">
              <Image
                src={getImagaeUrl(category.imageUrl)}
                width={86}
                height="86"
                alt={category.name}
                className="mb-[10px]"
              />
              <div className="text-primary font-medium text-xl text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

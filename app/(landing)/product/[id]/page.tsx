import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import ProductActions from "../../components/product-detail/product-actions";
import { getProductDetail } from "@/app/services/product.service";
import { getImagaeUrl } from "@/app/lib/api";

export type TPageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetail = async ({ params }: TPageProps) => {
  const { id } = await params;
  const product = await getProductDetail(id);

  return (
    <main className="container mx-auto py-20 my-auto flex gap-15">
      <div className="bg-primary-light aspect-square min-w-125 flex justify-center items-center ">
        <Image
          src={getImagaeUrl(product.imageUrl)}
          alt={product.name}
          width={550}
          height={550}
          className="aspect-square object-contain w-full"
        />
      </div>
      <div className="w-full py-7">
        <h1 className="font-bold text-5xl mb-6 "> {product.name}</h1>
        <div className="bg-primary-light rounded-full py-2 px-6 w-fit text-primary mb-5 ">
          {product.category.name}
        </div>
        <p className=" leading-loose mb-8">{product.description}</p>
        <div className="text-primary text-[32px] font-semibold">
          {priceFormatter(product.price)}
        </div>
        <div className="py-10">
          <ProductActions product={product} stock={product.stock} />
        </div>
      </div>
    </main>
  );
};
export default ProductDetail;

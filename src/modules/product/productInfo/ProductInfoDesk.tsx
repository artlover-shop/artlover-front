import { Product } from '@/types/product';
import ImagePicker from './ImagePicker';
import Characteristics from './Characteristics';
import Benefits from './Benefits';
import IdealFor from './IdealFor';
import FullDescription from './FullDescription';
import DeliveryInfo from './DeliveryInfo';
import OrderProduct from './orderProduct/OrderProduct';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';

interface ProductInfoDeskProps {
  currentProduct: Product;
}

export default function ProductInfoDesk({
  currentProduct,
}: ProductInfoDeskProps) {
  return (
    <div className="hidden md:flex md:gap-x-8 lg:gap-x-[49px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
        className="hidden xl:block absolute top-[-120px] right-[-40px]"
      >
        <Image
          src="/images/productPage/productInfo/figureTopRightDesk.svg"
          alt="background"
          width="119"
          height="186"
        />
      </motion.div>
      <div>
        <ImagePicker currentProduct={currentProduct} />
        <IdealFor currentProduct={currentProduct} />
        <Characteristics currentProduct={currentProduct} />
      </div>
      <div>
        <OrderProduct currentProduct={currentProduct} />
        <FullDescription currentProduct={currentProduct} />
        <DeliveryInfo />
        <Benefits />
      </div>
    </div>
  );
}

import { Product } from '@/types/product';
import ImagePicker from './ImagePicker';
import Characteristics from './Characteristics';
import Benefits from './Benefits';
import IdealFor from './IdealFor';
import FullDescription from './FullDescription';
import DeliveryInfo from './DeliveryInfo';
import OrderProduct from './orderProduct/OrderProduct';

interface ProductInfoMobProps {
  currentProduct: Product;
}

export default function ProductInfoMob({
  currentProduct,
}: ProductInfoMobProps) {
  return (
    <div className="md:hidden">
      <ImagePicker currentProduct={currentProduct} />
      <OrderProduct currentProduct={currentProduct} />
      <FullDescription currentProduct={currentProduct} />
      <DeliveryInfo />
      <Benefits />
      <IdealFor currentProduct={currentProduct} />
      <Characteristics currentProduct={currentProduct} />
    </div>
  );
}

'use client';
import { Form, Formik, FormikHelpers } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import { useTranslations } from 'next-intl';
import MaskedInput from 'react-text-mask';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import {
  fadeInAnimation,
  listVariants,
  listItemVariants,
} from '@/shared/utils/animationVariants';
import { useRouter } from '@/i18n/navigation';
import { CheckoutValidation } from '@/shared/schemas/checkoutFormValidation';
import { handleSubmitForm } from '@/shared/utils/handleSubmitForm';
import { phoneMask } from '@/shared/regex/regex';
import { useCartStore } from '@/shared/store/cartStore';
import { useMonopayBasketOrder } from '@/shared/hooks/useMonopayBasketOrder';
import CustomizedInput from '../../formComponents/CustomizedInput';
import SubmitButton from '../../formComponents/SubmitButton';
import CheckoutSubTitle from './CheckoutSubTitle';
import TipsInputBlock from './TipsInputBlock';
// import GiftHint from '@/modules/checkout/GiftHint';
import RadioButtonInput from '../../formComponents/RadioButtonInput';
import RecipientBlock from './RecipientBlock';
import CartItemsList from './CartItemsList';
import AdditionalOptions from './AdditionalOptions';
import DeliveryBlockUkraine from './DeliveryBlockUkraine';
import DeliveryBlockWorldwide from './DeliveryBlockWorldwide';
import { fetchSanityData } from '@/shared/utils/fetchSanityData';
import { promocodeByCode } from '@/shared/lib/queries';

export interface ValuesCheckoutFormType {
  name: string;
  surname: string;
  email: string;
  phone: string;
  deliveryService: string;
  deliveryType: string;
  city: string;
  country: string;
  branchNumber: string;
  address: string;
  payment: string;
  recipientOption: string;
  recipientName: string;
  recipientSurname: string;
  recipientPhone: string;
  message: string;
  postcard: string;
  promocode: string;
  tips: string;
}

interface CheckoutFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsUnavailable: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  activeTab: string;
  className?: string;
}

export default function CheckoutForm({
  setIsError,
  setIsUnavailable,
  setIsNotificationShown,
  activeTab,
  className = '',
}: CheckoutFormProps) {
  const t = useTranslations();

  const {
    getTotalAmount,
    promocode,
    applyPromocode,
    removePromocode,
    cartItems,
    setTips,
    tips,
  } = useCartStore();

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPromocode, setIsLoadingPromocode] = useState(false);

  const initialValues = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    deliveryService: '',
    deliveryType: activeTab === 'ukraine' ? 'Відділення' : 'Доставка кур’єром',
    city: '',
    branchNumber: '',
    address: '',
    country: '',
    payment: 'Сплатити при отриманні',
    recipientOption: 'Я одержувач',
    recipientName: '',
    recipientSurname: '',
    recipientPhone: '',
    message: '',
    postcard: '',
    promocode: promocode || '',
    tips: tips > 0 ? tips.toString() : '',
  };

  const validationSchema = CheckoutValidation(activeTab);

  const verifyPromo = async (
    values: ValuesCheckoutFormType,
    setFieldError: (
      field: keyof ValuesCheckoutFormType,
      message: string
    ) => void
  ) => {
    try {
      setIsLoadingPromocode(true);
      const promocode = await fetchSanityData(promocodeByCode, {
        code: values.promocode,
      });
      if (promocode) {
        const discount = promocode.discount;
        applyPromocode(values.promocode, discount);
      } else {
        setFieldError('promocode', t('forms.errors.noPromocode'));
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
    } finally {
      setIsLoadingPromocode(false);
    }
  };

  const removePromo = async (
    setFieldValue: (
      field: keyof ValuesCheckoutFormType,
      message: string
    ) => void
  ) => {
    removePromocode();
    setFieldValue('promocode', '');
  };

  const basketOrder = useMonopayBasketOrder();

  const submitForm = async (
    values: ValuesCheckoutFormType,
    formikHelpers: FormikHelpers<ValuesCheckoutFormType>
  ) => {
    setTips(Number(values.tips.trim()));

    await handleSubmitForm<ValuesCheckoutFormType>(
      formikHelpers,
      setIsLoading,
      setIsError,
      setIsUnavailable,
      setIsNotificationShown,
      values,
      router,
      basketOrder
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({
        errors,
        touched,
        dirty,
        isValid,
        values,
        setFieldError,
        setFieldValue,
      }) => (
        <Form
          className={`relative flex flex-col md:flex-row w-full gap-y-6 md:gap-x-4 lg:gap-10 xl:gap-x-15 ${className}`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ scale: 0.9, delay: 1.2 })}
            className="xl:hidden absolute -z-10 top-[167px] left-[-99px]"
          >
            <Image
              src="/images/aboutPage/history/figureLeftMob.svg"
              alt="background"
              width="114"
              height="92"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={listVariants({
              staggerChildren: 0.2,
              delayChildren: 0.4,
            })}
            className="flex flex-col gap-y-6 xl:gap-y-7 md:w-[344px] lg:w-[516px] xl:w-[586px]"
          >
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="emoji"
                title={t('checkoutPage.form.stepOne.title')}
                description={t('checkoutPage.form.stepOne.description')}
              />
              <div className="flex flex-col gap-y-3 xl:gap-y-[14px]">
                <CustomizedInput
                  fieldName="name"
                  placeholder={t('forms.namePlaceholder')}
                  isRequired
                  errors={errors}
                  touched={touched}
                />
                <CustomizedInput
                  fieldName="surname"
                  placeholder={t('forms.surnamePlaceholder')}
                  isRequired
                  errors={errors}
                  touched={touched}
                />
                <CustomizedInput
                  fieldName="email"
                  inputType="email"
                  placeholder={t('forms.email')}
                  isRequired
                  errors={errors}
                  touched={touched}
                />
                <CustomizedInput
                  fieldName="phone"
                  inputType="tel"
                  placeholder={t('forms.phonePlaceholder')}
                  isRequired
                  errors={errors}
                  touched={touched}
                  as={MaskedInput}
                  mask={phoneMask}
                  showIcon={activeTab === 'worldwide'}
                  fieldClassName={`${
                    activeTab === 'worldwide' ? 'pl-12 xl:pl-17' : ''
                  }`}
                />
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="pt-5 pb-2 px-4 xl:px-7 xl:pt-7 xl:pb-4 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="globe"
                title={t('checkoutPage.form.stepTwo.title')}
                description={t('checkoutPage.form.stepTwo.description')}
              />
              {activeTab === 'ukraine' ? (
                <DeliveryBlockUkraine />
              ) : (
                <DeliveryBlockWorldwide />
              )}
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="flex flex-col gap-y-3 xl:gap-y-6 py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <div>
                <CheckoutSubTitle
                  icon="card"
                  title={t('checkoutPage.form.stepThree.title')}
                  description={t('checkoutPage.form.stepThree.description')}
                />
                <RadioButtonInput
                  fieldName="payment"
                  label={t('forms.payByCard')}
                  value="Картою на сайті"
                />
              </div>
              <div className="flex items-center justify-between px-3 xl:px-5 py-2.5 xl:py-[13px] rounded-[6px] border border-gray-light">
                <p className="text-[12px] xl:text-[14px] font-normal leading-[120%]">
                  {t('checkoutPage.form.payBy')}
                </p>
                <Image
                  src="/images/checkoutPage/monoPay.svg"
                  alt="mono pay"
                  width="64"
                  height="19"
                  className="w-16 xl:w-[76px] h-auto"
                />
              </div>
              <RadioButtonInput
                fieldName="payment"
                label={t('forms.cashOnDelivery')}
                value="Сплатити при отриманні"
              />
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="pt-5 pb-2 px-4 xl:px-7 xl:pt-7 xl:pb-4 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="users"
                title={t('checkoutPage.form.stepFour.title')}
                description={t('checkoutPage.form.stepFour.description')}
              />
              <RecipientBlock errors={errors} touched={touched} />
            </motion.div>

            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="pencil"
                title={t('checkoutPage.form.stepFive.title')}
                description={t('checkoutPage.form.stepFive.description')}
              />
              <CustomizedInput
                fieldName="message"
                as="textarea"
                placeholder={t('forms.commentPlaceholder')}
                errors={errors}
                touched={touched}
                fieldClassName="h-[99px] xl:h-[93px] py-3"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={listVariants({
              staggerChildren: 0.2,
              delayChildren: 0.4,
            })}
            className="flex flex-col gap-y-6 xl:gap-y-7 md:w-[344px] lg:w-[404px] xl::w-[454px]"
          >
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="xl:mb-3 py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="shopping"
                title={t('checkoutPage.form.yourOrder')}
              />
              <CartItemsList />
              <CheckoutSubTitle
                icon="gift"
                title={t('checkoutPage.form.addPackaging')}
              />
              <AdditionalOptions />
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="heart"
                title={t('checkoutPage.form.promocode')}
              />
              <CustomizedInput
                fieldName="promocode"
                placeholder={t('forms.promocodePlaceholder')}
                isLoading={isLoadingPromocode}
                errors={errors}
                touched={touched}
              />
              <button
                onClick={
                  promocode
                    ? () => removePromo(setFieldValue)
                    : () => verifyPromo(values, setFieldError)
                }
                type="button"
                className="mt-2 block w-fit ml-auto cursor-pointer text-[12px] xl:text-[14px] font-medium text-orange xl:hover:brightness-125 focus-visible:brightness-125 transition duration-300 ease-in-out"
              >
                {promocode
                  ? t('checkoutPage.form.removePromo')
                  : t('checkoutPage.form.applyPromo')}
              </button>
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <CheckoutSubTitle
                icon="money"
                title={t('checkoutPage.form.tips')}
              />
              <TipsInputBlock errors={errors} touched={touched} />
            </motion.div>
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
              className="flex flex-col gap-y-5 xl:gap-y-4 py-5 px-4 xl:p-7 rounded-[6px] xl:rounded-[8px] border border-dark"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[12px] xl:text-[16px] font-medium leading-[120%]">
                  {t('checkoutPage.form.total')}
                </h3>
                <p className="text-[16px] xl:text-[24px] font-medium leading-[120%]">
                  {getTotalAmount()}
                  {t('checkoutPage.form.hrn')}
                </p>
              </div>
              <SubmitButton
                dirty={dirty}
                isValid={
                  isValid && !!cartItems.length && getTotalAmount() !== 0
                }
                isLoading={isLoading}
                text={t('checkoutPage.form.checkout')}
                className="h-10 md:h-12"
              />
            </motion.div>
            {/* <motion.div
              viewport={{ once: true, amount: 0.2 }}
              variants={listItemVariants}
            >
              <GiftHint />
            </motion.div> */}
          </motion.div>
        </Form>
      )}
    </Formik>
  );
}

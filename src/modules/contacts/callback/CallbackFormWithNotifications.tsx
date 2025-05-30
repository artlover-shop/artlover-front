'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import CallBackForm from '@/shared/components/forms/CallbackForm';
import NotificationPopUp from '@/shared/components/pop-ups/NotificationPopUp';
import Backdrop from '@/shared/components/backdrop/Backdrop';

interface CallBackFormWithNotificationsProps {
  className?: string;
}

export default function CallBackFormWithNotifications({
  className,
}: CallBackFormWithNotificationsProps) {
  const t = useTranslations('popUps.notification');
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ y: 30, delay: 0.8 })}
        className="w-full md:w-[calc(68%-20px)]"
      >
        <CallBackForm
          setIsError={setIsError}
          setIsNotificationShown={setIsNotificationShown}
          className={className}
        />
      </motion.div>
      <NotificationPopUp
        title={isError ? t('error.title') : t('success.title')}
        description={
          isError ? t('error.description') : t('success.description')
        }
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      />
      <Backdrop
        isVisible={isNotificationShown}
        onClick={() => setIsNotificationShown(false)}
      />
    </>
  );
}

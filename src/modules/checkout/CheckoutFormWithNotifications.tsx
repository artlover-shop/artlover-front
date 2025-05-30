'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import NotificationPopUp from '@/shared/components/pop-ups/NotificationPopUp';
import Backdrop from '@/shared/components/backdrop/Backdrop';
import CheckoutForm from '@/shared/components/forms/checkoutForm/CheckoutForm';

interface CheckoutFormWithNotificationsProps {
  activeTab: string;
  className?: string;
}

export default function CheckoutFormWithNotifications({
  activeTab,
  className,
}: CheckoutFormWithNotificationsProps) {
  const t = useTranslations('popUps.notification');
  const [isUnavailable, setIsUnavailable] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <CheckoutForm
        activeTab={activeTab}
        setIsError={setIsError}
        setIsUnavailable={setIsUnavailable}
        setIsNotificationShown={setIsNotificationShown}
        className={className}
      />

      <NotificationPopUp
        title={
          isUnavailable
            ? t('unavailable.title')
            : isError
              ? t('error.title')
              : t('success.title')
        }
        description={
          isUnavailable
            ? t('unavailable.description')
            : isError
              ? t('error.description')
              : t('success.description')
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

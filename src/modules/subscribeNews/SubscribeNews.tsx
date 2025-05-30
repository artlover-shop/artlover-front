'use client';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { useTranslations } from 'next-intl';

import Container from '@/shared/components/container/Container';

import { fadeInAnimation } from '@/shared/utils/animationVariants';
import NotificationPopUp from '@/shared/components/pop-ups/NotificationPopUp';
import Backdrop from '@/shared/components/backdrop/Backdrop';

const SubscribeNews = () => {
  const t = useTranslations();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const data =
      `<b>Заявка "Відстежуйте наші новини"</b>\n` +
      `<b>Email:</b> ${email.trim()}\n`;
    try {
      await axios({
        method: 'post',
        url: '/api/telegram',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setEmail('');
      setIsNotificationShown(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setIsError(true);
      setIsNotificationShown(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({})}
        className={`bg-orange-light py-[32px] xl:pt-[46px] overflow-hidden relative`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="hidden xl:block z-10 absolute top-0 left-0"
        >
          <Image
            src="/images/subscribeNews/figureLeftDesk.svg"
            alt="figure background"
            width="77"
            height="77"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="xl:hidden z-10 absolute top-0 left-0"
        >
          <Image
            src="/images/subscribeNews/figureLeftMob.svg"
            alt="figure background"
            width="38"
            height="24"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="hidden xl:block z-10 absolute top-0 left-[75px]"
        >
          <Image
            src="/images/subscribeNews/secondFigureLeftDesk.svg"
            alt="figure background"
            width="111"
            height="45"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="hidden xl:block z-10 absolute bottom-0 right-0"
        >
          <Image
            src="/images/subscribeNews/figureRightDesk.svg"
            alt="figure background"
            width="94"
            height="95"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="xl:hidden z-10 absolute top-0 right-[20px]"
        >
          <Image
            src="/images/subscribeNews/figureRightMob.svg"
            alt="figure background"
            width="78"
            height="38"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="xl:hidden z-10 absolute top-[25px] right-0"
        >
          <Image
            src="/images/subscribeNews/secondFigureRightMob.svg"
            alt="figure background"
            width="46"
            height="55"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ delay: 1.2, scale: 0.9 })}
          className="xl:hidden z-10 absolute bottom-0 right-0"
        >
          <Image
            src="/images/subscribeNews/thirdFigureRightMob.svg"
            alt="figure background"
            width="66"
            height="37"
          />
        </motion.div>
        <Container>
          <form
            className="xl:flex justify-between items-center"
            onSubmit={handleSubscribe}
          >
            <motion.p
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation({ x: -30 })}
              className="text-white uppercase leading-[160%] text-[20px] xl:text-[24px] font-semibold mb-[24px] xl:mb-0"
            >
              {t('subscribeNews.title')}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation({ x: 30 })}
              className="flex gap-[16px]"
            >
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-[177px] xl:w-[360px] bg-[#FFFFFF57] rounded-[28px] py-[10px] xl:py-[16px] px-[20px] xl:px-[24px] text-[12px] xl:text-[16px] text-white focus:outline-none focus:ring-0"
                placeholder="Email"
                type="email"
                required
              />
              <button
                className="enabled:cursor-pointer rounded-[28px] w-[103px] xl:w-[148px] bg-white text-[12px] xl:text-[16px] xl:hover:bg-orange 
            focus-visible:bg-orange xl:hover:text-white focus-visible:text-white transition duration-300 ease-in-out"
                type="submit"
                disabled={loading}
              >
                {t('subscribeNews.button')}
              </button>
            </motion.div>
          </form>
        </Container>
      </motion.section>
      <NotificationPopUp
        title={
          isError
            ? t('popUps.subscribeNotification.error.title')
            : t('popUps.subscribeNotification.success.title')
        }
        description={
          isError
            ? t('popUps.subscribeNotification.error.description')
            : t('popUps.subscribeNotification.success.description')
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
};

export default SubscribeNews;

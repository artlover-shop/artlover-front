import Callback from '@/modules/contacts/callback/Callback';
import ContactsInfo from '@/modules/contacts/contactsInfo/ContactsInfo';
import Hero from '@/modules/contacts/hero/Hero';
import Loader from '@/shared/components/loader/Loader';
import Socials from '@/shared/components/socials/Socials';
import { Suspense } from 'react';

export default function ContactsPage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <ContactsInfo />
      </Suspense>
      <Callback />
      <Socials />
    </>
  );
}

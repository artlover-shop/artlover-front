import * as motion from 'motion/react-client';
import { fadeInAnimation } from '@/shared/utils/animationVariants';
import Container from '@/shared/components/container/Container';
import { Link } from '@/i18n/navigation';

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
  className?: string;
}

export default function Breadcrumbs({
  crumbs,
  className = '',
}: BreadcrumbsProps) {
  return (
    <Container className={className}>
      <motion.nav
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInAnimation({ x: -30 })}
        aria-label="breadcrumbs"
        className={`flex items-center pb-7 xl:pb-17 xl:pt-3`}
      >
        <ul className="flex items-center flex-wrap">
          {crumbs.map((crumb, index) => (
            <li
              key={crumb.href}
              className={`flex items-center text-[13px] xl:text-[18px] font-light leading-[180%] xl:leading-[120%]`}
            >
              {index === crumbs.length - 1 ? (
                <>
                  <span className={`text-orange font-medium underline`}>
                    {crumb.label}
                  </span>
                </>
              ) : (
                <>
                  <Link
                    href={crumb.href}
                    className="outline-none xl:hover:text-orange focus-visible:text-orange transition duration-300 ease-out"
                  >
                    {crumb.label}
                  </Link>
                  <span className="inline-block mx-2 tab:mx-3">/</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </motion.nav>
    </Container>
  );
}

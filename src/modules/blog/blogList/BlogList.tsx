'use client';
import * as motion from 'motion/react-client';
import {
  listVariants,
  listItemVariants,
} from '@/shared/utils/animationVariants';
import Pagination from '@/shared/components/pagination/Pagination';
import BlogCard from './BlogCard';
import Container from '@/shared/components/container/Container';
import BlogListImages from './BlogListImages';
import { Article } from '@/types/article';

interface BlogPageProps {
  articlesList: Article[];
}

const SECTION_ID = 'blog-page-blog-list';

const ITEMS_PER_PAGE = 4;

export default function BlogList({ articlesList }: BlogPageProps) {
  if (!articlesList) return null;

  return (
    <section id={SECTION_ID} className="pt-8 xl:pt-[59px] pb-20 xl:pb-[140px]">
      <Container className="relative">
        <BlogListImages />
        <Pagination
          items={articlesList}
          scrollTargetId={SECTION_ID}
          useItemsPerPage={() => ITEMS_PER_PAGE}
          renderItems={currentItems => (
            <motion.ul
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={listVariants({
                staggerChildren: 0.4,
                delayChildren: 0.8,
              })}
              id={SECTION_ID}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-6 md:gap-y-12"
            >
              {currentItems.map(article => (
                <motion.li
                  viewport={{ once: true, amount: 0.2 }}
                  variants={listItemVariants}
                  key={article?.id}
                  className="h-full sm:w-[calc(50%-12px)]"
                >
                  <BlogCard article={article} />
                </motion.li>
              ))}
            </motion.ul>
          )}
        />
      </Container>
    </section>
  );
}

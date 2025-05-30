'use client';
import { useState, useEffect } from 'react';
import { useFavoritesStore } from '@/shared/store/favoritesStore';
import Container from '@/shared/components/container/Container';
import NoItems from './NoItems';
import FavoritesList from './FavoritesList';
import FavoritesImages from './FavoritesImages';
import Loader from '@/shared/components/loader/Loader';

const SECTION_ID = 'favorites-page-list';

export default function Favorites() {
  const { favorites } = useFavoritesStore();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <Loader />;

  return (
    <section id={SECTION_ID} className="pt-8 xl:pt-20 pb-20 xl:pb-[140px]">
      <Container className="relative">
        <FavoritesImages />
        {!favorites.length ? (
          <NoItems />
        ) : (
          <FavoritesList favoritesList={favorites} />
        )}
      </Container>
    </section>
  );
}

import create from 'zustand';

export const useStore = create(set => ({
  currentMovieSelect: {
    id: null,
    category: null,
  },
  setCurrentMovieSelect: (id, category) =>
    set({currentMovieSelect: {id, category}}),
}));

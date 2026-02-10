'use client';

import { create } from 'zustand';
import { BattleCard, Stat } from '@/types/card';

interface CardStore {
  card: BattleCard;
  updateTitle: (title: string) => void;
  updateDescription: (description: string) => void;
  updatePoints: (points: number) => void;
  updateStat: (index: number, name: string, value: number) => void;
  updateColor: (colorKey: keyof BattleCard['colors'], value: string) => void;
  updateDimensions: (width: number, height: number) => void;
  resetCard: () => void;
}

const defaultCard: BattleCard = {
  title: 'Battle Card',
  description: 'A powerful card',
  points: 50,
  stats: [
    { name: 'Attack', value: 7 },
    { name: 'Defense', value: 5 },
    { name: 'Speed', value: 6 },
  ],
  colors: {
    background: '#1e293b',
    text: '#f1f5f9',
    accent: '#3b82f6',
    border: '#64748b',
  },
  dimensions: {
    width: 300,
    height: 400,
  },
};

export const useCardStore = create<CardStore>((set) => ({
  card: defaultCard,

  updateTitle: (title) =>
    set((state) => ({
      card: { ...state.card, title },
    })),

  updateDescription: (description) =>
    set((state) => ({
      card: { ...state.card, description },
    })),

  updatePoints: (points) =>
    set((state) => ({
      card: { ...state.card, points },
    })),

  updateStat: (index, name, value) =>
    set((state) => {
      const newStats = [...state.card.stats];
      newStats[index] = { name, value };
      return { card: { ...state.card, stats: newStats } };
    }),

  updateColor: (colorKey, value) =>
    set((state) => ({
      card: {
        ...state.card,
        colors: {
          ...state.card.colors,
          [colorKey]: value,
        },
      },
    })),

  updateDimensions: (width, height) =>
    set((state) => ({
      card: {
        ...state.card,
        dimensions: { width, height },
      },
    })),

  resetCard: () =>
    set(() => ({
      card: defaultCard,
    })),
}));

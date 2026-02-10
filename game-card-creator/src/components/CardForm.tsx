'use client';

import { useCardStore } from '@/store/cardStore';

export function CardForm() {
  const {
    card,
    updateTitle,
    updateDescription,
    updatePoints,
    updateStat,
    updateColor,
    updateDimensions,
    resetCard,
  } = useCardStore();

  return (
    <form className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg shadow-md max-h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
        Card Settings
      </h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Title
        </label>
        <input
          type="text"
          value={card.title}
          onChange={(e) => updateTitle(e.target.value)}
          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Description
        </label>
        <textarea
          value={card.description}
          onChange={(e) => updateDescription(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Points */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Points
        </label>
        <input
          type="number"
          value={card.points}
          onChange={(e) => updatePoints(parseInt(e.target.value) || 0)}
          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Stats */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
          Stats
        </h3>
        {card.stats.map((stat, index) => (
          <div key={index} className="flex gap-2 mb-3">
            <input
              type="text"
              value={stat.name}
              onChange={(e) => updateStat(index, e.target.value, stat.value)}
              placeholder="Stat name"
              className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              value={stat.value}
              onChange={(e) => updateStat(index, stat.name, parseInt(e.target.value) || 0)}
              placeholder="Value"
              className="w-16 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      {/* Colors */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
          Colors
        </h3>
        {(
          [
            { key: 'background' as const, label: 'Background' },
            { key: 'text' as const, label: 'Text' },
            { key: 'accent' as const, label: 'Accent' },
            { key: 'border' as const, label: 'Border' },
          ] as const
        ).map(({ key, label }) => (
          <div key={key} className="mb-3">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              {label}
            </label>
            <div className="flex gap-3 items-center">
              <input
                type="color"
                value={card.colors[key]}
                onChange={(e) => updateColor(key, e.target.value)}
                className="h-10 w-16 rounded cursor-pointer border border-slate-300"
              />
              <input
                type="text"
                value={card.colors[key]}
                onChange={(e) => updateColor(key, e.target.value)}
                className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dimensions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">
          Dimensions
        </h3>
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Width (px)
            </label>
            <input
              type="number"
              value={card.dimensions.width}
              onChange={(e) =>
                updateDimensions(parseInt(e.target.value) || 300, card.dimensions.height)
              }
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Height (px)
            </label>
            <input
              type="number"
              value={card.dimensions.height}
              onChange={(e) =>
                updateDimensions(card.dimensions.width, parseInt(e.target.value) || 400)
              }
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <button
        type="button"
        onClick={resetCard}
        className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors"
      >
        Reset to Defaults
      </button>
    </form>
  );
}

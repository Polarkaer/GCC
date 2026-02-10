'use client';

import { useCardStore } from '@/store/cardStore';

export function CardPreview() {
  const { card } = useCardStore();

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200 dark:bg-slate-800 p-6">
      <div
        className="rounded-lg shadow-2xl overflow-hidden border-4 transition-all"
        style={{
          width: `${card.dimensions.width}px`,
          height: `${card.dimensions.height}px`,
          backgroundColor: card.colors.background,
          borderColor: card.colors.border,
        }}
      >
        {/* Card Content */}
        <div className="h-full flex flex-col p-4 text-center">
          {/* Title */}
          <h1
            className="text-2xl font-bold mb-3 line-clamp-2"
            style={{ color: card.colors.text }}
          >
            {card.title}
          </h1>

          {/* Points Badge */}
          <div
            className="inline-block mb-3 px-3 py-1 rounded-full font-bold text-sm mx-auto"
            style={{
              backgroundColor: card.colors.accent,
              color: card.colors.background,
            }}
          >
            {card.points} pts
          </div>

          {/* Description */}
          <p
            className="text-sm mb-4 flex-grow line-clamp-3 opacity-90"
            style={{ color: card.colors.text }}
          >
            {card.description}
          </p>

          {/* Divider */}
          <div
            className="h-px mb-3"
            style={{ backgroundColor: card.colors.accent }}
          ></div>

          {/* Stats */}
          <div className="flex justify-around gap-1">
            {card.stats.map((stat, index) => (
              <div
                key={index}
                className="flex-1 p-2 rounded text-xs"
                style={{
                  backgroundColor: `${card.colors.accent}20`,
                  border: `1px solid ${card.colors.accent}`,
                }}
              >
                <div
                  className="font-semibold mb-1"
                  style={{ color: card.colors.accent }}
                >
                  {stat.name}
                </div>
                <div
                  className="text-lg font-bold"
                  style={{ color: card.colors.text }}
                >
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

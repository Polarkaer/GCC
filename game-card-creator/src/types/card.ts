export interface Stat {
  name: string;
  value: number;
}

export interface TextField {
  id: string;
  label: string;
  value: string;
}

export interface BattleCard {
  title: string;
  description: string;
  points: number;
  stats: Stat[];
  colors: {
    background: string;
    text: string;
    accent: string;
    border: string;
  };
  dimensions: {
    width: number;
    height: number;
  };
}

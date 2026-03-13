import { RiskLevel, BadgeType } from '@/lib/types';

interface RiskBadgeProps {
  level: RiskLevel;
  size?: 'sm' | 'md';
}

export function RiskBadge({ level, size = 'sm' }: RiskBadgeProps) {
  const cls = level === 'ALTO' ? 'badge-risk-high' : level === 'MÉDIO' ? 'badge-risk-medium' : 'badge-risk-low';
  const sz = size === 'sm' ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-1';
  return <span className={`${cls} ${sz} rounded font-mono-data font-semibold inline-block`}>{level}</span>;
}

interface MethodBadgeProps {
  badge: BadgeType;
}

export function MethodBadge({ badge }: MethodBadgeProps) {
  const colors: Record<BadgeType, string> = {
    'FORTE': 'badge-risk-high',
    'MÉDIA': 'badge-risk-medium',
    'FRACA': 'badge-risk-low',
    'HIPÓTESE': 'bg-primary/20 text-primary border border-primary/30',
    'REQUER AUDITORIA': 'bg-warning/20 text-warning border border-warning/30',
  };
  return <span className={`${colors[badge]} text-[10px] px-1.5 py-0.5 rounded font-mono-data font-semibold inline-block`}>{badge}</span>;
}

interface ScoreBarProps {
  value: number;
  label: string;
  color?: 'risk' | 'primary';
}

export function ScoreBar({ value, label, color = 'risk' }: ScoreBarProps) {
  const barColor = color === 'primary' ? 'bg-primary' :
    value >= 70 ? 'bg-destructive' : value >= 50 ? 'bg-warning' : 'bg-success';
  
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-muted-foreground">{label}</span>
        <span className="text-[11px] font-mono-data text-foreground">{value}</span>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div className={`h-full ${barColor} rounded-full transition-all duration-500`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

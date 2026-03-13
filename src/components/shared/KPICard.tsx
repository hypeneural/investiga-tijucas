import { AlertTriangle, Users, Building2, TrendingUp, Shield, Network, Eye } from 'lucide-react';
import { formatCompact } from '@/lib/mocks/data';

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: 'alert' | 'users' | 'building' | 'trending' | 'shield' | 'network' | 'eye';
  variant?: 'default' | 'danger' | 'warning' | 'success';
}

const icons = {
  alert: AlertTriangle,
  users: Users,
  building: Building2,
  trending: TrendingUp,
  shield: Shield,
  network: Network,
  eye: Eye,
};

export function KPICard({ title, value, subtitle, icon, variant = 'default' }: KPICardProps) {
  const Icon = icons[icon];
  const glowClass = variant === 'danger' ? 'glow-risk-high' : variant === 'warning' ? 'glow-risk-medium' : variant === 'success' ? 'glow-success' : '';
  const iconColor = variant === 'danger' ? 'text-destructive' : variant === 'warning' ? 'text-warning' : variant === 'success' ? 'text-success' : 'text-primary';

  return (
    <div className={`card-surface p-3 ${glowClass} transition-all duration-150 hover:border-primary/40`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{title}</p>
          <p className="text-xl font-bold font-mono-data text-foreground">{value}</p>
          {subtitle && <p className="text-[11px] text-muted-foreground">{subtitle}</p>}
        </div>
        <Icon className={`h-4 w-4 ${iconColor} mt-0.5`} />
      </div>
    </div>
  );
}

interface KPIRowProps {
  kpis: KPICardProps[];
}

export function KPIRow({ kpis }: KPIRowProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
      {kpis.map((kpi, i) => (
        <KPICard key={i} {...kpi} />
      ))}
    </div>
  );
}

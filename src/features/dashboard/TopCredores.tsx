import { credores } from '@/lib/mocks/data';
import { formatCompact } from '@/lib/mocks/data';
import { RiskBadge } from '@/components/shared/RiskBadge';

export function TopCredores() {
  const sorted = [...credores].sort((a, b) => b.totalRecebido - a.totalRecebido).slice(0, 8);

  return (
    <div className="card-surface p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Top Credores</h3>
        <span className="text-[10px] text-muted-foreground font-mono-data">{credores.length} registros</span>
      </div>
      <div className="space-y-1.5 scrollbar-thin max-h-[350px] overflow-y-auto">
        {sorted.map((c, i) => {
          const maxVal = sorted[0].totalRecebido;
          const pct = (c.totalRecebido / maxVal) * 100;
          return (
            <div key={c.id} className="relative p-2 rounded-md hover:bg-secondary/50 transition-colors cursor-pointer">
              <div className="absolute inset-0 rounded-md overflow-hidden">
                <div
                  className={`h-full ${c.riskLevel === 'ALTO' ? 'bg-destructive/10' : c.riskLevel === 'MÉDIO' ? 'bg-warning/10' : 'bg-success/10'}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-[10px] font-mono-data text-muted-foreground w-3">{i + 1}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-medium text-foreground truncate">{c.nome}</span>
                      <span className="text-[10px] text-muted-foreground">{c.tipo}</span>
                    </div>
                    <span className="text-[10px] font-mono-data text-muted-foreground">{c.cnpjCpf}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <RiskBadge level={c.riskLevel} />
                  <span className="text-xs font-mono-data font-semibold text-foreground">{formatCompact(c.totalRecebido)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

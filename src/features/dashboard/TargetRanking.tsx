import { Target } from '@/lib/types';
import { RiskBadge, ScoreBar, MethodBadge } from '@/components/shared/RiskBadge';
import { formatBRL } from '@/lib/mocks/data';
import { useNavigate } from 'react-router-dom';

interface TargetRankingProps {
  targets: Target[];
  limit?: number;
}

export function TargetRanking({ targets, limit = 10 }: TargetRankingProps) {
  const navigate = useNavigate();
  const sorted = [...targets].sort((a, b) => b.riskFinanceiro - a.riskFinanceiro).slice(0, limit);

  return (
    <div className="card-surface p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Ranking de Risco</h3>
        <span className="text-[10px] text-muted-foreground font-mono-data">TOP {limit}</span>
      </div>
      <div className="space-y-1.5 scrollbar-thin max-h-[400px] overflow-y-auto">
        {sorted.map((t, i) => (
          <div
            key={t.id}
            onClick={() => navigate(`/alvo/${t.id}`)}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary/50 cursor-pointer transition-colors duration-100 group"
          >
            <span className="text-[10px] font-mono-data text-muted-foreground w-4">{i + 1}.</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-foreground truncate">{t.nome}</span>
                <RiskBadge level={t.riskLevel} />
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-muted-foreground">{t.cargo}</span>
                <span className="text-[10px] text-muted-foreground">•</span>
                <span className="text-[10px] text-muted-foreground">{t.totalAlertas} alertas</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-0.5">
              <div className="flex gap-1">
                {t.badges.slice(0, 2).map((b, j) => <MethodBadge key={j} badge={b} />)}
              </div>
              <span className="text-[10px] font-mono-data text-muted-foreground">{t.totalConexoes} conexões</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

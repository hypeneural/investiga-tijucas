import { alerts } from '@/lib/mocks/data';
import { RiskBadge, MethodBadge } from '@/components/shared/RiskBadge';
import { formatCompact } from '@/lib/mocks/data';
import { AlertTriangle, ChevronRight } from 'lucide-react';

interface AlertsListProps {
  limit?: number;
  onAlertClick?: (alertId: string) => void;
}

const tipoLabels: Record<string, string> = {
  fracionamento: 'Fracionamento',
  pagamento_direto: 'Pagamento Direto',
  nucleo_familiar: 'Núcleo Familiar',
  anomalia_fim_ano: 'Anomalia Fim de Ano',
  sincronicidade: 'Sincronicidade',
  credor_transversal: 'Credor Transversal',
  desvio_funcional: 'Desvio Funcional',
  societario: 'Societário',
};

export function AlertsList({ limit = 6, onAlertClick }: AlertsListProps) {
  const sorted = [...alerts].sort((a, b) => {
    const riskOrder = { 'ALTO': 0, 'MÉDIO': 1, 'BAIXO': 2 };
    return riskOrder[a.riskLevel] - riskOrder[b.riskLevel];
  }).slice(0, limit);

  return (
    <div className="card-surface p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <h3 className="text-sm font-semibold text-foreground">Alertas Críticos</h3>
        </div>
        <span className="text-[10px] text-muted-foreground font-mono-data">{alerts.length} total</span>
      </div>
      <div className="space-y-1.5 scrollbar-thin max-h-[400px] overflow-y-auto">
        {sorted.map((a) => (
          <div
            key={a.id}
            onClick={() => onAlertClick?.(a.id)}
            className={`p-2.5 rounded-md cursor-pointer transition-all duration-100 hover:bg-secondary/50 border-l-2 ${
              a.riskLevel === 'ALTO' ? 'border-l-destructive' : a.riskLevel === 'MÉDIO' ? 'border-l-warning' : 'border-l-success'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-semibold text-foreground">{a.titulo}</span>
                  <RiskBadge level={a.riskLevel} />
                  <MethodBadge badge={a.badge} />
                </div>
                <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-2">{a.descricao}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono-data text-primary">{tipoLabels[a.tipo]}</span>
                  <span className="text-[10px] text-muted-foreground">•</span>
                  <span className="text-[10px] font-mono-data text-muted-foreground">{a.dataDeteccao}</span>
                  {a.valor && (
                    <>
                      <span className="text-[10px] text-muted-foreground">•</span>
                      <span className="text-[10px] font-mono-data text-warning">{formatCompact(a.valor)}</span>
                    </>
                  )}
                </div>
              </div>
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground mt-1 flex-shrink-0" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

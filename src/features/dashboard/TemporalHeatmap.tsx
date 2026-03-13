import { heatmapData } from '@/lib/mocks/data';

const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export function TemporalHeatmap() {
  const anos = [...new Set(heatmapData.map(h => h.ano))].sort();
  const maxEventos = Math.max(...heatmapData.map(h => h.eventos));

  const getIntensity = (eventos: number) => {
    const pct = eventos / maxEventos;
    if (pct >= 0.8) return 'bg-destructive/80';
    if (pct >= 0.6) return 'bg-destructive/50';
    if (pct >= 0.4) return 'bg-warning/50';
    if (pct >= 0.2) return 'bg-warning/30';
    return 'bg-success/20';
  };

  return (
    <div className="card-surface p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Heatmap Temporal de Eventos Suspeitos</h3>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <span className="w-3 h-3 rounded-sm bg-success/20" /> Baixo
          <span className="w-3 h-3 rounded-sm bg-warning/30" />
          <span className="w-3 h-3 rounded-sm bg-warning/50" />
          <span className="w-3 h-3 rounded-sm bg-destructive/50" />
          <span className="w-3 h-3 rounded-sm bg-destructive/80" /> Alto
        </div>
      </div>
      <div className="space-y-2">
        {anos.map(ano => (
          <div key={ano} className="flex items-center gap-2">
            <span className="text-[10px] font-mono-data text-muted-foreground w-8">{ano}</span>
            <div className="flex gap-1 flex-1">
              {meses.map((_, mesIdx) => {
                const cell = heatmapData.find(h => h.ano === ano && h.mes === mesIdx + 1);
                if (!cell) return <div key={mesIdx} className="flex-1 h-8 rounded-sm bg-secondary/20" />;
                return (
                  <div
                    key={mesIdx}
                    className={`flex-1 h-8 rounded-sm ${getIntensity(cell.eventos)} flex items-center justify-center cursor-pointer hover:ring-1 hover:ring-primary/50 transition-all`}
                    title={`${meses[mesIdx]}/${ano}: ${cell.eventos} eventos`}
                  >
                    <span className="text-[9px] font-mono-data text-foreground/80">{cell.eventos}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="flex gap-1 ml-10">
          {meses.map(m => (
            <div key={m} className="flex-1 text-center text-[9px] text-muted-foreground">{m}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

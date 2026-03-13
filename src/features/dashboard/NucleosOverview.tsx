import { nucleosFamiliares } from '@/lib/mocks/data';
import { MethodBadge } from '@/components/shared/RiskBadge';
import { Users } from 'lucide-react';

export function NucleosOverview() {
  return (
    <div className="card-surface p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Núcleos Familiares</h3>
        </div>
        <span className="text-[10px] text-muted-foreground font-mono-data">{nucleosFamiliares.length} identificados</span>
      </div>
      <div className="space-y-2">
        {nucleosFamiliares.map(nf => (
          <div key={nf.id} className="p-2.5 rounded-md bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-foreground">NÚCLEO {nf.sobrenome}</span>
                <MethodBadge badge={nf.forca} />
              </div>
              <span className="text-[10px] font-mono-data text-muted-foreground">{nf.membros.length} membros</span>
            </div>
            <div className="space-y-0.5">
              {nf.membros.map((m, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px]">
                  <span className="text-foreground">{m.nome}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{m.cargo}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-primary text-[10px] font-mono-data">{m.orgao}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

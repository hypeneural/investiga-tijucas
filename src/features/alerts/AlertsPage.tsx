import { useState } from 'react';
import { Alert } from '@/lib/types';
import { alerts } from '@/lib/mocks/data';
import { RiskBadge, MethodBadge } from '@/components/shared/RiskBadge';
import { formatBRL } from '@/lib/mocks/data';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { AlertTriangle, Search, Filter } from 'lucide-react';

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

export function AlertsPage() {
  const [selected, setSelected] = useState<Alert | null>(null);
  const [filterTipo, setFilterTipo] = useState<string>('todos');
  const [filterRisk, setFilterRisk] = useState<string>('todos');
  const [search, setSearch] = useState('');

  const tipos = ['todos', ...new Set(alerts.map(a => a.tipo))];
  const risks = ['todos', 'ALTO', 'MÉDIO', 'BAIXO'];

  const filtered = alerts.filter(a => {
    if (filterTipo !== 'todos' && a.tipo !== filterTipo) return false;
    if (filterRisk !== 'todos' && a.riskLevel !== filterRisk) return false;
    if (search && !a.titulo.toLowerCase().includes(search.toLowerCase()) && !a.descricao.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <h1 className="text-lg font-bold text-foreground">Central de Alertas</h1>
        </div>
        <span className="text-xs font-mono-data text-muted-foreground">{filtered.length} de {alerts.length}</span>
      </div>

      {/* Filters */}
      <div className="card-surface p-3 flex flex-wrap gap-2 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar alertas..."
            className="w-full bg-secondary/50 border border-border rounded-md pl-7 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex items-center gap-1">
          <Filter className="h-3.5 w-3.5 text-muted-foreground" />
          <select
            value={filterTipo}
            onChange={e => setFilterTipo(e.target.value)}
            className="bg-secondary/50 border border-border rounded-md px-2 py-1.5 text-xs text-foreground focus:outline-none"
          >
            {tipos.map(t => <option key={t} value={t}>{t === 'todos' ? 'Todos os tipos' : tipoLabels[t] || t}</option>)}
          </select>
          <select
            value={filterRisk}
            onChange={e => setFilterRisk(e.target.value)}
            className="bg-secondary/50 border border-border rounded-md px-2 py-1.5 text-xs text-foreground focus:outline-none"
          >
            {risks.map(r => <option key={r} value={r}>{r === 'todos' ? 'Todos os riscos' : r}</option>)}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-[10px] uppercase tracking-wider text-muted-foreground font-semibold p-2.5">Título</th>
                <th className="text-left text-[10px] uppercase tracking-wider text-muted-foreground font-semibold p-2.5">Tipo</th>
                <th className="text-left text-[10px] uppercase tracking-wider text-muted-foreground font-semibold p-2.5">Risco</th>
                <th className="text-left text-[10px] uppercase tracking-wider text-muted-foreground font-semibold p-2.5">Evidência</th>
                <th className="text-right text-[10px] uppercase tracking-wider text-muted-foreground font-semibold p-2.5">Valor</th>
                <th className="text-left text-[10px] uppercase tracking-wider text-muted-foreground font-semibold p-2.5">Data</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(a => (
                <tr
                  key={a.id}
                  onClick={() => setSelected(a)}
                  className="border-b border-border/50 hover:bg-secondary/30 cursor-pointer transition-colors"
                >
                  <td className="p-2.5">
                    <span className="text-xs font-medium text-foreground">{a.titulo}</span>
                  </td>
                  <td className="p-2.5">
                    <span className="text-[10px] font-mono-data text-primary">{tipoLabels[a.tipo]}</span>
                  </td>
                  <td className="p-2.5"><RiskBadge level={a.riskLevel} /></td>
                  <td className="p-2.5"><MethodBadge badge={a.badge} /></td>
                  <td className="p-2.5 text-right">
                    <span className="text-xs font-mono-data text-foreground">{a.valor ? formatBRL(a.valor) : '—'}</span>
                  </td>
                  <td className="p-2.5">
                    <span className="text-[10px] font-mono-data text-muted-foreground">{a.dataDeteccao}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Drawer */}
      <Sheet open={!!selected} onOpenChange={() => setSelected(null)}>
        <SheetContent className="bg-card border-l border-border w-full sm:max-w-[600px] overflow-y-auto scrollbar-thin">
          {selected && (
            <>
              <SheetHeader>
                <SheetTitle className="text-foreground flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  {selected.titulo}
                </SheetTitle>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <div className="flex gap-2 flex-wrap">
                  <RiskBadge level={selected.riskLevel} size="md" />
                  <MethodBadge badge={selected.badge} />
                  <span className="text-xs font-mono-data text-primary px-2 py-1 bg-primary/10 rounded">{tipoLabels[selected.tipo]}</span>
                </div>
                <p className="text-sm text-muted-foreground">{selected.descricao}</p>
                {selected.valor && (
                  <div className="card-surface p-3">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Valor envolvido</span>
                    <p className="text-lg font-mono-data font-bold text-warning">{formatBRL(selected.valor)}</p>
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-2">Evidências</h4>
                  <ul className="space-y-1">
                    {selected.evidencias.map((ev, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">▸</span>
                        <span className="font-mono-data">{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-surface p-3 border-l-2 border-l-primary">
                  <h4 className="text-xs font-semibold text-foreground mb-1">Como Investigar</h4>
                  <p className="text-xs text-muted-foreground">{selected.comoInvestigar}</p>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground font-mono-data">Detectado em: {selected.dataDeteccao}</span>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

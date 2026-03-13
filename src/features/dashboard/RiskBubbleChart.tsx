import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { targets } from '@/lib/mocks/data';

export function RiskBubbleChart() {
  const data = targets.slice(0, 12).map(t => ({
    nome: t.nome.split(' ').slice(0, 2).join(' '),
    riskFin: t.riskFinanceiro,
    riskRel: t.riskRelacional,
    evidencia: t.evidencia,
    riskLevel: t.riskLevel,
  }));

  const getColor = (level: string) => level === 'ALTO' ? 'hsl(0, 72%, 51%)' : level === 'MÉDIO' ? 'hsl(38, 92%, 50%)' : 'hsl(160, 64%, 43%)';

  return (
    <div className="card-surface p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Risco Financeiro × Relacional</h3>
        <div className="flex gap-2">
          <span className="flex items-center gap-1 text-[10px]"><span className="w-2 h-2 rounded-full bg-destructive" /> Alto</span>
          <span className="flex items-center gap-1 text-[10px]"><span className="w-2 h-2 rounded-full bg-warning" /> Médio</span>
          <span className="flex items-center gap-1 text-[10px]"><span className="w-2 h-2 rounded-full bg-success" /> Baixo</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <ScatterChart margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 17%)" />
          <XAxis type="number" dataKey="riskFin" name="Risco Financeiro" domain={[20, 100]} tick={{ fontSize: 10, fill: 'hsl(215, 25%, 63%)' }} label={{ value: 'Financeiro', position: 'bottom', fontSize: 10, fill: 'hsl(215, 25%, 63%)' }} />
          <YAxis type="number" dataKey="riskRel" name="Risco Relacional" domain={[20, 100]} tick={{ fontSize: 10, fill: 'hsl(215, 25%, 63%)' }} label={{ value: 'Relacional', angle: -90, position: 'insideLeft', fontSize: 10, fill: 'hsl(215, 25%, 63%)' }} />
          <Tooltip
            contentStyle={{ background: 'hsl(217, 53%, 10%)', border: '1px solid hsl(217, 33%, 17%)', borderRadius: 6, fontSize: 11 }}
            formatter={(v: number, name: string) => [v, name]}
            labelFormatter={(_, payload) => payload?.[0]?.payload?.nome || ''}
          />
          <Scatter data={data} fill="hsl(199, 89%, 60%)">
            {data.map((entry, idx) => (
              <Cell key={idx} fill={getColor(entry.riskLevel)} r={Math.max(6, entry.evidencia / 8)} />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

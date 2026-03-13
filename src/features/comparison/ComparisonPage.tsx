import { useState } from 'react';
import { targets, formatBRL } from '@/lib/mocks/data';
import { Target } from '@/lib/types';
import { RiskBadge, ScoreBar, MethodBadge } from '@/components/shared/RiskBadge';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { GitCompare } from 'lucide-react';

const COLORS = ['#38BDF8', '#EF4444', '#F59E0B', '#10B981'];

export function ComparisonPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['t1', 't3', 't4']);

  const toggle = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const selected = targets.filter(t => selectedIds.includes(t.id));

  const radarData = [
    { metric: 'Financeiro', ...Object.fromEntries(selected.map(t => [t.nome.split(' ')[0], t.riskFinanceiro])) },
    { metric: 'Relacional', ...Object.fromEntries(selected.map(t => [t.nome.split(' ')[0], t.riskRelacional])) },
    { metric: 'Evidência', ...Object.fromEntries(selected.map(t => [t.nome.split(' ')[0], t.evidencia])) },
    { metric: 'Conexões', ...Object.fromEntries(selected.map(t => [t.nome.split(' ')[0], t.totalConexoes])) },
    { metric: 'Alertas', ...Object.fromEntries(selected.map(t => [t.nome.split(' ')[0], t.totalAlertas * 10])) },
  ];

  const barData = selected.map(t => ({
    nome: t.nome.split(' ').slice(0, 2).join(' '),
    financeiro: t.riskFinanceiro,
    relacional: t.riskRelacional,
    evidencia: t.evidencia,
  }));

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <GitCompare className="h-5 w-5 text-primary" />
        <h1 className="text-lg font-bold text-foreground">Comparador de Alvos</h1>
      </div>

      {/* Selector */}
      <div className="card-surface p-3">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Selecione até 3 alvos para comparar</p>
        <div className="flex flex-wrap gap-1.5">
          {targets.slice(0, 15).map(t => (
            <button
              key={t.id}
              onClick={() => toggle(t.id)}
              className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${
                selectedIds.includes(t.id) ? 'bg-primary text-primary-foreground' : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
              }`}
            >
              {t.nome.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>
      </div>

      {selected.length >= 2 && (
        <>
          {/* Side by side cards */}
          <div className={`grid gap-3 ${selected.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
            {selected.map((t, i) => (
              <div key={t.id} className="card-surface p-4 space-y-3" style={{ borderTopColor: COLORS[i], borderTopWidth: 3 }}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-foreground">{t.nome}</h3>
                    <RiskBadge level={t.riskLevel} />
                  </div>
                  <p className="text-[10px] text-muted-foreground">{t.cargo} — {t.orgao}</p>
                </div>
                <ScoreBar value={t.riskFinanceiro} label="Financeiro" />
                <ScoreBar value={t.riskRelacional} label="Relacional" />
                <ScoreBar value={t.evidencia} label="Evidência" />
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>{t.totalConexoes} conexões</span>
                  <span>{t.totalAlertas} alertas</span>
                </div>
                <div className="flex gap-1 flex-wrap">
                  {t.badges.map((b, j) => <MethodBadge key={j} badge={b} />)}
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">Núcleos: </span>
                  {t.nucleosFamiliares.map((n, j) => (
                    <span key={j} className="text-[10px] font-mono-data text-primary mr-1">{n}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Radar */}
          <div className="card-surface p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">Comparação Radar</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(217, 33%, 17%)" />
                <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: 'hsl(215, 25%, 63%)' }} />
                {selected.map((t, i) => (
                  <Radar key={t.id} name={t.nome.split(' ')[0]} dataKey={t.nome.split(' ')[0]} stroke={COLORS[i]} fill={COLORS[i]} fillOpacity={0.15} strokeWidth={2} />
                ))}
                <Legend wrapperStyle={{ fontSize: 11 }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Bar comparison */}
          <div className="card-surface p-4">
            <h3 className="text-sm font-semibold text-foreground mb-3">Scores Lado a Lado</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <XAxis dataKey="nome" tick={{ fontSize: 10, fill: 'hsl(215, 25%, 63%)' }} />
                <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: 'hsl(215, 25%, 63%)' }} />
                <Tooltip contentStyle={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: 6, fontSize: 11 }} />
                <Bar dataKey="financeiro" name="Financeiro" fill="#EF4444" radius={[4, 4, 0, 0]} />
                <Bar dataKey="relacional" name="Relacional" fill="#38BDF8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="evidencia" name="Evidência" fill="#F59E0B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}

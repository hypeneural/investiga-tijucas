import { useParams, useNavigate } from 'react-router-dom';
import { targets, credores, alerts, nucleosFamiliares, formatBRL, formatCompact } from '@/lib/mocks/data';
import { RiskBadge, MethodBadge, ScoreBar } from '@/components/shared/RiskBadge';
import { TargetTree } from './TargetTree';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowLeft, Shield, Users, AlertTriangle, Building2, CreditCard } from 'lucide-react';

const COLORS = ['#38BDF8', '#EF4444', '#F59E0B', '#10B981', '#A78BFA', '#F97316', '#14B8A6', '#64748B'];

export function TargetDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const target = targets.find(t => t.id === id);
  if (!target) return <div className="text-foreground p-8">Alvo não encontrado.</div>;

  const relatedCredores = credores.filter(c => c.alvosRelacionados.includes(target.id));
  const relatedAlerts = alerts.filter(a => a.alvos.includes(target.id));
  const relatedNucleos = nucleosFamiliares.filter(nf => nf.alvosRelacionados.includes(target.id));

  const credorChartData = relatedCredores.map(c => ({ name: c.nome.split(' ').slice(0, 2).join(' '), valor: c.totalRecebido }));
  const pieData = relatedCredores.map(c => ({ name: c.nome.split(' ').slice(0, 2).join(' '), value: c.totalRecebido }));

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="card-surface p-4">
        <div className="flex items-start gap-3">
          <button onClick={() => navigate(-1)} className="mt-1 p-1 rounded hover:bg-secondary/50 transition-colors">
            <ArrowLeft className="h-4 w-4 text-muted-foreground" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-lg font-bold text-foreground">{target.nome}</h1>
              <RiskBadge level={target.riskLevel} size="md" />
              {target.badges.map((b, i) => <MethodBadge key={i} badge={b} />)}
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{target.cargo} — {target.orgao} — Mandato {target.mandato}</p>
          </div>
        </div>
      </div>

      {/* Score Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {[
          { label: 'Risco Financeiro', value: target.riskFinanceiro, icon: Shield, color: target.riskFinanceiro >= 70 ? 'text-destructive' : 'text-warning' },
          { label: 'Risco Relacional', value: target.riskRelacional, icon: Users, color: target.riskRelacional >= 70 ? 'text-destructive' : 'text-warning' },
          { label: 'Evidência', value: target.evidencia, icon: Shield, color: target.evidencia >= 60 ? 'text-destructive' : 'text-warning' },
          { label: 'Conexões', value: target.totalConexoes, icon: Building2, color: 'text-primary' },
          { label: 'Alertas', value: target.totalAlertas, icon: AlertTriangle, color: 'text-destructive' },
          { label: 'Recebimentos', value: formatCompact(target.totalRecebido), icon: CreditCard, color: 'text-warning' },
        ].map((card, i) => (
          <div key={i} className="card-surface p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{card.label}</span>
              <card.icon className={`h-3.5 w-3.5 ${card.color}`} />
            </div>
            <span className="text-xl font-bold font-mono-data text-foreground">{card.value}</span>
          </div>
        ))}
      </div>

      {/* Score Bars */}
      <div className="card-surface p-4 space-y-2">
        <ScoreBar value={target.riskFinanceiro} label="Risco Financeiro" />
        <ScoreBar value={target.riskRelacional} label="Risco Relacional" />
        <ScoreBar value={target.evidencia} label="Evidência" />
      </div>

      {/* Tree */}
      <TargetTree targetId={target.id} height="450px" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top Credores Bar */}
        <div className="card-surface p-4 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Top Credores do Setor</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={credorChartData} layout="vertical" margin={{ left: 10, right: 10 }}>
              <XAxis type="number" tickFormatter={v => formatCompact(v)} tick={{ fontSize: 10, fill: 'hsl(215, 25%, 63%)' }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 9, fill: 'hsl(215, 25%, 63%)' }} width={100} />
              <Tooltip contentStyle={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: 6, fontSize: 11 }} formatter={(v: number) => [formatBRL(v), 'Valor']} />
              <Bar dataKey="valor" radius={[0, 4, 4, 0]}>
                {credorChartData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie */}
        <div className="card-surface p-4 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Concentração por Credor</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: '#0F172A', border: '1px solid #1E293B', borderRadius: 6, fontSize: 11 }} formatter={(v: number) => [formatBRL(v), 'Total']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Nucleos */}
      {relatedNucleos.length > 0 && (
        <div className="card-surface p-4 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Núcleos Familiares Identificados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {relatedNucleos.map(nf => (
              <div key={nf.id} className="p-3 bg-secondary/30 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-foreground">NÚCLEO {nf.sobrenome}</span>
                  <MethodBadge badge={nf.forca} />
                </div>
                {nf.membros.map((m, i) => (
                  <div key={i} className="text-[11px] text-muted-foreground">{m.nome} — {m.cargo} — {m.orgao}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Alerts */}
      {relatedAlerts.length > 0 && (
        <div className="card-surface p-4 space-y-3">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-destructive" /> Alertas Relacionados
          </h3>
          {relatedAlerts.map(a => (
            <div key={a.id} className={`p-3 rounded-md border-l-2 ${a.riskLevel === 'ALTO' ? 'border-l-destructive bg-destructive/5' : 'border-l-warning bg-warning/5'}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-foreground">{a.titulo}</span>
                <RiskBadge level={a.riskLevel} />
                <MethodBadge badge={a.badge} />
              </div>
              <p className="text-[11px] text-muted-foreground">{a.descricao}</p>
              {a.valor && <span className="text-[10px] font-mono-data text-warning mt-1 inline-block">{formatBRL(a.valor)}</span>}
            </div>
          ))}
        </div>
      )}

      {/* Investigação Societária */}
      {target.id === 't1' && (
        <div className="card-surface p-4 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Investigação Societária — CNPJs Relacionados</h3>
          <div className="space-y-2">
            {[
              { cnpj: '34.567.890/0001-12', nome: 'SGROTT SERVIÇOS GERAIS ME', status: 'Ativa', vinculo: 'Sobrenome SGROTT', risco: 'ALTO' as const },
              { cnpj: '78.901.234/0001-56', nome: 'LAUS TRANSPORTES ME', status: 'Ativa', vinculo: 'Jordan Campos Laus (Diretor Gabinete)', risco: 'ALTO' as const },
              { cnpj: '89.012.345/0001-67', nome: 'CAMPOS MATERIAIS ELÉTRICOS', status: 'Ativa', vinculo: 'Sobrenome CAMPOS', risco: 'ALTO' as const },
            ].map((empresa, i) => (
              <div key={i} className="p-3 bg-secondary/30 rounded-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-foreground">{empresa.nome}</span>
                  <RiskBadge level={empresa.risco} />
                </div>
                <div className="text-[10px] font-mono-data text-muted-foreground">CNPJ: {empresa.cnpj}</div>
                <div className="text-[10px] text-muted-foreground">Status: {empresa.status}</div>
                <div className="text-[10px] text-primary">Vínculo: {empresa.vinculo}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import { KPIRow } from '@/components/shared/KPICard';
import { TargetRanking } from './TargetRanking';
import { PaymentTimelineChart } from './PaymentTimelineChart';
import { RiskBubbleChart } from './RiskBubbleChart';
import { TopCredores } from './TopCredores';
import { AlertsList } from './AlertsList';
import { NucleosOverview } from './NucleosOverview';
import { TemporalHeatmap } from './TemporalHeatmap';
import { NetworkGraph } from '@/features/network/NetworkGraph';
import { TargetTree } from '@/features/targets/TargetTree';
import { targets, alerts, credores, nucleosFamiliares } from '@/lib/mocks/data';

export function DashboardPage() {
  const totalAlertasCriticos = alerts.filter(a => a.riskLevel === 'ALTO').length;
  const credoresTransversais = credores.filter(c => c.setores.length > 1).length;
  const fracionamentoForte = alerts.filter(a => a.tipo === 'fracionamento').length;
  const anomalias = alerts.filter(a => a.tipo === 'anomalia_fim_ano').length;

  const kpis = [
    { title: 'Alvos Monitorados', value: targets.length.toString(), icon: 'eye' as const, variant: 'default' as const, subtitle: 'Mandato 2025–2028' },
    { title: 'Alertas Críticos', value: totalAlertasCriticos.toString(), icon: 'alert' as const, variant: 'danger' as const, subtitle: `de ${alerts.length} total` },
    { title: 'Credores Transversais', value: credoresTransversais.toString(), icon: 'building' as const, variant: 'warning' as const, subtitle: 'Multi-setor' },
    { title: 'Fracionamento', value: fracionamentoForte.toString(), icon: 'trending' as const, variant: 'danger' as const, subtitle: 'Casos fortes' },
    { title: 'Anomalias Temporais', value: anomalias.toString(), icon: 'shield' as const, variant: 'warning' as const, subtitle: 'Fim de ano' },
    { title: 'Núcleos Familiares', value: nucleosFamiliares.length.toString(), icon: 'users' as const, variant: 'default' as const, subtitle: 'Identificados' },
    { title: 'Setores Monitorados', value: '8', icon: 'network' as const, variant: 'default' as const, subtitle: 'Prefeitura + Câmara' },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-foreground">Central de Inteligência — Tijucas</h1>
          <p className="text-xs text-muted-foreground">Prefeitura e Câmara Municipal • Mandato 2025–2028</p>
        </div>
        <span className="text-[10px] font-mono-data text-muted-foreground">Atualizado: 13/03/2026</span>
      </div>

      {/* KPIs */}
      <KPIRow kpis={kpis} />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Ranking */}
        <div className="lg:col-span-1">
          <TargetRanking targets={targets} limit={10} />
        </div>

        {/* Center charts */}
        <div className="lg:col-span-2 space-y-4">
          <RiskBubbleChart />
          <PaymentTimelineChart />
        </div>
      </div>

      {/* Network Graph - prominent */}
      <NetworkGraph height="450px" />

      {/* Featured Target Tree */}
      <TargetTree targetId="t1" height="400px" />

      {/* Grid: Credores, Alerts, Nucleos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TopCredores />
        <AlertsList limit={6} />
        <NucleosOverview />
      </div>

      {/* Heatmap */}
      <TemporalHeatmap />

      {/* Achados Críticos */}
      <div className="card-surface p-4 space-y-3">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse-glow" />
          Achados Críticos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {[
            { titulo: 'Núcleo AMORIM em 3 órgãos', desc: 'Vice-prefeito, vereadora e diretor com credor em comum', badge: 'FORTE' as const },
            { titulo: 'SGROTT Serviços → Gabinete', desc: 'Empresa com sobrenome do prefeito recebe do gabinete', badge: 'FORTE' as const },
            { titulo: 'Pico de Dez/2024: R$ 13.7M', desc: '340% acima da média mensal, concentrado em 5 credores', badge: 'FORTE' as const },
            { titulo: 'LAUS Transportes + Jordan Laus', desc: 'Diretor do gabinete com empresa homônima fornecedora', badge: 'FORTE' as const },
            { titulo: 'PORCINCULA PF na Câmara', desc: 'Credor pessoa física com sobrenome de vereador', badge: 'FORTE' as const },
            { titulo: 'Auto Peças: 47 pagamentos', desc: '78% abaixo do limite de licitação — fracionamento', badge: 'FORTE' as const },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-md bg-destructive/5 border border-destructive/20 hover:bg-destructive/10 transition-colors cursor-pointer">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-foreground">{item.titulo}</span>
                <span className="badge-risk-high text-[9px] px-1 py-0.5 rounded font-mono-data">{item.badge}</span>
              </div>
              <p className="text-[10px] text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Blocos comparativos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          { nome: 'Prefeitura', alertas: 5, credores: 6, nucleos: 2, total: 'R$ 28.3M' },
          { nome: 'Câmara Municipal', alertas: 3, credores: 3, nucleos: 3, total: 'R$ 10.5M' },
          { nome: 'Secretarias', alertas: 4, credores: 5, nucleos: 2, total: 'R$ 38.7M' },
        ].map((bloco, i) => (
          <div key={i} className="card-surface p-4">
            <h4 className="text-sm font-bold text-foreground mb-2">{bloco.nome}</h4>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">Alertas</span>
                <span className="font-mono-data text-foreground">{bloco.alertas}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">Credores vinculados</span>
                <span className="font-mono-data text-foreground">{bloco.credores}</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-muted-foreground">Núcleos familiares</span>
                <span className="font-mono-data text-foreground">{bloco.nucleos}</span>
              </div>
              <div className="flex justify-between text-[11px] pt-1 border-t border-border">
                <span className="text-muted-foreground">Volume total</span>
                <span className="font-mono-data font-semibold text-warning">{bloco.total}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

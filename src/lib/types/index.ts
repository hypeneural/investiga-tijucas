export type RiskLevel = 'ALTO' | 'MÉDIO' | 'BAIXO';
export type BadgeType = 'FORTE' | 'MÉDIA' | 'FRACA' | 'HIPÓTESE' | 'REQUER AUDITORIA';
export type AlertType = 'fracionamento' | 'pagamento_direto' | 'nucleo_familiar' | 'anomalia_fim_ano' | 'sincronicidade' | 'credor_transversal' | 'desvio_funcional' | 'societario';
export type NodeType = 'prefeito' | 'vice' | 'secretario' | 'vereador' | 'funcionario' | 'nucleo_familiar' | 'credor_pf' | 'credor_pj' | 'orgao' | 'alerta';
export type EdgeType = 'controla_setor' | 'trabalha_em' | 'recebe_pagamento' | 'compartilha_sobrenome' | 'credor_transversal' | 'ligacao_societaria' | 'pagamento_direto' | 'sincronicidade_temporal' | 'fracionamento';
export type GraphEdgeType = EdgeType;

export interface Target {
  id: string;
  nome: string;
  cargo: string;
  orgao: string;
  mandato: string;
  riskFinanceiro: number;
  riskRelacional: number;
  evidencia: number;
  riskLevel: RiskLevel;
  totalRecebido: number;
  totalConexoes: number;
  totalAlertas: number;
  nucleosFamiliares: string[];
  setores: string[];
  badges: BadgeType[];
}

export interface Alert {
  id: string;
  tipo: AlertType;
  titulo: string;
  descricao: string;
  alvos: string[];
  riskLevel: RiskLevel;
  dataDeteccao: string;
  evidencias: string[];
  comoInvestigar: string;
  badge: BadgeType;
  valor?: number;
}

export interface Credor {
  id: string;
  nome: string;
  tipo: 'PF' | 'PJ';
  cnpjCpf: string;
  totalRecebido: number;
  pagamentos: number;
  setores: string[];
  alvosRelacionados: string[];
  riskLevel: RiskLevel;
}

export interface NucleoFamiliar {
  id: string;
  sobrenome: string;
  membros: { nome: string; cargo: string; orgao: string }[];
  alvosRelacionados: string[];
  forca: BadgeType;
}

export interface GraphNode {
  id: string;
  label: string;
  type: NodeType;
  riskLevel?: RiskLevel;
  score?: number;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: EdgeType;
  weight: number;
  label?: string;
}

export interface PaymentTimeline {
  mes: string;
  prefeitura: number;
  camara: number;
  secretarias: number;
}

export interface HeatmapCell {
  mes: number;
  ano: number;
  valor: number;
  eventos: number;
}

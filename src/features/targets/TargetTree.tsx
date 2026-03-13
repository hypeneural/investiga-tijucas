import { useCallback, useMemo } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  ConnectionMode,
} from 'reactflow';
import dagre from '@dagrejs/dagre';
import 'reactflow/dist/style.css';
import { targets, credores, alerts, nucleosFamiliares } from '@/lib/mocks/data';
import { Target } from '@/lib/types';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 200;
const nodeHeight = 60;

function getLayoutedElements(nodes: Node[], edges: Edge[]) {
  dagreGraph.setGraph({ rankdir: 'TB', ranksep: 80, nodesep: 40 });
  nodes.forEach(n => dagreGraph.setNode(n.id, { width: nodeWidth, height: nodeHeight }));
  edges.forEach(e => dagreGraph.setEdge(e.source, e.target));
  dagre.layout(dagreGraph);

  return {
    nodes: nodes.map(n => {
      const pos = dagreGraph.node(n.id);
      return { ...n, position: { x: pos.x - nodeWidth / 2, y: pos.y - nodeHeight / 2 } };
    }),
    edges,
  };
}

interface TargetTreeProps {
  targetId: string;
  height?: string;
}

const riskColors = { 'ALTO': '#EF4444', 'MÉDIO': '#F59E0B', 'BAIXO': '#10B981' };

function makeCustomNodeStyle(color: string, isRoot = false) {
  return {
    background: '#0F172A',
    border: `2px solid ${color}`,
    borderRadius: 8,
    padding: '8px 12px',
    fontSize: isRoot ? 12 : 10,
    color: '#F8FAFC',
    width: nodeWidth,
    boxShadow: isRoot ? `0 0 20px ${color}40` : undefined,
  };
}

export function TargetTree({ targetId, height = '400px' }: TargetTreeProps) {
  const target = targets.find(t => t.id === targetId);
  if (!target) return null;

  const relatedCredores = credores.filter(c => c.alvosRelacionados.includes(targetId)).slice(0, 5);
  const relatedAlerts = alerts.filter(a => a.alvos.includes(targetId)).slice(0, 4);
  const relatedNucleos = nucleosFamiliares.filter(nf => nf.alvosRelacionados.includes(targetId));

  const rawNodes: Node[] = [
    { id: 'root', data: { label: `${target.nome}\n${target.cargo} • Score: ${target.riskFinanceiro}` }, position: { x: 0, y: 0 }, style: makeCustomNodeStyle(riskColors[target.riskLevel], true) },
    ...target.setores.map((s, i) => ({
      id: `setor-${i}`, data: { label: `📋 ${s}` }, position: { x: 0, y: 0 },
      style: makeCustomNodeStyle('#38BDF8'),
    })),
    ...relatedNucleos.map((nf, i) => ({
      id: `nucleo-${i}`, data: { label: `👥 Núcleo ${nf.sobrenome}\n${nf.membros.length} membros` }, position: { x: 0, y: 0 },
      style: makeCustomNodeStyle('#F97316'),
    })),
    ...relatedCredores.map((c, i) => ({
      id: `credor-${i}`, data: { label: `💰 ${c.nome}\n${c.tipo} • ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', notation: 'compact' }).format(c.totalRecebido)}` }, position: { x: 0, y: 0 },
      style: makeCustomNodeStyle(riskColors[c.riskLevel]),
    })),
    ...relatedAlerts.map((a, i) => ({
      id: `alerta-${i}`, data: { label: `⚠ ${a.titulo}` }, position: { x: 0, y: 0 },
      style: makeCustomNodeStyle('#EF4444'),
    })),
  ];

  const rawEdges: Edge[] = [
    ...target.setores.map((_, i) => ({
      id: `e-root-setor-${i}`, source: 'root', target: `setor-${i}`, animated: true,
      style: { stroke: '#38BDF8', strokeWidth: 2 },
    })),
    ...relatedNucleos.map((_, i) => ({
      id: `e-root-nucleo-${i}`, source: 'root', target: `nucleo-${i}`,
      style: { stroke: '#F97316', strokeWidth: 1.5 },
    })),
    ...relatedCredores.map((_, i) => ({
      id: `e-setor-credor-${i}`, source: target.setores.length > 0 ? 'setor-0' : 'root', target: `credor-${i}`,
      style: { stroke: '#10B981', strokeWidth: 1.5 },
    })),
    ...relatedAlerts.map((_, i) => ({
      id: `e-root-alerta-${i}`, source: 'root', target: `alerta-${i}`,
      style: { stroke: '#EF4444', strokeWidth: 1.5 },
    })),
  ];

  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(rawNodes, rawEdges);
  const [nodes] = useNodesState(layoutedNodes);
  const [edges] = useEdgesState(layoutedEdges);

  return (
    <div className="card-surface overflow-hidden" style={{ height }}>
      <div className="p-3 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground">Árvore de Relações — {target.nome.split(' ').slice(0, 2).join(' ')}</h3>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        connectionMode={ConnectionMode.Loose}
        proOptions={{ hideAttribution: true }}
        style={{ background: 'transparent' }}
      >
        <Background color="hsl(217, 33%, 14%)" gap={20} size={1} />
        <Controls style={{ background: '#0F172A', borderColor: '#1E293B' }} />
      </ReactFlow>
    </div>
  );
}

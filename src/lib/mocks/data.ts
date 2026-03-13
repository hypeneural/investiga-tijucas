import { Target, Alert, Credor, NucleoFamiliar, GraphNode, GraphEdge, PaymentTimeline, HeatmapCell } from '../types';

export const targets: Target[] = [
  {
    id: 't1', nome: 'MAICKON CAMPOS SGROTT', cargo: 'Prefeito', orgao: 'Gabinete do Prefeito',
    mandato: '2025–2028', riskFinanceiro: 92, riskRelacional: 88, evidencia: 75, riskLevel: 'ALTO',
    totalRecebido: 0, totalConexoes: 34, totalAlertas: 12,
    nucleosFamiliares: ['CAMPOS', 'SGROTT'], setores: ['Gabinete do Prefeito'],
    badges: ['FORTE', 'REQUER AUDITORIA'],
  },
  {
    id: 't2', nome: 'RUDNEI DE AMORIM', cargo: 'Vice-Prefeito', orgao: 'Gabinete do Vice',
    mandato: '2025–2028', riskFinanceiro: 78, riskRelacional: 85, evidencia: 62, riskLevel: 'ALTO',
    totalRecebido: 0, totalConexoes: 22, totalAlertas: 8,
    nucleosFamiliares: ['AMORIM'], setores: ['Gabinete do Vice-Prefeito'],
    badges: ['FORTE'],
  },
  {
    id: 't3', nome: 'VILSON JOSÉ PORCINCULA', cargo: 'Vereador', orgao: 'Câmara Municipal',
    mandato: '2025–2028', riskFinanceiro: 85, riskRelacional: 71, evidencia: 68, riskLevel: 'ALTO',
    totalRecebido: 45200, totalConexoes: 18, totalAlertas: 9,
    nucleosFamiliares: ['PORCINCULA'], setores: ['Câmara Municipal'],
    badges: ['FORTE', 'REQUER AUDITORIA'],
  },
  {
    id: 't4', nome: 'NADIR OLINDINA AMORIM', cargo: 'Vereadora', orgao: 'Câmara Municipal',
    mandato: '2025–2028', riskFinanceiro: 72, riskRelacional: 90, evidencia: 58, riskLevel: 'ALTO',
    totalRecebido: 38900, totalConexoes: 25, totalAlertas: 7,
    nucleosFamiliares: ['AMORIM'], setores: ['Câmara Municipal'],
    badges: ['FORTE'],
  },
  {
    id: 't5', nome: 'JHONE RENNER POLI', cargo: 'Secretário', orgao: 'Sec. Administração',
    mandato: '2025–2028', riskFinanceiro: 65, riskRelacional: 78, evidencia: 55, riskLevel: 'MÉDIO',
    totalRecebido: 12500, totalConexoes: 15, totalAlertas: 5,
    nucleosFamiliares: ['POLI'], setores: ['Sec. Administração'],
    badges: ['MÉDIA'],
  },
  {
    id: 't6', nome: 'MAURICIO POLI', cargo: 'Vereador', orgao: 'Câmara Municipal',
    mandato: '2025–2028', riskFinanceiro: 60, riskRelacional: 75, evidencia: 50, riskLevel: 'MÉDIO',
    totalRecebido: 28700, totalConexoes: 14, totalAlertas: 4,
    nucleosFamiliares: ['POLI'], setores: ['Câmara Municipal'],
    badges: ['MÉDIA'],
  },
  {
    id: 't7', nome: 'FRANCIELE DELLA MEA', cargo: 'Secretária', orgao: 'Sec. Saúde',
    mandato: '2025–2028', riskFinanceiro: 58, riskRelacional: 72, evidencia: 48, riskLevel: 'MÉDIO',
    totalRecebido: 8900, totalConexoes: 12, totalAlertas: 3,
    nucleosFamiliares: ['DELLA'], setores: ['Sec. Saúde'],
    badges: ['MÉDIA'],
  },
  {
    id: 't8', nome: 'MATEUS DELLA GUISTINA GUINZANI', cargo: 'Diretor', orgao: 'Sec. Obras',
    mandato: '2025–2028', riskFinanceiro: 55, riskRelacional: 70, evidencia: 45, riskLevel: 'MÉDIO',
    totalRecebido: 11200, totalConexoes: 10, totalAlertas: 3,
    nucleosFamiliares: ['DELLA', 'GUINZANI'], setores: ['Sec. Obras'],
    badges: ['MÉDIA', 'HIPÓTESE'],
  },
  {
    id: 't9', nome: 'LEILA DOS ANJOS COSTA', cargo: 'Secretária', orgao: 'Sec. Educação',
    mandato: '2025–2028', riskFinanceiro: 45, riskRelacional: 40, evidencia: 35, riskLevel: 'BAIXO',
    totalRecebido: 6800, totalConexoes: 8, totalAlertas: 2,
    nucleosFamiliares: ['COSTA'], setores: ['Sec. Educação'],
    badges: ['FRACA'],
  },
  {
    id: 't10', nome: 'SHEILA DIAS', cargo: 'Secretária', orgao: 'Sec. Finanças',
    mandato: '2025–2028', riskFinanceiro: 42, riskRelacional: 38, evidencia: 30, riskLevel: 'BAIXO',
    totalRecebido: 5200, totalConexoes: 7, totalAlertas: 1,
    nucleosFamiliares: ['DIAS'], setores: ['Sec. Finanças'],
    badges: ['FRACA'],
  },
  {
    id: 't11', nome: 'EZEQUIEL DE AMORIM', cargo: 'Diretor', orgao: 'Sec. Planejamento',
    mandato: '2025–2028', riskFinanceiro: 68, riskRelacional: 82, evidencia: 55, riskLevel: 'ALTO',
    totalRecebido: 15800, totalConexoes: 19, totalAlertas: 6,
    nucleosFamiliares: ['AMORIM'], setores: ['Sec. Planejamento'],
    badges: ['FORTE'],
  },
  {
    id: 't12', nome: 'WILLIAM CLEMES', cargo: 'Secretário', orgao: 'Sec. Infraestrutura',
    mandato: '2025–2028', riskFinanceiro: 50, riskRelacional: 45, evidencia: 40, riskLevel: 'MÉDIO',
    totalRecebido: 9400, totalConexoes: 9, totalAlertas: 2,
    nucleosFamiliares: ['CLEMES'], setores: ['Sec. Infraestrutura'],
    badges: ['FRACA'],
  },
  {
    id: 't13', nome: 'JORDAN CAMPOS LAUS', cargo: 'Diretor', orgao: 'Gabinete do Prefeito',
    mandato: '2025–2028', riskFinanceiro: 70, riskRelacional: 80, evidencia: 60, riskLevel: 'ALTO',
    totalRecebido: 22000, totalConexoes: 16, totalAlertas: 5,
    nucleosFamiliares: ['CAMPOS', 'LAUS'], setores: ['Gabinete do Prefeito'],
    badges: ['FORTE'],
  },
  {
    id: 't14', nome: 'CLÁUDIO EDUARDO DE SOUZA', cargo: 'Vereador', orgao: 'Câmara Municipal',
    mandato: '2025–2028', riskFinanceiro: 48, riskRelacional: 42, evidencia: 38, riskLevel: 'MÉDIO',
    totalRecebido: 31500, totalConexoes: 8, totalAlertas: 2,
    nucleosFamiliares: ['SOUZA'], setores: ['Câmara Municipal'],
    badges: ['FRACA'],
  },
  {
    id: 't15', nome: 'ESAÚ BAYER', cargo: 'Vereador', orgao: 'Câmara Municipal',
    mandato: '2025–2028', riskFinanceiro: 40, riskRelacional: 35, evidencia: 28, riskLevel: 'BAIXO',
    totalRecebido: 27800, totalConexoes: 6, totalAlertas: 1,
    nucleosFamiliares: ['BAYER'], setores: ['Câmara Municipal'],
    badges: ['FRACA'],
  },
  {
    id: 't16', nome: 'SAULO CÂMARA FARIA', cargo: 'Secretário', orgao: 'Sec. Turismo',
    mandato: '2025–2028', riskFinanceiro: 47, riskRelacional: 44, evidencia: 36, riskLevel: 'MÉDIO',
    totalRecebido: 7200, totalConexoes: 8, totalAlertas: 2,
    nucleosFamiliares: ['FARIA'], setores: ['Sec. Turismo'],
    badges: ['FRACA'],
  },
  {
    id: 't17', nome: 'PYERRE CABRAL', cargo: 'Secretário', orgao: 'Sec. Meio Ambiente',
    mandato: '2025–2028', riskFinanceiro: 44, riskRelacional: 40, evidencia: 32, riskLevel: 'BAIXO',
    totalRecebido: 6100, totalConexoes: 7, totalAlertas: 1,
    nucleosFamiliares: ['CABRAL'], setores: ['Sec. Meio Ambiente'],
    badges: ['FRACA'],
  },
  {
    id: 't18', nome: 'SIDNEY MACHADO', cargo: 'Secretário', orgao: 'Sec. Agricultura',
    mandato: '2025–2028', riskFinanceiro: 38, riskRelacional: 35, evidencia: 25, riskLevel: 'BAIXO',
    totalRecebido: 5500, totalConexoes: 5, totalAlertas: 1,
    nucleosFamiliares: ['MACHADO'], setores: ['Sec. Agricultura'],
    badges: ['FRACA'],
  },
  {
    id: 't19', nome: 'FLAVIO HENRIQUE SOUZA', cargo: 'Vereador', orgao: 'Câmara Municipal',
    mandato: '2025–2028', riskFinanceiro: 52, riskRelacional: 48, evidencia: 42, riskLevel: 'MÉDIO',
    totalRecebido: 29000, totalConexoes: 9, totalAlertas: 3,
    nucleosFamiliares: ['SOUZA'], setores: ['Câmara Municipal'],
    badges: ['MÉDIA'],
  },
  {
    id: 't20', nome: 'FABIANO MORFELLE', cargo: 'Vereador', orgao: 'Câmara Municipal',
    mandato: '2025–2028', riskFinanceiro: 46, riskRelacional: 43, evidencia: 34, riskLevel: 'MÉDIO',
    totalRecebido: 26500, totalConexoes: 7, totalAlertas: 2,
    nucleosFamiliares: ['MORFELLE'], setores: ['Câmara Municipal'],
    badges: ['FRACA'],
  },
];

export const credores: Credor[] = [
  { id: 'c1', nome: 'AUTO PEÇAS TIJUCAS LTDA', tipo: 'PJ', cnpjCpf: '12.345.678/0001-90', totalRecebido: 892400, pagamentos: 47, setores: ['Sec. Infraestrutura', 'Sec. Obras'], alvosRelacionados: ['t1', 't12', 't8'], riskLevel: 'ALTO' },
  { id: 'c2', nome: 'CONSTRUTORA VALE DO RIO LTDA', tipo: 'PJ', cnpjCpf: '23.456.789/0001-01', totalRecebido: 1245000, pagamentos: 23, setores: ['Sec. Obras', 'Sec. Infraestrutura'], alvosRelacionados: ['t1', 't8'], riskLevel: 'ALTO' },
  { id: 'c3', nome: 'SGROTT SERVIÇOS GERAIS ME', tipo: 'PJ', cnpjCpf: '34.567.890/0001-12', totalRecebido: 456700, pagamentos: 38, setores: ['Gabinete do Prefeito', 'Sec. Administração'], alvosRelacionados: ['t1', 't13'], riskLevel: 'ALTO' },
  { id: 'c4', nome: 'MARIA JOSÉ PORCINCULA', tipo: 'PF', cnpjCpf: '123.456.789-00', totalRecebido: 189500, pagamentos: 24, setores: ['Câmara Municipal'], alvosRelacionados: ['t3'], riskLevel: 'ALTO' },
  { id: 'c5', nome: 'AMORIM CONSULTORIA LTDA', tipo: 'PJ', cnpjCpf: '45.678.901/0001-23', totalRecebido: 378200, pagamentos: 31, setores: ['Sec. Planejamento', 'Gabinete do Vice'], alvosRelacionados: ['t2', 't4', 't11'], riskLevel: 'ALTO' },
  { id: 'c6', nome: 'FARMÁCIA CENTRAL TIJUCAS', tipo: 'PJ', cnpjCpf: '56.789.012/0001-34', totalRecebido: 567800, pagamentos: 89, setores: ['Sec. Saúde'], alvosRelacionados: ['t7'], riskLevel: 'MÉDIO' },
  { id: 'c7', nome: 'INFORMÁTICA DELTA LTDA', tipo: 'PJ', cnpjCpf: '67.890.123/0001-45', totalRecebido: 234500, pagamentos: 15, setores: ['Sec. Administração', 'Câmara Municipal'], alvosRelacionados: ['t5', 't6'], riskLevel: 'MÉDIO' },
  { id: 'c8', nome: 'LAUS TRANSPORTES ME', tipo: 'PJ', cnpjCpf: '78.901.234/0001-56', totalRecebido: 345600, pagamentos: 28, setores: ['Gabinete do Prefeito'], alvosRelacionados: ['t1', 't13'], riskLevel: 'ALTO' },
  { id: 'c9', nome: 'CAMPOS MATERIAIS ELÉTRICOS', tipo: 'PJ', cnpjCpf: '89.012.345/0001-67', totalRecebido: 278900, pagamentos: 42, setores: ['Sec. Infraestrutura', 'Sec. Obras'], alvosRelacionados: ['t1', 't13', 't12'], riskLevel: 'ALTO' },
  { id: 'c10', nome: 'JOSÉ POLI SERVIÇOS', tipo: 'PF', cnpjCpf: '234.567.890-11', totalRecebido: 145200, pagamentos: 19, setores: ['Sec. Administração', 'Câmara Municipal'], alvosRelacionados: ['t5', 't6'], riskLevel: 'MÉDIO' },
];

export const alerts: Alert[] = [
  { id: 'a1', tipo: 'nucleo_familiar', titulo: 'Núcleo AMORIM em múltiplos órgãos', descricao: 'Rudnei, Nadir e Ezequiel de Amorim ocupam cargos em três órgãos distintos com credores em comum.', alvos: ['t2', 't4', 't11'], riskLevel: 'ALTO', dataDeteccao: '15/01/2025', evidencias: ['3 membros em órgãos distintos', 'Credor AMORIM CONSULTORIA recebe de todos os setores', 'Total acumulado: R$ 378.200'], comoInvestigar: 'Verificar composição societária da AMORIM CONSULTORIA e cruzar com registros de parentesco.', badge: 'FORTE', valor: 378200 },
  { id: 'a2', tipo: 'societario', titulo: 'SGROTT SERVIÇOS com vínculo ao Prefeito', descricao: 'Empresa com sobrenome SGROTT recebe pagamentos do Gabinete do Prefeito.', alvos: ['t1'], riskLevel: 'ALTO', dataDeteccao: '20/01/2025', evidencias: ['CNPJ 34.567.890/0001-12', 'Sobrenome coincide com Prefeito', '38 pagamentos totalizando R$ 456.700'], comoInvestigar: 'Consultar QSA da empresa na Receita Federal e verificar parentesco.', badge: 'FORTE', valor: 456700 },
  { id: 'a3', tipo: 'fracionamento', titulo: 'Fracionamento suspeito em Auto Peças', descricao: 'Pagamentos abaixo do limite de licitação em sequência para AUTO PEÇAS TIJUCAS.', alvos: ['t1', 't12'], riskLevel: 'ALTO', dataDeteccao: '10/02/2025', evidencias: ['47 pagamentos em 12 meses', 'Média por pagamento: R$ 18.987', 'Total: R$ 892.400', '78% abaixo de R$ 17.600'], comoInvestigar: 'Analisar datas dos empenhos e verificar se houve quebra intencional do valor para dispensa de licitação.', badge: 'FORTE', valor: 892400 },
  { id: 'a4', tipo: 'sincronicidade', titulo: 'Nomeação e pagamento simultâneos — POLI', descricao: 'Jhone Renner Poli nomeado na Sec. Administração 15 dias antes de pagamento a JOSÉ POLI SERVIÇOS.', alvos: ['t5', 't6'], riskLevel: 'MÉDIO', dataDeteccao: '05/02/2025', evidencias: ['Nomeação: 02/01/2025', 'Primeiro pagamento: 17/01/2025', 'Sobrenome coincidente'], comoInvestigar: 'Verificar se JOSÉ POLI é parente de Jhone e Mauricio Poli.', badge: 'MÉDIA', valor: 145200 },
  { id: 'a5', tipo: 'credor_transversal', titulo: 'CONSTRUTORA VALE recebe de 2 secretarias', descricao: 'Construtora recebe simultaneamente de Sec. Obras e Sec. Infraestrutura sem licitação unificada.', alvos: ['t1', 't8', 't12'], riskLevel: 'ALTO', dataDeteccao: '12/02/2025', evidencias: ['R$ 780.000 da Sec. Obras', 'R$ 465.000 da Sec. Infraestrutura', 'Sem registro de pregão unificado'], comoInvestigar: 'Verificar processos licitatórios em ambas as secretarias e cruzar com contratos.', badge: 'FORTE', valor: 1245000 },
  { id: 'a6', tipo: 'anomalia_fim_ano', titulo: 'Pico de empenhos em dez/2024', descricao: 'Volume de empenhos nas últimas 2 semanas de dezembro 340% acima da média mensal.', alvos: ['t1', 't2'], riskLevel: 'ALTO', dataDeteccao: '08/01/2025', evidencias: ['Média mensal: R$ 2.1M', 'Dez/2024 (últimas 2 semanas): R$ 7.14M', 'Concentração em 5 credores'], comoInvestigar: 'Verificar se empenhos de dezembro foram liquidados antes da posse e se há restos a pagar.', badge: 'FORTE', valor: 7140000 },
  { id: 'a7', tipo: 'compartilha_sobrenome', titulo: 'Conexão DELLA entre Secretarias', descricao: 'Franciele Della Mea (Sec. Saúde) e Mateus Della Guistina (Sec. Obras) compartilham base nominal.', alvos: ['t7', 't8'], riskLevel: 'MÉDIO', dataDeteccao: '18/01/2025', evidencias: ['Sobrenome DELLA em comum', 'Setores diferentes com credores sobrepostos'], comoInvestigar: 'Verificar parentesco via registros civis e cruzar credores de ambos os setores.', badge: 'HIPÓTESE' },
  { id: 'a8', tipo: 'pagamento_direto', titulo: 'LAUS TRANSPORTES recebe direto do Gabinete', descricao: 'Empresa LAUS recebe pagamentos diretos do Gabinete do Prefeito, conectada a Jordan Campos Laus.', alvos: ['t1', 't13'], riskLevel: 'ALTO', dataDeteccao: '22/01/2025', evidencias: ['Jordan Campos Laus é Diretor do Gabinete', 'LAUS TRANSPORTES: 28 pagamentos', 'Total: R$ 345.600'], comoInvestigar: 'Verificar QSA de LAUS TRANSPORTES e parentesco com Jordan Campos Laus.', badge: 'FORTE', valor: 345600 },
  { id: 'a9', tipo: 'nucleo_familiar', titulo: 'Núcleo PORCINCULA concentrado na Câmara', descricao: 'Vereador Vilson Porcincula com credor PF MARIA JOSÉ PORCINCULA recebendo da Câmara.', alvos: ['t3'], riskLevel: 'ALTO', dataDeteccao: '25/01/2025', evidencias: ['24 pagamentos a Maria José Porcincula', 'Total: R$ 189.500', 'Mesmo sobrenome do vereador'], comoInvestigar: 'Confirmar grau de parentesco e verificar se há prestação de serviço real.', badge: 'FORTE', valor: 189500 },
  { id: 'a10', tipo: 'desvio_funcional', titulo: 'Pagamento de TI pela Sec. Agricultura', descricao: 'INFORMÁTICA DELTA recebendo pagamentos da Sec. Agricultura sem justificativa funcional aparente.', alvos: ['t18'], riskLevel: 'MÉDIO', dataDeteccao: '28/01/2025', evidencias: ['Classificação: Material de Informática', 'Centro de custo: Agricultura', 'Sem contrato de TI registrado'], comoInvestigar: 'Verificar notas fiscais e se há contrato para prestação de serviços de TI na Sec. Agricultura.', badge: 'MÉDIA', valor: 34500 },
];

export const nucleosFamiliares: NucleoFamiliar[] = [
  { id: 'nf1', sobrenome: 'AMORIM', membros: [{ nome: 'RUDNEI DE AMORIM', cargo: 'Vice-Prefeito', orgao: 'Gabinete do Vice' }, { nome: 'NADIR OLINDINA AMORIM', cargo: 'Vereadora', orgao: 'Câmara Municipal' }, { nome: 'EZEQUIEL DE AMORIM', cargo: 'Diretor', orgao: 'Sec. Planejamento' }], alvosRelacionados: ['t2', 't4', 't11'], forca: 'FORTE' },
  { id: 'nf2', sobrenome: 'POLI', membros: [{ nome: 'JHONE RENNER POLI', cargo: 'Secretário', orgao: 'Sec. Administração' }, { nome: 'MAURICIO POLI', cargo: 'Vereador', orgao: 'Câmara Municipal' }], alvosRelacionados: ['t5', 't6'], forca: 'MÉDIA' },
  { id: 'nf3', sobrenome: 'CAMPOS', membros: [{ nome: 'MAICKON CAMPOS SGROTT', cargo: 'Prefeito', orgao: 'Gabinete do Prefeito' }, { nome: 'JORDAN CAMPOS LAUS', cargo: 'Diretor', orgao: 'Gabinete do Prefeito' }], alvosRelacionados: ['t1', 't13'], forca: 'FORTE' },
  { id: 'nf4', sobrenome: 'DELLA', membros: [{ nome: 'FRANCIELE DELLA MEA', cargo: 'Secretária', orgao: 'Sec. Saúde' }, { nome: 'MATEUS DELLA GUISTINA GUINZANI', cargo: 'Diretor', orgao: 'Sec. Obras' }], alvosRelacionados: ['t7', 't8'], forca: 'HIPÓTESE' },
  { id: 'nf5', sobrenome: 'PORCINCULA', membros: [{ nome: 'VILSON JOSÉ PORCINCULA', cargo: 'Vereador', orgao: 'Câmara Municipal' }, { nome: 'MARIA JOSÉ PORCINCULA', cargo: 'Credor PF', orgao: 'Câmara Municipal' }], alvosRelacionados: ['t3'], forca: 'FORTE' },
  { id: 'nf6', sobrenome: 'SOUZA', membros: [{ nome: 'CLÁUDIO EDUARDO DE SOUZA', cargo: 'Vereador', orgao: 'Câmara Municipal' }, { nome: 'FLAVIO HENRIQUE SOUZA', cargo: 'Vereador', orgao: 'Câmara Municipal' }, { nome: 'JOSÉ VICENTE DE SOUZA E SILVA', cargo: 'Vereador', orgao: 'Câmara Municipal' }], alvosRelacionados: ['t14', 't19'], forca: 'FRACA' },
];

export const graphNodes: GraphNode[] = [
  { id: 'n-t1', label: 'Maickon Sgrott', type: 'prefeito', riskLevel: 'ALTO', score: 92 },
  { id: 'n-t2', label: 'Rudnei Amorim', type: 'vice', riskLevel: 'ALTO', score: 78 },
  { id: 'n-t3', label: 'Vilson Porcincula', type: 'vereador', riskLevel: 'ALTO', score: 85 },
  { id: 'n-t4', label: 'Nadir Amorim', type: 'vereador', riskLevel: 'ALTO', score: 72 },
  { id: 'n-t5', label: 'Jhone R. Poli', type: 'secretario', riskLevel: 'MÉDIO', score: 65 },
  { id: 'n-t6', label: 'Mauricio Poli', type: 'vereador', riskLevel: 'MÉDIO', score: 60 },
  { id: 'n-t7', label: 'Franciele Della Mea', type: 'secretario', riskLevel: 'MÉDIO', score: 58 },
  { id: 'n-t8', label: 'Mateus Della Guistina', type: 'secretario', riskLevel: 'MÉDIO', score: 55 },
  { id: 'n-t11', label: 'Ezequiel Amorim', type: 'secretario', riskLevel: 'ALTO', score: 68 },
  { id: 'n-t13', label: 'Jordan Campos Laus', type: 'secretario', riskLevel: 'ALTO', score: 70 },
  // Órgãos
  { id: 'n-o1', label: 'Gabinete do Prefeito', type: 'orgao' },
  { id: 'n-o2', label: 'Gabinete do Vice', type: 'orgao' },
  { id: 'n-o3', label: 'Câmara Municipal', type: 'orgao' },
  { id: 'n-o4', label: 'Sec. Administração', type: 'orgao' },
  { id: 'n-o5', label: 'Sec. Saúde', type: 'orgao' },
  { id: 'n-o6', label: 'Sec. Obras', type: 'orgao' },
  { id: 'n-o7', label: 'Sec. Planejamento', type: 'orgao' },
  { id: 'n-o8', label: 'Sec. Infraestrutura', type: 'orgao' },
  // Credores
  { id: 'n-c1', label: 'Auto Peças Tijucas', type: 'credor_pj', riskLevel: 'ALTO' },
  { id: 'n-c2', label: 'Construtora Vale do Rio', type: 'credor_pj', riskLevel: 'ALTO' },
  { id: 'n-c3', label: 'Sgrott Serviços', type: 'credor_pj', riskLevel: 'ALTO' },
  { id: 'n-c4', label: 'Maria J. Porcincula', type: 'credor_pf', riskLevel: 'ALTO' },
  { id: 'n-c5', label: 'Amorim Consultoria', type: 'credor_pj', riskLevel: 'ALTO' },
  { id: 'n-c8', label: 'Laus Transportes', type: 'credor_pj', riskLevel: 'ALTO' },
  { id: 'n-c9', label: 'Campos Mat. Elétricos', type: 'credor_pj', riskLevel: 'ALTO' },
  { id: 'n-c10', label: 'José Poli Serviços', type: 'credor_pf', riskLevel: 'MÉDIO' },
  // Núcleos
  { id: 'n-nf1', label: 'Núcleo AMORIM', type: 'nucleo_familiar', riskLevel: 'ALTO' },
  { id: 'n-nf2', label: 'Núcleo POLI', type: 'nucleo_familiar', riskLevel: 'MÉDIO' },
  { id: 'n-nf3', label: 'Núcleo CAMPOS', type: 'nucleo_familiar', riskLevel: 'ALTO' },
  { id: 'n-nf4', label: 'Núcleo DELLA', type: 'nucleo_familiar', riskLevel: 'MÉDIO' },
  { id: 'n-nf5', label: 'Núcleo PORCINCULA', type: 'nucleo_familiar', riskLevel: 'ALTO' },
  // Alertas
  { id: 'n-a1', label: 'Alerta: Núcleo AMORIM', type: 'alerta', riskLevel: 'ALTO' },
  { id: 'n-a2', label: 'Alerta: SGROTT Serviços', type: 'alerta', riskLevel: 'ALTO' },
  { id: 'n-a3', label: 'Alerta: Fracionamento', type: 'alerta', riskLevel: 'ALTO' },
  { id: 'n-a8', label: 'Alerta: LAUS Transportes', type: 'alerta', riskLevel: 'ALTO' },
  { id: 'n-a9', label: 'Alerta: PORCINCULA PF', type: 'alerta', riskLevel: 'ALTO' },
];

export const graphEdges: GraphEdge[] = [
  // Controla setor
  { id: 'e1', source: 'n-t1', target: 'n-o1', type: 'controla_setor', weight: 10, label: 'Controla' },
  { id: 'e2', source: 'n-t2', target: 'n-o2', type: 'controla_setor', weight: 10, label: 'Controla' },
  { id: 'e3', source: 'n-t5', target: 'n-o4', type: 'controla_setor', weight: 8 },
  { id: 'e4', source: 'n-t7', target: 'n-o5', type: 'controla_setor', weight: 8 },
  { id: 'e5', source: 'n-t8', target: 'n-o6', type: 'controla_setor', weight: 7 },
  { id: 'e6', source: 'n-t11', target: 'n-o7', type: 'controla_setor', weight: 8 },
  { id: 'e26', source: 'n-t13', target: 'n-o1', type: 'trabalha_em', weight: 7 },
  // Vereadores na Câmara
  { id: 'e7', source: 'n-t3', target: 'n-o3', type: 'trabalha_em', weight: 5 },
  { id: 'e8', source: 'n-t4', target: 'n-o3', type: 'trabalha_em', weight: 5 },
  { id: 'e9', source: 'n-t6', target: 'n-o3', type: 'trabalha_em', weight: 5 },
  // Pagamentos
  { id: 'e10', source: 'n-o1', target: 'n-c3', type: 'recebe_pagamento', weight: 9, label: 'R$ 456.700' },
  { id: 'e11', source: 'n-o1', target: 'n-c8', type: 'recebe_pagamento', weight: 8, label: 'R$ 345.600' },
  { id: 'e12', source: 'n-o3', target: 'n-c4', type: 'recebe_pagamento', weight: 7, label: 'R$ 189.500' },
  { id: 'e13', source: 'n-o6', target: 'n-c2', type: 'recebe_pagamento', weight: 9, label: 'R$ 780.000' },
  { id: 'e14', source: 'n-o8', target: 'n-c1', type: 'recebe_pagamento', weight: 8, label: 'R$ 892.400' },
  { id: 'e15', source: 'n-o7', target: 'n-c5', type: 'recebe_pagamento', weight: 8, label: 'R$ 378.200' },
  { id: 'e27', source: 'n-o4', target: 'n-c10', type: 'recebe_pagamento', weight: 6, label: 'R$ 145.200' },
  // Sobrenome
  { id: 'e16', source: 'n-t2', target: 'n-nf1', type: 'compartilha_sobrenome', weight: 10 },
  { id: 'e17', source: 'n-t4', target: 'n-nf1', type: 'compartilha_sobrenome', weight: 10 },
  { id: 'e18', source: 'n-t11', target: 'n-nf1', type: 'compartilha_sobrenome', weight: 10 },
  { id: 'e19', source: 'n-t5', target: 'n-nf2', type: 'compartilha_sobrenome', weight: 8 },
  { id: 'e20', source: 'n-t6', target: 'n-nf2', type: 'compartilha_sobrenome', weight: 8 },
  { id: 'e21', source: 'n-t1', target: 'n-nf3', type: 'compartilha_sobrenome', weight: 9 },
  { id: 'e22', source: 'n-t13', target: 'n-nf3', type: 'compartilha_sobrenome', weight: 9 },
  { id: 'e23', source: 'n-t7', target: 'n-nf4', type: 'compartilha_sobrenome', weight: 6 },
  { id: 'e24', source: 'n-t8', target: 'n-nf4', type: 'compartilha_sobrenome', weight: 6 },
  { id: 'e25', source: 'n-t3', target: 'n-nf5', type: 'compartilha_sobrenome', weight: 9 },
  // Societário / ligações
  { id: 'e28', source: 'n-c3', target: 'n-nf3', type: 'ligacao_societaria', weight: 9 },
  { id: 'e29', source: 'n-c8', target: 'n-nf3', type: 'ligacao_societaria', weight: 8 },
  { id: 'e30', source: 'n-c5', target: 'n-nf1', type: 'ligacao_societaria', weight: 8 },
  { id: 'e31', source: 'n-c4', target: 'n-nf5', type: 'compartilha_sobrenome', weight: 9 },
  { id: 'e32', source: 'n-c10', target: 'n-nf2', type: 'compartilha_sobrenome', weight: 7 },
  { id: 'e33', source: 'n-c9', target: 'n-nf3', type: 'ligacao_societaria', weight: 7 },
  // Alertas
  { id: 'e34', source: 'n-nf1', target: 'n-a1', type: 'fracionamento', weight: 9 },
  { id: 'e35', source: 'n-c3', target: 'n-a2', type: 'ligacao_societaria', weight: 9 },
  { id: 'e36', source: 'n-c1', target: 'n-a3', type: 'fracionamento', weight: 9 },
  { id: 'e37', source: 'n-c8', target: 'n-a8', type: 'pagamento_direto', weight: 8 },
  { id: 'e38', source: 'n-c4', target: 'n-a9', type: 'pagamento_direto', weight: 8 },
  // Credor transversal
  { id: 'e39', source: 'n-c2', target: 'n-o8', type: 'credor_transversal', weight: 8, label: 'R$ 465.000' },
  { id: 'e40', source: 'n-c1', target: 'n-o6', type: 'credor_transversal', weight: 7 },
];

export const paymentTimeline: PaymentTimeline[] = [
  { mes: 'Jan/25', prefeitura: 2100000, camara: 890000, secretarias: 3200000 },
  { mes: 'Fev/25', prefeitura: 1950000, camara: 820000, secretarias: 2900000 },
  { mes: 'Mar/25', prefeitura: 2300000, camara: 910000, secretarias: 3400000 },
  { mes: 'Abr/25', prefeitura: 2050000, camara: 850000, secretarias: 3100000 },
  { mes: 'Mai/25', prefeitura: 2200000, camara: 880000, secretarias: 3300000 },
  { mes: 'Jun/25', prefeitura: 1800000, camara: 780000, secretarias: 2800000 },
  { mes: 'Jul/25', prefeitura: 2400000, camara: 950000, secretarias: 3500000 },
  { mes: 'Ago/25', prefeitura: 2150000, camara: 870000, secretarias: 3150000 },
  { mes: 'Set/25', prefeitura: 2000000, camara: 840000, secretarias: 3050000 },
  { mes: 'Out/25', prefeitura: 2350000, camara: 920000, secretarias: 3450000 },
  { mes: 'Nov/25', prefeitura: 2500000, camara: 960000, secretarias: 3600000 },
  { mes: 'Dez/24', prefeitura: 4800000, camara: 1800000, secretarias: 7140000 },
];

export const heatmapData: HeatmapCell[] = [
  // 2024
  { mes: 1, ano: 2024, valor: 5200000, eventos: 3 },
  { mes: 2, ano: 2024, valor: 4800000, eventos: 2 },
  { mes: 3, ano: 2024, valor: 5100000, eventos: 4 },
  { mes: 4, ano: 2024, valor: 4900000, eventos: 2 },
  { mes: 5, ano: 2024, valor: 5300000, eventos: 3 },
  { mes: 6, ano: 2024, valor: 4600000, eventos: 1 },
  { mes: 7, ano: 2024, valor: 5400000, eventos: 3 },
  { mes: 8, ano: 2024, valor: 5000000, eventos: 2 },
  { mes: 9, ano: 2024, valor: 4700000, eventos: 2 },
  { mes: 10, ano: 2024, valor: 5500000, eventos: 4 },
  { mes: 11, ano: 2024, valor: 5800000, eventos: 5 },
  { mes: 12, ano: 2024, valor: 13740000, eventos: 14 },
  // 2025
  { mes: 1, ano: 2025, valor: 6190000, eventos: 8 },
  { mes: 2, ano: 2025, valor: 5670000, eventos: 5 },
  { mes: 3, ano: 2025, valor: 6610000, eventos: 4 },
];

export const formatBRL = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

export const formatCompact = (value: number): string => {
  if (value >= 1000000) return `R$ ${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `R$ ${(value / 1000).toFixed(0)}K`;
  return formatBRL(value);
};

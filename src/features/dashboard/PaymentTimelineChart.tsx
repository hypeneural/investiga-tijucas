import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { paymentTimeline } from '@/lib/mocks/data';

export function PaymentTimelineChart() {
  const formatValue = (v: number) => `R$ ${(v / 1000000).toFixed(1)}M`;

  return (
    <div className="card-surface p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">Série Temporal de Pagamentos</h3>
        <span className="text-[10px] text-muted-foreground font-mono-data">Mensal</span>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={paymentTimeline} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="gradPref" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(199, 89%, 60%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(199, 89%, 60%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradCam" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradSec" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(160, 64%, 43%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(160, 64%, 43%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 17%)" />
          <XAxis dataKey="mes" tick={{ fontSize: 10, fill: 'hsl(215, 25%, 63%)' }} />
          <YAxis tickFormatter={formatValue} tick={{ fontSize: 10, fill: 'hsl(215, 25%, 63%)' }} width={60} />
          <Tooltip
            contentStyle={{ background: 'hsl(217, 53%, 10%)', border: '1px solid hsl(217, 33%, 17%)', borderRadius: 6, fontSize: 11 }}
            labelStyle={{ color: 'hsl(210, 40%, 98%)' }}
            formatter={(v: number) => [formatValue(v), '']}
          />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Area type="monotone" dataKey="prefeitura" name="Prefeitura" stroke="hsl(199, 89%, 60%)" fill="url(#gradPref)" strokeWidth={2} />
          <Area type="monotone" dataKey="camara" name="Câmara" stroke="hsl(38, 92%, 50%)" fill="url(#gradCam)" strokeWidth={2} />
          <Area type="monotone" dataKey="secretarias" name="Secretarias" stroke="hsl(160, 64%, 43%)" fill="url(#gradSec)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

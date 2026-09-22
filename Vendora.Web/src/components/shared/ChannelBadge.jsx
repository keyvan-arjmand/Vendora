import * as Icons from 'lucide-react';
import { CHANNELS } from '@/lib/constants';

export default function ChannelBadge({ channel, size = 'md' }) {
    const c = CHANNELS[channel];
    if (!c) return null;
    const Icon = Icons[c.icon] || Icons.Circle;

    const sizes = {
        sm: { text:'text-[10px]', pad:'px-2 py-0.5', icon:11 },
        md: { text:'text-[11px]', pad:'px-2.5 py-1', icon:12 },
    };
    const s = sizes[size] || sizes.md;

    return (
        <span
            className={`inline-flex items-center gap-1.5 font-bold rounded-full leading-none whitespace-nowrap ${s.text} ${s.pad}`}
            style={{ color: c.color, background: c.soft }}
        >
      <Icon size={s.icon} />
            {c.nameFa}
    </span>
    );
}
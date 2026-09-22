import { avatarGradient, initials } from '@/lib/format';

export default function Avatar({ name, size = 36, radius = 10, fontSize }) {
    return (
        <div
            className="flex-none grid place-items-center text-white font-bold"
            style={{
                width: size,
                height: size,
                borderRadius: radius,
                fontSize: fontSize || Math.round(size * 0.4),
                background: avatarGradient(name),
            }}
        >
            {initials(name)}
        </div>
    );
}
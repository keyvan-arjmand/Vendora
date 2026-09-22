export default function Skeleton({ className = '', w, h, radius = 8 }) {
    return (
        <div
            className={`animate-pulse bg-[var(--sp-surface-3)] ${className}`}
            style={{
                width: w,
                height: h,
                borderRadius: radius,
            }}
        />
    );
}
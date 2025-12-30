export const CornerBorder = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
    const rotation = {
        'top-left': 'rotate(0deg)',
        'top-right': 'rotate(90deg)',
        'bottom-right': 'rotate(180deg)',
        'bottom-left': 'rotate(270deg)',
    };

    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-10 w-16 h-16 md:w-24 md:h-24 pointer-events-none text-ka-red"
            style={{
                top: position.includes('top') ? 0 : 'auto',
                bottom: position.includes('bottom') ? 0 : 'auto',
                left: position.includes('left') ? 0 : 'auto',
                right: position.includes('right') ? 0 : 'auto',
                transform: rotation[position],
                margin: '20px'
            }}
        >
            <path d="M4 4H40V12H12V40H4V4Z" fill="currentColor" />
            <path d="M20 20H48V24H24V48H20V20Z" fill="currentColor" fillOpacity="0.5" />
            <rect x="50" y="4" width="30" height="4" fill="currentColor" />
            <rect x="4" y="50" width="4" height="30" fill="currentColor" />
            <rect x="85" y="4" width="4" height="4" fill="currentColor" />
            <rect x="4" y="85" width="4" height="4" fill="currentColor" />
            <path d="M54 54L80 54V80H54V54ZM58 58V76H76V58H58Z" fill="currentColor" />
        </svg>
    );
};

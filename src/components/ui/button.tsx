import React from 'react';

// Based on ShadCN/UI Button props, but simplified for placeholder
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | 'default'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
        | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean; // Wird hier nicht implementiert, aber für Kompatibilität erwähnt
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, variant, size, type = 'button', children, ...props },
        ref,
    ) => {
        // Diese Basisstile sind extrem vereinfacht und dienen nur dazu, dass etwas Sichtbares gerendert wird.
        // Eine echte UI-Bibliothek hätte hier komplexere Logik und Stile.
        const baseStyle =
            'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

        let variantStyles = 'bg-purple-600 text-white hover:bg-purple-700'; // Default variant

        if (variant === 'outline') {
            variantStyles =
                'border border-input bg-background hover:bg-accent hover:text-accent-foreground';
        }
        if (variant === 'destructive') {
            variantStyles = 'bg-red-600 text-white hover:bg-red-700';
        }
        // Weitere Varianten könnten hier hinzugefügt werden

        let sizeStyles = 'h-10 py-2 px-4'; // Default size
        if (size === 'sm') {
            sizeStyles = 'h-9 px-3 rounded-md';
        }
        if (size === 'lg') {
            sizeStyles = 'h-11 px-8 rounded-md';
        }

        return (
            <button
                type={type}
                className={`${baseStyle} ${variantStyles} ${sizeStyles} ${className || ''}`}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    },
);
Button.displayName = 'Button';

export { Button };

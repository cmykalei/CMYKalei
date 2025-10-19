import React from 'react';
import { VideoAvatar } from './VideoAvatar';
import clsx from 'clsx';

export type HeaderProps = {
    greeting?: string | "Hello";
    name: string;
    qualification: string;
    flex: string;
    icon?: React.ReactNode;
};

/**
 * Minimal, responsive Header component with name, qualification and optional icon.
 * Styling is inline to keep the project minimal and avoid extra CSS files.
 */
export function Header({ greeting, name, flex }: HeaderProps) {
    return (
        <>
            <div
                className={clsx(
                    'flex justify-center items-center gap-4',
                    flex === 'col' ? 'flex-col' : 'flex-row'
                )}
            >
                <h1 className="shrink-0">{greeting ?? 'Hello'}, my name is {name}!</h1>
                <VideoAvatar src="/memoji.mp4" size={200} />
                <h3 className="shrink-0">This is a placeholder portrait!</h3>
                <p className="shrink-0">Disclaimer: I haven't graduated yet, but we can let a girl dream.</p>
            </div>
        </>
    );
}
export default Header;

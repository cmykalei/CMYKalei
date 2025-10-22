import * as React from "react"
import { Video_avatar } from './video_avatar.tsx';

export type HeaderProps = {
    greeting?: string | "Hello";
    name: string;
    qualification?: string;
    disclaimer?: string;
    flex?: 'row' | 'col';
    icon?: React.ReactNode;
    className?: string;
    size?: "small" | "medium" | "large" | string;
};

/**
 * Header component that displays a greeting, name, qualification, and a video avatar.
 *
 * @param       {HeaderProps} props The properties for the Header component.
 * @returns     {JSX.Element}       The rendered Header component.
 */
export function Header({
                           greeting,
                           name,
                           qualification,
                           disclaimer,
                           flex = 'row',
                           icon,
                           size
}: HeaderProps): JSX.Element {
    const resolvedSize =
        size === "small" ? 100 :
        size === "medium" ? 180 :
        size === "large" ? 220 :
        typeof size === "string" ? parseInt(size) || 200 :
        200;

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    padding: 24,
                    marginTop: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 20,
                    flexDirection: flex === 'col' ? 'column' : 'row',
                }}
            >
                <h1>
                    {greeting ?? 'Hello'}, I'm {name}.
                </h1>
                <Video_avatar src="/memoji.mp4" size={resolvedSize} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    textAlign: flex === 'col' ? 'center' : 'left'
                }}>
                    {icon}
                    {qualification && <strong>{qualification}</strong>}
                    {disclaimer && <small> Disclaimer: {disclaimer}</small>}
                </div>
            </div>
        </>
    );
}
export default Header;

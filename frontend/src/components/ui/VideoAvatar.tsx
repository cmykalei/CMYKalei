import * as Avatar from '@radix-ui/react-avatar';

export function VideoAvatar({src, size = 100 }:
    { src: string; size?: number; }) {
    return (
        <Avatar.Root
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'inline-block',
                flexShrink: 0,
            }}
        >
            <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controls={false}
                onContextMenu={(e) => e.preventDefault()}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    imageRendering: 'auto',
                    transform: 'translateZ(0)',
                    display: 'block',
                }}
            />
        </Avatar.Root>
    );
}
import * as Avatar from '@radix-ui/react-avatar';

export function VideoAvatar({ src, fallbackText }: { src: string; fallbackText: string }) {
    return (
        <Avatar.Root className="AvatarRoot">
            <video
                className="AvatarImage"
                src={src}
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controls={false}
                onContextMenu={(e) => e.preventDefault()}
                style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    width: 120,
                    height: 120,
                    imageRendering: 'auto',
                    transform: 'translateZ(0)'
                }}
            />
            <Avatar.Fallback className="AvatarFallback" delayMs={12000}>
                {fallbackText}
            </Avatar.Fallback>
        </Avatar.Root>
    );
}
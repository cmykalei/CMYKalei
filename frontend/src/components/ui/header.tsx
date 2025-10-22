import { Video_avatar } from './video_avatar.tsx';
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
    Card,
    CardContent,
    CardDescription, CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export type HeaderProps = {
    name: string;
    qualification?: string;
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
                           name,
                           qualification,
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
            <Card className="min-w-[240px] max-w-[320px] w-full top-0 left-0 pt-10 px-1 mt-5">
                <CardHeader className="flex flex-row items-center justify-center gap-4">
                    <Video_avatar src="/memoji.mp4" size={resolvedSize} />
                    <CardTitle className="m-0 p-0"><h1>{name}</h1><p>@cmykalei</p></CardTitle> {/* Placeholder */}
                </CardHeader>

                <CardContent className="flex flex-col items-center gap-8">
                    <CardDescription className="text-center ml-2">
                        {qualification}
                    </CardDescription>
                    <CardFooter className="w-full flex flex-col gap-4 items-stretch">
                        <Button
                            variant="default"
                            size="lg"
                            className="!no-underline w-full"
                            href="https://www.instagram.com/cmykalei/"
                            target="_blank">
                            <InstagramLogoIcon className="size-4 mr-1" /> Instagram
                        </Button>
                        <Button
                            variant="default"
                            size="lg"
                            className="!no-underline w-full"
                            href="https://github.com/cmykalei"
                            target="_blank">
                            <GitHubLogoIcon className="size-4 mr-1" /> GitHub
                        </Button>
                        <Button
                            variant="default"
                            size="lg"
                            className="!no-underline w-full"
                            href="https://www.linkedin.com/in/cmykalei/"
                            target="_blank">
                            <LinkedInLogoIcon className="size-4 mr-1" /> LinkedIn
                        </Button>
                    </CardFooter>
                </CardContent>
            </Card>
        </>
    );
}
export default Header;

import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <div className="app-grid">
      <Header
        greeting="Hi"
        name="Kalei"
        qualification="Bachelor of Computer Science, University of Waikato, NZ"
        disclaimer="Still undergrad, so Memoji placeholder 🤭"
        flex="col"
        size="medium"
      />

        <Button
            variant="outline"
            size="sm"
            className="mt-4 !no-underline"
            href="https://www.instagram.com/cmykalei/"
            target="_blank">
            <InstagramLogoIcon className="mr-2 size-4" /> Instagram
        </Button>

        <Button
            variant="outline"
            size="sm"
            className="mt-4 !no-underline"
            href="https://github.com/cmykalei"
            target="_blank">
            <GitHubLogoIcon className="mr-2 size-4" /> GitHub
        </Button>

        <Button
            variant="outline"
            size="sm"
            className="mt-4 !no-underline"
            href="https://www.linkedin.com/in/cmykalei/"
            target="_blank">
            <LinkedInLogoIcon className="mr-2 size-4" /> LinkedIn
        </Button>
    </div>
  )
}

export default App

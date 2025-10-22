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

        <Button variant="outline" size="sm" className="mt-4">
            <InstagramLogoIcon className="mr-2 size-4" />
        </Button>

        <Button variant="outline" size="sm" className="mt-4">
            <GitHubLogoIcon className="mr-2 size-4" />
        </Button>

        <Button variant="outline" size="sm" className="mt-4">
            <LinkedInLogoIcon className="mr-2 size-4" />
        </Button>
    </div>
  )
}

export default App

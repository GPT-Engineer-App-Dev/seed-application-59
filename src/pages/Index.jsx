import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Your New App</h1>
      <p className="text-lg text-muted-foreground">
        Start building your application by modifying this page.
      </p>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
    </div>
  );
};

export default Index;
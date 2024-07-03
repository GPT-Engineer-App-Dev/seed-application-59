import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Welcome to our application! We are dedicated to providing the best
            service to our users. Our team works tirelessly to ensure that you
            have a seamless experience.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
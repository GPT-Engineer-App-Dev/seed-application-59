import { Button } from "@/components/ui/button";
import { useEvents } from "@/integrations/supabase/index.js";

const Index = () => {
  const { data: events, error, isLoading } = useEvents();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Your New App</h1>
      <p className="text-lg text-muted-foreground">
        Start building your application by modifying this page.
      </p>
      <Button variant="primary" size="lg">
        Get Started
      </Button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Events</h2>
        <ul className="mt-4 space-y-2">
          {events.map((event) => (
            <li key={event.id} className="border p-4 rounded">
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Created At: {new Date(event.created_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
import { Link, Outlet } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useOfflineSupport } from "@/hooks/useOfflineSupport";
import { cn } from "@/lib/utils";

export default function Layout() {
  const { online, swReady } = useOfflineSupport();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--brand-50))] via-background to-[hsl(var(--brand-100))] text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary font-black">⛑️</span>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold tracking-tight text-xl">AidReady</span>
              <span className="text-xs text-muted-foreground">Offline First Aid Guides</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Badge
              variant={online ? "default" : "destructive"}
              className={cn(
                "rounded-full px-3 py-1 text-xs",
                online ? "bg-emerald-500 text-white" : "bg-amber-600 text-white",
              )}
            >
              {online ? "Online" : "Offline"}
            </Badge>
            {swReady ? (
              <Badge className="rounded-full px-3 py-1 text-xs bg-primary/15 text-primary">Cached</Badge>
            ) : (
              <Badge className="rounded-full px-3 py-1 text-xs bg-muted text-muted-foreground">No SW</Badge>
            )}
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        <Outlet />
      </main>

      <Separator className="mt-4" />
      <footer className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-2">
        <p>
          For education only. Not a substitute for professional medical advice. In emergencies, call local services.
        </p>
        <nav className="flex items-center gap-4">
          <a className="hover:underline" href="/">Home</a>
          <a className="hover:underline" href="#guides">Guides</a>
        </nav>
      </footer>
    </div>
  );
}

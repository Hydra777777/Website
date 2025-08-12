import { Bot, GitBranch, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-8 bg-card border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8 mr-2 text-primary" />
              <h3 className="text-xl font-bold">ProxyPilot</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Advanced proxies and bypass exploits by Lonely Corporation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Team</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">News</Link></li>
              <li><Link href="#mission" className="text-sm text-muted-foreground hover:text-primary">Mission</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com/Lonely-Corporation" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitBranch className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <a href="https://discord.com/users/1359849892931178546" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                <MessageCircle className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lonely Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function Community() {
  return (
    <section id="community" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join the Conversation</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
              Connect with our team and other users on Discord. Share ideas, get support, and stay up-to-date with the latest from Lonely Corporation.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
              <iframe
                src="https://discord.com/widget?id=1359849892931178546&theme=dark"
                width="350"
                height="500"
                allowtransparency="true"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                title="Lonely Corporation Discord Widget"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

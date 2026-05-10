export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <img
              src="/logo-jv.jpg"
              alt="JV Distribuidora Logo"
              className="h-12 w-12 rounded-lg object-contain md:h-14 md:w-14"
            />
            <span className="font-semibold text-foreground">
              JV Distribuidora
            </span>
          </div>

          <p className="text-center text-xs text-muted-foreground md:text-sm">
            WhatsApp: +56 9 3077 6762
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JV Distribuidora
          </p>
        </div>
      </div>
    </footer>
  )
}

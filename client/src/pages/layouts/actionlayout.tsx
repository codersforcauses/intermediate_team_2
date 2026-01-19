type ActionLayoutProps = {
  children: React.ReactNode;

  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
};

export default function ActionLayout({
  children,
  primaryAction,
  secondaryAction,
}: ActionLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 px-4 py-6">{children}</main>

      {(primaryAction || secondaryAction) && (
        <footer className="sticky bottom-0 border-t bg-white px-4 py-3">
          <div className="mx-auto flex max-w-3xl gap-3">
            {secondaryAction}
            {primaryAction}
          </div>
        </footer>
      )}
    </div>
  );
}

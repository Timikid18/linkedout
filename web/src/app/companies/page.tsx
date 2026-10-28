import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CompaniesPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Companies</h1>
            <p className="mt-2 text-muted-foreground">
              Abeg, find the one you&apos;re about to interview with.
            </p>
          </div>
          <Link href="/reviews/write">
            <Button>Spill the tea</Button>
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">No companies yet</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Once we seed Lagos favourites, they&apos;ll show here. Be the first to
              add a review for your company!
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

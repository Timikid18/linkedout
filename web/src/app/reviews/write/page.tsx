import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function WriteReviewPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-2xl px-4 py-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Spill the tea, anonymously</h1>
          <p className="mt-2 text-muted-foreground">
            Help a brother/sister make a better decision. Stick to facts, avoid
            names &amp; private info. Remember: systems, not individuals.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Your review</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company *</Label>
              <Input id="company" placeholder="Start typing company name..." />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Status *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Current or former?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CURRENT">Current employee</SelectItem>
                    <SelectItem value="FORMER">Former employee</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job title/role *</Label>
                <Input id="jobTitle" placeholder="e.g. Product Designer" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="body">Tell us what it&apos;s really like *</Label>
              <Textarea
                id="body"
                placeholder="Oya spill... What stood out? The good, the 'chai', the lessons."
                rows={6}
              />
            </div>
            <div className="space-y-2">
              <Label>Overall rating *</Label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Button key={n} variant="outline" size="sm">
                    {n} ★
                  </Button>
                ))}
              </div>
            </div>
            <div className="rounded-md border p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Quick reminder</p>
              <ul className="mt-2 list-disc space-y-1 pl-4">
                <li>Your identity stays hidden. Always.</li>
                <li>Review goes to moderation first (chai, we gotta do it).</li>
                <li>No private numbers, emails, IDs or names.</li>
                <li>Aim for systems &amp; tropes, not personal attacks.</li>
              </ul>
            </div>
            <Button className="w-full">Submit for moderation</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

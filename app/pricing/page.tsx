import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing Plans</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your needs, upgrade or downgrade anytime
        </p>

        <div className="flex justify-center mt-8">
          <Tabs defaultValue="monthly">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Free Plan</CardTitle>
            <CardDescription>Basic AI therapy access</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Basic AI chat therapy</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>10 sessions per month</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>3 languages supported</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Basic mood tracking</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Access to community resources</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="border-primary">
          <CardHeader>
            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm w-fit mb-2">Most Popular</div>
            <CardTitle>Premium Plan</CardTitle>
            <CardDescription>Enhanced AI support + limited human therapy</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">$19.99</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>
                  <strong>Unlimited</strong> AI therapy sessions
                </span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>1 session with human therapist/month</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>20+ languages supported</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Advanced emotional analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Personalized wellness plan</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Priority support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" asChild>
              <Link href="/signup">Choose Premium</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Professional Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Plan</CardTitle>
            <CardDescription>Full human therapy + AI support</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">$79.99</span>
              <span className="text-muted-foreground ml-1">/month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Everything in Premium plan</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>
                  <strong>4 sessions</strong> with human therapist/month
                </span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Personalized therapist matching</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Progress tracking with therapist</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>Expert-led group sessions</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>24/7 urgent support access</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/signup">Choose Professional</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 bg-muted rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about our plans</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-2">Can I switch between plans?</h3>
            <p className="text-muted-foreground text-sm">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected at the start of your
              next billing cycle.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Is my information secure?</h3>
            <p className="text-muted-foreground text-sm">
              Absolutely. We use end-to-end encryption and comply with HIPAA and other mental health regulations to
              protect your privacy.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">How do I book a session with a therapist?</h3>
            <p className="text-muted-foreground text-sm">
              Premium and Professional plan members can schedule sessions through the "Connect" section of the platform
              with just a few clicks.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Do you offer refunds?</h3>
            <p className="text-muted-foreground text-sm">
              We offer a 7-day money-back guarantee if you're not satisfied with our service. Contact our support team
              for assistance.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Are there any discounts available?</h3>
            <p className="text-muted-foreground text-sm">
              We offer special rates for students, healthcare workers, and annual subscribers. Contact us for more
              information on eligibility.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Can I use insurance?</h3>
            <p className="text-muted-foreground text-sm">
              Some insurance plans cover our Professional plan. We can provide documentation for reimbursement. Check
              with your provider.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
        <p className="text-muted-foreground mb-6">We offer custom plans for organizations and healthcare providers</p>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

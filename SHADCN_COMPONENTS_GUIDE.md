# Shadcn Components Implementation Guide

## 🎨 Installed Components

We've installed and configured the best shadcn/ui components for your therapy website:

### Core Components
- ✅ **Accordion** - For FAQ sections
- ✅ **Tabs** - For multi-step forms
- ✅ **Dialog** - For modals and popups
- ✅ **Sheet** - For slide-out panels
- ✅ **Sonner** - For toast notifications
- ✅ **Slider** - For rating scales
- ✅ **Carousel** - For testimonials/content
- ✅ **Form** - For better form handling
- ✅ **Select** - For dropdowns
- ✅ **Textarea** - For long text input
- ✅ **Switch** - For toggle options
- ✅ **Avatar** - For profile pictures
- ✅ **Separator** - For visual dividers
- ✅ **Skeleton** - For loading states
- ✅ **Progress** - For progress indicators

### Custom Components Created
- 🎯 **MultiStepAssessment** - Modern multi-step quiz component
- 🔍 **SearchableFAQ** - Advanced FAQ with search and categories

## 📦 Implementation Examples

### 1. Multi-Step Assessment Component

Perfect for all assessment pages (ADHD, anxiety, depression, stress, habits).

```tsx
// app/assessment/anxiety/page.tsx
import { MultiStepAssessment } from "@/components/ui/multi-step-assessment"

const anxietyQuestions = [
  {
    id: "q1",
    text: "Over the last 2 weeks, how often have you felt nervous, anxious, or on edge?",
    options: [
      { value: 0, label: "Not at all" },
      { value: 1, label: "Several days" },
      { value: 2, label: "More than half the days" },
      { value: 3, label: "Nearly every day" }
    ]
  },
  // Add more questions...
]

function ResultComponent({ score }: { score: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Assessment Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center space-y-4">
          <div className="text-4xl font-bold text-therapeutic-primary">
            {score} / 21
          </div>
          <Progress value={(score / 21) * 100} />
          <p className="text-therapeutic-muted">
            {score < 5 && "Minimal anxiety"}
            {score >= 5 && score < 10 && "Mild anxiety"}
            {score >= 10 && score < 15 && "Moderate anxiety"}
            {score >= 15 && "Severe anxiety"}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AnxietyAssessment() {
  const handleComplete = (answers: Record<string, number>) => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
    // Handle completion logic
  }

  return (
    <MultiStepAssessment
      title="Anxiety Assessment (GAD-7)"
      description="This questionnaire helps assess anxiety symptoms"
      questions={anxietyQuestions}
      onComplete={handleComplete}
      resultComponent={<ResultComponent score={15} />}
    />
  )
}
```

### 2. Searchable FAQ Component

Perfect for the FAQ page with categorized questions.

```tsx
// app/faq/page.tsx
import { SearchableFAQ } from "@/components/ui/searchable-faq"
import { DollarSign, Clock, Shield, Heart } from "lucide-react"

const faqCategories = [
  {
    name: "Getting Started",
    icon: <Heart className="h-5 w-5 text-therapeutic-primary" />,
    description: "Everything you need to know to begin",
    items: [
      {
        question: "How do I book my first session?",
        answer: "You can book your first session by clicking the 'Book Consultation' button..."
      },
      // More questions...
    ]
  },
  {
    name: "Insurance & Fees",
    icon: <DollarSign className="h-5 w-5 text-therapeutic-primary" />,
    description: "Payment and insurance information",
    items: [
      {
        question: "What are your fees?",
        answer: "Individual therapy sessions are $180 per 50-minute session..."
      },
      // More questions...
    ]
  },
  // More categories...
]

export default function FAQPage() {
  return (
    <div className="container mx-auto py-12">
      <SearchableFAQ
        title="Frequently Asked Questions"
        description="Find answers to common questions about our therapy services"
        categories={faqCategories}
      />
    </div>
  )
}
```

### 3. Form with Validation

Using shadcn Form component with react-hook-form and zod.

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  concern: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters")
})

export function BookingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      concern: "",
      message: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Booking request submitted!", {
      description: "We'll contact you within 24 hours."
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="concern"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Concern</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a concern" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="anxiety">Anxiety</SelectItem>
                  <SelectItem value="depression">Depression</SelectItem>
                  <SelectItem value="stress">Stress & Burnout</SelectItem>
                  <SelectItem value="adhd">ADHD</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit Booking Request</Button>
      </form>
    </Form>
  )
}
```

### 4. Toast Notifications (Sonner)

Add to your layout.tsx:

```tsx
// app/layout.tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}

// Usage in any component:
import { toast } from "sonner"

// Success
toast.success("Assessment completed!")

// Error
toast.error("Please fill all required fields")

// Info
toast.info("Your session starts in 10 minutes")

// With custom styling
toast.success("Booking confirmed!", {
  description: "Check your email for details",
  duration: 5000
})
```

### 5. Loading States with Skeleton

```tsx
import { Skeleton } from "@/components/ui/skeleton"

export function AssessmentSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-2 w-full" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
      </CardContent>
    </Card>
  )
}
```

### 6. Dialog for Confirmations

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"

export function BookingConfirmDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Book Session</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Your Booking</DialogTitle>
          <DialogDescription>
            You're about to book a therapy session for Tuesday, Dec 10 at 2:00 PM.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            You'll receive a confirmation email with session details and preparation tips.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm Booking</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

## 🚀 Next Steps

1. **Replace existing assessment pages** with `MultiStepAssessment` component
2. **Update FAQ page** to use `SearchableFAQ` component
3. **Add form validation** to booking form using shadcn Form
4. **Implement toast notifications** for user feedback
5. **Add loading states** with Skeleton components
6. **Use Tabs** for service page sections
7. **Implement Carousel** for testimonials (when CRPO compliant)

## 📝 Component Benefits

- **Better UX**: Smooth animations, progress indicators, and intuitive navigation
- **Mobile-First**: All components are fully responsive
- **Accessibility**: Built-in ARIA labels and keyboard navigation
- **Performance**: Optimized rendering and lazy loading
- **Consistency**: Unified design system across the site
- **Customizable**: Easy to modify with Tailwind classes

## 🎨 Theming

All components use your therapeutic color palette:
- `therapeutic-primary`: Main brand color
- `therapeutic-secondary`: Supporting color
- `therapeutic-accent`: Highlight color
- `therapeutic-light`: Background tints
- `therapeutic-dark`: Text color
- `therapeutic-muted`: Subtle text

## 🔧 Installation Commands

If you need to add more shadcn components:

```bash
# Individual components
npx shadcn@latest add [component-name]

# Multiple components
npx shadcn@latest add alert badge breadcrumb

# With overwrite flag (if updating)
npx shadcn@latest add button --overwrite
```

## 📚 Resources

- [Shadcn UI Documentation](https://ui.shadcn.com)
- [Component Examples](https://ui.shadcn.com/examples)
- [Themes Gallery](https://ui.shadcn.com/themes)
- [v0.dev for AI-generated designs](https://v0.dev)
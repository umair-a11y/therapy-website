"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, RefreshCw, Phone, MessageCircle, BookOpen, Users, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelfCheckResultsProps {
  answers: Record<string, number>
  onRestart: () => void
}

export default function SelfCheckResults({ answers, onRestart }: SelfCheckResultsProps) {
  // Calculate total score (lower is better)
  const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0)
  const maxScore = Object.keys(answers).length * 5
  const percentageScore = ((maxScore - totalScore) / (maxScore - Object.keys(answers).length)) * 100

  const getWellbeingLevel = (score: number) => {
    if (score >= 80) return { level: "Strong", color: "resolve-forest", description: "Your results indicate strong wellbeing" }
    if (score >= 60) return { level: "Good", color: "resolve-sage", description: "You're managing well overall" }
    if (score >= 40) return { level: "Fair", color: "resolve-compass", description: "Some areas could use attention" }
    if (score >= 20) return { level: "Concerning", color: "orange-500", description: "Consider reaching out for support" }
    return { level: "Needs Attention", color: "red-500", description: "Professional support may be beneficial" }
  }

  const wellbeing = getWellbeingLevel(percentageScore)

  const resources = [
    {
      icon: Phone,
      title: "Crisis Support",
      description: "24/7 crisis helpline (Canada)",
      action: "Call 9-8-8",
      urgent: true,
    },
    {
      icon: MessageCircle,
      title: "Book a Consultation",
      description: "Connect with our team for support",
      action: "Book Free Consult",
      urgent: false,
    },
    {
      icon: BookOpen,
      title: "Self-Help Resources",
      description: "Educational tools and guides",
      action: "Explore Resources",
      urgent: false,
    },
    {
      icon: Users,
      title: "Community Resources",
      description: "Find support in Ontario",
      action: "View Resources",
      urgent: false,
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-3 rounded-full bg-resolve-forest/10">
              <Heart className="h-8 w-8 text-resolve-forest" />
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-balance text-foreground">Your Wellbeing Self-Check</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-lg mx-auto">
            Thank you for taking the time to reflect on your mental health. Here are your results.
          </p>
          <div className="bg-resolve-sage/10 border border-resolve-sage/30 rounded-lg p-3 max-w-md mx-auto">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-resolve-forest mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground text-left">
                <strong>Important:</strong> This is an educational self-check only. It is not a clinical assessment, diagnosis, or medical advice. Please consult a qualified healthcare professional for proper evaluation.
              </p>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <Card
          className="border-0 shadow-xl bg-card/80 backdrop-blur-sm animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge
                variant="secondary"
                className={cn(
                  "text-white border-0 px-4 py-2 text-base font-medium",
                  wellbeing.color === "resolve-forest" && "bg-resolve-forest",
                  wellbeing.color === "resolve-sage" && "bg-resolve-sage",
                  wellbeing.color === "resolve-compass" && "bg-resolve-compass",
                  wellbeing.color === "orange-500" && "bg-orange-500",
                  wellbeing.color === "red-500" && "bg-red-500",
                )}
              >
                {wellbeing.level} Wellbeing
              </Badge>
            </div>
            <CardTitle className="text-2xl font-medium text-balance">{wellbeing.description}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Score Visualization */}
            <div className="text-center space-y-4">
              <div className="relative w-48 h-48 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-resolve-sage/20"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - percentageScore / 100)}`}
                    className={cn(
                      "transition-all duration-1000 ease-out",
                      wellbeing.color === "resolve-forest" && "text-resolve-forest",
                      wellbeing.color === "resolve-sage" && "text-resolve-sage",
                      wellbeing.color === "resolve-compass" && "text-resolve-compass",
                      wellbeing.color === "orange-500" && "text-orange-500",
                      wellbeing.color === "red-500" && "text-red-500",
                    )}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">{Math.round(percentageScore)}</div>
                    <div className="text-sm text-muted-foreground">out of 100</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid gap-4">
              <h3 className="text-lg font-medium text-center text-foreground mb-2">Self-Check Breakdown</h3>
              {Object.entries(answers).map(([questionId, score], index) => {
                const questionTitles: Record<string, string> = {
                  mood: "Overall Mood",
                  energy: "Energy Level",
                  sleep: "Sleep Quality",
                  stress: "Stress Management",
                  relationships: "Social Connections",
                  focus: "Concentration",
                }

                const normalizedScore = ((5 - score + 1) / 5) * 100

                return (
                  <div key={questionId} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{questionTitles[questionId]}</span>
                      <span className="text-muted-foreground">{Math.round(normalizedScore)}%</span>
                    </div>
                    <div className="h-2 bg-resolve-sage/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-resolve-forest to-resolve-compass transition-all duration-1000 ease-out rounded-full"
                        style={{
                          width: `${normalizedScore}%`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <div className="grid md:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {resources.map((resource, index) => (
            <Card
              key={index}
              className={cn(
                "border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]",
                resource.urgent && "ring-2 ring-red-500/20 bg-red-50/50",
              )}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "p-3 rounded-full",
                      resource.urgent ? "bg-red-100 text-red-600" : "bg-resolve-sage/20 text-resolve-forest",
                    )}
                  >
                    <resource.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-medium text-foreground">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                    <Button
                      size="sm"
                      variant={resource.urgent ? "destructive" : "default"}
                      className={cn("mt-3", !resource.urgent && "bg-resolve-forest hover:bg-resolve-forest-dark")}
                    >
                      {resource.action}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button
            variant="outline"
            onClick={onRestart}
            className="flex items-center gap-2 bg-card/50 border-resolve-sage/30 hover:bg-resolve-sage/10"
          >
            <RefreshCw className="h-4 w-4" />
            Take Self-Check Again
          </Button>
          <Button className="bg-resolve-compass hover:bg-resolve-compass/90 text-white shadow-lg">
            Book Free Consultation
          </Button>
        </div>

        {/* Emergency Notice */}
        <div className="text-center text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="font-medium text-red-600 mb-2">If you're in crisis or having thoughts of self-harm:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span>🚨 Call 911</span>
            <span>📞 Crisis Line: 9-8-8</span>
            <span>🏥 Visit your nearest emergency department</span>
          </div>
        </div>
      </div>
    </div>
  )
}
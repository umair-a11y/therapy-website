"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, HelpCircle, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
  category?: string
}

interface FAQCategory {
  name: string
  icon?: React.ReactNode
  description?: string
  items: FAQItem[]
}

interface SearchableFAQProps {
  title?: string
  description?: string
  categories: FAQCategory[]
  className?: string
}

export function SearchableFAQ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions",
  categories,
  className
}: SearchableFAQProps) {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)
  const [expandedCategories, setExpandedCategories] = React.useState<string[]>([])

  // Filter FAQs based on search term
  const filteredCategories = React.useMemo(() => {
    if (!searchTerm && !selectedCategory) return categories

    return categories
      .map(category => ({
        ...category,
        items: category.items.filter(item => {
          const matchesSearch = !searchTerm ||
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
          const matchesCategory = !selectedCategory || selectedCategory === category.name
          return matchesSearch && matchesCategory
        })
      }))
      .filter(category => category.items.length > 0)
  }, [searchTerm, selectedCategory, categories])

  const toggleCategory = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null)
      setExpandedCategories([])
    } else {
      setSelectedCategory(categoryName)
      setExpandedCategories([categoryName])
    }
  }

  const totalResults = filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0)

  return (
    <div className={cn("space-y-8", className)}>
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <div className="p-3 bg-therapeutic-primary/10 rounded-full">
            <HelpCircle className="h-8 w-8 text-therapeutic-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
        >
          <h2 className="text-3xl font-bold text-therapeutic-dark">{title}</h2>
          <p className="text-therapeutic-muted max-w-2xl mx-auto">{description}</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto relative"
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-therapeutic-muted h-5 w-5" />
          <Input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-6 text-base border-therapeutic-primary/20 focus:border-therapeutic-primary"
          />
          {searchTerm && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Badge variant="secondary" className="text-xs">
                {totalResults} result{totalResults !== 1 ? 's' : ''}
              </Badge>
            </div>
          )}
        </motion.div>
      </div>

      {/* Category Cards */}
      {!searchTerm && !selectedCategory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card
                className="cursor-pointer hover:shadow-lg transition-all duration-200 border-therapeutic-primary/10 hover:border-therapeutic-primary/30"
                onClick={() => toggleCategory(category.name)}
              >
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {category.icon && (
                        <div className="p-2 bg-therapeutic-primary/10 rounded-lg">
                          {category.icon}
                        </div>
                      )}
                      <CardTitle className="text-lg font-semibold text-therapeutic-dark">
                        {category.name}
                      </CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.items.length}
                    </Badge>
                  </div>
                  {category.description && (
                    <CardDescription className="text-sm text-therapeutic-muted">
                      {category.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-therapeutic-primary text-sm font-medium">
                    View Questions
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Filtered FAQs */}
      <AnimatePresence mode="wait">
        {(searchTerm || selectedCategory) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {selectedCategory && (
              <div className="flex items-center justify-center gap-2">
                <Badge
                  variant="default"
                  className="bg-therapeutic-primary/10 text-therapeutic-primary hover:bg-therapeutic-primary/20 cursor-pointer"
                  onClick={() => setSelectedCategory(null)}
                >
                  {selectedCategory} ✕
                </Badge>
              </div>
            )}

            {filteredCategories.map((category) => (
              <Card key={category.name} className="border-therapeutic-primary/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {category.icon && (
                      <div className="p-2 bg-therapeutic-primary/10 rounded-lg">
                        {category.icon}
                      </div>
                    )}
                    <div className="flex-1">
                      <CardTitle className="text-xl text-therapeutic-dark">
                        {category.name}
                      </CardTitle>
                      {category.description && (
                        <CardDescription className="text-sm text-therapeutic-muted mt-1">
                          {category.description}
                        </CardDescription>
                      )}
                    </div>
                    <Badge variant="outline">{category.items.length} questions</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion
                    type="multiple"
                    value={expandedCategories.includes(category.name) ? category.items.map((_, i) => `item-${i}`) : []}
                    className="space-y-2"
                  >
                    {category.items.map((item, index) => {
                      const itemValue = `item-${index}`
                      const highlightedQuestion = searchTerm
                        ? item.question.replace(
                            new RegExp(`(${searchTerm})`, 'gi'),
                            '<mark class="bg-therapeutic-accent/30 px-0.5 rounded">$1</mark>'
                          )
                        : item.question

                      return (
                        <AccordionItem
                          key={index}
                          value={itemValue}
                          className="border rounded-lg px-4 border-therapeutic-primary/10 data-[state=open]:bg-therapeutic-light/30"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-4">
                            <span
                              className="text-therapeutic-dark font-medium pr-4"
                              dangerouslySetInnerHTML={{ __html: highlightedQuestion }}
                            />
                          </AccordionTrigger>
                          <AccordionContent className="text-therapeutic-muted pb-4">
                            <div className="pt-2 pl-2 border-l-2 border-therapeutic-primary/20 ml-2">
                              <div className="pl-4">
                                {searchTerm ? (
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: item.answer.replace(
                                        new RegExp(`(${searchTerm})`, 'gi'),
                                        '<mark class="bg-therapeutic-accent/30 px-0.5 rounded">$1</mark>'
                                      )
                                    }}
                                  />
                                ) : (
                                  item.answer
                                )}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )
                    })}
                  </Accordion>
                </CardContent>
              </Card>
            ))}

            {filteredCategories.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="p-4 bg-therapeutic-light rounded-full inline-block mb-4">
                  <Search className="h-8 w-8 text-therapeutic-muted" />
                </div>
                <h3 className="text-lg font-semibold text-therapeutic-dark mb-2">
                  No questions found
                </h3>
                <p className="text-therapeutic-muted">
                  Try adjusting your search terms or browse all categories
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
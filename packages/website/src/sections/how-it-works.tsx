import { Card, CardContent } from '@/components/ui/card'
import { Code2, Boxes, Zap } from 'lucide-react'

interface HowItWorksProps extends React.HTMLAttributes<HTMLDivElement> {}

export const HowItWorks = ({ ...props }: HowItWorksProps) => {
  return (
    <section
      className="w-full flex flex-col gap-4 items-center container my-20"
      {...props}
    >
      <div className="bg-primary/5 dark:bg-primary/10 py-24 px-4 w-full rounded-2xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            How It Works
          </h2>
          <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
            Integrate our JSON API to seamlessly manage creator usernames across
            your platforms.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    JSON-Powered API
                  </h3>
                  <p className="text-foreground/80">
                    Access and manage creator data with our easy-to-use JSON
                    format, perfect for integration into your existing systems.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Boxes className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Cross-Platform Compatibility
                  </h3>
                  <p className="text-foreground/80">
                    Ensure consistency of creator identities across various
                    games and applications with a single API call.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Real-time Updates
                  </h3>
                  <p className="text-foreground/80">
                    Get instant updates on username availability and
                    reservations across your connected platforms.
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-foreground/80" />
                  </div>
                  <div>
                    <h4 className="font-medium">API Request Example</h4>
                    <p className="text-sm text-gray-500">
                      Check username availability
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-600">
                    GET /api/v1/username/check
                  </div>
                  <div className="mt-3 text-gray-800">{'{'}</div>
                  <div className="ml-4 text-gray-800">
                    "username": "creator123"
                  </div>
                  <div className="text-gray-800">{'}'}</div>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full bg-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-600 transition-colors"
                >
                  Send Request
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

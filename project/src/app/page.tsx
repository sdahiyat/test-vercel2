import { Camera, Sparkles, Users, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <header className="px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Camera className="h-8 w-8 text-primary-600" />
            <h1 className="text-2xl font-bold text-secondary-900">PhotoBuddy</h1>
          </div>
          <div className="space-x-4">
            <button className="px-4 py-2 text-secondary-700 hover:text-secondary-900">
              Sign In
            </button>
            <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-secondary-900 mb-6">
            Share Photos. Get AI Feedback.
            <br />
            Connect with Photographers.
          </h2>
          <p className="text-xl text-secondary-600 mb-8 max-w-3xl mx-auto">
            PhotoBuddy combines social photo sharing with powerful AI that helps you improve your photography through intelligent feedback, editing suggestions, and automated tagging.
          </p>
          <button className="px-8 py-4 bg-primary-600 text-white text-lg rounded-lg hover:bg-primary-700">
            Start Sharing Photos
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Analysis</h3>
            <p className="text-secondary-600">
              Get instant feedback on composition, lighting, and style with our advanced AI photo analysis.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Photography Community</h3>
            <p className="text-secondary-600">
              Follow other photographers, discover new styles, and share your work with a passionate community.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Editing</h3>
            <p className="text-secondary-600">
              Receive personalized editing suggestions and auto-generated captions for your social media posts.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">Ready to improve your photography?</h3>
          <div className="text-center">
            <p className="text-secondary-600 mb-6">
              Join thousands of photographers already using PhotoBuddy to share, learn, and grow their skills.
            </p>
            <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              Create Your Account
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-secondary-200 px-6 py-8 mt-16">
        <div className="max-w-6xl mx-auto text-center text-secondary-500">
          <p>&copy; 2024 PhotoBuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
